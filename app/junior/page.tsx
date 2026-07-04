import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const juniorLessons = [
  {
    title: "Internet Safety",
    goal: "Learn how to make safer choices when using websites, apps, games, and online platforms.",
    explanation:
      "Middle school students use the internet for school, games, videos, communication, and social platforms. Internet safety means thinking before clicking, using trusted websites, avoiding suspicious downloads, and asking for help when something feels wrong.",
    example:
      "A student sees a pop-up that says their device has a virus and must click a button immediately. This is suspicious because it uses fear and urgency.",
    takeaway:
      "Pause before clicking. Safe internet use starts with careful decisions.",
  },
  {
    title: "Password Security",
    goal: "Understand how strong passwords and extra security steps protect accounts.",
    explanation:
      "Passwords protect school accounts, email, games, and social platforms. A strong password should be long, unique, and hard to guess. Students should avoid reusing the same password across many accounts.",
    example:
      "Using the same password for school email, a game account, and social media is risky because one stolen password could affect multiple accounts.",
    takeaway:
      "Use strong, unique passwords and turn on multi-factor authentication when possible.",
  },
  {
    title: "Scam Awareness",
    goal: "Recognize common signs of scams, fake messages, and suspicious links.",
    explanation:
      "Scams often try to rush people, scare people, or offer something that seems too good to be true. Middle school students should learn to notice red flags before clicking links or sharing information.",
    example:
      "A message says you won a free gift card, but you must enter your password to claim it. That is a major warning sign.",
    takeaway:
      "Scams often use pressure, prizes, fear, or fake login pages.",
  },
  {
    title: "Digital Citizenship",
    goal: "Learn how to act respectfully and responsibly online.",
    explanation:
      "Digital citizenship means using technology in a way that is respectful, safe, and responsible. This includes thinking before posting, avoiding cyberbullying, respecting others, and understanding that online actions can have real effects.",
    example:
      "A student wants to post an embarrassing photo of a classmate. A responsible digital citizen would stop and think about how it could hurt someone.",
    takeaway:
      "Online choices matter. Be respectful, thoughtful, and responsible.",
  },
  {
    title: "Personal Information Protection",
    goal: "Know what information should stay private online.",
    explanation:
      "Personal information includes addresses, phone numbers, passwords, school details, account information, and private family details. Students should be careful about what they post or share online.",
    example:
      "A stranger in a game asks what school you go to and where you live. That information should not be shared.",
    takeaway:
      "Protect private information and ask a trusted adult before sharing personal details.",
  },
];

const scamRedFlags = [
  "The message says you must act immediately.",
  "It asks for your password or login information.",
  "It offers a prize you did not enter to win.",
  "The link or website address looks strange.",
  "There are spelling mistakes or unusual formatting.",
  "Someone asks you to keep the conversation secret.",
];

const digitalCitizenshipRules = [
  "Think before posting or sharing.",
  "Treat people respectfully online.",
  "Do not spread rumors or embarrassing content.",
  "Protect your digital footprint.",
  "Report cyberbullying or unsafe behavior.",
];

const discussionPrompts = [
  "Why do scams often try to make people feel rushed?",
  "Why is password reuse risky?",
  "What should you do if a stranger asks for personal information online?",
  "How can online posts affect your digital footprint?",
  "What does responsible technology use look like at school?",
];

const activityExamples = [
  {
    situation:
      "A message says your account will be deleted unless you click a link in the next 5 minutes.",
    answer: "Suspicious",
    reason:
      "This uses urgency and fear to pressure you into clicking without thinking.",
  },
  {
    situation:
      "Your school posts an assignment reminder on the official learning platform.",
    answer: "Likely Safe",
    reason:
      "This is likely safe because it comes from an official school platform.",
  },
  {
    situation:
      "A gaming friend asks for your password so they can help unlock a reward.",
    answer: "Suspicious",
    reason:
      "Passwords should not be shared, even with friends or people who seem helpful.",
  },
];

export default function JuniorPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-400 font-semibold">
          CyberShield Junior
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Cyber awareness lessons for middle school students.
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mb-10">
          CyberShield Junior helps middle school students understand internet
          safety, password security, scam awareness, digital citizenship, and
          personal information protection.
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
            Junior Learning Modules
          </h2>

          <div className="space-y-6">
            {juniorLessons.map((lesson, index) => (
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
              Scam Red Flags
            </h2>

            <div className="space-y-3">
              {scamRedFlags.map((flag) => (
                <div
                  key={flag}
                  className="rounded-xl border border-slate-800 bg-slate-950 p-4"
                >
                  {flag}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
            <h2 className="text-3xl font-bold mb-6">
              Digital Citizenship Rules
            </h2>

            <div className="space-y-3">
              {digitalCitizenshipRules.map((rule) => (
                <div
                  key={rule}
                  className="rounded-xl border border-slate-800 bg-slate-950 p-4"
                >
                  {rule}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Spot the Red Flag Practice
          </h2>

          <p className="text-slate-300 leading-relaxed max-w-3xl mb-8">
            Students can read each situation and decide whether it seems safe or
            suspicious. This helps build stronger scam awareness and safer online
            decision-making.
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
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
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

          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
            <h2 className="text-3xl font-bold mb-4">
              Junior Cyber Defender Goal
            </h2>

            <p className="text-slate-300 leading-relaxed mb-4">
              By the end of this track, students should be able to recognize
              basic scam signs, explain why passwords matter, protect personal
              information, and describe responsible online behavior.
            </p>

            <p className="text-slate-300 leading-relaxed">
              This prepares students to move into more advanced high school
              cybersecurity topics later.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Keep practicing cyber safety.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Cyber safety improves when students practice spotting risks and
            making careful choices online.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/lessons"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-500 transition text-center"
            >
              Back to Lessons
            </Link>

            <Link
              href="/spot-the-scam"
              className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400 transition text-center"
            >
              Try Spot the Scam
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}