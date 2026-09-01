import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Heart, 
  MessageSquare, 
  Share2, 
  PlusCircle, 
  Sparkles, 
  ShieldAlert, 
  CheckCircle2, 
  Flag,
  Filter,
  UserCheck,
  Send,
  HeartHandshake
} from 'lucide-react';
import { CommunityPost, Language, UserProfile } from '../types';
import { COMMUNITY_POSTS_DATA, UI_TRANSLATIONS } from '../data/mockData';

interface CommunityViewProps {
  language: Language;
  userProfile: UserProfile;
}

export const CommunityView: React.FC<CommunityViewProps> = ({
  language,
  userProfile,
}) => {
  const t = UI_TRANSLATIONS[language];
  const [posts, setPosts] = useState<CommunityPost[]>(COMMUNITY_POSTS_DATA);
  const [activeFilter, setActiveFilter] = useState<'all' | 'projects' | 'elders' | 'local'>('all');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newCategory, setNewCategory] = useState('Community Development');
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});
  const [reportedPostId, setReportedPostId] = useState<string | null>(null);

  // Sync modal dismissal with Android system back button & Escape key
  useEffect(() => {
    if (!showCreateModal) return;

    const handlePopState = () => {
      setShowCreateModal(false);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowCreateModal(false);
      }
    };

    window.history.pushState({ modal: 'community-create' }, '');
    window.addEventListener('popstate', handlePopState);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showCreateModal]);

  const handleLike = (postId: string) => {
    setLikedPosts(prev => {
      const isLiked = !!prev[postId];
      setPosts(current => current.map(p => p.id === postId ? { ...p, likes: p.likes + (isLiked ? -1 : 1) } : p));
      return { ...prev, [postId]: !isLiked };
    });
  };

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;

    const newPost: CommunityPost = {
      id: `post-${Date.now()}`,
      authorName: userProfile.name || (language === 'ur' ? 'معزز ساتھی' : 'Learner'),
      authorAgeGroup: userProfile.ageGroup,
      authorLocation: userProfile.village || (language === 'ur' ? 'ڈوبے، برنالہ' : 'Dobay, Barnala'),
      isElder: userProfile.ageGroup === '61-70' || userProfile.ageGroup === '70+' || userProfile.ageGroup === '46-60',
      titleUrdu: newTitle,
      titleEn: newTitle,
      contentUrdu: newContent,
      contentEn: newContent,
      category: newCategory,
      categoryUrdu: newCategory,
      likes: 1,
      commentsCount: 0,
      timestamp: language === 'ur' ? 'ابھی ابھی' : 'Just now',
    };

    setPosts([newPost, ...posts]);
    setNewTitle('');
    setNewContent('');
    setShowCreateModal(false);
  };

  const filteredPosts = posts.filter(post => {
    if (activeFilter === 'elders') return post.isElder;
    if (activeFilter === 'projects') return !!post.practicalOutcomeUrdu;
    if (activeFilter === 'local') return post.authorLocation.includes('Barnala') || post.authorLocation.includes('برنالہ') || post.authorLocation.includes('ڈوبے');
    return true;
  });

  return (
    <div className="space-y-6 pb-24 max-w-4xl mx-auto px-3 sm:px-6 pt-2">
      {/* Header & Post Creator Trigger */}
      <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-black text-slate-900">
              {language === 'ur' ? 'سیکھو برادری و خدمتِ خلق' : 'Seekho Community Hub'}
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            {language === 'ur'
              ? 'مفید علم شیئر کریں، مکمل پروجیکٹس دکھائیں اور بزرگوں کے تجربات سے فائدہ اٹھائیں'
              : 'Share useful skills, showcase practical projects, and learn together.'}
          </p>
        </div>

        <button
          id="open-create-post-modal-btn"
          onClick={() => setShowCreateModal(true)}
          className="px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm shadow-xs flex items-center justify-center gap-2 self-start sm:self-auto"
        >
          <PlusCircle className="w-4 h-4" />
          <span>{language === 'ur' ? 'نیا علم یا پروجیکٹ شیئر کریں' : 'Share Skill / Project'}</span>
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        <button
          onClick={() => setActiveFilter('all')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition ${
            activeFilter === 'all' ? 'bg-emerald-800 text-white shadow-xs' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          {language === 'ur' ? 'تمام پوسٹس' : 'All Posts'}
        </button>
        <button
          onClick={() => setActiveFilter('projects')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition ${
            activeFilter === 'projects' ? 'bg-emerald-800 text-white shadow-xs' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          {language === 'ur' ? 'عملی پروجیکٹس' : 'Completed Projects'}
        </button>
        <button
          onClick={() => setActiveFilter('elders')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition ${
            activeFilter === 'elders' ? 'bg-emerald-800 text-white shadow-xs' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          {language === 'ur' ? 'بزرگوں کی رہنمائی' : 'Elder Mentors'}
        </button>
        <button
          onClick={() => setActiveFilter('local')}
          className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition ${
            activeFilter === 'local' ? 'bg-emerald-800 text-white shadow-xs' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          {language === 'ur' ? 'مقامی علاقہ (برنالہ/ڈوبے)' : 'Local Pilot Area'}
        </button>
      </div>

      {/* Posts Stream */}
      <div className="space-y-4">
        {filteredPosts.map((post) => {
          const isLiked = !!likedPosts[post.id];

          return (
            <div
              key={post.id}
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-3.5 hover:border-emerald-300/80 transition"
            >
              {/* Post Author Info */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm text-white shrink-0 ${
                    post.isElder ? 'bg-amber-600' : 'bg-emerald-700'
                  }`}>
                    {post.authorName.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm sm:text-base font-bold text-slate-900">{post.authorName}</h4>
                      {post.isElder && (
                        <span className="text-[10px] bg-amber-100 text-amber-900 font-bold px-2 py-0.5 rounded-full">
                          {language === 'ur' ? 'بزرگ استاد' : 'Elder Mentor'}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-500">
                      {post.authorLocation} • {post.timestamp}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setReportedPostId(post.id)}
                  title="Report inappropriate content"
                  className="text-slate-400 hover:text-rose-600 p-1.5 rounded-lg hover:bg-slate-100 transition"
                >
                  <Flag className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Title & Content */}
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  {language === 'ur' ? post.titleUrdu : post.titleEn}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line font-arabic">
                  {language === 'ur' ? post.contentUrdu : post.contentEn}
                </p>
              </div>

              {/* Practical Outcome Pill */}
              {post.practicalOutcomeUrdu && (
                <div className="p-3 bg-emerald-50/90 rounded-xl border border-emerald-200 text-xs text-emerald-950 flex items-center gap-2 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>
                    <strong>{language === 'ur' ? 'عملی نتیجہ:' : 'Practical Impact:'}</strong>{' '}
                    {language === 'ur' ? post.practicalOutcomeUrdu : post.practicalOutcomeEn}
                  </span>
                </div>
              )}

              {/* Action Buttons: Like, Comment, Share */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs text-slate-600">
                <button
                  onClick={() => handleLike(post.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold transition ${
                    isLiked ? 'bg-rose-50 text-rose-700' : 'hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isLiked ? 'fill-rose-500 text-rose-500' : ''}`} />
                  <span>{post.likes}</span>
                  <span className="hidden sm:inline">{language === 'ur' ? 'شاباش / پسند' : 'Applaud'}</span>
                </button>

                <div className="flex items-center gap-1.5 text-slate-500 px-3 py-1.5">
                  <MessageSquare className="w-4 h-4" />
                  <span>{post.commentsCount} {language === 'ur' ? 'تبصرے' : 'Comments'}</span>
                </div>

                <button
                  onClick={() => {
                    if (navigator.clipboard) {
                      navigator.clipboard.writeText(window.location.href);
                      alert(language === 'ur' ? 'لنک کاپی ہو گیا!' : 'Link copied to clipboard!');
                    }
                  }}
                  className="flex items-center gap-1 hover:bg-slate-100 px-3 py-1.5 rounded-xl font-medium text-slate-600 transition"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{language === 'ur' ? 'شیئر کریں' : 'Share'}</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Create Post Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-end sm:items-center justify-center p-3">
          <div className="bg-white max-w-lg w-full rounded-t-3xl sm:rounded-3xl animate-in slide-in-from-bottom-8 sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-300 p-5 sm:p-6 border border-slate-200 shadow-2xl space-y-4">
            <h3 className="text-lg font-black text-slate-900">
              {language === 'ur' ? 'برادری میں نیا علم یا پروجیکٹ شیئر کریں' : 'Share Useful Knowledge or Project'}
            </h3>

            <form onSubmit={handleCreatePost} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {language === 'ur' ? 'عنوان' : 'Title'}
                </label>
                <input
                  id="create-post-title-input"
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder={language === 'ur' ? 'مثال: چھت پر ٹماٹر اگانے کا کامیاب تجربہ' : 'e.g., Practical experience growing tomatoes...'}
                  className="w-full bg-slate-50 p-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {language === 'ur' ? 'تفصیل و سبق' : 'Content & Practical Insights'}
                </label>
                <textarea
                  id="create-post-content-input"
                  rows={4}
                  required
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  placeholder={language === 'ur' ? 'اپنے تجربے، مشورے یا مکمل کیے گئے پروجیکٹ کی تفصیل لکھیں...' : 'Share what you learned or built...'}
                  className="w-full bg-slate-50 p-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:border-emerald-500 focus:outline-none font-arabic"
                />
              </div>

              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-[11px] text-emerald-900">
                {language === 'ur'
                  ? '🔒 حفاظت: برائے مہربانی اپنا فون نمبر یا ذاتی خفیہ معلومات شیئر نہ کریں۔ صرف تعلیمی و مفید مواد پوسٹ کریں۔'
                  : '🔒 Safety: Please do not share private phone numbers or passwords. Keep content educational.'}
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold"
                >
                  {language === 'ur' ? 'منسوخ' : 'Cancel'}
                </button>
                <button
                  id="submit-new-post-btn"
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold shadow-xs"
                >
                  {language === 'ur' ? 'پوسٹ شائع کریں' : 'Publish Post'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Safety Report Modal */}
      {reportedPostId && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-3">
          <div className="bg-white max-w-sm w-full rounded-3xl p-5 border border-slate-200 shadow-2xl space-y-3 text-center">
            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-slate-900">
              {language === 'ur' ? 'رپورٹ برائے جائزہ' : 'Report Content for Moderation'}
            </h4>
            <p className="text-xs text-slate-600">
              {language === 'ur'
                ? 'سیکھو کی ایڈمن ٹیم اس مواد کا جائزہ لے کر 24 گھنٹے میں ضروری کارروائی کرے گی۔ شکریہ!'
                : 'Thank you. Our moderation team will review this report to ensure community safety.'}
            </p>
            <button
              onClick={() => setReportedPostId(null)}
              className="w-full py-2 bg-emerald-700 text-white rounded-xl text-xs font-bold mt-2"
            >
              {language === 'ur' ? 'ٹھیک ہے' : 'Dismiss'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
