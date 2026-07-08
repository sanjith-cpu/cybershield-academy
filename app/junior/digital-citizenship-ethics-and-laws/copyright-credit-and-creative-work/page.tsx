import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain why copyright and credit matter online",
  "Understand that creative work belongs to the people who made it",
  "Recognize when students should give credit for images, text, music, videos, or ideas",
  "Practice safer choices before copying, reposting, remixing, or using online content",
  "Know when to use original work, approved sources, or ask a trusted adult or teacher",
];

const vocabulary = [
  {
    term: "Copyright",
    definition:
      "A rule that protects creative work so the creator has control over how it is copied, shared, or used.",
  },
  {
    term: "Creative Work",
    definition:
      "Something someone makes, such as writing, art, photos, videos, music, code, designs, slides, or projects.",
  },
  {
    term: "Credit",
    definition:
      "Showing who created or provided information, images, media, or ideas used in a project or post.",
  },
  {
    term: "Citation",
    definition:
      "A more formal way to give credit by listing the source of information, media, or ideas used in schoolwork.",
  },
  {
    term: "Plagiarism",
    definition:
      "Using someone else's words, work, or ideas and presenting them as your own without proper credit.",
  },
  {
    term: "Permission",
    definition:
      "Approval to use, share, repost, remix, or publish someone else's creative work in a certain way.",
  },
];

const creativeWorkSituations = [
  {
    title: "Using an Image in a Project",
    explanation:
      "A student finds a picture online that fits their slideshow and wants to paste it into the project.",
    saferChoice:
      "Use teacher-approved sources, check usage rules, and give credit instead of treating the image as their own.",
  },
  {
    title: "Copying Text from a Website",
    explanation:
      "A student finds a paragraph that explains the topic clearly and wants to copy it into their assignment.",
    saferChoice:
      "Write the idea in their own words and cite the source, or quote only when the assignment allows it.",
  },
  {
    title: "Reposting Someone's Video",
    explanation:
      "A student sees a funny or helpful video and wants to repost it without asking or naming the creator.",
    saferChoice:
      "Avoid reposting without permission and give credit when sharing is allowed.",
  },
  {
    title: "Using AI or Online Tools",
    explanation:
      "A student uses an online tool to help brainstorm, edit, summarize, or create part of a project.",
    saferChoice:
      "Follow school rules, be honest about tool use when required, and make sure the final work shows the student's own learning.",
  },
];

const warningSigns = [
  {
    title: "No Credit Given",
    text: "A project uses photos, words, music, videos, or ideas from somewhere else without saying where they came from.",
  },
  {
    title: "Copy and Paste Work",
    text: "A student copies sentences or paragraphs directly and turns them in as if they wrote them.",
  },
  {
    title: "Unclear Permission",
    text: "The student does not know whether an image, song, clip, template, or file is allowed to be reused.",
  },
  {
    title: "Someone Else's Project",
    text: "A student uses another person's schoolwork, slide deck, code, design, or answers as their own work.",
  },
  {
    title: "Public Reposting",
    text: "A student reposts another person's creative work publicly without permission or credit.",
  },
  {
    title: "Hidden Tool Use",
    text: "A student uses an online or AI tool in a way that breaks class rules or hides how the work was created.",
  },
];

const scenarios = [
  {
    title: "The Perfect Project Picture",
    situation:
      "A student finds a perfect photo for a school presentation by searching online. They want to paste it into the slide without adding a source.",
    warningSigns:
      "The student is using someone else's image without checking rules or giving credit.",
    riskyResponse:
      "Paste the image and pretend it belongs to the student because it was easy to find online.",
    smarterResponse:
      "Use a teacher-approved image source, check whether the image is allowed, and give credit in the project.",
    whyItWorks:
      "Creative work online still belongs to someone. Giving credit and using approved sources is more respectful and safer for school projects.",
  },
  {
    title: "The Copy-Paste Paragraph",
    situation:
      "A student finds a paragraph that explains their topic really well and wants to copy it into their report.",
    warningSigns:
      "The words were written by someone else and would be presented as the student's own work.",
    riskyResponse:
      "Copy the paragraph exactly and turn it in without citation because the teacher might not notice.",
    smarterResponse:
      "Read the information, write the idea in their own words, and cite the source according to the teacher's directions.",
    whyItWorks:
      "Schoolwork should show the student's own learning. Citing sources helps students use information honestly.",
  },
  {
    title: "The Group Chat Meme",
    situation:
      "A student edits another person's artwork into a meme and wants to post it in a group chat and on social media.",
    warningSigns:
      "The original work was made by someone else, and the edited version could spread beyond the student's control.",
    riskyResponse:
      "Post it everywhere without credit because it feels like a joke.",
    smarterResponse:
      "Avoid reposting someone else's work without permission, and choose original or allowed content instead.",
    whyItWorks:
      "Online sharing can affect creators and classmates. Respectful choices reduce drama, misuse, and unfair copying.",
  },
  {
    title: "The AI Homework Helper",
    situation:
      "A student uses an online tool to create a full answer for an assignment and plans to submit it as their own work.",
    warningSigns:
      "The student may be hiding tool use and submitting work that does not show their own thinking.",
    riskyResponse:
      "Turn in the tool's answer exactly because it sounds polished.",
    smarterResponse:
      "Follow class rules, use tools only in allowed ways, and make sure the final work reflects the student's own understanding.",
    whyItWorks:
      "Digital citizenship includes honesty. Students should use tools responsibly and follow teacher expectations.",
  },
];

const actionSteps = [
  "Ask: Did I make this, or did someone else make it?",
  "Give credit when using information, images, videos, music, designs, or ideas from another source.",
  "Use teacher-approved sources for school projects when possible.",
  "Write in your own words instead of copying and pasting full answers.",
  "Check class rules before using online tools, templates, AI tools, or shared work.",
  "Ask a teacher or trusted adult when you are unsure whether something can be used or shared.",
];

const reflectionQuestions = [
  "Why does creative work online still belong to someone?",
  "What is the difference between using a source and copying a source?",
  "Why is giving credit important for school projects?",
  "What should students do when they are unsure whether they can use an image, video, or tool?",
  "How can students show honesty when using online information or digital tools?",
];

const skillCheck = [
  {
    question:
      "A student uses an online image in a school slideshow. What is the safer response?",
    choices: [
      "Use the image without credit because it was online",
      "Check whether the image is allowed and give credit",
      "Tell classmates the student took the picture",
    ],
    answer: "Choice B",
    explanation:
      "Online images are creative work. Students should use approved sources when possible and give credit.",
  },
  {
    question:
      "A student copies a paragraph from a website and turns it in as their own. What is the problem?",
    choices: [
      "It may be plagiarism",
      "The paragraph has too many words",
      "The website loaded too slowly",
    ],
    answer: "Choice A",
    explanation:
      "Using someone else's words as your own without credit is plagiarism. Students should write in their own words and cite sources.",
  },
  {
    question:
      "A student is unsure whether they can use a song clip in a public video. What should they do?",
    choices: [
      "Use it anyway and delete it later if someone complains",
      "Ask a teacher or trusted adult and check permission rules first",
      "Hide the source so nobody knows where it came from",
    ],
    answer: "Choice B",
    explanation:
      "When permission is unclear, students should ask for help and check rules before using or sharing someone else's work.",
  },
  {
    question:
      "What is a good digital citizenship habit when using online tools for schoolwork?",
    choices: [
      "Follow class rules and be honest about tool use when required",
      "Let the tool do the entire assignment secretly",
      "Copy anything that sounds professional",
    ],
    answer: "Choice A",
    explanation:
      "Students should use digital tools responsibly, follow teacher expectations, and make sure their work shows their own learning.",
  },
];

const checklist = [
  "I can explain why copyright and credit matter online.",
  "I can recognize creative work that belongs to someone else.",
  "I can give credit when using information, images, media, or ideas.",
  "I can avoid copying and pasting work as if it is my own.",
  "I can follow school rules for online tools, sources, and AI tools.",
  "I know when to ask a teacher or trusted adult for help with permission or citations.",
];

export default function CopyrightCreditAndCreativeWorkPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 11 • Lesson 11.3
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Copyright, Credit, and Creative Work
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Digital citizenship means respecting the work people create online.
          This lesson teaches students how to think carefully before copying,
          reposting, remixing, or using images, text, videos, music, designs,
          tools, or ideas in school and online spaces.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/digital-citizenship-ethics-and-laws/online-rules-terms-and-school-policies"
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
            href="/junior/digital-citizenship-ethics-and-laws/ethical-hacking-vs-harmful-hacking"
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
              Just because something is online does not mean it is free to use.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student finds the perfect image, paragraph, song clip,
              video, or template for a project. It may feel easy to copy and
              paste, but digital citizenship means asking who made it, whether
              it can be used, and how to give proper credit.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Respecting creative work is part of being safe, legal, and ethical online.
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
              Do not copy, repost, or publish someone else's work without checking rules.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              CyberShield Academy uses fake examples only. Students should not
              steal creative work, pretend someone else's work is their own, or
              use online tools in ways that break school rules. When unsure,
              students should ask a teacher or trusted adult.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Copyright and credit help students use online content honestly.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            The internet is full of creative work: photos, writing, videos,
            music, artwork, code, templates, slides, and ideas. Even when work
            is easy to find, it was still created by someone. Digital citizens
            respect that work instead of taking it without credit.
          </p>

          <p>
            Giving credit means showing where information, media, or ideas came
            from. In school, this often means citing sources. In online spaces,
            it can mean naming the creator, linking to an allowed source, or
            following the platform's sharing rules.
          </p>

          <p>
            Students do not need to memorize every copyright rule. A safer habit
            is to pause and ask: Did I create this? Am I allowed to use it? Did I
            give credit? Does my teacher allow this tool or source? If the
            answer is unclear, students should ask a teacher or trusted adult.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for understanding creative work and credit.
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
          Creative Work Situation Breakdown
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Online content can create choices about credit, permission, and honesty.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {creativeWorkSituations.map((item) => (
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
            Digital citizenship means noticing when work may be used unfairly.
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
          Good digital citizens respect creators and show honest work.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student copies, reposts, or submits someone else's work without
              permission, credit, or teacher approval.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student creates original work, uses approved sources, gives
              credit, follows class rules, and asks for help when permission is
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
          Use these habits before copying, sharing, or submitting online content.
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
          Before finishing Lesson 11.3, students should be able to say:
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
            Lesson 11.3 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 11.4 will explain the difference between ethical
            hacking and harmful hacking in a safe, age-appropriate way.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/digital-citizenship-ethics-and-laws/online-rules-terms-and-school-policies"
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
              href="/junior/digital-citizenship-ethics-and-laws/ethical-hacking-vs-harmful-hacking"
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