import React, { useState, useEffect, useRef } from 'react';
import { 
  Volume2, 
  VolumeX, 
  Pause, 
  Play, 
  Mic, 
  MicOff, 
  Radio, 
  AlertCircle,
  Sparkles
} from 'lucide-react';
import { Language } from '../types';
import { 
  speakText, 
  stopSpeaking, 
  pauseSpeaking, 
  resumeSpeaking, 
  subscribeSpeechState, 
  isTTSSupported,
  isVoiceRecognitionSupported,
  VoiceRecognitionSession 
} from '../utils/speech';

// ============================================================================
// AUDIO READER BUTTON (پڑھ کے سنائیں / Listen to Audio)
// ============================================================================

export interface AudioReaderButtonProps {
  text: string;
  id?: string;
  title?: string;
  language?: Language;
  className?: string;
  variant?: 'header' | 'pill' | 'ghost' | 'floating' | 'card';
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  labelUr?: string;
  labelEn?: string;
}

export const AudioReaderButton: React.FC<AudioReaderButtonProps> = ({
  text,
  id: customId,
  title,
  language = 'ur' as Language,
  className = '',
  variant = 'header',
  size = 'md',
  showLabel = false,
  labelUr = 'پڑھ کے سنائیں',
  labelEn = 'Listen Audio',
}) => {
  const buttonId = useRef(customId || `audio-btn-${Math.random().toString(36).substring(2, 9)}`).current;
  const [speechState, setSpeechState] = useState<{ isSpeaking: boolean; isPaused: boolean; currentId: string | null }>({
    isSpeaking: false,
    isPaused: false,
    currentId: null,
  });

  const isUrdu = language === 'ur';
  const isDual = language === 'dual';
  const isEn = language === 'en';

  useEffect(() => {
    const unsubscribe = subscribeSpeechState(setSpeechState);
    return () => {
      unsubscribe();
    };
  }, []);

  const isCurrentActive = speechState.isSpeaking && speechState.currentId === buttonId;
  const isCurrentPaused = speechState.isPaused && speechState.currentId === buttonId;

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();

    if (!text || !text.trim()) return;

    if (isCurrentActive) {
      if (isCurrentPaused) {
        resumeSpeaking();
      } else {
        pauseSpeaking();
      }
    } else {
      speakText(text, {
        id: buttonId,
        language,
      });
    }
  };

  const handleStop = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    stopSpeaking();
  };

  if (!isTTSSupported()) {
    return null;
  }

  // Size styling
  const sizeClasses = {
    sm: 'p-1.5 text-xs',
    md: 'p-2 text-sm',
    lg: 'px-4 py-2 text-base min-h-[44px]',
  }[size];

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  }[size];

  // Header button style (Used at top of modals & journey cards)
  if (variant === 'header') {
    return (
      <div className="inline-flex items-center gap-1.5 z-10">
        <button
          type="button"
          onClick={handleToggle}
          title={
            isCurrentActive 
              ? (isCurrentPaused ? (isUrdu ? 'دوبارہ چلائیں' : 'Resume Audio') : (isUrdu ? 'آواز روکیں' : 'Pause Audio'))
              : (isUrdu ? 'پڑھ کے سنائیں' : 'Listen with Audio Reader')
          }
          className={`relative group inline-flex items-center gap-2 rounded-full font-bold transition-all shadow-xs ${
            isCurrentActive
              ? isCurrentPaused
                ? 'bg-amber-500 text-white hover:bg-amber-600 ring-2 ring-amber-300'
                : 'bg-emerald-600 text-white hover:bg-emerald-700 ring-2 ring-emerald-300 animate-pulse'
              : 'bg-white/90 hover:bg-white text-emerald-900 border border-emerald-300/80 hover:border-emerald-500'
          } ${sizeClasses} ${className}`}
        >
          {isCurrentActive ? (
            isCurrentPaused ? (
              <Play className={`${iconSizes} fill-current`} />
            ) : (
              <Pause className={`${iconSizes} fill-current`} />
            )
          ) : (
            <Volume2 className={`${iconSizes} text-emerald-700 group-hover:scale-110 transition-transform`} />
          )}

          {(showLabel || isCurrentActive) && (
            <span className="font-arabic text-[14px] sm:text-[15px] font-bold px-1 select-none">
              {isCurrentActive ? (
                isCurrentPaused ? (
                  isDual ? 'جاری رکھیں (Resume)' : isUrdu ? 'جاری رکھیں' : 'Resume'
                ) : (
                  isDual ? 'روکیں (Pause)' : isUrdu ? 'روکیں' : 'Pause'
                )
              ) : (
                isDual ? `${labelUr} (${labelEn})` : isUrdu ? labelUr : labelEn
              )}
            </span>
          )}

          {/* Soundwave animation indicator when speaking */}
          {isCurrentActive && !isCurrentPaused && (
            <span className="flex items-center gap-0.5 ml-1">
              <span className="w-1 h-3 bg-white rounded-full animate-bounce [animation-delay:0ms]"></span>
              <span className="w-1 h-4 bg-white rounded-full animate-bounce [animation-delay:150ms]"></span>
              <span className="w-1 h-2 bg-white rounded-full animate-bounce [animation-delay:300ms]"></span>
            </span>
          )}
        </button>

        {isCurrentActive && (
          <button
            type="button"
            onClick={handleStop}
            title={isUrdu ? 'آواز بند کریں' : 'Stop Audio'}
            className="p-2 rounded-full bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200 transition"
          >
            <VolumeX className="w-4 h-4" />
          </button>
        )}
      </div>
    );
  }

  // Pill badge style
  if (variant === 'pill') {
    return (
      <button
        type="button"
        onClick={handleToggle}
        className={`inline-flex items-center gap-1.5 rounded-full font-bold transition font-arabic ${
          isCurrentActive
            ? 'bg-emerald-700 text-white ring-2 ring-emerald-400'
            : 'bg-emerald-100/90 text-emerald-900 hover:bg-emerald-200 border border-emerald-300'
        } ${sizeClasses} ${className}`}
      >
        {isCurrentActive ? (
          isCurrentPaused ? <Play className="w-4 h-4 fill-current" /> : <Pause className="w-4 h-4 fill-current" />
        ) : (
          <Volume2 className="w-4 h-4" />
        )}
        <span className="text-[13.5px] sm:text-[14px]">
          {isCurrentActive ? (
            isCurrentPaused ? (isUrdu ? 'جاری رکھیں' : 'Resume') : (isUrdu ? 'روکیں' : 'Pause')
          ) : (
            isDual ? `${labelUr} / ${labelEn}` : isUrdu ? labelUr : labelEn
          )}
        </span>
      </button>
    );
  }

  // Card or Ghost style
  return (
    <button
      type="button"
      onClick={handleToggle}
      title={isUrdu ? 'پڑھ کے سنائیں' : 'Listen with Audio Reader'}
      className={`inline-flex items-center justify-center rounded-xl transition ${
        isCurrentActive
          ? 'bg-emerald-600 text-white shadow-md'
          : 'bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900'
      } ${sizeClasses} ${className}`}
    >
      {isCurrentActive ? (
        isCurrentPaused ? <Play className={iconSizes} /> : <Pause className={iconSizes} />
      ) : (
        <Volume2 className={iconSizes} />
      )}
    </button>
  );
};

// ============================================================================
// VOICE INPUT / MIC BUTTON (مائیک کا آپشن / بول کر لکھیں)
// ============================================================================

export interface VoiceInputButtonProps {
  onTranscript: (spokenText: string) => void;
  language?: Language;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  tooltipUr?: string;
  tooltipEn?: string;
}

export const VoiceInputButton: React.FC<VoiceInputButtonProps> = ({
  onTranscript,
  language = 'ur' as Language,
  className = '',
  size = 'md',
  tooltipUr = 'مائیک سے بول کر لکھیں',
  tooltipEn = 'Speak to type',
}) => {
  const [isListening, setIsListening] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const sessionRef = useRef<VoiceRecognitionSession | null>(null);

  const isUrdu = language === 'ur';
  const isDual = language === 'dual';

  useEffect(() => {
    return () => {
      if (sessionRef.current) {
        sessionRef.current.stop();
      }
    };
  }, []);

  const handleToggleListening = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setErrorMessage(null);

    if (isListening) {
      if (sessionRef.current) {
        sessionRef.current.stop();
      }
      setIsListening(false);
    } else {
      if (!isVoiceRecognitionSupported()) {
        setErrorMessage(
          isUrdu
            ? 'مائیکروفون اس براؤزر میں سپورٹ نہیں ہے۔ گوگل کروم استعمال کریں۔'
            : 'Speech recognition is not supported in this browser. Please use Chrome.'
        );
        setTimeout(() => setErrorMessage(null), 4000);
        return;
      }

      sessionRef.current = new VoiceRecognitionSession({
        language,
        onStart: () => setIsListening(true),
        onEnd: () => setIsListening(false),
        onTranscript: (text, isFinal) => {
          onTranscript(text);
          if (isFinal) {
            setIsListening(false);
          }
        },
        onError: (err) => {
          setIsListening(false);
          setErrorMessage(err);
          setTimeout(() => setErrorMessage(null), 5000);
        },
      });

      const started = sessionRef.current.start();
      if (!started) {
        setIsListening(false);
      }
    }
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  }[size];

  const sizeClasses = {
    sm: 'p-1.5',
    md: 'p-2.5',
    lg: 'p-3.5',
  }[size];

  return (
    <div className="relative inline-flex items-center">
      <button
        type="button"
        onClick={handleToggleListening}
        title={
          isListening
            ? (isUrdu ? 'سننا بند کریں' : 'Stop Listening')
            : (isDual ? `${tooltipUr} (${tooltipEn})` : isUrdu ? tooltipUr : tooltipEn)
        }
        className={`relative rounded-xl font-bold transition-all flex items-center justify-center ${
          isListening
            ? 'bg-rose-600 text-white ring-4 ring-rose-300 animate-pulse shadow-lg scale-105'
            : 'bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 border border-slate-200 hover:border-emerald-300'
        } ${sizeClasses} ${className}`}
      >
        {isListening ? (
          <Mic className={`${iconSizes} animate-bounce text-white`} />
        ) : (
          <Mic className={`${iconSizes}`} />
        )}

        {/* Live Listening Ping Badge */}
        {isListening && (
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
          </span>
        )}
      </button>

      {/* Floating active listening or error toast */}
      {isListening && (
        <div className="absolute bottom-full mb-2 right-0 bg-rose-950/95 text-white px-3 py-1.5 rounded-xl text-xs font-bold font-arabic shadow-xl z-50 flex items-center gap-1.5 whitespace-nowrap border border-rose-500/40">
          <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping"></span>
          <span>{isDual ? 'سن رہا ہوں... بولیے (Listening... speak now)' : isUrdu ? 'سن رہا ہوں... بولیے' : 'Listening... speak now'}</span>
        </div>
      )}

      {errorMessage && (
        <div className="absolute bottom-full mb-2 right-0 bg-slate-900 text-amber-200 p-2.5 rounded-xl text-xs font-medium font-arabic shadow-2xl z-50 flex items-start gap-1.5 max-w-xs border border-amber-500/50">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div className="leading-snug">{errorMessage}</div>
        </div>
      )}
    </div>
  );
};

// ============================================================================
// ACTIVE SPEECH HOOK (Tracks when any element or specific ID is speaking)
// ============================================================================

export function useActiveSpeech(targetId?: string) {
  const [speechState, setSpeechState] = useState<{ isSpeaking: boolean; isPaused: boolean; currentId: string | null }>({
    isSpeaking: false,
    isPaused: false,
    currentId: null,
  });

  useEffect(() => {
    return subscribeSpeechState(setSpeechState);
  }, []);

  const isActive = speechState.isSpeaking && (targetId ? speechState.currentId === targetId : true);
  const isPaused = speechState.isPaused && (targetId ? speechState.currentId === targetId : true);
  return { ...speechState, isActive, isPaused };
}

// ============================================================================
// FIELD-LEVEL AUDIO SPEAKER BUTTON (🔊 Interactive speaker for labels & fields)
// ============================================================================

export interface FieldAudioSpeakerProps {
  id: string;
  text: string;
  language?: Language;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  titleUr?: string;
  titleEn?: string;
}

export const FieldAudioSpeaker: React.FC<FieldAudioSpeakerProps> = ({
  id,
  text,
  language = 'ur' as Language,
  className = '',
  size = 'sm',
  titleUr = 'آواز سنیں',
  titleEn = 'Listen Audio',
}) => {
  const { isActive, isPaused } = useActiveSpeech(id);

  if (!isTTSSupported()) return null;

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (isActive) {
      if (isPaused) {
        resumeSpeaking();
      } else {
        pauseSpeaking();
      }
    } else {
      speakText(text, { id, language });
    }
  };

  const isUrdu = language === 'ur';
  const isDual = language === 'dual';

  const sizeClasses = {
    xs: 'w-6 h-6 p-0.5',
    sm: 'w-7 h-7 sm:w-8 sm:h-8 p-1',
    md: 'w-8 h-8 sm:w-9 sm:h-9 p-1.5',
    lg: 'w-10 h-10 p-2',
  }[size];

  const iconSizes = {
    xs: 'w-3.5 h-3.5',
    sm: 'w-4 h-4',
    md: 'w-4.5 h-4.5',
    lg: 'w-5 h-5',
  }[size];

  return (
    <button
      id={`field-speaker-${id}`}
      type="button"
      onClick={handleClick}
      title={
        isActive
          ? isPaused
            ? isUrdu ? 'دوبارہ چلائیں' : 'Resume Audio'
            : isUrdu ? 'آواز روکیں' : 'Pause Audio'
          : isDual ? `${titleUr} (${titleEn})` : isUrdu ? titleUr : titleEn
      }
      className={`inline-flex items-center justify-center rounded-full transition-all duration-200 shrink-0 select-none ${
        isActive
          ? isPaused
            ? 'bg-amber-500 text-white ring-2 ring-amber-300 scale-105 shadow-sm'
            : 'bg-emerald-600 text-white ring-2 ring-emerald-300 scale-110 shadow-md animate-pulse'
          : 'bg-emerald-100/80 hover:bg-emerald-200 text-emerald-800 border border-emerald-300 hover:border-emerald-500 hover:scale-105 shadow-2xs'
      } ${sizeClasses} ${className}`}
      aria-label="Play field audio"
    >
      {isActive ? (
        isPaused ? (
          <Play className={`${iconSizes} fill-current`} />
        ) : (
          <Volume2 className={`${iconSizes} animate-bounce`} />
        )
      ) : (
        <Volume2 className={`${iconSizes}`} />
      )}
    </button>
  );
};

