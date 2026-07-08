import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lessons = [
  {
    number: "6.1",
    title: "Online Communication Basics",
    description:
      "Learn what online communication means and why students should pause before sending messages, comments, replies, or reactions.",
    href: "/junior/social-media-chats-and-online-communication/online-communication-basics",
  },
  {
    number: "6.2",
    title: "Group Chats and Message Safety",
    description:
      "Learn how to make safer choices in group chats, avoid pressure, think before replying, and know when to leave or ask for help.",
    href: "/junior/social-media-chats-and-online-communication/group-chats-and-message-safety",
  },
  {
    number: "6.3",
    title: "Strangers, Followers, and Friend Requests",
    description:
      "Learn why students should be careful with unknown people online, new followers, friend requests, and messages from strangers.",
    href: "/junior/social-media-chats-and-online-communication/strangers-followers-and-friend-requests",
  },
  {
    number: "6.4",
    title: "Sharing Photos, Screenshots, and Posts",
    description:
      "Learn how photos, screenshots, posts, tags, and reposts can affect privacy, trust, safety, and digital reputation.",
    href: "/junior/social-media-chats-and-online-communication/sharing-photos-screenshots-and-posts",
  },
  {
    number: "6.5",
    title: "Respectful Communication and Online Conflict",
    description:
      "Learn how to communicate respectfully, slow down during conflict, avoid digital drama, and ask for help when online conversations become unsafe.",
    href: "/junior/social-media-chats-and-online-communication/respectful-communication-and-online-conflict",
  },
  {
    number: "6.6",
    title: "Social Media, Chats, and Online Communication Review",
    description:
      "Review safer online communication habits, group chat safety, stranger awareness, careful sharing, respectful replies, and getting help.",
    href: "/junior/social-media-chats-and-online-communication/review",
  },
];

const skillGoals = [
  "Explain what safe online communication means",
  "Think before sending messages, comments, or replies",
  "Recognize risky pressure in group chats",
  "Handle strangers, followers, and friend requests carefully",
  "Understand why photos, screenshots, and posts can spread quickly",
  "Know when to pause, leave, block, report, or ask a trusted adult for help",
];

const realWorldSituations = [
  "A group chat pressures someone to share private information",
  "An unknown account sends a friendly message or friend request",
  "A student wants to post a photo that includes other people",
  "Someone shares a screenshot from a private conversation",
  "A comment section turns into an argument",
  "A message makes a student feel uncomfortable or unsafe",
];

const safetyRules = [
  "Use fake examples only",
  "Do not share real private messages for practice",
  "Do not message strangers or unknown accounts for testing",
  "Do not post, forward, or screenshot other people's private information",
  "Do not respond to pressure, threats, or uncomfortable messages alone",
  "Ask a trusted adult before handling unsafe, scary, or suspicious online communication",
];

export default function SocialMediaChatsAndOnlineCommunicationPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 6
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Social Media, Chats, and Online Communication
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Module 6 teaches students how to communicate online more safely,
          respectfully, and thoughtfully. Students learn how to handle group
          chats, friend requests, followers, screenshots, posts, comments, and
          online conflict without putting privacy, safety, or reputation at
          risk.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/social-media-chats-and-online-communication/online-communication-basics"
            className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition text-center"
          >
            Start Lesson 6.1
          </Link>

          <Link
            href="/junior/safe-browsing-and-downloads"
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
              How can students communicate online in ways that are safe,
              respectful, and thoughtful?
            </h2>

            <p className="text-slate-300 leading-relaxed text-lg">
              Messages, comments, group chats, photos, screenshots, and posts
              can spread quickly and affect other people. This module helps
              students slow down, think about impact, protect privacy, avoid
              risky pressure, and ask for help when online communication feels
              unsafe.
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
            Follow the lessons in order to build safer online communication
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
            This module teaches safe communication and response, not unsafe
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
            Earn the Smart Communicator Badge.
          </h2>

          <p className="text-slate-200 leading-relaxed text-lg">
            Students complete this module when they can communicate online with
            care, think before sending or sharing, protect privacy, handle group
            chats and friend requests safely, respond respectfully during
            conflict, and ask a trusted adult when online communication becomes
            uncomfortable or unsafe.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-t border-slate-800">
        <div className="max-w-5xl mx-auto rounded-2xl bg-slate-950 border border-slate-800 p-8 text-center">
          <p className="text-cyan-300 font-semibold mb-3">Navigation</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to start Module 6?
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Begin with Lesson 6.1 to learn what online communication means and
            why students should pause before sending messages, comments,
            replies, or reactions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/social-media-chats-and-online-communication/online-communication-basics"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition text-center"
            >
              Start Lesson 6.1
            </Link>

            <Link
              href="/junior/safe-browsing-and-downloads"
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