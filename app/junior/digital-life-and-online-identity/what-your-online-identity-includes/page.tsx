import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain what online identity means",
  "Identify parts of an online identity, including usernames, profiles, posts, comments, and game names",
  "Understand how online behavior can shape first impressions",
  "Recognize private details that should not appear in public profiles",
  "Practice making smarter choices before posting or joining online spaces",
];

const vocabulary = [
  {
    term: "Online Identity",
    definition:
      "The way a person appears online through usernames, profiles, posts, comments, images, messages, and behavior.",
  },
  {
    term: "Profile",
    definition:
      "A page or account area that may show a username, picture, bio, interests, posts, or other details.",
  },
  {
    term: "Digital Reputation",
    definition:
      "The impression people may form about someone based on what they do, say, post, or share online.",
  },
  {
    term: "Audience",
    definition:
      "The people who can see, save, share, or react to something online.",
  },
  {
    term: "Private Information",
    definition:
      "Details that should not be shared publicly, such as full name, address, school, phone number, passwords, or exact location.",
  },
  {
    term: "Screenshot",
    definition:
      "A saved image of what appears on a screen. Screenshots can make online content last longer than expected.",
  },
];

const risks = [
  {
    title: "Too Much Information",
    text: "A profile can accidentally reveal a school, location, team, age, full name, or daily routine.",
  },
  {
    title: "Wrong First Impression",
    text: "A username, comment, or post can make others see someone as careless, rude, unsafe, or unkind, even if that was not the intention.",
  },
  {
    title: "Bigger Audience Than Expected",
    text: "A post made for a small group can be copied, screenshotted, shared, or shown to people outside the original audience.",
  },
];

const scenarios = [
  {
    title: "The New Club Group Chat",
    situation:
      "A student joins a group chat for a school club. Their username includes their full name, school initials, and graduation year.",
    warningSigns:
      "The username gives away several details at once, and the group chat may include people the student does not know well yet.",
    riskyResponse:
      "Keeping the username because it feels easy for everyone to recognize.",
    smarterResponse:
      "Use a username that shows personality or interests without revealing full name, school, location, or age.",
    whyItWorks:
      "The student can still be recognizable to friends without sharing private details with a larger audience.",
  },
  {
    title: "The Gaming Profile",
    situation:
      "A student makes a gaming profile and writes their city, school team, and real first and last name in the bio.",
    warningSigns:
      "The profile combines identity, location, school activity, and personal information in one place.",
    riskyResponse:
      "Leaving the bio public because the game feels casual and fun.",
    smarterResponse:
      "Remove private details and use safe interests like favorite game mode, hobbies, or a harmless nickname.",
    whyItWorks:
      "The profile can still feel personal without giving strangers useful private information.",
  },
  {
    title: "The Comment That Spreads",
    situation:
      "A student posts a rude comment as a joke under a classmate’s video. Other students screenshot it and share it.",
    warningSigns:
      "The comment is public, it involves another person, and it could hurt someone or affect the student’s reputation.",
    riskyResponse:
      "Posting more comments to defend the joke.",
    smarterResponse:
      "Stop replying, delete the comment if possible, apologize if needed, and ask a trusted adult for help if the situation grows.",
    whyItWorks:
      "Pausing prevents the problem from becoming bigger and shows responsibility.",
  },
];

const actionSteps = [
  "Check usernames and bios for private details.",
  "Avoid posting full name, school, address, phone number, location, or passwords.",
  "Think about who could see or save a post before sharing it.",
  "Use profile pictures and bios that are safe, respectful, and school-appropriate.",
  "Pause before commenting when angry, embarrassed, or pressured.",
  "Ask a trusted adult when something online feels confusing, unsafe, or hurtful.",
];

const reflectionQuestions = [
  "What are three things that can be part of someone’s online identity?",
  "What is one detail that should not be included in a public profile?",
  "Why can a username create a first impression?",
  "How can a comment affect someone’s digital reputation?",
  "Why is it smart to think about audience before posting?",
];

const skillCheck = [
  {
    question: "What does online identity include?",
    answer:
      "It can include usernames, profile pictures, bios, posts, comments, messages, game names, shared images, and online behavior.",
  },
  {
    question: "Why should students avoid sharing school or location details in a public profile?",
    answer:
      "Those details can reveal private information and may be seen by a larger audience than expected.",
  },
  {
    question: "What is a smarter choice before posting a comment?",
    answer:
      "Pause and think about whether the comment is respectful, safe, and something you would be okay with others seeing later.",
  },
  {
    question: "When should a student ask a trusted adult for help?",
    answer:
      "When something online feels unsafe, confusing, hurtful, suspicious, or too difficult to handle alone.",
  },
];

const checklist = [
  "I can explain what online identity means.",
  "I can name parts of an online identity.",
  "I can identify private details that should not be in a public profile.",
  "I can explain why usernames and comments create impressions.",
  "I can choose a smarter response in an online identity scenario.",
  "I know when to ask a trusted adult for help.",
];

export default function WhatYourOnlineIdentityIncludesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 1 • Lesson 1.1
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          What Your Online Identity Includes
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Your online identity is not just one username or one profile picture.
          It is the full picture created by your profiles, posts, comments,
          chats, game names, images, and choices across online spaces.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
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
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">
            Real-Life Hook
          </p>

          <div className="rounded-2xl border border-yellow-400/40 bg-yellow-400/10 p-8">
            <h2 className="text-3xl font-bold text-yellow-100 mb-4">
              A new group chat can create a first impression before anyone says hello in person.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student joins a new group chat for a school club. Before
              anyone meets them face-to-face, other students may notice their
              username, profile picture, bio, comments, and messages. All of
              those details become part of how others see them online.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">
          What You Will Learn
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Online identity is built from many small choices.
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
          <p className="text-cyan-300 font-semibold mb-3">
            Why This Matters
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Middle school online spaces can affect friendships, trust, and reputation.
          </h2>

          <p className="text-slate-300 leading-relaxed text-lg max-w-4xl">
            Students often use school platforms, group chats, games, video
            apps, and online communities. A username, profile, comment, or post
            may seem small, but it can shape how classmates, teammates, club
            members, teachers, or other people view someone. Learning to manage
            online identity helps students stay safer and make choices they are
            less likely to regret later.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">
          Core Explanation
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Your online identity is the digital version of how you show up.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            Online identity includes the information and behavior connected to
            a person online. It can include usernames, profile pictures, bios,
            posts, comments, likes, group chat messages, gaming names, avatars,
            and the way someone treats others in digital spaces.
          </p>

          <p>
            Some parts of online identity are chosen on purpose, like a username
            or profile picture. Other parts are created through behavior, like
            how someone comments, responds to conflict, joins group chats, or
            shares content. Even small actions can become part of a larger
            digital reputation.
          </p>

          <p>
            A safer online identity does not need to be boring. Students can
            show interests, creativity, kindness, humor, and personality while
            still protecting private information. The goal is to be thoughtful
            about what a profile or post might reveal and who could see it.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">
            Key Vocabulary
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for understanding online identity.
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
          Risk Breakdown
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Online identity risks usually come from small details adding up.
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

              <p className="text-slate-200 leading-relaxed">
                {risk.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">
            Smarter Choice vs Risky Choice
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            A safer profile can still show personality without revealing private details.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
              <h3 className="text-2xl font-bold text-red-200 mb-4">
                Risky Choice
              </h3>

              <p className="text-slate-200 leading-relaxed">
                A student creates a public profile using their full name,
                school name, team name, exact city, and a profile picture that
                clearly shows their school uniform.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
              <h3 className="text-2xl font-bold text-emerald-200 mb-4">
                Smarter Choice
              </h3>

              <p className="text-slate-200 leading-relaxed">
                The student uses a safe username, avoids private details, and
                writes a bio about interests like coding, art, books, sports,
                music, or games without revealing school or location.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">
          Scenario Lab
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Practice spotting warning signs and choosing a smarter response.
        </h2>

        <div className="space-y-6">
          {scenarios.map((scenario) => (
            <div
              key={scenario.title}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6"
            >
              <h3 className="text-2xl font-bold text-cyan-200 mb-4">
                {scenario.title}
              </h3>

              <div className="grid lg:grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
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
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">
            Real-Life Action Steps
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Use these habits before creating profiles, posting, commenting, or joining online spaces.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {actionSteps.map((step) => (
              <div
                key={step}
                className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-slate-200"
              >
                {step}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6">
            <p className="text-cyan-300 font-semibold mb-3">
              Reflection Questions
            </p>

            <h2 className="text-3xl font-bold mb-6">
              Think before moving on.
            </h2>

            <div className="space-y-3">
              {reflectionQuestions.map((question) => (
                <div
                  key={question}
                  className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-slate-200"
                >
                  {question}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6">
            <p className="text-cyan-300 font-semibold mb-3">
              Skill Check
            </p>

            <h2 className="text-3xl font-bold mb-6">
              Quick review.
            </h2>

            <div className="space-y-4">
              {skillCheck.map((item) => (
                <div
                  key={item.question}
                  className="rounded-xl border border-slate-800 bg-slate-950 p-4"
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

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">
            Junior Checklist
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Before finishing Lesson 1.1, students should be able to say:
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
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="max-w-5xl mx-auto rounded-2xl bg-slate-900/70 border border-slate-800 p-8 text-center">
          <p className="text-cyan-300 font-semibold mb-3">
            Navigation
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Lesson 1.1 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 1.2 will explore how usernames, profiles, and first
            impressions affect online reputation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/digital-life-and-online-identity"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Back to Module 1
            </Link>

            <Link
              href="/junior/digital-life-and-online-identity/usernames-profiles-and-first-impressions"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition text-center"
            >
              Next Lesson
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