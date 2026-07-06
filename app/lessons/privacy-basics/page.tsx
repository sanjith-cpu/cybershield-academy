import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyBasicsLessonPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            CyberShield Lesson
          </p>

          <div className="rounded-3xl border border-cyan-500/30 bg-cyan-950/30 p-8 md:p-10">
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
              Privacy Basics
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Privacy means controlling what personal information you share,
              who can see it, and how it may be used. This lesson helps students
              understand private information, oversharing, app permissions,
              privacy settings, and safer posting habits.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/resources"
                className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Open Resources
              </Link>

              <Link
                href="/lessons"
                className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                Back to Lessons
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <h2 className="text-xl font-bold text-cyan-200">
                Learning Goals
              </h2>

              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                <li>Understand what personal and private information means.</li>
                <li>Recognize why oversharing online can be risky.</li>
                <li>Review privacy settings and app permissions.</li>
                <li>Know when to ask a trusted adult for help.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <h2 className="text-xl font-bold text-cyan-200">Key Skill</h2>

              <p className="mt-4 text-sm leading-6 text-slate-300">
                Pause before sharing and ask: “Does this reveal something
                private about me, my family, my school, or someone else?”
              </p>
            </div>

            <div className="rounded-3xl border border-yellow-500/30 bg-yellow-950/20 p-6">
              <h2 className="text-xl font-bold text-yellow-100">
                Safety Rule
              </h2>

              <p className="mt-4 text-sm leading-6 text-yellow-50/90">
                Do not share addresses, passwords, phone numbers, school
                details, login codes, or private family information online.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              What Is Private Information?
            </h2>

            <p className="mt-4 leading-8 text-slate-300">
              Private information is information that could identify you, locate
              you, access your accounts, or reveal personal details about your
              life. Some information may seem small by itself, but when combined
              with other details, it can reveal more than you intended.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                "Full name with school name",
                "Home address or exact location",
                "Phone number or personal email",
                "Passwords or login codes",
                "Student ID numbers",
                "Photos that reveal location or private details",
                "Family schedules or travel plans",
                "Private messages or screenshots",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 text-sm leading-6 text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-red-500/30 bg-red-950/20 p-8">
            <h2 className="text-3xl font-bold text-red-100">
              Oversharing Risks
            </h2>

            <p className="mt-4 leading-8 text-slate-300">
              Oversharing means posting or sending more information than is safe
              or necessary. This can happen in social media posts, gaming chats,
              group messages, comments, profile bios, videos, or public forms.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "Location Clues",
                  detail:
                    "A photo, school shirt, background sign, or event tag can reveal where someone is.",
                },
                {
                  title: "Account Clues",
                  detail:
                    "Posting hints about passwords, recovery questions, or login codes can put accounts at risk.",
                },
                {
                  title: "Reputation Concerns",
                  detail:
                    "Posts and comments can be copied, screenshotted, shared, or seen later by others.",
                },
                {
                  title: "Other People's Privacy",
                  detail:
                    "Sharing photos or screenshots of others without permission can affect their privacy too.",
                },
              ].map((risk) => (
                <div
                  key={risk.title}
                  className="rounded-2xl border border-red-500/20 bg-slate-950/70 p-5"
                >
                  <h3 className="font-bold text-red-200">{risk.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {risk.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
              <h2 className="text-3xl font-bold text-white">
                Privacy Settings
              </h2>

              <p className="mt-4 leading-8 text-slate-300">
                Privacy settings help control who can see your posts, profile,
                comments, activity, and contact information. Settings can change
                over time, so it is smart to review them regularly with a parent,
                guardian, or trusted adult.
              </p>

              <ul className="mt-5 space-y-3 leading-7 text-slate-300">
                <li>Check who can view your profile.</li>
                <li>Limit who can message or tag you.</li>
                <li>Review what information appears publicly.</li>
                <li>Turn off location sharing when it is not needed.</li>
                <li>Ask for help if a setting is confusing.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
              <h2 className="text-3xl font-bold text-white">
                App Permissions
              </h2>

              <p className="mt-4 leading-8 text-slate-300">
                Apps may ask for permission to use your camera, microphone,
                photos, contacts, or location. Some permissions are needed for
                certain features, but not every app needs access to everything.
              </p>

              <ul className="mt-5 space-y-3 leading-7 text-slate-300">
                <li>Think before allowing a permission.</li>
                <li>Ask why the app needs that access.</li>
                <li>Turn off permissions that are not needed.</li>
                <li>Ask a trusted adult before installing unfamiliar apps.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Fake Scenario Examples
            </h2>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Fake Scenario 1
                </p>

                <p className="mt-4 rounded-xl border border-slate-800 bg-slate-900 p-4 text-sm leading-6 text-slate-300">
                  Jordan posts a picture from outside school with the school
                  name, mascot, and exact pickup location visible in the
                  background.
                </p>

                <h3 className="mt-5 font-bold text-red-200">Privacy Concern</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  The post may reveal where Jordan goes to school and where
                  students gather after class.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Fake Scenario 2
                </p>

                <p className="mt-4 rounded-xl border border-slate-800 bg-slate-900 p-4 text-sm leading-6 text-slate-300">
                  Sam downloads a new game and quickly taps “allow” for camera,
                  microphone, contacts, and location without reading why.
                </p>

                <h3 className="mt-5 font-bold text-red-200">Privacy Concern</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  The app may have more access than it needs. Sam should review
                  permissions with a trusted adult.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-8">
            <h2 className="text-3xl font-bold text-emerald-100">
              Safer Posting Habits
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                "Pause before posting personal details.",
                "Check photos for location clues in the background.",
                "Avoid sharing screenshots of private conversations.",
                "Do not post other people without permission.",
                "Keep account recovery information private.",
                "Ask a trusted adult before sharing sensitive information.",
              ].map((habit) => (
                <div
                  key={habit}
                  className="rounded-2xl border border-emerald-500/20 bg-slate-950/70 p-5 text-sm leading-6 text-slate-300"
                >
                  {habit}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">Common Mistakes</h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                "Assuming only friends can see a post forever.",
                "Posting school, location, or schedule details publicly.",
                "Accepting every app permission without checking.",
                "Sharing screenshots that include names, photos, or private messages.",
                "Using the same username everywhere without thinking about privacy.",
                "Ignoring privacy settings after creating an account.",
              ].map((mistake) => (
                <div
                  key={mistake}
                  className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 text-sm leading-6 text-slate-300"
                >
                  {mistake}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-cyan-500/30 bg-cyan-950/30 p-8">
            <h2 className="text-3xl font-bold text-cyan-200">
              Practice Activity
            </h2>

            <p className="mt-4 max-w-3xl leading-8 text-slate-300">
              Review a fake profile or post. Circle anything that could reveal
              private information, location, school details, or another person's
              privacy. Then rewrite the post in a safer way.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/resources"
                className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Open Resources
              </Link>

              <Link
                href="/safety"
                className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                Safety & Privacy
              </Link>

              <Link
                href="/digital-footprint"
                className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                Digital Footprint Reflection
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Reflection Questions
            </h2>

            <ol className="mt-5 list-decimal space-y-3 pl-5 leading-7 text-slate-300">
              <li>What is one example of private information?</li>
              <li>Why can oversharing online be risky?</li>
              <li>Why should app permissions be reviewed?</li>
              <li>Who could you ask for help with privacy settings?</li>
            </ol>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-3xl border border-yellow-500/30 bg-yellow-950/20 p-8">
            <h2 className="text-3xl font-bold text-yellow-100">
              Safety Reminder
            </h2>

            <p className="mt-4 leading-8 text-yellow-50/90">
              CyberShield Academy teaches safe, ethical, defensive online
              behavior. Do not share private information, do not post other
              people without permission, and ask a trusted adult when you are
              unsure.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <Link
                href="/lessons"
                className="rounded-2xl border border-yellow-500/20 bg-slate-950/70 p-5 transition hover:border-cyan-300"
              >
                <h3 className="font-bold text-cyan-200">Back to Lessons</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Return to the Learning Library.
                </p>
              </Link>

              <Link
                href="/safety"
                className="rounded-2xl border border-yellow-500/20 bg-slate-950/70 p-5 transition hover:border-cyan-300"
              >
                <h3 className="font-bold text-cyan-200">Safety & Privacy</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Review the project safety guidelines.
                </p>
              </Link>

              <Link
                href="/digital-footprint"
                className="rounded-2xl border border-yellow-500/20 bg-slate-950/70 p-5 transition hover:border-cyan-300"
              >
                <h3 className="font-bold text-cyan-200">Digital Footprint</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Reflect on posts, usernames, and reputation.
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}