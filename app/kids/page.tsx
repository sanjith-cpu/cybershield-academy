import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const curriculumModules = [
  {
    number: "Module 1",
    title: "Online Safety Basics",
    status: "Live",
    href: "/kids/online-safety-basics",
    description:
      "Students learn what information is okay to share, what should stay private, how to choose safer usernames, and when to ask a trusted adult for help.",
    outcome:
      "Students can explain the difference between personal information, private information, and safer online choices.",
    lessons: [
      {
        number: "1.1",
        title: "Personal Information",
        status: "Live",
        href: "/kids/online-safety-basics/personal-information",
      },
      {
        number: "1.2",
        title: "Private Information",
        status: "Live",
        href: "/kids/online-safety-basics/private-information",
      },
      {
        number: "1.3",
        title: "Safe Usernames",
        status: "Live",
        href: "/kids/online-safety-basics/safe-usernames",
      },
      {
        number: "1.4",
        title: "Trusted Adults",
        status: "Live",
        href: "/kids/online-safety-basics/trusted-adults",
      },
      {
        number: "1.5",
        title: "Module Review",
        status: "Live",
        href: "/kids/online-safety-basics/review",
      },
    ],
  },
  {
    number: "Module 2",
    title: "Passwords and Accounts",
    status: "Live",
    href: "/kids/passwords-and-accounts",
    description:
      "Students learn why passwords protect accounts, why passwords should stay secret, and how trusted adults can help with account safety.",
    outcome:
      "Students can explain that passwords are private and should never be shared or typed into practice activities.",
    lessons: [
      {
        number: "2.1",
        title: "What Passwords Protect",
        status: "Live",
        href: "/kids/passwords-and-accounts/what-passwords-protect",
      },
      {
        number: "2.2",
        title: "Why Passwords Stay Secret",
        status: "Live",
        href: "/kids/passwords-and-accounts/why-passwords-stay-secret",
      },
      {
        number: "2.3",
        title: "Asking for Account Help",
        status: "Live",
        href: "/kids/passwords-and-accounts/asking-for-account-help",
      },
      {
        number: "2.4",
        title: "Safe Account Habits",
        status: "Live",
        href: "/kids/passwords-and-accounts/safe-account-habits",
      },
      {
        number: "2.5",
        title: "Module Review",
        status: "Live",
        href: "/kids/passwords-and-accounts/review",
      },
    ],
  },
  {
    number: "Module 3",
    title: "Scam Spotting",
    status: "Live",
    href: "/kids/scam-spotting",
    description:
      "Students learn that some online messages, popups, prizes, and game offers may be fake or unsafe.",
    outcome:
      "Students can notice common scam warning signs and ask for help before clicking.",
    lessons: [
      {
        number: "3.1",
        title: "What Is a Scam?",
        status: "Live",
        href: "/kids/scam-spotting/what-is-a-scam",
      },
      {
        number: "3.2",
        title: "Too-Good-to-Be-True Offers",
        status: "Live",
        href: "/kids/scam-spotting/too-good-to-be-true-offers",
      },
      {
        number: "3.3",
        title: "Strange Messages",
        status: "Live",
        href: "/kids/scam-spotting/strange-messages",
      },
      {
        number: "3.4",
        title: "Pause Before You Click",
        status: "Live",
        href: "/kids/scam-spotting/pause-before-you-click",
      },
      {
        number: "3.5",
        title: "Module Review",
        status: "Live",
        href: "/kids/scam-spotting/review",
      },
    ],
  },
  {
    number: "Module 4",
    title: "Kind and Safe Technology Use",
    status: "Live",
    href: "/kids/kind-and-safe-technology-use",
    description:
      "Students learn how to be respectful online, avoid joining mean behavior, and get help when someone is being hurtful.",
    outcome:
      "Students can describe what kind, respectful, and responsible technology use looks like.",
    lessons: [
      {
        number: "4.1",
        title: "Kind Words Online",
        status: "Live",
        href: "/kids/kind-and-safe-technology-use/kind-words-online",
      },
      {
        number: "4.2",
        title: "Group Chats and Games",
        status: "Live",
        href: "/kids/kind-and-safe-technology-use/group-chats-and-games",
      },
      {
        number: "4.3",
        title: "What to Do if Someone Is Mean",
        status: "Live",
        href: "/kids/kind-and-safe-technology-use/what-to-do-if-someone-is-mean",
      },
      {
        number: "4.4",
        title: "Being a Digital Helper",
        status: "Live",
        href: "/kids/kind-and-safe-technology-use/being-a-digital-helper",
      },
      {
        number: "4.5",
        title: "Module Review",
        status: "Live",
        href: "/kids/kind-and-safe-technology-use/review",
      },
    ],
  },
  {
    number: "Module 5",
    title: "Digital Footprints",
    status: "Live",
    href: "/kids/digital-footprints",
    description:
      "Students learn that online actions can leave traces and that sharing should be thoughtful, safe, private, and respectful.",
    outcome:
      "Students can explain why they should think before posting, sharing, commenting, or spreading screenshots.",
    lessons: [
      {
        number: "5.1",
        title: "What Is a Digital Footprint?",
        status: "Live",
        href: "/kids/digital-footprints/what-is-a-digital-footprint",
      },
      {
        number: "5.2",
        title: "Think Before You Share",
        status: "Live",
        href: "/kids/digital-footprints/think-before-you-share",
      },
      {
        number: "5.3",
        title: "Photos, Posts, and Screenshots",
        status: "Live",
        href: "/kids/digital-footprints/photos-posts-and-screenshots",
      },
      {
        number: "5.4",
        title: "Cleaning Up and Asking for Help",
        status: "Live",
        href: "/kids/digital-footprints/cleaning-up-and-asking-for-help",
      },
      {
        number: "5.5",
        title: "Digital Footprints Review",
        status: "Live",
        href: "/kids/digital-footprints/review",
      },
    ],
  },
  {
    number: "Module 6",
    title: "Cyber Safety Review",
    status: "In Progress",
    href: "/kids/cyber-safety-review",
    description:
      "Students review the biggest safety habits from the Kids Track and practice choosing safe next steps.",
    outcome:
      "Students can use a simple safety checklist before clicking, sharing, chatting, posting, or asking for help.",
    lessons: [
      {
        number: "6.1",
        title: "Safety Habits Review",
        status: "Live",
        href: "/kids/cyber-safety-review/safety-habits-review",
      },
      {
        number: "6.2",
        title: "Trusted Adult Practice",
        status: "Live",
        href: "/kids/cyber-safety-review/trusted-adult-practice",
      },
      {
        number: "6.3",
        title: "Safe Choices Scenarios",
        status: "Live",
        href: "/kids/cyber-safety-review/safe-choices-scenarios",
      },
      {
        number: "6.4",
        title: "CyberShield Kids Final Review",
        status: "Live",
        href: "/kids/cyber-safety-review/final-review",
      },
      {
        number: "6.5",
        title: "Kids Track Completion",
        status: "Next",
        href: "/kids/cyber-safety-review/completion",
      },
    ],
  },
];

const safetyHabits = [
  "Pause before clicking buttons, links, popups, downloads, or messages that feel strange.",
  "Keep private information private, including home address, school name, phone number, location, and passwords.",
  "Use usernames that do not reveal full real names, schools, locations, or birthdays.",
  "Be kind in games, chats, comments, group messages, and classroom technology tools.",
  "Ask a trusted adult when something online feels confusing, scary, urgent, secret, embarrassing, or unsafe.",
];

const audienceCards = [
  {
    title: "For Students",
    text: "Short lessons, safe examples, review questions, and simple cyber safety habits.",
  },
  {
    title: "For Teachers",
    text: "A clear module structure that can support classroom discussions, review activities, and future worksheets.",
  },
  {
    title: "For Families",
    text: "Age-appropriate reminders that encourage students to pause, protect private information, and ask trusted adults for help.",
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
              The Kids Track is now a full learning path with modules, numbered
              lessons, safe examples, review activities, and age-appropriate
              safety reminders. Students learn how to protect private
              information, pause before clicking, use technology kindly, think
              before sharing, and ask trusted adults for help.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              {audienceCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6"
                >
                  <h2 className="mb-3 text-2xl font-bold text-cyan-200">
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
                href="/kids/cyber-safety-review"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Continue Module 6
              </Link>

              <Link
                href="/activities"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Try Activities
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
                Modules 1 through 5 are live. Module 6 is currently in progress,
                with Lesson 6.5 as the next build step.
              </p>
            </div>

            <div className="space-y-6">
              {curriculumModules.map((module) => (
                <div
                  key={module.number}
                  className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6"
                >
                  <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="mb-3 flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-sm font-semibold text-cyan-200">
                          {module.number}
                        </span>

                        <span
                          className={`rounded-full border px-3 py-1 text-sm font-semibold ${
                            module.status === "Live"
                              ? "border-emerald-500/30 bg-emerald-950/20 text-emerald-200"
                              : "border-yellow-500/30 bg-yellow-950/20 text-yellow-100"
                          }`}
                        >
                          {module.status}
                        </span>
                      </div>

                      <h3 className="mb-3 text-2xl font-bold text-white md:text-3xl">
                        {module.title}
                      </h3>

                      <p className="max-w-3xl leading-relaxed text-slate-300">
                        {module.description}
                      </p>
                    </div>

                    <Link
                      href={module.href}
                      className="rounded-xl bg-cyan-400 px-5 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
                    >
                      Open Module
                    </Link>
                  </div>

                  <div className="mb-5 rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                    <h4 className="mb-2 font-bold text-cyan-200">
                      Student Outcome
                    </h4>

                    <p className="leading-relaxed text-slate-300">
                      {module.outcome}
                    </p>
                  </div>

                  <div className="grid gap-3 md:grid-cols-5">
                    {module.lessons.map((lesson) => (
                      <Link
                        key={lesson.number}
                        href={lesson.href}
                        className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 transition hover:border-cyan-400"
                      >
                        <div className="mb-3 flex flex-wrap items-center gap-2">
                          <span className="text-sm font-semibold text-cyan-300">
                            Lesson {lesson.number}
                          </span>

                          <span
                            className={`rounded-full border px-2 py-1 text-xs font-semibold ${
                              lesson.status === "Live"
                                ? "border-emerald-500/30 bg-emerald-950/20 text-emerald-200"
                                : "border-yellow-500/30 bg-yellow-950/20 text-yellow-100"
                            }`}
                          >
                            {lesson.status}
                          </span>
                        </div>

                        <h4 className="font-bold text-white">
                          {lesson.title}
                        </h4>
                      </Link>
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

              <h2 className="mb-4 text-3xl font-bold">
                No private information needed.
              </h2>

              <p className="mb-5 leading-relaxed text-yellow-100">
                CyberShield Kids should never ask students to type real
                passwords, real addresses, real phone numbers, real school
                information, real screenshots, real private messages, or private
                family details. All examples should be fake, safe, and classroom
                appropriate.
              </p>

              <div className="rounded-2xl border border-yellow-500/30 bg-slate-950/60 p-5">
                <h3 className="mb-2 font-bold text-yellow-100">
                  Trusted adult rule
                </h3>

                <p className="leading-relaxed text-slate-300">
                  If something online feels scary, confusing, urgent, secret,
                  embarrassing, or unsafe, students should pause and ask a
                  parent, guardian, teacher, counselor, coach, librarian, or
                  school technology staff member for help.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-800 px-8 py-16">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-3 font-semibold text-cyan-300">
              Current Build Status
            </p>

            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              The next Kids Track build step is Lesson 6.5.
            </h2>

            <p className="mx-auto mb-8 max-w-3xl leading-relaxed text-slate-300">
              Modules 1, 2, 3, 4, and 5 are live. Module 6 is almost complete.
              The next page to build is{" "}
              <span className="font-semibold text-cyan-200">
                /kids/cyber-safety-review/completion
              </span>
              .
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/kids/cyber-safety-review"
                className="rounded-xl bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Open Module 6
              </Link>

              <Link
                href="/kids/cyber-safety-review/final-review"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                Review Lesson 6.4
              </Link>

              <Link
                href="/activities"
                className="rounded-xl border border-slate-700 px-6 py-3 text-center font-semibold transition hover:border-cyan-400"
              >
                View Activities
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}