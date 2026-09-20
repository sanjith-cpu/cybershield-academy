export const progressConfig = {
  kids: {
    label: "Kids",
    totalLessons: 30,
  },

  junior: {
    label: "Junior",
    totalLessons: 72,
  },

  beginner: {
    label: "High School Beginner",
    totalLessons: 105,
  },

  intermediate: {
    label: "High School Intermediate",
    totalLessons: 136,
  },

  advanced: {
    label: "High School Advanced",
    totalLessons: 200,
  },
} as const;

export const TOTAL_CURRICULUM_LESSONS =
  progressConfig.kids.totalLessons +
  progressConfig.junior.totalLessons +
  progressConfig.beginner.totalLessons +
  progressConfig.intermediate.totalLessons +
  progressConfig.advanced.totalLessons;

export function calculateProgress(
  completedLessons: number,
  totalLessons: number
) {
  if (totalLessons <= 0) {
    return 0;
  }

  return Math.min(
    100,
    Math.round((completedLessons / totalLessons) * 100)
  );
}