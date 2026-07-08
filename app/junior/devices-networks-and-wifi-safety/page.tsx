import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lessons = [
  {
    number: "9.1",
    title: "Devices and Network Basics",
    description:
      "Learn what devices, networks, Wi-Fi, routers, and connections mean in everyday student life.",
    href: "/junior/devices-networks-and-wifi-safety/devices-and-network-basics",
  },
  {
    number: "9.2",
    title: "Home Wi-Fi and Router Safety",
    description:
      "Learn safer habits for home Wi-Fi, router settings, passwords, updates, and shared family devices.",
    href: "/junior/devices-networks-and-wifi-safety/home-wifi-and-router-safety",
  },
  {
    number: "9.3",
    title: "Public Wi-Fi Safety",
    description:
      "Learn why public Wi-Fi needs extra caution and how students can avoid risky actions on shared networks.",
    href: "/junior/devices-networks-and-wifi-safety/public-wifi-safety",
  },
  {
    number: "9.4",
    title: "Bluetooth, AirDrop, and Nearby Sharing",
    description:
      "Learn how nearby sharing tools can be useful, but also why students should control who can send or receive files.",
    href: "/junior/devices-networks-and-wifi-safety/bluetooth-airdrop-and-nearby-sharing",
  },
  {
    number: "9.5",
    title: "Shared Devices and School Device Safety",
    description:
      "Learn safer habits for using school computers, shared tablets, family laptops, and borrowed devices.",
    href: "/junior/devices-networks-and-wifi-safety/shared-devices-and-school-device-safety",
  },
  {
    number: "9.6",
    title: "Devices, Networks, and Wi-Fi Safety Review",
    description:
      "Review device basics, home Wi-Fi safety, public Wi-Fi caution, nearby sharing, and shared device habits.",
    href: "/junior/devices-networks-and-wifi-safety/review",
  },
];

const skillGoals = [
  "Explain what devices, networks, Wi-Fi, and routers do",
  "Understand why home Wi-Fi settings and passwords matter",
  "Recognize safer choices when using public Wi-Fi",
  "Use Bluetooth, AirDrop, and nearby sharing more carefully",
  "Protect privacy when using shared or school devices",
  "Know when to ask a trusted adult before changing device or network settings",
];

const realWorldSituations = [
  "A student connects to Wi-Fi at a library, airport, or store",
  "A family router uses an old or easy-to-guess Wi-Fi password",
  "A phone receives a random nearby sharing request",
  "A student forgets to sign out of an account on a shared device",
  "A school laptop shows a device or network warning",
  "A friend asks to borrow a device while accounts are still signed in",
];

const safetyRules = [
  "Use fake examples only",
  "Do not try to break into networks, routers, devices, or accounts",
  "Do not change Wi-Fi or router settings without trusted adult permission",
  "Do not accept unknown Bluetooth, AirDrop, or nearby sharing requests",
  "Do not enter private information on shared or public devices without guidance",
  "Ask a trusted adult before responding to device, network, or connection warnings",
];

export default function DevicesNetworksAndWifiSafetyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 9
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Devices, Networks, and Wi-Fi Safety
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Module 9 teaches students how devices connect to networks, why Wi-Fi
          safety matters, how to be careful on public networks, and how to use
          shared devices and nearby sharing tools more responsibly. The goal is
          to build safe everyday habits, not to test or change real networks.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/devices-networks-and-wifi-safety/devices-and-network-basics"
            className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition text-center"
          >
            Start Lesson 9.1
          </Link>

          <Link
            href="/junior/misinformation-ai-and-online-content-trust"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Previous Module
          </Link>

          <Link
            href="/junior"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Back to Junior Track
          </Link>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">
            Module Big Question
          </p>

          <div className="rounded-2xl border border-cyan-400/40 bg-cyan-400/10 p-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              How can students use devices and networks more safely at home,
              school, and public places?
            </h2>

            <p className="text-slate-300 leading-relaxed text-lg">
              Devices and networks are part of school, games, communication,
              homework, and daily life. This module helps students understand
              common connection risks, protect accounts on shared devices, avoid
              unknown nearby sharing requests, and ask for help before making
              risky device or network changes.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">
          Module Skill Goals
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          By the end of this module, students will be able to:
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGoals.map((goal) => (
            <div
              key={goal}
              className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 text-slate-200"
            >
              {goal}
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">
            Lessons in This Module
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Follow the lessons in order to build safer device, network, and
            Wi-Fi habits.
          </h2>

          <div className="grid lg:grid-cols-2 gap-6">
            {lessons.map((lesson) => (
              <Link
                key={lesson.number}
                href={lesson.href}
                className="rounded-2xl bg-slate-950 border border-slate-800 p-6 hover:border-cyan-400 transition block"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <p className="text-cyan-300 font-semibold">
                      Lesson {lesson.number}
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-2">
                      {lesson.title}
                    </h3>
                  </div>

                  <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-200">
                    Live
                  </span>
                </div>

                <p className="text-slate-300 leading-relaxed">
                  {lesson.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">
          Real-World Situations
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Students will practice safer decisions in situations like:
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {realWorldSituations.map((situation) => (
            <div
              key={situation}
              className="rounded-xl border border-yellow-400/40 bg-yellow-400/10 p-4 text-slate-200"
            >
              {situation}
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">
            Safety Reminder
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            This module teaches safe everyday choices, not network testing or
            unauthorized changes.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {safetyRules.map((rule) => (
              <div
                key={rule}
                className="rounded-xl border border-red-400/40 bg-red-400/10 p-4 text-slate-200"
              >
                {rule}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-8">
          <p className="text-emerald-200 font-semibold mb-3">
            Module Completion Goal
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Earn the Network Safety Badge.
          </h2>

          <p className="text-slate-200 leading-relaxed text-lg">
            Students complete this module when they can explain basic device and
            network safety, use public Wi-Fi carefully, manage nearby sharing
            requests, protect accounts on shared devices, and ask a trusted adult
            before changing settings or responding to device warnings.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-t border-slate-800">
        <div className="max-w-5xl mx-auto rounded-2xl bg-slate-950 border border-slate-800 p-8 text-center">
          <p className="text-cyan-300 font-semibold mb-3">Navigation</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to start Module 9?
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Begin with Lesson 9.1 to learn what devices, networks, Wi-Fi, and
            routers mean in everyday student life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/devices-networks-and-wifi-safety/devices-and-network-basics"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition text-center"
            >
              Start Lesson 9.1
            </Link>

            <Link
              href="/junior/misinformation-ai-and-online-content-trust"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Previous Module
            </Link>

            <Link
              href="/junior"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Back to Junior Track
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}