/**
 * Seekho Universal Speech & Voice Input System (Web Speech API)
 * Provides reliable Text-to-Speech (TTS) and Speech-to-Text (Mic Input)
 * with robust Pakistani Urdu male voice ('ur-PK') and English male voice ('en-US') support.
 */

import { Language } from '../types';

// Speech Synthesis State Listener
type SpeechStateListener = (state: { isSpeaking: boolean; isPaused: boolean; currentId: string | null }) => void;
const listeners = new Set<SpeechStateListener>();

let currentSpeakingId: string | null = null;
let isCurrentlySpeaking = false;
let isCurrentlyPaused = false;

// Preload voices on load
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  window.speechSynthesis.getVoices();
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = () => {
      window.speechSynthesis.getVoices();
    };
  }
}

function notifyListeners() {
  listeners.forEach(fn => fn({
    isSpeaking: isCurrentlySpeaking,
    isPaused: isCurrentlyPaused,
    currentId: currentSpeakingId,
  }));
}

export function subscribeSpeechState(listener: SpeechStateListener) {
  listeners.add(listener);
  // Immediate trigger
  listener({
    isSpeaking: isCurrentlySpeaking,
    isPaused: isCurrentlyPaused,
    currentId: currentSpeakingId,
  });
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
 * Find best matching MALE voice for the target language (Prioritizing Pakistani/South Asian Male)
 */
export function getBestVoice(targetLang: 'ur' | 'en' | 'ar'): SpeechSynthesisVoice | null {
  if (!isTTSSupported()) return null;
  const voices = window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return null;

  const femaleKeywords = ['female', 'woman', 'zira', 'heera', 'kalpana', 'geeta', 'swara', 'puja', 'priya', 'kavita', 'susan', 'helen', 'hazel', 'sara', 'veena', 'neha', 'pooja', 'madhuri', 'kiran', 'aditi', 'lekha', 'anjali', 'meera', 'tania', 'monica', 'victoria', 'samantha', 'karen', 'moira', 'fiona', 'tessa'];
  const isFemaleVoice = (v: SpeechSynthesisVoice) => femaleKeywords.some(kw => v.name.toLowerCase().includes(kw));

  if (targetLang === 'ur' || targetLang === 'ar') {
    const urduMaleVoice = voices.find(v => 
      (v.lang.startsWith('ur') || v.lang.includes('PK') || v.lang.includes('IN') || v.lang.startsWith('hi')) &&
      (v.name.toLowerCase().includes('male') || v.name.toLowerCase().includes('man') || v.name.toLowerCase().includes('rizwan') || v.name.toLowerCase().includes('naeem') || v.name.toLowerCase().includes('faizan') || v.name.toLowerCase().includes('salman')) &&
      !isFemaleVoice(v)
    );
    if (urduMaleVoice) return urduMaleVoice;

    const urduVoice = voices.find(v => 
      (v.lang.startsWith('ur') || v.lang.includes('PK') || v.lang.includes('Urdu')) &&
      !isFemaleVoice(v)
    );
    if (urduVoice) return urduVoice;

    const southAsianMale = voices.find(v => 
      (v.lang.startsWith('hi') || v.lang.startsWith('ar') || v.lang.includes('India') || v.lang.includes('Pakistan') || v.lang.includes('South Asia')) &&
      !isFemaleVoice(v)
    );
    if (southAsianMale) return southAsianMale;

    const fallbackUrdu = voices.find(v => (v.lang.startsWith('hi') || v.lang.startsWith('ar') || v.lang.startsWith('ur')) && !isFemaleVoice(v));
    if (fallbackUrdu) return fallbackUrdu;
  }

  if (targetLang === 'en') {
    const enMale = voices.find(v => 
      v.lang.startsWith('en') && 
      (v.name.toLowerCase().includes('male') || v.name.toLowerCase().includes('man') || v.name.toLowerCase().includes('david') || v.name.toLowerCase().includes('daniel') || v.name.toLowerCase().includes('ryan') || v.name.toLowerCase().includes('oliver') || v.name.toLowerCase().includes('george')) &&
      !isFemaleVoice(v)
    );
    if (enMale) return enMale;

    const enVoice = voices.find(v => v.lang.startsWith('en') && !isFemaleVoice(v));
    if (enVoice) return enVoice;
  }

  const anyNonFemale = voices.find(v => !isFemaleVoice(v));
  return anyNonFemale || voices[0] || null;
}

export interface SpeakOptions {
  id?: string;
  language?: Language;
  rate?: number;
  pitch?: number;
  onStart?: () => void;
  onEnd?: () => void;
  onError?: (err: any) => void;
}

/**
 * Speak text with Web Speech API
 */
export function speakText(rawText: string, options: SpeakOptions = {}): boolean {
  if (!isTTSSupported()) {
    console.warn('Speech Synthesis is not supported in this browser.');
    return false;
  }

  const {
    id = `tts-${Date.now()}`,
    language = 'ur',
    rate = 0.88,
    pitch = 0.88,
    onStart,
    onEnd,
    onError,
  } = options;

  // If already speaking the same ID, toggle pause/resume or stop
  if (isCurrentlySpeaking && currentSpeakingId === id) {
    if (isCurrentlyPaused) {
      window.speechSynthesis.resume();
      isCurrentlyPaused = false;
      notifyListeners();
      return true;
    } else {
      window.speechSynthesis.pause();
      isCurrentlyPaused = true;
      notifyListeners();
      return true;
    }
  }

  // Cancel any ongoing speech
  stopSpeaking();

  const cleaned = cleanTextForSpeech(rawText, language);
  if (!cleaned) return false;

  try {
    const utterance = new SpeechSynthesisUtterance(cleaned);
    
    // Determine language tag
    const isUrduScript = hasUrduCharacters(cleaned);
    if (language === 'ur' || (language === 'dual' && isUrduScript)) {
      utterance.lang = 'ur-PK';
      const voice = getBestVoice('ur');
      if (voice) utterance.voice = voice;
    } else if (language === 'en' || !isUrduScript) {
      utterance.lang = 'en-US';
      const voice = getBestVoice('en');
      if (voice) utterance.voice = voice;
    } else {
      utterance.lang = 'ur-PK';
    }

    utterance.rate = rate;
    utterance.pitch = pitch;

    utterance.onstart = () => {
      isCurrentlySpeaking = true;
      isCurrentlyPaused = false;
      currentSpeakingId = id;
      notifyListeners();
      if (onStart) onStart();
    };

    utterance.onend = () => {
      isCurrentlySpeaking = false;
      isCurrentlyPaused = false;
      currentSpeakingId = null;
      notifyListeners();
      if (onEnd) onEnd();
    };

    utterance.onerror = (e) => {
      // Ignore synthesis cancel errors
      if (e.error !== 'canceled' && e.error !== 'interrupted') {
        console.warn('SpeechSynthesis error:', e);
      }
      isCurrentlySpeaking = false;
      isCurrentlyPaused = false;
      currentSpeakingId = null;
      notifyListeners();
      if (onError) onError(e);
    };

    window.speechSynthesis.speak(utterance);
    return true;
  } catch (err) {
    console.error('SpeechSynthesis invocation failed:', err);
    isCurrentlySpeaking = false;
    isCurrentlyPaused = false;
    currentSpeakingId = null;
    notifyListeners();
    return false;
  }
}

/**
 * Stop any ongoing TTS audio
 */
export function stopSpeaking() {
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
      notifyListeners();
    } catch (e) {
      // Ignore
    }
  }
}

// ============================================================================
// VOICE RECOGNITION (Speech-to-Text / Microphone)
// ============================================================================

// Declare SpeechRecognition interface for TypeScript
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

      // Configure language: Urdu 'ur-PK' or English 'en-US'
      const lang = this.options.language;
      if (lang === 'en') {
        this.recognition.lang = 'en-US';
      } else {
        // Default to ur-PK for Urdu and Dual modes
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
