import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  AnalyzeEvidenceCard,
  DefenderChecklist,
  FakeAlertCard,
  FakeDashboardCard,
  FakeLogPanel,
  KeyTakeaways,
  LessonProgressBar,
  MiniQuiz,
  PortfolioPrompt,
  ReadinessCheck,
  ScenarioDecisionLab,
} from "@/components/high-school/HighSchoolComponents";

const modulePath = "/high-school/beginner/digital-identity-and-privacy";
const previousLesson = `${modulePath}/personal-data-private-data-and-metadata`;
const nextLesson = `${modulePath}/privacy-settings-and-audience-control`;

const vocab = [
  [
    "Data collection",
    "The process of gathering information from forms, accounts, app activity, device settings, cookies, permissions, or other user interactions.",
  ],
  [
    "First-party data",
    "Information collected directly by the app, website, school platform, store, or service a person is intentionally using.",
  ],
  [
    "Third-party data",
    "Information that may be shared with or collected by outside services such as analytics, advertising, embedded tools, or login providers.",
  ],
  [
    "Permissions",
    "Settings that allow an app or site to access features such as camera, microphone, location, contacts, notifications, files, or account details.",
  ],
  [
    "Telemetry",
    "Usage and performance information that helps a service understand crashes, errors, device type, activity patterns, or feature use.",
  ],
  [
    "Privacy notice",
    "A document or settings page that explains what information is collected, why it is used, how it may be shared, and what controls users may have.",
  ],
];

const collectionPoints = [
  {
    title: "You provide it",
    example: "Forms, profile fields, uploads, comments, messages, usernames, school-safe contact choices, and account settings.",
  },
  {
    title: "The service observes it",
    example: "Clicks, page views, search terms inside the service, watch time, login times, settings changes, and feature activity.",
  },
  {
    title: "The device shares context",
    example: "Device type, browser type, rough location settings, language, operating system, screen size, and notification preferences.",
  },
  {
    title: "Connected tools add context",
    example: "Single sign-on, embedded videos, analytics tools, payment processors, classroom tools, or plug-ins may create additional records.",
  },
];

const appReviewRows = [
  {
    item: "Profile name",
    source: "Student typed it into account settings",
    review: "Personal data. Use a school-appropriate display name and avoid unnecessary details.",
  },
  {
    item: "Location permission",
    source: "Mobile app permission request",
    review: "Review carefully. Turn on only when needed and ask trusted help if unsure.",
  },
  {
    item: "Crash report",
    source: "Automatic app telemetry",
    review: "Usually for troubleshooting, but still check privacy settings and school rules.",
  },
  {
    item: "Public comment",
    source: "User activity on a site",
    review: "Public or semi-public record. Think before posting and avoid private information.",
  },
  {
    item: "Linked account login",
    source: "Connected sign-in provider",
    review: "Check what account information is shared and use official school-approved tools when required.",
  },
];

const mistakes = [
  "Clicking through app permission prompts without reading what the app is asking to access.",
  "Assuming a free app collects no data because it does not charge money upfront.",
  "Typing extra personal details into optional profile fields that are not needed for the purpose.",
  "Using public comments, usernames, or bios to share private schedules, exact locations, or contact details.",
  "Ignoring connected accounts, embedded tools, plug-ins, or third-party services that may add their own privacy rules.",
  "Trying to investigate a suspicious app, website, or tracking issue alone instead of asking trusted adults or school technology staff.",
];

const quizQuestions = [
  {
    question: "Which is the best example of data a user directly provides?",
    choices: [
      "A profile display name typed into an account settings form.",
      "A browser's screen size detected by a website layout system.",
      "A crash report created automatically after an app error.",
      "A server timestamp added when a page loads.",
    ],
    answer: 0,
    explanation:
      "Information typed into a form or profile is directly provided by the user. Other examples may be observed or generated automatically.",
  },
  {
    question: "Why should students review app permissions?",
    choices: [
      "Permissions can allow access to features like location, camera, microphone, contacts, files, or notifications.",
      "Permissions always mean an app is unsafe.",
      "Permissions never affect privacy.",
      "Permissions are only used by games, not school or productivity apps.",
    ],
    answer: 0,
    explanation:
      "Permissions control access to device features and data. The safe habit is to allow only what is needed and approved.",
  },
  {
    question: "What does third-party data usually involve?",
    choices: [
      "Information shared with or collected by an outside service connected to the app or website.",
      "Only information written by hand on paper.",
      "Information that has no privacy impact at all.",
      "A guarantee that no outside services are involved.",
    ],
    answer: 0,
    explanation:
      "Third-party data can involve outside analytics, embedded tools, login providers, payment processors, or other services connected to the main site.",
  },
  {
    question: "Which action best follows data minimization?",
    choices: [
      "Leave optional private profile fields blank when they are not needed for the purpose.",
      "Add your exact schedule to every public profile so friends can find you.",
      "Give every app every permission so it works faster.",
      "Reuse the same public username across every account without thinking about context.",
    ],
    answer: 0,
    explanation:
      "Data minimization means sharing only what is needed. Optional private details should not be added when they do not serve a clear purpose.",
  },
  {
    question: "A site asks for location access even though the student is only reading an article. What is the safest beginner response?",
    choices: [
      "Deny or pause the permission, review why it is requested, and ask trusted help if unsure.",
      "Allow it immediately because every website needs location.",
      "Enter a fake home address into the page to test what happens.",
      "Click random buttons to see if the warning disappears.",
    ],
    answer: 0,
    explanation:
      "The safe response is to avoid unnecessary permissions, review the purpose, and ask trusted help when something feels unclear or unsafe.",
  },
];

function TopNav() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href={previousLesson}
        className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Previous Lesson
      </Link>
      <Link
        href={modulePath}
        className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Back to Module
      </Link>
      <Link
        href="/high-school/beginner"
        className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Beginner Track
      </Link>
      <Link
        href={nextLesson}
        className="rounded-full bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
      >
        Next Lesson
      </Link>
    </div>
  );
}

function BottomNav() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Navigation
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">Continue Module B6</h2>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={previousLesson}
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Previous: B6.2 Personal Data, Private Data, and Metadata
        </Link>
        <Link
          href={modulePath}
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Back to Module
        </Link>
        <Link
          href="/high-school/beginner"
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Beginner Track
        </Link>
        <Link
          href={nextLesson}
          className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
        >
          Next: B6.4 Privacy Settings and Audience Control
        </Link>
      </div>
    </section>
  );
}

function SectionCard({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <div className="mt-4 text-slate-300">{children}</div>
    </section>
  );
}

function DataCollectionFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Four Common Data Collection Paths
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        Apps and websites can collect information in more than one way. A safe
        user does not need to memorize every technical detail, but should know
        where data can come from and how to reduce unnecessary sharing.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {collectionPoints.map((point, index) => (
          <div
            key={point.title}
            className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400 text-xl font-black text-slate-950">
              {index + 1}
            </div>
            <h3 className="mt-4 text-lg font-black text-white">{point.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{point.example}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
        <span className="font-bold">Defender rule:</span> ask what is being
        collected, why it is needed, who can see it, how long it may stay, and
        whether a safer setting or smaller amount of data would work.
      </div>
    </section>
  );
}

function FakeAppPrivacyPanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            App Data Collection Review Panel
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional privacy panel shows how students can review what an
            app or website may collect without testing any real suspicious app.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {appReviewRows.map((row) => (
          <div
            key={row.item}
            className="grid gap-3 border-b border-slate-800 bg-slate-950 p-4 last:border-b-0 md:grid-cols-[0.8fr_1fr_1.4fr]"
          >
            <p className="font-bold text-cyan-100">{row.item}</p>
            <p className="text-slate-300">{row.source}</p>
            <p className="text-sm font-semibold text-yellow-100">{row.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function PermissionReviewBoard() {
  const permissions = [
    {
      name: "Camera",
      saferQuestion: "Does this app need camera access for the feature I am using right now?",
      saferChoice: "Allow only when needed, or deny if the purpose is unclear.",
    },
    {
      name: "Microphone",
      saferQuestion: "Is voice recording or a meeting feature actually required?",
      saferChoice: "Keep off unless the app has a clear, trusted reason.",
    },
    {
      name: "Location",
      saferQuestion: "Does the service need precise location, rough location, or no location at all?",
      saferChoice: "Use the least precise option when possible, or deny if not needed.",
    },
    {
      name: "Notifications",
      saferQuestion: "Will notifications help, or will they reveal private context on a lock screen?",
      saferChoice: "Limit preview details and disable unnecessary notifications.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Technical Breakdown
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Permission Review Board
      </h2>
      <p className="mt-3 text-slate-300">
        Permissions are not automatically bad, but they should match the app's
        purpose. A calculator probably does not need your microphone. A video
        meeting app may need it while you are in a meeting.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {permissions.map((permission) => (
          <div
            key={permission.name}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-xl font-black text-cyan-100">{permission.name}</h3>
            <div className="mt-4 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-200">
                Ask first
              </p>
              <p className="mt-2 text-sm">{permission.saferQuestion}</p>
            </div>
            <div className="mt-3 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                Safer choice
              </p>
              <p className="mt-2 text-sm">{permission.saferChoice}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function HowAppsWebsitesCollectDataPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_35%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Beginner
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module B6
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 3 of 7
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B6.3 How Apps and Websites Collect Data
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Learn the main ways apps and websites collect information, how
            permissions and connected services affect privacy, and how to make
            safer data-sharing choices without testing real suspicious tools.
          </p>

          <div className="mt-8">
            <TopNav />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Beginner"
          moduleTitle="B6: Digital Identity and Privacy"
          lessonTitle="How Apps and Websites Collect Data"
          lessonNumber={3}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that apps and websites may collect information in different ways.",
            "I will use fake examples only and will not test real suspicious websites or apps.",
            "I am ready to think about permissions, profile fields, cookies, and connected services defensively.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Privacy Review Starts With Knowing the Data Path"
        >
          <p className="leading-8">
            A defender cannot protect information without knowing where it
            enters the system. Apps and websites can collect data through forms,
            account activity, permissions, device context, cookies, telemetry,
            and connected services. The goal is not to panic. The goal is to
            understand what is needed, what is optional, and what should be
            limited.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety reminder:</span> do not open,
            test, or investigate real suspicious apps or websites. Use fake
            examples and ask trusted adults, teachers, guardians, or school
            technology staff when something feels unsafe.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Describe four common ways apps and websites collect data.",
            "Review fake permissions and decide whether the request matches the purpose.",
            "Apply data minimization when creating accounts, profiles, posts, or app settings.",
          ].map((objective) => (
            <div
              key={objective}
              className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50"
            >
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">
                Learning Objective
              </p>
              <p className="mt-3 font-semibold">{objective}</p>
            </div>
          ))}
        </section>

        <SectionCard
          eyebrow="Why This Matters"
          title="Convenience Can Create Invisible Data Trails"
        >
          <p className="leading-8">
            Many data collection choices are connected to convenience. A site
            remembers a setting, an app sends a reminder, a classroom tool saves
            progress, or a browser keeps a session active. Those features can be
            useful, but students still need to check what information is being
            stored, shared, or made visible to others.
          </p>
        </SectionCard>

        <DataCollectionFlow />

        <SectionCard eyebrow="Core Concept" title="Collection Is Not One Single Thing">
          <p className="leading-8">
            Some data is typed directly by the user. Some data is observed from
            activity. Some data comes from device settings or browser context.
            Some data is handled by connected services. A safer privacy habit is
            to slow down before giving optional information, granting
            permissions, or connecting accounts.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Data Collection Thinking
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {vocab.map(([term, definition]) => (
              <div
                key={term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-cyan-100">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {definition}
                </p>
              </div>
            ))}
          </div>
        </section>

        <PermissionReviewBoard />
        <FakeAppPrivacyPanel />

        <FakeDashboardCard
          title="Fake Privacy Signal Dashboard"
          subtitle="Training dashboard using fictional app settings to practice safe privacy review decisions."
          metrics={[
            {
              label: "Optional fields",
              value: "6",
              note: "Profile details that should be skipped unless needed.",
            },
            {
              label: "Permission prompts",
              value: "4",
              note: "Camera, microphone, location, and notifications need review.",
            },
            {
              label: "Connected services",
              value: "3",
              note: "Login provider, embedded video, and analytics widget need context review.",
            },
          ]}
        />

        <FakeAlertCard
          title="Unnecessary Location Permission Request"
          severity="Medium"
          time="11:18 AM"
          source="Fake App Privacy Training"
          details="A fictional study app asks for precise location when the student is only reading a lesson article. The feature does not explain why precise location is needed."
          recommendation="Deny or pause the permission, review the app's purpose and settings, and ask a trusted adult or school technology staff member if the app is school-related or unclear."
        />

        <FakeLogPanel
          title="Fake App Data Collection Review Log"
          logs={[
            "11:14:03 PROFILE_FIELD field='display_name' status='required' review='use school-appropriate name'",
            "11:14:39 PROFILE_FIELD field='home_address' status='optional' review='do not provide for this purpose'",
            "11:15:12 PERMISSION_REQUEST permission='precise_location' feature='article reading' review='not needed'",
            "11:16:40 CONNECTED_SERVICE service='video_embed' data='view activity' review='check settings and classroom policy'",
            "11:17:08 TELEMETRY event='app_crash_report' review='troubleshooting data; check privacy notice'",
            "11:18:55 SAFE_ACTION recommendation='limit optional fields, review permissions, ask trusted help if unsure'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Data Request Needs the Most Caution?"
          evidence={[
            "A study website asks for a username and password to create an account.",
            "The same site asks for exact home address even though the tool is only for reading practice articles.",
            "The site includes an optional profile bio field.",
            "The site has a settings page for notifications and connected accounts.",
          ]}
          question="What is the safest conclusion?"
          options={[
            "The exact home address request needs the most caution because it does not match the reading feature's purpose.",
            "All requested fields should be filled out to make the account look complete.",
            "The optional profile bio should include private details so classmates understand who owns the account.",
            "The notification settings prove the site cannot collect any data.",
          ]}
          bestAnswer={0}
          explanation="The safest conclusion is to question data that does not match the purpose. Optional or unnecessary private details should not be shared."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Increase Data Exposure"
        >
          <div className="grid gap-3">
            {mistakes.map((mistake) => (
              <div
                key={mistake}
                className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-red-100"
              >
                {mistake}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Safe Defensive Lab"
          title="Review a Fake App Before Signing Up"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake App Scenario
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Study Planner Account Setup
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional study planner asks for a display name, school role,
                optional profile bio, notifications, calendar access, location,
                and a connected login provider. The student only wants a simple
                homework reminder tool.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Defensive Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Identify which data is required, optional, or unrelated to the purpose.</li>
                <li>Skip optional private details that are not needed.</li>
                <li>Review each permission before granting access.</li>
                <li>Check privacy settings, audience controls, and connected accounts.</li>
                <li>Ask trusted help before using school-related apps that seem unclear or unsafe.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A New App Requests Too Much Information"
          scenario="A classmate recommends a planning app. During sign-up, the app asks for exact location, contacts, camera access, and a public profile bio, even though the student only wants a homework checklist."
          choices={[
            {
              label: "Choice A",
              response:
                "Pause the sign-up, deny unnecessary permissions, review the purpose, and ask trusted help if it is for school use.",
              outcome:
                "Best defensive choice. It avoids unnecessary collection and brings in help before using a questionable app.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Grant every permission because the app will probably work better with more data.",
              outcome:
                "Risky. More permissions can increase exposure when they do not match the app's purpose.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Type fake private information into the app to see what happens.",
              outcome:
                "Unsafe and unnecessary. Students should not test questionable apps this way. Use trusted help and safer alternatives.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="App and Website Data Collection Checklist"
          items={[
            "I can name common ways apps and websites collect data.",
            "I can review whether a permission request matches the app's purpose.",
            "I can avoid filling optional fields with unnecessary personal or private data.",
            "I can identify connected services that may add privacy considerations.",
            "I know to ask trusted adults, teachers, guardians, or school technology staff when an app or website feels unsafe.",
          ]}
        />

        <MiniQuiz
          title="B6.3 Mini Quiz: App and Website Data Collection"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a short fake privacy review for a fictional school study app. Explain what data it collects, which permissions are necessary, which optional details should be avoided, and what question a student should ask before using it."
          tips={[
            "Use fake app names and fake data only.",
            "Separate required data, optional data, permissions, and connected services.",
            "End with a clear recommendation for a safe beginner user.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Apps and websites collect data through forms, activity, permissions, device context, and connected services.",
            "Permission requests should match the purpose of the app or website feature.",
            "Optional profile fields are a common place where students accidentally share too much.",
            "Third-party tools can add extra privacy considerations beyond the main app or website.",
            "Safe privacy decisions use data minimization and trusted help when something feels unclear or unsafe.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}