import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const trackPath = "/high-school/intermediate";
const modulePath = `${trackPath}/email-security-and-phishing-defense`;

const lessons = [
  {
    number: "I7.1",
    title: "Email Threat Landscape and Message Anatomy",
    slug: "email-threat-landscape-and-message-anatomy",
    focus:
      "Learn how fictional email moves through senders, domains, mail systems, security controls, inboxes, links, attachments, replies, and user decisions.",
    lab:
      "Map a fictional message from sender to recipient and identify which evidence belongs to the message, the delivery path, the mailbox, and the user action.",
  },
  {
    number: "I7.2",
    title: "Sender Identity, Domains, and Email Authentication",
    slug: "sender-identity-domains-and-email-authentication",
    focus:
      "Study display names, addresses, domains, reply paths, lookalike domains, SPF, DKIM, DMARC, alignment, and the limits of authentication results.",
    lab:
      "Compare fictional sender, domain, header, and authentication records to determine what is confirmed, what is suspicious, and what remains unknown.",
  },
  {
    number: "I7.3",
    title: "Phishing Indicators and Social Engineering",
    slug: "phishing-indicators-and-social-engineering",
    focus:
      "Recognize fictional urgency, authority, fear, curiosity, scarcity, impersonation, unusual requests, payment pressure, credential requests, and context mismatches.",
    lab:
      "Review several fictional messages and explain which persuasion techniques are present without relying on spelling mistakes alone.",
  },
  {
    number: "I7.4",
    title: "Links, Attachments, and Safe Verification",
    slug: "links-attachments-and-safe-verification",
    focus:
      "Evaluate fictional links, shortened destinations, attachments, file types, QR codes, cloud shares, login prompts, and safe independent verification.",
    lab:
      "Build a safe verification plan for a fictional message without opening suspicious content, entering credentials, or contacting the sender through the message itself.",
  },
  {
    number: "I7.5",
    title: "Business Email Compromise and Impersonation",
    slug: "business-email-compromise-and-impersonation",
    focus:
      "Understand fictional executive impersonation, vendor fraud, payment changes, payroll updates, gift-card requests, reply-chain abuse, and account compromise indicators.",
    lab:
      "Analyze a fictional payment-change request using sender evidence, business process, approval rules, independent confirmation, and transaction controls.",
  },
  {
    number: "I7.6",
    title: "Email Security Controls and Filtering",
    slug: "email-security-controls-and-filtering",
    focus:
      "Explore fictional filtering, reputation, attachment inspection, link protection, quarantine, warning banners, blocklists, allowlists, reporting, and user education.",
    lab:
      "Review a fictional email-security policy and propose narrow defensive improvements without blocking legitimate communication.",
  },
  {
    number: "I7.7",
    title: "Email Logs, Alerts, and Investigation",
    slug: "email-logs-alerts-and-investigation",
    focus:
      "Correlate fictional message traces, headers, authentication, mailbox actions, security alerts, URL events, attachment results, user reports, and account activity.",
    lab:
      "Create a fictional email investigation timeline that separates delivery, user interaction, policy action, account activity, and evidence gaps.",
  },
  {
    number: "I7.8",
    title: "Email Security and Phishing Defense Lab",
    slug: "email-security-and-phishing-defense-lab",
    focus:
      "Integrate sender analysis, social-engineering review, safe verification, security controls, user response, investigation, remediation, validation, and reporting.",
    lab:
      "Produce a portfolio-ready fictional phishing-defense case report with evidence, findings, actions, owners, validation, monitoring, and residual risk.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Preserve the message safely",
    detail:
      "Keep the fictional message, headers, delivery records, links, attachment names, timestamps, user report, and security alerts without interacting with suspicious content.",
  },
  {
    step: "2",
    title: "Identify the claimed sender and request",
    detail:
      "Record the fictional display name, address, domain, reply path, organization, business purpose, requested action, urgency, and expected relationship.",
  },
  {
    step: "3",
    title: "Correlate technical evidence",
    detail:
      "Compare fictional headers, authentication, message trace, reputation, link analysis, attachment results, mailbox actions, and account activity.",
  },
  {
    step: "4",
    title: "Verify through an independent path",
    detail:
      "Use a known fictional contact method, established business process, trusted portal, approved directory, or separate workflow rather than replying through the message.",
  },
  {
    step: "5",
    title: "Contain and remediate narrowly",
    detail:
      "Apply approved fictional quarantine, blocking, session review, credential reset, account recovery, payment hold, user notification, and related-message search when evidence supports it.",
  },
  {
    step: "6",
    title: "Validate and document",
    detail:
      "Confirm required communication still works, unsafe access is denied, affected users and accounts are reviewed, monitoring is active, and residual risk is recorded.",
  },
];

const objectives = [
  "Explain how fictional messages, senders, domains, mail systems, security controls, mailboxes, and users interact.",
  "Evaluate display names, addresses, domains, headers, reply paths, SPF, DKIM, DMARC, alignment, and their evidence limits.",
  "Recognize social-engineering techniques, impersonation, unusual requests, business-process mismatches, and sensitive-action pressure.",
  "Use safe independent verification for suspicious links, attachments, QR codes, login requests, payment changes, and account-recovery messages.",
  "Interpret fictional email-security controls, quarantine decisions, message traces, alerts, mailbox events, and user reports.",
  "Create a professional fictional phishing-defense investigation with findings, owners, remediation, validation, monitoring, and residual risk.",
];

const evidencePreview = [
  {
    source: "Message content",
    clue:
      "A fictional executive display name requests an urgent gift-card purchase and asks the recipient not to call.",
    limitation:
      "Message language can show pressure and impersonation patterns but does not prove who sent it.",
  },
  {
    source: "Sender address",
    clue:
      "The fictional address uses a lookalike external domain instead of the organization’s normal domain.",
    limitation:
      "A suspicious domain supports concern, but domain appearance alone does not show whether the account was compromised.",
  },
  {
    source: "Authentication results",
    clue:
      "The fictional message passes SPF and DKIM for the lookalike domain but fails the organization’s expected sender relationship.",
    limitation:
      "Authentication can prove the message was authorized by that domain, not that the domain is trustworthy or expected.",
  },
  {
    source: "Business process",
    clue:
      "The fictional request bypasses the normal purchasing and approval workflow.",
    limitation:
      "A process mismatch increases concern but should still be verified through an independent path.",
  },
  {
    source: "User action",
    clue:
      "The fictional recipient reports the message without replying, opening links, or purchasing anything.",
    limitation:
      "The report supports safe handling, but investigators should still search for related recipients and account activity.",
  },
];

const portfolioOutcomes = [
  "A fictional email-message anatomy map showing sender, domain, delivery, filtering, mailbox, link, attachment, and user-action evidence.",
  "A sender and domain verification worksheet covering display name, address, reply path, lookalike domain, SPF, DKIM, DMARC, and alignment.",
  "A social-engineering analysis that identifies persuasion techniques, requested actions, business-process mismatches, and evidence limits.",
  "A safe verification checklist for links, attachments, QR codes, cloud shares, login prompts, payment changes, and recovery messages.",
  "A fictional phishing-defense case report with timeline, findings, actions, owners, validation, monitoring, and residual risk.",
];

export default function EmailSecurityAndPhishingDefenseModulePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.10),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-wrap gap-3 text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Intermediate
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module I7
            </span>
            <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              In Progress
            </span>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.38fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
                I7: Email Security and Phishing Defense
              </h1>

              <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
                Learn how defenders evaluate fictional senders, domains,
                authentication, social engineering, links, attachments,
                impersonation, business email compromise, filtering, message
                traces, user reports, containment, validation, and evidence
                without interacting with suspicious content.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={`${modulePath}/${lessons[0].slug}`}
                  className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
                >
                  Start I7.1
                </Link>

                <Link
                  href={trackPath}
                  className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
                >
                  Back to Intermediate Track
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-cyan-400/30 bg-slate-900/80 p-6 shadow-2xl shadow-cyan-950/30">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
                Module Snapshot
              </p>

              <div className="mt-5 grid gap-4">
                <div className="rounded-xl border border-slate-700 bg-slate-950 p-4">
                  <p className="text-sm text-slate-400">Lessons</p>
                  <p className="mt-1 text-3xl font-black text-white">8</p>
                </div>

                <div className="rounded-xl border border-slate-700 bg-slate-950 p-4">
                  <p className="text-sm text-slate-400">Module Test</p>
                  <p className="mt-1 text-3xl font-black text-white">
                    25 Questions
                  </p>
                </div>

                <div className="rounded-xl border border-slate-700 bg-slate-950 p-4">
                  <p className="text-sm text-slate-400">Portfolio Outcome</p>
                  <p className="mt-1 font-black text-cyan-100">
                    Phishing-Defense Case Report
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
            Main Question
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            How can defenders decide whether a message is trustworthy without
            relying on one clue or taking unsafe actions?
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-emerald-200">
                Defensive Goal
              </p>
              <p className="mt-3 leading-7">
                Combine sender, domain, authentication, message, business,
                security-control, user-action, account, and monitoring evidence
                before deciding whether to allow, report, quarantine, verify,
                contain, remediate, or close.
              </p>
            </div>

            <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
              <p className="text-sm font-black uppercase tracking-[0.16em] text-yellow-200">
                Safety Boundary
              </p>
              <p className="mt-3 leading-7">
                Use only fictional messages and supplied training evidence.
                Never open suspicious attachments, enter credentials, scan
                unknown QR codes, follow suspicious links, contact a sender
                through the message, or test real accounts and mail systems.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
            Professional Workflow
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            A Six-Step Email Defense Process
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {workflow.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-cyan-400/30 bg-slate-950 p-5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
                  {item.step}
                </div>

                <h3 className="mt-4 text-lg font-black text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
            Learning Objectives
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            What You Will Be Able to Do
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {objectives.map((objective, index) => (
              <div
                key={objective}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                  Objective {index + 1}
                </p>
                <p className="mt-3 leading-7 text-blue-50">{objective}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
            Module Lessons
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            Eight Lessons and Defensive Labs
          </h2>

          <div className="mt-6 grid gap-5">
            {lessons.map((lesson, index) => (
              <article
                key={lesson.number}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="max-w-4xl">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-cyan-400 px-3 py-1 text-xs font-black text-slate-950">
                        {lesson.number}
                      </span>

                      <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-slate-300">
                        Lesson {index + 1} of 8
                      </span>
                    </div>

                    <h3 className="mt-4 text-2xl font-black text-white">
                      {lesson.title}
                    </h3>

                    <div className="mt-5 grid gap-4 md:grid-cols-2">
                      <div className="rounded-xl border border-blue-400/25 bg-blue-400/10 p-4">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-200">
                          Focus
                        </p>
                        <p className="mt-2 text-sm leading-6 text-blue-50">
                          {lesson.focus}
                        </p>
                      </div>

                      <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                          Defensive Lab
                        </p>
                        <p className="mt-2 text-sm leading-6 text-emerald-50">
                          {lesson.lab}
                        </p>
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`${modulePath}/${lesson.slug}`}
                    className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
                  >
                    Open {lesson.number}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-yellow-200">
            Fake Evidence Preview
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            One Message, Several Evidence Sources
          </h2>

          <div className="mt-6 grid gap-4">
            {evidencePreview.map((item) => (
              <div
                key={item.source}
                className="grid gap-4 rounded-2xl border border-yellow-300/20 bg-slate-950/70 p-5 lg:grid-cols-[0.35fr_1fr_1fr]"
              >
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                    Source
                  </p>
                  <p className="mt-2 font-black text-white">{item.source}</p>
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Evidence
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-200">
                    {item.clue}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
                    Limitation
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.limitation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-purple-400/30 bg-purple-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-purple-200">
            Portfolio Outcome
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            Build a Complete Phishing-Defense Portfolio Artifact
          </h2>

          <div className="mt-6 grid gap-4">
            {portfolioOutcomes.map((outcome, index) => (
              <div
                key={outcome}
                className="flex gap-4 rounded-2xl border border-purple-300/20 bg-slate-950/70 p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-300 font-black text-slate-950">
                  {index + 1}
                </div>
                <p className="leading-7 text-purple-50">{outcome}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-200">
            Module Assessment
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            I7 Module Test
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-emerald-50">
            Complete a 25-question assessment covering message anatomy, sender
            identity, domain evidence, authentication, social engineering,
            links, attachments, impersonation, business email compromise,
            filtering, logs, investigation, containment, validation, and
            reporting.
          </p>

          <div className="mt-6">
            <Link
              href={`${modulePath}/module-test`}
              className="inline-flex rounded-xl bg-emerald-300 px-5 py-3 font-black text-slate-950 transition hover:bg-emerald-200"
            >
              Open I7 Module Test
            </Link>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-300">
            Module Navigation
          </p>
          <h2 className="mt-2 text-3xl font-black text-white">
            Begin Email Security and Phishing Defense
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`${modulePath}/${lessons[0].slug}`}
              className="rounded-xl bg-cyan-400 px-5 py-3 font-black text-slate-950 transition hover:bg-cyan-300"
            >
              Start I7.1
            </Link>

            <Link
              href={trackPath}
              className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Back to Intermediate Track
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}