import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Recognize common website warning signs",
  "Understand why fake or confusing pages can be risky",
  "Identify when a website asks for too much information",
  "Practice safer choices before signing in, clicking, or sharing",
  "Know when to leave a page and ask a trusted adult",
];

const vocabulary = [
  {
    term: "Website Warning Sign",
    definition:
      "A clue that a website may be unsafe, fake, confusing, or worth checking before trusting.",
  },
  {
    term: "Fake Page",
    definition:
      "A page that pretends to be real or official but is actually trying to mislead someone.",
  },
  {
    term: "Redirect",
    definition:
      "When a page sends someone to a different page, sometimes unexpectedly.",
  },
  {
    term: "Online Form",
    definition:
      "A website section that asks someone to type information, such as a name, email, password, school, or other details.",
  },
  {
    term: "Login Page",
    definition:
      "A page where someone enters account information to access a service. Students should only use official login pages.",
  },
  {
    term: "Official Source",
    definition:
      "The real website, app, school tool, teacher, company, or organization that can confirm information safely.",
  },
];

const warningSigns = [
  {
    title: "The Page Was Unexpected",
    text: "The student did not mean to open the page, or it appeared after a random click, pop-up, message link, or redirect.",
  },
  {
    title: "The Website Asks for Too Much",
    text: "The page asks for personal information, account details, school information, passwords, or login codes when it does not make sense.",
  },
  {
    title: "The Page Creates Pressure",
    text: "The website says to click, sign in, download, subscribe, or enter information immediately.",
  },
  {
    title: "The Offer Seems Unrealistic",
    text: "The website promises free prizes, rare game items, gift cards, money, followers, or premium access for almost no effort.",
  },
  {
    title: "The Page Looks Confusing",
    text: "The page has unclear buttons, strange instructions, many pop-ups, or keeps sending the student somewhere else.",
  },
  {
    title: "The Source Is Not Clear",
    text: "The student cannot tell who owns the page, whether it is official, or why the page is asking for action.",
  },
];

const websiteSituations = [
  {
    title: "Unexpected Login Page",
    explanation:
      "A student clicks a message link and lands on a page asking them to sign in.",
    risk:
      "The page may not be the official login page, especially if the student arrived through a random message link.",
    saferChoice:
      "Do not sign in through the message link. Open the official app or website directly with trusted help if needed.",
  },
  {
    title: "Personal Information Form",
    explanation:
      "A website asks for a name, school, birthday, phone number, address, or other private details.",
    risk:
      "The form may collect information the student does not need to share.",
    saferChoice:
      "Pause and ask a trusted adult before entering personal information.",
  },
  {
    title: "Prize Claim Page",
    explanation:
      "A website says the student won something and must fill out a form or click a button to claim it.",
    risk:
      "Unexpected prizes are often used to pressure people into risky actions.",
    saferChoice:
      "Do not fill out the form. Check official sources or ask a trusted adult.",
  },
  {
    title: "Confusing Redirects",
    explanation:
      "A student tries to visit one page, but the browser keeps opening different pages or tabs.",
    risk:
      "The student may be pushed toward pages they did not choose.",
    saferChoice:
      "Stop clicking and ask a trusted adult for help closing the pages safely.",
  },
];

const scenarios = [
  {
    title: "The Fake Homework Help Page",
    situation:
      "A student clicks a homework search result. The page says they must enter their name, school, and email before seeing the answer.",
    warningSigns:
      "The page asks for personal information before giving basic information.",
    riskyResponse:
      "Enter the information because the student wants the answer quickly.",
    smarterResponse:
      "Do not enter the information. Use a trusted school source, library source, teacher resource, or ask a trusted adult.",
    whyItWorks:
      "Students should not trade personal information for unknown website access when safer sources may exist.",
  },
  {
    title: "The Random Login Page",
    situation:
      "A message link opens a page that looks like a sign-in page for a popular app.",
    warningSigns:
      "The student reached the login page through a random message link, not the official app or website.",
    riskyResponse:
      "Sign in because the page looks familiar.",
    smarterResponse:
      "Do not sign in through the message link. Open the official app or website directly.",
    whyItWorks:
      "A page can look familiar but still be fake. Official tools are safer than random links.",
  },
  {
    title: "The Prize Website",
    situation:
      "A website says the student won a gift card and must complete a form immediately to claim it.",
    warningSigns:
      "The prize is unexpected, the website creates urgency, and the form asks for information.",
    riskyResponse:
      "Complete the form quickly before the offer expires.",
    smarterResponse:
      "Do not complete the form. Ask a trusted adult to help check whether the offer is real.",
    whyItWorks:
      "Unexpected prizes that require information should be checked carefully before trusting.",
  },
  {
    title: "The Confusing Pop-Up Page",
    situation:
      "A student lands on a website with several pop-ups, buttons, and tabs that keep opening.",
    warningSigns:
      "The page is confusing and keeps pushing the student to click.",
    riskyResponse:
      "Keep clicking until the pop-ups disappear.",
    smarterResponse:
      "Stop interacting with the page and ask a trusted adult for help.",
    whyItWorks:
      "Confusing pages can pressure students into accidental clicks. Getting help is safer.",
  },
];

const actionSteps = [
  "Pause when a website is unexpected, confusing, urgent, or too good to be true.",
  "Ask: Did I mean to visit this page?",
  "Ask: Do I know this is the official source?",
  "Do not enter passwords, login codes, or personal information on unfamiliar pages.",
  "Use official apps, school tools, teacher-provided links, or trusted websites when possible.",
  "Ask a trusted adult before signing in, filling out forms, downloading, or clicking suspicious buttons.",
];

const reflectionQuestions = [
  "What is a website warning sign?",
  "Why can an unexpected login page be risky?",
  "Why should students be careful with online forms?",
  "Why should students stop clicking when a page becomes confusing?",
  "Who can help a student check whether a website is trustworthy?",
];

const skillCheck = [
  {
    question:
      "A student clicks a random message link and lands on a page asking them to sign in. What is the safer response?",
    choices: [
      "Sign in because the page looks familiar",
      "Do not sign in through the message link; use the official app or website",
      "Share the login page with friends",
    ],
    answer: "Choice B",
    explanation:
      "A page can look familiar but still be risky. Students should use official apps or websites instead of random message links.",
  },
  {
    question:
      "A website asks for a student’s name, school, phone number, and address to unlock a prize. What warning sign is this?",
    choices: [
      "The website asks for too much personal information",
      "The website has text",
      "The website mentions a prize",
    ],
    answer: "Choice A",
    explanation:
      "Students should be careful when an unfamiliar website asks for personal information, especially for an unexpected prize.",
  },
  {
    question:
      "A page keeps opening new tabs and pop-ups. What should the student do?",
    choices: [
      "Keep clicking until it works",
      "Stop interacting and ask a trusted adult for help",
      "Enter information to close the page",
    ],
    answer: "Choice B",
    explanation:
      "Confusing pages and pop-ups can lead to accidental risky clicks. Trusted help is safer.",
  },
  {
    question:
      "Which is a safer source for school research?",
    choices: [
      "A random page that asks for private information first",
      "A teacher-provided or school-approved source",
      "A pop-up that promises instant answers",
    ],
    answer: "Choice B",
    explanation:
      "Teacher-provided and school-approved sources are safer than random pages that ask for unnecessary information.",
  },
];

const checklist = [
  "I can recognize website warning signs.",
  "I can explain why unexpected pages deserve caution.",
  "I can avoid entering private information on unfamiliar websites.",
  "I can use official or trusted sources instead of random pages.",
  "I can stop interacting when a website becomes confusing or pushy.",
  "I know when to ask a trusted adult for help.",
];

export default function RecognizingWebsiteWarningSignsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 5 • Lesson 5.2
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Recognizing Website Warning Signs
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Websites can look useful, official, exciting, or harmless while still
          asking students to do risky things. This lesson helps students notice
          warning signs before signing in, filling out forms, clicking buttons,
          or trusting unfamiliar pages.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/safe-browsing-and-downloads/what-safe-browsing-means"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Previous Lesson
          </Link>

          <Link
            href="/junior/safe-browsing-and-downloads"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Back to Module 5
          </Link>

          <Link
            href="/junior/safe-browsing-and-downloads/downloads-files-and-app-safety"
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
              A website does not need to look scary to be risky.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student opens a page that looks polished, but it asks
              for a login, personal information, a download, or a quick click.
              Website safety means checking what the page is asking before
              trusting it.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Warning signs help students slow down before taking risky actions.
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
              Do not visit suspicious websites for practice.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              CyberShield Academy uses fake examples only. Students should not
              test suspicious websites, enter real information into unfamiliar
              forms, or click risky website buttons for practice.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Website warning signs are clues that a page deserves extra caution.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            A website warning sign is anything that makes a page feel unusual,
            pushy, confusing, unexpected, or too demanding. The page may ask for
            information that does not match what the student is trying to do, or
            it may push the student to sign in, click, download, or act quickly.
          </p>

          <p>
            Some unsafe pages look messy, but others look clean and professional.
            That is why students should focus on the page behavior. What is the
            website asking for? Did the student mean to visit it? Is it official?
            Is it asking for private information, account access, or a download?
          </p>

          <p>
            When warning signs appear, students can stop interacting with the
            page, avoid entering information, use an official source instead,
            and ask a trusted adult, teacher, guardian, or school technology
            staff member for help.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for recognizing risky website behavior.
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
          Website Situation Breakdown
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          A website can create risk in different ways.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {websiteSituations.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6"
            >
              <h3 className="text-2xl font-bold text-cyan-200 mb-3">
                {item.title}
              </h3>

              <p className="text-slate-300 leading-relaxed mb-4">
                {item.explanation}
              </p>

              <div className="rounded-xl border border-red-400/40 bg-red-400/10 p-4 mb-4">
                <h4 className="font-bold text-red-200 mb-2">Why Risky</h4>
                <p className="text-slate-200 leading-relaxed">{item.risk}</p>
              </div>

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
            Pause when a website shows these clues.
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
          Trust should come from checking, not just appearance.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student trusts a website because it looks official, then enters
              information, signs in, downloads, or keeps clicking without
              checking warning signs.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student pauses, checks what the page is asking for, avoids
              private information on unfamiliar pages, uses official sources,
              and asks trusted help.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice recognizing website warning signs using fake examples.
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
          Use these habits before trusting unfamiliar websites.
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
          Before finishing Lesson 5.2, students should be able to say:
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
            Lesson 5.2 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 5.3 will explain downloads, files, and app safety.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/safe-browsing-and-downloads/what-safe-browsing-means"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Previous Lesson
            </Link>

            <Link
              href="/junior/safe-browsing-and-downloads"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Back to Module 5
            </Link>

            <Link
              href="/junior/safe-browsing-and-downloads/downloads-files-and-app-safety"
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