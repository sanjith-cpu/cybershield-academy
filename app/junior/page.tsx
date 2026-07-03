import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const juniorModules = [
  {
    title: "Internet Safety",
    description:
      "Learn how to browse safely, avoid suspicious links, and make smart decisions when using websites, apps, and online platforms.",
  },
  {
    title: "Password Security",
    description:
      "Learn how strong passwords, password managers, and multi-factor authentication help protect your accounts.",
  },
  {
    title: "Scam Awareness",
    description:
      "Learn how to recognize common online scams, fake messages, suspicious offers, and social engineering tricks.",
  },
  {
    title: "Digital Citizenship",
    description:
      "Learn how to behave respectfully online, understand your digital footprint, and use technology responsibly.",
  },
  {
    title: "Personal Information Protection",
    description:
      "Learn what personal information should be kept private and how to protect your identity online.",
  },
];

export default function JuniorPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-400 font-semibold">
          CyberShield Junior
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Cyber awareness lessons for middle school students.
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mb-10">
          CyberShield Junior helps middle school students build stronger online
          safety habits through lessons on internet safety, passwords, scams,
          privacy, and responsible digital citizenship.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {juniorModules.map((module) => (
            <div
              key={module.title}
              className="rounded-2xl bg-slate-900 border border-slate-800 p-6 hover:border-cyan-500 transition"
            >
              <h2 className="text-2xl font-bold text-cyan-400 mb-3">
                {module.title}
              </h2>

              <p className="text-slate-300">{module.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              What makes this track different?
            </h2>

            <p className="text-slate-300 leading-relaxed mb-4">
              CyberShield Junior is designed for students who are old enough to
              understand online risks but may not be ready for advanced
              cybersecurity topics yet.
            </p>

            <p className="text-slate-300 leading-relaxed">
              The goal is to help students recognize real-world risks, make
              safer choices online, and understand why cybersecurity matters in
              everyday life.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              Sample Activity
            </h3>

            <p className="text-slate-300 mb-4">
              Spot the Red Flag:
            </p>

            <div className="space-y-3">
              <div className="rounded-xl border border-slate-800 p-4">
                A message says you won a prize, but asks you to click a strange
                link.
              </div>

              <div className="rounded-xl border border-slate-800 p-4">
                A login page has spelling mistakes and a suspicious website
                address.
              </div>

              <div className="rounded-xl border border-slate-800 p-4">
                A friend asks you to share your password so they can help with
                something.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Junior Cyber Defender Certificate
          </h2>

          <p className="text-slate-300 leading-relaxed mb-6">
            After completing the Junior track, students will eventually be able
            to earn a CyberShield Junior certificate showing that they understand
            core online safety and cybersecurity awareness skills.
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