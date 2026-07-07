import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const moduleSummary = [
  {
    title: "Online identity includes many details.",
    text: "Usernames, profiles, posts, comments, images, messages, game names, and online behavior can all shape how someone appears online.",
  },
  {
    title: "Profiles create first impressions.",
    text: "A username, bio, profile picture, and comment history can affect how classmates, teammates, teachers, or online communities see someone.",
  },
  {
    title: "Private spaces are not always fully private.",
    text: "Private chats, closed groups, gaming spaces, and school platforms can still involve screenshots, forwarding, copying, or larger audiences.",
  },
  {
    title: "Online choices can be saved.",
    text: "Screenshots, reposts, downloads, copied messages, and forwarded content can make online actions last longer than expected.",
  },
  {
    title: "Digital reputation can be managed.",
    text: "Students can build a positive online presence through kindness, privacy, thoughtful posting, respectful communication, and safe profile choices.",
  },
];

const vocabularyReview = [
  {
    term: "Online Identity",
    definition:
      "The way a person appears online through usernames, profiles, posts, comments, messages, images, and behavior.",
  },
  {
    term: "Digital Reputation",
    definition:
      "The impression people may form based on someone’s online choices and behavior.",
  },
  {
    term: "Audience",
    definition:
      "The people who can see, save, react to, copy, or share online content.",
  },
  {
    term: "Screenshot",
    definition:
      "A saved image of what appears on a screen. Screenshots can make online content last longer than expected.",
  },
  {
    term: "Oversharing",
    definition:
      "Sharing more information than is safe or necessary, especially in public or semi-public spaces.",
  },
  {
    term: "Private Chat",
    definition:
      "A message space that may feel private, but messages can still be saved, screenshotted, forwarded, or shown to others.",
  },
];

const scenarioReview = [
  {
    title: "Scenario 1: The Revealing Username",
    situation:
      "A student creates a username that includes their full name, school initials, city, and graduation year.",
    risk:
      "The username combines multiple private details that could connect the student to real-life information.",
    smarterChoice:
      "Use a username based on a safe interest, hobby, or nickname without school, location, age, or full name details.",
  },
  {
    title: "Scenario 2: The Private Chat Screenshot",
    situation:
      "A student sends a rude message in a private chat. Someone screenshots it and shares it with a larger group.",
    risk:
      "The message did not stay private, and replying angrily could make the situation worse.",
    smarterChoice:
      "Stop replying, avoid sending more harmful messages, and ask a trusted adult for help if the situation becomes hurtful or unsafe.",
  },
  {
    title: "Scenario 3: The School Platform Comment",
    situation:
      "A student posts a sarcastic joke under a school assignment discussion because classmates are laughing.",
    risk:
      "School platforms are learning spaces, and teachers or school staff may see the comment.",
    smarterChoice:
      "Keep school platform comments respectful, helpful, and connected to learning.",
  },
  {
    title: "Scenario 4: The Old Public Profile",
    situation:
      "A student wants to join a school club but realizes their old public profile has rude jokes and private details.",
    risk:
      "Old content can still shape first impressions and affect digital reputation.",
    smarterChoice:
      "Review the profile, remove private details, update inappropriate content, and use the account more positively moving forward.",
  },
];

const saferResponseQuestions = [
  {
    question:
      "A student wants to post a profile bio with their school, city, grade, and sports schedule. What is the smarter response?",
    choices: [
      "Post it because only friends will probably look at the profile.",
      "Share safe interests instead, without including school, city, schedule, or exact location.",
      "Add even more details so classmates know exactly who the profile belongs to.",
    ],
    answer: "Choice B",
    explanation:
      "Safe interests can show personality without revealing school, city, schedule, or exact location.",
  },
  {
    question:
      "A group chat starts spreading a screenshot of another student’s message. What is the smarter response?",
    choices: [
      "Forward it so more people know what happened.",
      "Add a joke to the chat because everyone else is reacting.",
      "Do not forward it, do not add hurtful comments, and ask a trusted adult for help if someone is being embarrassed or hurt.",
    ],
    answer: "Choice C",
    explanation:
      "Not spreading the screenshot helps stop the harm from growing. A trusted adult can help handle the situation safely.",
  },
  {
    question:
      "A student is angry and wants to send a long message in a private chat. What is the smarter response?",
    choices: [
      "Pause before replying, calm down, avoid hurtful words, and ask for help if the conflict feels serious.",
      "Send the message quickly before anyone else replies.",
      "Write more messages so the other person understands how angry they are.",
    ],
    answer: "Choice A",
    explanation:
      "Pausing reduces the chance of sending something that could be screenshotted, shared, or regretted later.",
  },
  {
    question:
      "A gaming group asks for a student’s age, city, school, and regular play times. What is the smarter response?",
    choices: [
      "Share the details because the group seems friendly.",
      "Do not share private details, keep the conversation focused on the game, and ask a trusted adult if the questions feel uncomfortable.",
      "Give only the school name because that is not as private as an address.",
    ],
    answer: "Choice B",
    explanation:
      "Gaming spaces can include people students do not know in real life, so private details should not be shared.",
  },
];
const reflectionQuestions = [
  "What is one part of your online identity that people may notice first?",
  "Why can a private chat still affect digital reputation?",
  "What is one detail that should not appear in a public profile?",
  "How can screenshots change the risk of a message or post?",
  "What is one way to build a positive digital reputation?",
  "When should a student ask a trusted adult for help?",
];

const finalChecklist = [
  "I can explain what online identity includes.",
  "I can identify private details that should not be in a public profile.",
  "I can explain how usernames and profiles create first impressions.",
  "I can compare public spaces, private chats, school platforms, and gaming spaces.",
  "I can explain why screenshots, reposts, and copied messages matter.",
  "I can describe how online choices affect digital reputation.",
  "I can choose a smarter response in realistic online scenarios.",
  "I know when to ask a trusted adult, teacher, counselor, guardian, coach, or school technology staff member for help.",
];

const badgeSkills = [
  "Profile privacy judgment",
  "Audience awareness",
  "Screenshot awareness",
  "Reputation protection",
  "Respectful online communication",
  "Trusted adult help-seeking",
];

export default function OnlineIdentityCheckpointPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 1 • Lesson 1.6
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Online Identity Checkpoint
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          This checkpoint reviews Module 1: Digital Life and Online Identity.
          Students will review vocabulary, practice realistic scenarios, choose
          smarter responses, reflect on digital reputation, and complete the
          Online Identity Decision-Maker badge.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/digital-life-and-online-identity/managing-your-digital-reputation"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Previous Lesson
          </Link>

          <Link
            href="/junior/digital-life-and-online-identity"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Back to Module 1
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
          <p className="text-cyan-300 font-semibold mb-3">
            Module Summary
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Module 1 taught how online choices shape identity, privacy, and
            reputation.
          </h2>

          <div className="space-y-5">
            {moduleSummary.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-slate-950 border border-slate-800 p-6"
              >
                <h3 className="text-2xl font-bold text-cyan-200 mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-300 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">
          Vocabulary Review
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Review the key words from this module.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vocabularyReview.map((word) => (
            <div
              key={word.term}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6"
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
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">
            Scenario Review
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Read each situation, identify the risk, and compare the smarter
            response.
          </h2>

          <div className="space-y-6">
            {scenarioReview.map((scenario) => (
              <div
                key={scenario.title}
                className="rounded-2xl bg-slate-950 border border-slate-800 p-6"
              >
                <h3 className="text-2xl font-bold text-cyan-200 mb-4">
                  {scenario.title}
                </h3>

                <div className="grid lg:grid-cols-3 gap-4">
                  <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                    <h4 className="font-bold mb-2">
                      Situation
                    </h4>

                    <p className="text-slate-300 leading-relaxed">
                      {scenario.situation}
                    </p>
                  </div>

                  <div className="rounded-xl border border-red-400/40 bg-red-400/10 p-4">
                    <h4 className="font-bold text-red-200 mb-2">
                      Risk
                    </h4>

                    <p className="text-slate-200 leading-relaxed">
                      {scenario.risk}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 p-4">
                    <h4 className="font-bold text-emerald-200 mb-2">
                      Smarter Choice
                    </h4>

                    <p className="text-slate-200 leading-relaxed">
                      {scenario.smarterChoice}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">
          Choose the Safer Response
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Practice making a smarter decision before a problem grows.
        </h2>

        <div className="space-y-5">
        {saferResponseQuestions.map((item, index) => (
  <div
    key={item.question}
    className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6"
  >
    <p className="text-sm text-cyan-300 font-semibold mb-3">
      Question {index + 1}
    </p>

    <h3 className="text-2xl font-bold mb-5">
      {item.question}
    </h3>

    <div className="space-y-3 mb-5">
      {item.choices.map((choice, choiceIndex) => (
        <div
          key={choice}
          className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-slate-200"
        >
          <span className="font-bold text-cyan-200">
            Choice {String.fromCharCode(65 + choiceIndex)}:
          </span>{" "}
          {choice}
        </div>
      ))}
    </div>

    <details className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 p-4">
      <summary className="cursor-pointer font-bold text-emerald-200">
        Reveal safer response
      </summary>

      <div className="mt-4 text-slate-200 leading-relaxed">
        <p className="font-bold mb-2">
          Correct Answer: {item.answer}
        </p>

        <p>{item.explanation}</p>
      </div>
    </details>
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

            <h2 className="text-3xl font-bold mb-6">
              Think about how Module 1 connects to real life.
            </h2>

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
            <p className="text-cyan-300 font-semibold mb-3">
              Junior Skill Badge
            </p>

            <h2 className="text-3xl font-bold mb-6">
              Online Identity Decision-Maker
            </h2>

            <p className="text-slate-300 leading-relaxed mb-6">
              This badge means students can explain how online identity works,
              understand audience and screenshots, protect private details, and
              choose smarter responses in realistic middle school situations.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {badgeSkills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-xl border border-cyan-400/40 bg-cyan-400/10 p-4 text-slate-200"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">
          Final Module 1 Checklist
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Before finishing Module 1, students should be able to say:
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {finalChecklist.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 p-4 text-slate-200"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-8 text-center">
            <p className="text-emerald-200 font-semibold mb-3">
              Module 1 Complete
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              You completed Digital Life and Online Identity.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg max-w-4xl mx-auto">
              Students are now ready to continue into the next Junior module:
              Privacy and Personal Data, where they will learn how apps,
              websites, permissions, settings, and oversharing can affect
              privacy.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="max-w-5xl mx-auto rounded-2xl bg-slate-900/70 border border-slate-800 p-8 text-center">
          <p className="text-cyan-300 font-semibold mb-3">
            Navigation
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Module 1 review complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Use the buttons below to revisit Module 1, go back to the Junior
            dashboard, or preview the next module on the Junior learning path.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/digital-life-and-online-identity/managing-your-digital-reputation"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Previous Lesson
            </Link>

            <Link
              href="/junior/digital-life-and-online-identity"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Back to Module 1
            </Link>

            <Link
              href="/junior#junior-learning-path"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition text-center"
            >
              View Next Module
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}