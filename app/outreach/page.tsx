import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const presentationOptions = [
  {
    title: "Elementary School Session",
    audience: "Grades 3-5",
    time: "20-30 minutes",
    description:
      "A simple and friendly introduction to online safety, privacy, kindness online, passwords, and asking a trusted adult for help.",
    topics: [
      "Safe and unsafe online choices",
      "Protecting personal information",
      "Being kind online",
      "When to ask a trusted adult",
    ],
  },
  {
    title: "Middle School Session",
    audience: "Grades 6-8",
    time: "30-40 minutes",
    description:
      "A practical cybersecurity awareness session focused on scams, passwords, digital footprints, and responsible technology use.",
    topics: [
      "Spotting suspicious messages",
      "Password safety",
      "Digital citizenship",
      "Personal information protection",
    ],
  },
  {
    title: "High School Session",
    audience: "Grades 9-12",
    time: "40-50 minutes",
    description:
      "A more advanced introduction to cybersecurity foundations, career pathways, certifications, and ethical defensive security.",
    topics: [
      "Cybersecurity careers",
      "Defensive security basics",
      "Cyber ethics",
      "How to keep learning",
    ],
  },
];

const outreachSteps = [
  {
    step: "1",
    title: "Contact Schools",
    description:
      "Reach out to teachers, counselors, technology coordinators, or administrators to explain the CyberShield Academy mission.",
  },
  {
    step: "2",
    title: "Choose a Session",
    description:
      "Select an age-appropriate presentation for elementary, middle school, or high school students.",
  },
  {
    step: "3",
    title: "Deliver the Workshop",
    description:
      "Use CyberShield Academy lessons, activities, quizzes, and examples to teach students practical cyber safety skills.",
  },
  {
    step: "4",
    title: "Collect Feedback",
    description:
      "Ask teachers and students what was helpful, what could improve, and what topics they want to learn next.",
  },
];

export default function OutreachPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-400 font-semibold">
          School Outreach
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Bringing cybersecurity education to students and schools.
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
          CyberShield Academy is designed to support students beyond the
          website. The outreach program helps schools teach online safety,
          cybersecurity awareness, and responsible technology use through
          age-appropriate presentations and activities.
        </p>
      </section>

      <section className="px-8 py-16 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Presentation Options
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {presentationOptions.map((option) => (
              <div
                key={option.title}
                className="rounded-2xl bg-slate-950 border border-slate-800 p-6 hover:border-cyan-500 transition"
              >
                <p className="text-sm text-slate-400 mb-2">
                  {option.audience} • {option.time}
                </p>

                <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                  {option.title}
                </h3>

                <p className="text-slate-300 leading-relaxed mb-5">
                  {option.description}
                </p>

                <h4 className="font-bold mb-3">Topics Covered:</h4>

                <div className="space-y-3">
                  {option.topics.map((topic) => (
                    <div
                      key={topic}
                      className="rounded-xl border border-slate-800 bg-slate-900 p-3 text-sm text-slate-300"
                    >
                      {topic}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Why outreach matters
            </h2>

            <p className="text-slate-300 leading-relaxed mb-4">
              Many students use technology every day, but they may not always
              receive clear lessons on scams, privacy, passwords, digital
              footprints, and safe online choices.
            </p>

            <p className="text-slate-300 leading-relaxed">
              CyberShield Academy outreach helps turn cybersecurity awareness
              into a real community education effort by bringing lessons directly
              to classrooms, clubs, and school events.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              Outreach Goals
            </h3>

            <div className="space-y-3">
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                Teach students practical online safety skills.
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                Help younger students recognize unsafe online situations.
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                Support teachers with simple cybersecurity learning materials.
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                Build a record of community impact and student feedback.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Outreach Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {outreachSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl bg-slate-950 border border-slate-800 p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 text-slate-950 font-bold">
                  {item.step}
                </div>

                <h3 className="text-xl font-bold text-cyan-400 mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
            <h2 className="text-3xl font-bold mb-4">
              For Teachers
            </h2>

            <p className="text-slate-300 leading-relaxed">
              Teachers can use CyberShield Academy as a classroom-friendly tool
              for introducing online safety, cybersecurity awareness, scam
              recognition, password safety, and digital responsibility.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
            <h2 className="text-3xl font-bold mb-4">
              For Student Volunteers
            </h2>

            <p className="text-slate-300 leading-relaxed">
              Student volunteers can help deliver presentations, guide younger
              students through activities, collect feedback, and support the
              mission of improving cybersecurity literacy.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Future Outreach Tracking
          </h2>

          <p className="text-slate-300 leading-relaxed mb-6">
            In a future version, CyberShield Academy can track outreach sessions,
            number of students reached, schools contacted, teacher feedback, and
            student learning outcomes.
          </p>

          <div className="inline-block rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950">
            Impact Tracker Coming Soon
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}