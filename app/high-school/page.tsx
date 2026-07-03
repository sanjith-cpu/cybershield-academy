import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const highSchoolTracks = [
  {
    title: "Beginner Track",
    level: "Foundations",
    description:
      "Learn the basic ideas behind cybersecurity, including online safety, accounts, passwords, scams, privacy, and responsible technology use.",
  },
  {
    title: "Intermediate Track",
    level: "Core Skills",
    description:
      "Explore networks, authentication, operating systems, data protection, risk, and how security teams think about protecting people and organizations.",
  },
  {
    title: "Advanced Track",
    level: "Career Preparation",
    description:
      "Learn about cybersecurity careers, certifications, ethical security work, incident response, digital forensics, and real-world defense concepts.",
  },
];

const careerPaths = [
  "Cybersecurity Analyst",
  "Security Engineer",
  "Digital Forensics Investigator",
  "Cloud Security Specialist",
  "Network Security Administrator",
  "Security Awareness Educator",
];

export default function HighSchoolPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-400 font-semibold">
          CyberShield High School
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Cybersecurity learning paths for high school students.
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mb-10">
          The High School track introduces students to cybersecurity foundations,
          technical concepts, career pathways, certifications, and ethical
          defensive security skills.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {highSchoolTracks.map((track) => (
            <div
              key={track.title}
              className="rounded-2xl bg-slate-900 border border-slate-800 p-6 hover:border-cyan-500 transition"
            >
              <p className="text-sm text-slate-400 mb-2">{track.level}</p>

              <h2 className="text-2xl font-bold text-cyan-400 mb-3">
                {track.title}
              </h2>

              <p className="text-slate-300">{track.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              What students will learn
            </h2>

            <p className="text-slate-300 leading-relaxed mb-4">
              This track is designed for students who want to move beyond basic
              online safety and begin understanding how cybersecurity works in
              the real world.
            </p>

            <p className="text-slate-300 leading-relaxed">
              Lessons focus on ethical, defensive, and educational cybersecurity.
              Students learn how to protect systems, recognize risks, and explore
              career options responsibly.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              Sample Activity
            </h3>

            <p className="text-slate-300 mb-4">
              Security Decision Challenge:
            </p>

            <div className="space-y-3">
              <div className="rounded-xl border border-slate-800 p-4">
                A student uses the same password for school, email, and social
                media accounts.
              </div>

              <div className="rounded-xl border border-slate-800 p-4">
                A club website stores member information but has no clear privacy
                policy.
              </div>

              <div className="rounded-xl border border-slate-800 p-4">
                A team adds multi-factor authentication to protect shared project
                accounts.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Cybersecurity Career Pathways
          </h2>

          <p className="text-slate-300 text-center max-w-3xl mx-auto mb-10">
            CyberShield Academy also helps high school students discover
            possible cybersecurity careers and understand what skills they may
            want to build in the future.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {careerPaths.map((career) => (
              <div
                key={career}
                className="rounded-xl bg-slate-900 border border-slate-800 p-5 text-center hover:border-cyan-500 transition"
              >
                <p className="font-semibold">{career}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            High School Cyber Readiness Certificate
          </h2>

          <p className="text-slate-300 leading-relaxed mb-6">
            In a future version, students will be able to complete lessons,
            answer review questions, and earn a certificate showing that they
            understand cybersecurity foundations and responsible online defense.
          </p>

          <div className="inline-block rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950">
            Certificate Coming Soon
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}