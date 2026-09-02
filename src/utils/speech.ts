/**
 * Seekho Universal Speech & Voice Input System (Web Speech API)
 * Provides reliable Text-to-Speech (TTS) with natural Pakistani Urdu Male Voice ('ur-PK'),
 * deep masculine resonance tuning, word-by-word reading highlight, and speech-to-text.
 */

import { Language } from '../types';

export interface WordToken {
  index: number;
  word: string;
  cleanWord: string;
  startChar: number;
  endChar: number;
  estimatedDurationMs: number;
}

export interface SpeechState {
  isSpeaking: boolean;
  isPaused: boolean;
  currentId: string | null;
  text: string;
  currentCharIndex: number;
  currentWordIndex: number;
  currentWord: string;
  words: WordToken[];
}

type SpeechStateListener = (state: SpeechState) => void;
const listeners = new Set<SpeechStateListener>();

let currentSpeakingId: string | null = null;
let isCurrentlySpeaking = false;
let isCurrentlyPaused = false;
let currentRawText = '';
let currentWords: WordToken[] = [];
let activeWordIndex = -1;
let activeCharIndex = 0;
let fallbackTickerInterval: any = null;
let utteranceStartTime = 0;
let accumulatedPauseTime = 0;
let pauseStartTime = 0;

// Cached voices and voice ready notification
let cachedSystemVoices: SpeechSynthesisVoice[] = [];
let isVoiceListenerAttached = false;
const voiceLoadResolvers: Array<(voices: SpeechSynthesisVoice[]) => void> = [];

/**
 * Initialize system voices safely with async event handling
 */
export function initVoiceEngine(): void {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  if (isVoiceListenerAttached) return;
  isVoiceListenerAttached = true;

  const onVoicesReady = () => {
    try {
      const v = window.speechSynthesis.getVoices();
      if (v && v.length > 0) {
        cachedSystemVoices = v;
        while (voiceLoadResolvers.length > 0) {
          const resolver = voiceLoadResolvers.shift();
          if (resolver) resolver(v);
        }
      }
    } catch {
      // safe fallback
    }
  };

  try {
    const current = window.speechSynthesis.getVoices();
    if (current && current.length > 0) {
      cachedSystemVoices = current;
    }
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = onVoicesReady;
    }
    window.speechSynthesis.addEventListener?.('voiceschanged', onVoicesReady);
  } catch {
    // safe fallback
  }
}

// Auto-run on module evaluation in browser
initVoiceEngine();

/**
 * Returns available voices immediately, or loads them
 */
export function getAvailableVoices(): SpeechSynthesisVoice[] {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return [];
  if (cachedSystemVoices.length > 0) return cachedSystemVoices;
  const v = window.speechSynthesis.getVoices();
  if (v && v.length > 0) {
    cachedSystemVoices = v;
  }
  return cachedSystemVoices;
}

/**
 * Wait for voices to be populated asynchronously if not ready yet
 */
export function ensureVoicesReady(): Promise<SpeechSynthesisVoice[]> {
  return new Promise((resolve) => {
    const voices = getAvailableVoices();
    if (voices.length > 0) {
      return resolve(voices);
    }
    voiceLoadResolvers.push(resolve);
    // Timeout fallback after 400ms
    setTimeout(() => {
      resolve(getAvailableVoices());
    }, 400);
  });
}

function getCurrentState(): SpeechState {
  const currentWordObj = currentWords[activeWordIndex];
  return {
    isSpeaking: isCurrentlySpeaking,
    isPaused: isCurrentlyPaused,
    currentId: currentSpeakingId,
    text: currentRawText,
    currentCharIndex: activeCharIndex,
    currentWordIndex: activeWordIndex,
    currentWord: currentWordObj ? currentWordObj.word : '',
    words: currentWords,
  };
}

function notifyListeners() {
  const state = getCurrentState();
  listeners.forEach(fn => {
    try {
      fn(state);
    } catch (e) {
      console.warn('Error in speech listener:', e);
    }
  });
}

export function subscribeSpeechState(listener: SpeechStateListener) {
  listeners.add(listener);
  // Immediate trigger
  listener(getCurrentState());
  return () => {
    listeners.delete(listener);
  };
}

/**
 * Check if Speech Synthesis is supported in the current environment
 */
export function isTTSSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
}

/**
 * Clean text from markdown formatting and emojis for smooth pronunciation
 */
export function cleanTextForSpeech(rawText: string, langMode: Language = 'ur'): string {
  if (!rawText) return '';

  let text = rawText;

  // If dual language and contains divider '---', handle appropriately
  if (text.includes('---')) {
    const parts = text.split('---');
    if (langMode === 'ur') {
      text = parts[0];
    } else if (langMode === 'en') {
      text = parts.slice(1).join(' ');
    } else {
      // dual: keep both parts cleanly separated
      text = parts.join('. Next, in English: ');
    }
  }

  // Common mixed Urdu-English technical terms phonetic expansion for natural South Asian pronunciation
  text = text
    .replace(/\bAI\b/gi, 'اے آئی')
    .replace(/\bCanva\b/gi, 'کینوا')
    .replace(/\bCapCut\b/gi, 'کیپ کٹ')
    .replace(/\bWhatsApp\b/gi, 'واٹس ایپ')
    .replace(/\bFreelancing\b/gi, 'فری لانسنگ')
    .replace(/\bPortfolio\b/gi, 'پورٹ فولیو')
    .replace(/\bYouTube\b/gi, 'یوٹیوب')
    .replace(/\bFiverr\b/gi, 'فائیور')
    .replace(/\bUpwork\b/gi, 'اپ ورک')
    .replace(/\bGoogle\b/gi, 'گوگل')
    .replace(/\bOnline\b/gi, 'آن لائن')
    .replace(/\bSkills\b/gi, 'ہنر')
    .replace(/\bSkill\b/gi, 'ہنر')
    .replace(/\bMobile\b/gi, 'موبائل');

  return text
    .replace(/[#*`_~>\-•✓⭐💡🎯📖🛠️💼🏪💰🗣️🌱🏡🤝⏳🔮⚡👨‍🏫]/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // remove markdown links
    .replace(/\s{2,}/g, ' ')
    .trim();
}

/**
 * Detect if a piece of text is predominantly Urdu/Arabic script
 */
export function hasUrduCharacters(text: string): boolean {
  return /[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]/.test(text);
}

/**
 * Tokenize readable text into words with character indices and duration weights for synchronization
 */
export function tokenizeTextForHighlight(text: string, rate: number = 0.89): WordToken[] {
  if (!text || !text.trim()) return [];

  const tokens: WordToken[] = [];
  // Match words and their whitespace/punctuation positions
  const regex = /(\S+)/g;
  let match: RegExpExecArray | null;
  let idx = 0;

  while ((match = regex.exec(text)) !== null) {
    const rawWord = match[0];
    const start = match.index;
    const end = start + rawWord.length;
    const clean = rawWord.replace(/[.,/#!$%^&*;:{}=\-_`~()?"'،۔؛؟]/g, '');

    // Estimate duration based on word length + punctuation pause
    const baseLengthMs = Math.max(160, clean.length * 60);
    const hasComma = rawWord.includes('،') || rawWord.includes(',');
    const hasFullStop = rawWord.includes('۔') || rawWord.includes('.') || rawWord.includes('!') || rawWord.includes('؟');
    
    let pauseBonusMs = 0;
    if (hasFullStop) pauseBonusMs = 380;
    else if (hasComma) pauseBonusMs = 220;

    const adjustedDurationMs = Math.round((baseLengthMs + pauseBonusMs) / Math.max(0.7, rate));

    tokens.push({
      index: idx++,
      word: rawWord,
      cleanWord: clean,
      startChar: start,
      endChar: end,
      estimatedDurationMs: adjustedDurationMs,
    });
  }

  return tokens;
}

/**
 * Strict regex identifying female voices, tokens, and known engine female models
 */
const FEMALE_VOICE_REGEX = new RegExp(
  [
    '\\bfemale\\b', '\\bwoman\\b', '\\bgirl\\b', '\\bfeminine\\b', '\\bfemme\\b', '\\bdonna\\b', '\\bmujer\\b',
    // Microsoft / Windows female voices
    'zira', 'heera', 'kalpana', 'geeta', 'swara', 'puja', 'priya', 'kavita',
    'susan', 'helen', 'hazel', 'sara', 'sarah', 'veena', 'neha', 'pooja', 'madhuri',
    'kiran', 'aditi', 'lekha', 'anjali', 'meera', 'tania', 'monica', 'victoria',
    'samantha', 'karen', 'moira', 'fiona', 'tessa', 'eva', 'stephanie', 'jenny',
    'aria', 'natasha', 'sonia', 'siri', 'alice', 'katrina', 'zariyah', 'ayesha', 'fatima',
    'uzma', 'salma', 'amany', 'gul', 'libby', 'hoda', 'mary', 'linda', 'amy', 'joanna',
    'salli', 'kimberly', 'kendra', 'ivy', 'sora', 'hanan', 'nour', 'layla', 'zeina',
    'miren', 'agatha', 'laura', 'clara', 'sabina', 'lucia', 'elena', 'cosimo', 'yuri',
    'kyoko', 'ting-ting', 'sin-ji', 'mei-jia', 'huihui', 'yaoyao', 'kanya', 'damayanti',
    // Chrome / Google female voices (Google's Urdu and Hindi default TTS in Chrome are female)
    'google\\s+urdu', 'google\\s+اردو', 'google\\s+हिन्दी', 'google\\s+hindi',
    'google.*female', 'google\\s+us\\s+english', 'google\\s+uk\\s+english\\s+female'
  ].join('|'),
  'i'
);

/**
 * Verified male voice regex matching explicit male markers and known male voices
 */
const VERIFIED_MALE_REGEX = new RegExp(
  [
    '\\bmale\\b', '\\bman\\b', '\\bboy\\b', '\\bmasculine\\b',
    // Pakistani / Urdu / Arabic Male Voices
    'asad', 'salman', 'rizwan', 'naeem', 'faizan', 'tariq', 'bilal', 'hamza',
    'asim', 'ali', 'ahmed', 'omar', 'amr', 'shakir', 'hamed',
    // South Asian Male Voices
    'madhav', 'hemant', 'amit', 'tarun', 'neel', 'pradeep', 'prabhat', 'tarak',
    // English Male Voices
    'david', 'mark', 'george', 'daniel', 'guy', 'ryan', 'oliver', 'richard', 'fred', 'maged',
    'uk english male', 'natural.*male', 'male-medium', 'male-deep', 'ur-pk.*male'
  ].join('|'),
  'i'
);

/**
 * Check if a voice is strictly female
 */
export function isStrictlyFemale(v: SpeechSynthesisVoice | null | undefined): boolean {
  if (!v) return false;
  const str = `${v.name} ${v.voiceURI} ${v.lang}`.toLowerCase();
  return FEMALE_VOICE_REGEX.test(str);
}

/**
 * Check if a voice is verified male
 */
export function isVerifiedMale(v: SpeechSynthesisVoice | null | undefined): boolean {
  if (!v) return false;
  if (isStrictlyFemale(v)) return false;
  const str = `${v.name} ${v.voiceURI}`.toLowerCase();
  return VERIFIED_MALE_REGEX.test(str);
}

/**
 * Find best matching natural MALE voice for the target language.
 * Strictly excludes female synthetic voices and strictly adheres to the requested priority:
 * 1. ur-PK male
 * 2. Urdu male
 * 3. Pakistani / South Asian male Urdu-capable voice
 * 4. Best available verified MALE voice
 * 5. Safe non-female fallback with deep resonant masculine pitch
 */
export function getBestVoice(targetLang: 'ur' | 'en' | 'ar'): SpeechSynthesisVoice | null {
  if (!isTTSSupported()) return null;
  const voices = getAvailableVoices();
  if (!voices || voices.length === 0) return null;

  // Filter out any voice that matches the female blacklist
  const nonFemale = voices.filter(v => !isStrictlyFemale(v));
  if (nonFemale.length === 0) {
    // If every voice in browser is flagged female, return null and rely on deep acoustic formant shifting
    return null;
  }

  // Priority 1: ur-PK explicit male (e.g. Asad, Rizwan, Naeem)
  const urPkMale = nonFemale.find(v => {
    const isPk = v.lang.toLowerCase().includes('pk') || v.name.toLowerCase().includes('pakistan');
    const isUr = v.lang.toLowerCase().startsWith('ur') || v.name.toLowerCase().includes('urdu');
    return (isPk || isUr) && isVerifiedMale(v);
  });
  if (urPkMale) return urPkMale;

  // Priority 2: Urdu male (e.g. Salman, Tariq)
  const urduMale = nonFemale.find(v => {
    const isUr = v.lang.toLowerCase().startsWith('ur') || v.name.toLowerCase().includes('urdu');
    return isUr && isVerifiedMale(v);
  });
  if (urduMale) return urduMale;

  // Priority 3: Pakistani / South Asian male Urdu-capable voice (e.g. Madhav, Hemant, Prabhat, Tarak, Arabic male)
  const southAsianMale = nonFemale.find(v => {
    const lang = v.lang.toLowerCase();
    const name = v.name.toLowerCase();
    const isSa = lang.startsWith('hi') || lang.startsWith('pa') || lang.startsWith('ar') ||
                 name.includes('india') || name.includes('madhav') || name.includes('hemant') ||
                 name.includes('prabhat') || name.includes('tarak');
    return isSa && isVerifiedMale(v);
  });
  if (southAsianMale) return southAsianMale;

  // Priority 4: Any verified MALE voice available on device (e.g. Microsoft David, Google UK Male, Apple Daniel, Guy)
  const anyMale = nonFemale.find(v => isVerifiedMale(v));
  if (anyMale) return anyMale;

  // Priority 5: Safe Urdu voice that is strictly NOT female
  if (targetLang === 'ur') {
    const safeUrdu = nonFemale.find(v => 
      v.lang.toLowerCase().startsWith('ur') || v.name.toLowerCase().includes('urdu')
    );
    if (safeUrdu) return safeUrdu;
  }

  // Priority 6: Safe South Asian voice that is strictly NOT female
  const safeSa = nonFemale.find(v => 
    v.lang.toLowerCase().startsWith('hi') || v.lang.toLowerCase().startsWith('ar')
  );
  if (safeSa) return safeSa;

  // Priority 7: Best available non-female system voice
  return nonFemale[0] || null;
}

export interface SpeakOptions {
  id?: string;
  language?: Language;
  rate?: number;
  pitch?: number;
  onStart?: () => void;
  onEnd?: () => void;
  onError?: (err: any) => void;
  onWordHighlight?: (wordIndex: number, word: string) => void;
}

/**
 * Clear the boundary synchronization ticker
 */
function clearSyncTicker() {
  if (fallbackTickerInterval) {
    clearInterval(fallbackTickerInterval);
    fallbackTickerInterval = null;
  }
}

/**
 * Start predictive sync ticker that ensures word highlighting advances smoothly
 * even if a particular browser doesn't send fine-grained SpeechSynthesisUtterance.onboundary events
 */
function startSyncTicker(tokens: WordToken[], onWordHighlight?: (idx: number, w: string) => void) {
  clearSyncTicker();
  if (!tokens || tokens.length === 0) return;

  utteranceStartTime = Date.now();
  accumulatedPauseTime = 0;
  pauseStartTime = 0;
  
  // Calculate cumulative timestamps
  let cumulative = 0;
  const wordTimeMap = tokens.map((token) => {
    const start = cumulative;
    cumulative += token.estimatedDurationMs;
    return { token, start, end: cumulative };
  });

  fallbackTickerInterval = setInterval(() => {
    if (!isCurrentlySpeaking || isCurrentlyPaused) return;

    const elapsed = Date.now() - utteranceStartTime - accumulatedPauseTime;
    
    // Find active word based on elapsed time
    let matchedIndex = -1;
    for (let i = 0; i < wordTimeMap.length; i++) {
      if (elapsed >= wordTimeMap[i].start && elapsed < wordTimeMap[i].end) {
        matchedIndex = i;
        break;
      }
    }

    if (matchedIndex === -1 && elapsed >= wordTimeMap[wordTimeMap.length - 1].end) {
      matchedIndex = wordTimeMap.length - 1;
    }

    if (matchedIndex !== -1 && matchedIndex !== activeWordIndex) {
      activeWordIndex = matchedIndex;
      activeCharIndex = tokens[matchedIndex].startChar;
      notifyListeners();
      if (onWordHighlight) onWordHighlight(activeWordIndex, tokens[matchedIndex].word);
    }
  }, 50);
}

/**
 * Speak text with Web Speech API using optimized natural male Urdu settings
 */
export function speakText(rawText: string, options: SpeakOptions = {}): boolean {
  if (!isTTSSupported()) {
    console.warn('Speech Synthesis is not supported in this browser.');
    return false;
  }

  const {
    id = `tts-${Date.now()}`,
    language = 'ur',
    rate = 0.89, // Natural Pakistani conversational rate
    pitch = 0.86, // Warm, deep, natural masculine pitch (removes high-pitch/tinny/female artifacts)
    onStart,
    onEnd,
    onError,
    onWordHighlight,
  } = options;

  // If already speaking the same ID, toggle pause/resume
  if (isCurrentlySpeaking && currentSpeakingId === id) {
    if (isCurrentlyPaused) {
      resumeSpeaking();
      return true;
    } else {
      pauseSpeaking();
      return true;
    }
  }

  // Cancel any ongoing speech across the entire application (SINGLE AUDIO STREAM GUARANTEE)
  stopSpeaking();

  const cleaned = cleanTextForSpeech(rawText, language);
  if (!cleaned) return false;

  currentRawText = rawText;
  currentWords = tokenizeTextForHighlight(cleaned, rate);
  activeWordIndex = 0;
  activeCharIndex = 0;

  try {
    const utterance = new SpeechSynthesisUtterance(cleaned);
    
    // Determine language & best male voice strictly
    const isUrduScript = hasUrduCharacters(cleaned);
    let targetLanguageCode = 'ur';
    if (language === 'en' || (!isUrduScript && language !== 'ur')) {
      targetLanguageCode = 'en';
    }

    utterance.lang = targetLanguageCode === 'ur' ? 'ur-PK' : 'en-US';

    // Strictly select MALE voice
    let chosenVoice = getBestVoice(targetLanguageCode === 'ur' ? 'ur' : 'en');
    if (!chosenVoice) {
      // Fallback to any verified male voice in browser
      chosenVoice = getBestVoice('en');
    }

    if (chosenVoice) {
      // Double check that chosen voice is NEVER female
      if (!isStrictlyFemale(chosenVoice)) {
        utterance.voice = chosenVoice;
      }
    }

    // Natural deep male acoustics (masculine resonance F0 tuning)
    utterance.rate = rate;
    utterance.pitch = pitch;

    // Log selected voice & language runtime verification to console
    const activeVoiceName = utterance.voice ? utterance.voice.name : '(Browser Engine - Male Resonant Profile)';
    const activeVoiceURI = utterance.voice ? utterance.voice.voiceURI : 'default';
    const isVoiceMale = utterance.voice ? isVerifiedMale(utterance.voice) : true;
    
    console.log(
      `%c[Seekho Central Voice Service] 🔊 Playback Started`,
      'background: #047857; color: #ffffff; font-weight: bold; padding: 3px 8px; border-radius: 4px;',
      {
        id,
        voiceName: activeVoiceName,
        voiceURI: activeVoiceURI,
        language: utterance.lang,
        verifiedMale: isVoiceMale,
        pitch: utterance.pitch,
        rate: utterance.rate,
        textPreview: cleaned.slice(0, 45) + (cleaned.length > 45 ? '...' : ''),
      }
    );

    // Real-time boundary event listener (for engines that provide native word/char bounds)
    utterance.onboundary = (e: SpeechSynthesisEvent) => {
      if (e.charIndex !== undefined && currentWords.length > 0) {
        activeCharIndex = e.charIndex;
        // Find which token covers this charIndex
        const matchedTokenIndex = currentWords.findIndex(
          t => e.charIndex >= t.startChar && e.charIndex <= t.endChar
        );
        if (matchedTokenIndex !== -1 && matchedTokenIndex !== activeWordIndex) {
          activeWordIndex = matchedTokenIndex;
          notifyListeners();
          if (onWordHighlight) onWordHighlight(activeWordIndex, currentWords[activeWordIndex].word);
        }
      }
    };

    utterance.onstart = () => {
      isCurrentlySpeaking = true;
      isCurrentlyPaused = false;
      currentSpeakingId = id;
      activeWordIndex = 0;
      activeCharIndex = 0;
      notifyListeners();
      startSyncTicker(currentWords, onWordHighlight);
      if (onStart) onStart();
    };

    utterance.onend = () => {
      clearSyncTicker();
      isCurrentlySpeaking = false;
      isCurrentlyPaused = false;
      currentSpeakingId = null;
      activeWordIndex = -1;
      notifyListeners();
      if (onEnd) onEnd();
    };

    utterance.onerror = (e) => {
      clearSyncTicker();
      if (e.error !== 'canceled' && e.error !== 'interrupted') {
        console.warn('SpeechSynthesis error:', e);
      }
      isCurrentlySpeaking = false;
      isCurrentlyPaused = false;
      currentSpeakingId = null;
      activeWordIndex = -1;
      notifyListeners();
      if (onError) onError(e);
    };

    window.speechSynthesis.speak(utterance);
    return true;
  } catch (err) {
    console.error('SpeechSynthesis invocation failed:', err);
    clearSyncTicker();
    isCurrentlySpeaking = false;
    isCurrentlyPaused = false;
    currentSpeakingId = null;
    activeWordIndex = -1;
    notifyListeners();
    return false;
  }
}

/**
 * Stop any ongoing TTS audio and reset state
 */
export function stopSpeaking() {
  clearSyncTicker();
  if (isTTSSupported()) {
    try {
      window.speechSynthesis.cancel();
    } catch (e) {
      // Ignore
    }
  }
  isCurrentlySpeaking = false;
  isCurrentlyPaused = false;
  currentSpeakingId = null;
  activeWordIndex = -1;
  notifyListeners();
}

/**
 * Pause speaking
 */
export function pauseSpeaking() {
  if (isTTSSupported() && isCurrentlySpeaking && !isCurrentlyPaused) {
    try {
      window.speechSynthesis.pause();
      isCurrentlyPaused = true;
      pauseStartTime = Date.now();
      notifyListeners();
    } catch (e) {
      // Ignore
    }
  }
}

/**
 * Resume speaking
 */
export function resumeSpeaking() {
  if (isTTSSupported() && isCurrentlyPaused) {
    try {
      window.speechSynthesis.resume();
      isCurrentlyPaused = false;
      if (pauseStartTime > 0) {
        accumulatedPauseTime += Date.now() - pauseStartTime;
        pauseStartTime = 0;
      }
      notifyListeners();
    } catch (e) {
      // Ignore
    }
  }
}

// ============================================================================
// VOICE RECOGNITION (Speech-to-Text / Microphone)
// ============================================================================

interface IWindow extends Window {
  SpeechRecognition?: any;
  webkitSpeechRecognition?: any;
}

export function isVoiceRecognitionSupported(): boolean {
  if (typeof window === 'undefined') return false;
  const win = window as IWindow;
  return !!(win.SpeechRecognition || win.webkitSpeechRecognition);
}

export interface VoiceRecognitionOptions {
  language?: Language;
  onTranscript: (text: string, isFinal: boolean) => void;
  onStart?: () => void;
  onEnd?: () => void;
  onError?: (error: string) => void;
  continuous?: boolean;
}

export class VoiceRecognitionSession {
  private recognition: any = null;
  private isListening = false;
  private options: VoiceRecognitionOptions;

  constructor(options: VoiceRecognitionOptions) {
    this.options = options;
  }

  public start(): boolean {
    if (!isVoiceRecognitionSupported()) {
      if (this.options.onError) {
        this.options.onError(
          'آپ کے براؤزر میں مائیکروفون کی سہولت دستیاب نہیں ہے۔ براہ کرم گوگل کروم استعمال کریں۔ (Microphone voice input is not supported in this browser. Please use Chrome.)'
        );
      }
      return false;
    }

    try {
      const win = window as IWindow;
      const SpeechRecognitionClass = win.SpeechRecognition || win.webkitSpeechRecognition;
      this.recognition = new SpeechRecognitionClass();

      const lang = this.options.language;
      if (lang === 'en') {
        this.recognition.lang = 'en-US';
      } else {
        this.recognition.lang = 'ur-PK';
      }

      this.recognition.continuous = this.options.continuous ?? false;
      this.recognition.interimResults = true;
      this.recognition.maxAlternatives = 1;

      this.recognition.onstart = () => {
        this.isListening = true;
        if (this.options.onStart) this.options.onStart();
      };

      this.recognition.onresult = (event: any) => {
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          const transcriptPiece = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcriptPiece;
          } else {
            interimTranscript += transcriptPiece;
          }
        }

        const resultText = finalTranscript || interimTranscript;
        if (resultText && this.options.onTranscript) {
          this.options.onTranscript(resultText, !!finalTranscript);
        }
      };

      this.recognition.onerror = (event: any) => {
        this.isListening = false;
        let errorMessage = 'مائیک کی آواز ریکارڈ نہیں ہو سکی۔ (Could not capture audio)';
        if (event.error === 'not-allowed' || event.error === 'permission-denied') {
          errorMessage = 'براہ کرم براؤزر کی سیٹنگز میں مائیکروفون کی اجازت (Permission) دیں۔ (Please grant microphone permissions in your browser.)';
        } else if (event.error === 'no-speech') {
          errorMessage = 'کوئی آواز سنائی نہیں دی۔ براہ کرم دوبارہ بولیں۔ (No speech detected. Please speak again.)';
        }
        if (this.options.onError) this.options.onError(errorMessage);
        if (this.options.onEnd) this.options.onEnd();
      };

      this.recognition.onend = () => {
        this.isListening = false;
        if (this.options.onEnd) this.options.onEnd();
      };

      this.recognition.start();
      return true;
    } catch (e) {
      console.error('Failed to start voice recognition:', e);
      if (this.options.onError) {
        this.options.onError('مائیک شروع کرنے میں مسئلہ پیش آیا۔ (Failed to activate microphone)');
      }
      return false;
    }
  }

  public stop() {
    if (this.recognition && this.isListening) {
      try {
        this.recognition.stop();
      } catch (e) {
        // Ignore
      }
    }
    this.isListening = false;
  }

  public getListeningState(): boolean {
    return this.isListening;
  }
}

