import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain what digital reputation means",
  "Understand how posts, comments, profiles, and messages can shape reputation",
  "Identify choices that can hurt trust or create conflict",
  "Recognize ways to build a positive online presence",
  "Practice smarter responses before posting, replying, or sharing",
];

const vocabulary = [
  {
    term: "Digital Reputation",
    definition:
      "The way people may think about someone based on their online posts, comments, profiles, messages, and behavior.",
  },
  {
    term: "Positive Digital Footprint",
    definition:
      "Online activity that shows kindness, creativity, responsibility, learning, teamwork, or helpful interests.",
  },
  {
    term: "Respectful Communication",
    definition:
      "Using words online that are thoughtful, safe, honest, and not meant to embarrass or hurt others.",
  },
  {
    term: "Accountability",
    definition:
      "Taking responsibility for online choices and trying to fix mistakes when possible.",
  },
  {
    term: "Privacy Check",
    definition:
      "A careful review of profile details, posts, settings, and shared information to reduce privacy risks.",
  },
  {
    term: "Trusted Adult",
    definition:
      "A parent, guardian, teacher, counselor, coach, or school technology staff member who can help with unsafe or confusing online situations.",
  },
];

const risks = [
  {
    title: "Posting While Upset",
    text: "Angry comments or messages can spread quickly and make a conflict worse.",
  },
  {
    title: "Sharing Without Permission",
    text: "Posting someone else’s photo, message, or private moment can hurt trust and relationships.",
  },
  {
    title: "Ignoring Old Content",
    text: "Old posts, bios, usernames, or comments can still affect how others see someone later.",
  },
];

const positiveHabits = [
  {
    title: "Show Safe Interests",
    text: "Profiles can include hobbies, learning goals, creative projects, sports, books, music, or school-safe interests.",
  },
  {
    title: "Use Kind Comments",
    text: "Helpful, respectful comments can show maturity and make online spaces better for everyone.",
  },
  {
    title: "Pause Before Posting",
    text: "Taking a moment before posting can prevent regret, conflict, or reputation problems.",
  },
  {
    title: "Clean Up Carefully",
    text: "Students can review old posts, remove unnecessary private details, and ask adults for help when needed.",
  },
];

const scenarios = [
  {
    title: "The Angry Reply",
    situation:
      "A student feels embarrassed after a group chat argument and wants to send a long angry reply.",
    warningSigns:
      "The student is upset, the message could be screenshotted, and more replies may make the conflict bigger.",
    riskyResponse:
      "Sending the message immediately because they want everyone to know they are angry.",
    smarterResponse:
      "Wait, calm down, avoid sending hurtful words, and ask a trusted adult if the situation feels serious.",
    whyItWorks:
      "Pausing protects the student’s reputation and lowers the chance of making the conflict worse.",
  },
  {
    title: "The Club Application Profile",
    situation:
      "A student wants to join a school club. They realize their public profile has rude jokes and old comments they no longer like.",
    warningSigns:
      "The profile may create a negative first impression for classmates, teachers, or club leaders.",
    riskyResponse:
      "Ignoring the profile because the comments were from a long time ago.",
    smarterResponse:
      "Review the profile, remove or update anything inappropriate, and use the account in a more positive way moving forward.",
    whyItWorks:
      "Cleaning up old content helps the student take responsibility and build a stronger digital reputation.",
  },
  {
    title: "The Photo Without Permission",
    situation:
      "A student takes a funny photo of a friend at lunch and wants to post it because others might laugh.",
    warningSigns:
      "The friend did not give permission, and the photo could embarrass them if it spreads.",
    riskyResponse:
      "Posting it because it seems harmless and funny.",
    smarterResponse:
      "Ask before posting, and do not share it if the friend says no or seems uncomfortable.",
    whyItWorks:
      "Respecting permission protects friendships and shows responsible online behavior.",
  },
  {
    title: "The Positive Post",
    situation:
      "A student finishes a coding project, art piece, book review, or sports achievement and wants to share it online.",
    warningSigns:
      "The post should avoid private details like school schedule, exact location, or personal contact information.",
    riskyResponse:
      "Posting the project with private details, location tags, and personal information.",
    smarterResponse:
      "Share the achievement in a school-safe way without private information, and keep the tone respectful.",
    whyItWorks:
      "The student builds a positive digital footprint while still protecting privacy.",
  },
];

const actionSteps = [
  "Pause before posting when angry, embarrassed, excited, or pressured.",
  "Ask before sharing photos, screenshots, or messages involving someone else.",
  "Review usernames, bios, and profile pictures for private details.",
  "Remove or update old content that no longer represents you well.",
  "Use online spaces to show kindness, learning, creativity, teamwork, and responsibility.",
  "Ask a trusted adult for help when online conflict, screenshots, or reputation problems feel too big to handle alone.",
];

const reflectionQuestions = [
  "What is one online choice that can improve digital reputation?",
  "Why is posting while angry risky?",
  "Why should students ask before posting someone else’s photo?",
  "What is one old profile detail that might need to be cleaned up?",
  "How can a student build a positive digital footprint?",
];

const skillCheck = [
  {
    question: "What does digital reputation mean?",
    answer:
      "Digital reputation is how people may think about someone based on their online profiles, posts, comments, messages, and behavior.",
  },
  {
    question: "Why should students pause before posting while upset?",
    answer:
      "Posting while upset can lead to hurtful messages, screenshots, conflict, and reputation problems.",
  },
  {
    question: "What is one way to build a positive digital footprint?",
    answer:
      "Students can share school-safe interests, creative work, learning, kindness, teamwork, or helpful comments without revealing private information.",
  },
  {
    question: "What should a student do if an online reputation problem feels serious?",
    answer:
      "They should stop adding more content and ask a trusted adult, teacher, guardian, counselor, coach, or school technology staff member for help.",
  },
];

const checklist = [
  "I can explain what digital reputation means.",
  "I can identify online choices that affect reputation.",
  "I can explain why posting while upset can be risky.",
  "I can ask before sharing content involving someone else.",
  "I can name ways to build a positive digital footprint.",
  "I know when to ask a trusted adult for help.",
];

export default function ManagingYourDigitalReputationPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 1 • Lesson 1.5
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Managing Your Digital Reputation
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Digital reputation is shaped by usernames, profiles, posts, comments,
          screenshots, messages, and how students treat others online. This
          lesson helps students build a safer and more positive online presence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/digital-life-and-online-identity/how-online-choices-can-be-saved"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Previous Lesson
          </Link>

          <Link
            href="/junior/digital-life-and-online-identity"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Back to Module 1
          </Link>

          <Link
            href="/junior"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Back to Junior Track
          </Link>
          <Link
            href="/junior/digital-life-and-online-identity/review"
            className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition text-center"
          >
            Next Lesson
          </Link>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Real-Life Hook</p>

          <div className="rounded-2xl border border-yellow-400/40 bg-yellow-400/10 p-8">
            <h2 className="text-3xl font-bold text-yellow-100 mb-4">
              Your online choices can become part of how people remember you.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student applies to join a school club or team. Before
              meeting them, someone notices their public profile, old comments,
              and posts. Those online choices may shape the first impression,
              even if the student has changed since then.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          A strong digital reputation comes from thoughtful online habits.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {learningGoals.map((goal) => (
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
          <p className="text-cyan-300 font-semibold mb-3">Why This Matters</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Digital reputation can affect friendships, clubs, teams, school
            trust, and future opportunities.
          </h2>

          <p className="text-slate-300 leading-relaxed text-lg max-w-4xl">
            Middle school is a time when students join new groups, build
            friendships, try activities, play games, and use school platforms.
            Online choices can affect how classmates, teammates, teachers,
            coaches, and future groups see someone. Managing digital reputation
            helps students show responsibility while still being creative and
            authentic online.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Digital reputation is built through patterns, not one single moment.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            Digital reputation is the impression people may form based on what
            someone does online. It can come from profile pictures, usernames,
            bios, posts, comments, messages, screenshots, group chat behavior,
            gaming behavior, and how someone responds during conflict.
          </p>

          <p>
            One mistake does not define a person forever, but online actions can
            spread quickly and last longer than expected. This is why students
            should think before posting, avoid sharing private or hurtful
            content, and take responsibility when something goes wrong.
          </p>

          <p>
            A positive digital reputation is not about being perfect. It is
            about making thoughtful choices, treating people with respect,
            protecting privacy, asking before sharing about others, and using
            online spaces for learning, creativity, kindness, and teamwork.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for understanding digital reputation.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vocabulary.map((word) => (
              <div
                key={word.term}
                className="rounded-2xl bg-slate-950 border border-slate-800 p-6"
              >
                <h3 className="text-xl font-bold text-cyan-200 mb-3">
                  {word.term}
                </h3>

                <p className="text-slate-300 leading-relaxed">
                  {word.definition}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">
          Positive Digital Reputation Habits
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Students can use online spaces to build trust, not just avoid risk.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {positiveHabits.map((habit) => (
            <div
              key={habit.title}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6"
            >
              <h3 className="text-2xl font-bold text-cyan-200 mb-3">
                {habit.title}
              </h3>

              <p className="text-slate-300 leading-relaxed">
                {habit.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Risk Breakdown</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Reputation problems often start with fast decisions.
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {risks.map((risk) => (
              <div
                key={risk.title}
                className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6"
              >
                <h3 className="text-xl font-bold text-red-200 mb-3">
                  {risk.title}
                </h3>

                <p className="text-slate-200 leading-relaxed">{risk.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">
          Smarter Choice vs Risky Choice
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Digital reputation improves when students pause and choose carefully.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student posts an angry comment, shares someone else’s photo
              without asking, and ignores old public posts that no longer
              represent them well.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student pauses before replying, asks before sharing about
              others, reviews old profile details, and uses online spaces to
              show kindness, interests, learning, and responsibility.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice protecting reputation in realistic online situations.
          </h2>

          <div className="space-y-6">
            {scenarios.map((scenario) => (
              <div
                key={scenario.title}
                className="rounded-2xl bg-slate-950 border border-slate-800 p-6"
              >
                <h3 className="text-2xl font-bold text-cyan-200 mb-4">
                  {scenario.title}
                </h3>

                <div className="grid lg:grid-cols-2 gap-4">
                  <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                    <h4 className="font-bold mb-2">Situation</h4>
                    <p className="text-slate-300 leading-relaxed">
                      {scenario.situation}
                    </p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/40 bg-yellow-400/10 p-4">
                    <h4 className="font-bold text-yellow-200 mb-2">
                      Warning Signs
                    </h4>
                    <p className="text-slate-200 leading-relaxed">
                      {scenario.warningSigns}
                    </p>
                  </div>

                  <div className="rounded-xl border border-red-400/40 bg-red-400/10 p-4">
                    <h4 className="font-bold text-red-200 mb-2">
                      Risky Response
                    </h4>
                    <p className="text-slate-200 leading-relaxed">
                      {scenario.riskyResponse}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 p-4">
                    <h4 className="font-bold text-emerald-200 mb-2">
                      Smarter Response
                    </h4>
                    <p className="text-slate-200 leading-relaxed">
                      {scenario.smarterResponse}
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-cyan-400/40 bg-cyan-400/10 p-4">
                  <h4 className="font-bold text-cyan-200 mb-2">
                    Why the Smarter Response Works
                  </h4>
                  <p className="text-slate-200 leading-relaxed">
                    {scenario.whyItWorks}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">
          Real-Life Action Steps
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Use these habits to protect and improve digital reputation.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {actionSteps.map((step) => (
            <div
              key={step}
              className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 text-slate-200"
            >
              {step}
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6">
            <p className="text-cyan-300 font-semibold mb-3">
              Reflection Questions
            </p>

            <h2 className="text-3xl font-bold mb-6">Think before moving on.</h2>

            <div className="space-y-3">
              {reflectionQuestions.map((question) => (
                <div
                  key={question}
                  className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 text-slate-200"
                >
                  {question}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6">
            <p className="text-cyan-300 font-semibold mb-3">Skill Check</p>

            <h2 className="text-3xl font-bold mb-6">Quick review.</h2>

            <div className="space-y-4">
              {skillCheck.map((item) => (
                <div
                  key={item.question}
                  className="rounded-xl border border-slate-800 bg-slate-900/70 p-4"
                >
                  <h3 className="font-bold text-cyan-200 mb-2">
                    {item.question}
                  </h3>

                  <p className="text-slate-300 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Junior Checklist</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Before finishing Lesson 1.5, students should be able to say:
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {checklist.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 p-4 text-slate-200"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-t border-slate-800">
        <div className="max-w-5xl mx-auto rounded-2xl bg-slate-950 border border-slate-800 p-8 text-center">
          <p className="text-cyan-300 font-semibold mb-3">Navigation</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Lesson 1.5 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 1.6 will review Module 1 with vocabulary, scenarios,
            safer choices, and the Online Identity Decision-Maker badge.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/digital-life-and-online-identity/how-online-choices-can-be-saved"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Previous Lesson
            </Link>

            <Link
              href="/junior/digital-life-and-online-identity"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Back to Module 1
            </Link>

            <Link
              href="/junior/digital-life-and-online-identity/review"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition text-center"
            >
              Next Lesson
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
