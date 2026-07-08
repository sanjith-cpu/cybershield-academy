import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain what safe browsing means",
  "Understand why students should pause before visiting unfamiliar websites",
  "Recognize that websites can ask for risky actions",
  "Practice safer choices before clicking, signing in, downloading, or sharing",
  "Know when to use official sources or ask a trusted adult",
];

const vocabulary = [
  {
    term: "Safe Browsing",
    definition:
      "Using websites and online pages carefully by checking warning signs before clicking, sharing, downloading, or signing in.",
  },
  {
    term: "Website",
    definition:
      "A collection of online pages that can show information, forms, videos, games, tools, downloads, or account sign-ins.",
  },
  {
    term: "Web Address",
    definition:
      "The address that shows where a website or page is located online.",
  },
  {
    term: "Official Source",
    definition:
      "The real app, website, school tool, teacher, company, or organization that can be trusted to confirm information.",
  },
  {
    term: "Online Form",
    definition:
      "A page that asks someone to type information, such as a name, email, password, school, or other details.",
  },
  {
    term: "Browsing Warning Sign",
    definition:
      "A clue that a website or page may be unsafe, confusing, fake, or worth checking with a trusted adult.",
  },
];

const browsingSituations = [
  {
    title: "Unfamiliar Website",
    explanation:
      "A student lands on a website they do not recognize after clicking a message link or search result.",
    saferChoice:
      "Pause and check whether the page is expected, official, and necessary before taking action.",
  },
  {
    title: "Information Request",
    explanation:
      "A website asks for personal information, account information, school information, or a login code.",
    saferChoice:
      "Do not enter private information unless the student is sure it is an official page and has trusted help when needed.",
  },
  {
    title: "Download Prompt",
    explanation:
      "A website says the student needs to download a file, app, tool, update, extension, or player to continue.",
    saferChoice:
      "Do not download unknown files or tools. Ask a trusted adult and use official sources.",
  },
  {
    title: "Pop-Up Warning",
    explanation:
      "A page shows a pop-up saying the device has a problem and must be fixed immediately.",
    saferChoice:
      "Do not click the pop-up buttons. Ask a trusted adult for help.",
  },
];

const warningSigns = [
  {
    title: "Unexpected Page",
    text: "The student did not mean to visit the page, or the page appeared after a random click, redirect, pop-up, or message link.",
  },
  {
    title: "Too Much Information",
    text: "The website asks for details that do not match what the student is trying to do.",
  },
  {
    title: "Pressure to Act",
    text: "The page says to click, download, sign in, or share information immediately.",
  },
  {
    title: "Reward or Prize",
    text: "The website promises a free reward, game upgrade, gift card, or special access for almost no effort.",
  },
  {
    title: "Fake Warning",
    text: "The website claims the device is broken, infected, locked, or unsafe and pushes a button to fix it right away.",
  },
  {
    title: "Confusing Path",
    text: "The website keeps redirecting, opening new tabs, showing pop-ups, or sending the student somewhere unexpected.",
  },
];

const scenarios = [
  {
    title: "The Search Result Surprise",
    situation:
      "A student searches for a homework topic and clicks a result. The page suddenly asks them to create an account and enter personal information.",
    warningSigns:
      "The website asks for personal information before showing basic information.",
    riskyResponse:
      "Fill out the form because the student wants the homework answer quickly.",
    smarterResponse:
      "Pause, leave the page if it feels suspicious, and use a trusted school source or ask a teacher or adult for help.",
    whyItWorks:
      "Students should not trade personal information for unknown website access, especially when safer trusted sources may exist.",
  },
  {
    title: "The Game Tips Page",
    situation:
      "A student visits a page claiming to have secret game tips, but it says they must download a special tool first.",
    warningSigns:
      "The website offers something exciting and pushes an unknown download.",
    riskyResponse:
      "Download the tool because it might improve the game.",
    smarterResponse:
      "Do not download it. Use official game resources or ask a trusted adult before installing anything.",
    whyItWorks:
      "Unknown downloads can be risky. Official sources and adult guidance are safer.",
  },
  {
    title: "The Fake Device Warning",
    situation:
      "A website shows a large warning saying the device is infected and the student must click a button to fix it.",
    warningSigns:
      "The page creates fear and pressure to click immediately.",
    riskyResponse:
      "Click the button because the warning looks serious.",
    smarterResponse:
      "Do not click the pop-up. Close the page if possible and show a trusted adult.",
    whyItWorks:
      "Scary website warnings can pressure students into unsafe clicks. Trusted help is safer.",
  },
  {
    title: "The Redirect Loop",
    situation:
      "A student clicks one page, but the browser keeps opening different pages, ads, or pop-ups.",
    warningSigns:
      "The student is being sent to pages they did not choose.",
    riskyResponse:
      "Keep clicking until the right page appears.",
    smarterResponse:
      "Stop interacting with the pages and ask a trusted adult for help closing them safely.",
    whyItWorks:
      "Unexpected redirects and pop-ups can lead to unsafe pages. Students should not keep clicking through them.",
  },
];

const actionSteps = [
  "Pause before visiting unfamiliar websites or pages.",
  "Ask: Did I mean to come here, and do I recognize this source?",
  "Avoid entering personal information into unfamiliar forms.",
  "Do not download unknown files, tools, apps, or extensions from random websites.",
  "Use official apps, school tools, trusted websites, or teacher-provided resources when possible.",
  "Ask a trusted adult when a website feels confusing, urgent, scary, or too good to be true.",
];

const reflectionQuestions = [
  "What does safe browsing mean?",
  "Why should students pause before using unfamiliar websites?",
  "Why can online forms be risky?",
  "Why should students avoid unknown downloads?",
  "Who can students ask for help when a website feels suspicious?",
];

const skillCheck = [
  {
    question:
      "A website asks a student to enter personal information before showing a homework answer. What is the safer response?",
    choices: [
      "Enter the information quickly",
      "Pause and use a trusted school source or ask a trusted adult",
      "Share the form with classmates",
    ],
    answer: "Choice B",
    explanation:
      "Students should be careful when unfamiliar websites ask for personal information. Trusted school sources or adult help are safer.",
  },
  {
    question:
      "A game tips website says the student must download a tool to continue. What is the warning sign?",
    choices: [
      "It pushes an unknown download",
      "It has words on the page",
      "It talks about a game",
    ],
    answer: "Choice A",
    explanation:
      "Unknown downloads from random websites can be risky. Students should use official sources and trusted adult guidance.",
  },
  {
    question:
      "A website pop-up says the device is infected and the student must click immediately. What should the student do?",
    choices: [
      "Click the button right away",
      "Do not click the pop-up and ask a trusted adult for help",
      "Enter a password into the pop-up",
    ],
    answer: "Choice B",
    explanation:
      "Scary pop-ups can pressure students into unsafe clicks. Trusted adult help is safer.",
  },
  {
    question:
      "What is a good safe browsing habit?",
    choices: [
      "Keep clicking until something works",
      "Pause before clicking, downloading, signing in, or sharing information",
      "Trust every page that looks colorful",
    ],
    answer: "Choice B",
    explanation:
      "Safe browsing starts with pausing and checking before taking action.",
  },
];

const checklist = [
  "I can explain what safe browsing means.",
  "I can recognize why unfamiliar websites deserve caution.",
  "I can identify when a website asks for too much information.",
  "I can avoid unknown downloads from random websites.",
  "I can respond safely to scary pop-ups or confusing pages.",
  "I know when to ask a trusted adult for help.",
];

export default function WhatSafeBrowsingMeansPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 5 • Lesson 5.1
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          What Safe Browsing Means
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Safe browsing means making careful choices before visiting unfamiliar
          pages, clicking links, downloading files, signing in, or sharing
          information. This lesson teaches students to pause before a website
          leads them into risky actions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/safe-browsing-and-downloads"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Back to Module 5
          </Link>

          <Link
            href="/junior/safe-browsing-and-downloads/recognizing-website-warning-signs"
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
              Browsing safely means knowing when to pause.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student clicks a page for homework, games, or a video.
              Suddenly the page asks for information, shows a scary warning, or
              pushes a download. Safe browsing helps the student slow down before
              taking a risky action.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Safe browsing is a habit, not a single button.
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
              test real unsafe websites, enter real personal information, click
              real suspicious buttons, or download unknown files for practice.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Safe browsing means thinking before a website asks you to act.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            Websites can be helpful for school, hobbies, videos, games, news,
            research, and communication. But not every website is safe or
            trustworthy. Some pages may ask for too much information, push
            downloads, show fake warnings, or send students to places they did
            not mean to go.
          </p>

          <p>
            Safe browsing starts with questions. Did I mean to visit this page?
            Do I recognize the source? Is the page asking me to click, download,
            sign in, allow access, or share information? Does the request match
            what I came here to do?
          </p>

          <p>
            Students do not need to investigate suspicious websites alone. A
            safer response is to pause, avoid interacting with suspicious pages,
            use official sources, and ask a trusted adult when something feels
            confusing, urgent, scary, or too good to be true.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for understanding safe browsing.
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
          Browsing Situation Breakdown
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Websites can create different kinds of decisions.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {browsingSituations.map((item) => (
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
            Safe browsing means noticing warning signs before acting.
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
          A website should not pressure students into quick actions.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student keeps clicking, fills out an unfamiliar form, or
              downloads a file because a website says it is required.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student pauses, avoids suspicious actions, uses official or
              school-approved sources, and asks a trusted adult when unsure.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice safer browsing decisions using fake examples.
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
          Use these habits before trusting an unfamiliar website.
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
          Before finishing Lesson 5.1, students should be able to say:
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
            Lesson 5.1 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 5.2 will explain how to recognize website warning
            signs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/safe-browsing-and-downloads"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Back to Module 5
            </Link>

            <Link
              href="/junior/safe-browsing-and-downloads/recognizing-website-warning-signs"
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