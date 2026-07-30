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

const trackPath = "/high-school/advanced";
const modulePath =
  `${trackPath}/advanced-cyber-ethics-and-legal-boundaries`;
const previousLesson =
  `${modulePath}/research-boundaries-and-safe-environments`;
const nextLesson =
  `${modulePath}/ethics-in-ai-and-automation`;

const objectives = [
  "Explain how conflicts of interest can weaken independent judgment even when no harmful action has occurred.",
  "Distinguish actual, potential, perceived, financial, personal, academic, organizational, supplier, and role-based conflicts in fictional cybersecurity work.",
  "Identify when disclosure, recusal, independent review, reassignment, documentation, or additional approval is required.",
  "Evaluate how gifts, favors, friendships, pressure, secrecy requests, career incentives, public recognition, and divided loyalty can affect trust.",
  "Create a portfolio-ready conflict-of-interest and trust response using only invented people, organizations, systems, evidence, decisions, dates, and outcomes."
];
const vocabulary = [
  [
    "Conflict of interest",
    "A fictional situation in which personal, financial, academic, professional, organizational, or relationship-based interests could interfere with independent cybersecurity judgment."
  ],
  [
    "Actual conflict",
    "A conflict already affecting or directly connected to a fictional decision, review, recommendation, or action."
  ],
  [
    "Potential conflict",
    "A situation that could become a conflict if circumstances, responsibilities, benefits, or decisions change."
  ],
  [
    "Perceived conflict",
    "A situation that may reasonably appear to affect independence even when no improper behavior is proven."
  ],
  [
    "Disclosure",
    "A clear record of the fictional relationship, interest, pressure, benefit, or competing duty that could affect trust."
  ],
  [
    "Recusal",
    "Withdrawing from a fictional decision, review, approval, or investigation because independence cannot be protected adequately."
  ],
  [
    "Independent review",
    "A separate fictional evaluation by a qualified person without the same conflict or incentive."
  ],
  [
    "Divided loyalty",
    "Competing responsibilities to different fictional people, teams, organizations, projects, or personal interests."
  ],
  [
    "Undue influence",
    "Pressure, authority, reward, threat, secrecy request, or relationship that could distort professional judgment."
  ],
  [
    "Gift and benefit risk",
    "The possibility that money, favors, discounts, travel, recognition, access, opportunities, or future employment could influence a decision."
  ],
  [
    "Professional independence",
    "The ability to make fictional recommendations based on authorization, evidence, risk, safety, and ownership rather than personal advantage."
  ],
  [
    "Transparency",
    "Providing enough accurate information about a fictional conflict, decision, limitation, owner, and control for others to review the process."
  ],
  [
    "Trust boundary",
    "The point at which a fictional person or organization relies on another role to act honestly, competently, independently, and within authority."
  ],
  [
    "Retaliation risk",
    "The possibility that someone may be punished, excluded, threatened, or disadvantaged for reporting a concern or conflict."
  ],
  [
    "Cooling-off concept",
    "A fictional period intended to reduce influence when moving between roles, suppliers, employers, projects, or decision responsibilities."
  ],
  [
    "Conflict-management plan",
    "A documented fictional combination of disclosure, review, limits, reassignment, approval, monitoring, and closure controls."
  ]
];
const conflictTypes = [
  {
    "type": "Personal relationship conflict",
    "example": "A fictional analyst is asked to investigate an account belonging to a close friend or family member.",
    "risk": "The analyst may become overly protective, overly harsh, selective with evidence, or reluctant to escalate.",
    "strong_control": "Disclose the relationship, preserve evidence, avoid unsupported conclusions, and use independent review or reassignment.",
    "trust_output": "Relationship disclosure and reviewer assignment"
  },
  {
    "type": "Financial interest conflict",
    "example": "A fictional reviewer owns a financial interest in a supplier whose security controls are being evaluated.",
    "risk": "A favorable or unfavorable decision could create personal financial benefit.",
    "strong_control": "Disclose the interest, remove approval authority, and use an independent supplier-risk reviewer.",
    "trust_output": "Financial-interest disclosure and recusal record"
  },
  {
    "type": "Gift or favor conflict",
    "example": "A fictional vendor offers event tickets before a security-review decision.",
    "risk": "The benefit may influence judgment or create a reasonable appearance of influence.",
    "strong_control": "Decline or report the benefit under policy and separate the reviewer from the decision if needed.",
    "trust_output": "Gift decision and policy record"
  },
  {
    "type": "Career or recognition conflict",
    "example": "A fictional student wants a dramatic finding because it may improve a portfolio or competition result.",
    "risk": "The student may exaggerate evidence, continue beyond scope, or prefer publicity over safe coordination.",
    "strong_control": "Use evidence-limited claims, teacher review, fictionalization, and evaluation based on process rather than drama.",
    "trust_output": "Portfolio-integrity and reviewer statement"
  },
  {
    "type": "Organizational loyalty conflict",
    "example": "A fictional analyst is pressured to minimize a finding because the affected team is important to the organization.",
    "risk": "Business loyalty may suppress valid risk, delay escalation, or weaken communication.",
    "strong_control": "Document evidence, route the decision to authorized risk owners, and protect the analyst from retaliation.",
    "trust_output": "Independent risk-escalation record"
  },
  {
    "type": "Supplier relationship conflict",
    "example": "A fictional security manager previously worked for the supplier being investigated.",
    "risk": "Prior relationships or future employment interests may affect review independence.",
    "strong_control": "Disclose the relationship, limit decision authority, and assign independent validation.",
    "trust_output": "Supplier-conflict management plan"
  },
  {
    "type": "Role conflict",
    "example": "The same fictional person designed a control, tested it, approved it, and accepted the remaining risk.",
    "risk": "Self-review can hide assumptions, mistakes, and optimistic conclusions.",
    "strong_control": "Separate design, testing, approval, validation, and risk acceptance where practical.",
    "trust_output": "Role-separation matrix"
  },
  {
    "type": "Academic integrity conflict",
    "example": "A fictional student uses another person's project or real internal evidence to create a stronger submission.",
    "risk": "The work may be unsafe, misleading, unoriginal, or privacy-invasive.",
    "strong_control": "Use original fictional evidence, disclose assistance, cite permitted sources, and keep revision history.",
    "trust_output": "Originality and fictionalization statement"
  },
  {
    "type": "Confidentiality conflict",
    "example": "A fictional mentor asks the student to keep a serious safety concern secret from the authorized owner.",
    "risk": "Secrecy may protect a relationship while increasing harm to users, services, or evidence.",
    "strong_control": "Follow approved reporting channels, document the request, and escalate to a safe authorized adult or owner.",
    "trust_output": "Confidentiality and escalation decision"
  },
  {
    "type": "Public advocacy conflict",
    "example": "A fictional student publicly supports one technology while evaluating competing designs.",
    "risk": "Strong public positions may create perceived bias even if the review is fair.",
    "strong_control": "Disclose the position, use transparent criteria, preserve evidence, and request independent review.",
    "trust_output": "Bias-control and review record"
  }
];
const trustPrinciples = [
  {
    "principle": "Disclose early",
    "question": "Would a reasonable fictional reviewer want to know about this relationship, interest, benefit, pressure, or prior role?",
    "weak_pattern": "Wait to see whether the conflict affects the result.",
    "strong_practice": "Disclose before the decision and let the authorized owner choose controls."
  },
  {
    "principle": "Separate fact from appearance",
    "question": "Is improper influence confirmed, possible, or only reasonably perceived?",
    "weak_pattern": "Treat a perceived conflict as proof of dishonesty.",
    "strong_practice": "Manage appearance without making unsupported accusations."
  },
  {
    "principle": "Protect independent judgment",
    "question": "Can the fictional person still evaluate evidence fairly with additional controls?",
    "weak_pattern": "Assume disclosure alone solves every conflict.",
    "strong_practice": "Use recusal, reassignment, or independent review when disclosure is insufficient."
  },
  {
    "principle": "Separate roles",
    "question": "Are design, testing, approval, communication, validation, and risk acceptance concentrated in one person?",
    "weak_pattern": "Allow the control designer to approve their own work.",
    "strong_practice": "Introduce independent checkpoints and owner signoff."
  },
  {
    "principle": "Protect reporters",
    "question": "Could the fictional person face retaliation for raising the concern?",
    "weak_pattern": "Require direct confrontation with the person creating pressure.",
    "strong_practice": "Provide safe escalation, confidentiality, documentation, and adult or owner support."
  },
  {
    "principle": "Use transparent criteria",
    "question": "Can another reviewer reproduce the fictional decision from the same evidence and scoring rules?",
    "weak_pattern": "Use flexible criteria that change with the preferred outcome.",
    "strong_practice": "Define criteria, weights, evidence, limitations, and approvals before the decision."
  },
  {
    "principle": "Limit gifts and benefits",
    "question": "Could a fictional benefit influence or appear to influence the review?",
    "weak_pattern": "Accept small benefits because they probably will not matter.",
    "strong_practice": "Follow policy, disclose, decline or return the benefit, and document the decision."
  },
  {
    "principle": "Correct the record",
    "question": "Did a hidden conflict, missing disclosure, or biased statement affect earlier communication?",
    "weak_pattern": "Leave the old message unchanged to protect reputation.",
    "strong_practice": "Correct facts, disclose the conflict, explain the control, and preserve revision history."
  },
  {
    "principle": "Keep confidentiality bounded",
    "question": "Is a secrecy request protecting legitimate need-to-know information or hiding a safety concern from the proper owner?",
    "weak_pattern": "Promise absolute secrecy before understanding the risk.",
    "strong_practice": "Explain reporting limits and use approved confidential escalation."
  },
  {
    "principle": "Validate trust controls",
    "question": "Did disclosure, recusal, independent review, role separation, and monitoring actually protect the decision?",
    "weak_pattern": "Close the issue after the form is signed.",
    "strong_practice": "Review evidence, decisions, communication, access, outcome, and residual perception risk."
  }
];
const roleBoundaries = [
  {
    "role": "Analyst or student defender",
    "responsibility": "Disclose fictional relationships and incentives, preserve evidence, avoid self-serving claims, and request review when independence is uncertain.",
    "may_decide": "Whether to pause, disclose, request reassignment, or document a concern.",
    "may_not_decide": "Whether their own conflict is harmless enough to ignore.",
    "evidence": "Disclosure form, research log, evidence register, and reflection."
  },
  {
    "role": "Reviewer or mentor",
    "responsibility": "Evaluate the fictional conflict, choose controls, protect the reporter, and review the evidence and final decision.",
    "may_decide": "Whether disclosure, limits, independent review, or reassignment are sufficient within delegated authority.",
    "may_not_decide": "To hide the conflict to protect a student, team, supplier, or reputation.",
    "evidence": "Review notes, control plan, assignment decision, and signoff."
  },
  {
    "role": "System or service owner",
    "responsibility": "Explain operational needs and identify whether the fictional decision affects services, users, data, or dependencies.",
    "may_decide": "Which operational tradeoffs are acceptable within authority.",
    "may_not_decide": "To override privacy, legal, evidence, or conflict controls for convenience.",
    "evidence": "Owner statement, dependency map, option comparison, and validation."
  },
  {
    "role": "Data or privacy owner",
    "responsibility": "Protect fictional personal and confidential information from unnecessary disclosure during conflict review.",
    "may_decide": "Which information may be used to evaluate the conflict.",
    "may_not_decide": "To disclose unrelated personal details because they might explain motive.",
    "evidence": "Purpose, minimum fields, access list, retention, and deletion."
  },
  {
    "role": "Supplier or contract owner",
    "responsibility": "Manage fictional vendor relationships, benefits, prior employment, communication, and contract obligations.",
    "may_decide": "Which supplier-review controls and contacts are appropriate.",
    "may_not_decide": "To allow the conflicted reviewer to approve their own supplier decision.",
    "evidence": "Relationship disclosure, contract record, reviewer assignment, and communication log."
  },
  {
    "role": "Risk owner or leadership",
    "responsibility": "Select fictional treatment, accept residual risk, assign independent review, and protect decision integrity.",
    "may_decide": "Whether the managed conflict is acceptable for the business decision.",
    "may_not_decide": "To require deception, retaliation, hidden influence, or unsupported communication.",
    "evidence": "Risk decision, rationale, owner, controls, deadline, and acceptance."
  },
  {
    "role": "Teacher, program owner, or safeguarding adult",
    "responsibility": "Provide safe fictional escalation when a student faces secrecy, pressure, retaliation, real-data exposure, or unclear authority.",
    "may_decide": "How to pause the school activity and involve the appropriate adult or owner.",
    "may_not_decide": "To authorize work on systems or information outside school ownership and written permission.",
    "evidence": "Student report, safety review, action record, and follow-up."
  },
  {
    "role": "Independent reviewer",
    "responsibility": "Reassess the fictional evidence, criteria, decision, communication, and outcome without the original conflict.",
    "may_decide": "Whether the result is supported and which corrections are required.",
    "may_not_decide": "To expand technical scope or access new data without authorization.",
    "evidence": "Independent analysis, comparison, limitations, corrections, and signoff."
  }
];
const workflow = [
  {
    "step": "1",
    "title": "Identify the decision and affected trust",
    "questions": "What fictional recommendation, investigation, approval, communication, test, supplier choice, or portfolio outcome could be influenced?",
    "output": "Decision and trust-boundary statement.",
    "stop": "Pause if the affected decision is unclear."
  },
  {
    "step": "2",
    "title": "Describe the interest or relationship",
    "questions": "What fictional financial, personal, academic, professional, organizational, supplier, public, or role-based interest exists?",
    "output": "Conflict disclosure using factual neutral language.",
    "stop": "Do not collect unrelated private details about motive or relationships."
  },
  {
    "step": "3",
    "title": "Classify actual, potential, and perceived conflict",
    "questions": "Is influence confirmed, possible, or reasonably perceived, and what evidence supports each conclusion?",
    "output": "Conflict-classification matrix.",
    "stop": "Do not label someone dishonest without evidence."
  },
  {
    "step": "4",
    "title": "Map authority and ownership",
    "questions": "Who owns the fictional decision, data, service, supplier relationship, communication, validation, and residual risk?",
    "output": "Owner and approval map.",
    "stop": "Pause if the conflicted person is the only reviewer or approver."
  },
  {
    "step": "5",
    "title": "Compare management options",
    "questions": "Would disclosure, limits, role separation, independent review, reassignment, recusal, or cancellation protect trust?",
    "output": "Conflict-treatment comparison.",
    "stop": "Do not assume disclosure alone is always sufficient."
  },
  {
    "step": "6",
    "title": "Protect evidence and confidentiality",
    "questions": "Which fictional records are needed, who may see them, and what should remain private?",
    "output": "Minimum-necessary evidence and access plan.",
    "stop": "Pause if conflict review becomes an excuse to inspect unrelated private information."
  },
  {
    "step": "7",
    "title": "Protect the reporter",
    "questions": "Could the fictional person face pressure, retaliation, exclusion, grading harm, or professional disadvantage?",
    "output": "Safe reporting and anti-retaliation plan.",
    "stop": "Escalate when the student or analyst cannot report safely."
  },
  {
    "step": "8",
    "title": "Document and execute controls",
    "questions": "Who is reassigned, what authority is removed, who reviews, what criteria apply, and which communications are required?",
    "output": "Conflict-management action record.",
    "stop": "Do not continue while key controls remain only verbal."
  },
  {
    "step": "9",
    "title": "Validate the decision",
    "questions": "Did the independent review reproduce the result, were criteria applied consistently, and did communication remain accurate?",
    "output": "Validation and residual-trust record.",
    "stop": "Do not close because a disclosure form was signed."
  },
  {
    "step": "10",
    "title": "Reflect and improve",
    "questions": "What should change in role separation, policy, training, supplier review, portfolio rules, or escalation?",
    "output": "Lessons learned, revision history, and improvement plan.",
    "stop": "Do not hide the conflict or correction to protect reputation."
  }
];
const decisionTests = [
  {
    "test": "Reasonable observer",
    "question": "Would a reasonable fictional observer question the person's independence?",
    "weak_answer": "No conflict exists unless misconduct is proven.",
    "strong_control": "Manage perceived conflicts when trust could reasonably be affected."
  },
  {
    "test": "Personal benefit",
    "question": "Could the fictional decision create money, opportunity, recognition, access, grades, employment, or influence for the decision-maker?",
    "weak_answer": "The benefit is small, so it does not matter.",
    "strong_control": "Disclose the benefit and remove decision authority when needed."
  },
  {
    "test": "Relationship",
    "question": "Does the fictional person have a close relationship with someone affected by the review?",
    "weak_answer": "Friendship guarantees fairness.",
    "strong_control": "Use independent review or reassignment."
  },
  {
    "test": "Self-review",
    "question": "Is the fictional person testing, approving, or validating their own design or decision?",
    "weak_answer": "The designer knows the system best.",
    "strong_control": "Separate design, testing, approval, and risk acceptance."
  },
  {
    "test": "Pressure",
    "question": "Is a fictional senior person asking for secrecy, urgency, a preferred result, or reduced documentation?",
    "weak_answer": "Seniority makes the request appropriate.",
    "strong_control": "Document the pressure and use safe escalation."
  },
  {
    "test": "Evidence consistency",
    "question": "Would the same fictional criteria produce the same result for a different person, team, or supplier?",
    "weak_answer": "Criteria may change based on context without documentation.",
    "strong_control": "Predefine criteria and record justified exceptions."
  },
  {
    "test": "Confidentiality",
    "question": "Is the fictional secrecy request protecting legitimate sensitive information or preventing proper owner review?",
    "weak_answer": "All requests for secrecy must be honored.",
    "strong_control": "Explain confidentiality limits and report through the approved channel."
  },
  {
    "test": "Validation",
    "question": "Can an independent fictional reviewer reproduce the decision from the same evidence and rules?",
    "weak_answer": "The original reviewer is trusted, so validation is unnecessary.",
    "strong_control": "Require independent evidence-based confirmation."
  }
];
const evidenceMatrix = [
  {
    "id": "CI-01",
    "source": "Fictional assignment record",
    "observation": "The analyst is assigned to review an account belonging to a close friend.",
    "supports": "A personal relationship creates an actual or perceived conflict.",
    "limits": "Does not prove the analyst would act unfairly.",
    "trust_use": "Disclose the relationship and use independent review or reassignment."
  },
  {
    "id": "CI-02",
    "source": "Fictional supplier disclosure",
    "observation": "The reviewer previously worked for the supplier and still has a financial interest.",
    "supports": "Prior employment and financial benefit may affect independence.",
    "limits": "Does not prove the supplier review is inaccurate.",
    "trust_use": "Remove approval authority and assign an independent reviewer."
  },
  {
    "id": "CI-03",
    "source": "Fictional gift message",
    "observation": "The supplier offers event tickets before the review decision.",
    "supports": "A benefit was offered during a sensitive decision period.",
    "limits": "Does not prove the supplier intended bribery or that the reviewer accepted.",
    "trust_use": "Decline or report the gift and follow the approved policy."
  },
  {
    "id": "CI-04",
    "source": "Fictional portfolio draft",
    "observation": "The student changes a moderate finding to critical because a dramatic result may improve recognition.",
    "supports": "A career or recognition incentive affected the wording.",
    "limits": "Does not prove every part of the technical analysis is wrong.",
    "trust_use": "Restore evidence-limited language and add independent teacher review."
  },
  {
    "id": "CI-05",
    "source": "Fictional manager message",
    "observation": "The manager asks the analyst to keep the concern quiet until after a public event.",
    "supports": "Organizational pressure may delay proper escalation.",
    "limits": "Does not prove the manager intends harm.",
    "trust_use": "Document the request and use the approved confidential escalation path."
  },
  {
    "id": "CI-06",
    "source": "Fictional role matrix",
    "observation": "One person designed, tested, approved, communicated, and accepted residual risk for the same control.",
    "supports": "Role concentration weakens independence and review quality.",
    "limits": "Does not prove the control failed.",
    "trust_use": "Separate validation and risk acceptance from design and testing."
  },
  {
    "id": "CI-07",
    "source": "Fictional independent review",
    "observation": "A second reviewer reaches the same bounded conclusion using the same evidence and criteria.",
    "supports": "The technical conclusion is reproducible despite the original conflict.",
    "limits": "Does not remove the need to document the original conflict.",
    "trust_use": "Keep the disclosure and use the independent result for the decision."
  },
  {
    "id": "CI-08",
    "source": "Fictional correction record",
    "observation": "The leadership message is revised to disclose reviewer reassignment and remove unsupported claims.",
    "supports": "The communication and governance response improved.",
    "limits": "Does not prove all trust concerns are resolved.",
    "trust_use": "Monitor follow-up, residual perception risk, and process improvements."
  }
];
const commonMistakes = [
  "Assuming a conflict exists only when misconduct or bias is proven.",
  "Treating a perceived conflict as proof that a fictional person acted dishonestly.",
  "Waiting until after the decision to disclose a relationship or benefit.",
  "Believing a small gift, favor, discount, or opportunity cannot affect trust.",
  "Allowing one fictional person to design, test, approve, communicate, validate, and accept risk for their own work.",
  "Collecting unrelated private information to investigate someone's motives.",
  "Using friendship, loyalty, seniority, or organizational importance as a reason to suppress evidence.",
  "Using conflict review to punish, embarrass, exclude, or retaliate against a reporter.",
  "Assuming disclosure alone is enough when recusal or independent review is required.",
  "Changing evidence standards depending on the person, team, supplier, or preferred result.",
  "Accepting secrecy requests that block the proper owner from learning about a safety concern.",
  "Hiding the conflict from leadership, teachers, users, or reviewers to protect reputation.",
  "Using real conflicts, names, messages, supplier details, or school situations in a public portfolio.",
  "Closing the issue when a form is signed rather than validating the decision and residual trust risk."
];
const quizQuestions = [
  {
    "question": "What best describes a perceived conflict of interest?",
    "choices": [
      "A situation that may reasonably appear to affect independence even when improper behavior is not proven.",
      "Proof that a fictional person acted dishonestly.",
      "A conflict that never requires disclosure.",
      "A purely technical error."
    ],
    "answer": 0,
    "explanation": "Perceived conflicts matter because trust can be affected even without confirmed misconduct."
  },
  {
    "question": "A fictional analyst is assigned to investigate a close friend's account. What is strongest?",
    "choices": [
      "Continue without disclosure because friendship may improve understanding.",
      "Disclose the relationship and use independent review or reassignment.",
      "Delete the assignment.",
      "Ask the friend for a private explanation."
    ],
    "answer": 1,
    "explanation": "Disclosure and independent review protect both fairness and trust."
  },
  {
    "question": "Why is disclosure alone sometimes insufficient?",
    "choices": [
      "Disclosure never helps.",
      "The conflict may still affect judgment or appearance, requiring recusal, reassignment, or independent review.",
      "Only financial conflicts matter.",
      "Disclosure automatically proves bias."
    ],
    "answer": 1,
    "explanation": "Controls should match the seriousness and type of conflict."
  },
  {
    "question": "A fictional supplier offers tickets before a review decision. What should the reviewer do?",
    "choices": [
      "Accept because the value is small.",
      "Decline or report the benefit under policy and disclose the conflict.",
      "Accept after the review.",
      "Keep the gift private."
    ],
    "answer": 1,
    "explanation": "Benefits during a decision can influence or appear to influence judgment."
  },
  {
    "question": "What is the strongest response to a fictional manager asking an analyst to keep a safety concern secret until after an event?",
    "choices": [
      "Promise absolute secrecy.",
      "Document the request and use the approved confidential escalation path.",
      "Publish the concern publicly.",
      "Delete the evidence."
    ],
    "answer": 1,
    "explanation": "Confidentiality should protect sensitive information without hiding risk from authorized owners."
  },
  {
    "question": "Why should design, testing, approval, and risk acceptance be separated when practical?",
    "choices": [
      "To create more paperwork.",
      "To reduce self-review and improve independent validation.",
      "Because designers may never test systems.",
      "To remove all accountability."
    ],
    "answer": 1,
    "explanation": "Role separation reduces optimism, hidden assumptions, and unchecked decisions."
  },
  {
    "question": "What makes a conflict-of-interest portfolio artifact safe to share?",
    "choices": [
      "Only names are changed.",
      "Real messages are shortened.",
      "Every person, organization, supplier, relationship, benefit, record, decision, date, and outcome is invented.",
      "The real conflict is described without screenshots."
    ],
    "answer": 2,
    "explanation": "Complete fictionalization protects privacy, trust, and real relationships."
  }
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
        className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-purple-400 hover:text-purple-200"
      >
        Module A1
      </Link>
      <Link
        href={nextLesson}
        className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
      >
        Next Lesson
      </Link>
    </div>
  );
}

export default function ConflictsOfInterestAndTrustPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.14),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Advanced
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Module A1
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              Lesson 7 of 10
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Independence and Trust
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            A1.7 Conflicts of Interest and Trust
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Learn how professional defenders recognize divided loyalty,
            personal benefit, supplier relationships, gifts, pressure, secrecy,
            self-review, portfolio incentives, and perceived bias—then protect
            trust through disclosure, recusal, role separation, independent
            review, documentation, and safe escalation.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A1: Advanced Cyber Ethics and Legal Boundaries"
          lessonTitle="Conflicts of Interest and Trust"
          lessonNumber={7}
          totalLessons={10}
        />

        <ReadinessCheck
          title="Before You Start"
          items={[
            "I will use only fictional people, organizations, suppliers, relationships, messages, benefits, reviews, decisions, dates, and outcomes.",
            "I understand that a conflict can exist without proven misconduct and that a perceived conflict is not proof of dishonesty.",
            "I will disclose fictional relationships, interests, gifts, incentives, pressure, and competing responsibilities before sensitive decisions.",
            "I will not collect unrelated private information to investigate a fictional person's motives.",
            "I will use safe escalation if a fictional student or analyst faces secrecy pressure, retaliation, or an unsafe assignment.",
            "I will never use real names, relationships, supplier details, school conflicts, private messages, employment information, or confidential records in this portfolio.",
          ]}
        />

        <SectionCard
          eyebrow="Professional Hook"
          title="A Technically Correct Decision Can Still Lose Trust"
        >
          <p className="leading-8">
            A fictional analyst is assigned to review a close friend's account.
            The same analyst helped design the control and wants a dramatic
            portfolio result. A supplier connected to the project offers event
            tickets, while a manager asks the analyst to delay reporting until
            after a public event. Even if the final technical conclusion is
            correct, undisclosed relationships, incentives, gifts, self-review,
            and pressure can make the process untrustworthy.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-red-200">
                Weak response
              </p>
              <p className="mt-2 leading-7">
                Keep the relationships private, trust personal judgment, accept
                the benefit, use flexible criteria, and report only after the
                preferred event.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                Professional response
              </p>
              <p className="mt-2 leading-7">
                Disclose early, preserve evidence, separate roles, decline or
                report benefits, use independent review, protect the reporter,
                and correct communication.
              </p>
            </div>
          </div>
        </SectionCard>

        <section className="grid gap-5 md:grid-cols-2">
          {objectives.map((objective, index) => (
            <div
              key={objective}
              className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-50"
            >
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-200">
                Objective {index + 1}
              </p>
              <p className="mt-3 font-semibold leading-7">{objective}</p>
            </div>
          ))}
        </section>

        <SectionCard
          eyebrow="Why This Matters"
          title="Trust Depends on Process, Not Only the Final Answer"
        >
          <p className="leading-8">
            Cybersecurity professionals receive unusual access, influence,
            evidence, and decision authority. Users and organizations must be
            able to trust that recommendations are based on scope, evidence,
            safety, privacy, and risk rather than friendship, money,
            recognition, supplier loyalty, fear, pressure, or self-protection.
            Conflict management protects the decision-maker as well as everyone
            affected by the decision.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              [
                "Fairness",
                "The same fictional evidence and criteria should produce the same result regardless of the person or team involved.",
              ],
              [
                "Independence",
                "Important fictional decisions should not rely only on someone who benefits from the result.",
              ],
              [
                "Reviewability",
                "Disclosure, controls, evidence, decisions, validation, and corrections should be visible to authorized reviewers.",
              ],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"
              >
                <p className="font-black text-blue-100">{title}</p>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Core Model"
          title="Disclose → Assess → Separate → Review → Validate"
        >
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {[
              ["Disclose", "State the fictional relationship, benefit, pressure, loyalty, prior role, public position, or personal incentive."],
              ["Assess", "Classify actual, potential, and perceived conflict without assuming misconduct."],
              ["Separate", "Limit authority and separate design, testing, approval, communication, validation, and risk acceptance."],
              ["Review", "Use an independent fictional reviewer with transparent evidence and criteria."],
              ["Validate", "Confirm the decision, communication, controls, and residual trust risk after conflict management."],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="rounded-2xl border border-purple-400/25 bg-purple-400/10 p-5 text-purple-50"
              >
                <p className="text-xl font-black text-purple-100">{title}</p>
                <p className="mt-2 text-sm leading-6">{detail}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Advanced Vocabulary"
          title="Language for Conflict and Trust"
        >
          <div className="grid gap-4 md:grid-cols-2">
            {vocabulary.map(([term, definition]) => (
              <article
                key={term}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">{term}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {definition}
                </p>
              </article>
            ))}
          </div>
        </SectionCard>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Conflict Types
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Ways Independent Judgment Can Be Weakened
          </h2>

          <div className="mt-6 grid gap-5">
            {conflictTypes.map((item) => (
              <article
                key={item.type}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-xl font-black text-cyan-100">
                  {item.type}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Fictional example", item.example],
                    ["Trust risk", item.risk],
                    ["Strong control", item.strong_control],
                    ["Portfolio output", item.trust_output],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.type}-${label}`}
                      className="rounded-xl border border-slate-700 bg-slate-900 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                        {label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Trust Principles
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Principles for Managing Conflicts Professionally
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {trustPrinciples.map((item) => (
              <article
                key={item.principle}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.principle}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">
                  {item.question}
                </p>

                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    Weak pattern
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {item.weak_pattern}
                  </p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Strong practice
                  </p>
                  <p className="mt-2 text-sm leading-6">
                    {item.strong_practice}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Roles and Authority
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Who Protects Independence and Trust
          </h2>

          <div className="mt-6 grid gap-5">
            {roleBoundaries.map((item) => (
              <article
                key={item.role}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.role}
                </h3>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Responsibility", item.responsibility],
                    ["May decide", item.may_decide],
                    ["May not decide", item.may_not_decide],
                    ["Evidence", item.evidence],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.role}-${label}`}
                      className="rounded-xl border border-slate-700 bg-slate-900 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                        {label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Conflict-Management Workflow
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Ten Steps from Disclosure to Validated Trust
          </h2>

          <div className="mt-6 grid gap-5">
            {workflow.map((item) => (
              <article
                key={item.step}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="grid gap-4 lg:grid-cols-[auto_0.45fr_1fr] lg:items-start">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-black text-cyan-100">
                    {item.title}
                  </h3>
                  <p className="leading-7 text-slate-300">{item.questions}</p>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Required output
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.output}</p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/25 bg-yellow-400/10 p-4 text-yellow-50">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-yellow-200">
                      Stop condition
                    </p>
                    <p className="mt-2 text-sm leading-6">{item.stop}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Decision Tests
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Eight Questions before a Conflicted Decision Proceeds
          </h2>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {decisionTests.map((item) => (
              <article
                key={item.test}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="text-lg font-black text-cyan-100">
                  {item.test}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{item.question}</p>

                <div className="mt-4 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-red-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                    Weak answer
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.weak_answer}</p>
                </div>

                <div className="mt-4 rounded-xl border border-emerald-400/25 bg-emerald-400/10 p-4 text-emerald-50">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                    Strong control
                  </p>
                  <p className="mt-2 text-sm leading-6">{item.strong_control}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <FakeDashboardCard
          title="Fake Northbridge Conflict and Trust Dashboard"
          subtitle="Fictional relationship, benefit, pressure, role-separation, and review analysis for training only."
          metrics={[
            {
              label: "Open conflicts",
              value: "4",
              note: "Personal relationship, supplier interest, portfolio incentive, and role concentration require controls.",
            },
            {
              label: "Independent reviews",
              value: "1",
              note: "A separate fictional reviewer reproduced the bounded technical conclusion.",
            },
            {
              label: "Trust status",
              value: "Managed",
              note: "Disclosure, reassignment, gift reporting, message correction, and monitoring are in progress.",
            },
          ]}
        />

        <FakeAlertCard
          title="Multiple Undisclosed Interests Could Affect Security Review Independence"
          severity="High"
          time="11:26 AM"
          source="Fake Northbridge Trust Review Console"
          details="A fictional analyst is reviewing a close friend's account, previously helped design the control, seeks portfolio recognition, and received a supplier benefit while a manager requests delayed reporting."
          recommendation="Pause the original approval path, disclose each interest, preserve minimum-necessary evidence, decline or report the benefit, protect the analyst from pressure, separate roles, assign independent review, correct communication, and validate the final decision."
        />

        <FakeLogPanel
          title="Fake Conflict-Management Timeline"
          logs={[
            "09:00 ASSIGN analyst='reviewer-07'",
            "09:05 RELATIONSHIP subject='close-friend'",
            "09:06 DISCLOSURE relationship='missing'",
            "09:20 ROLE designer='reviewer-07'",
            "09:21 ROLE validator='reviewer-07'",
            "09:30 INCENTIVE portfolio-recognition='high'",
            "09:40 GIFT supplier-tickets='offered'",
            "09:45 PRESSURE report-delay='requested'",
            "09:50 STOP approval='paused'",
            "10:00 DISCLOSURE conflicts='submitted'",
            "10:10 GIFT decision='declined-and-reported'",
            "10:20 REVIEW independent='assigned'",
            "10:45 REVIEW conclusion='bounded-and-reproduced'",
            "11:00 MESSAGE severity='corrected'",
            "11:15 ROLE risk-owner='separate'",
            "11:26 STATUS conflict='managed-with-monitoring'",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Fictional Evidence Matrix
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Evidence for Managing Conflict without Unsupported Blame
          </h2>

          <div className="mt-6 grid gap-5">
            {evidenceMatrix.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-black text-cyan-200">
                    {item.id}
                  </span>
                  <h3 className="font-black text-white">{item.source}</h3>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[
                    ["Observation", item.observation],
                    ["Supports", item.supports],
                    ["Does not prove", item.limits],
                    ["Trust use", item.trust_use],
                  ].map(([label, detail]) => (
                    <div
                      key={`${item.id}-${label}`}
                      className="rounded-xl border border-slate-700 bg-slate-900 p-4"
                    >
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                        {label}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <AnalyzeEvidenceCard
          title="Can the Fictional Analyst Remain the Final Approver?"
          question="Can the Fictional Analyst Remain the Final Approver?"
          evidence={[
            "The analyst is reviewing a close friend's account.",
            "The analyst helped design the control under review.",
            "The analyst may benefit from a dramatic portfolio result.",
            "A supplier offered event tickets during the decision period.",
            "A manager requested delayed reporting.",
            "An independent reviewer reproduced the bounded technical conclusion.",
            "A separate risk owner is available.",
          ]}
          options={[
            "Preserve the analyst's evidence contribution but remove final approval authority, document the conflicts, use independent review, separate risk acceptance, and correct communication.",
            "Allow the analyst to approve because the independent reviewer agreed.",
            "Discard all of the analyst's evidence because a conflict exists.",
            "Keep the conflicts private to protect the project.",
          ]}
          bestAnswer={0}
          explanation="The conflict does not automatically invalidate every observation, but it requires transparent controls, role separation, independent validation, and separate ownership."
        />

        <SectionCard
          eyebrow="Common Trust Mistakes"
          title="Patterns That Damage Independence and Fairness"
        >
          <div className="grid gap-3 md:grid-cols-2">
            {commonMistakes.map((mistake) => (
              <div
                key={mistake}
                className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-sm leading-6 text-red-100"
              >
                {mistake}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Safe Practice Lab"
          title="Build a Fictional Conflict-of-Interest Response"
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950 p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Fictional assignment
              </p>
              <h3 className="mt-3 text-xl font-black text-white">
                Restore Trust in the Northbridge Review
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Use only the invented evidence on this page. Do not upload,
                quote, copy, lightly edit, or summarize real relationships,
                gifts, employment history, supplier details, school conflicts,
                private messages, disciplinary records, or confidential
                workplace information.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-50">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-200">
                Required deliverables
              </p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 leading-7">
                <li>Decision and trust-boundary statement.</li>
                <li>Actual, potential, and perceived conflict matrix.</li>
                <li>Minimum-necessary disclosure record.</li>
                <li>Owner and authority map.</li>
                <li>Gift, relationship, pressure, portfolio, and role-separation analysis.</li>
                <li>Disclosure, limit, reassignment, recusal, and independent-review options.</li>
                <li>Safe reporting and anti-retaliation plan.</li>
                <li>Conflict-management action and communication record.</li>
                <li>Independent validation and residual-trust assessment.</li>
                <li>Reflection, correction, revision history, and fictionalization statement.</li>
              </ol>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-50">
            The finished artifact must remain completely fictional and must not
            accuse, identify, imitate, or expose any real student, teacher,
            employee, supplier, friend, family member, organization, or
            relationship.
          </div>
        </SectionCard>

        <ScenarioDecisionLab
          title="The Account Belongs to a Close Friend"
          scenario="A fictional analyst is assigned to investigate a close friend's account. No evidence proves the analyst would be unfair, but the relationship could affect or appear to affect judgment."
          choices={[
            {
              label: "Choice A",
              response: "Disclose the relationship, preserve the evidence, avoid private contact with the friend, and use reassignment or independent review.",
              outcome: "Best professional choice. The response manages both actual and perceived trust risk without accusing the analyst.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Continue privately because friendship improves context.",
              outcome: "Risky. The undisclosed relationship weakens independence and reviewability.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Assume the analyst is dishonest and remove all evidence.",
              outcome: "Unsafe. A conflict is not proof of misconduct or evidence invalidity.",
              tone: "risk",
            },
          ]}
        />

        <ScenarioDecisionLab
          title="A Manager Requests Secrecy until after an Event"
          scenario="A fictional manager asks the student to delay reporting a safety concern so the organization avoids embarrassment during a public event."
          choices={[
            {
              label: "Choice A",
              response: "Document the request, protect confidentiality, use the approved escalation path, and involve an authorized teacher, security lead, or risk owner.",
              outcome: "Best professional choice. The response protects legitimate confidentiality without hiding risk from proper owners.",
              tone: "best",
            },
            {
              label: "Choice B",
              response: "Promise absolute secrecy because the manager is senior.",
              outcome: "Risky. Seniority does not remove safety and reporting duties.",
              tone: "risk",
            },
            {
              label: "Choice C",
              response: "Publish the concern publicly immediately.",
              outcome: "Unsafe. Public disclosure may exceed authority and create additional harm.",
              tone: "risk",
            },
          ]}
        />

        <DefenderChecklist
          title="Conflict-of-Interest and Trust Checklist"
          items={[
            "I can state the fictional decision, affected people, systems, services, data, suppliers, and trust boundaries.",
            "I can identify fictional personal, financial, academic, professional, organizational, supplier, gift, loyalty, public-position, and role conflicts.",
            "I can distinguish actual, potential, and perceived conflict without treating appearance as proof of misconduct.",
            "I can disclose fictional relationships, benefits, pressure, prior roles, incentives, and competing responsibilities using neutral factual language.",
            "I can identify fictional decision, system, data, service, supplier, communication, validation, and risk owners.",
            "I can compare disclosure, limits, role separation, independent review, reassignment, recusal, cancellation, and monitoring.",
            "I can preserve minimum-necessary fictional evidence without collecting unrelated private information about motive or relationships.",
            "I can protect fictional students and analysts from retaliation, unsafe secrecy, grading pressure, exclusion, or professional disadvantage.",
            "I can define transparent fictional criteria and test whether the same evidence would produce the same result for another person or supplier.",
            "I can separate fictional design, testing, approval, communication, validation, and risk acceptance when practical.",
            "I can correct fictional communication, validate the independent result, document residual perception risk, and improve the process.",
            "I will never use real relationships, gifts, supplier details, school conflicts, private messages, employment history, or confidential records in this portfolio.",
          ]}
        />

        <MiniQuiz
          title="A1.7 Mini Quiz: Conflicts of Interest and Trust"
          questions={quizQuestions}
        />

        <PortfolioPrompt
          title="Portfolio Prompt"
          prompt="Create a fully fictional Conflict-of-Interest and Trust Management Package for the Northbridge training case. Include the decision and trust boundary, actual, potential, and perceived conflict matrix, relationship and benefit disclosures, gift decision, pressure and retaliation review, owner map, treatment options, role-separation plan, independent-review assignment, evidence register, communication correction, validation, residual trust risk, reflection, revision history, and portfolio-safety statement."
          tips={[
            "Use neutral fictional language that identifies the conflict without accusing anyone of dishonesty.",
            "Show why the original evidence may still be useful while final approval is reassigned.",
            "Separate disclosure, recusal, reassignment, independent review, validation, and risk acceptance.",
            "Include at least one hidden or late conflict, revise the process, and explain how the correction protects trust.",
            "Keep every person, organization, supplier, relationship, gift, message, decision, date, and outcome completely invented.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "A conflict of interest can exist without proven misconduct.",
            "Actual, potential, and perceived conflicts should be classified separately.",
            "Personal relationships, financial interests, gifts, career incentives, supplier ties, loyalty, pressure, secrecy, and self-review can weaken trust.",
            "Disclosure is necessary but may not be sufficient; recusal, reassignment, role separation, or independent review may also be required.",
            "A conflict does not automatically invalidate every observation or prove dishonesty.",
            "Independent fictional reviewers should use the same evidence, criteria, scope, and limitations.",
            "Students and analysts need safe confidential escalation and protection from retaliation.",
            "Design, testing, approval, communication, validation, and risk acceptance should not all belong to one conflicted person.",
            "Trust is restored through transparent controls, corrected communication, reproducible decisions, validation, and documented improvement.",
            "Every CyberShield conflict-of-interest artifact must remain fully fictional, defensive, privacy-safe, fair, non-accusatory, and safe for responsible sharing.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Continue Module A1
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