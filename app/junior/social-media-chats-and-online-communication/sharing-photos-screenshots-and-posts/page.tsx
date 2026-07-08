import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain why photos, screenshots, and posts can affect privacy and reputation",
  "Understand that shared content can spread beyond the original audience",
  "Recognize when a photo, screenshot, or post may reveal too much information",
  "Practice pausing before posting, forwarding, or saving someone else's content",
  "Know when to ask permission or talk to a trusted adult before sharing",
];

const vocabulary = [
  {
    term: "Post",
    definition:
      "Content shared online, such as a photo, video, message, update, comment, or story.",
  },
  {
    term: "Screenshot",
    definition:
      "An image of what appears on a screen, such as a message, photo, profile, game chat, or webpage.",
  },
  {
    term: "Audience",
    definition:
      "The people who can see a photo, screenshot, message, or post after it is shared.",
  },
  {
    term: "Consent",
    definition:
      "Permission from someone before sharing content that includes them, their words, or their information.",
  },
  {
    term: "Digital Reputation",
    definition:
      "The way someone's online actions, posts, comments, and shared content can affect how others see them.",
  },
  {
    term: "Private Information",
    definition:
      "Details that should be protected, such as addresses, school names, schedules, account details, phone numbers, or personal conversations.",
  },
];

const sharingSituations = [
  {
    title: "Photo Before Posting",
    explanation:
      "A student wants to post a photo from school, practice, a party, or a group hangout.",
    saferChoice:
      "Pause and check whether the photo shows private details, other people, uniforms, locations, or anything embarrassing.",
  },
  {
    title: "Screenshot of a Message",
    explanation:
      "A student takes a screenshot of a chat and thinks about sending it to someone else.",
    saferChoice:
      "Ask whether sharing the screenshot would break trust, embarrass someone, spread drama, or reveal private information.",
  },
  {
    title: "Forwarded Post",
    explanation:
      "A funny or shocking post appears in a group chat, and students are encouraged to share it quickly.",
    saferChoice:
      "Do not forward content just because others are doing it. Check whether it is respectful, safe, and appropriate first.",
  },
  {
    title: "Tagged Content",
    explanation:
      "Someone tags a student in a photo, comment, or post that the student does not feel comfortable with.",
    saferChoice:
      "Talk to the person, use privacy/reporting tools when needed, and ask a trusted adult for help if it feels stressful or unsafe.",
  },
];

const warningSigns = [
  {
    title: "Private Details Visible",
    text: "The image or post shows a home address, school name, schedule, license plate, phone number, username, ID card, or other personal detail.",
  },
  {
    title: "Someone Else Is Included",
    text: "The photo, screenshot, video, or post includes another person who may not want it shared.",
  },
  {
    title: "Embarrassing or Hurtful Content",
    text: "The content could make someone feel mocked, exposed, pressured, or unsafe.",
  },
  {
    title: "Group Chat Pressure",
    text: "Friends are pushing everyone to screenshot, repost, forward, or react without thinking.",
  },
  {
    title: "Context Is Missing",
    text: "A screenshot or short clip might leave out important context and make someone look bad unfairly.",
  },
  {
    title: "Hard to Take Back",
    text: "Once content is shared, others may save, screenshot, forward, repost, or copy it even if the original post is deleted.",
  },
];

const scenarios = [
  {
    title: "The Locker Photo",
    situation:
      "A student takes a picture with friends at school. The photo accidentally shows a locker number, school hallway, and another student's face in the background.",
    warningSigns:
      "The photo includes location clues and another person who may not have agreed to be posted.",
    riskyResponse:
      "Post the photo right away because it looks fun and everyone else is posting pictures too.",
    smarterResponse:
      "Pause, crop or avoid sharing private details, ask people included in the photo for permission, or choose not to post it.",
    whyItWorks:
      "Checking for private details and asking permission protects privacy and shows respect for other people.",
  },
  {
    title: "The Chat Screenshot",
    situation:
      "A student gets a screenshot of a private chat where someone is upset. A friend says to send it to the whole group.",
    warningSigns:
      "The screenshot comes from a private conversation and could embarrass someone or spread drama.",
    riskyResponse:
      "Forward the screenshot because it might get attention in the group chat.",
    smarterResponse:
      "Do not forward it. Keep private conversations private and ask a trusted adult for help if someone may be hurt or unsafe.",
    whyItWorks:
      "Not spreading private screenshots helps reduce drama and protects people from being exposed unfairly.",
  },
  {
    title: "The Challenge Post",
    situation:
      "A social media post asks students to share a photo showing their bedroom setup, school badge, and favorite places to hang out.",
    warningSigns:
      "The post encourages students to reveal personal spaces, school information, and location clues.",
    riskyResponse:
      "Join the challenge because it seems harmless and popular.",
    smarterResponse:
      "Skip the challenge or share only safe, non-private content after checking with a trusted adult if unsure.",
    whyItWorks:
      "Trends can accidentally collect private information. Students should protect details that reveal identity, location, or routines.",
  },
  {
    title: "The Embarrassing Video",
    situation:
      "A student records a funny moment where a classmate trips during practice. Friends ask them to post it for laughs.",
    warningSigns:
      "The video could embarrass someone and spread beyond the original friend group.",
    riskyResponse:
      "Post the video because people will think it is funny.",
    smarterResponse:
      "Do not post it without permission. Think about how the person in the video would feel and choose respect first.",
    whyItWorks:
      "Respectful sharing means thinking about the people affected, not just the reaction a post might get.",
  },
];

const actionSteps = [
  "Pause before posting, forwarding, screenshotting, or reposting.",
  "Check photos and videos for private details before sharing.",
  "Ask permission before sharing content that includes someone else.",
  "Avoid forwarding private messages or screenshots for drama or attention.",
  "Think about whether a post could embarrass, pressure, or hurt someone.",
  "Ask a trusted adult for help if shared content feels unsafe, stressful, or hard to remove.",
];

const reflectionQuestions = [
  "Why can a photo reveal more information than someone realizes?",
  "Why should students ask permission before posting someone else?",
  "How can screenshots spread digital drama?",
  "Why is deleting a post not always enough to remove it from the internet?",
  "Who can students ask for help if a post or screenshot feels unsafe?",
];

const skillCheck = [
  {
    question:
      "A student wants to post a photo from school, but it shows another student's face and a school hallway. What is the safer response?",
    choices: [
      "Post it quickly before anyone notices",
      "Pause, check for private details, and ask permission before sharing",
      "Tag as many people as possible",
    ],
    answer: "Choice B",
    explanation:
      "Photos can reveal people, locations, and private details. Students should pause and ask permission before posting others.",
  },
  {
    question:
      "A friend sends a screenshot of a private conversation and says to forward it to the group. What is the warning sign?",
    choices: [
      "It is a private conversation being spread",
      "It has text in it",
      "It came from a phone",
    ],
    answer: "Choice A",
    explanation:
      "Sharing private screenshots can break trust, embarrass people, and spread drama. The safer choice is not to forward it.",
  },
  {
    question:
      "Why should students be careful with popular photo challenges?",
    choices: [
      "Some challenges may reveal personal details, locations, or routines",
      "All challenges are required",
      "Posting faster always makes the post safer",
    ],
    answer: "Choice A",
    explanation:
      "Online trends can seem fun but may accidentally reveal private information. Students should think before joining.",
  },
  {
    question:
      "What should a student do if a post or screenshot makes them feel unsafe or stressed?",
    choices: [
      "Handle it alone and keep clicking around",
      "Ask a trusted adult for help and use platform tools when appropriate",
      "Share it with more people",
    ],
    answer: "Choice B",
    explanation:
      "Trusted adults and platform safety tools can help students respond more safely when online content becomes stressful or unsafe.",
  },
];

const checklist = [
  "I can explain why photos, screenshots, and posts can affect privacy.",
  "I can check content for private details before sharing.",
  "I can ask permission before posting someone else.",
  "I can avoid forwarding screenshots that spread drama or private information.",
  "I can think about how a post might affect someone's reputation or feelings.",
  "I know when to ask a trusted adult for help with shared content.",
];

export default function SharingPhotosScreenshotsAndPostsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 6 • Lesson 6.4
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Sharing Photos, Screenshots, and Posts
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Photos, screenshots, and posts can spread quickly and affect privacy,
          trust, and reputation. This lesson teaches students to pause before
          sharing content, check for private details, ask permission, and choose
          respectful communication.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/social-media-chats-and-online-communication/strangers-followers-and-friend-requests"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Previous Lesson
          </Link>

          <Link
            href="/junior/social-media-chats-and-online-communication"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Back to Module 6
          </Link>

          <Link
            href="/junior/social-media-chats-and-online-communication/respectful-communication-and-online-conflict"
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
              A quick post can travel farther than expected.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student posts a funny photo, forwards a screenshot, or
              shares a group chat moment. Even if they only meant to show a few
              friends, other people can save, copy, screenshot, repost, or send
              it somewhere else.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Safe sharing starts before the post is sent.
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
              Do not share real private photos, screenshots, or personal content
              for practice.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              CyberShield Academy uses fake examples only. Students should not
              expose real messages, private photos, personal information, or
              someone else's content while practicing online safety skills.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Sharing online means thinking about privacy, permission, and impact.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            Photos, screenshots, and posts can feel casual, but they can reveal
            more than the person sharing realizes. A picture might show a school
            name, location, schedule, username, ID card, home background, or
            another person who did not agree to be included.
          </p>

          <p>
            Screenshots can also change how messages are understood. A private
            conversation may be taken out of context, sent to people who were not
            part of it, or used to create drama. Even when something seems funny,
            it can embarrass or hurt someone else.
          </p>

          <p>
            A safer sharing habit is to pause before posting or forwarding. Ask:
            Does this reveal private information? Is someone else included? Do I
            have permission? Could this hurt, embarrass, or pressure someone? If
            the answer is unclear, it is safer to not share and to ask a trusted
            adult for help.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for understanding safer sharing.
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
          Sharing Situation Breakdown
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Photos, screenshots, and posts create different sharing decisions.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {sharingSituations.map((item) => (
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
            Safe sharing means noticing warning signs before posting.
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
          A post should not be shared just because it might get attention.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student posts, screenshots, forwards, or reposts content without
              checking privacy, permission, context, or how it might affect
              someone else.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student pauses, checks for private details, asks permission,
              avoids spreading drama, and chooses not to share when the content
              could hurt or expose someone.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice safer sharing decisions using fake examples.
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
          Use these habits before sharing photos, screenshots, or posts.
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
          Before finishing Lesson 6.4, students should be able to say:
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
            Lesson 6.4 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 6.5 will explain respectful communication and how to
            handle online conflict safely.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/social-media-chats-and-online-communication/strangers-followers-and-friend-requests"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Previous Lesson
            </Link>

            <Link
              href="/junior/social-media-chats-and-online-communication"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Back to Module 6
            </Link>

            <Link
              href="/junior/social-media-chats-and-online-communication/respectful-communication-and-online-conflict"
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