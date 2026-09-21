export type ProgressTrack =
  | "kids"
  | "junior"
  | "beginner"
  | "intermediate"
  | "advanced";

export function getTrackFromLessonId(
  lessonId: string
): ProgressTrack | null {
  const normalizedId = lessonId
    .trim()
    .replace(/^\/+/, "")
    .toLowerCase();

  if (normalizedId.startsWith("kids/")) {
    return "kids";
  }

  if (normalizedId.startsWith("junior/")) {
    return "junior";
  }

  if (normalizedId.startsWith("high-school/beginner/")) {
    return "beginner";
  }

  if (normalizedId.startsWith("high-school/intermediate/")) {
    return "intermediate";
  }

  if (normalizedId.startsWith("high-school/advanced/")) {
    return "advanced";
  }

  // Temporary support for the lesson-number IDs we used during testing.
  const legacyId = lessonId.trim().toUpperCase();

  if (/^K\d+\.\d+$/.test(legacyId)) {
    return "kids";
  }

  if (/^J\d+\.\d+$/.test(legacyId)) {
    return "junior";
  }

  if (/^B\d+\.\d+$/.test(legacyId)) {
    return "beginner";
  }

  if (/^I\d+\.\d+$/.test(legacyId)) {
    return "intermediate";
  }

  if (/^A\d+\.\d+$/.test(legacyId)) {
    return "advanced";
  }

  return null;
}

export function isCurriculumLesson(lessonId: string) {
  return getTrackFromLessonId(lessonId) !== null;
}