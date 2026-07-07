import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain how usernames and profiles create first impressions",
  "Identify profile details that may reveal too much information",
  "Compare usernames that are safer with usernames that are risky",
  "Understand how profile pictures, bios, and comments affect digital reputation",
  "Practice building a profile that is safe, respectful, and school-appropriate",
];

const vocabulary = [
  {
    term: "Username",
    definition:
      "A name used to identify an account, profile, game account, or online identity.",
  },
  {
    term: "Bio",
    definition:
      "A short profile description that may include interests, hobbies, or details about a person.",
  },
  {
    term: "First Impression",
    definition:
      "The first idea someone forms about another person based on what they notice.",
  },
  {
    term: "Profile Picture",
    definition:
      "An image connected to an account or profile. It can affect how others see the account.",
  },
  {
    term: "Oversharing",
    definition:
      "Sharing more information than is safe or necessary, especially in public or semi-public spaces.",
  },
  {
    term: "Public Profile",
    definition:
      "A profile that can be seen by people beyond close friends, classmates, or trusted contacts.",
  },
];

const risks = [
  {
    title: "Private Details in Usernames",
    text: "A username can accidentally reveal a full name, school, age, location, team, or graduation year.",
  },
  {
    title: "Profile Pictures That Reveal Location",
    text: "A profile picture might show a school logo, house number, street sign, uniform, or other identifying detail.",
  },
  {
    title: "Bios That Say Too Much",
    text: "A bio can combine small details like school, city, team, schedule, and age into a bigger privacy risk.",
  },
];

const scenarios = [
  {
    title: "The School Team Username",
    situation:
      "A student makes a public username that includes their full first name, school initials, jersey number, and graduation year.",
    warningSigns:
      "The username connects the student to a school, activity, and age group.",
    riskyResponse:
      "Keeping it because friends from school will recognize it easily.",
    smarterResponse:
      "Use a username based on a safe interest, nickname, hobby, or favorite topic without school or age details.",
    whyItWorks:
      "The username can still feel personal without giving strangers a way to connect the student to real-life details.",
  },
  {
    title: "The Profile Bio",
    situation:
      "A student writes a bio that says their city, school, grade, favorite hangout spot, and sports team.",
    warningSigns:
      "The bio combines multiple details that could reveal where the student spends time.",
    riskyResponse:
      "Leaving the bio because each detail seems harmless by itself.",
    smarterResponse:
      "Change the bio to safer interests like coding, drawing, cricket, music, reading, or favorite types of games.",
    whyItWorks:
      "Sharing interests can show personality without revealing private location or school information.",
  },
  {
    title: "The Comment Section First Impression",
    situation:
      "A student leaves rude jokes in a public comment section because they think only friends will notice.",
    warningSigns:
      "The comments are public, can be screenshotted, and may make the student look unkind or careless.",
    riskyResponse:
      "Posting more rude comments because other people are laughing.",
    smarterResponse:
      "Stop, think about the audience, and choose comments that are respectful or say nothing at all.",
    whyItWorks:
      "A respectful profile and comment history helps protect digital reputation and avoids unnecessary conflict.",
  },
];

const actionSteps = [
  "Use usernames that do not reveal full name, school, age, location, address, or phone number.",
  "Choose profile pictures that do not show private places, school logos, house numbers, or personal documents.",
  "Write bios that focus on interests instead of private details.",
  "Check whether a profile is public before adding information.",
  "Avoid comments that are rude, embarrassing, threatening, or likely to hurt someone.",
  "Ask a trusted adult if a profile or username feels too revealing.",
];

const reflectionQuestions = [
  "What is one thing a username can accidentally reveal?",
  "Why can a profile create a first impression?",
  "What is one safe interest someone could include in a bio?",
  "Why should students be careful with profile pictures?",
  "How can comments affect someone’s digital reputation?",
];

const skillCheck = [
  {
    question: "Which username is safer: one with a school name or one based on a hobby?",
    answer:
      "A username based on a hobby is usually safer because it can show personality without revealing school or location details.",
  },
  {
    question: "Why can a profile bio become risky?",
    answer:
      "A bio can become risky when it combines details like school, city, age, team, schedule, or location.",
  },
  {
    question: "What should a student check before adding personal details to a profile?",
    answer:
      "They should check who can see the profile and whether the details reveal private information.",
  },
  {
    question: "What should a student do if they are unsure whether a profile is safe?",
    answer:
      "They should ask a trusted adult, guardian, teacher, counselor, or school technology staff member for help.",
  },
];

const checklist = [
  "I can explain how usernames create first impressions.",
  "I can identify risky details in a username or bio.",
  "I can choose a safer profile picture.",
  "I can explain why public profiles need extra caution.",
  "I can compare a risky profile choice with a smarter profile choice.",
  "I know when to ask a trusted adult for help.",
];

export default function UsernamesProfilesAndFirstImpressionsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 1 • Lesson 1.2
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Usernames, Profiles, and First Impressions
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          A username, profile picture, bio, and comment history can quickly shape
          how others see an account. This lesson helps students build profiles
          that show personality without revealing private information.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/digital-life-and-online-identity/what-your-online-identity-includes"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Previous Lesson
          </Link>

          <Link
            href="/junior/digital-life-and-online-identity"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Back to Module 1
          </Link>

          <Link
            href="/junior"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Back to Junior Track
          </Link>
          <Link
            href="/junior/digital-life-and-online-identity/public-vs-private-online-spaces"
            className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition text-center"
          >
            Next Lesson
          </Link>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">
            Real-Life Hook
          </p>

          <div className="rounded-2xl border border-yellow-400/40 bg-yellow-400/10 p-8">
            <h2 className="text-3xl font-bold text-yellow-100 mb-4">
              A profile can speak before you do.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student joins a new online class group, club chat, or
              gaming team. Before anyone talks to them, people may notice their
              username, profile picture, bio, and past comments. Those details
              can create a first impression before the student says anything.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">
          What You Will Learn
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Safer profiles show personality without giving away private details.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {learningGoals.map((goal) => (
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
            Why This Matters
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Usernames and profiles can affect privacy, trust, and reputation.
          </h2>

          <p className="text-slate-300 leading-relaxed text-lg max-w-4xl">
            Middle school students often create accounts for school tools,
            games, clubs, group chats, and creative platforms. A profile may
            seem small, but it can reveal information, affect how classmates see
            someone, and become part of a digital reputation. Safer profile
            choices help students stay private while still expressing who they
            are.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">
          Core Explanation
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          A profile is a public signal, even when it feels casual.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            A username is often one of the first things people notice online.
            It can be fun and creative, but it should not include private
            details like full name, school, address, phone number, exact
            location, age, or passwords. A safer username can be based on a
            hobby, interest, favorite subject, or harmless nickname.
          </p>

          <p>
            A profile picture and bio can also create a strong first impression.
            They may show personality, but they can also reveal more than
            expected. A school logo, house number, street sign, name tag, or
            personal document in the background can accidentally share private
            information.
          </p>

          <p>
            First impressions also come from behavior. Comments, jokes, replies,
            and group chat messages can make someone seem respectful,
            thoughtful, careless, or unkind. A smarter profile is not just about
            what it says. It is also about how the person behaves online.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">
            Key Vocabulary
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for understanding usernames and profiles.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vocabulary.map((word) => (
              <div
                key={word.term}
                className="rounded-2xl bg-slate-950 border border-slate-800 p-6"
              >
                <h3 className="text-xl font-bold text-cyan-200 mb-3">
                  {word.term}
                </h3>

                <p className="text-slate-300 leading-relaxed">
                  {word.definition}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">
          Risk Breakdown
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Profile risks often happen when small clues combine.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {risks.map((risk) => (
            <div
              key={risk.title}
              className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6"
            >
              <h3 className="text-xl font-bold text-red-200 mb-3">
                {risk.title}
              </h3>

              <p className="text-slate-200 leading-relaxed">
                {risk.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">
            Smarter Choice vs Risky Choice
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            A safer profile can still feel unique.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
              <h3 className="text-2xl font-bold text-red-200 mb-4">
                Risky Choice
              </h3>

              <p className="text-slate-200 leading-relaxed">
                A student uses a public username with their full name, school
                initials, grade level, jersey number, and city. Their bio also
                says where they practice after school.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
              <h3 className="text-2xl font-bold text-emerald-200 mb-4">
                Smarter Choice
              </h3>

              <p className="text-slate-200 leading-relaxed">
                The student uses a username connected to a hobby and a bio that
                shares safe interests, like sports, art, music, coding, books,
                or games, without naming school, city, or exact routines.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">
          Scenario Lab
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Practice spotting profile warning signs.
        </h2>

        <div className="space-y-6">
          {scenarios.map((scenario) => (
            <div
              key={scenario.title}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6"
            >
              <h3 className="text-2xl font-bold text-cyan-200 mb-4">
                {scenario.title}
              </h3>

              <div className="grid lg:grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                  <h4 className="font-bold mb-2">Situation</h4>
                  <p className="text-slate-300 leading-relaxed">
                    {scenario.situation}
                  </p>
                </div>

                <div className="rounded-xl border border-yellow-400/40 bg-yellow-400/10 p-4">
                  <h4 className="font-bold text-yellow-200 mb-2">
                    Warning Signs
                  </h4>
                  <p className="text-slate-200 leading-relaxed">
                    {scenario.warningSigns}
                  </p>
                </div>

                <div className="rounded-xl border border-red-400/40 bg-red-400/10 p-4">
                  <h4 className="font-bold text-red-200 mb-2">
                    Risky Response
                  </h4>
                  <p className="text-slate-200 leading-relaxed">
                    {scenario.riskyResponse}
                  </p>
                </div>

                <div className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 p-4">
                  <h4 className="font-bold text-emerald-200 mb-2">
                    Smarter Response
                  </h4>
                  <p className="text-slate-200 leading-relaxed">
                    {scenario.smarterResponse}
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-cyan-400/40 bg-cyan-400/10 p-4">
                <h4 className="font-bold text-cyan-200 mb-2">
                  Why the Smarter Response Works
                </h4>
                <p className="text-slate-200 leading-relaxed">
                  {scenario.whyItWorks}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">
            Real-Life Action Steps
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Use this checklist before creating or updating a profile.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {actionSteps.map((step) => (
              <div
                key={step}
                className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-slate-200"
              >
                {step}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6">
            <p className="text-cyan-300 font-semibold mb-3">
              Reflection Questions
            </p>

            <h2 className="text-3xl font-bold mb-6">
              Think before moving on.
            </h2>

            <div className="space-y-3">
              {reflectionQuestions.map((question) => (
                <div
                  key={question}
                  className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-slate-200"
                >
                  {question}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6">
            <p className="text-cyan-300 font-semibold mb-3">
              Skill Check
            </p>

            <h2 className="text-3xl font-bold mb-6">
              Quick review.
            </h2>

            <div className="space-y-4">
              {skillCheck.map((item) => (
                <div
                  key={item.question}
                  className="rounded-xl border border-slate-800 bg-slate-950 p-4"
                >
                  <h3 className="font-bold text-cyan-200 mb-2">
                    {item.question}
                  </h3>

                  <p className="text-slate-300 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">
            Junior Checklist
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Before finishing Lesson 1.2, students should be able to say:
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {checklist.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 p-4 text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="max-w-5xl mx-auto rounded-2xl bg-slate-900/70 border border-slate-800 p-8 text-center">
          <p className="text-cyan-300 font-semibold mb-3">
            Navigation
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Lesson 1.2 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 1.3 will compare public posts, private chats, school
            platforms, gaming spaces, and closed groups.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/digital-life-and-online-identity/what-your-online-identity-includes"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Previous Lesson
            </Link>

            <Link
              href="/junior/digital-life-and-online-identity"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Back to Module 1
            </Link>

            <Link
              href="/junior/digital-life-and-online-identity/public-vs-private-online-spaces"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition text-center"
            >
              Next Lesson
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
