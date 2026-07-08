import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lessons = [
  {
    number: "8.1",
    title: "What Misinformation Means",
    description:
      "Learn what misinformation means and why students should pause before believing or sharing online information.",
    href: "/junior/misinformation-ai-and-online-content-trust/what-misinformation-means",
  },
  {
    number: "8.2",
    title: "Clickbait, Rumors, and Viral Posts",
    description:
      "Learn how clickbait, rumors, emotional posts, and viral content can spread quickly before anyone checks whether they are true.",
    href: "/junior/misinformation-ai-and-online-content-trust/clickbait-rumors-and-viral-posts",
  },
  {
    number: "8.3",
    title: "Checking Sources and Evidence",
    description:
      "Learn how students can look for trustworthy sources, evidence, dates, context, and confirmation before believing online content.",
    href: "/junior/misinformation-ai-and-online-content-trust/checking-sources-and-evidence",
  },
  {
    number: "8.4",
    title: "AI Images, Deepfakes, and Edited Media",
    description:
      "Learn why images, videos, voices, and screenshots can be edited or AI-generated, and why students should check before trusting them.",
    href: "/junior/misinformation-ai-and-online-content-trust/ai-images-deepfakes-and-edited-media",
  },
  {
    number: "8.5",
    title: "Sharing Responsibly Online",
    description:
      "Learn how to slow down before reposting, forwarding, commenting, or reacting to online content that may be false or misleading.",
    href: "/junior/misinformation-ai-and-online-content-trust/sharing-responsibly-online",
  },
  {
    number: "8.6",
    title: "Misinformation, AI, and Online Content Trust Review",
    description:
      "Review misinformation, clickbait, rumors, source checking, AI-generated media, edited content, and responsible sharing habits.",
    href: "/junior/misinformation-ai-and-online-content-trust/review",
  },
];

const skillGoals = [
  "Explain what misinformation means",
  "Recognize clickbait, rumors, and viral pressure",
  "Check sources, evidence, dates, and context",
  "Understand that images, videos, voices, and screenshots can be edited or AI-generated",
  "Pause before reposting, forwarding, or reacting to uncertain content",
  "Ask a trusted adult or use reliable sources when online information seems confusing or important",
];

const realWorldSituations = [
  "A viral post makes a shocking claim with no source",
  "A headline is designed to make students angry or scared",
  "A rumor spreads through a group chat before anyone checks it",
  "An image looks real but may be edited or AI-generated",
  "A screenshot is shared without context",
  "A student wants to repost something but is not sure if it is true",
];

const safetyRules = [
  "Use fake examples only",
  "Do not spread rumors for practice",
  "Do not harass, embarrass, or accuse someone based on unverified content",
  "Do not trust a post only because it is popular, emotional, or repeated often",
  "Do not use AI-generated or edited media to trick people",
  "Ask a trusted adult or check reliable sources before sharing important or suspicious information",
];

export default function MisinformationAiAndOnlineContentTrustPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 8
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Misinformation, AI, and Online Content Trust
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Module 8 teaches students how to think carefully before believing or
          sharing online content. Students learn how misinformation spreads, how
          clickbait and rumors work, how to check sources and evidence, and why
          AI-generated or edited media should be handled with caution.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/misinformation-ai-and-online-content-trust/what-misinformation-means"
            className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition text-center"
          >
            Start Lesson 8.1
          </Link>

          <Link
            href="/junior/cyberbullying-digital-drama-and-getting-help"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Previous Module
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

          <div className="rounded-2xl border border-cyan-400/40 bg-cyan-400/10 p-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              How can students decide whether online content is trustworthy
              before believing or sharing it?
            </h2>

            <p className="text-slate-300 leading-relaxed text-lg">
              Online content can travel quickly through posts, videos, group
              chats, screenshots, comments, and search results. This module
              helps students slow down, check where information came from, look
              for evidence, and avoid spreading content that may be false,
              misleading, edited, or missing important context.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Module Skill Goals</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          By the end of this module, students will be able to:
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
            Follow the lessons in order to build stronger online truth-checking
            habits.
          </h2>

          <div className="grid lg:grid-cols-2 gap-6">
            {lessons.map((lesson) => (
              <Link
                key={lesson.number}
                href={lesson.href}
                className="rounded-2xl bg-slate-950 border border-slate-800 p-6 hover:border-cyan-400 transition block"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <p className="text-cyan-300 font-semibold">
                      Lesson {lesson.number}
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-2">
                      {lesson.title}
                    </h3>
                  </div>

                  <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-200">
                    Live
                  </span>
                </div>

                <p className="text-slate-300 leading-relaxed">
                  {lesson.description}
                </p>
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
          Students will practice safer decisions in situations like:
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {realWorldSituations.map((situation) => (
            <div
              key={situation}
              className="rounded-xl border border-yellow-400/40 bg-yellow-400/10 p-4 text-slate-200"
            >
              {situation}
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Safety Reminder</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            This module teaches careful checking and responsible sharing, not
            rumor spreading or tricking people.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {safetyRules.map((rule) => (
              <div
                key={rule}
                className="rounded-xl border border-red-400/40 bg-red-400/10 p-4 text-slate-200"
              >
                {rule}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-8">
          <p className="text-emerald-200 font-semibold mb-3">
            Module Completion Goal
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Earn the Truth Checker Badge.
          </h2>

          <p className="text-slate-200 leading-relaxed text-lg">
            Students complete this module when they can explain what
            misinformation means, recognize clickbait and rumors, check sources
            and evidence, think carefully about AI-generated or edited media,
            and pause before sharing content that may be false, misleading, or
            missing context.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-t border-slate-800">
        <div className="max-w-5xl mx-auto rounded-2xl bg-slate-950 border border-slate-800 p-8 text-center">
          <p className="text-cyan-300 font-semibold mb-3">Navigation</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to start Module 8?
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Begin with Lesson 8.1 to learn what misinformation means and why
            students should pause before believing or sharing online content.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/misinformation-ai-and-online-content-trust/what-misinformation-means"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition text-center"
            >
              Start Lesson 8.1
            </Link>

            <Link
              href="/junior/cyberbullying-digital-drama-and-getting-help"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Previous Module
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