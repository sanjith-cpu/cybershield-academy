import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain why suspicious links and attachments can be risky",
  "Recognize warning signs before clicking, opening, downloading, or scanning",
  "Understand why students should use official apps or websites instead of random links",
  "Practice safer responses to fake message examples",
  "Know when to ask a trusted adult for help",
];

const vocabulary = [
  {
    term: "Link",
    definition:
      "A clickable path that takes someone to a website, file, form, video, app page, or online location.",
  },
  {
    term: "Attachment",
    definition:
      "A file included with a message, such as a document, image, slide, video, or compressed file.",
  },
  {
    term: "Download",
    definition:
      "Saving a file, app, or content from the internet or a message onto a device.",
  },
  {
    term: "QR Code",
    definition:
      "A scannable code that can open a website, app page, form, file, or other online location.",
  },
  {
    term: "Official Website",
    definition:
      "The real website or app that belongs to a company, school, service, or platform.",
  },
  {
    term: "Suspicious Link",
    definition:
      "A link that seems unexpected, confusing, urgent, unfamiliar, shortened, misspelled, or connected to a risky request.",
  },
];

const warningSigns = [
  {
    title: "Unexpected Link",
    text: "The message includes a link the student did not expect, especially from an unknown or unusual sender.",
  },
  {
    title: "Pressure to Click",
    text: "The message says the student must click right now to save an account, claim a prize, or avoid trouble.",
  },
  {
    title: "Private Information Request",
    text: "The link leads to a page asking for passwords, login codes, school information, addresses, or personal details.",
  },
  {
    title: "Unknown Attachment",
    text: "The message includes a file the student did not ask for or does not recognize.",
  },
  {
    title: "Random QR Code",
    text: "A code appears in a message, poster, image, or chat and pushes the student to scan it without clear trusted context.",
  },
  {
    title: "Too-Good-To-Be-True Download",
    text: "The message promises free rewards, cheats, upgrades, prizes, or premium access through a download.",
  },
];

const linkTypes = [
  {
    title: "Message Links",
    explanation:
      "Links can appear in texts, emails, chats, game messages, school messages, or social media comments.",
    saferChoice:
      "Pause before clicking and use the official app or website when possible.",
  },
  {
    title: "Attachments",
    explanation:
      "Attachments may look like homework files, photos, game files, forms, or documents.",
    saferChoice:
      "Do not open unexpected files. Ask a trusted adult or teacher if a school file seems unusual.",
  },
  {
    title: "Downloads",
    explanation:
      "A download may claim to be a game reward, app update, free tool, coupon, or special feature.",
    saferChoice:
      "Only download from trusted official sources with adult guidance.",
  },
  {
    title: "QR Codes",
    explanation:
      "QR codes can open websites or forms, but students may not know where they lead before scanning.",
    saferChoice:
      "Do not scan random QR codes from suspicious messages, posters, screenshots, or chats.",
  },
];

const scenarios = [
  {
    title: "The Free Game Upgrade Link",
    situation:
      "A student receives a message saying they can unlock a rare game upgrade by clicking a link and signing in.",
    warningSigns:
      "The offer is unexpected, exciting, and pushes a login through a message link.",
    riskyResponse:
      "Click the link and enter the account login to claim the upgrade.",
    smarterResponse:
      "Do not click the link. Check the official game app or website with trusted adult help if needed.",
    whyItWorks:
      "Fake reward links can be used to collect account information. Official tools are safer than random links.",
  },
  {
    title: "The Unknown Homework File",
    situation:
      "A student gets an attachment that claims to be a homework answer file, but it comes from an account they do not recognize.",
    warningSigns:
      "The file is unexpected and comes from an unfamiliar sender.",
    riskyResponse:
      "Open the attachment because the file might help with homework.",
    smarterResponse:
      "Do not open the file. Ask the teacher or a trusted adult whether the file is real.",
    whyItWorks:
      "Unexpected attachments can be unsafe or misleading. Checking with a trusted source is safer.",
  },
  {
    title: "The QR Code Prize",
    situation:
      "A picture in a group chat says scanning a QR code will give students a free prize.",
    warningSigns:
      "The code is unexpected, promises a prize, and does not clearly come from a trusted official source.",
    riskyResponse:
      "Scan the code quickly before the prize disappears.",
    smarterResponse:
      "Do not scan the code. Ask a trusted adult and look for information through official sources.",
    whyItWorks:
      "QR codes can send people to unknown pages. Students should treat random codes like suspicious links.",
  },
  {
    title: "The Account Warning Link",
    situation:
      "A message says a student’s account will be locked unless they click a link in the next ten minutes.",
    warningSigns:
      "The message creates urgency and pushes the student to click fast.",
    riskyResponse:
      "Click immediately because losing the account sounds scary.",
    smarterResponse:
      "Pause, do not click suspicious links, and check the account through the official app or website with trusted help.",
    whyItWorks:
      "Urgency can be used to make students act before thinking. Official account tools reduce risk.",
  },
];

const actionSteps = [
  "Pause before clicking links, opening attachments, downloading files, or scanning QR codes.",
  "Ask: Did I expect this message or file?",
  "Ask: Is the sender trusted and normal for this situation?",
  "Avoid entering passwords, login codes, or personal information after clicking a message link.",
  "Use official apps or websites instead of random links.",
  "Ask a trusted adult, teacher, guardian, or school technology staff member when unsure.",
];

const reflectionQuestions = [
  "Why can a link in a message be risky?",
  "Why should students be careful with unexpected attachments?",
  "Why should QR codes be treated like links?",
  "Why is urgency a reason to pause?",
  "What should a student do instead of clicking a suspicious account warning link?",
];

const skillCheck = [
  {
    question:
      "A message says a student can claim a free game reward by clicking a link and signing in. What is the safer response?",
    choices: [
      "Click the link and enter the password quickly",
      "Do not click the link and check through official tools with trusted help if needed",
      "Send the link to classmates so they can try first",
    ],
    answer: "Choice B",
    explanation:
      "Unexpected reward links can be risky. Students should use official apps or websites instead of random message links.",
  },
  {
    question:
      "A student receives an unexpected attachment from an unfamiliar sender. What should they do?",
    choices: [
      "Open it to see what it is",
      "Download it and share it with friends",
      "Avoid opening it and ask a trusted adult or teacher",
    ],
    answer: "Choice C",
    explanation:
      "Unexpected attachments should be checked with trusted help before opening.",
  },
  {
    question:
      "Why can QR codes be risky?",
    choices: [
      "They can open unknown pages or forms",
      "They are always safe because they are images",
      "They only work for school websites",
    ],
    answer: "Choice A",
    explanation:
      "QR codes can lead to websites or forms, so random codes should be treated carefully.",
  },
  {
    question:
      "A message says an account will be locked in ten minutes unless the student clicks a link. What warning sign is being used?",
    choices: [
      "Urgency and pressure",
      "A normal homework reminder",
      "A trusted conversation",
    ],
    answer: "Choice A",
    explanation:
      "Scams often use urgency to make people click before thinking.",
  },
];

const checklist = [
  "I can explain why suspicious links can be risky.",
  "I can explain why unexpected attachments need caution.",
  "I can treat random QR codes like suspicious links.",
  "I can identify urgency and pressure around links.",
  "I can use official apps or websites instead of random message links.",
  "I know when to ask a trusted adult for help.",
];

export default function SuspiciousLinksAndAttachmentsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 4 • Lesson 4.2
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Suspicious Links and Attachments
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Suspicious links, attachments, downloads, and QR codes can lead
          students to unsafe pages or risky actions. This lesson teaches
          students to pause before clicking, opening, downloading, scanning, or
          sharing information.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/phishing-and-scam-awareness/what-phishing-means"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Previous Lesson
          </Link>

          <Link
            href="/junior/phishing-and-scam-awareness"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Back to Module 4
          </Link>

          <Link
            href="/junior/phishing-and-scam-awareness/pressure-tactics-and-urgent-messages"
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
              A link, file, or QR code can look harmless, but still lead
              somewhere risky.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student receives a message with a file, prize link, or
              QR code. It may look normal, but the safest choice is not to test
              it. Students should pause and check with trusted help before
              opening unknown things.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Links and attachments deserve a pause before action.
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
              Do not click, open, download, or scan suspicious items for
              practice.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              CyberShield Academy uses fake examples only. Students should not
              test suspicious links, unknown attachments, random downloads, or
              QR codes. Real concerns should be handled with trusted adult help.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          The safest click is often no click at all.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            A link can lead to a website, login page, form, file, video, app
            page, or download. An attachment can be a document, image, slide,
            compressed file, or other type of file. A QR code can also open an
            online location. Students should treat all of these as things that
            need a pause before action.
          </p>

          <p>
            Suspicious links and attachments often appear in messages that are
            unexpected, urgent, exciting, scary, or confusing. They may claim to
            offer rewards, warn about account problems, share school files, or
            ask the student to sign in. The safest habit is to avoid clicking
            random message links and use official apps or websites instead.
          </p>

          <p>
            Students do not need to investigate suspicious items by themselves.
            They can stop, avoid interacting with the message, save it if a
            trusted adult asks, and get help from a parent, guardian, teacher,
            counselor, coach, librarian, or school technology staff member.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for understanding links and attachments.
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
          Link and File Type Breakdown
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Suspicious items can appear in different forms.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {linkTypes.map((item) => (
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
            Pause when links, files, downloads, or QR codes have these warning
            signs.
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
          Curiosity should not override safety.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student clicks, opens, downloads, or scans something because it
              seems interesting, urgent, or possibly helpful.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student pauses, avoids suspicious items, uses official tools,
              and asks a trusted adult or teacher before interacting.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice safer decisions without clicking real suspicious items.
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
          Use these habits before clicking, opening, downloading, or scanning.
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
          Before finishing Lesson 4.2, students should be able to say:
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
            Lesson 4.2 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 4.3 will explain pressure tactics and urgent messages.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/phishing-and-scam-awareness/what-phishing-means"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Previous Lesson
            </Link>

            <Link
              href="/junior/phishing-and-scam-awareness"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Back to Module 4
            </Link>

            <Link
              href="/junior/phishing-and-scam-awareness/pressure-tactics-and-urgent-messages"
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