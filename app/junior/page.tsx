import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const juniorModules = [
  {
    number: "Module 1",
    title: "Digital Life and Online Identity",
    bigQuestion: "How do your online choices shape how others see you?",
    description:
      "Students learn that online identity includes usernames, profiles, posts, comments, images, likes, group activity, and online behavior.",
    lessons: "6 lessons",
    status: "Live",
    href: "/junior/digital-life-and-online-identity",
  },
  {
    number: "Module 2",
    title: "Privacy and Personal Data",
    bigQuestion: "How can small pieces of data reveal more than expected?",
    description:
      "Students learn what personal data is, how apps and websites may collect it, and why privacy settings and careful sharing matter.",
    lessons: "6 lessons",
    status: "Live",
    href: "/junior/privacy-and-personal-data",
  },
  {
    number: "Module 3",
    title: "Passwords, Accounts, and Login Safety",
    bigQuestion: "Why are accounts valuable, and how can students protect them?",
    description:
      "Students learn why accounts matter, how strong passwords help, what password reuse risks are, and how multi-factor authentication adds protection.",
    lessons: "6 lessons",
    status: "Live",
    href: "/junior/passwords-accounts-and-login-safety",
  },
  {
    number: "Module 4",
    title: "Phishing and Scam Awareness",
    bigQuestion: "How can students recognize scams before responding, clicking, or sharing information?",
    description:
      "Students learn how phishing and scams use urgency, fear, curiosity, fake rewards, and impersonation to pressure unsafe choices.",
    lessons: "6 lessons",
    status: "Live",
    href: "/junior/phishing-and-scam-awareness",
  },
  {
    number: "Module 5",
    title: "Safe Browsing and Downloads",
    bigQuestion: "How can students make safer choices before visiting, clicking, downloading, or allowing access?",
    description:
      "Students learn how to browse more safely, recognize website warning signs, avoid risky downloads, and handle pop-ups and device alerts carefully.",
    lessons: "6 lessons",
    status: "Live",
    href: "/junior/safe-browsing-and-downloads",
  },
  {
    number: "Module 6",
    title: "Social Media, Chats, and Online Communication",
    bigQuestion: "How can students communicate online in ways that are safe, respectful, and thoughtful?",
    description:
      "Students learn about online communication basics, group chat safety, friend requests, screenshots, sharing posts, and respectful conflict response.",
    lessons: "6 lessons",
    status: "Live",
    href: "/junior/social-media-chats-and-online-communication",
  },
  {
    number: "Module 7",
    title: "Cyberbullying, Digital Drama, and Getting Help",
    bigQuestion: "How can students respond safely when online behavior becomes hurtful, stressful, or unsafe?",
    description:
      "Students learn what cyberbullying means, how to compare digital drama with serious harm, how to support others safely, and when to get trusted adult help.",
    lessons: "6 lessons",
    status: "Live",
    href: "/junior/cyberbullying-digital-drama-and-getting-help",
  },
  {
    number: "Module 8",
    title: "Misinformation, AI, and Online Content Trust",
    bigQuestion: "How can students decide whether online content is trustworthy before believing or sharing it?",
    description:
      "Students learn about misinformation, clickbait, rumors, source checking, AI images, edited media, and responsible sharing.",
    lessons: "6 lessons",
    status: "Live",
    href: "/junior/misinformation-ai-and-online-content-trust",
  },
  {
    number: "Module 9",
    title: "Devices, Networks, and Wi-Fi Safety",
    bigQuestion: "How can students use devices and networks more safely at home, school, and public places?",
    description:
      "Students learn device and network basics, home Wi-Fi safety, public Wi-Fi habits, Bluetooth and nearby sharing safety, and shared device care.",
    lessons: "6 lessons",
    status: "Live",
    href: "/junior/devices-networks-and-wifi-safety",
  },
  {
    number: "Module 10",
    title: "Cyber Threats and Defense Basics",
    bigQuestion: "What are common cyber threats, and how do defenders reduce risk safely and ethically?",
    description:
      "Students learn about common cyber threats, malware basics, social engineering, updates, backups, basic protection, and what cyber defenders do.",
    lessons: "6 lessons",
    status: "Live",
    href: "/junior/cyber-threats-and-defense-basics",
  },
  {
    number: "Module 11",
    title: "Digital Citizenship, Ethics, and Laws",
    bigQuestion: "How can students make online choices that are safe, legal, respectful, and ethical?",
    description:
      "Students learn about digital citizenship, online rules, school policies, copyright, credit, ethical hacking, and responsible digital consequences.",
    lessons: "6 lessons",
    status: "Live",
    href: "/junior/digital-citizenship-ethics-and-laws",
  },
  {
    number: "Module 12",
    title: "Junior Cyber Safety Capstone",
    bigQuestion: "How can students combine everything they learned into a real-life cyber safety plan?",
    description:
      "Students build a personal cyber safety plan and practice final scenario challenges about suspicious messages, unsafe websites, privacy, reputation, and communication.",
    lessons: "6 lessons",
    status: "Live",
    href: "/junior/junior-cyber-safety-capstone",
  },
];

const juniorDifferenceCards = [
  {
    title: "Real-Life Scenarios",
    text: "Junior lessons use middle school situations like group chats, school platforms, social media, devices, AI content, and online communities.",
  },
  {
    title: "Stronger Explanations",
    text: "Students learn why something is risky instead of only memorizing simple safety rules.",
  },
  {
    title: "Decision Practice",
    text: "Each module helps students compare risky choices with smarter choices before problems grow.",
  },
  {
    title: "More Independence",
    text: "Students practice thinking carefully while still knowing when to ask trusted adults for help.",
  },
];

const skills = [
  "Privacy judgment",
  "Scam awareness",
  "Account safety",
  "Digital reputation",
  "Group chat responsibility",
  "Respectful communication",
  "Source checking",
  "AI awareness",
  "Device safety",
  "Network safety",
  "Safe reporting",
  "Trusted adult communication",
  "Cyber defense basics",
  "Digital citizenship",
  "Smarter online decision-making",
];

const safetyRules = [
  "Use fake examples only.",
  "Do not enter real passwords.",
  "Do not share real private information.",
  "Do not test real suspicious links, files, websites, or downloads.",
  "Do not use real screenshots or private messages for practice.",
  "Ask a trusted adult, teacher, counselor, guardian, or school technology staff when something feels unsafe.",
];

const scenarioExamples = [
  {
    situation: "A group chat starts spreading a screenshot of someone else’s message.",
    riskyChoice: "Forwarding it because everyone else is doing it.",
    smarterChoice:
      "Do not spread it, pause before replying, and ask a trusted adult if the situation becomes hurtful or unsafe.",
  },
  {
    situation: "A message offers a free reward if a student shares login information.",
    riskyChoice: "Sharing the account details to get the reward quickly.",
    smarterChoice:
      "Treat it as suspicious, do not share login information, and ask for help before clicking or responding.",
  },
  {
    situation: "A student sees a viral post that sounds shocking but does not show a clear source.",
    riskyChoice: "Reposting it immediately because it looks important.",
    smarterChoice:
      "Pause, check trusted sources, look for evidence, and avoid sharing until the information is confirmed.",
  },
];

export default function JuniorPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Middle School Track
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Smarter cybersecurity decisions for middle school students.
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          CyberShield Junior is a complete middle school cybersecurity literacy
          track focused on privacy, scams, accounts, safe browsing, online
          communication, cyberbullying, misinformation, devices, cyber defense,
          digital citizenship, and real-life cyber safety planning.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/digital-life-and-online-identity"
            className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition text-center"
          >
            Start Module 1
          </Link>

          <Link
            href="#junior-learning-path"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            View All Modules
          </Link>

          <Link
            href="/lessons"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Back to Learning Library
          </Link>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">
            What Makes Junior Different
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Junior is about thinking through risk, not just memorizing rules.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {juniorDifferenceCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl bg-slate-950 border border-slate-800 p-6"
              >
                <h3 className="text-xl font-bold text-cyan-200 mb-3">
                  {card.title}
                </h3>

                <p className="text-slate-300 leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="junior-learning-path"
        className="px-8 py-16 max-w-6xl mx-auto"
      >
        <div className="mb-10">
          <p className="text-cyan-300 font-semibold mb-3">
            Junior Learning Path
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-5">
            12 modules. 72 lessons. One complete middle school cyber safety path.
          </h2>

          <p className="text-slate-300 leading-relaxed max-w-4xl">
            Each module uses fake middle school scenarios to help students
            understand warning signs, compare choices, and practice safer
            real-life actions. Click any module card to open that module homepage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {juniorModules.map((module, index) => (
            <Link
              id={index === 0 ? "module-1" : undefined}
              key={module.title}
              href={module.href}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 hover:border-cyan-400 transition block"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                <p className="text-sm text-cyan-300 font-semibold">
                  {module.number}
                </p>

                <span
                  className={`w-fit rounded-full px-3 py-1 text-xs font-bold ${
                    module.status === "Live"
                      ? "bg-emerald-400 text-slate-950"
                      : "bg-slate-800 text-slate-300"
                  }`}
                >
                  {module.status}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-cyan-200 mb-3">
                {module.title}
              </h3>

              <div className="rounded-xl border border-yellow-400/40 bg-yellow-400/10 p-4 mb-4">
                <h4 className="font-bold text-yellow-200 mb-2">
                  Big Question
                </h4>

                <p className="text-slate-200 leading-relaxed">
                  {module.bigQuestion}
                </p>
              </div>

              <p className="text-slate-300 leading-relaxed mb-5">
                {module.description}
              </p>

              <div className="flex items-center justify-between gap-4">
                <p className="text-sm text-slate-400">{module.lessons}</p>

                <p className="text-sm font-semibold text-cyan-300">
                  Open Module →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">
            Skills Students Build
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Junior builds safer judgment across everyday digital life.
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-slate-200"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">
          Scenario-Based Learning
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Students practice the difference between risky choices and smarter choices.
        </h2>

        <p className="text-slate-300 leading-relaxed max-w-4xl mb-8">
          Junior lessons are built around fake, school-appropriate situations.
          Students learn what happened, what the warning signs are, what could
          go wrong, and what a safer response looks like.
        </p>

        <div className="grid lg:grid-cols-3 gap-6">
          {scenarioExamples.map((scenario) => (
            <div
              key={scenario.situation}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6"
            >
              <h3 className="text-xl font-bold text-cyan-200 mb-4">
                Scenario
              </h3>

              <p className="text-slate-300 leading-relaxed mb-5">
                {scenario.situation}
              </p>

              <div className="rounded-xl border border-red-400/40 bg-red-400/10 p-4 mb-4">
                <h4 className="font-bold text-red-200 mb-2">Risky Choice</h4>

                <p className="text-slate-200 leading-relaxed">
                  {scenario.riskyChoice}
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
          ))}
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6">
            <p className="text-cyan-300 font-semibold mb-3">Safety Rules</p>

            <h2 className="text-3xl font-bold mb-6">
              Every Junior lesson stays safe, ethical, and defensive.
            </h2>

            <div className="space-y-3">
              {safetyRules.map((rule) => (
                <div
                  key={rule}
                  className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 text-slate-200"
                >
                  {rule}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6">
            <p className="text-cyan-300 font-semibold mb-3">
              Completion Path
            </p>

            <h2 className="text-3xl font-bold mb-6">
              The full Junior Track is now a complete middle school course.
            </h2>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                <p className="text-4xl font-extrabold text-cyan-300 mb-2">
                  12
                </p>
                <p className="text-slate-300">Modules</p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                <p className="text-4xl font-extrabold text-cyan-300 mb-2">
                  72
                </p>
                <p className="text-slate-300">Lessons</p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                <p className="text-4xl font-extrabold text-cyan-300 mb-2">
                  1
                </p>
                <p className="text-slate-300">Final Capstone</p>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                <p className="text-4xl font-extrabold text-cyan-300 mb-2">
                  Safe
                </p>
                <p className="text-slate-300">Fake examples only</p>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed">
              After Junior is complete, students should be ready for the much
              deeper High School Beginner, Intermediate, and Advanced tracks.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="max-w-5xl mx-auto rounded-2xl bg-slate-900/70 border border-slate-800 p-8 text-center">
          <p className="text-cyan-300 font-semibold mb-3">
            Junior Track Complete
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Start with Module 1 or jump to any live module.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            The Junior Track now connects to all 12 module homepages. Students
            can move through the course in order or open a specific module for
            focused practice.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/digital-life-and-online-identity"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition text-center"
            >
              Start Module 1
            </Link>

            <Link
              href="#junior-learning-path"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              View All Modules
            </Link>

            <Link
              href="/"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Back Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}