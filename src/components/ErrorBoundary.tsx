import React, { Component, ErrorInfo, ReactNode } from 'react';
import { RefreshCw, AlertTriangle, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Seekho Application Error Caught by Boundary:', error, errorInfo);
    this.setState({ errorInfo });
  }

  private handleReset = () => {
    try {
      this.setState({ hasError: false, error: null, errorInfo: null });
      window.location.reload();
    } catch {
      window.location.href = '/';
    }
  };

  private handleClearCacheAndReset = () => {
    try {
      localStorage.removeItem('seekho_user_profile');
      sessionStorage.clear();
      this.setState({ hasError: false, error: null, errorInfo: null });
      window.location.reload();
    } catch {
      window.location.href = '/';
    }
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div 
          className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center p-4 font-sans"
          dir="rtl"
        >
          <div className="max-w-md w-full bg-slate-800 border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl text-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center mx-auto shadow-inner">
              <AlertTriangle className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-bold text-white font-arabic">
                سیکھو ایپ میں ایک عارضی مسئلہ پیش آیا ہے
              </h2>
              <p className="text-sm text-slate-300 font-arabic leading-relaxed">
                ہم آپ کا تمام ڈیٹا محفوظ رکھنے کی کوشش کرتے ہیں۔ صفحہ دوبارہ لوڈ کر کے ایپ جاری رکھیں۔
              </p>
            </div>

            {this.state.error && (
              <div className="p-3 bg-slate-950/60 rounded-xl text-left text-xs text-rose-300 font-mono overflow-auto max-h-24 border border-rose-900/40" dir="ltr">
                {this.state.error.message || String(this.state.error)}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={this.handleReset}
                className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30 font-arabic"
              >
                <RefreshCw className="w-4 h-4" />
                صفحہ دوبارہ لوڈ کریں
              </button>

              <button
                onClick={this.handleClearCacheAndReset}
                className="py-3 px-4 rounded-xl bg-slate-700 hover:bg-slate-600 text-slate-200 font-semibold text-sm transition flex items-center justify-center gap-2 font-arabic"
              >
                <Home className="w-4 h-4" />
                تازہ شروعات
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
