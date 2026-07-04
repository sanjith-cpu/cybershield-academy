import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const kidsLessons = [
  {
    title: "Internet Basics",
    goal: "Understand that the internet connects people, websites, games, videos, and information.",
    explanation:
      "The internet can be helpful for learning, playing games, watching videos, and talking with people you know. But not everything online is safe or true, so students should learn how to make careful choices.",
    example:
      "A student watches a science video online for school. That can be helpful, but they should still stay on trusted websites.",
    takeaway:
      "The internet is useful, but students should use it carefully and ask for help when needed.",
  },
  {
    title: "Keeping Information Private",
    goal: "Learn what personal information is and why it should be protected.",
    explanation:
      "Personal information includes details like your full name, home address, school name, phone number, passwords, and family information. Students should not share these details with strangers online.",
    example:
      "A game asks for your home address before letting you play. That is a warning sign, and you should ask a trusted adult first.",
    takeaway:
      "Private information should stay private unless a trusted adult says it is safe.",
  },
  {
    title: "Password Basics",
    goal: "Understand that passwords protect accounts and should not be shared.",
    explanation:
      "Passwords are like keys for online accounts. If someone else gets your password, they may be able to enter your account. Students should not share passwords with friends or strangers.",
    example:
      "A friend asks for your game password so they can help you. It is still safer not to share it.",
    takeaway:
      "Passwords protect accounts. Keep them secret and ask an adult for help if you forget one.",
  },
  {
    title: "Being Kind Online",
    goal: "Learn how to treat people respectfully when using technology.",
    explanation:
      "Online messages can affect real people. Students should be kind, avoid mean comments, and tell a trusted adult if someone is being hurtful online.",
    example:
      "A student sees a mean comment in a group chat. Instead of joining in, they can step away and tell a trusted adult.",
    takeaway:
      "Good digital citizens are kind, respectful, and responsible online.",
  },
  {
    title: "Ask a Trusted Adult",
    goal: "Know when to pause and ask for help.",
    explanation:
      "Students should ask a trusted adult when something online feels confusing, scary, strange, or unsafe. Asking for help is a smart cyber safety habit.",
    example:
      "Someone online asks you to keep a secret from your family. That is a warning sign, and you should tell a trusted adult.",
    takeaway:
      "When something online feels wrong, pause and ask for help.",
  },
];

const safetyRules = [
  "Do not share your home address online.",
  "Do not share passwords with friends or strangers.",
  "Ask a trusted adult before clicking strange links.",
  "Be kind and respectful in online games, chats, and comments.",
  "Tell a trusted adult if something online feels scary or confusing.",
];

const discussionPrompts = [
  "What should you do if a website asks for your address?",
  "Why should passwords stay private?",
  "What does it mean to be kind online?",
  "Who is a trusted adult you can ask for help?",
  "What should you do if a message online makes you uncomfortable?",
];

const activityExamples = [
  {
    situation: "A website asks for your home address before you can play a game.",
    answer: "Unsafe",
    reason:
      "Students should not share their home address online without asking a trusted adult.",
  },
  {
    situation: "You ask a parent or teacher before clicking a strange link.",
    answer: "Safe",
    reason:
      "Asking a trusted adult before clicking suspicious links is a smart choice.",
  },
  {
    situation: "Someone online asks you to keep a secret from your family.",
    answer: "Unsafe",
    reason:
      "Secret requests from people online can be a warning sign. Students should tell a trusted adult.",
  },
];

export default function KidsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-400 font-semibold">
          CyberShield Kids
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Online safety lessons for elementary students.
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mb-10">
          CyberShield Kids teaches younger students how to stay safer online
          through simple lessons about privacy, passwords, kindness, trusted
          adults, and safe decision-making.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/activities"
            className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400 transition text-center"
          >
            Try Activities
          </Link>

          <Link
            href="/resources"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-500 transition text-center"
          >
            View Resources
          </Link>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Kids Learning Modules
          </h2>

          <div className="space-y-6">
            {kidsLessons.map((lesson, index) => (
              <div
                key={lesson.title}
                className="rounded-2xl bg-slate-950 border border-slate-800 p-6 hover:border-cyan-500 transition"
              >
                <p className="text-sm text-slate-400 mb-2">
                  Lesson {index + 1}
                </p>

                <h3 className="text-3xl font-bold text-cyan-400 mb-4">
                  {lesson.title}
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">Goal</h4>
                    <p className="text-slate-300 leading-relaxed mb-5">
                      {lesson.goal}
                    </p>

                    <h4 className="font-bold mb-2">Explanation</h4>
                    <p className="text-slate-300 leading-relaxed">
                      {lesson.explanation}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                      <h4 className="font-bold mb-2">Example</h4>
                      <p className="text-slate-300 leading-relaxed">
                        {lesson.example}
                      </p>
                    </div>

                    <div className="rounded-xl border border-cyan-500 bg-slate-900 p-4">
                      <h4 className="font-bold text-cyan-400 mb-2">
                        Key Takeaway
                      </h4>
                      <p className="text-slate-300 leading-relaxed">
                        {lesson.takeaway}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
            <h2 className="text-3xl font-bold mb-6">
              Five Cyber Safety Rules
            </h2>

            <div className="space-y-3">
              {safetyRules.map((rule) => (
                <div
                  key={rule}
                  className="rounded-xl border border-slate-800 bg-slate-950 p-4"
                >
                  {rule}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
            <h2 className="text-3xl font-bold mb-6">
              Teacher Discussion Prompts
            </h2>

            <div className="space-y-3">
              {discussionPrompts.map((prompt) => (
                <div
                  key={prompt}
                  className="rounded-xl border border-slate-800 bg-slate-950 p-4"
                >
                  {prompt}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Safe or Unsafe Activity
          </h2>

          <p className="text-slate-300 leading-relaxed max-w-3xl mb-8">
            Students can read each situation and decide whether it is safe or
            unsafe. This activity helps younger students practice making careful
            online choices.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {activityExamples.map((example) => (
              <div
                key={example.situation}
                className="rounded-2xl bg-slate-950 border border-slate-800 p-6"
              >
                <h3 className="text-xl font-bold mb-4">
                  {example.situation}
                </h3>

                <p className="text-cyan-400 font-bold mb-3">
                  Answer: {example.answer}
                </p>

                <p className="text-slate-300 leading-relaxed">
                  {example.reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Cyber Safety Pledge
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            After completing CyberShield Kids, students should be able to explain
            basic online safety habits and promise to ask for help when something
            online feels unsafe.
          </p>

          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 text-left">
            <p className="text-slate-300 leading-relaxed">
              I will protect my private information, keep my passwords secret,
              be kind online, think before I click, and ask a trusted adult when
              I need help.
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/lessons"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-500 transition text-center"
            >
              Back to Lessons
            </Link>

            <Link
              href="/activities"
              className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400 transition text-center"
            >
              Practice Activities
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}