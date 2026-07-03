import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-4xl mx-auto">
        <p className="mb-4 text-cyan-400 font-semibold">
          About CyberShield Academy
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Building cybersecurity literacy for students.
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed mb-6">
          CyberShield Academy is a student-led cybersecurity education platform
          created to help elementary, middle, and high school students learn how
          to stay safe, responsible, and informed online.
        </p>

        <p className="text-lg text-slate-300 leading-relaxed mb-6">
          The goal of this project is not only to build a website, but to create
          a real educational initiative that can be used in local schools. After
          Version 1 is launched, the plan is to work with a small team of
          students to teach cybersecurity basics through workshops, activities,
          and hands-on demonstrations.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
            <h2 className="text-xl font-bold text-cyan-400 mb-3">
              Education
            </h2>
            <p className="text-slate-300 text-sm">
              Teach students cybersecurity, online safety, digital citizenship,
              and responsible technology use.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
            <h2 className="text-xl font-bold text-cyan-400 mb-3">
              Outreach
            </h2>
            <p className="text-slate-300 text-sm">
              Use the platform to support future presentations and workshops at
              local elementary and middle schools.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
            <h2 className="text-xl font-bold text-cyan-400 mb-3">
              Impact
            </h2>
            <p className="text-slate-300 text-sm">
              Collect feedback and anonymous learning data to improve
              cybersecurity education for students.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
