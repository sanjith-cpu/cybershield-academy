import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain what oversharing means",
  "Understand how small details can combine into a bigger privacy risk",
  "Recognize long-term risks from posts, photos, profiles, and routines",
  "Identify warning signs before sharing too much information",
  "Practice safer choices when deciding what to post, share, or save online",
];

const vocabulary = [
  {
    term: "Oversharing",
    definition:
      "Sharing more information than is safe or necessary, especially in public or semi-public online spaces.",
  },
  {
    term: "Long-Term Risk",
    definition:
      "A risk that may not cause a problem immediately but can matter later because content, data, or screenshots may last.",
  },
  {
    term: "Data Trail",
    definition:
      "The pattern of information someone leaves behind through posts, photos, profiles, clicks, messages, and account activity.",
  },
  {
    term: "Routine Clue",
    definition:
      "A detail that reveals where someone goes, when they are active, or what they usually do.",
  },
  {
    term: "Context Clue",
    definition:
      "A small detail in a post, photo, comment, or profile that can help others figure out more information.",
  },
  {
    term: "Audience Growth",
    definition:
      "When content reaches more people than expected through screenshots, reposts, tags, shares, or public visibility.",
  },
];

const oversharingPatterns = [
  {
    title: "Too Many Location Clues",
    explanation:
      "Posting school names, city details, team locations, street signs, or hangout spots can reveal where someone spends time.",
    smarterHabit:
      "Keep location details general and avoid posting exact places or routines.",
  },
  {
    title: "Too Much Routine Information",
    explanation:
      "Sharing practice times, bus routes, after-school plans, or when someone is home or away can reveal patterns.",
    smarterHabit:
      "Avoid posting schedules or routines publicly.",
  },
  {
    title: "Too Many Identity Details",
    explanation:
      "A full name, school, grade, team, username, and photo can combine into a clear real-life identity.",
    smarterHabit:
      "Use safe usernames and profiles that do not connect too many private details.",
  },
  {
    title: "Too Much Emotional Sharing",
    explanation:
      "Posting private feelings, conflicts, or drama publicly can create screenshots, rumors, or reputation problems.",
    smarterHabit:
      "Talk to trusted people privately instead of posting sensitive feelings for a large audience.",
  },
];

const risks = [
  {
    title: "Small Clues Combine",
    text: "One post may not reveal much, but multiple posts can connect into a bigger picture of identity, location, and routine.",
  },
  {
    title: "Old Content Can Return",
    text: "Screenshots, reposts, saved photos, and old comments can appear later and affect reputation.",
  },
  {
    title: "Audience Can Grow",
    text: "Something shared with friends can spread to classmates, teams, teachers, strangers, or future groups.",
  },
];

const scenarios = [
  {
    title: "The Practice Schedule Posts",
    situation:
      "A student posts their team name, school, practice time, and a photo from the same field every week.",
    warningSigns:
      "The posts reveal a repeated routine and a location connected to the student.",
    riskyResponse:
      "Keeping every post public because each post seems normal by itself.",
    smarterResponse:
      "Avoid posting exact routines, limit audience when appropriate, remove location clues, and ask a trusted adult if unsure.",
    whyItWorks:
      "Reducing routine and location clues helps protect privacy over time.",
  },
  {
    title: "The School Trip Photo",
    situation:
      "A student posts a photo from a school trip with badges, school name, classmates, and location signs visible.",
    warningSigns:
      "The photo reveals school identity, location, and other students who may not have agreed to be posted.",
    riskyResponse:
      "Posting it publicly because it is a fun memory.",
    smarterResponse:
      "Crop or choose a safer photo, avoid tagging people without permission, and ask before posting about others.",
    whyItWorks:
      "The student can share positive moments without exposing private details or other people.",
  },
  {
    title: "The Personal Story Post",
    situation:
      "A student feels upset after a conflict and wants to post a long public story about what happened.",
    warningSigns:
      "The post includes private emotions, another person’s name, and details that could create drama or screenshots.",
    riskyResponse:
      "Posting immediately so everyone knows their side.",
    smarterResponse:
      "Pause, talk to a trusted adult or trusted person privately, and avoid posting details that could hurt others or spread.",
    whyItWorks:
      "Private support is safer than public conflict, especially when emotions are strong.",
  },
  {
    title: "The Profile Detail Stack",
    situation:
      "A student’s profile includes first name, school initials, grade, favorite hangout spot, team name, and city.",
    warningSigns:
      "The profile combines many small details that reveal identity and routine.",
    riskyResponse:
      "Leaving the profile unchanged because none of the details feels dangerous alone.",
    smarterResponse:
      "Remove school, city, schedule, and location clues, and keep safe interests instead.",
    whyItWorks:
      "A safer profile can still show personality without connecting too many private details.",
  },
];

const actionSteps = [
  "Before posting, ask: What could this reveal if someone saw it later?",
  "Look for school names, logos, street signs, house numbers, uniforms, badges, documents, and location clues in photos.",
  "Avoid sharing repeated routines, exact schedules, or regular locations.",
  "Do not post private conflicts or emotional details publicly when upset.",
  "Ask before posting photos, messages, or stories involving other people.",
  "Review old posts and profiles with a trusted adult if something feels too revealing.",
];

const reflectionQuestions = [
  "What is one example of oversharing?",
  "Why can small details become risky when combined?",
  "What is one routine clue students should avoid posting publicly?",
  "Why can old content create long-term risk?",
  "What should a student do before posting about another person?",
];

const skillCheck = [
  {
    question:
      "A student posts their school name, team name, practice time, and location every week. What is the main risk?",
    choices: [
      "The posts reveal a repeated routine and location pattern",
      "The posts are automatically safe because they are about sports",
      "The posts only matter if the student shares a password",
    ],
    answer: "Choice A",
    explanation:
      "Repeated posts can reveal patterns about where a student goes and when they are there.",
  },
  {
    question:
      "A student wants to post a school trip photo with classmates, badges, and location signs visible. What is the smarter response?",
    choices: [
      "Post it publicly because it is a fun memory",
      "Crop or choose a safer photo, avoid private details, and ask before posting about others",
      "Tag everyone so more people can see it",
    ],
    answer: "Choice B",
    explanation:
      "Photos can reveal private details and include other people, so students should check carefully before posting.",
  },
  {
    question:
      "A student is upset and wants to post a public story naming someone from a conflict. What should they do first?",
    choices: [
      "Post it quickly before calming down",
      "Add screenshots so people believe them",
      "Pause and talk to a trusted adult or trusted person privately",
    ],
    answer: "Choice C",
    explanation:
      "Posting while upset can make conflict bigger. Private support is usually safer than public drama.",
  },
  {
    question:
      "Why can old posts become a long-term risk?",
    choices: [
      "Old posts can be saved, screenshotted, found later, or affect reputation",
      "Old posts disappear from everyone’s devices automatically",
      "Old posts only matter for adults",
    ],
    answer: "Choice A",
    explanation:
      "Online content can last through screenshots, reposts, saves, and searches, so old posts may still matter later.",
  },
];

const checklist = [
  "I can explain what oversharing means.",
  "I can identify small details that may combine into a privacy risk.",
  "I can recognize routine clues in posts and photos.",
  "I can explain why old content can create long-term risk.",
  "I can choose a smarter response before posting private or emotional information.",
  "I know when to ask a trusted adult for help.",
];

export default function OversharingAndLongTermRiskPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 2 • Lesson 2.5
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Oversharing and Long-Term Risk
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Oversharing happens when someone shares more information than is safe
          or necessary. This lesson helps students understand how small details,
          routines, photos, and old posts can create privacy risks over time.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/privacy-and-personal-data/privacy-settings-and-account-controls"
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
            href="/junior/privacy-and-personal-data/review"
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
              One post may seem harmless, but many small clues can tell a bigger story.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student never posts their home address, but they often
              post their school, team name, practice time, neighborhood photos,
              and favorite hangout spot. Each post may seem small, but together
              they reveal a lot about the student’s routine.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Oversharing is often about patterns, not just one post.
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
            Privacy risk can grow slowly when information keeps adding up.
          </h2>

          <p className="text-slate-300 leading-relaxed text-lg max-w-4xl">
            Middle school students may post photos, comments, stories, profile
            details, schedules, and updates without thinking about how they
            connect. A single detail may not seem serious, but repeated details
            can reveal identity, location, habits, friendships, school life, and
            routines. Learning to spot oversharing helps students protect
            privacy before problems grow.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Oversharing means giving away more of the picture than intended.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            Oversharing is not always obvious. A student might share a safe
            interest, a photo, a team name, a city, or an after-school activity.
            One detail may feel harmless, but when details are repeated or
            combined, they can reveal more than the student expected.
          </p>

          <p>
            Long-term risk happens when information lasts or returns later. Old
            posts, screenshots, saved photos, reposts, tags, and comments can
            still affect privacy or reputation after the student has moved on.
            This is why students should think before sharing and review old
            content when needed.
          </p>

          <p>
            The goal is not to stop students from sharing anything. The goal is
            to share thoughtfully. Students can still post interests,
            achievements, creativity, and positive moments while avoiding exact
            locations, schedules, private documents, personal conflicts, and
            details about other people.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for understanding oversharing.
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
          Oversharing Pattern Breakdown
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Oversharing can happen in different ways.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {oversharingPatterns.map((pattern) => (
            <div
              key={pattern.title}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6"
            >
              <h3 className="text-2xl font-bold text-cyan-200 mb-3">
                {pattern.title}
              </h3>

              <p className="text-slate-300 leading-relaxed mb-5">
                {pattern.explanation}
              </p>

              <div className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 p-4">
                <h4 className="font-bold text-emerald-200 mb-2">
                  Smarter Habit
                </h4>

                <p className="text-slate-200 leading-relaxed">
                  {pattern.smarterHabit}
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
            Long-term risk grows when details are saved, shared, or connected.
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
          Share thoughtfully instead of sharing everything.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student posts their school, team, city, practice schedule,
              hangout spots, emotional conflicts, and photos with location clues
              all on a public profile.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student shares safe interests and positive moments while
              avoiding exact locations, routines, private conflicts, school
              details, and posts involving others without permission.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice spotting oversharing before it becomes a bigger problem.
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
          Use these habits before posting, sharing, tagging, or updating profiles.
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
          Before finishing Lesson 2.5, students should be able to say:
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
            Lesson 2.5 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 2.6 will review privacy, data, permissions, settings,
            oversharing, and safer sharing choices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/privacy-and-personal-data/privacy-settings-and-account-controls"
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
              href="/junior/privacy-and-personal-data/review"
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