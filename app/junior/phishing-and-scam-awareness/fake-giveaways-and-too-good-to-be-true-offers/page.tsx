import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain why fake giveaways and unbelievable offers can be risky",
  "Recognize too-good-to-be-true warning signs",
  "Understand how fake rewards can pressure students to share information or account access",
  "Practice safer responses to prize, reward, and deal messages",
  "Know when to ask a trusted adult for help",
];

const vocabulary = [
  {
    term: "Fake Giveaway",
    definition:
      "A message, post, or page that promises a prize or reward but is really trying to trick someone.",
  },
  {
    term: "Too Good To Be True",
    definition:
      "An offer that seems so amazing, easy, or unbelievable that it should be checked carefully before trusting it.",
  },
  {
    term: "Prize Scam",
    definition:
      "A trick that says someone won something in order to collect information, money, clicks, or account access.",
  },
  {
    term: "Reward Bait",
    definition:
      "A fake reward used to make someone click a link, download something, complete a form, or share private information.",
  },
  {
    term: "Verification Trick",
    definition:
      "A scam tactic where someone says they need information, a code, or a login to prove identity or claim a reward.",
  },
  {
    term: "Official Source",
    definition:
      "The real app, website, teacher, organization, or company that can confirm whether an offer is real.",
  },
];

const fakeOfferTypes = [
  {
    title: "Free Game Currency",
    example:
      "Claim 10,000 free coins now by signing in through this link.",
    risk:
      "The message uses an exciting game reward to push a login through a random link.",
    saferChoice:
      "Do not click the link. Check the official game app or website with trusted adult help.",
  },
  {
    title: "Gift Card Prize",
    example:
      "You won a $100 gift card. Send your name, school, and phone number to claim it.",
    risk:
      "The message asks for personal information in exchange for an unexpected reward.",
    saferChoice:
      "Do not send personal information. Ask a trusted adult to help check if the offer is real.",
  },
  {
    title: "Rare Item Giveaway",
    example:
      "Only the first 20 students get this rare item. Enter your password to verify.",
    risk:
      "The message uses scarcity and asks for a password, which should never be shared.",
    saferChoice:
      "Do not enter the password. Passwords should stay private and should only be used on official sign-in pages.",
  },
  {
    title: "Free Premium Upgrade",
    example:
      "Download this tool to unlock premium features for free.",
    risk:
      "The message pushes a download that may be unsafe or not from an official source.",
    saferChoice:
      "Do not download unknown tools. Use official app stores or websites with adult guidance.",
  },
];

const warningSigns = [
  {
    title: "Unexpected Prize",
    text: "The student did not enter a real contest, but the message says they won something.",
  },
  {
    title: "Private Information Required",
    text: "The offer asks for passwords, login codes, reset codes, addresses, phone numbers, school information, or personal details.",
  },
  {
    title: "Random Link",
    text: "The message pushes a link instead of telling the student to use an official app or website.",
  },
  {
    title: "Fast Deadline",
    text: "The message says the prize will disappear unless the student acts immediately.",
  },
  {
    title: "Secret Claiming",
    text: "The message says not to tell parents, teachers, or trusted adults about the prize.",
  },
  {
    title: "Unrealistic Reward",
    text: "The reward seems much larger than expected for almost no effort.",
  },
];

const scenarios = [
  {
    title: "The Free Game Currency",
    situation:
      "A student sees a message promising free game currency if they sign in through a link.",
    warningSigns:
      "The reward is unexpected, the message uses a link, and it asks for account login information.",
    riskyResponse:
      "Click the link and sign in to claim the reward before it disappears.",
    smarterResponse:
      "Do not click the link. Check the official game app or website with trusted adult help.",
    whyItWorks:
      "Fake reward links can be used to collect account information. Official tools are safer than random links.",
  },
  {
    title: "The Gift Card Form",
    situation:
      "A message says a student won a gift card and must fill out a form with their name, school, phone number, and address.",
    warningSigns:
      "The student did not expect the prize, and the form asks for personal information.",
    riskyResponse:
      "Fill out the form because the prize seems exciting.",
    smarterResponse:
      "Do not fill out the form. Ask a trusted adult to help check whether the prize is real.",
    whyItWorks:
      "Personal information should not be shared just because a message promises a reward.",
  },
  {
    title: "The Rare Item Countdown",
    situation:
      "A post says only the first 20 people who enter their password will get a rare item.",
    warningSigns:
      "The post uses scarcity and asks for a password.",
    riskyResponse:
      "Enter the password quickly before the spots are gone.",
    smarterResponse:
      "Do not enter the password. Passwords should never be shared through giveaway forms or posts.",
    whyItWorks:
      "Real rewards should not require students to share private passwords in random places.",
  },
  {
    title: "The Free Premium Download",
    situation:
      "A message says a student can download a free premium version of an app from a link in the chat.",
    warningSigns:
      "The message offers something valuable for free and pushes an unknown download.",
    riskyResponse:
      "Download the file because it sounds useful.",
    smarterResponse:
      "Do not download it. Use official app stores or websites with trusted adult guidance.",
    whyItWorks:
      "Unknown downloads can be unsafe. Official sources are safer than random files or links.",
  },
];

const actionSteps = [
  "Pause when a prize, reward, upgrade, or deal seems too good to be true.",
  "Ask: Did I actually enter a real contest or official giveaway?",
  "Do not share passwords, login codes, reset codes, or personal information to claim a reward.",
  "Do not click random prize links or download unknown reward tools.",
  "Check offers through official apps, websites, teachers, or trusted adults.",
  "Ask a trusted adult before responding to prizes, giveaways, gift cards, game rewards, or free upgrades.",
];

const reflectionQuestions = [
  "Why are unexpected prizes a warning sign?",
  "Why should students avoid sharing personal information to claim a reward?",
  "Why can free game currency messages be risky?",
  "Why should students use official sources to check offers?",
  "What should a student do when an offer feels too good to be true?",
];

const skillCheck = [
  {
    question:
      "A message says a student won free game currency and must sign in through a link. What is the safer response?",
    choices: [
      "Click the link and sign in quickly",
      "Do not click the link and check through official tools with trusted help",
      "Share the link with friends so everyone can get the reward",
    ],
    answer: "Choice B",
    explanation:
      "Unexpected game rewards that require sign-in through a random link can be risky. Official tools are safer.",
  },
  {
    question:
      "A prize form asks for a student’s name, school, phone number, and address. What is the warning sign?",
    choices: [
      "The offer asks for personal information",
      "The form has boxes",
      "The prize sounds fun",
    ],
    answer: "Choice A",
    explanation:
      "Students should be careful when a reward requires personal information, especially if the prize was unexpected.",
  },
  {
    question:
      "A post says only the first 20 people who enter their password get a rare item. What tactic is being used?",
    choices: [
      "Scarcity and a private information request",
      "A normal school assignment",
      "A safe account update",
    ],
    answer: "Choice A",
    explanation:
      "The message creates pressure with limited spots and asks for a password, which should stay private.",
  },
  {
    question:
      "What should students do when an offer feels too good to be true?",
    choices: [
      "Act immediately before thinking",
      "Pause and ask a trusted adult or check official sources",
      "Enter private information to test if it works",
    ],
    answer: "Choice B",
    explanation:
      "Pausing and checking with official sources or trusted adults helps students avoid fake giveaways and scam offers.",
  },
];

const checklist = [
  "I can explain why fake giveaways can be risky.",
  "I can recognize too-good-to-be-true offers.",
  "I can identify prize messages that ask for private information.",
  "I can avoid random prize links and unknown downloads.",
  "I can check offers through official sources.",
  "I know when to ask a trusted adult for help.",
];

export default function FakeGiveawaysAndTooGoodToBeTrueOffersPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 4 • Lesson 4.4
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Fake Giveaways and Too-Good-To-Be-True Offers
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Fake giveaways and unbelievable offers often use excitement, rewards,
          scarcity, and pressure to make students click links, download files,
          or share private information. This lesson teaches students to pause
          and check before trusting a reward message.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/phishing-and-scam-awareness/pressure-tactics-and-urgent-messages"
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
            href="/junior/phishing-and-scam-awareness/reporting-blocking-and-asking-for-help"
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
              A free prize can be exciting, but excitement should not replace
              caution.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student sees a message promising free game currency, a
              gift card, a rare item, or a premium upgrade. It may look fun, but
              if it asks for private information, a login, a code, or a download,
              the student should pause and get trusted help.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Too-good-to-be-true offers should be checked before they are trusted.
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
              Do not click, download, or share private information to test a
              prize.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              CyberShield Academy uses fake examples only. Students should not
              test real giveaway links, enter real account information, share
              login codes, or download unknown reward tools.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Fake offers often trade excitement for risky actions.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            Fake giveaways can appear in messages, comments, emails, videos,
            posts, group chats, game chats, or fake websites. They may promise
            free game currency, gift cards, rare items, followers, premium
            upgrades, discounts, or secret access.
          </p>

          <p>
            These offers can be risky when they ask students to click a random
            link, download a file, fill out a form, enter a password, send a
            login code, or share personal information. A reward that requires
            private information should always be checked carefully.
          </p>

          <p>
            The safer response is to pause and verify through official sources.
            Students can use the real app or website, ask a trusted adult, or
            check with a teacher or school technology staff member. They should
            not investigate suspicious offers alone or test whether a prize link
            works.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for understanding fake giveaways.
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
          Fake Offer Breakdown
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Fake offers can appear in many forms.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {fakeOfferTypes.map((offer) => (
            <div
              key={offer.title}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6"
            >
              <h3 className="text-2xl font-bold text-cyan-200 mb-3">
                {offer.title}
              </h3>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 mb-4">
                <h4 className="font-bold text-slate-200 mb-2">Fake Example</h4>
                <p className="text-slate-300 leading-relaxed">
                  {offer.example}
                </p>
              </div>

              <div className="rounded-xl border border-red-400/40 bg-red-400/10 p-4 mb-4">
                <h4 className="font-bold text-red-200 mb-2">Why Risky</h4>
                <p className="text-slate-200 leading-relaxed">
                  {offer.risk}
                </p>
              </div>

              <div className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 p-4">
                <h4 className="font-bold text-emerald-200 mb-2">
                  Safer Choice
                </h4>
                <p className="text-slate-200 leading-relaxed">
                  {offer.saferChoice}
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
            Fake giveaways often include these clues.
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
          An exciting reward should still be checked carefully.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student clicks a prize link, downloads a reward tool, or shares
              private information because the offer feels exciting or limited.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student pauses, avoids random links or downloads, checks
              official sources, and asks a trusted adult before responding.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice checking exciting offers before trusting them.
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
          Use these habits when a reward or deal looks suspicious.
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
          Before finishing Lesson 4.4, students should be able to say:
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
            Lesson 4.4 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 4.5 will explain reporting, blocking, and asking for
            help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/phishing-and-scam-awareness/pressure-tactics-and-urgent-messages"
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
              href="/junior/phishing-and-scam-awareness/reporting-blocking-and-asking-for-help"
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