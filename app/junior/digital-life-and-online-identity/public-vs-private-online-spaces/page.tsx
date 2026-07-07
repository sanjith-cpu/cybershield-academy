import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain the difference between public, private, school, gaming, and group chat spaces",
  "Understand why private online spaces are not always fully private",
  "Identify who might be able to see, save, or share online content",
  "Recognize when a message or post could reach a larger audience than expected",
  "Practice choosing smarter responses in different online spaces",
];

const vocabulary = [
  {
    term: "Public Space",
    definition:
      "An online area where posts, comments, profiles, or videos may be visible to many people, including people the student does not know.",
  },
  {
    term: "Private Chat",
    definition:
      "A message space that may feel private, but messages can still be saved, screenshotted, forwarded, or shown to others.",
  },
  {
    term: "School Platform",
    definition:
      "A website or app used for schoolwork, announcements, classes, assignments, or communication with teachers and classmates.",
  },
  {
    term: "Gaming Community",
    definition:
      "An online space connected to games, including chats, teams, trades, voice chat, groups, and player profiles.",
  },
  {
    term: "Closed Group",
    definition:
      "A group that only certain people can join, but content inside the group can still be copied or shared outside it.",
  },
  {
    term: "Audience",
    definition:
      "The people who can see, save, react to, copy, or share something online.",
  },
];

const onlineSpaces = [
  {
    title: "Public Posts",
    description:
      "Public posts may be seen by friends, classmates, strangers, search engines, or people outside the original audience.",
    smarterHabit:
      "Avoid private details and think carefully before posting anything that could hurt your reputation.",
  },
  {
    title: "Private Chats",
    description:
      "Private chats may feel safe, but messages can be screenshotted, forwarded, or shown to someone else.",
    smarterHabit:
      "Do not send messages that would be harmful, unsafe, or embarrassing if shared.",
  },
  {
    title: "School Platforms",
    description:
      "School platforms are used for learning, but posts, comments, files, and messages may be visible to teachers or school staff.",
    smarterHabit:
      "Keep communication respectful, school-appropriate, and connected to learning.",
  },
  {
    title: "Gaming Spaces",
    description:
      "Gaming spaces can include strangers, trades, team chats, voice chat, fake rewards, and fast-moving messages.",
    smarterHabit:
      "Do not share personal details, passwords, location, school, or account information.",
  },
];

const risks = [
  {
    title: "Private Does Not Mean Secret",
    text: "A private chat can still be screenshotted, copied, forwarded, or shown to someone else.",
  },
  {
    title: "Audience Can Change",
    text: "Something posted for a small group can spread to classmates, teams, teachers, or strangers.",
  },
  {
    title: "Different Spaces Have Different Rules",
    text: "A joke that seems normal in one group may be inappropriate on a school platform or public profile.",
  },
];

const scenarios = [
  {
    title: "The Private Chat Screenshot",
    situation:
      "A student sends a message in a private chat because they think only one friend will see it. Later, the message is screenshotted and shared with other classmates.",
    warningSigns:
      "The message includes personal feelings, another person’s name, and something the student would not want shared.",
    riskyResponse:
      "Sending more angry messages because the student feels embarrassed.",
    smarterResponse:
      "Stop replying, avoid making the situation bigger, and ask a trusted adult for help if the message is being used to hurt someone.",
    whyItWorks:
      "Pausing gives the student time to make a better decision and prevents more messages from being shared.",
  },
  {
    title: "The School Platform Comment",
    situation:
      "A student posts a sarcastic joke under a school assignment discussion. Other students laugh, but the teacher can also see the comment.",
    warningSigns:
      "The space is connected to school, and the comment may look disrespectful or distracting.",
    riskyResponse:
      "Posting more jokes because classmates are reacting.",
    smarterResponse:
      "Keep school platform comments respectful, helpful, and connected to the assignment.",
    whyItWorks:
      "School platforms are learning spaces, and respectful comments protect both reputation and classroom trust.",
  },
  {
    title: "The Gaming Group Invite",
    situation:
      "A student joins a gaming group where people ask for their age, city, school, and when they usually play.",
    warningSigns:
      "The group is asking for personal details that are not needed to play the game.",
    riskyResponse:
      "Answering the questions because the group seems friendly.",
    smarterResponse:
      "Avoid sharing private details, keep the conversation focused on the game, and ask a trusted adult if the questions feel uncomfortable.",
    whyItWorks:
      "Students can enjoy gaming communities without giving strangers real-life information.",
  },
  {
    title: "The Closed Group Rumor",
    situation:
      "A small closed group starts talking about another student. Someone says it is fine because only group members can see it.",
    warningSigns:
      "The conversation is hurtful, involves someone not present, and could be screenshotted or spread.",
    riskyResponse:
      "Joining the conversation because it feels private.",
    smarterResponse:
      "Do not add to the rumor, change the subject, leave the chat, or ask for help if the situation becomes harmful.",
    whyItWorks:
      "Choosing not to spread harmful content protects others and avoids becoming part of the problem.",
  },
];

const actionSteps = [
  "Before posting, ask: Who can see this right now?",
  "Ask: Could someone screenshot, forward, or share this later?",
  "Keep school platforms respectful and school-appropriate.",
  "Avoid sharing private details in gaming spaces or group chats.",
  "Do not post or send something just because a space feels private.",
  "Leave, mute, block, report, or ask a trusted adult when an online space feels unsafe.",
];

const reflectionQuestions = [
  "Why is a private chat not always fully private?",
  "What is one difference between a school platform and a gaming chat?",
  "Why should students think about audience before posting?",
  "What could happen if a closed group shares harmful messages?",
  "What is one smarter habit for public online spaces?",
];

const skillCheck = [
  {
    question: "What is a public online space?",
    answer:
      "A public online space is an area where posts, profiles, comments, or videos may be seen by many people, including people outside the student’s close circle.",
  },
  {
    question: "Why are private chats not always completely private?",
    answer:
      "Messages can be screenshotted, copied, forwarded, or shown to other people.",
  },
  {
    question: "What should students remember about school platforms?",
    answer:
      "School platforms should be used respectfully and appropriately because teachers, classmates, or school staff may see the activity.",
  },
  {
    question: "What is a smarter choice when a gaming group asks for private details?",
    answer:
      "Do not share private information, keep the conversation focused on the game, and ask a trusted adult if the questions feel unsafe.",
  },
];

const checklist = [
  "I can explain the difference between public and private online spaces.",
  "I can explain why private chats are not always fully private.",
  "I can identify risks in school platforms, gaming spaces, and group chats.",
  "I can think about audience before posting or sending.",
  "I can choose a smarter response when an online space feels unsafe.",
  "I know when to ask a trusted adult for help.",
];

export default function PublicVsPrivateOnlineSpacesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 1 • Lesson 1.3
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Public vs Private Online Spaces
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Online spaces do not all work the same way. A public post, private
          chat, school platform, gaming space, and closed group can each have a
          different audience, different risks, and different expectations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/digital-life-and-online-identity/usernames-profiles-and-first-impressions"
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
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">
            Real-Life Hook
          </p>

          <div className="rounded-2xl border border-yellow-400/40 bg-yellow-400/10 p-8">
            <h2 className="text-3xl font-bold text-yellow-100 mb-4">
              A message can travel farther than the person who sent it expected.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student sends a joke in a small group chat because they
              think only a few friends will see it. Someone screenshots it and
              shares it with people outside the group. The student thought the
              space was private, but the message did not stay private.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">
          What You Will Learn
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Every online space has an audience.
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
            Students make better choices when they understand where they are posting.
          </h2>

          <p className="text-slate-300 leading-relaxed text-lg max-w-4xl">
            Middle school students may move between school platforms, gaming
            chats, private messages, group chats, public comment sections, and
            creative apps in the same day. Each space can feel different, but
            all online spaces can affect privacy, reputation, friendships, and
            trust. Understanding the audience helps students decide what should
            or should not be shared.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">
          Core Explanation
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Public and private are not always simple online.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            A public online space is an area where many people may be able to
            see what someone posts. Public profiles, comment sections, videos,
            and open communities can reach classmates, strangers, future teams,
            clubs, schools, or other unexpected audiences.
          </p>

          <p>
            A private online space feels smaller, but it is not always fully
            private. A direct message, private group chat, or closed group can
            still be copied, screenshotted, forwarded, or shown to someone else.
            That means students should avoid sending anything that would be
            unsafe, hurtful, or embarrassing if shared.
          </p>

          <p>
            School platforms and gaming spaces also have special risks. School
            platforms should stay respectful and connected to learning. Gaming
            spaces can include people students do not know in real life, so they
            should avoid sharing personal details, account information, location,
            school, or daily routines.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">
            Key Vocabulary
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for understanding online spaces.
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
          Online Space Comparison
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Different spaces need different safety habits.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {onlineSpaces.map((space) => (
            <div
              key={space.title}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6"
            >
              <h3 className="text-2xl font-bold text-cyan-200 mb-3">
                {space.title}
              </h3>

              <p className="text-slate-300 leading-relaxed mb-5">
                {space.description}
              </p>

              <div className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 p-4">
                <h4 className="font-bold text-emerald-200 mb-2">
                  Smarter Habit
                </h4>

                <p className="text-slate-200 leading-relaxed">
                  {space.smarterHabit}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">
            Risk Breakdown
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            The biggest risk is assuming a space is safer than it really is.
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
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">
          Smarter Choice vs Risky Choice
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Think about where you are posting and who could see it later.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student sends a rude message in a private chat because they
              believe it will stay between two people forever.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student pauses and chooses not to send the message because it
              could be screenshotted, shared, or used to hurt someone.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">
            Scenario Lab
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice deciding what each online space requires.
          </h2>

          <div className="space-y-6">
            {scenarios.map((scenario) => (
              <div
                key={scenario.title}
                className="rounded-2xl bg-slate-950 border border-slate-800 p-6"
              >
                <h3 className="text-2xl font-bold text-cyan-200 mb-4">
                  {scenario.title}
                </h3>

                <div className="grid lg:grid-cols-2 gap-4">
                  <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
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
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">
          Real-Life Action Steps
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Use these questions before posting, sending, commenting, or joining.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {actionSteps.map((step) => (
            <div
              key={step}
              className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 text-slate-200"
            >
              {step}
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6">
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
                  className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 text-slate-200"
                >
                  {question}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6">
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
                  className="rounded-xl border border-slate-800 bg-slate-900/70 p-4"
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

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">
          Junior Checklist
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Before finishing Lesson 1.3, students should be able to say:
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
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-t border-slate-800">
        <div className="max-w-5xl mx-auto rounded-2xl bg-slate-950 border border-slate-800 p-8 text-center">
          <p className="text-cyan-300 font-semibold mb-3">
            Navigation
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Lesson 1.3 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 1.4 will explain how screenshots, reposts, copied
            messages, and saved content can make online choices last longer
            than expected.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/digital-life-and-online-identity/usernames-profiles-and-first-impressions"
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
              href="/junior/digital-life-and-online-identity/how-online-choices-can-be-saved"
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