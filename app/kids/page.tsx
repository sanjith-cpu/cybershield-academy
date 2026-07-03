import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const kidsModules = [
  {
    title: "Internet Basics",
    description:
      "Learn what the internet is, how websites work, and why it is important to use the internet safely.",
  },
  {
    title: "Keeping Information Private",
    description:
      "Learn what personal information is and why names, addresses, passwords, and school details should be protected.",
  },
  {
    title: "Password Basics",
    description:
      "Learn how strong passwords help protect accounts and why passwords should not be shared with friends.",
  },
  {
    title: "Being Kind Online",
    description:
      "Learn how to treat others respectfully online and what to do if someone is being mean on the internet.",
  },
  {
    title: "Ask a Trusted Adult",
    description:
      "Learn when to pause, ask for help, and talk to a trusted adult if something online feels confusing or unsafe.",
  },
];

export default function KidsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-400 font-semibold">CyberShield Kids</p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Simple online safety lessons for elementary students.
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mb-10">
          CyberShield Kids teaches younger students the basics of internet
          safety, privacy, kindness, passwords, and when to ask a trusted adult
          for help.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {kidsModules.map((module) => (
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
              What students will learn
            </h2>

            <p className="text-slate-300 leading-relaxed mb-4">
              This track focuses on everyday online safety skills instead of
              advanced cybersecurity concepts.
            </p>

            <p className="text-slate-300 leading-relaxed">
              The goal is to help elementary students build safe habits early,
              recognize when something feels wrong online, and know how to ask
              for help.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              Sample Activity
            </h3>

            <p className="text-slate-300 mb-4">Safe or Unsafe?</p>

            <div className="space-y-3">
              <div className="rounded-xl border border-slate-800 p-4">
                A website asks for your home address before you play a game.
              </div>

              <div className="rounded-xl border border-slate-800 p-4">
                You ask a parent or teacher before clicking a strange link.
              </div>

              <div className="rounded-xl border border-slate-800 p-4">
                Someone online asks you to keep a secret from your family.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Cyber Safety Pledge</h2>

          <p className="text-slate-300 leading-relaxed mb-6">
            At the end of this track, students will be able to complete a simple
            Cyber Safety Pledge showing that they understand safe, kind, and
            responsible internet use.
          </p>

          <div className="inline-block rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950">
            Pledge Coming Soon
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}