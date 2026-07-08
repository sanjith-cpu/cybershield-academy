import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain what privacy settings and account controls do",
  "Understand how settings can limit who sees profiles, posts, messages, tags, and activity",
  "Recognize why default settings may not always be the safest choice",
  "Identify safer choices for public, friends-only, private, and school spaces",
  "Practice asking a trusted adult before changing important account settings",
];

const vocabulary = [
  {
    term: "Privacy Settings",
    definition:
      "Controls that help decide who can see information, posts, profiles, messages, tags, activity, or account details.",
  },
  {
    term: "Account Controls",
    definition:
      "Settings that manage how an account works, including visibility, login safety, notifications, tags, messages, and permissions.",
  },
  {
    term: "Visibility",
    definition:
      "Who can see a profile, post, comment, photo, activity, or account detail.",
  },
  {
    term: "Default Settings",
    definition:
      "The settings an app or website starts with before the user changes them.",
  },
  {
    term: "Tagging",
    definition:
      "Connecting a person’s name or account to a post, photo, video, or comment.",
  },
  {
    term: "Activity Status",
    definition:
      "A setting or signal that may show when someone is online, active, recently active, or interacting with content.",
  },
];

const settingTypes = [
  {
    title: "Profile Visibility",
    explanation:
      "Profile visibility controls who can see account information, bios, photos, posts, or activity.",
    smarterHabit:
      "Limit public profile details and avoid sharing private information in visible spaces.",
  },
  {
    title: "Message Controls",
    explanation:
      "Message settings may control who can send direct messages, friend requests, invites, or chat requests.",
    smarterHabit:
      "Be careful with messages from strangers or people the student does not know well.",
  },
  {
    title: "Tag and Mention Controls",
    explanation:
      "Tag settings may control whether other people can tag an account in photos, posts, comments, or videos.",
    smarterHabit:
      "Review tags before they appear publicly when the app allows it.",
  },
  {
    title: "Activity and Status Controls",
    explanation:
      "Some apps show when someone is online, recently active, watching, playing, or interacting.",
    smarterHabit:
      "Think about whether activity status reveals routines, habits, or availability.",
  },
];

const risks = [
  {
    title: "Public by Default",
    text: "Some accounts or posts may be more visible than students expect if default settings are not reviewed.",
  },
  {
    title: "Unwanted Contact",
    text: "Open message or friend request settings can allow strangers or unfamiliar users to contact students.",
  },
  {
    title: "Tags and Activity Clues",
    text: "Tags, mentions, online status, and activity can reveal where someone was, who they know, or when they are active.",
  },
];

const scenarios = [
  {
    title: "The Public Profile Surprise",
    situation:
      "A student creates a new account and assumes only classmates can see the profile. Later, they realize the profile is public.",
    warningSigns:
      "The student did not check visibility settings before adding profile details.",
    riskyResponse:
      "Leaving everything public because changing settings feels confusing.",
    smarterResponse:
      "Review profile visibility with a trusted adult and remove private details from public areas.",
    whyItWorks:
      "Checking visibility helps the student understand who can see their information before more people view it.",
  },
  {
    title: "The Stranger Message Request",
    situation:
      "A student receives direct messages from someone they do not know after joining a public online community.",
    warningSigns:
      "The student does not know the person, and the messages are not needed for school, gaming, or safe communication.",
    riskyResponse:
      "Replying because they do not want to seem rude.",
    smarterResponse:
      "Do not share private information, avoid continuing uncomfortable conversations, and use block, mute, report, or trusted adult help when needed.",
    whyItWorks:
      "Students do not have to continue conversations that feel strange, pushy, or unsafe.",
  },
  {
    title: "The Photo Tag",
    situation:
      "A friend tags a student in a photo that shows a school logo, location clue, and other classmates.",
    warningSigns:
      "The tag connects the student to a place, group, and image they may not want public.",
    riskyResponse:
      "Ignoring the tag because a friend posted it.",
    smarterResponse:
      "Ask the friend to remove it, review tag settings, and ask a trusted adult if the photo feels unsafe or embarrassing.",
    whyItWorks:
      "Tag controls help students manage how they appear online and protect privacy for themselves and others.",
  },
  {
    title: "The Online Status Problem",
    situation:
      "A student’s app shows when they are active. Other people begin asking why they were online but did not reply.",
    warningSigns:
      "Activity status is creating pressure and revealing when the student uses the app.",
    riskyResponse:
      "Replying to everyone immediately because they feel watched.",
    smarterResponse:
      "Review activity status settings with a trusted adult and set healthy boundaries for replying.",
    whyItWorks:
      "Students should not feel pressured to respond instantly just because an app shows activity.",
  },
];

const actionSteps = [
  "Review who can see profiles, posts, photos, comments, and activity.",
  "Limit private information in public or semi-public spaces.",
  "Be careful with messages, friend requests, or invites from unfamiliar people.",
  "Check tag and mention settings when available.",
  "Think about whether online status reveals routines or creates pressure.",
  "Ask a trusted adult before changing important account, privacy, or safety settings.",
];

const reflectionQuestions = [
  "Why are default settings not always the safest settings?",
  "What is one reason a student might limit who can message them?",
  "How can tags reveal information about a person?",
  "Why can activity status create pressure or privacy concerns?",
  "When should a student ask a trusted adult for help with settings?",
];

const skillCheck = [
  {
    question:
      "A student creates a profile and later realizes anyone can see it. What is the smarter response?",
    choices: [
      "Ignore it because the account is already made",
      "Review visibility settings, remove private details, and ask a trusted adult if the settings are confusing",
      "Add more details so people understand who owns the account",
    ],
    answer: "Choice B",
    explanation:
      "Reviewing visibility and removing private details helps the student reduce privacy risk.",
  },
  {
    question:
      "A stranger sends repeated messages after a student joins a public group. What should the student do?",
    choices: [
      "Keep replying so they do not seem rude",
      "Share personal details to find out if the person is trustworthy",
      "Avoid sharing private information and use block, mute, report, or trusted adult help if needed",
    ],
    answer: "Choice C",
    explanation:
      "Students do not need to continue conversations that feel strange, pushy, or unsafe.",
  },
  {
    question:
      "A friend tags a student in a photo that shows school and location clues. What is the main concern?",
    choices: [
      "Tags can connect the student to private details or places",
      "Tags are always private",
      "Only the person who posted the photo can be affected",
    ],
    answer: "Choice A",
    explanation:
      "Tags can connect someone’s account to a photo, location, group, or private detail.",
  },
  {
    question:
      "Why might activity status be a privacy concern?",
    choices: [
      "It can reveal when someone is active or create pressure to reply",
      "It makes the app load faster",
      "It automatically protects private information",
    ],
    answer: "Choice A",
    explanation:
      "Activity status can reveal habits, routines, or availability and may create pressure to respond.",
  },
];

const checklist = [
  "I can explain what privacy settings do.",
  "I can explain what account controls are.",
  "I can identify risks with public profiles and default settings.",
  "I can explain why message controls matter.",
  "I can recognize privacy risks with tags, mentions, and activity status.",
  "I know when to ask a trusted adult for help with settings.",
];

export default function PrivacySettingsAndAccountControlsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 2 • Lesson 2.4
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Privacy Settings and Account Controls
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Privacy settings and account controls help students decide who can see
          their profiles, posts, messages, tags, activity, and account details.
          This lesson teaches students to slow down and review settings instead
          of trusting defaults.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/privacy-and-personal-data/why-companies-want-data"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Previous Lesson
          </Link>

          <Link
            href="/junior/privacy-and-personal-data"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Back to Module 2
          </Link>

          <Link
            href="/junior/privacy-and-personal-data/oversharing-and-long-term-risk"
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
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Real-Life Hook</p>

          <div className="rounded-2xl border border-yellow-400/40 bg-yellow-400/10 p-8">
            <h2 className="text-3xl font-bold text-yellow-100 mb-4">
              A profile can be more public than a student realizes.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student creates an account and assumes only friends can
              see it. Later, they discover that their profile, bio, activity,
              and tagged photos are visible to a much larger audience. Privacy
              settings help students understand and control visibility.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Account settings can protect privacy when students know how to think
          about them.
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
            Settings shape who can see, contact, tag, and track activity.
          </h2>

          <p className="text-slate-300 leading-relaxed text-lg max-w-4xl">
            Middle school students use apps, games, school tools, and online
            communities where settings can affect privacy. If students never
            review settings, they may share more than they intended. Learning
            what settings do helps students reduce unwanted contact, protect
            private details, manage tags, and make smarter account choices.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Privacy settings are decision tools, not magic shields.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            Privacy settings can help limit who sees profiles, posts, photos,
            messages, tags, activity, and account details. They can also control
            who can send messages, friend requests, invites, or tags. These
            settings are useful, but students still need to think carefully
            before sharing information.
          </p>

          <p>
            Default settings are not always the safest choice for every student.
            Some apps may start with public profiles, open messages, visible
            activity, or easy tagging. Students should review settings with a
            trusted adult so they understand what each control means before
            changing important account options.
          </p>

          <p>
            Privacy settings also do not erase all risk. A private post can
            still be screenshotted. A friends-only message can still be shared.
            A tag can still connect someone to a photo. Settings help reduce
            risk, but safer choices and trusted adult support still matter.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for understanding privacy controls.
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
          Settings Breakdown
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Different controls protect different parts of an account.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {settingTypes.map((setting) => (
            <div
              key={setting.title}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6"
            >
              <h3 className="text-2xl font-bold text-cyan-200 mb-3">
                {setting.title}
              </h3>

              <p className="text-slate-300 leading-relaxed mb-5">
                {setting.explanation}
              </p>

              <div className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 p-4">
                <h4 className="font-bold text-emerald-200 mb-2">
                  Smarter Habit
                </h4>

                <p className="text-slate-200 leading-relaxed">
                  {setting.smarterHabit}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Risk Breakdown</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Settings risks often happen when students assume instead of checking.
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
          Do not assume settings are safe just because the account is new.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student creates a new account, adds private profile details,
              allows messages from anyone, and never checks visibility or tag
              settings.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student reviews visibility, limits private details, checks
              message and tag controls, and asks a trusted adult before changing
              important settings.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice using settings to reduce privacy risk.
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
          Use these habits when reviewing account settings.
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

            <h2 className="text-3xl font-bold mb-6">
              Choose first, then reveal the safer answer.
            </h2>

            <div className="space-y-4">
              {skillCheck.map((item, index) => (
                <div
                  key={item.question}
                  className="rounded-xl border border-slate-800 bg-slate-900/70 p-4"
                >
                  <p className="text-sm text-cyan-300 font-semibold mb-2">
                    Question {index + 1}
                  </p>

                  <h3 className="font-bold text-cyan-200 mb-3">
                    {item.question}
                  </h3>

                  <div className="space-y-2 mb-4">
                    {item.choices.map((choice, choiceIndex) => (
                      <div
                        key={choice}
                        className="rounded-lg border border-slate-800 bg-slate-950 p-3 text-slate-200"
                      >
                        <span className="font-bold text-cyan-200">
                          Choice {String.fromCharCode(65 + choiceIndex)}:
                        </span>{" "}
                        {choice}
                      </div>
                    ))}
                  </div>

                  <details className="rounded-lg border border-emerald-400/40 bg-emerald-400/10 p-3">
                    <summary className="cursor-pointer font-bold text-emerald-200">
                      Reveal safer response
                    </summary>

                    <div className="mt-3 text-slate-200 leading-relaxed">
                      <p className="font-bold mb-2">
                        Correct Answer: {item.answer}
                      </p>

                      <p>{item.explanation}</p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Junior Checklist</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Before finishing Lesson 2.4, students should be able to say:
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
            Lesson 2.4 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 2.5 will explain how oversharing and small details can
            create long-term privacy risks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/privacy-and-personal-data/why-companies-want-data"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Previous Lesson
            </Link>

            <Link
              href="/junior/privacy-and-personal-data"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Back to Module 2
            </Link>

            <Link
              href="/junior/privacy-and-personal-data/oversharing-and-long-term-risk"
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