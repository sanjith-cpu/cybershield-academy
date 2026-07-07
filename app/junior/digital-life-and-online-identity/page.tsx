import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lessons = [
  {
    number: "1.1",
    title: "What Your Online Identity Includes",
    summary:
      "Learn that online identity includes usernames, profile pictures, comments, posts, game names, bios, and online behavior.",
    skill: "Identify parts of an online identity",
    href: "/junior/digital-life-and-online-identity/what-your-online-identity-includes",
  },
  {
    number: "1.2",
    title: "Usernames, Profiles, and First Impressions",
    summary:
      "Explore how usernames and profiles can affect how others view you and why private details should stay out of profiles.",
    skill: "Build safer profile judgment",
    href: "/junior/digital-life-and-online-identity/usernames-profiles-and-first-impressions",
  },
  {
    number: "1.3",
    title: "Public vs Private Online Spaces",
    summary:
      "Compare public posts, private chats, school platforms, gaming spaces, and closed groups.",
    skill: "Recognize audience and visibility",
    href: "/junior/digital-life-and-online-identity/public-vs-private-online-spaces",
  },
  {
    number: "1.4",
    title: "How Online Choices Can Be Saved",
    summary:
      "Understand how screenshots, reposts, downloads, and copied messages can make online actions last longer than expected.",
    skill: "Think before posting or sending",
    href: "/junior/digital-life-and-online-identity/how-online-choices-can-be-saved",
  },
  {
    number: "1.5",
    title: "Managing Your Digital Reputation",
    summary:
      "Practice habits for building a positive online reputation through kindness, privacy, and thoughtful posting.",
    skill: "Protect and improve reputation",
    href: "/junior/digital-life-and-online-identity/managing-your-digital-reputation",
  },
  {
    number: "1.6",
    title: "Online Identity Checkpoint",
    summary:
      "Review online identity, public and private spaces, screenshots, reputation, and safer profile choices.",
    skill: "Apply Module 1 decisions",
    href: "/junior/digital-life-and-online-identity/review",
  },
];

const situations = [
  "Creating a profile for a school club app",
  "Joining a new gaming community",
  "Posting in a class group chat",
  "Choosing a username for a team activity",
  "Deciding whether to share a screenshot",
  "Cleaning up an old profile before joining a club",
];

const skillGoals = [
  "Explain what online identity includes",
  "Recognize how usernames and profiles create first impressions",
  "Compare public, private, school, gaming, and group chat spaces",
  "Explain why screenshots and reposts can affect privacy",
  "Make smarter choices about profiles, posts, comments, and messages",
  "Build a positive digital reputation",
];

const safetyRules = [
  "Use fake examples only.",
  "Do not share real private information.",
  "Do not use real screenshots or private messages.",
  "Do not enter real passwords or account details.",
  "Ask a trusted adult when something feels unsafe, confusing, or hurtful.",
];

export default function DigitalLifeAndOnlineIdentityPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 1
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Digital Life and Online Identity
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          This module helps middle school students understand how usernames,
          profiles, posts, comments, images, group chats, and gaming activity
          can shape how others see them online.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/digital-life-and-online-identity/what-your-online-identity-includes"
            className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition text-center"
          >
            Start Lesson 1.1
          </Link>

          <Link
            href="/junior"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Back to Junior Track
          </Link>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">
            Module Big Question
          </p>

          <div className="rounded-2xl border border-yellow-400/40 bg-yellow-400/10 p-8">
            <h2 className="text-3xl md:text-5xl font-bold text-yellow-100 mb-5">
              How do your online choices shape how others see you?
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Middle school students often use group chats, games, school
              platforms, and online communities. This module explains how those
              spaces can create impressions, affect trust, and become part of a
              student’s digital reputation.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">
          Module Skill Goals
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          By the end of this module, students should be able to explain online
          identity and make safer profile choices.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGoals.map((goal) => (
            <div
              key={goal}
              className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 text-slate-200"
            >
              {goal}
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">
            Lessons in This Module
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Module 1 includes six lessons about identity, reputation, audience,
            screenshots, and smarter online choices.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {lessons.map((lesson) => (
              <Link
                key={lesson.number}
                href={lesson.href}
                className="rounded-2xl bg-slate-950 border border-slate-800 p-6 hover:border-cyan-400 transition"
              >
                <div className="flex items-center justify-between gap-4 mb-4">
                  <p className="text-sm text-cyan-300 font-semibold">
                    Lesson {lesson.number}
                  </p>

                  <span className="rounded-full bg-emerald-400 px-3 py-1 text-xs font-bold text-slate-950">
                    Live
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-cyan-200 mb-3">
                  {lesson.title}
                </h3>

                <p className="text-slate-300 leading-relaxed mb-5">
                  {lesson.summary}
                </p>

                <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                  <p className="text-sm font-semibold text-slate-400 mb-1">
                    Skill practiced
                  </p>

                  <p className="text-slate-200">{lesson.skill}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">
          Real-World Situations
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Students will practice with fake middle school situations that feel
          realistic without using real private information.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {situations.map((situation) => (
            <div
              key={situation}
              className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 text-slate-200"
            >
              {situation}
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6">
            <p className="text-cyan-300 font-semibold mb-3">
              Safety Reminder
            </p>

            <h2 className="text-3xl font-bold mb-6">
              Module 1 stays safe, defensive, and school-appropriate.
            </h2>

            <div className="space-y-3">
              {safetyRules.map((rule) => (
                <div
                  key={rule}
                  className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 text-slate-200"
                >
                  {rule}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6">
            <p className="text-cyan-300 font-semibold mb-3">
              Module Completion Goal
            </p>

            <h2 className="text-3xl font-bold mb-6">
              Students should leave Module 1 with stronger online identity
              judgment.
            </h2>

            <p className="text-slate-300 leading-relaxed mb-5">
              By the end of this module, students should be able to explain
              how online identity works and make safer choices in profiles,
              posts, chats, gaming spaces, and shared online communities.
            </p>

            <div className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 p-4">
              <h3 className="font-bold text-emerald-200 mb-2">
                Junior Skill Badge
              </h3>

              <p className="text-slate-200 leading-relaxed">
                Online Identity Decision-Maker
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="max-w-5xl mx-auto rounded-2xl bg-slate-900/70 border border-slate-800 p-8 text-center">
          <p className="text-cyan-300 font-semibold mb-3">
            Navigation
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to begin Module 1?
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Start with Lesson 1.1 to learn what online identity includes and why
            it matters in middle school.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/digital-life-and-online-identity/what-your-online-identity-includes"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition text-center"
            >
              Start Lesson 1.1
            </Link>

            <Link
              href="/junior"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Back to Junior Track
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}