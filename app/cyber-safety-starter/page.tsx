import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const starterPath = "/cyber-safety-starter";

const lessons = [
  {
    number: "1",
    title: "Your First Device: The Basics of Staying Safe",
    time: "30–40 minutes",
    href: `${starterPath}/first-device-basics`,
    description:
      "Learn the basic habits that help protect a phone, tablet, laptop, gaming device, and the accounts connected to it.",
    outcome:
      "You will know how to protect a device, use passcodes and passwords more safely, make better choices about apps and permissions, and know what to do when something unexpected happens.",
    topics: [
      "Why devices need protection",
      "Device locks and passcodes",
      "Password basics",
      "Updates and why they matter",
      "Apps, downloads, and permissions",
      "What to do when something feels wrong",
    ],
    remember: "Lock it. Protect it. Ask before downloading.",
  },
  {
    number: "2",
    title: "Think Before You Share: Privacy & Social Media",
    time: "35–45 minutes",
    href: `${starterPath}/think-before-you-share`,
    description:
      "Learn how to protect personal information, make safer choices before posting, and understand what privacy means online.",
    outcome:
      "You will know what information should stay private, what deserves extra thought before sharing, how photos can reveal more than expected, and how to be respectful with other people's information too.",
    topics: [
      "What counts as personal information",
      "Photos, videos, and location clues",
      "Public and private sharing",
      "Online friends and real-world trust",
      "Digital footprints",
      "Respecting other people's privacy",
    ],
    remember: "Pause. Think. Share.",
  },
  {
    number: "3",
    title: "Stop, Check, Tell: Messages, Scams & Online Problems",
    time: "35–45 minutes",
    href: `${starterPath}/stop-check-tell`,
    description:
      "Learn how to slow down when a message creates pressure, recognize common warning signs, and know when to ask a trusted adult for help.",
    outcome:
      "You will know how to respond to suspicious messages, fake prizes, unfamiliar links, online pressure, uncomfortable conversations, and cyberbullying without trying to handle everything alone.",
    topics: [
      "Pressure and urgency online",
      "Fake prizes and suspicious messages",
      "Links and downloads",
      "People you only know online",
      "Cyberbullying and hurtful behavior",
      "When and how to tell a trusted adult",
    ],
    remember: "Stop. Check. Tell.",
  },
];

const outcomes = [
  {
    title: "Protect your device",
    description:
      "Use simple habits that help keep your phone, tablet, laptop, or gaming device safer.",
  },
  {
    title: "Protect your accounts",
    description:
      "Understand why passcodes and passwords matter and why they should not be casually shared.",
  },
  {
    title: "Protect your privacy",
    description:
      "Know which information should stay private and which information deserves extra thought before sharing.",
  },
  {
    title: "Use social media more carefully",
    description:
      "Understand followers, friend requests, photos, comments, screenshots, privacy settings, and digital footprints.",
  },
  {
    title: "Recognize pressure",
    description:
      "Slow down when a message tells you to hurry, keep a secret, click immediately, or send information.",
  },
  {
    title: "Know when to get help",
    description:
      "Understand that asking a trusted adult for help is one of the strongest online safety skills.",
  },
];

const pathwaySteps = [
  {
    step: "Start",
    title: "Learn the basics",
    description:
      "Begin with the device and account habits that make everything else safer.",
  },
  {
    step: "Then",
    title: "Learn what to share",
    description:
      "Build privacy skills before using messaging, games, or social media more independently.",
  },
  {
    step: "Finish",
    title: "Practice smart decisions",
    description:
      "Use Stop, Check, Tell when messages, people, or situations create pressure or uncertainty.",
  },
  {
    step: "Outcome",
    title: "Use the CyberShield 5",
    description:
      "Finish with a simple five-step method you can use whenever something online feels confusing or important.",
  },
];

const cyberShieldFive = [
  {
    number: "1",
    word: "Stop",
    meaning: "Do not react immediately.",
  },
  {
    number: "2",
    word: "Check",
    meaning: "Ask what the message, person, app, or website is asking you to do.",
  },
  {
    number: "3",
    word: "Protect",
    meaning: "Think about your device, account, information, privacy, and other people.",
  },
  {
    number: "4",
    word: "Think",
    meaning: "Consider what could happen after you click, post, send, download, or reply.",
  },
  {
    number: "5",
    word: "Tell",
    meaning: "Ask a trusted adult for help when something is confusing, uncomfortable, suspicious, or too important to handle alone.",
  },
];

export default function CyberSafetyStarterPathPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.16),_transparent_32%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="flex flex-wrap gap-3 text-xs font-black uppercase tracking-[0.18em]">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-cyan-100">
              Elementary
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-100">
              Beginner
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              3 Essential Lessons
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-slate-200">
              About 2 Hours Total
            </span>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-300">
                Cyber Safety Starter Path
              </p>

              <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
                3 Essential Lessons Before You Go Online More Independently
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Phones, tablets, games, messages, and social media can be useful
                and fun. They also come with responsibilities. This starter path
                teaches the most important online safety habits in a clear,
                step-by-step way before you begin using devices and online
                spaces more independently.
              </p>

              <p className="mt-4 max-w-3xl leading-7 text-slate-400">
                You do not need cybersecurity experience. You do not need to
                know technical words. You only need to be ready to learn how to
                protect your device, your information, your accounts, and
                yourself.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={`${starterPath}/first-device-basics`}
                  className="rounded-xl bg-cyan-400 px-6 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
                >
                  Start Lesson 1
                </Link>

                <a
                  href="#path"
                  className="rounded-xl border border-slate-700 px-6 py-3 font-black text-slate-200 transition hover:border-purple-400 hover:text-purple-100"
                >
                  See the 3-Lesson Path
                </a>
              </div>
            </div>

            <aside className="rounded-3xl border border-cyan-400/25 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-950/30">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
                What You Will Finish With
              </p>

              <h2 className="mt-3 text-2xl font-black text-white">
                A simple set of online safety habits you can actually remember
              </h2>

              <div className="mt-6 grid gap-3">
                {[
                  "Know how to protect a first device.",
                  "Know what information should stay private.",
                  "Think more carefully before posting or sharing.",
                  "Recognize online pressure and suspicious messages.",
                  "Know when to stop and ask a trusted adult for help.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-700 bg-slate-950 p-4 text-sm leading-6 text-slate-300"
                  >
                    <span className="mr-2 font-black text-emerald-300">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-3xl border border-emerald-400/25 bg-emerald-400/10 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-200">
            Before You Begin
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            This course is about smart habits, not being afraid of the internet
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-emerald-50">
            The goal is not to make every message, game, app, or website seem
            dangerous. The goal is to help you slow down, protect important
            information, make better choices, and ask for help when something
            does not feel right.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-emerald-50">
            A trusted adult can be a parent, guardian, teacher, school
            counselor, or another responsible adult your family trusts. Asking
            for help is a strong online safety skill.
          </p>
        </div>
      </section>

      <section
        id="path"
        className="border-y border-slate-800 bg-slate-900/40"
      >
        <div className="mx-auto max-w-6xl px-6 py-14">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
            Your Path
          </p>

          <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
            Complete These 3 Lessons in Order
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-400">
            Each lesson builds on the one before it. Start with protecting your
            device, then learn what to share, then practice what to do when an
            online situation becomes confusing or uncomfortable.
          </p>

          <div className="mt-10 grid gap-6">
            {lessons.map((lesson) => (
              <article
                key={lesson.number}
                className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-950"
              >
                <div className="grid lg:grid-cols-[150px_1fr]">
                  <div className="flex flex-col items-center justify-center border-b border-slate-700 bg-[linear-gradient(180deg,_rgba(34,211,238,0.16),_rgba(168,85,247,0.08))] p-7 lg:border-b-0 lg:border-r">
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">
                      Lesson
                    </span>
                    <span className="mt-2 text-6xl font-black text-white">
                      {lesson.number}
                    </span>
                    <span className="mt-3 text-center text-xs font-bold text-slate-300">
                      {lesson.time}
                    </span>
                  </div>

                  <div className="p-6 md:p-8">
                    <h3 className="text-2xl font-black text-white md:text-3xl">
                      {lesson.title}
                    </h3>

                    <p className="mt-4 max-w-4xl leading-7 text-slate-300">
                      {lesson.description}
                    </p>

                    <div className="mt-6 rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50">
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-200">
                        By the end
                      </p>
                      <p className="mt-2 text-sm leading-7">
                        {lesson.outcome}
                      </p>
                    </div>

                    <div className="mt-6 grid gap-3 md:grid-cols-2">
                      {lesson.topics.map((topic) => (
                        <div
                          key={topic}
                          className="rounded-xl border border-slate-700 bg-slate-900 p-4 text-sm text-slate-300"
                        >
                          <span className="mr-2 font-black text-cyan-300">
                            •
                          </span>
                          {topic}
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                      <div className="rounded-xl border border-purple-400/25 bg-purple-400/10 px-4 py-3 text-sm font-black text-purple-100">
                        Remember: {lesson.remember}
                      </div>

                      <Link
                        href={lesson.href}
                        className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
                      >
                        Start Lesson {lesson.number}
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-purple-300">
          What You Will Be Able to Do
        </p>

        <h2 className="mt-3 text-3xl font-black text-white">
          Six Real-World Outcomes
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-700 bg-slate-900/70 p-6"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
            How the Path Builds
          </p>

          <h2 className="mt-3 text-3xl font-black text-white">
            One Skill Leads to the Next
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {pathwaySteps.map((item) => (
              <article
                key={item.step}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-6"
              >
                <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                  {item.step}
                </p>
                <h3 className="mt-2 text-xl font-black text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="rounded-3xl border border-purple-400/25 bg-[linear-gradient(135deg,_rgba(168,85,247,0.13),_rgba(34,211,238,0.08))] p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-purple-200">
            Final Tool
          </p>

          <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
            The CyberShield 5
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-slate-300">
            After all three lessons, use these five steps whenever something
            online feels confusing, important, uncomfortable, or too good to be
            true.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {cyberShieldFive.map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-purple-400/25 bg-slate-950/70 p-5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-400 font-black text-slate-950">
                  {item.number}
                </span>
                <h3 className="mt-4 text-xl font-black text-white">
                  {item.word}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {item.meaning}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-800 bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-300">
                Course Outcome
              </p>

              <h2 className="mt-3 text-3xl font-black text-white">
                Cyber Safety Starter Promise
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                At the end of Lesson 3, students should be able to say:
              </p>

              <div className="mt-6 grid gap-3">
                {[
                  "I know how to protect my device and accounts.",
                  "I think before I share information online.",
                  "I slow down when messages pressure me.",
                  "I respect other people's privacy.",
                  "I know when to stop and ask a trusted adult for help.",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-sm font-semibold leading-6 text-emerald-50"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-cyan-400/25 bg-slate-950 p-7">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
                Outreach Ready
              </p>

              <h2 className="mt-3 text-2xl font-black text-white">
                One link. Three lessons. A clear result.
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                This path is designed so a school, family, community group, or
                student can open one starting page and follow a simple sequence
                without needing a teacher to deliver the material.
              </p>

              <p className="mt-4 leading-7 text-slate-300">
                Each lesson will use easy-to-understand explanations, short
                guided activities, simple decision practice, reflection, and a
                final skill check.
              </p>

              <Link
                href={`${starterPath}/first-device-basics`}
                className="mt-6 inline-flex rounded-xl bg-cyan-400 px-6 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
              >
                Begin the Starter Path
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="rounded-3xl border border-yellow-400/25 bg-yellow-400/10 p-6 md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-yellow-200">
            Important
          </p>

          <h2 className="mt-3 text-2xl font-black text-white">
            You are not expected to solve every online problem by yourself
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-yellow-50">
            When something online is confusing, upsetting, threatening,
            suspicious, or asks for private information, stop and talk to a
            trusted adult. Getting help is part of being safe online.
          </p>
        </div>
      </section>

      <section className="border-t border-slate-800">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-cyan-400/25 bg-cyan-400/10 p-7 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">
                Ready?
              </p>
              <h2 className="mt-2 text-2xl font-black text-white">
                Start with Lesson 1: Your First Device
              </h2>
              <p className="mt-2 max-w-2xl leading-7 text-cyan-50">
                Build the foundation first. Learn how to protect a device,
                account, password, app choices, and permissions before moving
                into privacy and social media.
              </p>
            </div>

            <Link
              href={`${starterPath}/first-device-basics`}
              className="shrink-0 rounded-xl bg-cyan-400 px-6 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
            >
              Start Lesson 1
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}