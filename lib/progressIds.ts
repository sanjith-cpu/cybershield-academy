export type ProgressTrack =
  | "kids"
  | "junior"
  | "beginner"
  | "intermediate"
  | "advanced";

export function getTrackFromLessonId(
  lessonId: string
): ProgressTrack | null {
  const normalizedId = lessonId.trim().toUpperCase();

  if (/^K\d+\.\d+$/.test(normalizedId)) {
    return "kids";
  }

  if (/^J\d+\.\d+$/.test(normalizedId)) {
    return "junior";
  }

  if (/^B\d+\.\d+$/.test(normalizedId)) {
    return "beginner";
  }

  if (/^I\d+\.\d+$/.test(normalizedId)) {
    return "intermediate";
  }

  if (/^A\d+\.\d+$/.test(normalizedId)) {
    return "advanced";
  }

  return null;
}

export function isCurriculumLesson(lessonId: string) {
  return getTrackFromLessonId(lessonId) !== null;
}