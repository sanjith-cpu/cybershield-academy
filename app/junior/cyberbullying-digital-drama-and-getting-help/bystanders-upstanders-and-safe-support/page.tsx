import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain the difference between bystanders and upstanders",
  "Understand why joining hurtful online behavior can make harm worse",
  "Recognize safe ways to support someone without escalating conflict",
  "Practice documenting concerns and asking trusted adults for help",
  "Choose calm, respectful, and protective actions in online situations",
];

const vocabulary = [
  {
    term: "Bystander",
    definition:
      "Someone who sees online drama, bullying, or unsafe behavior happening but has not yet decided how to respond.",
  },
  {
    term: "Upstander",
    definition:
      "Someone who responds in a safe and helpful way, such as supporting the target, not joining in, and getting trusted help.",
  },
  {
    term: "Escalation",
    definition:
      "When a situation becomes more intense, hurtful, public, or unsafe because people keep reacting, sharing, arguing, or piling on.",
  },
  {
    term: "Safe Support",
    definition:
      "Helping someone in a way that protects privacy, avoids retaliation, and involves trusted adults when needed.",
  },
  {
    term: "Trusted Adult",
    definition:
      "A parent, guardian, teacher, counselor, coach, school staff member, or another responsible adult who can help handle a serious situation.",
  },
  {
    term: "Private Check-In",
    definition:
      "A calm message or conversation with someone to ask if they are okay, without making the situation more public.",
  },
];

const supportSituations = [
  {
    title: "Seeing Mean Comments",
    explanation:
      "A student notices classmates posting jokes or insults about someone in a comment section or group chat.",
    saferChoice:
      "Do not like, repost, laugh, or add more comments. Save important information if needed and tell a trusted adult.",
  },
  {
    title: "Friend Being Targeted",
    explanation:
      "A student sees that a friend is upset because people keep sending hurtful messages online.",
    saferChoice:
      "Check in privately, encourage the friend not to respond alone, and help them reach a trusted adult.",
  },
  {
    title: "Pressure to Join In",
    explanation:
      "A group tells a student to react, comment, or share a screenshot that could embarrass someone.",
    saferChoice:
      "Refuse to join in, avoid spreading the content, and get help if the situation seems harmful or unsafe.",
  },
  {
    title: "Conflict Getting Bigger",
    explanation:
      "A disagreement moves from one message to many people taking sides, tagging others, and sending screenshots.",
    saferChoice:
      "Stop feeding the conflict, avoid public arguing, and ask for trusted adult support before it grows more serious.",
  },
];

const warningSigns = [
  {
    title: "People Are Piling On",
    text: "More people keep adding comments, reactions, or jokes that make one person feel targeted.",
  },
  {
    title: "Screenshots Are Spreading",
    text: "Private messages, photos, or posts are being shared to embarrass someone or pull more people into the situation.",
  },
  {
    title: "Someone Seems Scared or Overwhelmed",
    text: "The person being targeted seems very upset, says they feel unsafe, or asks people to stop and they do not stop.",
  },
  {
    title: "The Group Wants Revenge",
    text: "People are encouraging payback, harassment, threats, or public humiliation instead of calming down.",
  },
  {
    title: "Private Information Is Involved",
    text: "Someone's personal details, location, contact information, school information, or private images are being shared.",
  },
  {
    title: "Adults Need to Know",
    text: "The situation is repeated, threatening, humiliating, unsafe, or too serious for students to handle alone.",
  },
];

const scenarios = [
  {
    title: "The Comment Section Pile-On",
    situation:
      "A student sees many classmates making fun of someone under a post. Other students are reacting with laughing emojis and adding more jokes.",
    warningSigns:
      "A group is piling on one person, and the public comments may make the target feel embarrassed or unsafe.",
    riskyResponse:
      "Like the comments or add another joke because everyone else is doing it.",
    smarterResponse:
      "Do not join in. Avoid reacting to the hurtful comments, save important information if needed, and tell a trusted adult.",
    whyItWorks:
      "Not joining prevents the harm from growing. Trusted adults can help respond without making the situation more public.",
  },
  {
    title: "The Private Check-In",
    situation:
      "A friend says they are upset because a group chat keeps talking about them in a mean way.",
    warningSigns:
      "The friend is being repeatedly targeted and feels hurt by the group chat.",
    riskyResponse:
      "Jump into the group chat and start insulting people back.",
    smarterResponse:
      "Check in privately, say they do not deserve to be treated that way, and encourage them to talk to a trusted adult.",
    whyItWorks:
      "Private support can help someone feel less alone without escalating the conflict or creating more drama.",
  },
  {
    title: "The Screenshot Pressure",
    situation:
      "A student receives a screenshot of someone else's private message. The sender asks them to share it with more people.",
    warningSigns:
      "Private content is being spread without permission, and the student is being pressured to participate.",
    riskyResponse:
      "Forward the screenshot because it seems interesting or funny.",
    smarterResponse:
      "Do not share it. Tell the sender it is not okay to spread private messages and ask a trusted adult for help if needed.",
    whyItWorks:
      "Stopping the spread protects privacy and reduces the chance that the situation becomes more harmful.",
  },
  {
    title: "The Conflict Spiral",
    situation:
      "Two students argue online, and more people begin taking sides, tagging others, and posting about it.",
    warningSigns:
      "The conflict is growing, becoming public, and pulling more people into the drama.",
    riskyResponse:
      "Pick a side publicly and post more comments to defend a friend.",
    smarterResponse:
      "Avoid public arguing, encourage people to stop posting, and get help from a trusted adult if the conflict continues.",
    whyItWorks:
      "Calm support helps reduce escalation. Serious or repeated conflict should not be handled by students alone.",
  },
];

const actionSteps = [
  "Do not like, repost, laugh at, or add to hurtful online behavior.",
  "Support the person being targeted privately when it is safe to do so.",
  "Do not spread screenshots, private messages, rumors, photos, or embarrassing posts.",
  "Save important information if a trusted adult may need to understand what happened.",
  "Ask a trusted adult for help when behavior is repeated, threatening, humiliating, or unsafe.",
  "Use calm words and avoid revenge, public arguments, or group pile-ons.",
];

const reflectionQuestions = [
  "What is the difference between a bystander and an upstander?",
  "Why can liking or reposting hurtful content make a situation worse?",
  "What is one safe way to support someone privately?",
  "Why should students avoid spreading screenshots or private messages?",
  "When should a trusted adult be involved?",
];

const skillCheck = [
  {
    question:
      "A student sees classmates making fun of someone in a comment section. What is the safer response?",
    choices: [
      "Like the comments because everyone else is doing it",
      "Do not join in, save important information if needed, and tell a trusted adult",
      "Add a joke so the group notices them",
    ],
    answer: "Choice B",
    explanation:
      "A safer upstander response is not to add to the harm and to get trusted help when someone is being targeted.",
  },
  {
    question:
      "A friend says a group chat keeps talking about them in a hurtful way. What is a helpful first step?",
    choices: [
      "Check in privately and encourage them to get trusted adult help",
      "Start insulting the group back",
      "Post about the conflict publicly",
    ],
    answer: "Choice A",
    explanation:
      "Private support can help the friend feel less alone without escalating the online conflict.",
  },
  {
    question:
      "Someone sends a screenshot of a private message and asks the student to share it. What should the student do?",
    choices: [
      "Forward it to more people",
      "Post it anonymously",
      "Do not share it and ask a trusted adult for help if needed",
    ],
    answer: "Choice C",
    explanation:
      "Sharing private messages can hurt someone and make the situation worse. It is safer to stop the spread.",
  },
  {
    question:
      "Which action is an example of escalation?",
    choices: [
      "Avoiding the conflict and asking a trusted adult for help",
      "Tagging more people into an argument so they can take sides",
      "Checking in privately with someone who was targeted",
    ],
    answer: "Choice B",
    explanation:
      "Pulling more people into an argument can make the conflict bigger, more public, and more harmful.",
  },
];

const checklist = [
  "I can explain what bystanders and upstanders are.",
  "I can avoid joining hurtful online behavior.",
  "I can support someone privately without escalating conflict.",
  "I can recognize when screenshots or private messages should not be shared.",
  "I can identify warning signs that trusted adults need to be involved.",
  "I can choose calm, safe, and respectful actions online.",
];

export default function BystandersUpstandersAndSafeSupportPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 7 • Lesson 7.3
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Bystanders, Upstanders, and Safe Support
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Students often see online conflict before adults do. This lesson helps
          students understand how to avoid joining harmful behavior, support
          others safely, and get trusted help when online situations become
          hurtful, repeated, or unsafe.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/cyberbullying-digital-drama-and-getting-help/digital-drama-vs-serious-harm"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Previous Lesson
          </Link>

          <Link
            href="/junior/cyberbullying-digital-drama-and-getting-help"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Back to Module 7
          </Link>

          <Link
            href="/junior/cyberbullying-digital-drama-and-getting-help/saving-evidence-and-reporting-safely"
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
              Seeing online harm gives students a choice.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student sees a group chat making fun of someone, a post
              spreading a screenshot, or comments piling on one person. The
              student may not have started the problem, but their next choice
              matters. They can add to the harm, ignore it, or respond in a
              safer and more supportive way.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Safe support means helping without making the situation worse.
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
              Do not fight back, pile on, or handle serious harm alone.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              CyberShield Academy teaches safe response choices. Students should
              not threaten others, shame people publicly, spread screenshots,
              organize revenge, or try to solve serious online harm without
              trusted adult support.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Upstanders help reduce harm instead of adding to it.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            A bystander is someone who sees online drama, bullying, or unsafe
            behavior. Bystanders may feel unsure because they do not want to get
            involved, make the conflict worse, or become a target themselves.
            That feeling is understandable, but doing nothing is not always the
            safest choice.
          </p>

          <p>
            An upstander responds in a safer and more helpful way. Upstanders do
            not need to argue publicly or act like heroes. They can choose not to
            join in, avoid sharing harmful content, check in privately with the
            person being targeted, save important information, and ask trusted
            adults for help.
          </p>

          <p>
            Safe support protects people while reducing escalation. The goal is
            not to win an argument online. The goal is to stop adding attention
            to harmful behavior, support the person affected, and bring in
            trusted help when a situation is repeated, threatening, humiliating,
            or unsafe.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for understanding safe online support.
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
          Safe Support Breakdown
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Different situations need calm and careful support.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {supportSituations.map((item) => (
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
            Upstanders know when a situation needs trusted help.
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
          Support should reduce harm, not create more attention or conflict.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student joins the comments, spreads screenshots, argues
              publicly, or encourages payback because they want to defend a
              friend or fit in with the group.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student refuses to join harmful behavior, supports the target
              privately, avoids spreading content, and asks a trusted adult for
              help when the situation is serious.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice safer upstander choices using fake examples.
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
          Use these habits when you see online harm happening.
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
          Before finishing Lesson 7.3, students should be able to say:
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
            Lesson 7.3 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 7.4 will explain how to save evidence and report online
            problems safely.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/cyberbullying-digital-drama-and-getting-help/digital-drama-vs-serious-harm"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Previous Lesson
            </Link>

            <Link
              href="/junior/cyberbullying-digital-drama-and-getting-help"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Back to Module 7
            </Link>

            <Link
              href="/junior/cyberbullying-digital-drama-and-getting-help/saving-evidence-and-reporting-safely"
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