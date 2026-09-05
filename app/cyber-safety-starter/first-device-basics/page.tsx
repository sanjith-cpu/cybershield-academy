import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const starterPath = "/cyber-safety-starter";
const nextLesson = `${starterPath}/think-before-you-share`;

const lessonGoals = [
  "Understand why a phone, tablet, laptop, or gaming device needs protection.",
  "Know the difference between a device passcode and an account password.",
  "Use simple password and passcode habits that make accounts harder for other people to guess.",
  "Know why updates, apps, downloads, and permissions deserve attention.",
  "Use a simple plan when something unexpected happens on a device.",
];

const deviceExamples = [
  {
    title: "Phone",
    contains:
      "Messages, photos, contacts, apps, school accounts, game accounts, and sometimes location information.",
  },
  {
    title: "Tablet",
    contains:
      "Games, schoolwork, videos, photos, accounts, messages, and saved app information.",
  },
  {
    title: "Laptop",
    contains:
      "Documents, schoolwork, browser accounts, downloads, email, saved files, and other personal information.",
  },
  {
    title: "Gaming device",
    contains:
      "Game accounts, usernames, purchases, messages, friends lists, and saved progress.",
  },
];

const protectRules = [
  {
    title: "Lock it",
    text: "Use the device lock your family has chosen. A locked device helps stop another person from opening it and looking through your information.",
  },
  {
    title: "Keep it with you",
    text: "Do not leave an unlocked device sitting where other people can easily use it without permission.",
  },
  {
    title: "Ask before changing important settings",
    text: "Security, privacy, account, and family settings can affect how the whole device works. Ask a parent or guardian before making changes you do not understand.",
  },
  {
    title: "Tell an adult if the device is lost",
    text: "Do not hide it. The faster a trusted adult knows, the faster they can help protect the device and connected accounts.",
  },
];

const passwordRules = [
  {
    title: "Do not use easy guesses",
    text: "Names, birthdays, simple number patterns, and very common words can be easier for other people to guess.",
  },
  {
    title: "Do not trade passwords with friends",
    text: "A password is not a friendship test. Friends can still be good friends without knowing each other's account passwords.",
  },
  {
    title: "Use different passwords when your family asks you to",
    text: "Using one password everywhere can make several accounts harder to protect if that password is ever exposed.",
  },
  {
    title: "Use a password manager or family-approved method when appropriate",
    text: "You do not have to memorize everything by yourself. A parent or guardian may help you use a safe way to store account passwords.",
  },
];

const permissionExamples = [
  {
    app: "Camera app",
    permission: "Camera",
    makesSense: "Yes",
    reason:
      "A camera app needs the camera to take pictures or videos.",
  },
  {
    app: "Video calling app",
    permission: "Microphone",
    makesSense: "Usually",
    reason:
      "A video calling app needs the microphone when you speak.",
  },
  {
    app: "Flashlight app",
    permission: "Contacts",
    makesSense: "Question it",
    reason:
      "A basic flashlight normally does not need your contacts to turn on a light.",
  },
  {
    app: "Drawing app",
    permission: "Location",
    makesSense: "Question it",
    reason:
      "A simple drawing app may not need to know where you are.",
  },
  {
    app: "Photo editing app",
    permission: "Photos",
    makesSense: "Maybe",
    reason:
      "It may need photo access if you choose a picture to edit, but you should still understand what access you are giving.",
  },
];

const stopDontClickTell = [
  {
    step: "1",
    title: "Stop",
    text: "Do not rush. If the screen looks strange, surprising, or scary, slow down first.",
  },
  {
    step: "2",
    title: "Do not keep clicking",
    text: "Repeatedly tapping buttons can make it harder to understand what happened.",
  },
  {
    step: "3",
    title: "Tell a trusted adult",
    text: "Show the screen to a parent, guardian, teacher, or another responsible adult your family trusts.",
  },
];

const quickDecisions = [
  {
    situation:
      "You finish using your tablet at a library and are about to walk away.",
    best:
      "Lock the tablet and take it with you.",
    why:
      "A locked device protects your information when you are not actively using it.",
  },
  {
    situation:
      "A friend says, “If we are really friends, tell me your game password.”",
    best:
      "Do not share the password.",
    why:
      "Passwords protect accounts. Friendship does not require password sharing.",
  },
  {
    situation:
      "A new game asks for permission to use your microphone.",
    best:
      "Ask why the game needs it and check with a trusted adult if you are unsure.",
    why:
      "Permissions should make sense for what the app needs to do.",
  },
  {
    situation:
      "Your device says an update is available.",
    best:
      "Follow your family's update rules and install approved updates.",
    why:
      "Updates often improve safety, fix problems, and improve how the device works.",
  },
  {
    situation:
      "A strange pop-up appears and tells you to press a button immediately.",
    best:
      "Stop, do not keep clicking, and tell a trusted adult.",
    why:
      "Urgent or confusing screens are a good reason to slow down and get help.",
  },
];

const guidedChecklist = [
  "Does the device have a lock or passcode?",
  "Do I know which account belongs to me?",
  "Do I know which trusted adult can help with the device?",
  "Do I know whether automatic updates are turned on or how my family handles updates?",
  "Do I know that I should ask before downloading an unfamiliar app?",
  "Do I know that permissions should match what an app actually needs?",
  "Do I know what to do if I lose the device?",
  "Do I know the Stop → Don't Keep Clicking → Tell rule?",
];

const skillCheck = [
  {
    q: "1. Why should a phone or tablet be locked when you are not using it?",
    choices: [
      "To make the screen darker",
      "To help protect the information and accounts on the device",
      "To make apps load faster",
      "To improve the battery color",
    ],
    answer:
      "Best answer: To help protect the information and accounts on the device.",
  },
  {
    q: "2. Which is the best reason not to share a password with a friend?",
    choices: [
      "Passwords are boring",
      "Passwords protect your accounts and should not be used as a friendship test",
      "Friends do not use apps",
      "Passwords only work at school",
    ],
    answer:
      "Best answer: Passwords protect your accounts and should not be used as a friendship test.",
  },
  {
    q: "3. What should you do before downloading an unfamiliar app?",
    choices: [
      "Download it as fast as possible",
      "Ask a trusted adult or follow your family's app-download rules",
      "Turn off every security setting",
      "Share your password with the app",
    ],
    answer:
      "Best answer: Ask a trusted adult or follow your family's app-download rules.",
  },
  {
    q: "4. A flashlight app asks for your contacts. What is the smartest first thought?",
    choices: [
      "Every app needs contacts",
      "That permission may not match what the app needs to do",
      "Contacts make the flashlight brighter",
      "Give every permission automatically",
    ],
    answer:
      "Best answer: That permission may not match what the app needs to do.",
  },
  {
    q: "5. Why do approved updates matter?",
    choices: [
      "They can fix problems and improve safety",
      "They always add games",
      "They remove the need for passwords",
      "They make every website safe",
    ],
    answer:
      "Best answer: They can fix problems and improve safety.",
  },
  {
    q: "6. What should you do if your device is lost?",
    choices: [
      "Hide it from adults",
      "Tell a trusted adult as soon as possible",
      "Create a new social media account",
      "Ignore it for several days",
    ],
    answer:
      "Best answer: Tell a trusted adult as soon as possible.",
  },
  {
    q: "7. A strange screen tells you to click a button right now. What should you do first?",
    choices: [
      "Keep clicking until it disappears",
      "Stop and slow down",
      "Give the screen your password",
      "Send it to everyone",
    ],
    answer:
      "Best answer: Stop and slow down. Then avoid repeated clicking and tell a trusted adult.",
  },
  {
    q: "8. Which sentence is the best summary of this lesson?",
    choices: [
      "Devices are safe no matter what you do",
      "Protect the device, protect the account, think about permissions, keep it updated, and ask for help when something feels wrong",
      "Never use technology",
      "Only adults need cyber safety",
    ],
    answer:
      "Best answer: Protect the device, protect the account, think about permissions, keep it updated, and ask for help when something feels wrong.",
  },
];

function LessonSection({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
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

export default function FirstDeviceBasicsPage() {
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
              Lesson 1 of 3
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              30–40 Minutes
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-slate-200">
              Elementary
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson 1
          </p>

          <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Your First Device: The Basics of Staying Safe
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            A phone, tablet, laptop, or gaming device can hold a lot of
            information about you. Learning to protect that device is one of the
            first steps toward becoming a smart and responsible technology user.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={starterPath}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-cyan-400 hover:text-cyan-100"
            >
              Starter Path
            </Link>

            <a
              href="#lesson-start"
              className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
            >
              Begin Lesson
            </a>

            <Link
              href={nextLesson}
              className="rounded-xl border border-purple-400/40 bg-purple-400/10 px-5 py-3 font-black text-purple-100 transition hover:bg-purple-400/20"
            >
              Next Lesson
            </Link>
          </div>
        </div>
      </section>

      <div
        id="lesson-start"
        className="mx-auto grid max-w-5xl gap-8 px-6 py-10"
      >
        <LessonSection
          label="Lesson Roadmap"
          title="What You Will Learn Today"
        >
          <p className="max-w-3xl leading-8">
            This lesson has six teaching parts, one guided activity, decision
            practice, and a short skill check. You do not need to rush. Read,
            think, and move through each part in order.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              ["About 5 min", "Why your device needs protection"],
              ["About 6 min", "Passcodes and passwords"],
              ["About 5 min", "Updates"],
              ["About 7 min", "Apps, downloads, and permissions"],
              ["About 5 min", "What to do when something feels wrong"],
              ["About 7 min", "Guided activity and skill check"],
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
          title="Your Device Holds More Than Apps"
        >
          <p className="leading-8">
            When people think about a phone or tablet, they often think about
            games, videos, messages, or schoolwork. But a device can also hold
            information that belongs to you.
          </p>

          <p className="mt-4 leading-8">
            It may remember your accounts. It may contain pictures. It may have
            messages from friends or family. It may know which apps you use. It
            may even know where the device is.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {deviceExamples.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.contains}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-6 text-emerald-50">
            <p className="text-lg font-black">The big idea</p>
            <p className="mt-2 leading-7">
              A device is not just a piece of technology. It can be a doorway to
              your accounts and personal information. Protecting the device
              helps protect what is connected to it.
            </p>
          </div>
        </LessonSection>

        <LessonSection
          label="Part 2"
          title="Lock Your Device"
        >
          <p className="leading-8">
            A device lock is one of the simplest safety tools. Depending on the
            device and your family's rules, that may be a passcode, password,
            fingerprint, face unlock, or another approved method.
          </p>

          <p className="mt-4 leading-8">
            The goal is simple: when you are not using the device, another
            person should not be able to open it easily and look through your
            information.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {protectRules.map((rule) => (
              <article
                key={rule.title}
                className="rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5 text-cyan-50"
              >
                <h3 className="text-lg font-black">{rule.title}</h3>
                <p className="mt-2 text-sm leading-7">{rule.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-5 text-yellow-50">
            <p className="font-black">Think about it</p>
            <p className="mt-2 leading-7">
              Imagine your device is unlocked and sitting on a table. What
              could another person see or change if they picked it up? That is
              why locking the device matters.
            </p>
          </div>
        </LessonSection>

        <LessonSection
          label="Part 3"
          title="Passcodes and Passwords Are Not the Same Thing"
        >
          <p className="leading-8">
            A <strong className="text-white">device passcode</strong> helps
            protect the device itself. An{" "}
            <strong className="text-white">account password</strong> helps
            protect an account, such as a game account, email account, school
            account, or another online service.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-6 text-purple-50">
              <p className="text-xs font-black uppercase tracking-[0.17em] text-purple-200">
                Device passcode
              </p>
              <h3 className="mt-2 text-xl font-black">
                Opens the device
              </h3>
              <p className="mt-3 text-sm leading-7">
                It helps stop another person from unlocking the phone, tablet,
                laptop, or other device.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-6 text-blue-50">
              <p className="text-xs font-black uppercase tracking-[0.17em] text-blue-200">
                Account password
              </p>
              <h3 className="mt-2 text-xl font-black">
                Opens an account
              </h3>
              <p className="mt-3 text-sm leading-7">
                It helps protect things like school accounts, games, email, and
                other online services.
              </p>
            </div>
          </div>

          <p className="mt-6 leading-8">
            One of the most important things to remember is that a password is
            not something you give away just because someone asks.
          </p>

          <div className="mt-6 grid gap-4">
            {passwordRules.map((rule) => (
              <article
                key={rule.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-white">{rule.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {rule.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-6 text-center text-emerald-50">
            <p className="text-2xl font-black">
              Passwords protect accounts. They are not friendship tokens.
            </p>
          </div>
        </LessonSection>

        <LessonSection
          label="Quick Check"
          title="What Would You Do?"
        >
          <p className="leading-8">
            Read each situation. Decide what you would do before opening the
            answer.
          </p>

          <div className="mt-6 grid gap-4">
            <details className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <summary className="cursor-pointer font-black text-white">
                A friend asks for your game password so they can help you level
                up. What should you do?
              </summary>
              <p className="mt-4 leading-7 text-emerald-200">
                Do not share the password. You can ask for game tips without
                giving another person access to your account.
              </p>
            </details>

            <details className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <summary className="cursor-pointer font-black text-white">
                You are done using a family tablet and leave the room. What
                should you do first?
              </summary>
              <p className="mt-4 leading-7 text-emerald-200">
                Lock the device according to your family's rules before leaving
                it.
              </p>
            </details>

            <details className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <summary className="cursor-pointer font-black text-white">
                You forget a password. Should you keep guessing random
                passwords over and over?
              </summary>
              <p className="mt-4 leading-7 text-emerald-200">
                No. Use the approved account-recovery method or ask a trusted
                adult for help.
              </p>
            </details>
          </div>
        </LessonSection>

        <LessonSection
          label="Part 4"
          title="Updates Are Part of Safety"
        >
          <p className="leading-8">
            Apps and devices are created by people, and sometimes problems are
            found after the device or app is released. Updates can fix those
            problems, improve safety, improve how something works, or add new
            features.
          </p>

          <p className="mt-4 leading-8">
            You do not need to understand every technical detail in an update.
            What matters is following your family's rules for approved updates
            and not ignoring them forever.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              [
                "Fix problems",
                "Updates can repair things that were not working correctly.",
              ],
              [
                "Improve safety",
                "Updates can fix weaknesses that could make a device or app less safe.",
              ],
              [
                "Improve features",
                "Updates can make an app or device work better or more smoothly.",
              ],
            ].map(([title, text]) => (
              <article
                key={title}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"
              >
                <h3 className="font-black">{title}</h3>
                <p className="mt-2 text-sm leading-7">{text}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-5 text-yellow-50">
            <p className="font-black">Remember</p>
            <p className="mt-2 leading-7">
              Do not install random files because a message says they are
              "updates." Use your device's normal update system or the method
              your family has approved.
            </p>
          </div>
        </LessonSection>

        <LessonSection
          label="Part 5"
          title="Apps, Downloads, and Permissions"
        >
          <p className="leading-8">
            Apps can be useful, fun, creative, and educational. But installing
            an app can also give that app access to parts of a device. That is
            why downloading and permissions deserve thought.
          </p>

          <h3 className="mt-6 text-2xl font-black text-white">
            Ask before downloading unfamiliar apps
          </h3>

          <p className="mt-3 leading-8">
            Families have different rules. Some children can install approved
            apps themselves. Others need a parent or guardian to approve each
            download. Follow the rules for your device.
          </p>

          <p className="mt-4 leading-8">
            If you do not recognize an app, do not understand why you need it,
            or found it through a strange message, ask first.
          </p>

          <h3 className="mt-8 text-2xl font-black text-white">
            What is a permission?
          </h3>

          <p className="mt-3 leading-8">
            A permission is a request from an app to use part of the device.
            For example, an app may ask to use the camera, microphone, photos,
            contacts, or location.
          </p>

          <p className="mt-4 leading-8">
            A good first question is:
          </p>

          <div className="mt-4 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-center">
            <p className="text-2xl font-black text-cyan-50">
              Does this permission make sense for what the app is supposed to
              do?
            </p>
          </div>

          <div className="mt-6 grid gap-4">
            {permissionExamples.map((item) => (
              <article
                key={`${item.app}-${item.permission}`}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-black text-cyan-100">
                    {item.app}
                  </span>
                  <span className="rounded-full border border-purple-400/30 bg-purple-400/10 px-3 py-1 text-xs font-black text-purple-100">
                    Permission: {item.permission}
                  </span>
                  <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-black text-emerald-100">
                    {item.makesSense}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {item.reason}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-6 leading-8">
            Sometimes there can be a good reason for a permission that is not
            obvious. You do not have to figure everything out alone. When you
            are unsure, ask a trusted adult.
          </p>
        </LessonSection>

        <LessonSection
          label="Guided Activity"
          title="The Permission Detective"
        >
          <p className="leading-8">
            Pretend you are checking a new app before using it. For each
            permission below, ask whether it matches what the app actually
            needs.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              {
                situation:
                  "A video calling app asks for Camera and Microphone access.",
                prompt:
                  "Would those permissions help the app do its main job?",
                answer:
                  "Yes, usually. The app needs the camera for video and the microphone for your voice.",
              },
              {
                situation:
                  "A calculator app asks for your Contacts.",
                prompt:
                  "Would contacts normally be needed to solve math problems?",
                answer:
                  "Probably not. This is a good reason to question the permission and ask a trusted adult.",
              },
              {
                situation:
                  "A photo editor asks for access to the photo you choose.",
                prompt:
                  "Would photo access help the app edit the picture?",
                answer:
                  "Yes, it may. You should still pay attention to whether the app asks for more access than you expect.",
              },
              {
                situation:
                  "A simple puzzle game asks for your exact Location.",
                prompt:
                  "Does the puzzle need to know exactly where you are?",
                answer:
                  "Maybe not. Question the permission and ask before allowing it.",
              },
            ].map((item, index) => (
              <details
                key={item.situation}
                className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5"
              >
                <summary className="cursor-pointer font-black text-purple-50">
                  Case {index + 1}: {item.situation}
                </summary>
                <p className="mt-4 text-sm font-bold text-purple-100">
                  Think first: {item.prompt}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-200">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </LessonSection>

        <LessonSection
          label="Part 6"
          title="When Something Unexpected Happens"
        >
          <p className="leading-8">
            Sometimes a device may show a strange pop-up, freeze, open a screen
            you do not understand, or behave differently than you expected.
            You might also see a message that tries to make you click quickly.
          </p>

          <p className="mt-4 leading-8">
            You do not need to solve every device problem by yourself.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {stopDontClickTell.map((item) => (
              <article
                key={item.step}
                className="rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-6 text-emerald-50"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-300 text-lg font-black text-slate-950">
                  {item.step}
                </span>
                <h3 className="mt-4 text-xl font-black">{item.title}</h3>
                <p className="mt-2 text-sm leading-7">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-center text-cyan-50">
            <p className="text-2xl font-black">
              Stop → Don't Keep Clicking → Tell
            </p>
          </div>

          <p className="mt-6 leading-8">
            Telling a trusted adult is not "getting in trouble." It is a good
            safety decision. Adults can help figure out whether the problem is
            small, important, or something that needs more help.
          </p>
        </LessonSection>

        <LessonSection
          label="Decision Practice"
          title="Five Everyday Device Choices"
        >
          <p className="leading-8">
            Decide what you would do before opening each answer.
          </p>

          <div className="mt-6 grid gap-4">
            {quickDecisions.map((item, index) => (
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
          title="My First Device Safety Check"
        >
          <p className="leading-8">
            You can complete this activity with your own device, a family
            device, or by imagining the device you may use in the future. You do
            not need to reveal any password or private information.
          </p>

          <div className="mt-6 grid gap-4">
            {guidedChecklist.map((item, index) => (
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

          <div className="mt-6 rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-5 text-yellow-50">
            <p className="font-black">Important</p>
            <p className="mt-2 leading-7">
              This activity does not ask you to type, show, or share your real
              password or passcode. Keep those private according to your
              family's rules.
            </p>
          </div>
        </LessonSection>

        <LessonSection
          label="Remember This"
          title="The Six First-Device Rules"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ["1", "Lock it", "Lock the device when you are not using it."],
              [
                "2",
                "Protect your passwords",
                "Do not trade or casually share account passwords.",
              ],
              [
                "3",
                "Ask before downloading",
                "Follow your family's rules for unfamiliar apps and files.",
              ],
              [
                "4",
                "Check permissions",
                "Ask whether a permission makes sense for what the app does.",
              ],
              [
                "5",
                "Keep it updated",
                "Use approved device and app updates.",
              ],
              [
                "6",
                "Stop and tell",
                "When something feels wrong, stop, avoid repeated clicking, and ask a trusted adult.",
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
          title="Think About Your Own Habits"
        >
          <p className="leading-8">
            You do not need to write these answers online. Think about them or
            discuss them with a trusted adult.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "Which first-device rule do you already follow well?",
              "Which rule do you think will be easiest to forget?",
              "Who is a trusted adult you can ask when a device shows something confusing?",
              "What is one app permission you now understand better?",
              "Why is asking for help a smart cyber safety skill?",
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
            Try each question before opening the answer. This is a learning
            check, not a grade.
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
                  <p className="mt-3 text-sm leading-7 text-emerald-50">
                    {item.answer}
                  </p>
                </details>
              </article>
            ))}
          </div>
        </LessonSection>

        <LessonSection
          label="Lesson Complete"
          title="You Finished Lesson 1"
        >
          <p className="leading-8">
            You now have the basic habits for protecting a first device. You
            know why the device should be locked, why passwords matter, why
            updates are useful, why permissions deserve thought, and what to do
            when something unexpected happens.
          </p>

          <div className="mt-6 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-6 text-emerald-50">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
              Your Lesson 1 Outcome
            </p>
            <p className="mt-3 text-xl font-black">
              I can protect my device, protect my accounts, think before I give
              an app access, and ask for help when something feels wrong.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={starterPath}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-cyan-400 hover:text-cyan-100"
            >
              Back to Starter Path
            </Link>

            <Link
              href={nextLesson}
              className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
            >
              Continue to Lesson 2
            </Link>
          </div>
        </LessonSection>

        <section className="rounded-3xl border border-yellow-400/25 bg-yellow-400/10 p-6 text-yellow-50">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">
            Safety Reminder
          </p>
          <h2 className="mt-2 text-2xl font-black">
            You do not have to solve device problems alone
          </h2>
          <p className="mt-3 leading-7">
            If something on a device scares you, confuses you, asks for private
            information, or makes you feel pressured, stop and talk to a trusted
            adult.
          </p>
        </section>
      </div>

      <Footer />
    </main>
  );
}