import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const curriculumModules = [
  {
    number: "Module 1",
    title: "Online Safety Basics",
    status: "Next build",
    href: "/kids/online-safety-basics",
    description:
      "Students learn what information is okay to share, what should stay private, how to choose safer usernames, and when to ask a trusted adult for help.",
    outcome:
      "Students can explain the difference between public information and private information.",
    lessons: [
      {
        number: "1.1",
        title: "Personal Information",
        description:
          "Learn what personal information means and why it matters online.",
      },
      {
        number: "1.2",
        title: "Private Information",
        description:
          "Learn which details should not be shared in games, chats, forms, or websites.",
      },
      {
        number: "1.3",
        title: "Safe Usernames",
        description:
          "Learn how to create usernames that do not reveal real names, schools, or locations.",
      },
      {
        number: "1.4",
        title: "Trusted Adults",
        description:
          "Learn when to pause, step away, and ask a parent, teacher, counselor, or school technology staff member for help.",
      },
      {
        number: "1.5",
        title: "Module Review",
        description:
          "Review safe choices, warning signs, and what to do when something online feels wrong.",
      },
    ],
  },
  {
    number: "Module 2",
    title: "Passwords and Accounts",
    status: "Coming next",
    description:
      "Students learn why passwords protect accounts, why passwords should not be shared, and how trusted adults can help with account safety.",
    outcome:
      "Students can explain that passwords are private and should be protected.",
    lessons: [
      {
        number: "2.1",
        title: "What Passwords Protect",
        description:
          "Understand that passwords help protect games, school tools, videos, and learning accounts.",
      },
      {
        number: "2.2",
        title: "Why Passwords Stay Secret",
        description:
          "Learn why students should not share passwords with friends, strangers, or people in online games.",
      },
      {
        number: "2.3",
        title: "Asking for Account Help",
        description:
          "Learn how to ask a trusted adult for help when locked out or confused.",
      },
      {
        number: "2.4",
        title: "Safe Account Habits",
        description:
          "Practice signing out, protecting devices, and avoiding password guessing games.",
      },
      {
        number: "2.5",
        title: "Module Review",
        description:
          "Review password safety, account safety, and when to get adult help.",
      },
    ],
  },
  {
    number: "Module 3",
    title: "Scam Spotting",
    status: "Planned",
    description:
      "Students learn that some online messages, popups, prizes, and game offers may be fake or unsafe.",
    outcome:
      "Students can notice common warning signs and ask for help before clicking.",
    lessons: [
      {
        number: "3.1",
        title: "What Is a Scam?",
        description:
          "Learn that scams try to trick people into clicking, sharing, or believing something fake.",
      },
      {
        number: "3.2",
        title: "Too-Good-to-Be-True Offers",
        description:
          "Learn why free prizes, free game coins, and urgent rewards can be warning signs.",
      },
      {
        number: "3.3",
        title: "Strange Messages",
        description:
          "Practice noticing messages that ask for secrets, passwords, money, or personal details.",
      },
      {
        number: "3.4",
        title: "Pause Before You Click",
        description:
          "Learn a simple pause-check-ask routine before clicking links or buttons.",
      },
      {
        number: "3.5",
        title: "Module Review",
        description:
          "Review scam warning signs using safe, fake examples only.",
      },
    ],
  },
  {
    number: "Module 4",
    title: "Kind and Safe Technology Use",
    status: "Planned",
    description:
      "Students learn how to be respectful online, avoid joining mean behavior, and get help when someone is being hurtful.",
    outcome:
      "Students can describe what kind, respectful, and responsible technology use looks like.",
    lessons: [
      {
        number: "4.1",
        title: "Kind Words Online",
        description:
          "Learn how online words can affect real people and why kindness matters.",
      },
      {
        number: "4.2",
        title: "Group Chats and Games",
        description:
          "Learn safe choices in chats, comments, game messages, and class tools.",
      },
      {
        number: "4.3",
        title: "What to Do if Someone Is Mean",
        description:
          "Practice stepping away, saving evidence for an adult, and asking for help.",
      },
      {
        number: "4.4",
        title: "Being a Digital Helper",
        description:
          "Learn how students can support others without joining drama or arguments.",
      },
      {
        number: "4.5",
        title: "Module Review",
        description:
          "Review respectful choices and safe ways to respond to online problems.",
      },
    ],
  },
  {
    number: "Module 5",
    title: "Digital Footprints",
    status: "Planned",
    description:
      "Students learn that online actions can leave traces and that sharing should be thoughtful, safe, and respectful.",
    outcome:
      "Students can explain why they should think before posting, sharing, or commenting.",
    lessons: [
      {
        number: "5.1",
        title: "What Is a Digital Footprint?",
        description:
          "Learn that online choices can leave a trail, even when something feels temporary.",
      },
      {
        number: "5.2",
        title: "Think Before You Share",
        description:
          "Practice deciding what is safe, kind, and appropriate to share.",
      },
      {
        number: "5.3",
        title: "Photos and Videos",
        description:
          "Learn why students should ask a trusted adult before posting images or videos.",
      },
      {
        number: "5.4",
        title: "Online Reputation",
        description:
          "Learn how choices online can affect how others see us.",
      },
      {
        number: "5.5",
        title: "Module Review",
        description:
          "Review digital footprint choices using simple student-friendly examples.",
      },
    ],
  },
  {
    number: "Module 6",
    title: "Cyber Safety Review",
    status: "Planned",
    description:
      "Students review the biggest safety habits from the Kids track and practice choosing safe next steps.",
    outcome:
      "Students can use a simple safety checklist before clicking, sharing, chatting, or asking for help.",
    lessons: [
      {
        number: "6.1",
        title: "Safety Habit Review",
        description:
          "Review privacy, passwords, kindness, scams, and trusted adults.",
      },
      {
        number: "6.2",
        title: "Safe or Unsafe?",
        description:
          "Practice deciding whether example situations are safe or unsafe.",
      },
      {
        number: "6.3",
        title: "What Would You Do?",
        description:
          "Choose safe next steps for common online situations.",
      },
      {
        number: "6.4",
        title: "Cyber Safety Pledge",
        description:
          "Create a simple promise for safe, kind, and responsible technology use.",
      },
      {
        number: "6.5",
        title: "Final Review",
        description:
          "Complete the Kids track review before future certificate features are added.",
      },
    ],
  },
];

const safetyHabits = [
  "Pause before clicking buttons, links, popups, or messages that feel strange.",
  "Keep private information private, including home address, school name, phone number, and passwords.",
  "Use usernames that do not reveal your full real name, school, location, or birthday.",
  "Be kind in games, chats, comments, and classroom technology tools.",
  "Ask a trusted adult when something online feels confusing, scary, urgent, or unsafe.",
];

const audienceCards = [
  {
    title: "For Students",
    text: "Short lessons, safe examples, review questions, and simple cyber safety habits.",
  },
  {
    title: "For Teachers",
    text: "A clear module structure that can support classroom discussions and future worksheets.",
  },
  {
    title: "For Families",
    text: "Age-appropriate reminders that encourage students to ask trusted adults for help.",
  },
];

export default function KidsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="px-8 py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 font-semibold text-cyan-300">
              CyberShield Kids Curriculum
            </p>

            <h1 className="mb-6 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
              A beginner-friendly cyber safety track for elementary students.
            </h1>

            <p className="mb-10 max-w-3xl text-lg leading-relaxed text-slate-300">
              The Kids track is being expanded into a real learning path with
              modules, numbered lessons, safe examples, review activities, and
              future local-only progress tracking. Students will learn how to
              protect private information, pause before clicking, use technology
              kindly, and ask trusted adults for help.
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              {audienceCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
                >
                  <h2 className="mb-2 text-xl font-bold text-cyan-200">
                    {card.title}
                  </h2>
                  <p className="leading-relaxed text-slate-300">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kids/online-safety-basics"
                className="rounded-xl bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Start Module 1
              </Link>

              <Link
                href="/activities"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Try Activities
              </Link>

              <Link
                href="/lessons"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Back to Lessons
              </Link>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-800 bg-slate-900/60 px-8 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 font-semibold text-cyan-300">
                Track Structure
              </p>

              <h2 className="mb-4 text-3xl font-bold md:text-5xl">
                Kids Track Learning Path
              </h2>

              <p className="leading-relaxed text-slate-300">
                Each module is planned to become its own section with individual
                lesson pages. The first module will be built first, then future
                modules can be added one at a time without breaking the website.
              </p>
            </div>

            <div className="space-y-8">
              {curriculumModules.map((module) => (
                <div
                  key={module.title}
                  className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6"
                >
                  <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="mb-3 flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-sm font-semibold text-cyan-200">
                          {module.number}
                        </span>

                        <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-sm font-semibold text-slate-300">
                          {module.status}
                        </span>
                      </div>

                      <h3 className="mb-3 text-3xl font-bold text-white">
                        {module.title}
                      </h3>

                      <p className="max-w-4xl leading-relaxed text-slate-300">
                        {module.description}
                      </p>
                    </div>

                    {module.href ? (
                      <Link
                        href={module.href}
                        className="rounded-xl bg-cyan-400 px-5 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
                      >
                        Learn More
                      </Link>
                    ) : (
                      <span className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 text-center font-semibold text-slate-400">
                        Learn More Soon
                      </span>
                    )}
                  </div>

                  <div className="mb-6 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-5">
                    <h4 className="mb-2 font-bold text-emerald-200">
                      Student Outcome
                    </h4>
                    <p className="leading-relaxed text-slate-300">
                      {module.outcome}
                    </p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    {module.lessons.map((lesson) => (
                      <div
                        key={`${module.number}-${lesson.number}`}
                        className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
                      >
                        <p className="mb-2 text-sm font-semibold text-cyan-300">
                          Lesson {lesson.number}
                        </p>

                        <h4 className="mb-2 text-xl font-bold text-white">
                          {lesson.title}
                        </h4>

                        <p className="leading-relaxed text-slate-300">
                          {lesson.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-8 py-16">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="mb-3 font-semibold text-cyan-300">
                Core Safety Habits
              </p>

              <h2 className="mb-6 text-3xl font-bold">
                What students should practice
              </h2>

              <div className="space-y-3">
                {safetyHabits.map((habit) => (
                  <div
                    key={habit}
                    className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-slate-300"
                  >
                    {habit}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-yellow-500/30 bg-yellow-950/20 p-6">
              <p className="mb-3 font-semibold text-yellow-100">
                Safety Reminder
              </p>

              <h2 className="mb-4 text-3xl font-bold text-white">
                No private information needed
              </h2>

              <p className="mb-5 leading-relaxed text-yellow-100">
                CyberShield Kids should never ask students to type real
                passwords, real addresses, real phone numbers, real school
                information, or private family details. All examples should be
                fake, safe, and classroom appropriate.
              </p>

              <div className="rounded-2xl border border-yellow-500/30 bg-slate-950/60 p-5">
                <h3 className="mb-2 font-bold text-yellow-100">
                  Trusted adult rule
                </h3>
                <p className="leading-relaxed text-slate-300">
                  If something online feels scary, confusing, urgent, secret, or
                  unsafe, students should pause and ask a parent, teacher,
                  counselor, or school technology staff member for help.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-800 bg-slate-900/60 px-8 py-16">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-3 font-semibold text-cyan-300">
              Next Step in V2
            </p>

            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Module 1 will become the first full Kids learning unit.
            </h2>

            <p className="mx-auto mb-8 max-w-3xl leading-relaxed text-slate-300">
              After this hub works, the next page to build is{" "}
              <span className="font-semibold text-cyan-200">
                /kids/online-safety-basics
              </span>
              . That page will introduce Module 1 and connect to the individual
              1.1, 1.2, 1.3, 1.4, and 1.5 lesson pages.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/kids/online-safety-basics"
                className="rounded-xl bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Learn More
              </Link>

              <Link
                href="/resources"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                View Resources
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}