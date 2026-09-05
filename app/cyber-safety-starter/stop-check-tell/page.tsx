import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const starterPath = "/cyber-safety-starter";
const previousLesson = `${starterPath}/think-before-you-share`;

const lessonGoals = [
  "Recognize online pressure, urgency, secrecy, and other warning signs that should make you slow down.",
  "Use safer habits when a message includes a prize, suspicious request, unfamiliar link, or request for private information.",
  "Understand that usernames, profile pictures, messages, and follower counts do not prove who a person really is.",
  "Know what to do when online behavior becomes mean, uncomfortable, threatening, or confusing.",
  "Use Stop → Check → Tell and know when a trusted adult should help.",
];

const warningSigns = [
  {
    phrase: "Hurry!",
    meaning:
      "Pressure to act immediately can make it harder to think carefully.",
  },
  {
    phrase: "Don't tell anyone.",
    meaning:
      "A request to hide something from trusted adults is a strong reason to stop and get help.",
  },
  {
    phrase: "You won!",
    meaning:
      "A surprise prize can be exciting, but excitement is not proof that a message is real.",
  },
  {
    phrase: "Click this now.",
    meaning:
      "You do not need to click an unfamiliar link just because a message tells you to.",
  },
  {
    phrase: "Send me your information.",
    meaning:
      "Private information should not be given away simply because someone asks for it.",
  },
  {
    phrase: "You'll get in trouble if you don't.",
    meaning:
      "Fear and threats can be used to pressure people into acting before they think.",
  },
];

const stopCheckTell = [
  {
    step: "1",
    title: "Stop",
    description:
      "Do not click, reply, send information, buy something, or make a fast decision just because a message creates pressure.",
  },
  {
    step: "2",
    title: "Check",
    description:
      "Ask what the message wants, who sent it, whether the request makes sense, what information it asks for, and whether a trusted adult should look at it.",
  },
  {
    step: "3",
    title: "Tell",
    description:
      "Show a trusted adult when something is confusing, suspicious, uncomfortable, threatening, asks for private information, or feels too important to handle alone.",
  },
];

const scamQuestions = [
  "Was I expecting this message?",
  "Do I know who actually sent it?",
  "Is it trying to make me hurry?",
  "Is it asking for a password, passcode, private information, money, or account details?",
  "Is it promising a prize I never entered to win?",
  "Does the link or request make sense for what the message says?",
  "Would I feel comfortable showing this message to a trusted adult?",
];

const linkRules = [
  {
    title: "You do not have to click",
    text:
      "A link can wait. If you are unsure where it goes or why it was sent, stop first.",
  },
  {
    title: "Check the sender",
    text:
      "Ask whether you know the sender and whether the message sounds like something they would really send.",
  },
  {
    title: "Use the normal app or website",
    text:
      "If a message says there is a problem with an account, ask a trusted adult and use the normal app or website rather than trusting a surprise link.",
  },
  {
    title: "Ask before downloading",
    text:
      "Do not download an unfamiliar file or app simply because a message tells you to.",
  },
];

const onlinePeopleRules = [
  {
    title: "Profiles are not proof",
    text:
      "A name, picture, age, school, badge, or follower count can be written or changed by the person using the account.",
  },
  {
    title: "You can stop replying",
    text:
      "You do not have to continue a conversation because someone keeps messaging you.",
  },
  {
    title: "You can keep private information private",
    text:
      "You do not owe anyone your address, school, exact location, password, private pictures, or family information.",
  },
  {
    title: "Secrecy is a warning sign",
    text:
      "If someone asks you to hide the conversation from trusted adults, stop and tell someone you trust.",
  },
  {
    title: "Meeting should be handled by adults",
    text:
      "Do not arrange to meet someone you only know online by yourself. A parent or guardian should know and handle the situation.",
  },
];

const cyberbullyingSteps = [
  {
    title: "Do not join in",
    text:
      "Do not pile on, repost embarrassing content, or add mean comments because other people are doing it.",
  },
  {
    title: "Do not fight back with more cruelty",
    text:
      "Retaliating can make the situation bigger. Focus on getting help instead.",
  },
  {
    title: "Keep enough information to explain what happened",
    text:
      "You may need to show a trusted adult the message, post, username, or conversation so they can understand what happened.",
  },
  {
    title: "Block or report when appropriate",
    text:
      "Use the platform's normal safety tools with help from a trusted adult when needed.",
  },
  {
    title: "Tell a trusted adult",
    text:
      "Cyberbullying is not something you need to solve alone. A trusted adult can help decide the next step.",
  },
];

const trustedAdults = [
  {
    title: "Parent or guardian",
    text:
      "They can help with accounts, devices, messages, settings, reporting, and family rules.",
  },
  {
    title: "Teacher",
    text:
      "A teacher can help when an online problem affects school, classmates, or learning.",
  },
  {
    title: "School counselor",
    text:
      "A counselor can help when online behavior is upsetting, repeated, or affecting how you feel at school.",
  },
  {
    title: "Another responsible adult your family trusts",
    text:
      "Some families may have another trusted adult who can help when a parent or guardian is not immediately available.",
  },
];

const decisionPractice = [
  {
    situation:
      "A message says, “You won a new phone! Click now before your prize disappears.” You never entered a contest.",
    best:
      "Do not click. Stop, check whether the message makes sense, and show it to a trusted adult.",
    why:
      "A surprise prize plus urgency is a reason to slow down and verify instead of reacting.",
  },
  {
    situation:
      "Someone you only know from a game asks for your school name and says, “Don't tell your parents we're talking.”",
    best:
      "Do not share the school name. Stop the conversation and tell a trusted adult.",
    why:
      "Requests for private information plus secrecy are strong warning signs.",
  },
  {
    situation:
      "A friend sends you a link with no explanation and says, “Click this right now.”",
    best:
      "Ask what it is before clicking, and if you are unsure, do not open it.",
    why:
      "Even messages from people you know can be mistaken, forwarded, or sent from an account they are not currently controlling.",
  },
  {
    situation:
      "A group chat starts making fun of a classmate and asks you to repost an embarrassing picture.",
    best:
      "Do not repost it or join the comments. Tell a trusted adult if the situation continues or is serious.",
    why:
      "Respecting other people's privacy and refusing to join harmful behavior are part of online safety.",
  },
  {
    situation:
      "A message says there is a problem with your game account and asks for your password.",
    best:
      "Do not send the password. Ask a trusted adult and check the account through the normal app or website.",
    why:
      "Passwords should not be sent because a surprise message asks for them.",
  },
  {
    situation:
      "Someone online keeps messaging after you say you do not want to talk.",
    best:
      "Stop replying. Use block/report tools with adult help if appropriate and tell a trusted adult.",
    why:
      "You are allowed to end an online conversation and get help.",
  },
];

const guidedActivity = [
  {
    message:
      "“Hurry! Your account will disappear in five minutes. Send your password now.”",
    stop:
      "Do not send anything.",
    check:
      "The message uses urgency and asks for a password. Those are warning signs.",
    tell:
      "Show it to a trusted adult and check the account through the normal app or website.",
  },
  {
    message:
      "“I saw your drawing online. What city do you live in?”",
    stop:
      "Do not give specific location information just because someone asks.",
    check:
      "Ask whether this person really needs to know where you live.",
    tell:
      "If the conversation feels uncomfortable or keeps asking for personal details, tell a trusted adult.",
  },
  {
    message:
      "“Everyone is sharing this embarrassing picture. Send it to three more people.”",
    stop:
      "Do not forward it.",
    check:
      "Sharing it could embarrass or hurt another person.",
    tell:
      "Tell a trusted adult if someone is being targeted or the situation is continuing.",
  },
  {
    message:
      "“Download this file so you can get a free game upgrade.”",
    stop:
      "Do not download the file immediately.",
    check:
      "Ask whether the offer is expected and whether the file comes from a trusted, approved source.",
    tell:
      "Ask a trusted adult before downloading unfamiliar files or apps.",
  },
];

const cyberShieldFive = [
  {
    number: "1",
    word: "Stop",
    meaning: "Do not react immediately.",
  },
  {
    number: "2",
    word: "Check",
    meaning:
      "Ask what the message, person, app, or website wants you to do.",
  },
  {
    number: "3",
    word: "Protect",
    meaning:
      "Protect your device, account, information, privacy, and other people.",
  },
  {
    number: "4",
    word: "Think",
    meaning:
      "Think about what could happen after you click, post, send, download, or reply.",
  },
  {
    number: "5",
    word: "Tell",
    meaning:
      "Ask a trusted adult for help when something feels confusing, suspicious, uncomfortable, or too important to handle alone.",
  },
];

const skillCheck = [
  {
    q: "1. A message tells you to hurry and send private information. What should you do first?",
    choices: [
      "Send it quickly",
      "Stop and slow down",
      "Forward it to everyone",
      "Give the message your password",
    ],
    answer: 1,
    explanation:
      "Pressure is a reason to slow down. Stop first, then check what the message is asking.",
  },
  {
    q: "2. You receive a prize message for a contest you never entered. What is the smartest response?",
    choices: [
      "Click immediately",
      "Assume every prize is real",
      "Stop, question the message, and show it to a trusted adult",
      "Send your password to claim it",
    ],
    answer: 2,
    explanation:
      "A surprise prize and urgency are warning signs. Verify before taking action.",
  },
  {
    q: "3. What does a profile picture prove about someone online?",
    choices: [
      "It proves exactly who they are",
      "It proves their age",
      "Very little by itself",
      "It proves they are safe to trust",
    ],
    answer: 2,
    explanation:
      "Profile pictures, usernames, and follower counts do not prove real identity.",
  },
  {
    q: "4. Someone asks you to keep your conversation secret from trusted adults. What should you do?",
    choices: [
      "Agree immediately",
      "Stop and tell a trusted adult",
      "Send more private information",
      "Create another secret account",
    ],
    answer: 1,
    explanation:
      "Pressure to hide a conversation from trusted adults is a warning sign.",
  },
  {
    q: "5. What is the best response when a group chat is making fun of someone?",
    choices: [
      "Join in so you fit in",
      "Repost the embarrassing content",
      "Do not join in, avoid making it worse, and get adult help when needed",
      "Send the content to more groups",
    ],
    answer: 2,
    explanation:
      "Do not participate in hurtful behavior. Focus on protecting people and getting help.",
  },
  {
    q: "6. A surprise message says there is an account problem and asks you to click a link. What is safest?",
    choices: [
      "Use the link immediately",
      "Ask a trusted adult and check the account using the normal app or website",
      "Reply with your password",
      "Turn off all account protections",
    ],
    answer: 1,
    explanation:
      "Using the normal app or website avoids trusting an unexpected link.",
  },
  {
    q: "7. What does the T in Stop → Check → Tell mean?",
    choices: [
      "Tell a trusted adult when something is confusing, suspicious, uncomfortable, or serious",
      "Tell strangers your password",
      "Tell everyone your location",
      "Tell nobody anything",
    ],
    answer: 0,
    explanation:
      "Getting help from a trusted adult is a core cyber safety skill.",
  },
  {
    q: "8. Which is the strongest summary of this lesson?",
    choices: [
      "Every message online is dangerous",
      "You should handle every online problem by yourself",
      "Slow down, check what is being asked, protect private information, and tell a trusted adult when needed",
      "Never use messaging or social media",
    ],
    answer: 2,
    explanation:
      "The goal is calm, thoughtful decision-making—not fear or trying to solve everything alone.",
  },
];

function LessonSection({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
        {label}
      </p>
      <h2 className="mt-3 text-3xl font-black text-white">{title}</h2>
      <div className="mt-5 text-slate-300">{children}</div>
    </section>
  );
}

function Navigation() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href={previousLesson}
        className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-cyan-400 hover:text-cyan-100"
      >
        Previous Lesson
      </Link>

      <Link
        href={starterPath}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
      >
        Starter Path
      </Link>
    </div>
  );
}

export default function StopCheckTellPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.14),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="flex flex-wrap gap-3 text-xs font-black uppercase tracking-[0.18em]">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-cyan-100">
              Cyber Safety Starter
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-100">
              Lesson 3 of 3
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              35–45 Minutes
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-slate-200">
              Elementary
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson 3
          </p>

          <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Stop, Check, Tell: Messages, Scams & Online Problems
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            You will not always know immediately whether a message, link,
            request, or online conversation is safe. That is okay. The most
            important skill is knowing how to slow down, check what is
            happening, and ask for help when you need it.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-5xl gap-8 px-6 py-10">
        <LessonSection
          label="Lesson Roadmap"
          title="What You Will Learn Today"
        >
          <p className="max-w-3xl leading-8">
            This lesson has six teaching parts, two guided activities, decision
            practice, reflection, and a short skill check. It finishes the
            Cyber Safety Starter Path.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              ["About 6 min", "Pressure and warning signs"],
              ["About 6 min", "Fake prizes and suspicious requests"],
              ["About 6 min", "Links and downloads"],
              ["About 7 min", "People you only know online"],
              ["About 6 min", "Cyberbullying and hurtful behavior"],
              ["About 8 min", "Trusted adults, activities, and skill check"],
            ].map(([time, item]) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                  {time}
                </p>
                <p className="mt-2 font-bold text-white">{item}</p>
              </div>
            ))}
          </div>
        </LessonSection>

        <LessonSection
          label="Learning Goals"
          title="By the End of This Lesson"
        >
          <div className="grid gap-4">
            {lessonGoals.map((goal, index) => (
              <div
                key={goal}
                className="flex gap-4 rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{goal}</p>
              </div>
            ))}
          </div>
        </LessonSection>

        <LessonSection
          label="Part 1"
          title="Pressure Is a Reason to Slow Down"
        >
          <p className="leading-8">
            Some online messages try to make you react before you have time to
            think. They may use excitement, fear, secrecy, or urgency.
          </p>

          <p className="mt-4 leading-8">
            A message being urgent does not mean you need to obey it. In fact,
            pressure is often a good reason to slow down.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {warningSigns.map((item) => (
              <article
                key={item.phrase}
                className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-5 text-yellow-50"
              >
                <h3 className="text-xl font-black">“{item.phrase}”</h3>
                <p className="mt-3 text-sm leading-7">{item.meaning}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-6 text-emerald-50">
            <p className="text-xl font-black">
              Pressure should make you slower, not faster.
            </p>
          </div>
        </LessonSection>

        <LessonSection
          label="Main Rule"
          title="Stop → Check → Tell"
        >
          <p className="leading-8">
            You do not need a different plan for every strange message. Use
            these three steps whenever something online feels confusing,
            suspicious, uncomfortable, or too important to decide alone.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {stopCheckTell.map((item) => (
              <article
                key={item.step}
                className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-300 text-lg font-black text-slate-950">
                  {item.step}
                </span>
                <h3 className="mt-4 text-xl font-black">{item.title}</h3>
                <p className="mt-2 text-sm leading-7">{item.description}</p>
              </article>
            ))}
          </div>
        </LessonSection>

        <LessonSection
          label="Part 2"
          title="Fake Prizes and Suspicious Requests"
        >
          <p className="leading-8">
            Imagine a message suddenly says you won a prize. That can feel
            exciting. But excitement is not proof that the message is real.
          </p>

          <p className="mt-4 leading-8">
            A safer habit is to ask a few questions before doing anything.
          </p>

          <div className="mt-6 grid gap-3">
            {scamQuestions.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-purple-400/25 bg-purple-400/10 p-6 text-purple-50">
            <p className="font-black">Remember</p>
            <p className="mt-2 leading-7">
              Something being exciting, urgent, or important does not make it
              true. You are allowed to stop and verify before acting.
            </p>
          </div>
        </LessonSection>

        <LessonSection
          label="Quick Check"
          title="Would You Slow Down?"
        >
          <p className="leading-8">
            Think about each message before opening the answer.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              [
                "“You won a prize! Send your account password now.”",
                "Yes. Stop. A surprise prize plus a password request is a strong warning sign.",
              ],
              [
                "“Your class project is due tomorrow. Check your normal school page.”",
                "This may be normal, but you can still use the official school page instead of trusting an unexpected link.",
              ],
              [
                "“Don't tell your parents, but send me your address.”",
                "Stop and tell a trusted adult. The request combines private information with secrecy.",
              ],
              [
                "“Click this file right now so you can get free game items.”",
                "Stop. Do not download an unfamiliar file because a message pressures you.",
              ],
            ].map(([message, answer]) => (
              <details
                key={message}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <summary className="cursor-pointer font-black text-white">
                  {message}
                </summary>
                <p className="mt-4 leading-7 text-emerald-200">{answer}</p>
              </details>
            ))}
          </div>
        </LessonSection>

        <LessonSection
          label="Part 3"
          title="Links and Downloads Can Wait"
        >
          <p className="leading-8">
            Links are useful. They help us move from one page to another. But
            you do not need to click an unfamiliar link simply because someone
            sends it to you.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {linkRules.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5 text-cyan-50"
              >
                <h3 className="text-lg font-black">{item.title}</h3>
                <p className="mt-2 text-sm leading-7">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6 text-yellow-50">
            <p className="font-black">Simple rule</p>
            <p className="mt-2 leading-7">
              When you are not sure where a link goes, you do not have to click
              it. Ask first.
            </p>
          </div>
        </LessonSection>

        <LessonSection
          label="Part 4"
          title="People Online: Friendly Does Not Always Mean Known"
        >
          <p className="leading-8">
            Online games, apps, and communities can help people meet others who
            like the same things. That can be fun. But knowing an account
            online is not the same as knowing the person behind it in real life.
          </p>

          <div className="mt-6 grid gap-4">
            {onlinePeopleRules.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"
              >
                <h3 className="text-lg font-black">{item.title}</h3>
                <p className="mt-2 text-sm leading-7">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-6 text-emerald-50">
            <p className="text-xl font-black">
              You can end an online conversation whenever you need to.
            </p>
            <p className="mt-2 leading-7">
              You do not owe someone a reply just because they keep messaging
              you.
            </p>
          </div>
        </LessonSection>

        <LessonSection
          label="Part 5"
          title="Cyberbullying and Hurtful Online Behavior"
        >
          <p className="leading-8">
            Sometimes people use messages, posts, group chats, pictures, or
            comments to embarrass, exclude, or repeatedly hurt someone.
          </p>

          <p className="mt-4 leading-8">
            If this happens to you or someone else, the goal is not to win a
            bigger online argument. The goal is to make the situation safer and
            get help.
          </p>

          <div className="mt-6 grid gap-4">
            {cyberbullyingSteps.map((item, index) => (
              <article
                key={item.title}
                className="flex gap-4 rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-purple-50"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-black">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7">{item.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-blue-400/25 bg-blue-400/10 p-6 text-blue-50">
            <p className="font-black">Being a good bystander matters</p>
            <p className="mt-2 leading-7">
              If other people are piling on, you can choose not to join. You can
              also get help for the person being targeted.
            </p>
          </div>
        </LessonSection>

        <LessonSection
          label="Part 6"
          title="Trusted Adults Are Part of Cyber Safety"
        >
          <p className="leading-8">
            One of the most important lessons in this entire starter path is
            that you are not expected to solve every online problem alone.
          </p>

          <p className="mt-4 leading-8">
            Asking for help is not a failure. It is a safety skill.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {trustedAdults.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5 text-emerald-50"
              >
                <h3 className="text-lg font-black">{item.title}</h3>
                <p className="mt-2 text-sm leading-7">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6 text-yellow-50">
            <p className="font-black">
              Tell a trusted adult when something:
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {[
                "asks for private information",
                "asks you to keep secrets from trusted adults",
                "makes you feel uncomfortable",
                "keeps happening after you want it to stop",
                "threatens or pressures you",
                "involves a strange link or download",
                "targets you or another person with hurtful behavior",
                "feels too confusing or important to handle alone",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-yellow-300/20 bg-slate-950/30 p-3 text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </LessonSection>

        <LessonSection
          label="Guided Activity"
          title="Use Stop → Check → Tell"
        >
          <p className="leading-8">
            Read each fictional message. Decide what you would do at each step
            before opening the answer.
          </p>

          <div className="mt-6 grid gap-5">
            {guidedActivity.map((item, index) => (
              <details
                key={item.message}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <summary className="cursor-pointer font-black leading-7 text-white">
                  Case {index + 1}: {item.message}
                </summary>

                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  <div className="rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                    <p className="font-black">STOP</p>
                    <p className="mt-2 text-sm leading-7">{item.stop}</p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="font-black">CHECK</p>
                    <p className="mt-2 text-sm leading-7">{item.check}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="font-black">TELL</p>
                    <p className="mt-2 text-sm leading-7">{item.tell}</p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </LessonSection>

        <LessonSection
          label="Decision Practice"
          title="Six Everyday Online Choices"
        >
          <p className="leading-8">
            Decide what you would do before opening each answer.
          </p>

          <div className="mt-6 grid gap-4">
            {decisionPractice.map((item, index) => (
              <details
                key={item.situation}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <summary className="cursor-pointer font-black leading-7 text-white">
                  {index + 1}. {item.situation}
                </summary>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="font-black">Best choice</p>
                  <p className="mt-2 text-sm leading-7">{item.best}</p>
                  <p className="mt-3 text-sm leading-7 text-emerald-100">
                    Why: {item.why}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </LessonSection>

        <LessonSection
          label="Starter Path Final Tool"
          title="The CyberShield 5"
        >
          <p className="leading-8">
            You have now learned three major ideas: protect your device, think
            before you share, and slow down when something online creates
            pressure. The CyberShield 5 puts those ideas into one simple tool.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-5">
            {cyberShieldFive.map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5 text-cyan-50"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300 font-black text-slate-950">
                  {item.number}
                </span>
                <h3 className="mt-4 text-xl font-black">{item.word}</h3>
                <p className="mt-2 text-sm leading-6">{item.meaning}</p>
              </article>
            ))}
          </div>
        </LessonSection>

        <LessonSection
          label="Remember This"
          title="Six Rules for Difficult Online Situations"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {[
              [
                "1",
                "Pressure means slow down",
                "Urgency, fear, excitement, or secrecy should make you pause and think.",
              ],
              [
                "2",
                "Private information stays protected",
                "Do not send passwords, exact location, address, or other private information because a message asks.",
              ],
              [
                "3",
                "Links can wait",
                "You do not have to click or download something you do not understand.",
              ],
              [
                "4",
                "Profiles are not proof",
                "Online names, pictures, and follower counts do not prove identity.",
              ],
              [
                "5",
                "Do not join hurtful behavior",
                "Avoid forwarding embarrassing content or adding mean comments.",
              ],
              [
                "6",
                "Ask for help",
                "A trusted adult is part of your online safety team.",
              ],
            ].map(([number, title, text]) => (
              <article
                key={number}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">
                    {number}
                  </span>
                  <h3 className="text-lg font-black">{title}</h3>
                </div>
                <p className="mt-3 text-sm leading-7">{text}</p>
              </article>
            ))}
          </div>
        </LessonSection>

        <LessonSection
          label="Reflection"
          title="Think About What You Would Do"
        >
          <p className="leading-8">
            You do not need to type these answers online. Think about them or
            discuss them with a trusted adult.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Which warning sign would make you slow down fastest?",
              "What would you do if a message asked you to keep a conversation secret from trusted adults?",
              "Who are two trusted adults you could ask for help?",
              "How can you help if a classmate is being treated badly in a group chat?",
              "Which part of the CyberShield 5 do you think you will use most often?",
            ].map((question, index) => (
              <div
                key={question}
                className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-purple-50"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                  Reflection {index + 1}
                </p>
                <p className="mt-2 leading-7">{question}</p>
              </div>
            ))}
          </div>
        </LessonSection>

        <LessonSection
          label="Skill Check"
          title="Check What You Learned"
        >
          <p className="leading-8">
            Choose your answer first. Then reveal the explanation.
          </p>

          <div className="mt-6 grid gap-5">
            {skillCheck.map((item) => (
              <article
                key={item.q}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black leading-7 text-white">{item.q}</h3>

                <div className="mt-4 grid gap-2">
                  {item.choices.map((choice, index) => (
                    <div
                      key={choice}
                      className="rounded-xl border border-slate-700 bg-slate-900 p-3 text-sm text-slate-300"
                    >
                      {String.fromCharCode(65 + index)}. {choice}
                    </div>
                  ))}
                </div>

                <details className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                  <summary className="cursor-pointer font-black text-emerald-100">
                    Reveal answer
                  </summary>
                  <p className="mt-3 text-sm font-bold text-emerald-50">
                    Best answer: {String.fromCharCode(65 + item.answer)}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-emerald-100">
                    {item.explanation}
                  </p>
                </details>
              </article>
            ))}
          </div>
        </LessonSection>

        <LessonSection
          label="Starter Path Complete"
          title="You Finished All 3 Cyber Safety Starter Lessons"
        >
          <p className="leading-8">
            You started by learning how to protect a device. Then you learned
            how to protect your privacy and think before sharing. Finally, you
            learned how to slow down when messages, links, people, or online
            situations create pressure.
          </p>

          <div className="mt-6 rounded-3xl border border-emerald-400/30 bg-emerald-400/10 p-6 text-emerald-50">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
              Cyber Safety Starter Promise
            </p>

            <div className="mt-5 grid gap-3">
              {[
                "I know how to protect my device and accounts.",
                "I think before I share information online.",
                "I slow down when messages pressure me.",
                "I respect other people's privacy.",
                "I know when to stop and ask a trusted adult for help.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-emerald-300/20 bg-slate-950/30 p-4 font-semibold"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={previousLesson}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-cyan-400 hover:text-cyan-100"
            >
              Previous Lesson
            </Link>

            <Link
              href={starterPath}
              className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
            >
              Return to Starter Path
            </Link>
          </div>
        </LessonSection>

        <section className="rounded-3xl border border-yellow-400/25 bg-yellow-400/10 p-6 text-yellow-50">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">
            Final Safety Reminder
          </p>
          <h2 className="mt-2 text-2xl font-black">
            Getting help is part of being safe online
          </h2>
          <p className="mt-3 leading-7">
            If an online situation is confusing, threatening, uncomfortable,
            asks for private information, pressures you to keep secrets, or
            keeps happening after you want it to stop, tell a trusted adult.
          </p>
        </section>
      </div>

      <Footer />
    </main>
  );
}