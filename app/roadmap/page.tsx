import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const completedItems = [
  "Homepage",
  "About page",
  "Lesson Hub",
  "CyberShield Kids page",
  "CyberShield Junior page",
  "CyberShield High School page",
  "Activities Hub",
  "Cyber Safety Quiz",
  "Spot the Scam activity",
  "Password Safety Lab",
  "Resources page",
  "Certificate Pathways page",
  "School Outreach page",
  "Impact Tracker page",
  "Feedback Center page",
];

const inProgressItems = [
  "Improving lesson depth for each grade level",
  "Adding more interactive activities",
  "Preparing school outreach materials",
  "Improving the homepage structure",
  "Planning future certificate completion requirements",
];

const futureItems = [
  "Safe Browsing Challenge",
  "Digital Footprint Reflection",
  "Cyber Ethics Scenario Game",
  "Teacher resource packets",
  "Student worksheets",
  "Outreach presentation slides",
  "Real feedback collection system",
  "Real impact dashboard",
  "Certificate generation system",
];

const versionPlans = [
  {
    version: "Version 1",
    status: "Current Build",
    goal: "Create a strong educational website with learning paths, activities, resources, outreach information, and impact planning.",
    features: [
      "Main learning paths",
      "Interactive activities",
      "Resources page",
      "Certificates preview",
      "Outreach and impact pages",
    ],
  },
  {
    version: "Version 1.5",
    status: "Next Improvement",
    goal: "Make the platform more useful for real school outreach and classroom use.",
    features: [
      "More lesson content",
      "Printable worksheets",
      "Teacher presentation materials",
      "More student activities",
      "Improved feedback system",
    ],
  },
  {
    version: "Version 2",
    status: "Future Goal",
    goal: "Turn CyberShield Academy into a more advanced platform with real tracking, dashboards, and stronger student learning tools.",
    features: [
      "Student progress tracking",
      "Certificate generation",
      "Impact dashboard",
      "Admin or teacher tools",
      "Database-connected feedback",
    ],
  },
];

export default function RoadmapPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-400 font-semibold">
          Project Roadmap
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          CyberShield Academy development roadmap.
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
          This roadmap shows what CyberShield Academy has already completed,
          what is currently being improved, and what future versions may include.
          It helps track progress honestly and shows how the project can grow
          over time.
        </p>
      </section>

      <section className="px-8 py-16 bg-slate-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6">
            <h2 className="text-3xl font-bold text-cyan-400 mb-6">
              Completed
            </h2>

            <div className="space-y-3">
              {completedItems.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-green-500 bg-green-950 p-3 text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6">
            <h2 className="text-3xl font-bold text-cyan-400 mb-6">
              In Progress
            </h2>

            <div className="space-y-3">
              {inProgressItems.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-yellow-500 bg-yellow-950 p-3 text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6">
            <h2 className="text-3xl font-bold text-cyan-400 mb-6">
              Future Ideas
            </h2>

            <div className="space-y-3">
              {futureItems.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-700 bg-slate-900 p-3 text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Version Plan
          </h2>

          <div className="space-y-6">
            {versionPlans.map((plan) => (
              <div
                key={plan.version}
                className="rounded-2xl bg-slate-900 border border-slate-800 p-6"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                  <div>
                    <p className="text-sm text-slate-400 mb-2">
                      {plan.status}
                    </p>

                    <h3 className="text-3xl font-bold text-cyan-400">
                      {plan.version}
                    </h3>
                  </div>

                  <div className="rounded-full border border-cyan-500 px-4 py-2 text-sm text-cyan-400">
                    CyberShield Academy
                  </div>
                </div>

                <p className="text-slate-300 leading-relaxed mb-5">
                  {plan.goal}
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm text-slate-300"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6">
            <h2 className="text-3xl font-bold mb-4">
              Why a roadmap matters
            </h2>

            <p className="text-slate-300 leading-relaxed">
              A roadmap helps show that CyberShield Academy is being built with
              a clear plan. It also makes it easier to explain what has already
              been completed and what will be improved next.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6">
            <h2 className="text-3xl font-bold mb-4">
              Honest progress tracking
            </h2>

            <p className="text-slate-300 leading-relaxed">
              CyberShield Academy should clearly separate completed features
              from future ideas. This makes the project more trustworthy for
              students, teachers, schools, and college applications.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Built step by step.
          </h2>

          <p className="text-slate-300 leading-relaxed">
            CyberShield Academy is growing from a basic website into a structured
            cybersecurity education platform with lessons, activities, outreach,
            feedback, and measurable impact.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}