import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  User, 
  signInWithPopup, 
  signOut as firebaseSignOut, 
  onAuthStateChanged 
} from 'firebase/auth';
import { 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc, 
  serverTimestamp 
} from 'firebase/firestore';
import { auth, googleProvider, db } from './firebase';
import { UserProfile } from '../types';
import { DEFAULT_USER_PROFILE } from '../data/mockData';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  userProfile: UserProfile;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  logout: () => Promise<void>;
  updateUserProfile: (data: Partial<UserProfile>) => Promise<void>;
  isSyncing: boolean;
}

/**
 * Safely and non-destructively merges a guest/local UserProfile with a Firestore cloud UserProfile:
 * - Unifies completed arrays (lessons, missions, good deeds, islamic lessons, growth tasks, etc.) with no duplicates.
 * - Retains reflections (islamic, mission, life skills) by shallow-merging key-value maps.
 * - Preserves highest streakDays and highest earned points.
 * - Preserves Daily Journey progress history and max counts.
 * - Respects learner's current ageGroup, occupation, and assessment data.
 */
export function mergeUserProfiles(local: UserProfile, cloud: Partial<UserProfile>): UserProfile {
  function mergeUniqueArrays<T>(arr1?: T[], arr2?: T[]): T[] {
    const s = new Set<T>();
    (arr1 || []).forEach((item) => s.add(item));
    (arr2 || []).forEach((item) => s.add(item));
    return Array.from(s);
  }

  function mergeRecords<T>(rec1?: Record<string, T>, rec2?: Record<string, T>): Record<string, T> {
    return {
      ...(rec2 || {}),
      ...(rec1 || {}),
    };
  }

  // Merge daily journey progress safely
  const localJourney = local.dailyJourneyProgress;
  const cloudJourney = cloud.dailyJourneyProgress;
  const mergedJourneyHistory = mergeRecords(localJourney?.history, cloudJourney?.history);

  const mergedJourney = (localJourney || cloudJourney) ? {
    lastCompletedDate: localJourney?.lastCompletedDate || cloudJourney?.lastCompletedDate,
    consecutiveJourneyDays: Math.max(localJourney?.consecutiveJourneyDays || 0, cloudJourney?.consecutiveJourneyDays || 0),
    completedJourneyCount: Math.max(localJourney?.completedJourneyCount || 0, cloudJourney?.completedJourneyCount || 0),
    timePreference: localJourney?.timePreference || cloudJourney?.timePreference || '20m',
    history: mergedJourneyHistory,
  } : undefined;

  const mergedPoints = Math.max(local.points || 0, cloud.points || 0);
  const mergedStreak = Math.max(local.streakDays || 0, cloud.streakDays || 0);

  return {
    ...DEFAULT_USER_PROFILE,
    ...cloud,
    ...local,
    // Explicit scalar fields preference:
    userId: cloud.userId || local.userId,
    email: cloud.email || local.email || null,
    photoURL: cloud.photoURL || local.photoURL || null,
    name: local.name && local.name !== DEFAULT_USER_PROFILE.name ? local.name : (cloud.name || local.name),
    ageGroup: local.ageGroup || cloud.ageGroup || DEFAULT_USER_PROFILE.ageGroup,
    age: local.age || cloud.age,
    educationLevel: local.educationLevel || cloud.educationLevel || DEFAULT_USER_PROFILE.educationLevel,
    country: local.country || cloud.country || DEFAULT_USER_PROFILE.country,
    region: local.region || cloud.region || DEFAULT_USER_PROFILE.region,
    city: local.city || cloud.city || DEFAULT_USER_PROFILE.city,
    village: local.village || cloud.village || DEFAULT_USER_PROFILE.village,
    currentOccupation: local.currentOccupation || cloud.currentOccupation || DEFAULT_USER_PROFILE.currentOccupation,
    goals: local.goals || cloud.goals || DEFAULT_USER_PROFILE.goals,
    timePerDay: local.timePerDay || cloud.timePerDay || DEFAULT_USER_PROFILE.timePerDay,
    preferredLanguage: local.preferredLanguage || cloud.preferredLanguage || 'ur',
    device: local.device || cloud.device || 'mobile',
    completedAssessment: Boolean(local.completedAssessment || cloud.completedAssessment),
    assessmentData: local.assessmentData || cloud.assessmentData,
    role: local.role || cloud.role || DEFAULT_USER_PROFILE.role,
    activeSkillPathId: local.activeSkillPathId || cloud.activeSkillPathId,
    activePathwayId: local.activePathwayId || cloud.activePathwayId,
    points: mergedPoints,
    streakDays: mergedStreak,
    growthDailyTimePreference: local.growthDailyTimePreference || cloud.growthDailyTimePreference || '30m',

    // Non-destructive unique array sets
    currentSkills: mergeUniqueArrays(local.currentSkills, cloud.currentSkills),
    skills: mergeUniqueArrays(local.skills, cloud.skills),
    interests: mergeUniqueArrays(local.interests, cloud.interests),
    enrolledCourseIds: mergeUniqueArrays(local.enrolledCourseIds, cloud.enrolledCourseIds),
    completedLessonIds: mergeUniqueArrays(local.completedLessonIds, cloud.completedLessonIds),
    completedProjectIds: mergeUniqueArrays(local.completedProjectIds, cloud.completedProjectIds),
    completedDailyPlanDayIds: mergeUniqueArrays(local.completedDailyPlanDayIds, cloud.completedDailyPlanDayIds),
    completedIslamicLessonIds: mergeUniqueArrays(local.completedIslamicLessonIds, cloud.completedIslamicLessonIds),
    completedIslamicChallengeIds: mergeUniqueArrays(local.completedIslamicChallengeIds, cloud.completedIslamicChallengeIds),
    completedGrowthTaskIds: mergeUniqueArrays(local.completedGrowthTaskIds, cloud.completedGrowthTaskIds),
    completedCommunityActionIds: mergeUniqueArrays(local.completedCommunityActionIds, cloud.completedCommunityActionIds),
    completedGoodDeedIds: mergeUniqueArrays(local.completedGoodDeedIds, cloud.completedGoodDeedIds),
    completedLifeSkillLessonIds: mergeUniqueArrays(local.completedLifeSkillLessonIds, cloud.completedLifeSkillLessonIds),
    completedPracticeScenarioIds: mergeUniqueArrays(local.completedPracticeScenarioIds, cloud.completedPracticeScenarioIds),
    completedMissionIds: mergeUniqueArrays(local.completedMissionIds, cloud.completedMissionIds),
    simplifiedMissionIds: mergeUniqueArrays(local.simplifiedMissionIds, cloud.simplifiedMissionIds),
    dismissedDiscoverItemIds: mergeUniqueArrays(local.dismissedDiscoverItemIds, cloud.dismissedDiscoverItemIds),
    helpfulDiscoverItemIds: mergeUniqueArrays(local.helpfulDiscoverItemIds, cloud.helpfulDiscoverItemIds),
    unhelpfulDiscoverItemIds: mergeUniqueArrays(local.unhelpfulDiscoverItemIds, cloud.unhelpfulDiscoverItemIds),
    completedPathwayProjectIds: mergeUniqueArrays(local.completedPathwayProjectIds, cloud.completedPathwayProjectIds),
    viewedPathwayIds: mergeUniqueArrays(local.viewedPathwayIds, cloud.viewedPathwayIds),

    // Non-destructive key-value record maps
    islamicReflections: mergeRecords(local.islamicReflections, cloud.islamicReflections),
    missionReflections: mergeRecords(local.missionReflections, cloud.missionReflections),
    lifeSkillReflections: mergeRecords(local.lifeSkillReflections, cloud.lifeSkillReflections),
    quizMistakeRecords: mergeRecords(local.quizMistakeRecords, cloud.quizMistakeRecords),
    dailyJourneyProgress: mergedJourney,
  };
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSyncing, setIsSyncing] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile>(() => {
    try {
      const saved = localStorage.getItem('seekho_user_profile');
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          ...DEFAULT_USER_PROFILE,
          ...parsed,
          skills: parsed.skills || DEFAULT_USER_PROFILE.skills,
          currentSkills: parsed.currentSkills || DEFAULT_USER_PROFILE.currentSkills,
          interests: parsed.interests || DEFAULT_USER_PROFILE.interests,
        };
      }
      return DEFAULT_USER_PROFILE;
    } catch {
      return DEFAULT_USER_PROFILE;
    }
  });

  // Listen to Auth State Changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setIsSyncing(true);
        try {
          // Read the most up-to-date local profile from localStorage or state
          let currentLocal = userProfile;
          try {
            const saved = localStorage.getItem('seekho_user_profile');
            if (saved) {
              currentLocal = JSON.parse(saved);
            }
          } catch {
            // fallback to current state
          }

          const userDocRef = doc(db, 'users', currentUser.uid);
          const userSnap = await getDoc(userDocRef);

          let finalMergedProfile: UserProfile;

          if (userSnap.exists()) {
            // Reconcile existing Firestore profile with local guest records
            const firestoreData = userSnap.data() as Partial<UserProfile>;
            finalMergedProfile = mergeUserProfiles(currentLocal, firestoreData);
            finalMergedProfile.userId = currentUser.uid;
            if (!finalMergedProfile.name || finalMergedProfile.name === DEFAULT_USER_PROFILE.name) {
              finalMergedProfile.name = currentUser.displayName || finalMergedProfile.name;
            }
            finalMergedProfile.email = currentUser.email || finalMergedProfile.email;
            finalMergedProfile.photoURL = currentUser.photoURL || finalMergedProfile.photoURL;

            // Non-destructively write reconciled data back to Firestore
            await setDoc(userDocRef, {
              ...finalMergedProfile,
              updatedAt: serverTimestamp(),
            }, { merge: true });
          } else {
            // Create initial profile in Firestore for new user, preserving all guest progress
            finalMergedProfile = {
              ...currentLocal,
              userId: currentUser.uid,
              name: currentLocal.name && currentLocal.name !== DEFAULT_USER_PROFILE.name 
                ? currentLocal.name 
                : (currentUser.displayName || currentLocal.name),
              email: currentUser.email,
              photoURL: currentUser.photoURL,
            };

            await setDoc(userDocRef, {
              ...finalMergedProfile,
              createdAt: serverTimestamp(),
              updatedAt: serverTimestamp(),
            }, { merge: true });
          }

          setUserProfile(finalMergedProfile);
          try {
            localStorage.setItem('seekho_user_profile', JSON.stringify(finalMergedProfile));
          } catch (e) {
            console.warn('LocalStorage save error:', e);
          }
        } catch (error) {
          // Graceful fallback if Firestore is temporarily offline
          console.warn('Firestore profile sync note (working in offline-ready local mode):', error);
        } finally {
          setIsSyncing(false);
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Update profile locally and sync to Firestore if authenticated
  const updateUserProfile = async (data: Partial<UserProfile>) => {
    setUserProfile((prev) => {
      const updated = { ...prev, ...data };
      try {
        localStorage.setItem('seekho_user_profile', JSON.stringify(updated));
      } catch (err) {
        console.warn('LocalStorage save error:', err);
      }
      return updated;
    });

    if (auth.currentUser) {
      try {
        const userDocRef = doc(db, 'users', auth.currentUser.uid);
        await updateDoc(userDocRef, {
          ...data,
          updatedAt: serverTimestamp(),
        });
      } catch (err) {
        console.warn('Firestore update note (operating with local storage):', err);
      }
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error: any) {
      console.error('Google Sign-in error:', error);
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
    } catch (error) {
      console.error('Sign-out error:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        userProfile,
        signInWithGoogle,
        signOut,
        logout: signOut,
        updateUserProfile,
        isSyncing,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

