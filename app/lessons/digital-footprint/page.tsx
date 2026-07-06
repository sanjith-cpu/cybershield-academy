import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DigitalFootprintLessonPage() {
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
              Digital Footprint
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              A digital footprint is the trail of information people leave
              online through posts, usernames, comments, photos, profiles,
              searches, and account activity. This lesson helps students think
              before posting and build a safer online reputation.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/digital-footprint"
                className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Open Digital Footprint Reflection
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
                <li>Explain what a digital footprint is.</li>
                <li>Identify what types of online actions shape reputation.</li>
                <li>Understand how posts can affect future opportunities.</li>
                <li>Practice safer and more respectful online choices.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <h2 className="text-xl font-bold text-cyan-200">Key Skill</h2>

              <p className="mt-4 text-sm leading-6 text-slate-300">
                Before posting, ask: “Would I be okay with a teacher, coach,
                family member, college, or future employer seeing this later?”
              </p>
            </div>

            <div className="rounded-3xl border border-yellow-500/30 bg-yellow-950/20 p-6">
              <h2 className="text-xl font-bold text-yellow-100">
                Safety Rule
              </h2>

              <p className="mt-4 text-sm leading-6 text-yellow-50/90">
                Do not post private information, hurtful comments, screenshots,
                or other people’s photos without permission.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              What Is a Digital Footprint?
            </h2>

            <p className="mt-4 leading-8 text-slate-300">
              A digital footprint is made from the information connected to a
              person online. Some of it is created on purpose, like a profile
              bio or a post. Some of it can happen in the background, like
              account activity, tags, saved posts, or comments that others can
              copy or screenshot.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              A strong digital footprint does not mean being perfect. It means
              being thoughtful, respectful, and careful about what you share and
              how you treat others online.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-cyan-500/30 bg-cyan-950/30 p-8">
            <h2 className="text-3xl font-bold text-cyan-200">
              What Shapes Your Digital Footprint?
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "Posts",
                  detail:
                    "Photos, videos, captions, stories, reposts, and public updates can all leave a record.",
                },
                {
                  title: "Usernames",
                  detail:
                    "Usernames can connect accounts together and affect how people see your online identity.",
                },
                {
                  title: "Comments",
                  detail:
                    "Comments can show your attitude, choices, and how you treat other people.",
                },
                {
                  title: "Photos",
                  detail:
                    "Photos may reveal location, school, friends, routines, or private details in the background.",
                },
                {
                  title: "Profiles",
                  detail:
                    "Bios, links, profile pictures, and public details can share more information than intended.",
                },
                {
                  title: "Tags and Mentions",
                  detail:
                    "Other people may tag or mention you, which can also become part of your online presence.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-cyan-500/20 bg-slate-950/70 p-5"
                >
                  <h3 className="font-bold text-cyan-200">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.detail}
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
                Reputation and Future Opportunities
              </h2>

              <p className="mt-4 leading-8 text-slate-300">
                Digital choices can affect how people view your character,
                responsibility, and judgment. Coaches, teachers, clubs, colleges,
                scholarships, and future workplaces may care about whether a
                person acts respectfully and responsibly online.
              </p>

              <p className="mt-4 leading-8 text-slate-300">
                A positive digital footprint can show leadership, creativity,
                teamwork, learning, service, and kindness.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
              <h2 className="text-3xl font-bold text-white">
                Privacy Settings Matter
              </h2>

              <p className="mt-4 leading-8 text-slate-300">
                Privacy settings help control who can see posts, profiles,
                tags, contact information, and activity. They are helpful, but
                they are not perfect because content can still be copied,
                screenshotted, forwarded, or shown to others.
              </p>

              <ul className="mt-5 space-y-3 leading-7 text-slate-300">
                <li>Review who can see your posts and profile.</li>
                <li>Limit who can tag or mention you.</li>
                <li>Check old posts and remove anything unsafe.</li>
                <li>Ask a trusted adult if a setting is confusing.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-red-500/30 bg-red-950/20 p-8">
            <h2 className="text-3xl font-bold text-red-100">
              Fake Scenario Examples
            </h2>

            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-red-500/20 bg-slate-950/70 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Fake Scenario 1
                </p>

                <p className="mt-4 rounded-xl border border-slate-800 bg-slate-900 p-4 text-sm leading-6 text-slate-300">
                  A student posts an angry comment about a classmate in a public
                  comment section. Someone screenshots it and shares it in a
                  group chat.
                </p>

                <h3 className="mt-5 font-bold text-red-200">Concern</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  The comment can harm someone else and affect how others view
                  the student’s judgment.
                </p>
              </div>

              <div className="rounded-2xl border border-red-500/20 bg-slate-950/70 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Fake Scenario 2
                </p>

                <p className="mt-4 rounded-xl border border-slate-800 bg-slate-900 p-4 text-sm leading-6 text-slate-300">
                  A student uses the same username for gaming, school projects,
                  and public social media, then posts personal details on one
                  public profile.
                </p>

                <h3 className="mt-5 font-bold text-red-200">Concern</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  The username may connect accounts together and make private
                  details easier to find.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-8">
            <h2 className="text-3xl font-bold text-emerald-100">
              Safer Digital Footprint Habits
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                "Think before posting or commenting.",
                "Avoid sharing private information publicly.",
                "Use respectful language, even during disagreements.",
                "Review old posts, bios, and usernames.",
                "Check photos for location clues before posting.",
                "Ask permission before posting photos of other people.",
                "Use privacy settings, but do not rely on them completely.",
                "Build a positive footprint through projects, learning, and service.",
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
                "Assuming deleted posts are always gone forever.",
                "Posting when angry without thinking first.",
                "Sharing screenshots of private conversations.",
                "Using usernames that reveal personal information.",
                "Posting other people without permission.",
                "Ignoring tags, mentions, and old public profiles.",
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
              Create a fake student profile and review it for privacy,
              reputation, and respect. Identify what should be changed before
              the profile is made public.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/digital-footprint"
                className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Open Digital Footprint Reflection
              </Link>

              <Link
                href="/high-school"
                className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                High School Track
              </Link>

              <Link
                href="/worksheets"
                className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-200"
              >
                Open Worksheets
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
              <li>What is one thing that can become part of a digital footprint?</li>
              <li>Why can screenshots make online choices last longer?</li>
              <li>How can a positive digital footprint help future opportunities?</li>
              <li>What is one online habit you could improve this week?</li>
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
              behavior. Do not post private information, do not target or harass
              others, and do not share someone else’s information without
              permission.
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
                href="/digital-footprint"
                className="rounded-2xl border border-yellow-500/20 bg-slate-950/70 p-5 transition hover:border-cyan-300"
              >
                <h3 className="font-bold text-cyan-200">Reflection Activity</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Think through posts, usernames, and reputation.
                </p>
              </Link>

              <Link
                href="/worksheets"
                className="rounded-2xl border border-yellow-500/20 bg-slate-950/70 p-5 transition hover:border-cyan-300"
              >
                <h3 className="font-bold text-cyan-200">Worksheets</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Use printable classroom activities.
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