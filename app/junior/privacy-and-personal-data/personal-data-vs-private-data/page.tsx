import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain the difference between personal data and private data",
  "Identify details that should not be shared publicly",
  "Understand why some data needs stronger protection",
  "Recognize how small details can combine into a bigger privacy risk",
  "Practice making smarter choices before sharing information online",
];

const vocabulary = [
  {
    term: "Data",
    definition:
      "Information that can describe something or someone. Online data can include profile details, posts, settings, clicks, photos, and account activity.",
  },
  {
    term: "Personal Data",
    definition:
      "Information connected to a person, such as interests, hobbies, general age range, favorite subjects, or profile activity.",
  },
  {
    term: "Private Data",
    definition:
      "Sensitive information that should be protected, such as full name, address, phone number, passwords, school details, location, account information, or personal documents.",
  },
  {
    term: "Sensitive Information",
    definition:
      "Information that could cause privacy, safety, account, or reputation problems if shared with the wrong audience.",
  },
  {
    term: "Oversharing",
    definition:
      "Sharing more information than is safe or necessary, especially in public or semi-public online spaces.",
  },
  {
    term: "Data Clues",
    definition:
      "Small pieces of information that may seem harmless alone but can reveal more when combined with other details.",
  },
];

const dataExamples = [
  {
    title: "Lower-Risk Personal Data",
    examples: [
      "Favorite school subject without naming the school",
      "General hobbies like art, cricket, reading, coding, or music",
      "Favorite type of game without sharing the account login",
      "A safe nickname that does not reveal real identity",
    ],
    reminder:
      "Even lower-risk data should still be shared thoughtfully depending on the audience.",
  },
  {
    title: "Private Data",
    examples: [
      "Full name with school name",
      "Home address or exact location",
      "Phone number or personal email",
      "Passwords or login codes",
      "Student ID, account details, or personal documents",
    ],
    reminder:
      "Private data should not be posted publicly or shared with strangers online.",
  },
  {
    title: "Data That Can Become Risky When Combined",
    examples: [
      "City plus school plus team name",
      "Profile photo plus school logo",
      "Username plus graduation year plus real first name",
      "Daily routine plus location clues",
      "Birthday plus full name plus account details",
    ],
    reminder:
      "Small details can connect together and reveal more than expected.",
  },
];

const risks = [
  {
    title: "Small Details Add Up",
    text: "One detail may seem harmless, but several details together can reveal school, location, identity, or routine.",
  },
  {
    title: "Wrong Audience",
    text: "Information meant for friends can reach strangers, classmates, screenshots, group chats, or public spaces.",
  },
  {
    title: "Account and Safety Problems",
    text: "Private data like passwords, login codes, recovery details, or personal documents can create account or safety risks.",
  },
];

const scenarios = [
  {
    title: "The Profile Setup",
    situation:
      "A student creates a new profile and the app asks for full name, birthday, school, city, phone number, and a profile photo.",
    warningSigns:
      "The profile asks for several personal and private details that may not be needed.",
    riskyResponse:
      "Filling in every field because the app makes the profile look incomplete.",
    smarterResponse:
      "Only add safe information, skip unnecessary private details, and ask a trusted adult before sharing anything sensitive.",
    whyItWorks:
      "The student can use the profile without giving away more information than needed.",
  },
  {
    title: "The School Logo Photo",
    situation:
      "A student wants to post a photo, but the background clearly shows a school logo and classroom number.",
    warningSigns:
      "The photo reveals school information and possibly a location inside the school.",
    riskyResponse:
      "Posting it because the student is not directly saying the school name.",
    smarterResponse:
      "Choose a different photo, crop out private details, or ask a trusted adult if unsure.",
    whyItWorks:
      "Removing location clues lowers the chance of revealing private school information.",
  },
  {
    title: "The Gaming Friend Question",
    situation:
      "A gaming friend asks for the student’s real name, city, age, school, and regular play schedule.",
    warningSigns:
      "The questions are personal and not needed to play the game.",
    riskyResponse:
      "Answering because the person has been friendly in the game.",
    smarterResponse:
      "Do not share private details, keep the conversation about the game, and ask a trusted adult if the questions feel uncomfortable.",
    whyItWorks:
      "Friendly online behavior does not mean someone needs real-life private information.",
  },
  {
    title: "The Small Clues Problem",
    situation:
      "A student never posts their address, but they post their school team, city, practice time, and a photo near their neighborhood.",
    warningSigns:
      "Each detail seems small, but together they reveal a lot about the student’s routine.",
    riskyResponse:
      "Keeping all the posts public because no single post gives the full address.",
    smarterResponse:
      "Remove or limit posts with location and routine clues, and review privacy settings with a trusted adult.",
    whyItWorks:
      "Reducing connected clues helps protect privacy even when no one detail seems dangerous by itself.",
  },
];

const actionSteps = [
  "Before sharing, ask: Is this general information or private information?",
  "Avoid posting full name, address, phone number, school, exact location, passwords, login codes, or account details.",
  "Check photos for background clues like school logos, street signs, documents, uniforms, or house numbers.",
  "Do not answer personal questions from strangers in games, chats, or online communities.",
  "Remember that small details can combine into a bigger privacy risk.",
  "Ask a trusted adult when an app, website, game, or person asks for sensitive information.",
];

const reflectionQuestions = [
  "What is one example of private data?",
  "Why can small details become risky when combined?",
  "What is one thing students should check before posting a photo?",
  "Why should students be careful when a gaming friend asks personal questions?",
  "When should a student ask a trusted adult before sharing information?",
];

const skillCheck = [
  {
    question:
      "A student is making a public profile. Which detail is safest to include?",
    choices: [
      "Their full name and school name",
      "A general hobby like drawing, coding, cricket, or music",
      "Their phone number so friends can contact them",
    ],
    answer: "Choice B",
    explanation:
      "A general hobby can show personality without revealing private identity, school, location, or contact information.",
  },
  {
    question:
      "A student posts their city, school team, practice time, and a photo near their neighborhood. What is the main risk?",
    choices: [
      "The details can combine to reveal more than expected",
      "The post is automatically safe because there is no password",
      "The post is only risky if the student writes their full address",
    ],
    answer: "Choice A",
    explanation:
      "Small clues can connect together. Even without an exact address, the post may reveal location, routine, or school details.",
  },
  {
    question:
      "A game asks for contacts, phone number, and real name before giving a reward. What is the smarter response?",
    choices: [
      "Enter the information quickly to get the reward",
      "Use a friend’s information instead",
      "Pause, do not enter private data, and ask a trusted adult for help",
    ],
    answer: "Choice C",
    explanation:
      "Rewards can pressure students to share information. Private data should not be entered without trusted adult help.",
  },
  {
    question:
      "What should a student do before posting a photo online?",
    choices: [
      "Check the background for private details or location clues",
      "Post it immediately before overthinking",
      "Add school and location tags so friends understand the photo",
    ],
    answer: "Choice A",
    explanation:
      "Photos can reveal private information through backgrounds, logos, signs, documents, uniforms, or location clues.",
  },
];

const checklist = [
  "I can explain the difference between personal data and private data.",
  "I can identify details that should not be shared publicly.",
  "I can explain how small clues can combine into a bigger privacy risk.",
  "I can check photos and profiles for private information.",
  "I can choose a smarter response when someone asks for private details.",
  "I know when to ask a trusted adult for help.",
];

export default function PersonalDataVsPrivateDataPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 2 • Lesson 2.1
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Personal Data vs Private Data
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Not all information has the same risk level. Some personal data can be
          safe to share in the right place, while private data needs stronger
          protection because it can affect privacy, safety, accounts, or
          reputation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/privacy-and-personal-data"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Back to Module 2
          </Link>

          <Link
            href="/junior/privacy-and-personal-data/location-photos-contacts-and-app-permissions"
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
              A profile question can seem simple, but the answer may reveal more than expected.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student creates a new account for a game or school club
              tool. The profile asks for name, birthday, city, school, phone
              number, and a photo. Some fields may be optional, but the student
              may feel like they have to fill everything out. This is where
              privacy judgment matters.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Safer sharing starts with knowing what kind of data you are handling.
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
            Privacy problems often happen when students share more than they realize.
          </h2>

          <p className="text-slate-300 leading-relaxed text-lg max-w-4xl">
            Middle school students use apps, games, school platforms, group
            chats, and websites that may ask for information. Some information
            is low-risk in the right setting, but some details should stay
            private. Learning the difference helps students avoid oversharing,
            protect accounts, and understand when to ask a trusted adult.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Personal data and private data are connected, but they are not the same.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            Personal data is information connected to a person. It may include
            interests, hobbies, general activity, favorite topics, profile
            choices, or online behavior. Some personal data can be shared safely
            when it does not reveal identity, location, account access, or
            sensitive details.
          </p>

          <p>
            Private data is more sensitive. It includes information like full
            name, address, phone number, exact location, passwords, login codes,
            school details, personal documents, account recovery details, or
            anything that could create safety, account, or reputation problems
            if shared with the wrong person.
          </p>

          <p>
            The tricky part is that small pieces of personal data can combine.
            A city, school team, profile photo, and practice time may each seem
            harmless alone, but together they can reveal a student’s routine or
            location. This is why students should think about the full picture
            before sharing.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for understanding data privacy.
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
          Data Sorting Lab
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Different kinds of data need different levels of caution.
        </h2>

        <div className="grid lg:grid-cols-3 gap-6">
          {dataExamples.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6"
            >
              <h3 className="text-2xl font-bold text-cyan-200 mb-4">
                {group.title}
              </h3>

              <div className="space-y-3 mb-5">
                {group.examples.map((example) => (
                  <div
                    key={example}
                    className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-slate-200"
                  >
                    {example}
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-yellow-400/40 bg-yellow-400/10 p-4">
                <h4 className="font-bold text-yellow-200 mb-2">Reminder</h4>

                <p className="text-slate-200 leading-relaxed">
                  {group.reminder}
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
            Data risks often come from sharing too much with the wrong audience.
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
          Share personality, not private information.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student fills out every profile field with full name, school,
              city, birthday, phone number, and daily routine because the app
              asks for it.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student skips unnecessary private details, shares only safe
              interests when appropriate, checks privacy settings, and asks a
              trusted adult before sharing sensitive information.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice deciding what information should stay private.
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
          Use these habits before sharing information online.
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
          Before finishing Lesson 2.1, students should be able to say:
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
            Lesson 2.1 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 2.2 will explain how location, photos, contacts, and
            app permissions can affect privacy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/privacy-and-personal-data"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Back to Module 2
            </Link>

            <Link
              href="/junior/privacy-and-personal-data/location-photos-contacts-and-app-permissions"
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