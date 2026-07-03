import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const impactStats = [
  {
    label: "Schools Contacted",
    value: "0",
    note: "Tracking will begin during outreach.",
  },
  {
    label: "Sessions Completed",
    value: "0",
    note: "Workshops will be recorded after delivery.",
  },
  {
    label: "Students Reached",
    value: "0",
    note: "Student reach will be updated after each session.",
  },
  {
    label: "Feedback Collected",
    value: "0",
    note: "Teacher and student feedback will be tracked here.",
  },
];

const outreachTargets = [
  {
    goal: "Contact local elementary schools",
    status: "Planned",
    description:
      "Reach out to teachers or administrators about CyberShield Kids presentations.",
  },
  {
    goal: "Contact local middle schools",
    status: "Planned",
    description:
      "Offer a CyberShield Junior session on scams, passwords, privacy, and digital citizenship.",
  },
  {
    goal: "Create presentation materials",
    status: "In progress",
    description:
      "Use the website lessons and activities to create classroom-friendly slides and worksheets.",
  },
  {
    goal: "Collect feedback after sessions",
    status: "Planned",
    description:
      "Use feedback forms to learn what students understood and what should be improved.",
  },
];

const feedbackQuestions = [
  "Was the presentation easy to understand?",
  "What was the most useful cybersecurity tip?",
  "What topic should CyberShield Academy explain better?",
  "Would students recommend this session to others?",
  "What questions did students still have after the session?",
];

export default function ImpactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-400 font-semibold">
          Impact Tracker
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Tracking CyberShield Academy&apos;s real-world impact.
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
          The Impact Tracker is designed to document outreach progress, school
          partnerships, student reach, workshop feedback, and future improvement
          goals. This page will be updated as CyberShield Academy begins school
          outreach.
        </p>
      </section>

      <section className="px-8 py-16 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Current Impact Snapshot
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-slate-950 border border-slate-800 p-6 hover:border-cyan-500 transition"
              >
                <p className="text-sm text-slate-400 mb-2">{stat.label}</p>

                <h3 className="text-5xl font-extrabold text-cyan-400 mb-4">
                  {stat.value}
                </h3>

                <p className="text-sm text-slate-300">{stat.note}</p>
              </div>
            ))}
          </div>

          <p className="text-slate-400 mt-6 text-sm">
            These numbers are currently set to zero because outreach has not
            officially started yet. They should only be updated after real
            outreach progress happens.
          </p>
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Why impact tracking matters
            </h2>

            <p className="text-slate-300 leading-relaxed mb-4">
              CyberShield Academy is not just a website. It is also a community
              education project. Tracking impact helps show whether the project
              is reaching students, helping schools, and improving cybersecurity
              awareness.
            </p>

            <p className="text-slate-300 leading-relaxed">
              This page will help organize outreach progress and make it easier
              to reflect on results, improve lessons, and document growth over
              time.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              What will be tracked
            </h3>

            <div className="space-y-3">
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                Number of schools contacted
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                Number of presentations delivered
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                Estimated number of students reached
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                Teacher and student feedback
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                Improvements made after feedback
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Outreach Goals
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {outreachTargets.map((target) => (
              <div
                key={target.goal}
                className="rounded-2xl bg-slate-950 border border-slate-800 p-6"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-cyan-400">
                    {target.goal}
                  </h3>

                  <span className="rounded-full border border-cyan-500 px-3 py-1 text-sm text-cyan-400">
                    {target.status}
                  </span>
                </div>

                <p className="text-slate-300 leading-relaxed">
                  {target.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
            <h2 className="text-3xl font-bold mb-6">
              Feedback Questions
            </h2>

            <div className="space-y-3">
              {feedbackQuestions.map((question) => (
                <div
                  key={question}
                  className="rounded-xl border border-slate-800 bg-slate-950 p-4"
                >
                  {question}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
            <h2 className="text-3xl font-bold mb-4">
              Future Dashboard Features
            </h2>

            <p className="text-slate-300 leading-relaxed mb-4">
              In a later version, this page could become a full dashboard where
              outreach sessions, schools, student counts, and feedback are added
              through a form.
            </p>

            <p className="text-slate-300 leading-relaxed">
              For now, this page acts as a public impact plan and a place to
              document progress honestly as the project grows.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Honest progress matters
          </h2>

          <p className="text-slate-300 leading-relaxed">
            CyberShield Academy should only report real outreach numbers after
            schools are contacted, sessions are completed, and feedback is
            collected. Accurate tracking makes the project more trustworthy.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}