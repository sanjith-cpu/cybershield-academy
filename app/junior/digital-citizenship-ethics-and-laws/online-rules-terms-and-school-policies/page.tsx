import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain why online rules, terms, and school policies exist",
  "Understand that apps, websites, games, and school tools can have rules students are expected to follow",
  "Recognize risky choices like ignoring rules, creating accounts without permission, or trying to get around school settings",
  "Practice safer decisions before accepting terms, using school devices, joining platforms, or sharing content",
  "Know when to ask a trusted adult, teacher, or school staff member before making a digital choice",
];

const vocabulary = [
  {
    term: "Online Rules",
    definition:
      "The directions, limits, and expectations that explain what people should and should not do on apps, websites, games, chats, and online platforms.",
  },
  {
    term: "Terms of Service",
    definition:
      "The rules a person agrees to when using an app, website, game, or online tool. These may include age rules, privacy rules, and behavior rules.",
  },
  {
    term: "School Policy",
    definition:
      "A school rule that explains how students should use school devices, school accounts, Wi-Fi, apps, learning tools, and online communication.",
  },
  {
    term: "Acceptable Use Policy",
    definition:
      "A school technology agreement that explains responsible ways to use school computers, tablets, networks, accounts, and online tools.",
  },
  {
    term: "Permission",
    definition:
      "Approval from a trusted adult, teacher, school, parent, guardian, or platform before using a tool, sharing something, changing settings, or joining a service.",
  },
  {
    term: "Consequence",
    definition:
      "A result that can happen after a choice, such as losing access, needing a parent meeting, fixing harm, apologizing, or following a school discipline process.",
  },
];

const rulesSituations = [
  {
    title: "Signing Up for an App",
    explanation:
      "A student wants to create an account for a game, social platform, AI tool, or study app and sees a long list of terms or an age question.",
    saferChoice:
      "Pause before agreeing. Check whether the app is allowed, age-appropriate, and safe, and ask a trusted adult when unsure.",
  },
  {
    title: "Using a School Device",
    explanation:
      "A student uses a school laptop, tablet, account, or Wi-Fi network and wants to change settings, install something, or use it for a personal activity.",
    saferChoice:
      "Follow school technology rules, use school devices for approved purposes, and ask a teacher or school staff member before changing settings.",
  },
  {
    title: "Class Platform or Group Tool",
    explanation:
      "A student posts in a class chat, learning platform, shared document, or group project space where classmates and teachers may see the activity.",
    saferChoice:
      "Communicate respectfully, stay on topic, protect personal information, and remember that school spaces are not private hangout spaces.",
  },
  {
    title: "Content and Permission",
    explanation:
      "A student wants to share a photo, screenshot, copied text, project file, or classmate's work on a platform or school assignment.",
    saferChoice:
      "Check permission, give credit when needed, follow teacher directions, and avoid sharing other people's information or work without approval.",
  },
];

const warningSigns = [
  {
    title: "Agreeing Without Understanding",
    text: "A student clicks agree, accepts terms, or creates an account without understanding what rules, age limits, privacy settings, or permissions are involved.",
  },
  {
    title: "Rules Are Being Ignored",
    text: "Someone says school rules, app rules, or teacher directions do not matter because they probably will not get caught.",
  },
  {
    title: "Trying to Get Around Limits",
    text: "A student wants to bypass a school setting, install an unapproved tool, use a blocked site, or change device settings without permission.",
  },
  {
    title: "Wrong Account or Wrong Place",
    text: "A student uses a school account, class chat, shared document, or school device for private jokes, personal arguments, risky links, or unrelated content.",
  },
  {
    title: "No Permission to Share",
    text: "A student wants to post a photo, screenshot, message, assignment, or classmate's work without asking whether it is allowed.",
  },
  {
    title: "Pressure From Friends",
    text: "A friend says to ignore the rules, lie about age, share a login, accept terms quickly, or use a tool even though it feels questionable.",
  },
];

const scenarios = [
  {
    title: "The New Study App",
    situation:
      "A student finds a study app that looks helpful. Before using it, the app asks for an account, an age confirmation, and agreement to terms the student does not understand.",
    warningSigns:
      "The student is being asked to agree to rules and share account information without understanding the details.",
    riskyResponse:
      "Click agree quickly and create the account without checking whether the app is allowed or appropriate.",
    smarterResponse:
      "Pause, check with a trusted adult or teacher, and use a school-approved tool if one is available.",
    whyItWorks:
      "Students should not agree to terms or create accounts when they do not understand the rules, privacy expectations, or age requirements.",
  },
  {
    title: "The School Laptop Shortcut",
    situation:
      "A classmate says they know a way to change settings on a school laptop so games and blocked pages will work during class.",
    warningSigns:
      "The suggestion involves getting around school rules and changing a school device without permission.",
    riskyResponse:
      "Follow the classmate's instructions because it seems fun and easy.",
    smarterResponse:
      "Do not try to get around school settings. Use the device for approved schoolwork and ask a teacher if something needed for class is blocked by mistake.",
    whyItWorks:
      "School devices and networks have rules to protect students, learning time, privacy, and security. Students should not try to bypass them.",
  },
  {
    title: "The Class Chat Joke",
    situation:
      "A student wants to post a joke in a class group chat, but the joke is about another student's mistake and could embarrass them.",
    warningSigns:
      "The message is in a school space and could hurt or target another person.",
    riskyResponse:
      "Post the joke because classmates might laugh.",
    smarterResponse:
      "Do not post it. Keep school chats respectful, helpful, and connected to the purpose of the class or group.",
    whyItWorks:
      "School online spaces still have behavior expectations. Respectful choices protect classmates and prevent digital drama.",
  },
  {
    title: "The Shared Screenshot",
    situation:
      "A student takes a screenshot from a school platform that includes a classmate's name and work, then considers posting it in another chat.",
    warningSigns:
      "The screenshot includes another person's information and schoolwork, and permission has not been given.",
    riskyResponse:
      "Share the screenshot because it is already on the school platform.",
    smarterResponse:
      "Do not share it without permission. Ask a teacher or trusted adult what is allowed.",
    whyItWorks:
      "School platforms are not permission to repost other people's names, work, or information somewhere else.",
  },
];

const actionSteps = [
  "Pause before accepting terms, creating accounts, or joining new online tools.",
  "Ask whether the app, website, or platform is allowed for your age and purpose.",
  "Use school devices, school accounts, and school Wi-Fi for approved school activities.",
  "Do not try to get around school filters, settings, or device rules.",
  "Check permission before sharing photos, screenshots, messages, schoolwork, or group content.",
  "Ask a trusted adult, teacher, or school staff member when a rule, tool, or online choice feels unclear.",
];

const reflectionQuestions = [
  "Why do apps, websites, games, and school tools have rules?",
  "Why should students pause before accepting terms or creating accounts?",
  "Why is it risky to try to get around school device or network rules?",
  "How can school policies protect students and learning time?",
  "Who can students ask when an online rule or permission question feels confusing?",
];

const skillCheck = [
  {
    question:
      "A student wants to create an account for a new app but does not understand the terms. What is the safer response?",
    choices: [
      "Click agree quickly so they can start using it",
      "Pause and ask a trusted adult or teacher before creating the account",
      "Use a fake age so the app accepts the signup",
    ],
    answer: "Choice B",
    explanation:
      "Students should not agree to terms or create accounts when they do not understand the rules, privacy expectations, or age requirements.",
  },
  {
    question:
      "A classmate says they know how to get around school laptop restrictions. What is the warning sign?",
    choices: [
      "They are suggesting a shortcut around school rules",
      "They are talking about a laptop",
      "They are in the same class",
    ],
    answer: "Choice A",
    explanation:
      "Trying to get around school settings or device rules is not a safe or responsible choice. Students should ask a teacher if something needed for class is blocked by mistake.",
  },
  {
    question:
      "A student wants to share a screenshot from a school platform that includes another student's work. What should they do first?",
    choices: [
      "Share it because school platforms are public",
      "Check permission and ask a teacher or trusted adult if unsure",
      "Post it in a group chat and delete it later",
    ],
    answer: "Choice B",
    explanation:
      "Screenshots can include private or school-related information. Students should check permission before sharing someone else's work or details.",
  },
  {
    question:
      "What is a good digital citizenship habit when using school devices or accounts?",
    choices: [
      "Use them for approved school purposes and follow school technology rules",
      "Change settings whenever something is annoying",
      "Share logins with friends to save time",
    ],
    answer: "Choice A",
    explanation:
      "School devices and accounts come with rules that protect students, learning, privacy, and security.",
  },
];

const checklist = [
  "I can explain why online rules and school policies exist.",
  "I can pause before accepting terms or creating new accounts.",
  "I can recognize why school devices, accounts, and Wi-Fi have rules.",
  "I can avoid trying to get around school filters, settings, or restrictions.",
  "I can check permission before sharing screenshots, photos, messages, or schoolwork.",
  "I know when to ask a trusted adult, teacher, or school staff member for help.",
];

export default function OnlineRulesTermsAndSchoolPoliciesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 11 • Lesson 11.2
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Online Rules, Terms, and School Policies
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Online rules, terms, and school policies help students use apps,
          websites, games, devices, accounts, and school tools in safer and more
          responsible ways. This lesson teaches students to pause before
          agreeing, signing up, changing settings, sharing content, or using
          school technology.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/digital-citizenship-ethics-and-laws/what-digital-citizenship-means"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Previous Lesson
          </Link>

          <Link
            href="/junior/digital-citizenship-ethics-and-laws"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Back to Module 11
          </Link>

          <Link
            href="/junior/digital-citizenship-ethics-and-laws/copyright-credit-and-creative-work"
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
              Rules are part of using digital spaces responsibly.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student opens a new app, uses a school laptop, posts in
              a class chat, or joins an online tool. Even if the tool feels easy
              to use, there may be rules about age, privacy, behavior,
              permissions, and school expectations. Responsible students pause
              before agreeing or acting.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Rules help students make safer, more respectful digital choices.
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
          <p className="text-cyan-300 font-semibold mb-3">Safety Rule</p>

          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-8">
            <h2 className="text-3xl font-bold text-red-200 mb-4">
              Do not try to get around rules, filters, settings, or permissions.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              CyberShield Academy teaches responsible decision-making only.
              Students should not bypass school settings, share logins, create
              accounts with false information, ignore age rules, or accept terms
              they do not understand. Ask a trusted adult or teacher for help.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Online rules explain what is allowed, expected, and safe.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            Apps, websites, games, school devices, school accounts, and online
            platforms often have rules. These rules may explain who can use the
            tool, what information can be collected, how people should behave,
            what content is allowed, and what can happen if rules are broken.
          </p>

          <p>
            School policies also matter. A school device or account is usually
            meant for learning and approved activities. Students may not be
            allowed to install tools, change settings, share logins, post
            unrelated content, use blocked websites, or share class information
            without permission.
          </p>

          <p>
            Students do not need to understand every legal detail by themselves.
            A safer habit is to pause before accepting terms, creating accounts,
            using school technology in a new way, or sharing content. When a
            rule is unclear, a trusted adult, teacher, or school staff member can
            help students make the responsible choice.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for understanding rules, terms, and policies.
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
          Rules and Policy Situation Breakdown
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Digital tools can create rule and permission decisions.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {rulesSituations.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6"
            >
              <h3 className="text-2xl font-bold text-cyan-200 mb-3">
                {item.title}
              </h3>

              <p className="text-slate-300 leading-relaxed mb-5">
                {item.explanation}
              </p>

              <div className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 p-4">
                <h4 className="font-bold text-emerald-200 mb-2">
                  Safer Choice
                </h4>

                <p className="text-slate-200 leading-relaxed">
                  {item.saferChoice}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Warning Signs</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Responsible students notice when a choice may break rules or trust.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {warningSigns.map((sign) => (
              <div
                key={sign.title}
                className="rounded-2xl border border-yellow-400/40 bg-yellow-400/10 p-6"
              >
                <h3 className="text-xl font-bold text-yellow-100 mb-3">
                  {sign.title}
                </h3>

                <p className="text-slate-200 leading-relaxed">{sign.text}</p>
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
          Rules are not obstacles to ignore; they are safety expectations.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student clicks agree without understanding, lies about age,
              shares a login, ignores school policies, or tries to get around
              device and network rules.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student pauses, checks the rule, uses approved tools, respects
              permissions, and asks a trusted adult or teacher when something is
              unclear.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice responsible choices using fake examples.
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
          Use these habits before agreeing, signing up, or using school tools.
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
          Before finishing Lesson 11.2, students should be able to say:
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
            Lesson 11.2 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 11.3 will explain copyright, credit, and creative work
            in a student-friendly way.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/digital-citizenship-ethics-and-laws/what-digital-citizenship-means"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Previous Lesson
            </Link>

            <Link
              href="/junior/digital-citizenship-ethics-and-laws"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Back to Module 11
            </Link>

            <Link
              href="/junior/digital-citizenship-ethics-and-laws/copyright-credit-and-creative-work"
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