import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const starterPath = "/cyber-safety-starter";
const previousLesson = `${starterPath}/first-device-basics`;
const nextLesson = `${starterPath}/stop-check-tell`;

const lessonGoals = [
  "Know which kinds of information are usually okay to share, which deserve extra thought, and which should stay private.",
  "Understand how photos and videos can reveal information through backgrounds, uniforms, signs, schedules, and location clues.",
  "Understand the difference between public sharing, limited sharing, and truly private information.",
  "Use safer habits for friend requests, followers, messages, posts, comments, screenshots, and group chats.",
  "Use the Pause → Think → Share rule before posting or sending something online.",
];

const infoGroups = [
  {
    level: "Usually okay to share",
    description:
      "These are general facts that normally do not identify exactly where you live, study, or spend your time.",
    examples: [
      "Favorite color",
      "Favorite sport",
      "Favorite food",
      "A hobby you enjoy",
      "A general favorite subject",
    ],
    note:
      "Even with simple information, you never have to answer someone online just because they ask.",
  },
  {
    level: "Think carefully or ask first",
    description:
      "These things can be fine in some situations, but they may reveal more than you expect.",
    examples: [
      "Photos and videos",
      "School activities",
      "Family information",
      "Your daily schedule",
      "Pictures with other people",
    ],
    note:
      "Before sharing, think about who can see it, what is visible, and whether another person needs to give permission.",
  },
  {
    level: "Keep private",
    description:
      "These can give other people too much information about you, your family, your accounts, or where you are.",
    examples: [
      "Home address",
      "Passwords or passcodes",
      "Exact current location",
      "Private account or security information",
      "Personal contact information",
    ],
    note:
      "If someone online asks for private information, you can stop the conversation and tell a trusted adult.",
  },
];

const photoChecks = [
  {
    title: "Look at yourself",
    text:
      "Is there anything on your clothing, badge, paper, or screen that shows information you do not want to share?",
  },
  {
    title: "Look behind yourself",
    text:
      "Check signs, house numbers, school names, schedules, computer screens, mail, or other details in the background.",
  },
  {
    title: "Think about location",
    text:
      "Could the photo show exactly where you are right now or where you are going next?",
  },
  {
    title: "Think about other people",
    text:
      "If another person is in the photo or video, ask whether they are okay with it being shared.",
  },
];

const socialMediaBasics = [
  {
    title: "Public",
    text:
      "A public post may be visible to many people, including people you do not know.",
  },
  {
    title: "Limited",
    text:
      "A private or friends-only setting may limit who can see something, but it does not guarantee that it will stay secret forever.",
  },
  {
    title: "Direct message",
    text:
      "A message may be sent to one person or a small group, but someone can still save, copy, or screenshot it.",
  },
  {
    title: "Group chat",
    text:
      "A message sent to a group can be seen by everyone in that group and may be forwarded outside it.",
  },
];

const trustRules = [
  {
    title: "A username does not prove identity",
    text:
      "A profile name, picture, follower count, or message does not prove that a person is exactly who they say they are.",
  },
  {
    title: "You do not owe anyone personal information",
    text:
      "Someone being friendly, funny, popular, or interested in the same game does not mean you must share private details.",
  },
  {
    title: "You can ignore or decline",
    text:
      "You do not have to accept every friend request, follower request, group invite, or message.",
  },
  {
    title: "Private conversations should not require secrecy",
    text:
      "If someone pressures you to keep a conversation secret from trusted adults, that is a reason to stop and get help.",
  },
];

const digitalFootprintIdeas = [
  "Posts you create",
  "Comments you write",
  "Photos and videos you upload",
  "Things you repost or forward",
  "Public usernames and profiles",
  "Messages or screenshots that other people save",
];

const pauseThinkShare = [
  {
    step: "1",
    word: "Pause",
    text:
      "Do not post or send immediately just because you feel excited, angry, embarrassed, or pressured.",
  },
  {
    step: "2",
    word: "Think",
    text:
      "Ask who will see it, what it reveals, whether it could hurt someone, and whether you would be okay with a trusted adult seeing it.",
  },
  {
    step: "3",
    word: "Share",
    text:
      "If it still seems appropriate, respectful, and safe, share it with the audience you actually intend.",
  },
];

const decisionPractice = [
  {
    situation:
      "You take a fun photo at home, but your house number is clearly visible in the background.",
    best:
      "Do not post it yet. Crop, retake, or choose a different photo that does not show the house number.",
    why:
      "The photo may reveal more location information than you intended.",
  },
  {
    situation:
      "A new account follows you and asks what school you attend.",
    best:
      "Do not share the school name. You can ignore, decline, or tell a trusted adult if the message feels uncomfortable.",
    why:
      "A stranger online does not need specific information about where you go to school.",
  },
  {
    situation:
      "Your friend sends a funny photo of themselves in a private chat.",
    best:
      "Do not repost or forward it without permission.",
    why:
      "Respecting other people's privacy is part of online safety.",
  },
  {
    situation:
      "You are angry and want to post a mean comment immediately.",
    best:
      "Pause before posting. Give yourself time to cool down and think about the effect on the other person.",
    why:
      "Posts and comments can hurt people and may be difficult to take back completely.",
  },
  {
    situation:
      "A group chat message says, “Don't show adults what we're talking about.”",
    best:
      "Do not agree to secrecy just because the group asks. If the conversation is uncomfortable or worrying, tell a trusted adult.",
    why:
      "Pressure to hide conversations from trusted adults is a warning sign.",
  },
];

const privacyChecklist = [
  "Does this show my exact location?",
  "Does this show my school, house number, schedule, or personal contact information?",
  "Does this include another person who may not want it shared?",
  "Would I be okay if a parent, guardian, or teacher saw this?",
  "Could this embarrass, pressure, or hurt someone?",
  "Am I sharing because I really want to, or because someone is pressuring me?",
  "Do I understand who can see it?",
  "Would I still be comfortable with this being seen later?",
];

const skillCheck = [
  {
    q: "1. Which information should usually stay private?",
    choices: [
      "Favorite color",
      "Home address",
      "Favorite sport",
      "Favorite food",
    ],
    answer: 1,
    explanation:
      "A home address can tell someone exactly where you live, so it should stay private.",
  },
  {
    q: "2. Why should you check the background of a photo before posting it?",
    choices: [
      "The background can reveal things like school names, house numbers, schedules, or location clues",
      "Backgrounds always make photos blurry",
      "Every background is dangerous",
      "Photos cannot be shared online",
    ],
    answer: 0,
    explanation:
      "Background details can reveal more information than you planned to share.",
  },
  {
    q: "3. What does a private or friends-only account guarantee?",
    choices: [
      "Everything will stay secret forever",
      "Nothing can ever be copied",
      "It may limit who can see content, but it cannot guarantee that content will never be saved or shared",
      "Only family members can see it",
    ],
    answer: 2,
    explanation:
      "Privacy settings can reduce the audience, but screenshots, forwarding, and saved copies may still happen.",
  },
  {
    q: "4. A profile has a realistic photo and many followers. What does that prove?",
    choices: [
      "The person is definitely who they claim to be",
      "The person is safe to trust with private information",
      "Very little about the person's real identity",
      "The person must attend your school",
    ],
    answer: 2,
    explanation:
      "Profile photos, usernames, and follower counts do not prove someone's real identity.",
  },
  {
    q: "5. What is a digital footprint?",
    choices: [
      "A shoe size",
      "The trail created by things you post, share, comment on, upload, or leave online",
      "A phone battery setting",
      "A password type",
    ],
    answer: 1,
    explanation:
      "Your digital footprint is the trail created by online actions and shared content.",
  },
  {
    q: "6. What should you do before reposting a friend's photo?",
    choices: [
      "Post it immediately",
      "Ask for permission",
      "Add their home address",
      "Send it to as many people as possible",
    ],
    answer: 1,
    explanation:
      "Respecting someone else's privacy means asking before sharing their image.",
  },
  {
    q: "7. What is the first step in Pause → Think → Share?",
    choices: [
      "Share",
      "Pause",
      "Delete your account",
      "Accept every request",
    ],
    answer: 1,
    explanation:
      "Pausing gives you time to make a better decision instead of reacting immediately.",
  },
  {
    q: "8. Which is the strongest summary of this lesson?",
    choices: [
      "Never post anything online",
      "Think about what information a post reveals, who can see it, and whether sharing it is respectful and safe",
      "Share everything only with friends",
      "Follower count proves who someone is",
    ],
    answer: 1,
    explanation:
      "The goal is thoughtful, respectful sharing—not fear or avoiding the internet completely.",
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
        className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-purple-400 hover:text-purple-100"
      >
        Starter Path
      </Link>

      <Link
        href={nextLesson}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
      >
        Next Lesson
      </Link>
    </div>
  );
}

export default function ThinkBeforeYouSharePage() {
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
              Lesson 2 of 3
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              35–45 Minutes
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-slate-200">
              Elementary
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson 2
          </p>

          <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Think Before You Share: Privacy & Social Media
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Sharing online can be fun. You can show a drawing, talk about a
            hobby, message friends, or celebrate something you are proud of.
            The important skill is learning to decide what should be shared,
            what deserves extra thought, and what should stay private.
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
            practice, reflection, and a short skill check. Read each part in
            order and take time to think about your own online choices.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              ["About 6 min", "What counts as personal information"],
              ["About 7 min", "Photos, videos, and location clues"],
              ["About 6 min", "Public, limited, and private sharing"],
              ["About 7 min", "Followers, friend requests, and online trust"],
              ["About 5 min", "Digital footprints and screenshots"],
              ["About 8 min", "Guided activity, reflection, and skill check"],
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
          title="Not All Information Is the Same"
        >
          <p className="leading-8">
            One of the most useful privacy skills is learning that different
            information deserves different levels of protection.
          </p>

          <p className="mt-4 leading-8">
            Saying that you like soccer is very different from sharing your
            exact home address. Posting that your favorite food is pizza is very
            different from telling a stranger where you will be after school.
          </p>

          <div className="mt-6 grid gap-5">
            {infoGroups.map((group, index) => (
              <article
                key={group.level}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300 font-black text-slate-950">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-black text-white">
                    {group.level}
                  </h3>
                </div>

                <p className="mt-4 leading-7 text-slate-300">
                  {group.description}
                </p>

                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  {group.examples.map((example) => (
                    <div
                      key={example}
                      className="rounded-xl border border-slate-700 bg-slate-900 p-4 text-sm text-slate-300"
                    >
                      {example}
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-xl border border-purple-400/25 bg-purple-400/10 p-4 text-sm leading-7 text-purple-50">
                  {group.note}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-6 text-emerald-50">
            <p className="text-lg font-black">The big idea</p>
            <p className="mt-2 leading-7">
              You do not need to be afraid of sharing. You just need to think
              about what the information tells other people and whether they
              really need to know it.
            </p>
          </div>
        </LessonSection>

        <LessonSection
          label="Quick Check"
          title="Which Group Does It Belong In?"
        >
          <p className="leading-8">
            Think about each item before opening the answer.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              [
                "Your favorite sport",
                "Usually okay to share. It is a general interest and does not usually identify exactly where you live or spend your time.",
              ],
              [
                "A photo showing your school name and class schedule",
                "Think carefully or ask first. The image may reveal where you go and when you are there.",
              ],
              [
                "Your account password",
                "Keep private. Passwords protect your accounts.",
              ],
              [
                "Your exact current location",
                "Keep private unless a trusted adult and the situation clearly require sharing it.",
              ],
            ].map(([item, answer]) => (
              <details
                key={item}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <summary className="cursor-pointer font-black text-white">
                  {item}
                </summary>
                <p className="mt-4 leading-7 text-emerald-200">{answer}</p>
              </details>
            ))}
          </div>
        </LessonSection>

        <LessonSection
          label="Part 2"
          title="A Photo Can Share More Than the Main Subject"
        >
          <p className="leading-8">
            Imagine you take a photo of a new backpack. You may think the only
            thing you are sharing is the backpack. But the background might also
            show your school name, a house number, a schedule, another person,
            or a location sign.
          </p>

          <p className="mt-4 leading-8">
            Before posting a photo or video, look at the whole picture.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {photoChecks.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5 text-cyan-50"
              >
                <h3 className="text-lg font-black">{item.title}</h3>
                <p className="mt-2 text-sm leading-7">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-blue-400/25 bg-blue-400/10 p-6 text-center text-blue-50">
            <p className="text-2xl font-black">
              Before posting a photo: Look at yourself. Look behind yourself.
              Think about who will see it.
            </p>
          </div>
        </LessonSection>

        <LessonSection
          label="Guided Activity"
          title="The Background Check"
        >
          <p className="leading-8">
            Pretend you are deciding whether each photo is ready to post. You do
            not need to use a real photo.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              {
                case:
                  "A picture of your art project. The background is a plain wall.",
                think:
                  "Is there any private information visible?",
                answer:
                  "Probably little or none. You should still think about who will see the post and whether anyone else appears in it.",
              },
              {
                case:
                  "A picture of your shoes outside your house. The house number is visible.",
                think:
                  "Does the background reveal where you live?",
                answer:
                  "Yes. Retake or crop the photo before sharing it.",
              },
              {
                case:
                  "A team photo after a school event. Several classmates are clearly visible.",
                think:
                  "Do the other people know the photo may be posted?",
                answer:
                  "Ask permission and follow school or family rules before sharing a group photo.",
              },
              {
                case:
                  "A photo of your desk. A paper with your full schedule is visible.",
                think:
                  "Could the paper reveal information about where you will be?",
                answer:
                  "Yes. Move or cover the schedule before taking the picture.",
              },
            ].map((item, index) => (
              <details
                key={item.case}
                className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5"
              >
                <summary className="cursor-pointer font-black text-purple-50">
                  Photo {index + 1}: {item.case}
                </summary>
                <p className="mt-4 text-sm font-bold text-purple-100">
                  Think first: {item.think}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-200">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </LessonSection>

        <LessonSection
          label="Part 3"
          title="Public, Limited, and Private Are Different"
        >
          <p className="leading-8">
            Online services can have different sharing settings. Some things
            may be public. Some may be visible only to approved friends or
            followers. Some may be sent in direct messages.
          </p>

          <p className="mt-4 leading-8">
            These settings are useful, but they do not turn something into a
            guaranteed secret.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {socialMediaBasics.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6 text-yellow-50">
            <p className="font-black">Remember</p>
            <p className="mt-2 leading-7">
              “Private” online often means “more limited,” not “guaranteed to
              stay secret forever.”
            </p>
          </div>
        </LessonSection>

        <LessonSection
          label="Part 4"
          title="Followers and Friend Requests Do Not Prove Trust"
        >
          <p className="leading-8">
            When you meet someone face to face, you can usually see who they
            are. Online, you may only see a username, profile picture, bio, or
            messages.
          </p>

          <p className="mt-4 leading-8">
            Those things can tell you something about an account, but they do
            not prove the person's real identity.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {trustRules.map((item) => (
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
              You never owe someone online personal information, pictures,
              secrets, or a private conversation.
            </p>
          </div>
        </LessonSection>

        <LessonSection
          label="Part 5"
          title="Your Digital Footprint"
        >
          <p className="leading-8">
            Your digital footprint is the trail created by things you do and
            share online.
          </p>

          <p className="mt-4 leading-8">
            That does not mean every click follows you forever. It means that
            things you post, send, or share can sometimes be saved, copied,
            forwarded, or seen later.
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {digitalFootprintIdeas.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-700 bg-slate-950 p-4 text-sm text-slate-300"
              >
                <span className="mr-2 font-black text-cyan-300">•</span>
                {item}
              </div>
            ))}
          </div>

          <h3 className="mt-8 text-2xl font-black text-white">
            Screenshots matter too
          </h3>

          <p className="mt-3 leading-8">
            A post may disappear from your screen later, but another person may
            have saved or screenshotted it. That is another reason to think
            before sharing.
          </p>

          <div className="mt-6 rounded-2xl border border-purple-400/25 bg-purple-400/10 p-6 text-purple-50">
            <p className="font-black">Ask yourself</p>
            <p className="mt-2 leading-7">
              “Would I still be okay with this if someone saved it or showed it
              to a trusted adult?”
            </p>
          </div>
        </LessonSection>

        <LessonSection
          label="Part 6"
          title="Respect Other People's Privacy Too"
        >
          <p className="leading-8">
            Cyber safety is not only about protecting yourself. It also means
            protecting and respecting other people.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Ask before posting a photo or video of someone else.",
              "Do not forward a private message just to embarrass someone.",
              "Do not share another person's phone number, address, school information, or other personal details.",
              "Do not repost embarrassing content because everyone else is doing it.",
              "If someone asks you to remove a photo of them, take the request seriously and get adult help if needed.",
            ].map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5 text-emerald-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 leading-8">
            A good online community is built by people who protect privacy,
            respect boundaries, and think about how their choices affect
            others.
          </p>
        </LessonSection>

        <LessonSection
          label="Main Rule"
          title="Pause → Think → Share"
        >
          <p className="leading-8">
            You do not need to memorize dozens of rules before every post.
            Instead, use this three-step habit.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {pauseThinkShare.map((item) => (
              <article
                key={item.step}
                className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-300 text-lg font-black text-slate-950">
                  {item.step}
                </span>
                <h3 className="mt-4 text-xl font-black">{item.word}</h3>
                <p className="mt-2 text-sm leading-7">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-blue-400/25 bg-blue-400/10 p-6 text-blue-50">
            <p className="font-black">Five questions to ask while you think</p>
            <div className="mt-4 grid gap-3">
              {[
                "Would I be okay if a parent, guardian, or teacher saw this?",
                "Does this reveal something private?",
                "Could this embarrass or hurt someone?",
                "Do I have permission if another person is included?",
                "Am I choosing to share, or am I being pressured?",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-blue-300/20 bg-slate-950/30 p-3 text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </LessonSection>

        <LessonSection
          label="Decision Practice"
          title="Five Sharing Choices"
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
                <summary className="cursor-pointer font-black text-white">
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
          label="Guided Activity"
          title="The Think Before You Share Checklist"
        >
          <p className="leading-8">
            Pretend you are about to post a photo, send a message, or share
            something in a group. Read all eight questions before deciding.
          </p>

          <div className="mt-6 grid gap-4">
            {privacyChecklist.map((item, index) => (
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
        </LessonSection>

        <LessonSection
          label="Remember This"
          title="Six Privacy Rules"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {[
              [
                "1",
                "Protect private information",
                "Passwords, exact location, home address, and personal contact information deserve strong protection.",
              ],
              [
                "2",
                "Check the whole photo",
                "Look for background details, location clues, school information, and other people.",
              ],
              [
                "3",
                "Know your audience",
                "Public, friends-only, and direct messages have different audiences, but none guarantee secrecy.",
              ],
              [
                "4",
                "Do not confuse profiles with proof",
                "Usernames, photos, and follower counts do not prove a person's real identity.",
              ],
              [
                "5",
                "Respect other people's privacy",
                "Ask before sharing their photos, messages, or personal information.",
              ],
              [
                "6",
                "Pause before sharing",
                "Give yourself time to think about privacy, respect, and future effects.",
              ],
            ].map(([number, title, text]) => (
              <article
                key={number}
                className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5 text-cyan-50"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300 font-black text-slate-950">
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
          title="Think About Your Own Online Choices"
        >
          <p className="leading-8">
            You do not have to type these answers online. Think about them or
            discuss them with a trusted adult.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "What is one type of information you now think deserves more protection?",
              "What is one background detail you would check before posting a photo?",
              "Why does a private account not guarantee that something will stay secret forever?",
              "How can you respect another person's privacy online?",
              "Which part of Pause → Think → Share do you think will help you most?",
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
          label="Lesson Complete"
          title="You Finished Lesson 2"
        >
          <p className="leading-8">
            You now know how to separate general information from private
            information, check photos for hidden details, think about who can
            see a post, be careful with online profiles, understand digital
            footprints, and respect other people's privacy.
          </p>

          <div className="mt-6 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-6 text-emerald-50">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
              Your Lesson 2 Outcome
            </p>
            <p className="mt-3 text-xl font-black">
              I can protect my private information, check what a post reveals,
              respect other people's privacy, and use Pause → Think → Share
              before I send or post something.
            </p>
          </div>

          <div className="mt-8">
            <Navigation />
          </div>
        </LessonSection>

        <section className="rounded-3xl border border-yellow-400/25 bg-yellow-400/10 p-6 text-yellow-50">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">
            Safety Reminder
          </p>
          <h2 className="mt-2 text-2xl font-black">
            You can stop a conversation and ask for help
          </h2>
          <p className="mt-3 leading-7">
            If someone online asks for private information, pictures, secrets,
            exact location, or makes you feel pressured or uncomfortable, you
            can stop responding and tell a trusted adult.
          </p>
        </section>
      </div>

      <Footer />
    </main>
  );
}