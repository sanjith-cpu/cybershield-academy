import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  DefenderChecklist,
  KeyTakeaways,
  LessonProgressBar,
  MiniQuiz,
  PortfolioPrompt,
  ReadinessCheck,
} from "@/components/high-school/HighSchoolComponents";

const trackPath = "/high-school/intermediate";
const modulePath = `${trackPath}/email-security-and-phishing-defense`;
const previousLesson = `${modulePath}/email-security-and-phishing-defense-lab`;

const reviewAreas = [
  {
    title: "Message anatomy and threat landscape",
    detail:
      "Separate the fictional visible message, sender claim, transport path, filtering decision, delivery state, mailbox activity, user interaction, account activity, and business impact.",
  },
  {
    title: "Sender identity and authentication",
    detail:
      "Interpret fictional display names, actual addresses, domains, Reply-To, envelope senders, SPF, DKIM, DMARC, and alignment without treating authentication as complete legitimacy.",
  },
  {
    title: "Social engineering",
    detail:
      "Recognize fictional urgency, authority, fear, curiosity, secrecy, scarcity, helpfulness, familiarity, impersonation, pretext, and business-process bypass.",
  },
  {
    title: "Links and attachments",
    detail:
      "Distinguish fictional visible link text, encoded and final destinations, redirects, QR codes, cloud shares, file names, content types, structures, security verdicts, and interaction stages.",
  },
  {
    title: "Business email compromise",
    detail:
      "Evaluate fictional executive impersonation, vendor fraud, payroll diversion, gift-card requests, invoice changes, compromised accounts, and reply-chain abuse.",
  },
  {
    title: "Email security controls",
    detail:
      "Explain fictional allow, warn, junk, quarantine, reject, block, post-delivery action, false positives, false negatives, narrow tuning, exceptions, validation, and rollback.",
  },
  {
    title: "Logs and investigation",
    detail:
      "Correlate fictional message traces, headers, gateway events, mailbox events, URL records, attachment events, identity activity, user reports, business systems, and evidence gaps.",
  },
  {
    title: "Integrated defense",
    detail:
      "Create separate conclusions for the fictional message, each recipient, account or device activity, business impact, control performance, response, monitoring, and closure.",
  },
];

const examRules = [
  "Answer all twenty-five questions before revealing explanations.",
  "Use the strongest evidence-based answer, not the most dramatic answer.",
  "Treat every message, domain, address, link, attachment, user, account, device, vendor, and organization as fictional.",
  "Separate authentication, legitimacy, interaction, account impact, and business impact.",
  "Choose independent verification paths that do not rely on suspicious message content.",
  "Do not assume a security-tool verdict, warning, delivery state, click, or failed sign-in proves the entire case.",
  "Use narrow containment and validation instead of broad blocking or unsupported account actions.",
  "Review missed questions by identifying the exact evidence layer you confused.",
];

const questions = [
  {
    question:
      "Which statement best describes the visible inbox view of a fictional message?",
    choices: [
      "It is one evidence layer that must be combined with transport, control, user, account, and business evidence.",
      "It proves the physical sender’s identity.",
      "It shows every redirect and final destination automatically.",
      "It proves whether the recipient completed the requested action.",
    ],
    answer: 0,
    explanation:
      "The visible message is important, but professional analysis also reviews hidden and downstream evidence.",
  },
  {
    question:
      "A fictional display name matches the organization’s Finance Director, but the actual address uses an unfamiliar external domain. What is the strongest response?",
    choices: [
      "Preserve the message, compare the exact domain, and verify the request through a known independent contact and business process.",
      "Trust the message because the display name is correct.",
      "Reply to the message and ask whether it is legitimate.",
      "Complete the request before the deadline and investigate later.",
    ],
    answer: 0,
    explanation:
      "Display names can be copied, and verification should not use a path controlled by the suspicious message.",
  },
  {
    question:
      "What does a fictional SPF pass most directly support?",
    choices: [
      "The sending system is authorized for the evaluated envelope-sender domain.",
      "The visible From identity is always legitimate.",
      "The mailbox account is uncompromised.",
      "The business request is approved.",
    ],
    answer: 0,
    explanation:
      "SPF evaluates transport authorization for a domain, not complete sender or request legitimacy.",
  },
  {
    question:
      "What does a fictional DKIM pass most directly support?",
    choices: [
      "A signature verifies for the signing domain and the covered message content.",
      "The physical sender is known.",
      "Every visible field was protected.",
      "The requested payment is authorized.",
    ],
    answer: 0,
    explanation:
      "DKIM verifies a cryptographic domain signature for covered content, not business authorization.",
  },
  {
    question:
      "A fictional lookalike domain passes SPF, DKIM, and DMARC for itself. Which conclusion is strongest?",
    choices: [
      "The lookalike domain authenticated its own message, but it may still be impersonating the expected organization.",
      "The message must be legitimate.",
      "The recipient should follow every instruction.",
      "The domain belongs to the organization named in the display name.",
    ],
    answer: 0,
    explanation:
      "Authentication can be valid for a deceptive or unrelated domain.",
  },
  {
    question:
      "Which fictional message most clearly uses secrecy as a social-engineering technique?",
    choices: [
      "“Do not call or discuss this confidential executive gift-card request.”",
      "“The approved monthly report is available in the trusted portal.”",
      "“The class meeting begins tomorrow at 2:00 PM.”",
      "“Your purchase order was approved through the normal system.”",
    ],
    answer: 0,
    explanation:
      "Secrecy attempts to remove normal review and independent verification.",
  },
  {
    question:
      "Why is professional grammar weak evidence of message legitimacy?",
    choices: [
      "Fictional deceptive messages can use templates, copied text, polished writing, and accurate business details.",
      "Legitimate messages always contain mistakes.",
      "Grammar reveals the physical sender.",
      "Security tools automatically trust professional writing.",
    ],
    answer: 0,
    explanation:
      "Writing quality should be considered only as limited context, not proof.",
  },
  {
    question:
      "Which combination most strongly supports a fictional phishing pattern?",
    choices: [
      "Unexpected domain, urgent sensitive request, unusual destination, process bypass, and failed independent verification.",
      "A familiar logo by itself.",
      "One spelling mistake.",
      "An external-sender warning by itself.",
    ],
    answer: 0,
    explanation:
      "Several correlated inconsistencies are stronger than one isolated clue.",
  },
  {
    question:
      "What is the safest way to verify an unexpected fictional password-expiration message?",
    choices: [
      "Open the known trusted account portal independently and check the account status.",
      "Use the message login button.",
      "Reply to the sender.",
      "Call the phone number in the message signature.",
    ],
    answer: 0,
    explanation:
      "Independent portal access avoids a message-controlled destination.",
  },
  {
    question:
      "Why should visible link text not be trusted by itself?",
    choices: [
      "The displayed label can differ from the encoded destination and final redirected domain.",
      "Every button is malicious.",
      "Visible text always reveals the final page.",
      "Legitimate messages cannot contain links.",
    ],
    answer: 0,
    explanation:
      "A trusted-looking label can conceal another destination.",
  },
  {
    question:
      "A fictional link uses HTTPS and displays a familiar login page. What does HTTPS prove?",
    choices: [
      "The connection is encrypted, not that the destination or request is trustworthy.",
      "The page belongs to the expected organization.",
      "The account is safe.",
      "The physical sender is verified.",
    ],
    answer: 0,
    explanation:
      "Connection security and destination trust are separate questions.",
  },
  {
    question:
      "A fictional attachment named Invoice.pdf is detected as HTML content. What is the strongest response?",
    choices: [
      "Do not open it; preserve the evidence and verify the invoice, sender, file type, and business purpose independently.",
      "Open it because the displayed extension is PDF.",
      "Enable active content so the invoice can load.",
      "Forward it to another user for testing.",
    ],
    answer: 0,
    explanation:
      "The displayed name does not prove the actual file type or safety.",
  },
  {
    question:
      "Which statement correctly separates fictional attachment stages?",
    choices: [
      "Presence, delivery, download, open, active-content use, execution, and impact require separate evidence.",
      "Message delivery proves execution.",
      "Download proves account compromise.",
      "Opening the email proves the attachment was opened.",
    ],
    answer: 0,
    explanation:
      "Each interaction and impact stage must be supported independently.",
  },
  {
    question:
      "A fictional known vendor domain sends an urgent bank-account change and passes aligned authentication. What is the safest action?",
    choices: [
      "Place an approved transaction hold and verify through the known vendor contact and procurement process.",
      "Approve the change because the domain is real.",
      "Reply to the message for confirmation.",
      "Use the new phone number in the attached letter.",
    ],
    answer: 0,
    explanation:
      "A legitimate mailbox can be compromised, and financial process controls still apply.",
  },
  {
    question:
      "Which evidence combination most strongly supports possible compromise of a fictional legitimate vendor mailbox?",
    choices: [
      "Authenticated real-domain message, owner denial, changed Reply-To, unrecognized session, and unfamiliar mailbox rule.",
      "A professional signature.",
      "A delivered message.",
      "An urgent subject line.",
    ],
    answer: 0,
    explanation:
      "Message, owner, identity, and mailbox evidence together support the conclusion.",
  },
  {
    question:
      "Why is a narrow transaction hold useful during a fictional BEC investigation?",
    choices: [
      "It can prevent high-impact change while evidence and independent verification are completed.",
      "It proves the sender is malicious.",
      "It permanently blocks the vendor.",
      "It replaces account recovery.",
    ],
    answer: 0,
    explanation:
      "A temporary hold protects the business without overstating the evidence.",
  },
  {
    question:
      "What does a fictional gateway quarantine decision directly represent?",
    choices: [
      "A control action based on the evidence and policy available at that time.",
      "Perfect proof that the message is malicious.",
      "Proof that every recipient clicked.",
      "Proof of account compromise.",
    ],
    answer: 0,
    explanation:
      "Quarantine is a defensive decision, not complete proof of sender intent or downstream impact.",
  },
  {
    question:
      "What is the strongest response to a fictional false positive affecting a required vendor invoice?",
    choices: [
      "Verify the invoice, identify the exact failing condition, tune narrowly, retain other controls, and test legitimate and unsafe examples.",
      "Allowlist the entire cloud provider.",
      "Disable attachment analysis for the vendor.",
      "Release every future message automatically.",
    ],
    answer: 0,
    explanation:
      "Narrow tuning restores business use while preserving protection.",
  },
  {
    question:
      "Which fictional allowlist design is strongest?",
    choices: [
      "Specific identity and purpose, accountable owners, preserved controls, expiration, monitoring, validation, and rollback.",
      "Permanent bypass for an entire provider.",
      "Undocumented exception requested through chat.",
      "Removal of all scanning for one department.",
    ],
    answer: 0,
    explanation:
      "Strong exceptions are narrow, accountable, time limited, monitored, tested, and reversible.",
  },
  {
    question:
      "What is post-delivery quarantine?",
    choices: [
      "A fictional message is removed or restricted after delivery because new evidence changes the verdict.",
      "A message is trusted permanently before analysis.",
      "A user deletes a draft.",
      "A sender changes the subject.",
    ],
    answer: 0,
    explanation:
      "User reports and updated threat evidence can require containment after initial delivery.",
  },
  {
    question:
      "Which source most directly confirms fictional message delivery and final mailbox or quarantine state?",
    choices: [
      "Message trace and delivery records.",
      "The display name.",
      "The email signature.",
      "The requested business action.",
    ],
    answer: 0,
    explanation:
      "Trace evidence follows message transport and delivery state.",
  },
  {
    question:
      "A fictional URL-protection record confirms a click. What is the strongest direct conclusion?",
    choices: [
      "The recorded user or device visited the linked destination at the recorded time.",
      "Credentials were definitely entered.",
      "The account was definitely compromised.",
      "A payment was completed.",
    ],
    answer: 0,
    explanation:
      "A click confirms destination interaction, while later actions require additional evidence.",
  },
  {
    question:
      "Why should fictional timestamps be normalized during an investigation?",
    choices: [
      "Different systems may use different time zones, clocks, ingestion delays, and event-generation times.",
      "Normalization proves user intent.",
      "Every system already uses the same time.",
      "It removes the need for correlation identifiers.",
    ],
    answer: 0,
    explanation:
      "A reliable timeline requires a common time basis and awareness of timing limitations.",
  },
  {
    question:
      "A fictional user clicks a phishing page, but no form submission, factor change, recovery, persistent session, or application change is found. Which conclusion is strongest?",
    choices: [
      "The click is confirmed, while credential entry and account compromise are not confirmed.",
      "The account is definitely compromised.",
      "The user did not click.",
      "The phishing page is harmless.",
    ],
    answer: 0,
    explanation:
      "Message interaction and account impact must remain separate conclusions.",
  },
  {
    question:
      "Which module-closure plan is strongest?",
    choices: [
      "Validate message scope, recipient interactions, accounts, devices, business systems, containment, legitimate communication, monitoring, evidence gaps, residual risk, and owner approval.",
      "Close when the suspicious messages are deleted.",
      "Close after one password reset.",
      "Close because no payment loss is visible.",
    ],
    answer: 0,
    explanation:
      "Professional closure combines technical, user, business, monitoring, and governance evidence.",
  },
];

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

function Navigation() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href={previousLesson}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Previous Lesson
      </Link>

      <Link
        href={modulePath}
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      >
        Back to Module
      </Link>

      <Link
        href={trackPath}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
      >
        Intermediate Track
      </Link>
    </div>
  );
}

export default function EmailSecurityAndPhishingDefenseModuleTestPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.10),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Intermediate
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module I7
            </span>

            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module Test
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I7 Module Test: Email Security and Phishing Defense
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Demonstrate that you can analyze fictional messages, sender
            identities, authentication, social engineering, links, attachments,
            business email compromise, filtering decisions, logs, user actions,
            account evidence, business impact, and case closure.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I7: Email Security and Phishing Defense"
          lessonTitle="Module Test"
          lessonNumber={9}
          totalLessons={9}
        />

        <ReadinessCheck
          title="Module Test Readiness"
          items={[
            "I completed or reviewed I7.1 through I7.8.",
            "I can explain what sender authentication proves and does not prove.",
            "I can identify persuasion techniques and business-process mismatches.",
            "I can separate link or attachment presence from interaction and impact.",
            "I can analyze BEC using independent verification and systems of record.",
            "I can distinguish filtering decisions, false positives, false negatives, and narrow tuning.",
            "I can correlate fictional logs into a timeline without overstating conclusions.",
            "I will answer before revealing explanations.",
          ]}
        />

        <SectionCard
          eyebrow="Test Instructions"
          title="Complete the Assessment Like a Defender"
        >
          <div className="grid gap-3 md:grid-cols-2">
            {examRules.map((rule, index) => (
              <div
                key={rule}
                className="flex gap-4 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-300 font-black text-slate-950">
                  {index + 1}
                </div>

                <p className="text-sm leading-7 text-cyan-50">{rule}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Review Map
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Areas Covered by the Test
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {reviewAreas.map((area, index) => (
              <div
                key={area.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                  Area {index + 1}
                </p>

                <h3 className="mt-2 text-lg font-black text-white">
                  {area.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {area.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <MiniQuiz
          title="I7 Module Test: 25 Questions"
          questions={questions}
        />

        <SectionCard
          eyebrow="Score Interpretation"
          title="Use Your Result to Guide Review"
        >
          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-lg font-black">23–25 correct</p>
              <p className="mt-2 text-sm leading-6">
                Strong module mastery. Review explanations for any missed
                evidence limitations.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50">
              <p className="text-lg font-black">20–22 correct</p>
              <p className="mt-2 text-sm leading-6">
                Ready to continue after reviewing the specific topics connected
                to missed questions.
              </p>
            </div>

            <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
              <p className="text-lg font-black">16–19 correct</p>
              <p className="mt-2 text-sm leading-6">
                Revisit the lessons on authentication, interaction stages,
                business verification, and investigation evidence.
              </p>
            </div>

            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-50">
              <p className="text-lg font-black">0–15 correct</p>
              <p className="mt-2 text-sm leading-6">
                Review I7.1 through I7.8 and repeat the test after rebuilding
                your evidence-based reasoning.
              </p>
            </div>
          </div>
        </SectionCard>

        <DefenderChecklist
          title="I7 Module Mastery Checklist"
          items={[
            "I can separate fictional visible message content from transport, filtering, mailbox, user, account, and business evidence.",
            "I can interpret display names, addresses, domains, Reply-To, SPF, DKIM, DMARC, and alignment accurately.",
            "I can identify urgency, authority, fear, secrecy, curiosity, familiarity, impersonation, and process bypass.",
            "I can analyze links, redirects, QR codes, cloud shares, attachments, content types, verdicts, and safe verification paths.",
            "I can evaluate fictional executive, vendor, payroll, invoice, gift-card, account-recovery, and reply-chain BEC cases.",
            "I can distinguish allow, warning, quarantine, rejection, false positive, false negative, exception, and post-delivery action.",
            "I can correlate trace, header, gateway, mailbox, URL, attachment, identity, user, device, and business records.",
            "I can create separate message, recipient, account, device, business-impact, response, and closure conclusions.",
            "I can document facts, conclusions, alternatives, confidence, evidence gaps, owners, validation, monitoring, rollback, and residual risk.",
            "I use only fictional evidence and follow safe, defensive, authorized practices.",
          ]}
        />

        <PortfolioPrompt
          title="Module Completion Artifact"
          prompt="Revise your fictional I7.8 Meadowbrook Email Security and Phishing Defense Case Report using what you learned from the module test. Add a one-page correction log that identifies each missed question, the evidence layer you confused, the corrected reasoning, and the lesson section you reviewed."
          tips={[
            "Keep sender authentication, message legitimacy, user interaction, account impact, device impact, and business impact separate.",
            "Use evidence identifiers and source limitations in every major conclusion.",
            "Include narrow containment, positive validation, negative validation, monitoring, rollback, and reopening criteria.",
            "Use only fictional evidence and never include real messages, links, files, users, accounts, devices, payroll records, or private information.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Email defense depends on combining technical, human, and business evidence rather than trusting one clue or tool.",
            "Authentication verifies specific domain relationships but does not prove safe intent, account integrity, or business authorization.",
            "Message delivery, user interaction, account or device activity, and business impact require separate evidence.",
            "Independent verification should use trusted systems and contacts outside the suspicious message.",
            "Filtering improvements should be narrow, owned, validated with legitimate and unsafe examples, monitored, and reversible.",
            "Professional closure documents what is confirmed, what remains unknown, who owns the risk, and what would reopen the case.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            Return to Module I7
          </h2>

          <div className="mt-5">
            <Navigation />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}