import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lessons = [
  {
    number: "2.1",
    title: "Personal Data vs Private Data",
    summary:
      "Learn the difference between everyday personal data and sensitive private data that needs stronger protection.",
    skill: "Classify data by risk level",
    href: "/junior/privacy-and-personal-data/personal-data-vs-private-data",
  },
  {
    number: "2.2",
    title: "Location, Photos, Contacts, and App Permissions",
    summary:
      "Understand why apps ask for permissions and how location, photos, contacts, camera, and microphone access can affect privacy.",
    skill: "Think before allowing app access",
    href: "/junior/privacy-and-personal-data/location-photos-contacts-and-app-permissions",
  },
  {
    number: "2.3",
    title: "Why Companies Want Data",
    summary:
      "Explore how apps and websites may use data for recommendations, personalization, advertising, analytics, and product decisions.",
    skill: "Understand data collection motives",
    href: "/junior/privacy-and-personal-data/why-companies-want-data",
  },
  {
    number: "2.4",
    title: "Privacy Settings and Account Controls",
    summary:
      "Learn how privacy settings can limit who sees profiles, posts, messages, tags, activity, and personal details.",
    skill: "Use privacy controls thoughtfully",
    href: "/junior/privacy-and-personal-data/privacy-settings-and-account-controls",
  },
  {
    number: "2.5",
    title: "Oversharing and Long-Term Risk",
    summary:
      "Understand how small details can combine over time to reveal more than expected.",
    skill: "Recognize oversharing patterns",
    href: "/junior/privacy-and-personal-data/oversharing-and-long-term-risk",
  },
  {
    number: "2.6",
    title: "Privacy and Personal Data Checkpoint",
    summary:
      "Review personal data, private data, app permissions, privacy settings, oversharing, and safer sharing choices.",
    skill: "Apply Module 2 decisions",
    href: "/junior/privacy-and-personal-data/review",
  },
];

const skillGoals = [
  "Explain the difference between personal data and private data",
  "Recognize data that should not be shared publicly",
  "Understand why apps request permissions",
  "Explain why companies may collect data",
  "Use privacy settings more thoughtfully",
  "Identify oversharing risks before they grow",
];

const situations = [
  "An app asks for location access even though it does not seem necessary",
  "A student posts a photo that shows a school logo in the background",
  "A game asks to access contacts before giving a reward",
  "A social profile asks for birthday, city, school, and phone number",
  "A student shares small daily details that reveal their routine over time",
  "A student wants to change privacy settings but is not sure what they mean",
];

const safetyRules = [
  "Use fake examples only.",
  "Do not share real private information.",
  "Do not enter real passwords, phone numbers, addresses, or account details.",
  "Do not test real suspicious links or apps.",
  "Do not upload real screenshots, IDs, school documents, or private messages.",
  "Ask a trusted adult when privacy settings, app permissions, or account problems feel confusing or unsafe.",
];

export default function PrivacyAndPersonalDataPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 2
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Privacy and Personal Data
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          This module helps middle school students understand what data is, why
          privacy matters, how apps and websites may collect information, and
          how small details can reveal more than expected.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/privacy-and-personal-data/personal-data-vs-private-data"
            className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition text-center"
          >
            Start Lesson 2.1
          </Link>

          <Link
            href="/junior/digital-life-and-online-identity/review"
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

          <div className="rounded-2xl border border-yellow-400/40 bg-yellow-400/10 p-8">
            <h2 className="text-3xl md:text-5xl font-bold text-yellow-100 mb-5">
              How can small pieces of data reveal more than expected?
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Students often share photos, usernames, app permissions, profile
              details, locations, interests, and school-related information
              without thinking about how those pieces can connect. This module
              teaches students how to slow down, notice privacy risks, and make
              smarter choices before sharing.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">
          Module Skill Goals
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          By the end of this module, students should understand data privacy and
          make safer sharing decisions.
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
            Module 2 includes six lessons about personal data, permissions,
            data collection, privacy settings, and oversharing.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {lessons.map((lesson) => (
              <Link
                key={lesson.number}
                href={lesson.href}
                className="rounded-2xl bg-slate-950 border border-slate-800 p-6 hover:border-cyan-400 transition"
              >
                <div className="flex items-center justify-between gap-4 mb-4">
                  <p className="text-sm text-cyan-300 font-semibold">
                    Lesson {lesson.number}
                  </p>

                  <span className="rounded-full bg-emerald-400 px-3 py-1 text-xs font-bold text-slate-950">
                    Live
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-cyan-200 mb-3">
                  {lesson.title}
                </h3>

                <p className="text-slate-300 leading-relaxed mb-5">
                  {lesson.summary}
                </p>

                <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                  <p className="text-sm font-semibold text-slate-400 mb-1">
                    Skill practiced
                  </p>

                  <p className="text-slate-200">{lesson.skill}</p>
                </div>
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
          Students will practice with fake privacy situations that feel realistic
          for middle school.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {situations.map((situation) => (
            <div
              key={situation}
              className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 text-slate-200"
            >
              {situation}
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6">
            <p className="text-cyan-300 font-semibold mb-3">
              Safety Reminder
            </p>

            <h2 className="text-3xl font-bold mb-6">
              Module 2 stays safe, defensive, and school-appropriate.
            </h2>

            <div className="space-y-3">
              {safetyRules.map((rule) => (
                <div
                  key={rule}
                  className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 text-slate-200"
                >
                  {rule}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6">
            <p className="text-cyan-300 font-semibold mb-3">
              Module Completion Goal
            </p>

            <h2 className="text-3xl font-bold mb-6">
              Students should leave Module 2 with stronger privacy judgment.
            </h2>

            <p className="text-slate-300 leading-relaxed mb-5">
              By the end of this module, students should be able to explain
              different types of data, recognize risky sharing patterns, think
              before allowing app permissions, and use privacy settings with
              more confidence.
            </p>

            <div className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 p-4">
              <h3 className="font-bold text-emerald-200 mb-2">
                Junior Skill Badge
              </h3>

              <p className="text-slate-200 leading-relaxed">
                Privacy Decision-Maker
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="max-w-5xl mx-auto rounded-2xl bg-slate-900/70 border border-slate-800 p-8 text-center">
          <p className="text-cyan-300 font-semibold mb-3">
            Navigation
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to begin Module 2?
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Start with Lesson 2.1 to learn the difference between personal data
            and private data.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/privacy-and-personal-data/personal-data-vs-private-data"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition text-center"
            >
              Start Lesson 2.1
            </Link>

            <Link
              href="/junior/digital-life-and-online-identity/review"
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