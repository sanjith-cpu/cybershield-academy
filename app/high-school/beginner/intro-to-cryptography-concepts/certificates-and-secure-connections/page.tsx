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

const modulePath =
  "/high-school/beginner/intro-to-cryptography-concepts";
const previousLesson =
  `${modulePath}/hashing-and-data-integrity`;
const nextLesson =
  `${modulePath}/cryptography-decision-lab`;

const vocab = [
  [
    "Digital certificate",
    "A trusted digital record that connects an identity, such as a website or service, with a public key.",
  ],
  [
    "Certificate authority",
    "A trusted organization or system that issues and validates digital certificates.",
  ],
  [
    "HTTPS",
    "The secure form of web communication that uses cryptography to protect data between a browser and website.",
  ],
  [
    "Domain name",
    "The human-readable website name that users should compare with the identity shown in the secure connection.",
  ],
  [
    "Certificate warning",
    "A browser or application alert that indicates the secure connection or certificate cannot be trusted normally.",
  ],
  [
    "Certificate expiration",
    "The date after which a certificate should no longer be treated as currently valid.",
  ],
];

const workflowStages = [
  {
    title: "Request the website",
    example:
      "A user enters or selects the expected domain through a trusted route.",
  },
  {
    title: "Receive the certificate",
    example:
      "The website presents a certificate that connects its identity with a public key.",
  },
  {
    title: "Validate trust",
    example:
      "The browser checks the certificate authority, domain, date, and other trust information.",
  },
  {
    title: "Create the secure connection",
    example:
      "If validation succeeds, the browser and website establish protected communication.",
  },
];

const conceptRows = [
  {
    item: "Expected school portal",
    source: "Certificate matches the correct domain and is currently valid",
    review:
      "Continue only through the official trusted route and confirm no warnings are present.",
  },
  {
    item: "Wrong domain name",
    source: "Certificate is valid for a different website",
    review:
      "Stop and navigate through an official bookmark or trusted organization page.",
  },
  {
    item: "Expired certificate",
    source: "Certificate is outside its approved validity period",
    review:
      "Do not enter sensitive data; report the warning and wait for an approved correction.",
  },
  {
    item: "Untrusted issuer",
    source: "Browser cannot establish trust in the certificate authority",
    review:
      "Do not bypass the warning unless authorized support confirms a managed exception.",
  },
  {
    item: "Secure connection",
    source: "Expected domain, trusted certificate, current dates, and no warnings",
    review:
      "The connection is protected, but users must still verify the website purpose and content.",
  },
];

const mistakes = [
  "Assuming the lock icon proves the website itself is honest or safe.",
  "Ignoring a domain-name mismatch because the page design looks familiar.",
  "Bypassing certificate warnings to reach a login page faster.",
  "Entering passwords or private data before checking the expected website name.",
  "Assuming HTTPS protects information after it reaches an unsafe or fraudulent website.",
  "Trusting screenshots of certificates instead of the browser's current connection details.",
];

const quizQuestions = [
  {
    question: "What does a digital certificate connect?",
    choices: [
      "An identity, such as a website, with a public key.",
      "A password with a backup folder.",
      "A filename with a cloud account.",
      "A device color with a network.",
    ],
    answer: 0,
    explanation:
      "A digital certificate helps users and systems connect a trusted identity with a public key.",
  },
  {
    question: "What does HTTPS help protect?",
    choices: [
      "Data moving between the browser and website.",
      "Every file stored anywhere forever.",
      "The honesty of all website content.",
      "All user decisions after visiting the page.",
    ],
    answer: 0,
    explanation:
      "HTTPS protects the connection in transit, but it does not guarantee that every website or action is trustworthy.",
  },
  {
    question: "What should a user do after seeing a certificate warning on a login page?",
    choices: [
      "Stop, avoid entering information, verify the official site, and report the warning.",
      "Bypass the warning immediately.",
      "Enter the password before the page closes.",
      "Disable browser security.",
    ],
    answer: 0,
    explanation:
      "Certificate warnings may indicate an identity, date, trust, or connection problem and should not be ignored.",
  },
  {
    question: "Why should the domain name be checked?",
    choices: [
      "To confirm the secure connection belongs to the expected website.",
      "To increase storage capacity.",
      "To replace the certificate authority.",
      "To remove the need for passwords.",
    ],
    answer: 0,
    explanation:
      "A valid certificate for the wrong domain does not prove the user reached the intended website.",
  },
  {
    question: "Does a lock icon prove a website is honest?",
    choices: [
      "No. It indicates a protected connection, not guaranteed trustworthy content or intent.",
      "Yes. Every locked site is safe.",
      "Yes. It removes the need to check the domain.",
      "Yes. It guarantees the website cannot collect data.",
    ],
    answer: 0,
    explanation:
      "Connection security and website trustworthiness are related but different questions.",
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
      <h2 className="mt-2 text-2xl font-bold text-white">Continue Module B12</h2>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={previousLesson}
          className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
        >
          Previous: B12.5 Hashing and Data Integrity
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
          Next: B12.7 Cryptography Decision Lab
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

function ConnectionFlow() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Visual Diagram
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        How a Secure Website Connection Begins
      </h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        A browser checks identity and trust evidence before establishing a
        protected connection with the expected website.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        {workflowStages.map((stage, index) => (
          <div
            key={stage.title}
            className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400 text-xl font-black text-slate-950">
              {index + 1}
            </div>
            <h3 className="mt-4 text-lg font-black text-white">{stage.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {stage.example}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
        <span className="font-bold">Defender rule:</span> never treat a
        certificate warning as a minor inconvenience when passwords, payments,
        private records, or account recovery are involved.
      </div>
    </section>
  );
}

function FakeCertificatePanel() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fake Dashboard
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Certificate and Connection Review Panel
          </h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            This fictional panel compares domains, certificate authorities,
            validity dates, browser warnings, HTTPS, and user decisions.
          </p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-200">
          Fake Data
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700">
        {conceptRows.map((row) => (
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

function TrustBoard() {
  const areas = [
    {
      name: "Domain",
      saferQuestion:
        "Does the certificate and address match the exact website the user intended to visit?",
      saferChoice:
        "Use official bookmarks, trusted organization links, and careful domain-name review.",
    },
    {
      name: "Issuer",
      saferQuestion:
        "Does the browser trust the certificate authority or approved internal authority?",
      saferChoice:
        "Do not bypass untrusted-issuer warnings without verified authorized support.",
    },
    {
      name: "Validity",
      saferQuestion:
        "Is the certificate currently valid and not expired or not yet active?",
      saferChoice:
        "Stop and report date-related certificate warnings before entering sensitive information.",
    },
    {
      name: "Connection meaning",
      saferQuestion:
        "What does HTTPS protect, and what still requires human judgment?",
      saferChoice:
        "Treat HTTPS as connection protection while separately checking website identity, purpose, content, and requests.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        Technical Breakdown
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">
        Certificate Trust Board
      </h2>
      <p className="mt-3 text-slate-300">
        Secure connection decisions depend on the expected domain, trusted
        issuer, current validity, and correct understanding of what HTTPS means.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {areas.map((area) => (
          <div
            key={area.name}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
          >
            <h3 className="text-xl font-black text-cyan-100">{area.name}</h3>
            <div className="mt-4 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-yellow-200">
                Review question
              </p>
              <p className="mt-2 text-sm">{area.saferQuestion}</p>
            </div>
            <div className="mt-3 rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-100">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                Safer choice
              </p>
              <p className="mt-2 text-sm">{area.saferChoice}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function CertificatesAndSecureConnectionsPage() {
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
              Module B12
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 6 of 7
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            B12.6 Certificates and Secure Connections
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Learn how digital certificates, trusted authorities, domain checks,
            HTTPS, expiration dates, and browser warnings help establish safer
            connections with websites and online services.
          </p>

          <div className="mt-8">
            <TopNav />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Beginner"
          moduleTitle="B12: Introduction to Cryptography Concepts"
          lessonTitle="Certificates and Secure Connections"
          lessonNumber={6}
          totalLessons={7}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I understand that public keys must be connected to trusted identities.",
            "I will use fictional websites, certificates, domains, browsers, accounts, and services only.",
            "I am ready to review domains, issuers, validity dates, HTTPS, warnings, and connection meaning.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Secure Connection Begins With Identity Verification"
        >
          <p className="leading-8">
            Encryption protects data moving between a browser and website, but
            the browser must first determine which website presented the public
            key. Digital certificates help connect that key to an expected
            identity.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Safety reminder:</span> every website,
            certificate, domain, browser warning, account, and service in this
            lesson is fictional. Never enter real credentials or personal data
            into a site displaying an unexplained certificate warning.
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-3">
          {[
            "Explain how certificates connect identities with public keys.",
            "Recognize the roles of certificate authorities, domains, validity dates, HTTPS, and browser warnings.",
            "Choose safer responses to expired, mismatched, untrusted, or otherwise suspicious certificate evidence.",
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
          title="An Encrypted Connection to the Wrong Website Is Still Dangerous"
        >
          <p className="leading-8">
            A fraudulent site may also use HTTPS. Defenders must confirm the
            exact domain, expected organization, certificate trust, and request
            being made before entering sensitive information.
          </p>
        </SectionCard>

        <ConnectionFlow />

        <SectionCard
          eyebrow="Core Concept"
          title="Certificates Help Bind Public Keys to Identities"
        >
          <p className="leading-8">
            A certificate contains identity and public-key information that a
            browser validates through trusted authorities and other checks.
            When validation succeeds, the browser can create a protected HTTPS
            connection with the expected website.
          </p>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Key Vocabulary
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Terms for Certificates and Secure Connections
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

        <TrustBoard />
        <FakeCertificatePanel />

        <FakeDashboardCard
          title="Fake Certificate Validation Dashboard"
          subtitle="Training dashboard using fictional domains, issuers, certificates, validity dates, warnings, and HTTPS connection evidence."
          metrics={[
            {
              label: "Connections reviewed",
              value: "21",
              note: "Fictional school portals, stores, cloud services, messaging platforms, and support sites.",
            },
            {
              label: "Valid trusted connections",
              value: "16",
              note: "Expected domain, trusted issuer, current dates, and no warnings.",
            },
            {
              label: "Warnings investigated",
              value: "5",
              note: "Domain mismatches, expiration, untrusted issuers, and unexpected redirects.",
            },
          ]}
        />

        <FakeAlertCard
          title="Certificate Does Not Match the Login Domain"
          severity="Critical"
          time="9:47 AM"
          source="Fake Secure Connection Training"
          details="A fictional school login page presents a certificate for a different domain while requesting usernames, passwords, and MFA codes."
          recommendation="Do not continue or enter information. Close the page, use the official school portal, preserve the warning details, and report the incident."
        />

        <FakeLogPanel
          title="Fake Certificate Validation Log"
          logs={[
            "09:21:08 REQUEST domain='portal.school-example.test'",
            "09:25:31 CERTIFICATE subject='login-other-example.test'",
            "09:30:17 DOMAIN_CHECK match='false'",
            "09:35:44 BROWSER_WARNING type='name_mismatch'",
            "09:40:26 USER_ACTION credentials_entered='false' page_closed='true'",
            "09:47:03 RESPONSE official_portal='opened' report='submitted'",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Should the User Continue?"
          evidence={[
            "A fictional login page looks visually identical to the official school portal.",
            "The address uses a different domain.",
            "The browser displays a certificate-name mismatch.",
            "The page requests a password and MFA code.",
          ]}
          question="What is the safest response?"
          options={[
            "Do not enter information; close the page, use the official portal, preserve the warning, and report it.",
            "Continue because the design looks correct.",
            "Bypass the warning and change the password later.",
            "Send the MFA code to test whether the site works.",
          ]}
          bestAnswer={0}
          explanation="The domain mismatch and certificate warning mean the expected identity has not been verified."
        />

        <SectionCard
          eyebrow="Common Mistakes"
          title="Mistakes That Weaken Secure Connection Decisions"
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
          title="Review Fictional Certificate and Browser Evidence"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Fake Evidence Set
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Secure Connection Review
              </h3>
              <p className="mt-3 text-slate-300">
                A fictional student reviews a valid portal, expired certificate,
                domain mismatch, untrusted issuer, unexpected redirect, and
                secure connection to a suspicious website.
              </p>
            </div>
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-200">
                Defender Review Steps
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Identify the expected website and official domain.</li>
                <li>Compare the displayed domain and certificate identity.</li>
                <li>Review the issuer and validity dates.</li>
                <li>Record any browser warning or unexpected redirect.</li>
                <li>Explain what HTTPS protects and what it does not prove.</li>
                <li>Choose whether to continue, stop, verify, or report.</li>
              </ul>
            </div>
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="The Certificate Is Expired"
          scenario="A fictional cloud-storage login page shows an expired-certificate warning while requesting a username and password."
          choices={[
            {
              label: "Choice A",
              response:
                "Do not enter credentials; use the official support route, report the warning, and wait for a trusted correction.",
              outcome:
                "Best defensive choice. The connection cannot be validated normally.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Bypass the warning because the website worked yesterday.",
              outcome:
                "Risky. Past trust does not resolve the current validation problem.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Disable browser warnings permanently.",
              outcome:
                "Unsafe. This removes an important defensive layer.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Suspicious Site Uses HTTPS"
          scenario="A fictional giveaway website uses HTTPS but asks for a school password, private documents, and an MFA code."
          choices={[
            {
              label: "Choice A",
              response:
                "Do not submit information; check the domain, purpose, organization, and request, then report the site.",
              outcome:
                "Best defensive choice. HTTPS protects the connection but does not make the request trustworthy.",
              tone: "best",
            },
            {
              label: "Choice B",
              response:
                "Submit the information because the lock icon is visible.",
              outcome:
                "Risky. Connection encryption does not prove safe intent.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response:
                "Send only the MFA code because it expires quickly.",
              outcome:
                "Unsafe. MFA codes are sensitive account secrets.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Certificates and Secure Connections Checklist"
          items={[
            "I confirm the exact expected domain before entering sensitive information.",
            "I understand that certificates connect identities with public keys.",
            "I review certificate authority trust and validity dates.",
            "I stop when the browser shows an unexplained certificate warning.",
            "I use official bookmarks or trusted organization links.",
            "I understand that HTTPS protects the connection, not every website request or intention.",
            "I report suspicious domains, redirects, certificate mismatches, and credential requests.",
          ]}
        />

        <MiniQuiz
          title="B12.6 Mini Quiz: Certificates and Secure Connections"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a one-page fictional certificate review matrix. Include six websites, expected domain, displayed domain, certificate issuer, validity status, warning type, HTTPS status, user decision, and reporting step."
          tips={[
            "Use fictional websites, certificates, domains, browsers, accounts, services, and organizations only.",
            "Do not include real usernames, passwords, MFA codes, recovery codes, or personal data.",
            "Explain the difference between a protected connection and a trustworthy website request.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Digital certificates connect identities with public keys.",
            "Browsers validate domains, issuers, dates, and other trust evidence.",
            "HTTPS protects data moving between the browser and website.",
            "A lock icon does not guarantee honest content or safe requests.",
            "Certificate warnings, domain mismatches, and unexpected redirects should not be ignored.",
          ]}
        />

        <BottomNav />
      </div>

      <Footer />
    </main>
  );
}