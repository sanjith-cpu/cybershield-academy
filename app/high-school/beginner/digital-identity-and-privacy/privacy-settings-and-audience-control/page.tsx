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
const previousLesson = `${modulePath}/how-apps-and-websites-collect-data`;
const nextLesson = `${modulePath}/digital-footprints-and-future-readiness`;

const vocab = [
  [
    "Privacy setting",
    "A control that changes who can find, view, contact, tag, mention, or interact with an account or piece of content.",
  ],
  [
    "Audience",
    "The group of people allowed to view a profile detail, post, story, video, message, or other shared content.",
  ],
  [
    "Default audience",
    "The audience automatically selected when a new post or piece of content is created.",
  ],
  [
    "Custom audience",
    "A selected group of people who are included in or excluded from seeing certain content.",
  ],
  [
    "Discoverability",
    "How easily an account can be found through search, suggestions, contacts, usernames, links, or connected services.",
  ],
  [
    "Tag review",
    "A setting that allows a user to approve certain tags before they appear on the user’s profile.",
  ],
];

const controlLayers = [
  {
    title: "Account discovery",
    example:
      "Controls who can search for the account, find it through contacts, or receive account suggestions.",
  },
  {
    title: "Profile visibility",
    example:
      "Controls who can see profile photos, bios, school details, links, activity, or follower lists.",
  },
  {
    title: "Content audience",
    example:
      "Controls who can view posts, stories, videos, comments, shared files, or temporary content.",
  },
  {
    title: "Interaction controls",
    example:
      "Controls who can message, comment, tag, mention, invite, follow, or send requests.",
  },
];

const privacyReviewRows = [
  {
    item: "Default post audience",
    source: "Currently set to Public",
    review:
      "High priority. Change to an approved audience unless there is a clear reason to share publicly.",
  },
  {
    item: "Story audience",
    source: "Currently set to Close Friends",
    review:
      "More limited, but still review who is included and remember that viewers may save or reshare content.",
  },
  {
    item: "Tag approval",
    source: "Currently turned Off",
    review:
      "Turn on review when available so unexpected tags do not automatically appear on the profile.",
  },
  {
    item: "Direct messages",
    source: "Currently set to Friends Only",
    review:
      "A limited audience can reduce unwanted contact. Keep reporting and blocking tools easy to find.",
  },
  {
    item: "Location sharing",
    source: "Currently allowed in every post",
    review:
      "Disable by default. Share location only when there is a clear, safe purpose and trusted approval.",
  },
];

const mistakes = [
  "Assuming that making an account private automatically protects every profile field, post, tag, message, or connected app.",
  "Leaving the default post audience set to Public and planning to change individual posts later.",
  "Accepting follow or friend requests only because the account has mutual connections.",
  "Allowing tags, mentions, comments, or direct messages from everyone without reviewing the purpose.",
  "Sharing exact locations, schedules, uniforms, tickets, IDs, or travel plans with a wider audience than needed.",
  "Believing temporary or deleted content can never be copied, screenshotted, recorded, or reshared by another viewer.",
];

const quizQuestions = [
  {
    question:
      "Which setting most directly controls who can see a new post?",
    choices: [
      "The post audience setting.",
      "The screen brightness setting.",
      "The device battery setting.",
      "The keyboard language setting.",
    ],
    answer: 0,
    explanation:
      "The post audience setting controls who is intended to see the new content. Other device settings do not control the post’s audience.",
  },
  {
    question:
      "Why should a student review the default audience before posting?",
    choices: [
      "The saved default may be broader than the student intends.",
      "Privacy settings always disappear after one minute.",
      "Every post must be completely hidden.",
      "The default audience controls the device password.",
    ],
    answer: 0,
    explanation:
      "A platform may reuse the previous or default audience. Checking it before posting prevents accidental sharing with too many people.",
  },
  {
    question:
      "What is the safest beginner choice when tag review is available?",
    choices: [
      "Turn on tag review so unexpected tags can be checked before appearing.",
      "Allow every tag automatically because tags are always safe.",
      "Share the account password with a friend who can review tags.",
      "Ignore tags because they cannot affect digital identity.",
    ],
    answer: 0,
    explanation:
      "Tag review gives the account owner more control over what appears on the profile without sharing account access.",
  },
  {
    question:
      "Which action best follows the smallest-necessary-audience rule?",
    choices: [
      "Share a team update only with approved teammates and coaches.",
      "Post the team schedule publicly even when only the team needs it.",
      "Add exact practice locations to a public profile bio.",
      "Allow anyone to message the account so no one feels excluded.",
    ],
    answer: 0,
    explanation:
      "The safest audience is the smallest group that genuinely needs the information for the intended purpose.",
  },
  {
    question:
      "What is an important limitation of privacy settings?",
    choices: [
      "Approved viewers may still copy, screenshot, record, or reshare content.",
      "Privacy settings can guarantee that content will never leave the app.",
      "A private account removes all metadata from every file.",
      "Audience controls automatically fix unsafe old posts.",
    ],
    answer: 0,
    explanation:
      "Privacy settings reduce exposure, but they cannot fully control what an approved viewer does after seeing the content.",
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
          Previous: B6.3 How Apps and Websites Collect Data
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
          Next: B6.5 Digital Footprints and Future Readiness
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

function AudienceControlFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Four Layers of Privacy and Audience Control
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        A private account is only one layer. Students should review discovery,
        profile visibility, content audiences, and interaction controls because
        each layer protects a different part of digital identity.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {controlLayers.map((point, index) => (
          <div
            key={point.title}
            className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400 text-xl font-black text-slate-950">
              {index + 1}
            </div>
            <h3 className="mt-4 text-lg font-black text-white">{point.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {point.example}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
        <span className="font-bold">Defender rule:</span> choose the smallest
        reasonable audience, verify the setting before sharing, and remember
        that approved viewers may still copy or reshare content.
      </div>
    </section>
  );
}

function FakePrivacyPanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            StudentHub Privacy Review Panel
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional dashboard shows how students can review settings
            without entering real account details or opening a real suspicious
            service.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {privacyReviewRows.map((row) => (
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

function AudienceReviewBoard() {
  const settings = [
    {
      name: "Posts and stories",
      saferQuestion:
        "Who genuinely needs to see this content, and could it reveal location, schedule, identity, or private context?",
      saferChoice:
        "Use an approved audience and check the setting before every important post.",
    },
    {
      name: "Tags and mentions",
      saferQuestion:
        "Can other people attach my account to content without my review?",
      saferChoice:
        "Turn on review controls when available and remove unwanted tags safely.",
    },
    {
      name: "Messages and comments",
      saferQuestion:
        "Who can contact or interact with the account, and are blocking and reporting tools available?",
      saferChoice:
        "Limit interactions to appropriate audiences and use safety tools when needed.",
    },
    {
      name: "Location sharing",
      saferQuestion:
        "Does this post or feature need precise or live location information?",
      saferChoice:
        "Keep location off by default and share only when there is a clear, trusted reason.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Technical Breakdown
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Audience Review Board
      </h2>
      <p className="mt-3 text-slate-300">
        Privacy controls are not about hiding everything. They help students
        match access to purpose, reduce unnecessary exposure, and keep control
        over who can interact with their digital identity.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {settings.map((setting) => (
          <div
            key={setting.name}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-xl font-black text-cyan-100">{setting.name}</h3>
            <div className="mt-4 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-200">
                Ask first
              </p>
              <p className="mt-2 text-sm">{setting.saferQuestion}</p>
            </div>
            <div className="mt-3 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                Safer choice
              </p>
              <p className="mt-2 text-sm">{setting.saferChoice}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function PrivacySettingsAudienceControlPage() {
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
              Lesson 4 of 7
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B6.4 Privacy Settings and Audience Control
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Learn how account discovery, profile visibility, post audiences,
            tags, messages, and location controls shape who can find, view, and
            interact with your digital identity.
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
          lessonTitle="Privacy Settings and Audience Control"
          lessonNumber={4}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that public, private, friends-only, and custom audiences are different.",
            "I know that account privacy and post privacy may use separate settings.",
            "I am ready to use fake examples only and avoid entering real account information.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="Privacy Settings Work Like Access Controls"
        >
          <p className="leading-8">
            Defenders do not give every person access to every system. They
            decide who needs access, what they need, and when they need it.
            Privacy settings apply the same idea to digital identity. Discovery,
            profile, audience, tagging, messaging, and location controls each
            create a different boundary around information and interaction.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety reminder:</span> never share real
            passwords, private messages, exact locations, or personal account
            details in a training activity. Ask trusted adults, teachers,
            guardians, or school technology staff when something feels unsafe.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Explain how account, profile, content, and interaction controls protect different parts of digital identity.",
            "Choose an audience based on purpose, sensitivity, and the smallest group that needs access.",
            "Review fake privacy settings and identify choices that create unnecessary exposure.",
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
          title="A Wider Audience Creates More Exposure"
        >
          <p className="leading-8">
            A single post may reveal more than the creator expects. School names,
            uniforms, routines, locations, usernames, friend lists, event
            details, and background images can combine into a larger picture.
            Privacy settings reduce exposure by limiting who can find, view,
            contact, tag, or interact with the account.
          </p>
        </SectionCard>

        <AudienceControlFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="A Private Account Is Only One Layer"
        >
          <p className="leading-8">
            Making an account private can help, but it does not automatically
            fix every setting. Profile details may still be visible, approved
            followers may still save content, tags may appear automatically, and
            connected apps may still have permissions. A safer privacy review
            checks every layer instead of relying on one switch.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Privacy and Audience Thinking
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

        <AudienceReviewBoard />
        <FakePrivacyPanel />

        <FakeDashboardCard
          title="Fake Privacy Signal Dashboard"
          subtitle="Training dashboard using fictional account settings to practice safe audience-control decisions."
          metrics={[
            {
              label: "Public defaults",
              value: "2",
              note: "Posts and location sharing need immediate review.",
            },
            {
              label: "Review controls",
              value: "1",
              note: "Tag approval is available but currently turned off.",
            },
            {
              label: "Limited settings",
              value: "2",
              note: "Stories and messages already use smaller audiences.",
            },
          ]}
        />

        <FakeAlertCard
          title="Public Default Audience Detected"
          severity="Medium"
          time="1:42 PM"
          source="Fake Privacy Settings Training"
          details="A fictional student account is private, but the default audience for new posts is still set to Public and location sharing is enabled."
          recommendation="Change the default audience to an approved group, disable unnecessary location sharing, and review older posts that may use the same settings."
        />

        <FakeLogPanel
          title="Fake Privacy Settings Review Log"
          logs={[
            "13:36:12 ACCOUNT_SETTING account_visibility='private' review='helpful but not complete'",
            "13:37:05 POST_DEFAULT audience='public' review='change to approved audience'",
            "13:38:14 STORY_DEFAULT audience='close_friends' review='check membership regularly'",
            "13:39:20 TAG_REVIEW status='disabled' review='enable when available'",
            "13:40:43 LOCATION_SHARING status='always_on' review='disable by default'",
            "13:42:09 SAFE_ACTION recommendation='use smallest necessary audience and review old content'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Setting Needs the Most Immediate Attention?"
          evidence={[
            "A fictional account is set to Private.",
            "The default audience for new posts is Public.",
            "Direct messages are limited to approved friends.",
            "Tag review is turned on.",
          ]}
          question="What is the safest conclusion?"
          options={[
            "The public default post audience needs immediate review because it can expose future posts more widely than intended.",
            "The private account means every setting is already safe.",
            "Direct messages should be opened to everyone.",
            "Tag review should be turned off so posts appear faster.",
          ]}
          bestAnswer={0}
          explanation="The public default creates repeated exposure for future content. A private account does not guarantee that every separate audience setting is limited."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Audience Control"
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
          title="Review a Fake Student Account"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Account Scenario
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                StudentHub Privacy Setup
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional student account uses a private profile, public posts,
                open tagging, friends-only messages, and automatic location
                sharing. The student wants classmates to see club updates but
                does not want strangers to track routines or contact the account.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Defensive Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Match each audience to the real purpose of the content.</li>
                <li>Change public defaults to approved audiences.</li>
                <li>Turn on tag or mention review when available.</li>
                <li>Disable location sharing unless it has a clear safe purpose.</li>
                <li>Review old posts and use trusted help for unsafe interactions.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Team Photo Includes More Than Expected"
          scenario="A fictional student wants to post a team photo. The image includes school uniforms, a visible practice location, and several students who have not been asked whether they want the photo shared."
          choices={[
            {
              label: "Choice A",
              response:
                "Ask the people in the photo, remove unnecessary location clues, and share only with an approved audience.",
              outcome:
                "Best defensive choice. It respects consent, reduces location exposure, and uses a purpose-based audience.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Post it publicly because team photos are always harmless.",
              outcome:
                "Risky. The photo may reveal identity, school, location, routines, and information about other people.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Give a teammate the account password so they can decide what to post.",
              outcome:
                "Unsafe. Password sharing removes account control and creates an additional security problem.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Privacy Settings and Audience Control Checklist"
          items={[
            "I can explain why account privacy and post privacy may be separate.",
            "I can choose the smallest audience that matches the purpose.",
            "I can review tags, mentions, comments, messages, and location settings.",
            "I understand that approved viewers may still copy or reshare content.",
            "I know to use blocking, reporting, and trusted help when an interaction feels unsafe.",
          ]}
        />

        <MiniQuiz
          title="B6.4 Mini Quiz: Privacy Settings and Audience Control"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a short fake privacy review for a fictional high school account. Explain the current discovery, profile, post, tagging, messaging, and location settings. Recommend safer defaults and explain why each change reduces unnecessary exposure."
          tips={[
            "Use fake account names and fake details only.",
            "Separate account visibility from individual content and interaction settings.",
            "End with a simple monthly privacy-review routine.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Privacy settings create separate boundaries for discovery, profile visibility, content, and interactions.",
            "A private account does not automatically make every post, tag, message, or permission private.",
            "The safest audience is usually the smallest group that genuinely needs the information.",
            "Location, tagging, messaging, and old-content settings deserve regular review.",
            "Privacy controls reduce exposure, but approved viewers may still copy or reshare content.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}