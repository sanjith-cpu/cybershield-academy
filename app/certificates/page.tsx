import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const certificates = [
  {
    title: "CyberShield Kids Certificate",
    audience: "Grades 3-5",
    description:
      "Awarded to elementary students who complete basic online safety lessons about privacy, kindness, passwords, and asking a trusted adult for help.",
    requirements: [
      "Complete the CyberShield Kids lessons",
      "Review safe and unsafe online examples",
      "Complete the Cyber Safety Pledge",
    ],
  },
  {
    title: "CyberShield Junior Certificate",
    audience: "Grades 6-8",
    description:
      "Awarded to middle school students who demonstrate awareness of scams, passwords, digital citizenship, and personal information protection.",
    requirements: [
      "Complete the CyberShield Junior lessons",
      "Practice spotting scam warning signs",
      "Complete a short online safety review",
    ],
  },
  {
    title: "CyberShield High School Certificate",
    audience: "Grades 9-12",
    description:
      "Awarded to high school students who complete cybersecurity foundations, career exploration, and responsible defensive security lessons.",
    requirements: [
      "Complete the High School learning path",
      "Review cybersecurity career pathways",
      "Complete the cyber readiness review",
    ],
  },
];

export default function CertificatesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-400 font-semibold">
          CyberShield Certificates
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Certificate pathways for cybersecurity learning.
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
          CyberShield Academy will eventually allow students to earn certificates
          after completing lessons, activities, and review questions. These
          certificates are designed to recognize learning progress and encourage
          responsible digital habits.
        </p>
      </section>

      <section className="px-8 py-16 bg-slate-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {certificates.map((certificate) => (
            <div
              key={certificate.title}
              className="rounded-2xl bg-slate-950 border border-slate-800 p-6 hover:border-cyan-500 transition"
            >
              <div className="rounded-xl border border-cyan-500 p-5 mb-6 text-center">
                <p className="text-sm text-slate-400 mb-2">
                  Certificate Preview
                </p>

                <h2 className="text-2xl font-bold text-cyan-400 mb-3">
                  {certificate.title}
                </h2>

                <p className="text-slate-300">{certificate.audience}</p>

                <div className="mt-5 rounded-lg bg-cyan-500 px-4 py-2 text-slate-950 font-semibold">
                  Coming Soon
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed mb-5">
                {certificate.description}
              </p>

              <h3 className="font-bold mb-3">Future Requirements:</h3>

              <div className="space-y-3">
                {certificate.requirements.map((requirement) => (
                  <div
                    key={requirement}
                    className="rounded-xl border border-slate-800 bg-slate-900 p-4 text-sm text-slate-300"
                  >
                    {requirement}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
            <h2 className="text-3xl font-bold mb-4">
              Why certificates matter
            </h2>

            <p className="text-slate-300 leading-relaxed">
              Certificates give students a clear goal to work toward. They also
              help teachers, parents, and schools see that students have
              completed key cybersecurity awareness topics.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
            <h2 className="text-3xl font-bold mb-4">
              Future improvement
            </h2>

            <p className="text-slate-300 leading-relaxed">
              In a later version, CyberShield Academy can generate certificates
              after students complete lessons, quizzes, and activities. For now,
              this page shows the planned certificate system.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Learning recognition, not official certification
          </h2>

          <p className="text-slate-300 leading-relaxed">
            CyberShield Academy certificates are educational recognition badges.
            They are meant to motivate students and show learning progress, not
            replace official industry certifications.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}