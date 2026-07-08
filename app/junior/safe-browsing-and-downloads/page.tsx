import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lessons = [
  {
    number: "5.1",
    title: "What Safe Browsing Means",
    description:
      "Learn what safe browsing means and why students should pause before visiting unfamiliar websites or online pages.",
    href: "/junior/safe-browsing-and-downloads/what-safe-browsing-means",
  },
  {
    number: "5.2",
    title: "Recognizing Website Warning Signs",
    description:
      "Learn how to notice fake pages, unusual web addresses, unsafe forms, confusing redirects, and websites that ask for too much information.",
    href: "/junior/safe-browsing-and-downloads/recognizing-website-warning-signs",
  },
  {
    number: "5.3",
    title: "Downloads, Files, and App Safety",
    description:
      "Learn why students should be careful with downloads, files, extensions, apps, and tools that come from unknown sources.",
    href: "/junior/safe-browsing-and-downloads/downloads-files-and-app-safety",
  },
  {
    number: "5.4",
    title: "Pop-Ups, Ads, and Redirects",
    description:
      "Learn how pop-ups, ads, and redirects can pressure students to click, download, subscribe, or share information.",
    href: "/junior/safe-browsing-and-downloads/pop-ups-ads-and-redirects",
  },
  {
    number: "5.5",
    title: "Updates, Permissions, and Device Warnings",
    description:
      "Learn why updates, app permissions, browser warnings, and device alerts should be handled carefully with trusted help.",
    href: "/junior/safe-browsing-and-downloads/updates-permissions-and-device-warnings",
  },
  {
    number: "5.6",
    title: "Safe Browsing and Downloads Review",
    description:
      "Review safe browsing habits, website warning signs, download safety, pop-ups, redirects, permissions, and device warnings.",
    href: "/junior/safe-browsing-and-downloads/review",
  },
];

const skillGoals = [
  "Explain what safe browsing means",
  "Recognize suspicious website warning signs",
  "Understand why unknown downloads can be risky",
  "Identify pop-ups, ads, redirects, and fake warnings",
  "Think carefully about permissions and device alerts",
  "Know when to ask a trusted adult before clicking or downloading",
];

const realWorldSituations = [
  "A website asks for personal information to unlock a reward",
  "A download claims to make a game faster",
  "A pop-up says the device is infected and must be fixed now",
  "A browser warning appears before a page opens",
  "An app asks for permissions that do not match its purpose",
  "A student gets redirected to a page they did not mean to visit",
];

const safetyRules = [
  "Use fake examples only",
  "Do not visit suspicious websites for practice",
  "Do not download unknown files, apps, or browser extensions",
  "Do not click pop-ups or fake warning buttons",
  "Do not enter real personal information into practice forms",
  "Ask a trusted adult before responding to browser warnings, device alerts, or unknown downloads",
];

export default function SafeBrowsingAndDownloadsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 5
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Safe Browsing and Downloads
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Module 5 teaches students how to browse more safely, recognize website
          warning signs, avoid risky downloads, handle pop-ups carefully, and
          ask for help when device or browser alerts appear. The goal is to
          build defensive habits, not to test unsafe websites.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/safe-browsing-and-downloads/what-safe-browsing-means"
            className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition text-center"
          >
            Start Lesson 5.1
          </Link>

          <Link
            href="/junior/phishing-and-scam-awareness"
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
              How can students make safer choices before visiting, clicking,
              downloading, or allowing access?
            </h2>

            <p className="text-slate-300 leading-relaxed text-lg">
              Websites, files, apps, extensions, ads, and pop-ups can look
              useful or exciting. This module helps students slow down, check
              warning signs, use trusted sources, and ask for help before taking
              risky actions.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">
          Module Skill Goals
        </p>

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
            Follow the lessons in order to build safer browsing and download
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
          <p className="text-cyan-300 font-semibold mb-3">
            Safety Reminder
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            This module teaches safe recognition and response, not unsafe
            testing.
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
            Earn the Safe Browser Badge.
          </h2>

          <p className="text-slate-200 leading-relaxed text-lg">
            Students complete this module when they can recognize suspicious
            websites, avoid unknown downloads, respond carefully to pop-ups and
            browser warnings, think before allowing permissions, and ask a
            trusted adult before taking risky online actions.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-t border-slate-800">
        <div className="max-w-5xl mx-auto rounded-2xl bg-slate-950 border border-slate-800 p-8 text-center">
          <p className="text-cyan-300 font-semibold mb-3">Navigation</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to start Module 5?
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Begin with Lesson 5.1 to learn what safe browsing means and why
            students should pause before visiting unfamiliar websites or online
            pages.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/safe-browsing-and-downloads/what-safe-browsing-means"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition text-center"
            >
              Start Lesson 5.1
            </Link>

            <Link
              href="/junior/phishing-and-scam-awareness"
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