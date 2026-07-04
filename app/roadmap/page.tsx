import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const completedItems = [
  "Homepage created and polished",
  "Navbar created and upgraded for mobile",
  "Footer created",
  "Kids learning track upgraded",
  "Junior learning track upgraded",
  "High School learning track upgraded",
  "Lessons hub created",
  "Activities hub created",
  "Cyber Safety Quiz upgraded",
  "Spot the Scam activity upgraded",
  "Password Safety Lab upgraded",
  "Resources page upgraded",
  "Teacher Toolkit upgraded",
  "Certificate Pathways upgraded",
  "School Outreach page upgraded",
  "Impact Tracker upgraded",
  "Feedback Center upgraded",
];

const currentStatus = [
  {
    label: "Project Stage",
    value: "V1 Build and Polish",
    note: "The main site structure is live, and the focus is now quality, depth, testing, and outreach readiness.",
  },
  {
    label: "Live Site",
    value: "Online",
    note: "The project is deployed on Vercel and updated through GitHub pushes.",
  },
  {
    label: "Content Focus",
    value: "Cybersecurity Literacy",
    note: "Lessons focus on online safety, scams, passwords, privacy, digital citizenship, and defensive cybersecurity.",
  },
  {
    label: "Outreach Status",
    value: "Preparing",
    note: "Outreach materials are being prepared. Real school impact should only be counted after actual outreach happens.",
  },
];

const v1Checklist = [
  {
    item: "Homepage explains the project clearly",
    status: "Done",
  },
  {
    item: "Age-level tracks are useful and deeper",
    status: "Done",
  },
  {
    item: "Core activities are interactive",
    status: "Done",
  },
  {
    item: "Teacher resources are classroom-friendly",
    status: "Done",
  },
  {
    item: "Outreach page has school session outlines",
    status: "Done",
  },
  {
    item: "Impact page avoids fake numbers",
    status: "Done",
  },
  {
    item: "Feedback page avoids private information collection",
    status: "Done",
  },
  {
    item: "Mobile navbar works better",
    status: "Done",
  },
  {
    item: "All major links need a final full-site test",
    status: "Needs final QA",
  },
  {
    item: "Grammar and spacing need a final pass",
    status: "Needs final QA",
  },
];

const notBuiltYet = [
  "Printable PDF worksheets",
  "Real saved feedback database",
  "Automatic certificate generation",
  "Student account login system",
  "Teacher dashboard",
  "Real outreach metrics from completed school sessions",
  "Safe Browsing Challenge activity",
  "Digital Footprint Reflection activity",
  "Cyber Ethics Scenarios activity",
  "Full demo video or presentation script",
];

const v15Goals = [
  "Add Safe Browsing Challenge",
  "Add Digital Footprint Reflection",
  "Add Cyber Ethics Scenarios",
  "Improve worksheet placeholders",
  "Create outreach email templates",
  "Prepare school presentation outlines",
  "Polish mobile layout across all pages",
];

const v2Goals = [
  "Add printable classroom worksheets",
  "Create badge or certificate download templates",
  "Add a safer feedback storage system if privacy rules are clear",
  "Create a teacher-facing guide for using the platform",
  "Build a project demo video script",
  "Document real outreach results after school sessions happen",
];

const qaChecklist = [
  "Test every navbar link",
  "Test every homepage card and button",
  "Test every activity page",
  "Test mobile menu on a narrow screen",
  "Check that every page has Navbar and Footer",
  "Check spelling and repeated wording",
  "Check that safety reminders are clear",
  "Check that no page asks for real passwords",
  "Check that no impact numbers are fake",
  "Check live Vercel pages after every push",
];

const roadmapLinks = [
  {
    label: "Homepage",
    href: "/",
  },
  {
    label: "Lessons",
    href: "/lessons",
  },
  {
    label: "Activities",
    href: "/activities",
  },
  {
    label: "Teacher Toolkit",
    href: "/teacher-toolkit",
  },
  {
    label: "Outreach",
    href: "/outreach",
  },
  {
    label: "Impact",
    href: "/impact",
  },
];

export default function RoadmapPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">
        <section className="mx-auto max-w-6xl px-6 py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Project Roadmap
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
            Building CyberShield Academy step by step.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            This roadmap tracks what has been built, what still needs testing,
            and what future versions could include. The goal is to keep the
            project honest, useful, and outreach-ready.
          </p>

          <div className="mt-6 rounded-2xl border border-yellow-500/30 bg-yellow-950/20 p-5 text-sm leading-6 text-yellow-100">
            Honesty note: Features, outreach numbers, and impact should only be
            marked complete when they are actually built, tested, or completed.
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {currentStatus.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6"
              >
                <p className="text-sm font-semibold text-slate-400">
                  {item.label}
                </p>

                <h2 className="mt-3 text-2xl font-bold text-cyan-200">
                  {item.value}
                </h2>

                <p className="mt-4 text-sm leading-6 text-slate-300">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Completed So Far
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              These parts of CyberShield Academy are already built and have been
              tested locally before being pushed live.
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {completedItems.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-green-500/20 bg-green-950/20 p-4 text-sm leading-6 text-green-100"
                >
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-cyan-500/30 bg-cyan-950/30 p-8">
            <h2 className="text-3xl font-bold text-cyan-200">
              V1 Launch Checklist
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              This checklist shows what is ready and what still needs final
              review before CyberShield Academy can be considered outreach-ready
              V1.
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-800">
              <div className="grid bg-slate-950/80 text-sm font-semibold text-slate-200 md:grid-cols-[1fr_180px]">
                <div className="border-b border-slate-800 p-4 md:border-r">
                  Item
                </div>
                <div className="border-b border-slate-800 p-4">Status</div>
              </div>

              {v1Checklist.map((row) => (
                <div
                  key={row.item}
                  className="grid text-sm text-slate-300 md:grid-cols-[1fr_180px]"
                >
                  <div className="border-b border-slate-800 p-4 md:border-r">
                    {row.item}
                  </div>
                  <div className="border-b border-slate-800 p-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        row.status === "Done"
                          ? "bg-green-400/10 text-green-200"
                          : "bg-yellow-400/10 text-yellow-200"
                      }`}
                    >
                      {row.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
              <h2 className="text-3xl font-bold text-white">
                What Is Not Built Yet
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                These items should stay listed as future work until they are
                actually created, connected, tested, and pushed live.
              </p>

              <div className="mt-6 grid gap-3">
                {notBuiltYet.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm leading-6 text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-yellow-500/30 bg-yellow-950/20 p-8">
              <h2 className="text-3xl font-bold text-yellow-100">
                Final QA Checklist
              </h2>

              <p className="mt-3 leading-7 text-yellow-50/90">
                Before using the site for outreach, every major page and link
                should be tested carefully.
              </p>

              <div className="mt-6 grid gap-3">
                {qaChecklist.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-yellow-500/20 bg-slate-950/60 p-4 text-sm leading-6 text-yellow-50/90"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
              <h2 className="text-3xl font-bold text-white">
                V1.5 Goals
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                V1.5 should focus on adding useful student activities and
                improving outreach preparation.
              </p>

              <div className="mt-6 grid gap-3">
                {v15Goals.map((goal) => (
                  <div
                    key={goal}
                    className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm leading-6 text-slate-300"
                  >
                    {goal}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
              <h2 className="text-3xl font-bold text-white">V2 Goals</h2>

              <p className="mt-3 leading-7 text-slate-300">
                V2 can include more advanced features after the main site is
                stable, tested, and useful for real outreach.
              </p>

              <div className="mt-6 grid gap-3">
                {v2Goals.map((goal) => (
                  <div
                    key={goal}
                    className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm leading-6 text-slate-300"
                  >
                    {goal}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
            <h2 className="text-3xl font-bold text-white">
              Roadmap Navigation
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-300">
              Use these pages to review the current project, test major
              sections, and continue preparing for outreach.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
              {roadmapLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-slate-900"
                >
                  {link.label}
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