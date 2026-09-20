"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "../utils/supabase/client";

type LessonCompleteButtonProps = {
  lessonId: string;
};

export default function LessonCompleteButton({
  lessonId,
}: LessonCompleteButtonProps) {
  const router = useRouter();
  const supabase = createClient();

  const [userId, setUserId] = useState<string | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function loadProgress() {
      setLoading(true);
      setError("");

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!active) {
        return;
      }

      if (!user) {
        setUserId(null);
        setIsCompleted(false);
        setLoading(false);
        return;
      }

      setUserId(user.id);

      const { data, error: progressError } = await supabase
        .from("lesson_progress")
        .select("lesson_id")
        .eq("user_id", user.id)
        .eq("lesson_id", lessonId)
        .maybeSingle();

      if (!active) {
        return;
      }

      if (progressError) {
        setError("Unable to load saved progress.");
        setLoading(false);
        return;
      }

      setIsCompleted(Boolean(data));
      setLoading(false);
    }

    loadProgress();

    return () => {
      active = false;
    };
  }, [lessonId]);

  async function handleProgress() {
    setError("");

    if (!userId) {
      router.push("/login");
      return;
    }

    setSaving(true);

    if (isCompleted) {
      const { error: deleteError } = await supabase
        .from("lesson_progress")
        .delete()
        .eq("user_id", userId)
        .eq("lesson_id", lessonId);

      if (deleteError) {
        setError("Unable to update your progress.");
        setSaving(false);
        return;
      }

      setIsCompleted(false);
      setSaving(false);
      return;
    }

    const { error: insertError } = await supabase
      .from("lesson_progress")
      .insert({
        user_id: userId,
        lesson_id: lessonId,
      });

    if (insertError) {
      setError("Unable to save your progress.");
      setSaving(false);
      return;
    }

    setIsCompleted(true);
    setSaving(false);
  }

  if (loading) {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
        <p className="text-sm text-slate-400">Loading lesson progress...</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-400">
            Lesson Progress
          </p>

          <h2 className="mt-2 text-lg font-bold text-white">
            {isCompleted ? "Lesson completed" : "Finished this lesson?"}
          </h2>

          <p className="mt-1 text-sm leading-6 text-slate-400">
            {!userId
              ? "Sign in to save your progress across CyberShield Academy."
              : isCompleted
                ? "This lesson is saved to your CyberShield account."
                : "Mark this lesson complete to add it to your saved progress."}
          </p>
        </div>

        <button
          type="button"
          onClick={handleProgress}
          disabled={saving}
          className={
            isCompleted
              ? "shrink-0 rounded-xl border border-emerald-400/40 bg-emerald-400/10 px-5 py-3 font-semibold text-emerald-300 transition hover:bg-emerald-400/20 disabled:cursor-not-allowed disabled:opacity-60"
              : "shrink-0 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
          }
        >
          {saving
            ? "Saving..."
            : !userId
              ? "Sign In to Save Progress"
              : isCompleted
                ? "✓ Completed"
                : "Mark Lesson Complete"}
        </button>
      </div>

      {isCompleted && userId && (
        <button
          type="button"
          onClick={handleProgress}
          disabled={saving}
          className="mt-4 text-xs font-medium text-slate-500 transition hover:text-slate-300 disabled:opacity-60"
        >
          Undo completion
        </button>
      )}

      {error && (
        <p className="mt-4 text-sm text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}