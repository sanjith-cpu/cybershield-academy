import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const glossaryTerms = [
  {
    term: "Cybersecurity",
    definition:
      "The practice of protecting devices, accounts, networks, and information from online risks.",
  },
  {
    term: "Phishing",
    definition:
      "A scam where someone pretends to be trustworthy to trick people into clicking links, opening files, or sharing private information.",
  },
  {
    term: "Password",
    definition:
      "A private word, phrase, or code used to protect an account. Strong passwords should be unique, long, and hard to guess.",
  },
  {
    term: "Passphrase",
    definition:
      "A longer password made from multiple words or a memorable phrase. Passphrases can be easier to remember and harder to guess.",
  },
  {
    term: "Multi-Factor Authentication",
    definition:
      "An extra account protection step, such as a code or approval prompt, used along with a password.",
  },
  {
    term: "Scam",
    definition:
      "A dishonest message, website, call, or post designed to trick someone into giving money, information, or account access.",
  },
  {
    term: "Social Engineering",
    definition:
      "A trick where someone manipulates people using fear, urgency, trust, rewards, or pressure.",
  },
  {
    term: "Digital Footprint",
    definition:
      "The trail of information someone leaves online through posts, comments, usernames, photos, accounts, and activity.",
  },
  {
    term: "Privacy Settings",
    definition:
      "Controls that help decide who can see posts, profiles, contact information, location, and activity.",
  },
  {
    term: "Suspicious Link",
    definition:
      "A link that looks strange, unexpected, misspelled, too urgent, shortened, or unrelated to the real website it claims to be from.",
  },
  {
    term: "Fake Download Button",
    definition:
      "A button that pretends to download something useful but may lead to an unsafe page, unwanted file, or scam.",
  },
  {
    term: "Cyber Ethics",
    definition:
      "Using technology knowledge responsibly, safely, legally, and with permission.",
  },
];

const studentChecklist = [
  "Use strong, unique passwords for important accounts.",
  "Do not share passwords or login codes with friends, classmates, or strangers.",
  "Pause before clicking links in messages, pop-ups, posts, or emails.",
  "Keep personal details like address, phone number, school schedule, and exact location private.",
  "Check privacy settings on apps, games, and social platforms.",
  "Do not post other people’s photos, messages, or information without permission.",
  "Ask a trusted adult if something online feels scary, confusing, urgent, or suspicious.",
];

const familyGuide = [
  {
    title: "Create a calm reporting plan",
    detail:
      "Students should know they can ask for help without being embarrassed. A calm plan makes it easier to report mistakes quickly.",
  },
  {
    title: "Review privacy settings together",
    detail:
      "Families can check who can see profiles, posts, location, tags, comments, and contact information.",
  },
  {
    title: "Talk about scams before they happen",
    detail:
      "Discuss fake prizes, urgent warnings, suspicious links, login code requests, and pressure messages.",
  },
  {
    title: "Encourage password privacy",
    detail:
      "Students should understand that passwords and login codes should stay private, even with friends.",
  },
];

const safeBrowsingSteps = [
  {
    title: "Check the address",
    detail:
      "Look carefully for misspellings, extra words, strange endings, or links that do not match the real organization.",
  },
  {
    title: "Avoid scary pop-ups",
    detail:
      "Do not trust pop-ups that claim your device is infected, broken, or needs an urgent download.",
  },
  {
    title: "Use official websites",
    detail:
      "Go directly to the official website or app instead of clicking random message links.",
  },
  {
    title: "Slow down",
    detail:
      "Scams often try to make people panic. Pausing gives you time to notice warning signs.",
  },
];

const reportingSteps = [
  {
    situation: "You clicked a suspicious link",
    response:
      "Stop using the page. Do not enter passwords or personal information. Tell a trusted adult or appropriate technology support person.",
  },
  {
    situation: "You shared a password by mistake",
    response:
      "Ask for help changing the password quickly. If available, turn on multi-factor authentication and check account recovery options.",
  },
  {
    situation: "Someone asks for a login code",
    response:
      "Do not share the code. Login codes are private. Report the message to a trusted adult or appropriate support person.",
  },
  {
    situation: "A device shows a scary warning",
    response:
      "Do not download unknown tools from pop-ups. Ask a trusted adult or technology support person to check it safely.",
  },
  {
    situation: "Someone is pressuring you online",
    response:
      "Do not keep it secret. Stop replying, save evidence if needed, and tell a trusted adult.",
  },
  {
    situation: "You see someone else’s account open",
    response:
      "Do not look through it. Tell the account owner or an appropriate trusted adult so the account can be protected.",
  },
];

const resourceSections = [
  {
    title: "For Students",
    detail:
      "Use the checklist, glossary, lessons, and activities to build safer online habits one topic at a time.",
    href: "/lessons",
    label: "Open Lessons",
  },
  {
    title: "For Families",
    detail:
      "Use the family guide to start calm conversations about passwords, privacy, scams, and reporting.",
    href: "/safety",
    label: "Safety & Privacy",
  },
  {
    title: "Practice & Review",
    detail:
      "Use CyberShield activities to reinforce lessons with safe scenarios, quizzes, reflections, and practice labs.",
    href: "/activities",
    label: "Open Activities",
  },
];

const quickLinks = [
  {
    label: "Learning Library",
    href: "/lessons",
  },
  {
    label: "Scenario Room",
    href: "/scenario-room",
  },
  {
    label: "Practice Lab",
    href: "/practice-lab",
  },
  {
    label: "Cyber Safety Quiz",
    href: "/quiz",
  },
  {
    label: "Spot the Scam",
    href: "/spot-the-scam",
  },
  {
    label: "Password Lab",
    href: "/password-lab",
  },
  {
    label: "Safe Browsing",
    href: "/safe-browsing",
  },
  {
    label: "Digital Footprint",
    href: "/digital-footprint",
  },
];

const trustedExternalResources = [
  {
    title: "CISA Secure Our World",
    audience: "Students and families",
    detail:
      "Simple official guidance about recognizing phishing, using strong passwords, turning on multi-factor authentication, and updating software.",
    href: "https://www.cisa.gov/secure-our-world",
  },
  {
    title: "FTC Online Security",
    audience: "Families and students",
    detail:
      "Consumer-friendly advice about protecting personal information, accounts, devices, and online privacy.",
    href: "https://consumer.ftc.gov/online-security",
  },
  {
    title: "NIST Cybersecurity & Privacy",
    audience: "Advanced learners",
    detail:
      "Cybersecurity and privacy standards, guidelines, best practices, and resources from the National Institute of Standards and Technology.",
    href: "https://www.nist.gov/cybersecurity-and-privacy",
  },
  {
    title: "NIST NICE Learning Resources",
    audience: "Career exploration",
    detail:
      "A collection of free and low-cost cybersecurity learning resources that can support students exploring cybersecurity pathways.",
    href: "https://www.nist.gov/itl/applied-cybersecurity/nice/nice-framework-resource-center/resources/education-and-training",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.12),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              CyberShield Resources
            </p>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
              Cybersecurity resources for safer online choices.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Use this resource hub to review beginner-friendly cybersecurity
              vocabulary, student safety habits, family guidance, safe browsing
              reminders, trusted help steps, and official learning resources.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/lessons"
                className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                View Lessons
              </Link>

              <Link
                href="/activities"
                className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                Explore Activities
              </Link>

              <Link
                href="/safety"
                className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                Safety & Privacy
              </Link>
            </div>

            <div className="mt-6 rounded-2xl border border-yellow-500/30 bg-yellow-950/20 p-5 text-sm leading-6 text-yellow-100">
              Safety reminder: CyberShield Academy is for safe, ethical,
              defensive learning only. Do not use real passwords, private
              information, real suspicious links, or unauthorized systems during
              practice.
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-3">
            {resourceSections.map((section) => (
              <Link
                key={section.title}
                href={section.href}
                className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-cyan-300 hover:bg-slate-900"
              >
                <h2 className="text-2xl font-bold text-white">
                  {section.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {section.detail}
                </p>

                <p className="mt-5 text-sm font-semibold text-cyan-300">
                  {section.label} →
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Cybersecurity Glossary
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              These beginner-friendly definitions help students understand
              cybersecurity words without needing advanced technical knowledge.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {glossaryTerms.map((item) => (
                <div
                  key={item.term}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                >
                  <h3 className="text-lg font-semibold text-cyan-200">
                    {item.term}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.definition}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-8">
            <h2 className="text-3xl font-bold text-emerald-100">
              Student Safety Checklist
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Use this checklist before clicking, posting, downloading, replying,
              or sharing information online.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {studentChecklist.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-emerald-500/20 bg-slate-950/70 p-5 text-sm leading-6 text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-cyan-500/30 bg-cyan-950/30 p-8">
            <h2 className="text-3xl font-bold text-cyan-200">
              Family Online Safety Guide
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Families can use these ideas to build safer habits at home and
              make it easier for students to ask for help when something goes
              wrong online.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {familyGuide.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-cyan-500/20 bg-slate-950/70 p-5"
                >
                  <h3 className="font-bold text-cyan-100">{item.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-cyan-500/30 bg-cyan-950/30 p-8">
            <h2 className="text-3xl font-bold text-cyan-200">
              Safe Browsing Checklist
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Before clicking links, downloading files, or entering information,
              slow down and check for warning signs.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {safeBrowsingSteps.map((step) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                >
                  <h3 className="font-semibold text-white">{step.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Link
                href="/lessons/safe-browsing"
                className="inline-flex rounded-xl bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                Review Safe Browsing Lesson →
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-yellow-500/30 bg-yellow-950/20 p-8">
            <h2 className="text-3xl font-bold text-yellow-100">
              Trusted Help and Reporting Reminder
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-yellow-50/90">
              Mistakes can happen. The safest response is to stop, avoid making
              the problem worse, and ask a trusted adult or appropriate support
              person for help.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {reportingSteps.map((step) => (
                <div
                  key={step.situation}
                  className="rounded-2xl border border-yellow-500/20 bg-slate-950/60 p-5"
                >
                  <h3 className="font-semibold text-yellow-100">
                    {step.situation}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-yellow-50/90">
                    {step.response}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-8">
            <h2 className="text-3xl font-bold text-emerald-100">
              Trusted External Resources
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-emerald-50/90">
              These official resources can help students and families continue
              learning beyond CyberShield Academy. They are provided for
              education and awareness, not for emergency or professional advice.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {trustedExternalResources.map((resource) => (
                <a
                  key={resource.title}
                  href={resource.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-emerald-500/20 bg-slate-950/70 p-5 transition hover:border-emerald-300 hover:bg-slate-900"
                >
                  <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-100">
                    {resource.audience}
                  </span>

                  <h3 className="mt-4 text-xl font-bold text-white">
                    {resource.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {resource.detail}
                  </p>

                  <p className="mt-4 text-sm font-semibold text-emerald-200">
                    Open official resource →
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Resource Transparency
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              CyberShield resources are written for student cybersecurity
              literacy. The goal is to teach safe online habits, responsible
              choices, privacy awareness, and defensive cybersecurity thinking.
              These resources are educational and should not be used as
              professional legal, technical, or emergency advice.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
                <h3 className="font-bold text-cyan-200">Student-Friendly</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Explanations avoid advanced technical steps and focus on clear
                  safety habits.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
                <h3 className="font-bold text-cyan-200">Defensive Only</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Activities use fake examples and do not teach harmful or
                  unauthorized actions.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
                <h3 className="font-bold text-cyan-200">Ask for Help</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Students are encouraged to report concerns to trusted adults or
                  appropriate technology support.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Practice With CyberShield
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              After reviewing the resources, continue with interactive
              activities, lessons, scenarios, quizzes, and reflection tools.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-slate-900"
                >
                  {link.label} →
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}