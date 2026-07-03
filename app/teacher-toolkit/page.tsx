import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const lessonPlans = [
  {
    title: "Online Safety Introduction",
    audience: "Grades 3-5",
    time: "20-30 minutes",
    objective:
      "Students will understand basic online safety habits, including asking a trusted adult before sharing information.",
    activity:
      "Use the CyberShield Kids page and complete a Safe or Unsafe discussion.",
  },
  {
    title: "Spotting Scams and Red Flags",
    audience: "Grades 6-8",
    time: "30-40 minutes",
    objective:
      "Students will learn how to recognize suspicious messages, strange links, urgency, and fake offers.",
    activity:
      "Use the Spot the Scam activity and discuss why each example is safe or suspicious.",
  },
  {
    title: "Password Safety and Account Protection",
    audience: "Grades 6-12",
    time: "30-45 minutes",
    objective:
      "Students will understand why strong, unique passwords and multi-factor authentication matter.",
    activity:
      "Use the Password Safety Lab with fake sample passwords only.",
  },
  {
    title: "Cybersecurity Careers",
    audience: "Grades 9-12",
    time: "40-50 minutes",
    objective:
      "Students will explore cybersecurity career pathways and understand ethical defensive security.",
    activity:
      "Use the High School page and have students choose one career path to research further.",
  },
];

const discussionPrompts = [
  "Why should students be careful before clicking unknown links?",
  "What information should never be shared with strangers online?",
  "Why is reusing the same password risky?",
  "How can someone tell if a message might be a scam?",
  "What does it mean to be kind and responsible online?",
  "Why should cybersecurity be used to protect people, not harm them?",
];

const worksheetIdeas = [
  "Safe or Unsafe online situation worksheet",
  "Scam red flag checklist",
  "Password safety reflection sheet",
  "Digital footprint reflection activity",
  "Cybersecurity vocabulary matching worksheet",
  "Career pathway research worksheet",
];

const teacherTips = [
  "Use age-appropriate examples for each grade level.",
  "Avoid asking students to share real passwords or private information.",
  "Focus on safe, ethical, and defensive cybersecurity habits.",
  "Encourage students to ask trusted adults when something feels suspicious.",
  "Use short activities and discussion questions to keep students engaged.",
  "Collect feedback after lessons to improve future sessions.",
];

export default function TeacherToolkitPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-400 font-semibold">
          Teacher Toolkit
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Classroom tools for cybersecurity education.
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
          The Teacher Toolkit helps educators use CyberShield Academy in
          classrooms, clubs, workshops, and outreach sessions. It includes lesson
          ideas, discussion prompts, worksheet placeholders, and safe teaching
          guidelines.
        </p>
      </section>

      <section className="px-8 py-16 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Mini Lesson Plans
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {lessonPlans.map((lesson) => (
              <div
                key={lesson.title}
                className="rounded-2xl bg-slate-950 border border-slate-800 p-6 hover:border-cyan-500 transition"
              >
                <p className="text-sm text-slate-400 mb-2">
                  {lesson.audience} | {lesson.time}
                </p>

                <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                  {lesson.title}
                </h3>

                <p className="text-slate-300 leading-relaxed mb-4">
                  <span className="font-bold text-white">Objective:</span>{" "}
                  {lesson.objective}
                </p>

                <p className="text-slate-300 leading-relaxed">
                  <span className="font-bold text-white">Activity:</span>{" "}
                  {lesson.activity}
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
              Discussion Prompts
            </h2>

            <div className="space-y-3">
              {discussionPrompts.map((prompt) => (
                <div
                  key={prompt}
                  className="rounded-xl border border-slate-800 bg-slate-950 p-4"
                >
                  {prompt}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
            <h2 className="text-3xl font-bold mb-6">
              Worksheet Ideas
            </h2>

            <div className="space-y-3">
              {worksheetIdeas.map((worksheet) => (
                <div
                  key={worksheet}
                  className="rounded-xl border border-slate-800 bg-slate-950 p-4"
                >
                  {worksheet}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Safe Teaching Guidelines
            </h2>

            <p className="text-slate-300 leading-relaxed mb-4">
              Cybersecurity lessons should focus on awareness, safety, ethics,
              and defensive habits. Students should learn how to protect
              themselves and others online.
            </p>

            <p className="text-slate-300 leading-relaxed">
              Teachers should avoid asking students to test real passwords,
              share private information, or perform unsafe technical actions.
              CyberShield Academy activities are designed to stay educational
              and responsible.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              Teacher Tips
            </h3>

            <div className="space-y-3">
              {teacherTips.map((tip) => (
                <div
                  key={tip}
                  className="rounded-xl border border-slate-800 bg-slate-900 p-4"
                >
                  {tip}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              Before the Lesson
            </h2>

            <p className="text-slate-300 leading-relaxed">
              Choose the correct grade-level track, preview the activity, and
              decide which discussion prompts fit the class.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              During the Lesson
            </h2>

            <p className="text-slate-300 leading-relaxed">
              Keep examples simple, encourage safe decision-making, and remind
              students not to share private information.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              After the Lesson
            </h2>

            <p className="text-slate-300 leading-relaxed">
              Use the Feedback Center to collect suggestions and use the Impact
              Tracker to document real outreach progress.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Future printable materials
          </h2>

          <p className="text-slate-300 leading-relaxed mb-6">
            In a future version, CyberShield Academy can include downloadable
            worksheets, teacher slides, lesson packets, and classroom handouts.
          </p>

          <div className="inline-block rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950">
            Printable Toolkit Coming Soon
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}