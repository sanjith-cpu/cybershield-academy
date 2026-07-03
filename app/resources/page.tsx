import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const cyberTerms = [
  {
    term: "Cybersecurity",
    definition:
      "The practice of protecting devices, accounts, networks, and information from online threats.",
  },
  {
    term: "Phishing",
    definition:
      "A scam where someone tries to trick you into sharing private information, usually through fake emails, messages, or websites.",
  },
  {
    term: "Password",
    definition:
      "A secret phrase used to protect an account. Strong passwords should be long, unique, and hard to guess.",
  },
  {
    term: "Multi-Factor Authentication",
    definition:
      "An extra security step that helps prove it is really you when signing into an account.",
  },
  {
    term: "Digital Footprint",
    definition:
      "The trail of information you leave behind when you use websites, apps, social media, or online accounts.",
  },
  {
    term: "Scam",
    definition:
      "A dishonest trick used to steal money, accounts, information, or trust.",
  },
];

const safetyChecklist = [
  "Use strong and unique passwords.",
  "Do not share passwords with friends.",
  "Ask a trusted adult before sharing personal information online.",
  "Be careful with strange links and unexpected messages.",
  "Check website addresses before logging in.",
  "Use multi-factor authentication when available.",
  "Think before posting photos, comments, or personal details.",
  "Report suspicious messages instead of responding to them.",
];

const scamWarningSigns = [
  "The message creates urgency or fear.",
  "It says you won a prize you did not enter.",
  "It asks for your password or personal information.",
  "The website address looks strange or misspelled.",
  "The message has spelling mistakes or unusual formatting.",
  "Someone asks you to keep the conversation secret.",
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-400 font-semibold">
          Student Resources
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Cybersecurity resources for safer digital habits.
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
          This page gives students, parents, and teachers simple cybersecurity
          terms, safety checklists, scam warning signs, and responsible online
          behavior tips.
        </p>
      </section>

      <section className="px-8 py-16 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Cybersecurity Vocabulary
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cyberTerms.map((item) => (
              <div
                key={item.term}
                className="rounded-2xl bg-slate-950 border border-slate-800 p-6 hover:border-cyan-500 transition"
              >
                <h3 className="text-2xl font-bold text-cyan-400 mb-3">
                  {item.term}
                </h3>

                <p className="text-slate-300">{item.definition}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
            <h2 className="text-3xl font-bold mb-6">
              Online Safety Checklist
            </h2>

            <div className="space-y-3">
              {safetyChecklist.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-800 bg-slate-950 p-4"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
            <h2 className="text-3xl font-bold mb-6">
              Scam Warning Signs
            </h2>

            <div className="space-y-3">
              {scamWarningSigns.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-800 bg-slate-950 p-4"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              For Students
            </h2>

            <p className="text-slate-300 leading-relaxed">
              Build safe habits early. Think before clicking, protect your
              accounts, avoid oversharing, and ask for help when something
              online feels suspicious.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              For Parents
            </h2>

            <p className="text-slate-300 leading-relaxed">
              Talk with students about online safety, privacy, scams, screen
              habits, and how to ask for help without fear or embarrassment.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              For Teachers
            </h2>

            <p className="text-slate-300 leading-relaxed">
              Use these resources to introduce cybersecurity awareness,
              responsible technology use, password safety, and scam recognition
              in a classroom-friendly way.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Responsible Cyber Learning
          </h2>

          <p className="text-slate-300 leading-relaxed">
            CyberShield Academy focuses on ethical, defensive, and educational
            cybersecurity. Students learn how to protect themselves and others
            online.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}