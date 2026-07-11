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

const modulePath = "/high-school/beginner/beginner-capstone-review";
const previousLesson = `${modulePath}/ethics-and-safe-learning-review`;
const nextLesson = `${modulePath}/accounts-privacy-and-data-review`;

const vocabulary = [
  [
    "IP address",
    "A numerical network identifier used to help devices send data to the correct destination.",
  ],
  [
    "DNS",
    "A naming system that translates human-friendly domain names into network addresses.",
  ],
  [
    "Router",
    "A device that directs traffic between networks and helps data reach the correct path.",
  ],
  [
    "Port",
    "A numbered logical doorway used by applications and services for network communication.",
  ],
  [
    "Protocol",
    "A shared set of rules that systems use to communicate.",
  ],
  [
    "HTTPS",
    "A secure web communication method that uses encryption and certificate-based trust concepts.",
  ],
];

const networkLayers = [
  {
    title: "Device",
    question: "Which user device, server, router, or service starts or receives the communication?",
    examples:
      "Laptops, phones, tablets, servers, printers, access points, routers, and cloud services.",
  },
  {
    title: "Address and name",
    question: "How does the device identify the destination?",
    examples:
      "Domain names, DNS lookups, IP addresses, local network names, and service records.",
  },
  {
    title: "Service and protocol",
    question: "Which application service and communication rules are being used?",
    examples:
      "Web browsing, email, file sharing, updates, DNS, HTTPS, and approved management services.",
  },
  {
    title: "Security and context",
    question: "Does the connection match the expected user, device, destination, certificate, timing, and purpose?",
    examples:
      "HTTPS indicators, domain checks, browser warnings, baselines, segmentation, and approved change records.",
  },
];

const reviewRows = [
  {
    item: "School website visit",
    evidence:
      "Browser requests an official domain, DNS returns an address, and HTTPS loads without a warning",
    decision:
      "Likely expected when the domain, certificate, page purpose, and browser indicators all match.",
  },
  {
    item: "Look-alike login page",
    evidence:
      "The URL contains a substituted letter and the page asks for immediate sign-in",
    decision:
      "Do not enter credentials. Close the page and use the official site through a trusted route.",
  },
  {
    item: "Unexpected download",
    evidence:
      "A page begins downloading a file without a clear request or trusted source",
    decision:
      "Cancel or avoid the download, preserve relevant details, and report through the approved channel.",
  },
  {
    item: "New cloud learning service",
    evidence:
      "A documented class platform launches and devices connect to a new approved destination",
    decision:
      "Verify the change record, owner, domain, service, and expected device group before classifying it.",
  },
  {
    item: "Browser certificate warning",
    evidence:
      "The browser says the secure connection cannot be verified",
    decision:
      "Do not continue or enter information. Use a trusted route and report the warning if the site should be legitimate.",
  },
];

const mistakes = [
  "Trusting a page because its design looks professional.",
  "Reading only the page title and ignoring the actual URL.",
  "Assuming the padlock means the website itself is trustworthy.",
  "Continuing past a certificate warning without understanding the cause.",
  "Opening an unexpected download to determine what it contains.",
  "Treating every unfamiliar destination as malicious without checking approved changes and context.",
];

const quizQuestions = [
  {
    question: "What does DNS do?",
    choices: [
      "It translates human-friendly domain names into network addresses.",
      "It stores every password.",
      "It replaces the browser.",
      "It guarantees that every website is safe.",
    ],
    answer: 0,
    explanation:
      "DNS helps devices find the network address connected to a domain name.",
  },
  {
    question: "What is a router used for?",
    choices: [
      "Directing traffic between networks.",
      "Creating every website.",
      "Storing all browser cookies.",
      "Replacing account authentication.",
    ],
    answer: 0,
    explanation:
      "Routers help data move between different networks and toward the correct destination.",
  },
  {
    question: "What does HTTPS mainly protect during web communication?",
    choices: [
      "The connection between the browser and website through encryption and certificate-based trust.",
      "The honesty of every website owner.",
      "The safety of every downloaded file.",
      "The accuracy of every page claim.",
    ],
    answer: 0,
    explanation:
      "HTTPS protects the connection, but users still need to evaluate the actual website and request.",
  },
  {
    question: "What is the safest response to a browser certificate warning?",
    choices: [
      "Do not continue or enter information; use a trusted route and report the warning if needed.",
      "Ignore it because warnings are always harmless.",
      "Enter credentials quickly.",
      "Disable browser security.",
    ],
    answer: 0,
    explanation:
      "Certificate warnings may indicate a connection problem or impersonation risk and should not be bypassed casually.",
  },
  {
    question: "Which evidence is strongest when reviewing a web connection?",
    choices: [
      "The actual URL, domain, HTTPS status, certificate warning, page request, destination, and business context together.",
      "Only the page color.",
      "Only the logo.",
      "Only the display name in a message.",
    ],
    answer: 0,
    explanation:
      "Strong review combines multiple technical and contextual indicators.",
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
      <h2 className="mt-2 text-2xl font-bold text-white">Continue Module B15</h2>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={previousLesson}
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Previous: B15.2 Ethics and Safe Learning Review
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
          Next: B15.4 Accounts, Privacy, and Data Review
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

function NetworkReviewBoard() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Review
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Four Layers of a Web Connection
      </h2>
      <p className="mt-3 max-w-3xl leading-7 text-slate-300">
        A safe web review connects the device, destination name, network
        address, service, protocol, browser evidence, and expected purpose.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {networkLayers.map((layer, index) => (
          <div
            key={layer.title}
            className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400 text-xl font-black text-slate-950">
              {index + 1}
            </div>
            <h3 className="mt-4 text-xl font-black text-white">{layer.title}</h3>
            <p className="mt-3 font-semibold text-cyan-100">
              {layer.question}
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {layer.examples}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ConnectionReviewBoard() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Connection Review
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Browser, Network, and Context Decisions
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            Each fictional example combines technical indicators with user and
            business context.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {reviewRows.map((row) => (
          <div
            key={row.item}
            className="grid gap-3 border-b border-slate-800 bg-slate-950 p-4 last:border-b-0 md:grid-cols-[0.8fr_1.3fr_1.5fr]"
          >
            <p className="font-bold text-cyan-100">{row.item}</p>
            <p className="text-slate-300">{row.evidence}</p>
            <p className="text-sm font-semibold text-yellow-100">
              {row.decision}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function NetworkingAndWebConceptsReviewPage() {
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
              Module B15
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 3 of 7
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B15.3 Networking and Web Concepts Review
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Review devices, networks, IP concepts, DNS, routers, ports,
            protocols, browsers, URLs, HTTPS, certificates, cookies, downloads,
            and safe web decisions.
          </p>

          <div className="mt-8">
            <TopNav />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Beginner"
          moduleTitle="B15: Beginner Capstone Review"
          lessonTitle="Networking and Web Concepts Review"
          lessonNumber={3}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I can explain how devices use names, addresses, routers, services, and protocols to communicate.",
            "I remember that HTTPS protects the connection but does not guarantee every website is trustworthy.",
            "I will use only fictional domains, addresses, logs, browser evidence, and organizations.",
          ]}
        />

        <SectionCard
          eyebrow="Capstone Hook"
          title="A Web Page Is the Final Result of Many Connected Network Steps"
        >
          <p className="leading-8">
            Before a page appears, a device identifies a destination, performs a
            DNS lookup, sends traffic through routers, connects to a service,
            uses a protocol, checks secure-connection information, and receives
            content that the browser displays.
          </p>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Review rule:</span> a professional design,
            familiar logo, or padlock alone does not prove that a website or
            request is trustworthy.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Explain how devices, DNS, IP addresses, routers, ports, and protocols support communication.",
            "Review URLs, HTTPS indicators, certificate warnings, downloads, cookies, and browser permissions.",
            "Use fictional technical and business context to choose safe web and network actions.",
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
          title="Network and Browser Evidence Helps Explain What a User Is Really Connecting To"
        >
          <p className="leading-8">
            Attackers may imitate domains, redirect users, misuse browser
            permissions, or deliver unsafe files. Defenders reduce risk by
            checking the actual destination, secure-connection indicators,
            request, timing, and expected purpose.
          </p>
        </SectionCard>

        <NetworkReviewBoard />

        <SectionCard
          eyebrow="Core Concept"
          title="Names, Addresses, Services, and Protocols Work Together"
        >
          <p className="leading-8">
            The domain name is a human-friendly label. DNS helps find a network
            address. Routers move traffic between networks. Ports identify
            services, and protocols define how the systems communicate.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Networking and Web Review Terms
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
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

        <ConnectionReviewBoard />

        <FakeDashboardCard
          title="Fake Networking and Web Review Dashboard"
          subtitle="Training dashboard using fictional devices, domains, DNS results, services, browser warnings, downloads, and connection decisions."
          metrics={[
            {
              label: "Connections reviewed",
              value: "41",
              note: "Fictional web, DNS, update, learning-platform, email, and cloud-service traffic.",
            },
            {
              label: "Browser warnings",
              value: "7",
              note: "Look-alike domains, certificate problems, unexpected downloads, and permission requests.",
            },
            {
              label: "Expected connections",
              value: "29",
              note: "Approved websites, updates, class tools, and documented cloud services.",
            },
          ]}
        />

        <FakeAlertCard
          title="Look-Alike Login Page Requests Immediate Sign-In"
          severity="High"
          time="2:08 PM"
          source="Fake Browser Safety Monitor"
          details="A fictional login page copies the design of the official learning portal, but the URL contains a substituted letter and the page threatens immediate account closure."
          recommendation="Do not enter credentials. Close the page, access the official portal through a trusted bookmark or typed address, preserve the URL details, and report the event."
        />

        <FakeLogPanel
          title="Fake Web Connection Log"
          logs={[
            "13:42:03 DEVICE name='student_laptop_18' browser='managed'",
            "13:43:19 URL visible='learning-portal-login' domain='lookalike'",
            "13:43:54 DNS result='fictional_external_address'",
            "13:44:08 HTTPS encrypted='true' certificate='valid_for_lookalike_domain'",
            "13:44:41 PAGE request='username_and_password' urgency='high'",
            "13:45:26 USER action='closed_page' credentials_entered='false'",
            "14:08:12 DECISION preserve='true' report='browser_security'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Is This Page Safe to Use?"
          evidence={[
            "A fictional page displays the correct school logo.",
            "The actual domain contains one substituted letter.",
            "The connection uses HTTPS for the look-alike domain.",
            "The page asks for immediate sign-in to prevent account closure.",
          ]}
          question="What is the strongest decision?"
          options={[
            "Do not enter credentials; close the page, use the official site through a trusted route, and report the look-alike domain.",
            "Trust the page because it uses HTTPS.",
            "Trust the page because the logo looks correct.",
            "Enter credentials quickly before the deadline.",
          ]}
          bestAnswer={0}
          explanation="HTTPS protects the connection to the domain shown, but it does not prove that the domain is the legitimate school service."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Web and Network Decisions"
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
          eyebrow="Safe Capstone Lab"
          title="Trace a Fictional Web Connection"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Connection
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Community Learning Portal Visit
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                A fictional student opens a learning portal from a managed
                laptop. The evidence includes the URL, DNS result, router path,
                service, HTTPS status, browser permissions, download prompts,
                and approved business purpose.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Identify the source device, user, and expected task.</li>
                <li>Read the full URL and confirm the actual domain.</li>
                <li>Review the DNS result, destination, service, and timing.</li>
                <li>Check HTTPS indicators and any certificate warning.</li>
                <li>Review download, notification, camera, microphone, and location requests.</li>
                <li>Compare the evidence with approved applications and normal activity.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="A Browser Shows a Certificate Warning"
          scenario="A fictional student visits a website that should be official, but the browser says the secure connection cannot be verified."
          choices={[
            {
              label: "Choice A",
              response:
                "Do not continue or enter information. Use a trusted route, preserve the warning details, and report it if the site should be legitimate.",
              outcome:
                "Best browser decision. Certificate warnings should not be bypassed casually.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Continue because the page logo looks familiar.",
              outcome:
                "Risky. The warning concerns the connection and identity of the site.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Disable browser security so the page loads.",
              outcome:
                "Unsafe. Security protections should not be removed to bypass a warning.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A New Cloud Destination Appears After an Approved App Launch"
          scenario="A fictional managed device begins connecting to a new cloud service on the same day an approved learning application is deployed."
          choices={[
            {
              label: "Choice A",
              response:
                "Verify the change ticket, application owner, domain, destination, service, certificate, and expected device group before classifying it.",
              outcome:
                "Best network decision. The new connection may be legitimate but still requires confirmation.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Assume the destination is malicious because it is unfamiliar.",
              outcome:
                "Risky. Approved changes can create new expected traffic.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Block the service immediately without approval.",
              outcome:
                "Unsafe. Production changes require authorization, impact review, and rollback planning.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Networking and Web Concepts Review Checklist"
          items={[
            "I identify the source device, destination, service, protocol, time, and expected purpose.",
            "I understand how DNS, IP addresses, routers, ports, and protocols support communication.",
            "I read the full URL and confirm the actual domain.",
            "I understand that HTTPS protects the connection but does not guarantee the site's honesty.",
            "I do not bypass certificate warnings or open unexpected downloads.",
            "I compare unfamiliar activity with approved changes and normal baselines.",
            "I preserve evidence and document the safest next action.",
          ]}
        />

        <MiniQuiz
          title="B15.3 Mini Quiz: Networking and Web Concepts Review"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional web connection review. Include the source device, user, URL, domain, DNS result, destination, router path, service, protocol, HTTPS status, certificate result, browser permissions, download request, expected purpose, risk indicators, decision, and next action."
          tips={[
            "Use fictional domains, addresses, devices, logs, services, and organizations only.",
            "Explain why HTTPS does not automatically prove that a website is trustworthy.",
            "Show how technical evidence and business context support the final decision.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Devices use names, addresses, routers, ports, and protocols to communicate.",
            "DNS translates domain names into network addresses.",
            "HTTPS protects the connection but does not guarantee the website or request is trustworthy.",
            "Users should read the full URL, respect certificate warnings, and avoid unexpected downloads.",
            "Strong network and web decisions combine technical indicators with approved purpose and context.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}