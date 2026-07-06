import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SafeBrowsingLessonPage() {
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
              Safe Browsing
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Safe browsing means thinking carefully before clicking links,
              downloading files, closing pop-ups, or trusting unfamiliar
              websites. This lesson teaches students how to slow down, check
              warning signs, and make safer choices online.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/safe-browsing"
                className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Open Safe Browsing Challenge
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
                <li>Check website addresses before trusting a page.</li>
                <li>Recognize pop-ups and fake download buttons.</li>
                <li>Understand that HTTPS does not always mean safe.</li>
                <li>Know what to do when a website feels suspicious.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <h2 className="text-xl font-bold text-cyan-200">Key Skill</h2>

              <p className="mt-4 text-sm leading-6 text-slate-300">
                Before clicking, pause and ask: “Do I know this site, does the
                link look right, and is this action necessary?”
              </p>
            </div>

            <div className="rounded-3xl border border-yellow-500/30 bg-yellow-950/20 p-6">
              <h2 className="text-xl font-bold text-yellow-100">
                Safety Rule
              </h2>

              <p className="mt-4 text-sm leading-6 text-yellow-50/90">
                Do not test real suspicious websites or downloads. Use fake
                examples only and ask for help if something feels wrong.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Why Safe Browsing Matters
            </h2>

            <p className="mt-4 leading-8 text-slate-300">
              Many online risks start with a click. A student might click a fake
              download button, open a strange pop-up, visit a copied website, or
              trust a message that looks official. Safe browsing habits help
              people avoid scams, protect accounts, and keep devices safer.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              The goal is not to panic. The goal is to pause, check, and make a
              smarter choice before interacting with something unfamiliar.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-cyan-500/30 bg-cyan-950/30 p-8">
            <h2 className="text-3xl font-bold text-cyan-200">
              Checking URLs
            </h2>

            <p className="mt-4 leading-8 text-slate-300">
              A URL is the website address. Before trusting a page, look at the
              address carefully. Scammers may use misspelled names, extra words,
              strange endings, or links that do not match the real organization.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-red-500/20 bg-red-950/20 p-5">
                <h3 className="font-bold text-red-200">Suspicious Fake Example</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  school-login-free-prize.example
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  This uses unrelated words and does not clearly match a real
                  school system.
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-950/20 p-5">
                <h3 className="font-bold text-emerald-200">Safer Habit</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Type the official website yourself or use a saved bookmark
                  from a trusted source.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-red-500/30 bg-red-950/20 p-8">
            <h2 className="text-3xl font-bold text-red-100">
              Pop-Ups and Fake Download Buttons
            </h2>

            <p className="mt-4 leading-8 text-slate-300">
              Pop-ups are small windows or messages that appear on a page. Some
              are normal, but others try to scare people, push fake updates, or
              make them click a button quickly.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "Fake Warning",
                  detail:
                    "A pop-up says your device is infected and demands an immediate download.",
                },
                {
                  title: "Fake Prize",
                  detail:
                    "A pop-up says you won something and asks for private information.",
                },
                {
                  title: "Fake Download Button",
                  detail:
                    "A page has many buttons, and the biggest one may not be the real download.",
                },
                {
                  title: "Pressure Message",
                  detail:
                    "A page says you must act now or lose access, even though you did not request anything.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-red-500/20 bg-slate-950/70 p-5"
                >
                  <h3 className="font-bold text-red-200">{item.title}</h3>
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
                HTTPS Misconception
              </h2>

              <p className="mt-4 leading-8 text-slate-300">
                HTTPS is important because it helps protect the connection
                between your browser and a website. However, HTTPS does not
                automatically mean the website itself is trustworthy.
              </p>

              <p className="mt-4 leading-8 text-slate-300">
                A suspicious website can still use HTTPS. Students should check
                the full website address, the source of the link, and whether
                the page is asking for unnecessary private information.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
              <h2 className="text-3xl font-bold text-white">
                Unknown Websites
              </h2>

              <p className="mt-4 leading-8 text-slate-300">
                Unknown websites should be treated carefully, especially if they
                ask for downloads, passwords, payment details, personal
                information, or browser permissions.
              </p>

              <ul className="mt-5 space-y-3 leading-7 text-slate-300">
                <li>Do not enter private information on unfamiliar pages.</li>
                <li>Do not download files from random links.</li>
                <li>Do not allow permissions without understanding why.</li>
                <li>Ask a trusted adult or school technology staff for help.</li>
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
                  A website says, “Your browser is outdated. Download this
                  required security update now,” but the page is not from the
                  real browser company.
                </p>

                <h3 className="mt-5 font-bold text-red-200">Warning Signs</h3>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                  <li>It pressures the user to download immediately.</li>
                  <li>The website source is not verified.</li>
                  <li>The user did not ask for an update.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Fake Scenario 2
                </p>

                <p className="mt-4 rounded-xl border border-slate-800 bg-slate-900 p-4 text-sm leading-6 text-slate-300">
                  A student searches for homework help and sees a page with ten
                  different “Download Answer Key” buttons.
                </p>

                <h3 className="mt-5 font-bold text-red-200">Warning Signs</h3>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                  <li>The buttons may not lead to the expected file.</li>
                  <li>The site may be trying to force clicks.</li>
                  <li>The student should not download unfamiliar files.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-8">
            <h2 className="text-3xl font-bold text-emerald-100">
              What To Do If a Site Feels Suspicious
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                "Stop and do not click more buttons.",
                "Do not type passwords or personal information.",
                "Close the page or browser tab.",
                "Do not download files from the page.",
                "Tell a trusted adult, teacher, or school technology staff member.",
                "Use the official website or app instead of a message link.",
              ].map((step) => (
                <div
                  key={step}
                  className="rounded-2xl border border-emerald-500/20 bg-slate-950/70 p-5 text-sm leading-6 text-slate-300"
                >
                  {step}
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
                "Clicking the first download button without checking.",
                "Believing every HTTPS website is automatically safe.",
                "Entering login information on a page opened from a random message.",
                "Allowing website permissions without knowing why.",
                "Trying to investigate a suspicious website alone.",
                "Ignoring strange spelling, odd links, or pressure language.",
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
              Review a fake website description. Identify three warning signs,
              then write the safest next action. Remember: do not visit real
              suspicious websites for practice.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/safe-browsing"
                className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Open Safe Browsing Challenge
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
              <li>Why should you check a website address before trusting it?</li>
              <li>Why can fake download buttons be risky?</li>
              <li>Why does HTTPS not automatically mean a website is safe?</li>
              <li>Who should you ask if a site feels suspicious?</li>
            </ol>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-3xl border border-yellow-500/30 bg-yellow-950/20 p-8">
            <h2 className="text-3xl font-bold text-yellow-100">
              Safety Reminder
            </h2>

            <p className="mt-4 leading-8 text-yellow-50/90">
              CyberShield Academy teaches safe, ethical, defensive learning. Do
              not test suspicious links, do not download unknown files, and do
              not enter private information into unfamiliar websites.
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
                href="/safe-browsing"
                className="rounded-2xl border border-yellow-500/20 bg-slate-950/70 p-5 transition hover:border-cyan-300"
              >
                <h3 className="font-bold text-cyan-200">Safe Browsing</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Practice with safe fake examples.
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