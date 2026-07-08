import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const moduleSummary = [
  {
    title: "Personal data and private data are different.",
    text: "Personal data can describe someone, but private data needs stronger protection because it can affect privacy, safety, accounts, or reputation.",
  },
  {
    title: "App permissions should match the app’s purpose.",
    text: "Students learned to pause before allowing access to location, photos, contacts, camera, microphone, or other device features.",
  },
  {
    title: "Companies may use data in different ways.",
    text: "Apps and websites may use data for recommendations, personalization, advertising, analytics, and feature decisions.",
  },
  {
    title: "Privacy settings help control visibility.",
    text: "Students learned that settings can affect who sees profiles, posts, messages, tags, activity, and account details.",
  },
  {
    title: "Oversharing can create long-term risk.",
    text: "Small details, routines, photos, profile information, screenshots, and old posts can combine over time.",
  },
];

const vocabularyReview = [
  {
    term: "Personal Data",
    definition:
      "Information connected to a person, such as interests, profile activity, hobbies, or general details.",
  },
  {
    term: "Private Data",
    definition:
      "Sensitive information that should be protected, such as full name, address, phone number, school details, passwords, location, or account information.",
  },
  {
    term: "App Permission",
    definition:
      "A setting that allows an app to access part of a device, such as location, photos, contacts, camera, or microphone.",
  },
  {
    term: "Data Collection",
    definition:
      "The process of gathering information from users, accounts, devices, clicks, searches, settings, or activity.",
  },
  {
    term: "Privacy Settings",
    definition:
      "Controls that help decide who can see information, profiles, posts, messages, tags, activity, or account details.",
  },
  {
    term: "Oversharing",
    definition:
      "Sharing more information than is safe or necessary, especially in public or semi-public online spaces.",
  },
];

const scenarioReview = [
  {
    title: "Scenario 1: The Profile Form",
    situation:
      "A student creates a new profile and the app asks for full name, birthday, school, city, phone number, and a photo.",
    risk:
      "The profile asks for several private details that may not be needed.",
    smarterChoice:
      "Skip unnecessary private fields, share only safe information, and ask a trusted adult before entering sensitive details.",
  },
  {
    title: "Scenario 2: The App Permission Reward",
    situation:
      "A game offers a bonus reward if the student allows access to contacts.",
    risk:
      "Contacts include other people’s information, and the game does not need contacts to work.",
    smarterChoice:
      "Do not allow contact access for a reward, skip the reward, and ask a trusted adult if the app keeps pressuring them.",
  },
  {
    title: "Scenario 3: The Fun Quiz",
    situation:
      "A quiz asks for school, city, birthday, email, and contacts before showing a result.",
    risk:
      "The quiz asks for private details that are not needed for a fun activity.",
    smarterChoice:
      "Avoid entering private information, skip unnecessary fields, and ask a trusted adult if the quiz seems suspicious.",
  },
  {
    title: "Scenario 4: The Public Tag",
    situation:
      "A friend tags a student in a photo that shows school logos, badges, and location clues.",
    risk:
      "The tag connects the student to private details, a place, and other people.",
    smarterChoice:
      "Ask the friend to remove the tag or photo if needed, check tag settings, and ask a trusted adult if the situation feels unsafe.",
  },
];

const saferResponseQuestions = [
  {
    question:
      "A simple game asks for exact location, contacts, and microphone access. What is the smarter response?",
    choices: [
      "Allow everything because the app asked for it.",
      "Pause, question why the game needs those permissions, deny unnecessary access, and ask a trusted adult if unsure.",
      "Allow the permissions only if the app promises a reward.",
    ],
    answer: "Choice B",
    explanation:
      "Permissions should match the app’s purpose. A simple game usually does not need exact location, contacts, or microphone access.",
  },
  {
    question:
      "A student wants to post a photo, but the background shows a school logo and classroom number. What is the smarter response?",
    choices: [
      "Post it because the student is not saying the school name out loud.",
      "Choose a different photo, crop private details, or ask a trusted adult if unsure.",
      "Add a location tag so friends understand the photo better.",
    ],
    answer: "Choice B",
    explanation:
      "Photos can reveal private details through backgrounds, logos, signs, badges, documents, and location clues.",
  },
  {
    question:
      "A website promises a personalized result if a student enters their full name, school, city, birthday, and email. What should the student do?",
    choices: [
      "Enter everything because personalized results need real information.",
      "Use a friend’s information instead.",
      "Avoid entering private details and ask a trusted adult if the website seems suspicious.",
    ],
    answer: "Choice C",
    explanation:
      "Fun quizzes and websites should not require sensitive details. Students should avoid oversharing private data.",
  },
  {
    question:
      "A student posts school, team, practice time, and location every week. What is the main risk?",
    choices: [
      "Repeated posts can reveal a routine and location pattern.",
      "The posts are always safe because they are about activities.",
      "The posts only matter if the student shares a password.",
    ],
    answer: "Choice A",
    explanation:
      "Small details can connect over time and reveal more than expected, including routine, location, and school information.",
  },
];

const reflectionQuestions = [
  "What is one example of private data?",
  "Why should students pause before allowing app permissions?",
  "How can recommendations or ads be shaped by activity data?",
  "Why are privacy settings useful but not perfect?",
  "How can oversharing create long-term privacy risk?",
  "When should a student ask a trusted adult for help?",
];

const finalChecklist = [
  "I can explain the difference between personal data and private data.",
  "I can identify information that should not be shared publicly.",
  "I can pause before allowing app permissions.",
  "I can explain why companies may want data.",
  "I can review privacy settings and account controls thoughtfully.",
  "I can recognize oversharing and long-term privacy risk.",
  "I can choose safer responses in realistic privacy scenarios.",
  "I know when to ask a trusted adult, teacher, counselor, guardian, coach, or school technology staff member for help.",
];

const badgeSkills = [
  "Data privacy judgment",
  "Permission awareness",
  "Settings awareness",
  "Oversharing prevention",
  "Photo privacy thinking",
  "Trusted adult help-seeking",
];

export default function PrivacyAndPersonalDataCheckpointPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 2 • Lesson 2.6
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Privacy and Personal Data Checkpoint
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          This checkpoint reviews Module 2: Privacy and Personal Data. Students
          will review vocabulary, practice realistic privacy scenarios, choose
          safer responses, reflect on oversharing, and complete the Privacy
          Decision-Maker badge.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/privacy-and-personal-data/oversharing-and-long-term-risk"
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
            href="/junior#junior-learning-path"
            className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition text-center"
          >
            View Next Module
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
            Module Summary
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Module 2 taught how data, permissions, settings, and oversharing
            affect privacy.
          </h2>

          <div className="space-y-5">
            {moduleSummary.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-slate-950 border border-slate-800 p-6"
              >
                <h3 className="text-2xl font-bold text-cyan-200 mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-300 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">
          Vocabulary Review
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Review the key privacy words from this module.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vocabularyReview.map((word) => (
            <div
              key={word.term}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6"
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
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">
            Scenario Review
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Review each situation, identify the risk, and compare the smarter
            choice.
          </h2>

          <div className="space-y-6">
            {scenarioReview.map((scenario) => (
              <div
                key={scenario.title}
                className="rounded-2xl bg-slate-950 border border-slate-800 p-6"
              >
                <h3 className="text-2xl font-bold text-cyan-200 mb-4">
                  {scenario.title}
                </h3>

                <div className="grid lg:grid-cols-3 gap-4">
                  <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                    <h4 className="font-bold mb-2">
                      Situation
                    </h4>

                    <p className="text-slate-300 leading-relaxed">
                      {scenario.situation}
                    </p>
                  </div>

                  <div className="rounded-xl border border-red-400/40 bg-red-400/10 p-4">
                    <h4 className="font-bold text-red-200 mb-2">
                      Risk
                    </h4>

                    <p className="text-slate-200 leading-relaxed">
                      {scenario.risk}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 p-4">
                    <h4 className="font-bold text-emerald-200 mb-2">
                      Smarter Choice
                    </h4>

                    <p className="text-slate-200 leading-relaxed">
                      {scenario.smarterChoice}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">
          Choose the Safer Response
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Choose first, then reveal the safer answer.
        </h2>

        <div className="space-y-5">
          {saferResponseQuestions.map((item, index) => (
            <div
              key={item.question}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6"
            >
              <p className="text-sm text-cyan-300 font-semibold mb-3">
                Question {index + 1}
              </p>

              <h3 className="text-2xl font-bold mb-5">
                {item.question}
              </h3>

              <div className="space-y-3 mb-5">
                {item.choices.map((choice, choiceIndex) => (
                  <div
                    key={choice}
                    className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-slate-200"
                  >
                    <span className="font-bold text-cyan-200">
                      Choice {String.fromCharCode(65 + choiceIndex)}:
                    </span>{" "}
                    {choice}
                  </div>
                ))}
              </div>

              <details className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 p-4">
                <summary className="cursor-pointer font-bold text-emerald-200">
                  Reveal safer response
                </summary>

                <div className="mt-4 text-slate-200 leading-relaxed">
                  <p className="font-bold mb-2">
                    Correct Answer: {item.answer}
                  </p>

                  <p>{item.explanation}</p>
                </div>
              </details>
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

            <h2 className="text-3xl font-bold mb-6">
              Think about how Module 2 connects to real life.
            </h2>

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
            <p className="text-cyan-300 font-semibold mb-3">
              Junior Skill Badge
            </p>

            <h2 className="text-3xl font-bold mb-6">
              Privacy Decision-Maker
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              This badge means students can explain personal data, private data,
              permissions, privacy settings, data collection, and oversharing.
              It also means students can choose safer responses in realistic
              privacy situations.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {badgeSkills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-xl border border-cyan-400/40 bg-cyan-400/10 p-4 text-slate-200"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">
          Final Module 2 Checklist
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Before finishing Module 2, students should be able to say:
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {finalChecklist.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 p-4 text-slate-200"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-8 text-center">
            <p className="text-emerald-200 font-semibold mb-3">
              Module 2 Complete
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              You completed Privacy and Personal Data.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg max-w-4xl mx-auto">
              Students are now ready to continue into the next Junior module:
              Passwords, Accounts, and Login Safety, where they will learn why
              accounts are valuable and how safer login habits protect digital
              life.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="max-w-5xl mx-auto rounded-2xl bg-slate-900/70 border border-slate-800 p-8 text-center">
          <p className="text-cyan-300 font-semibold mb-3">
            Navigation
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Module 2 review complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Use the buttons below to revisit Module 2 or return to the Junior
            learning path.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/privacy-and-personal-data/oversharing-and-long-term-risk"
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
              href="/junior#junior-learning-path"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition text-center"
            >
              View Next Module
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}