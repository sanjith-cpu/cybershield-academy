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

const modulePath = "/high-school/advanced/cybersecurity-portfolio-projects";
const previousLesson = `${modulePath}/what-makes-a-strong-cyber-portfolio`;
const nextLesson = `${modulePath}/incident-report-project`;

const objectives = [
  "Explain what a security diagram is supposed to communicate and distinguish a useful defensive diagram from a decorative picture or unexplained topology sketch.",
  "Represent scope, trust boundaries, data flows, identities, services, dependencies, controls, monitoring, and important assumptions with labels that another reader can understand.",
  "Choose the right level of abstraction for a specific audience without hiding material security relationships or adding detail that does not support the diagram's purpose.",
  "Review a fictional diagram for missing ownership, unclear flows, stale assumptions, concentrated dependencies, unsupported claims, and safety or publication concerns.",
  "Create a portfolio-ready Security Diagram Project package that includes the diagram, legend, scope statement, design rationale, evidence notes, limitations, review findings, and revision summary.",
];

const diagramPurposes = [
  {
    title: "Show relationships, not just objects",
    detail:
      "A useful diagram explains how components relate: who communicates with what, where trust changes, which services depend on shared infrastructure, and where controls or monitoring sit. A list of boxes is not yet a security story.",
  },
  {
    title: "Make important boundaries visible",
    detail:
      "Security decisions often happen at boundaries between users, applications, data stores, management systems, cloud services, external providers, and monitoring platforms. The diagram should make those transitions understandable.",
  },
  {
    title: "Support a defined question",
    detail:
      "A diagram should exist for a reason. It might explain segmentation, identity dependencies, data handling, recovery relationships, logging coverage, or a proposed design. The purpose determines which details belong on the page.",
  },
  {
    title: "Help reviewers find risk and assumptions",
    detail:
      "Good diagrams expose where a reviewer should ask questions: shared dependencies, unclear ownership, single points of failure, broad trust, missing telemetry, third-party reliance, or data crossing a sensitive boundary.",
  },
  {
    title: "Provide evidence for a portfolio narrative",
    detail:
      "In a portfolio, the diagram is strongest when paired with a short explanation of the problem, the design choices, the evidence behind those choices, the limitations, and what changed after review.",
  },
];

const diagramElements = [
  {
    element: "Scope boundary",
    meaning:
      "Defines what the diagram includes and what is intentionally outside the review. Scope should be visible in both the picture and the written context.",
    question:
      "Could a reviewer tell which environment, workflow, or fictional service this diagram actually represents?",
  },
  {
    element: "Trust boundary",
    meaning:
      "Marks a place where assumptions, identity, ownership, privilege, exposure, or control responsibility changes.",
    question:
      "Where does data or access move between zones that should not automatically trust one another?",
  },
  {
    element: "Actor or identity",
    meaning:
      "Represents people, service identities, administrators, external collaborators, or automated workloads that interact with the architecture.",
    question:
      "Does the diagram show who or what initiates important actions, not only the systems receiving them?",
  },
  {
    element: "Service or component",
    meaning:
      "Represents the application, API, gateway, database, storage service, management service, queue, identity provider, or monitoring component that performs a meaningful role.",
    question:
      "Are components labeled by function clearly enough for the reader to understand why they matter?",
  },
  {
    element: "Data flow",
    meaning:
      "Shows important movement of requests, records, events, telemetry, administrative commands, or recovery data between components.",
    question:
      "Are arrows explained, or are readers forced to guess what moves between boxes?",
  },
  {
    element: "Control",
    meaning:
      "Shows a defensive safeguard such as authentication, authorization, segmentation, encryption boundary, validation, backup, review, or monitoring point at a conceptual level.",
    question:
      "Does the diagram distinguish the existence of a control from proof that the control is effective?",
  },
  {
    element: "Dependency",
    meaning:
      "Shows a service, provider, identity system, telemetry platform, network path, management plane, or recovery resource that another part of the architecture relies on.",
    question:
      "Would failure of this dependency reduce availability, evidence, access control, recovery, or analyst visibility?",
  },
  {
    element: "Ownership",
    meaning:
      "Identifies the team or role responsible for a component or decision when that responsibility affects security review.",
    question:
      "Can a reviewer tell who should validate, change, or accept risk for the important areas?",
  },
  {
    element: "Assumption or uncertainty note",
    meaning:
      "Records an unverified point that affects the interpretation of the diagram, such as an unclear data path or stale architecture record.",
    question:
      "Does the diagram make uncertainty visible instead of silently converting assumptions into facts?",
  },
];

const abstractionLevels = [
  {
    level: "Executive context view",
    useWhen:
      "The audience needs to understand major services, external dependencies, sensitive flows, major trust boundaries, and business significance.",
    include:
      "Business services, major zones, important data classes, material external providers, critical dependencies, and one or two major risk relationships.",
    avoid:
      "Tiny implementation details, every log source, every host-like object, or labels that only a technical operator would understand.",
  },
  {
    level: "Architecture review view",
    useWhen:
      "The audience needs enough detail to reason about segmentation, identity, monitoring, resilience, data flows, and ownership.",
    include:
      "Zones, services, identities, control points, management paths, telemetry, recovery relationships, dependencies, and relevant assumptions.",
    avoid:
      "Unrelated implementation detail or exact real-world configuration information that is not needed for the educational purpose.",
  },
  {
    level: "Focused security decision view",
    useWhen:
      "The diagram supports one narrow question such as privileged administration, logging coverage, recovery, cloud storage exposure, or identity federation.",
    include:
      "Only the components and relationships that help answer the specific review question, plus enough surrounding context to avoid misleading conclusions.",
    avoid:
      "Copying an entire enterprise architecture into a diagram that is supposed to answer one focused question.",
  },
];

const visualRules = [
  {
    rule: "Use a legend",
    why:
      "Readers should not have to infer what colors, borders, arrows, dashed lines, icons, or labels mean. A legend turns visual conventions into explicit evidence.",
  },
  {
    rule: "Label important arrows",
    why:
      "An unlabeled arrow could represent a user request, administrative access, telemetry, replication, identity assertion, or backup transfer. Meaning matters more than the arrow itself.",
  },
  {
    rule: "Keep directions consistent",
    why:
      "Flow direction should be easy to follow. Avoid arrows that cross repeatedly or reverse without explanation because the reader may misread sequence or authority.",
  },
  {
    rule: "Separate zones visibly",
    why:
      "Boundaries should be visually distinct so changes in trust, exposure, ownership, or control responsibility are clear.",
  },
  {
    rule: "Name by role before implementation detail",
    why:
      "A label such as 'Identity Service' communicates purpose more effectively than an unexplained fictional asset code. Asset IDs can appear as secondary references when useful.",
  },
  {
    rule: "Use notes for uncertainty",
    why:
      "If a path, owner, or dependency has not been verified, mark it as unconfirmed. Do not draw an uncertain relationship with the same certainty as a supplied fact.",
  },
  {
    rule: "Reduce decorative noise",
    why:
      "Every shape, color, line, icon, and annotation should help the reader understand scope, flow, responsibility, control, evidence, or risk.",
  },
];

const northbridgeArchitecture = [
  {
    zone: "External Access Boundary",
    components: "Customer Browser, Partner Portal Entry, Managed Edge Service",
    purpose:
      "Represents public and partner entry points before requests reach internal application services.",
    review:
      "Show which paths are public, which are partner-only, and where identity or request validation begins.",
  },
  {
    zone: "User and Identity Zone",
    components: "Workforce Identity Service, Customer Identity Service, Privileged Access Broker",
    purpose:
      "Provides authentication and identity context for different user populations and administrative workflows.",
    review:
      "Keep customer, workforce, and privileged identity paths distinct so the diagram does not imply that every identity has the same trust level.",
  },
  {
    zone: "Application Zone",
    components: "Portal Service APP-NB-52, API Service API-NB-53, Task Queue QUEUE-NB-5",
    purpose:
      "Handles fictional customer requests and application processing.",
    review:
      "Show the portal-to-API flow, service identity dependency, queue dependency, and which telemetry leaves the zone.",
  },
  {
    zone: "Data Services Zone",
    components: "Customer Records Store DATA-NB-14, Reporting Store DATA-NB-15, Backup Repository BKP-NB-4",
    purpose:
      "Stores fictional application records, derived reporting data, and protected recovery copies.",
    review:
      "Distinguish operational data from reporting data and recovery data; do not imply that all three are interchangeable or have the same access model.",
  },
  {
    zone: "Management Zone",
    components: "Admin Workstation Pool, Change Workflow Service, Configuration Repository",
    purpose:
      "Represents controlled administration and approved change coordination.",
    review:
      "Administrative paths should not look like ordinary user traffic. The diagram should show that privileged activity depends on separate identity and change governance.",
  },
  {
    zone: "Security Monitoring Zone",
    components: "Telemetry Collector MON-NB-20, Alert Service DET-NB-12, Analyst Queue",
    purpose:
      "Receives fictional logs and events used for defensive monitoring and case review.",
    review:
      "Show which zones provide telemetry and make any missing or delayed sources visible instead of implying complete visibility.",
  },
  {
    zone: "External Service Dependencies",
    components: "Message Delivery Provider, Managed Backup Archive, Status Notification Provider",
    purpose:
      "Represents fictional third-party services used by Northbridge workflows.",
    review:
      "Place external dependencies outside internal trust boundaries and label what the organization relies on each provider to do.",
  },
];

const evidenceInventory = [
  {
    id: "DG-E01",
    source: "Architecture brief",
    evidence:
      "The customer portal sends application requests to API-NB-53 through the managed edge service.",
    confidence: "High",
    diagramUse: "Supports the primary customer request flow.",
  },
  {
    id: "DG-E02",
    source: "Identity design note",
    evidence:
      "APP-NB-52 uses service identity SVC-NB-52 when requesting API-NB-53.",
    confidence: "High",
    diagramUse: "Supports a service-identity relationship between the portal and API.",
  },
  {
    id: "DG-E03",
    source: "Monitoring inventory",
    evidence:
      "APP-NB-52, API-NB-53, and customer identity events feed MON-NB-20. Backup archive telemetry is not listed.",
    confidence: "Medium",
    diagramUse: "Supports known telemetry paths and a monitoring gap note for the backup archive.",
  },
  {
    id: "DG-E04",
    source: "Change workflow record",
    evidence:
      "Privileged changes require the Privileged Access Broker and an approved change ticket before execution by the administration team.",
    confidence: "High",
    diagramUse: "Supports a distinct administrative path and governance dependency.",
  },
  {
    id: "DG-E05",
    source: "Recovery overview",
    evidence:
      "DATA-NB-14 produces recovery copies to BKP-NB-4, with later archive transfer to an external managed backup service.",
    confidence: "High",
    diagramUse: "Supports the internal backup flow and external archive dependency.",
  },
  {
    id: "DG-E06",
    source: "Data classification note",
    evidence:
      "DATA-NB-14 contains restricted fictional customer records; DATA-NB-15 contains derived reporting data with lower sensitivity.",
    confidence: "High",
    diagramUse: "Supports differentiated data labels instead of one generic database label.",
  },
  {
    id: "DG-E07",
    source: "Service owner interview summary",
    evidence:
      "The reporting store is believed to receive a nightly export from DATA-NB-14, but the current integration document is missing.",
    confidence: "Low",
    diagramUse: "Should be shown as an unverified or assumed flow, not a confirmed flow.",
  },
  {
    id: "DG-E08",
    source: "Operations note",
    evidence:
      "The message delivery provider is required for customer notifications but not for the core transaction to complete.",
    confidence: "Medium",
    diagramUse: "Supports an external dependency with a bounded impact note.",
  },
];

const reviewQuestions = [
  {
    question: "Is the purpose obvious?",
    strong:
      "The title and scope explain what the diagram helps the reader understand, such as customer-service trust boundaries and monitoring dependencies.",
    weak:
      "The diagram is titled 'Network Diagram' or 'Architecture' with no explanation of the review question.",
  },
  {
    question: "Can the reader distinguish facts from assumptions?",
    strong:
      "Confirmed flows use the normal visual convention, while uncertain paths are labeled as unverified and tied to an evidence note.",
    weak:
      "Every arrow looks equally certain even when some relationships came from stale or incomplete information.",
  },
  {
    question: "Are trust changes visible?",
    strong:
      "Public, partner, workforce, privileged, application, data, management, monitoring, and external-provider boundaries are visually distinct when they matter.",
    weak:
      "Everything appears inside one large trusted box, hiding where security assumptions change.",
  },
  {
    question: "Are flows meaningful?",
    strong:
      "Important arrows identify request, identity, administration, telemetry, recovery, or data movement so reviewers understand why the connection matters.",
    weak:
      "Dozens of unlabeled arrows create a dense map without explaining the security meaning of the relationships.",
  },
  {
    question: "Are dependencies and ownership clear?",
    strong:
      "Critical identity, monitoring, management, backup, and external-provider dependencies are visible, with ownership noted where it affects review or action.",
    weak:
      "The diagram shows components but not who owns them or what happens when a shared service becomes unavailable.",
  },
  {
    question: "Is the diagram safe to publish?",
    strong:
      "All names are fictional or generic, sensitive implementation detail is excluded, and the project explanation clearly states that the architecture is synthetic.",
    weak:
      "The student copies real internal hostnames, private system identifiers, confidential network details, or real organizational diagrams into a public portfolio.",
  },
];

const antiPatterns = [
  {
    title: "The box collection",
    problem:
      "The page contains many systems, but relationships, flows, boundaries, ownership, and purpose are missing.",
    improve:
      "Reduce the component list and make the important relationships explicit. The diagram should answer a security question, not inventory every object.",
  },
  {
    title: "Every detail on one page",
    problem:
      "The creator tries to include every service, dependency, log source, label, policy, data store, and control in one diagram.",
    improve:
      "Choose an abstraction level and split focused views when necessary. More detail is useful only when it supports the diagram's purpose.",
  },
  {
    title: "Color without meaning",
    problem:
      "The diagram uses many colors but provides no legend, so readers cannot tell whether colors represent zones, owners, sensitivity, risk, or decoration.",
    improve:
      "Use a small number of visual conventions and define them in a legend.",
  },
  {
    title: "Unlabeled trust",
    problem:
      "External services and privileged administration paths appear inside the same visual space as ordinary application components.",
    improve:
      "Show where trust, ownership, exposure, or privilege changes and explain the meaning of those boundaries.",
  },
  {
    title: "Assumptions drawn as facts",
    problem:
      "A possible data flow is drawn with the same certainty as a verified path because the creator wants the diagram to look complete.",
    improve:
      "Mark uncertain relationships and record what evidence is needed to confirm them.",
  },
  {
    title: "Diagram without narrative",
    problem:
      "The visual may be strong, but the portfolio gives no explanation of the problem, design rationale, evidence, tradeoffs, review findings, or limitations.",
    improve:
      "Add concise written context so the artifact demonstrates thinking, not only drawing skill.",
  },
];

const revisionNotes = [
  {
    version: "Draft 1",
    observation:
      "The first Northbridge diagram placed all identity services inside one generic Identity box and did not separate customer, workforce, and privileged access.",
    revision:
      "Split the identities by purpose and linked privileged access to the management path rather than ordinary user traffic.",
    reason:
      "The original diagram hid a meaningful trust and privilege distinction.",
  },
  {
    version: "Draft 2",
    observation:
      "The reporting export from DATA-NB-14 to DATA-NB-15 was drawn as a confirmed nightly flow.",
    revision:
      "Changed the line to an unverified-flow convention and added evidence reference DG-E07.",
    reason:
      "The available evidence describes the path as believed but not currently documented.",
  },
  {
    version: "Draft 3",
    observation:
      "The monitoring zone appeared to receive telemetry from every component.",
    revision:
      "Removed unsupported telemetry arrows and added a gap note for the external backup archive.",
    reason:
      "A diagram should not imply complete visibility when the monitoring inventory does not support that conclusion.",
  },
  {
    version: "Draft 4",
    observation:
      "External providers were mixed into internal zones and looked organization-owned.",
    revision:
      "Moved them outside the Northbridge trust boundary and labeled the service dependency for each provider.",
    reason:
      "Ownership and responsibility boundaries are part of the security story.",
  },
  {
    version: "Draft 5",
    observation:
      "The page contained too many asset codes and repeated labels for the intended portfolio audience.",
    revision:
      "Kept only stable fictional IDs that support evidence references and used role-based names as the primary labels.",
    reason:
      "The final artifact should remain readable while preserving traceability to the supplied evidence.",
  },
];

const scenarioOneChoices = [
  {
    label: "Choice A",
    response:
      "Mark the path as unverified, cite the stale architecture note, explain what decision depends on the path, and request current evidence before treating it as fact.",
    outcome:
      "Best choice. The diagram stays useful without hiding uncertainty or inventing confidence.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Draw the path as confirmed because the diagram looks more complete when every component is connected.",
    outcome:
      "Risky. Visual completeness does not justify turning an assumption into a fact.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Delete the entire data zone because one path is uncertain.",
    outcome:
      "Too aggressive. Keep the supported parts of the architecture and isolate the specific uncertainty.",
    tone: "caution" as const,
  },
];

const scenarioTwoChoices = [
  {
    label: "Choice A",
    response:
      "Create a fictionalized portfolio-safe version with generic or synthetic labels, remove private details, preserve the learning objective, and clearly state that the published diagram is a reconstructed educational artifact.",
    outcome:
      "Best choice. The student can demonstrate architecture reasoning without exposing real internal information.",
    tone: "best" as const,
  },
  {
    label: "Choice B",
    response:
      "Publish the real diagram because the student had authorized access when the original work was completed.",
    outcome:
      "Risky. Prior access does not automatically authorize public disclosure of internal architecture.",
    tone: "risk" as const,
  },
  {
    label: "Choice C",
    response:
      "Blur only one hostname and leave the rest of the real architecture unchanged.",
    outcome:
      "Insufficient. Publication safety requires reviewing the whole artifact for sensitive relationships and identifiers, not hiding one obvious label.",
    tone: "caution" as const,
  },
];

const labSteps = [
  "Write a two-sentence scope statement for the fictional Northbridge Customer Services architecture. State what the diagram is meant to explain and what it intentionally does not represent.",
  "Create a legend for zones, confirmed flows, unverified flows, identity relationships, telemetry, recovery paths, and external dependencies. Keep the conventions simple enough for a new reader to learn quickly.",
  "Place the seven supplied architecture zones and their major components. Use role-based labels first and stable fictional IDs only where they help connect the visual to evidence.",
  "Add the confirmed customer request path, service-identity relationship, privileged administration path, monitoring flows, recovery path, and external dependencies supported by DG-E01 through DG-E08.",
  "Mark the reporting export as unverified rather than confirmed. Add DG-E07 as the provenance note and state what current evidence would be needed to raise confidence.",
  "Label at least four trust or responsibility changes that matter to security reasoning: public-to-internal, customer identity-to-application, privileged management, data services, monitoring, or external-provider boundaries.",
  "Add concise notes for data sensitivity, ownership, monitoring gaps, and critical dependencies without turning the visual into a wall of text.",
  "Review the diagram using purpose, scope, boundaries, flows, dependencies, ownership, evidence, uncertainty, readability, and publication safety. Record at least three revisions and why they improve the artifact.",
  "Write a short design rationale explaining two choices you made, one important tradeoff, one evidence gap, and one limitation of the diagram.",
  "Prepare a final portfolio package containing the diagram, legend, scope, evidence references, rationale, review findings, revision notes, limitations, and a one-paragraph audience summary.",
];

const challengeCriteria = [
  {
    title: "Clarity",
    strong:
      "A reviewer can understand the architecture question, major zones, important flows, and trust changes in less than a minute before reading deeper notes.",
  },
  {
    title: "Evidence traceability",
    strong:
      "Material relationships connect to stable fictional evidence IDs so the reader can see why they appear in the diagram.",
  },
  {
    title: "Uncertainty discipline",
    strong:
      "Unverified relationships remain visible but are clearly distinguished from confirmed facts and include a next evidence request.",
  },
  {
    title: "Security meaning",
    strong:
      "The visual highlights boundaries, dependencies, identity, data, monitoring, resilience, ownership, and exposure rather than only network-like connectivity.",
  },
  {
    title: "Audience fit",
    strong:
      "The portfolio version is understandable without removing the details needed to support the student's reasoning.",
  },
  {
    title: "Publication safety",
    strong:
      "All systems, identifiers, flows, and records are fictional or safely reconstructed; no real internal architecture or private information is exposed.",
  },
];

const checklistItems = [
  "I can state the purpose and scope of my diagram before I start drawing components.",
  "I show important trust, privilege, ownership, exposure, and external-provider boundaries where they affect security reasoning.",
  "I label important flows by meaning instead of relying on unexplained arrows.",
  "I distinguish confirmed evidence from assumptions, stale records, and unverified relationships.",
  "I include identity, monitoring, management, recovery, and dependency relationships when they materially affect the architecture question.",
  "I use a legend and consistent visual conventions so another reader can interpret the diagram without guessing.",
  "I choose an abstraction level that fits the intended audience and purpose instead of including every possible detail.",
  "I connect major diagram decisions to fictional evidence or documented assumptions.",
  "I record limitations, gaps, ownership questions, and review findings instead of making the architecture look artificially complete.",
  "I revise the artifact after review and can explain why the important revisions improved accuracy or clarity.",
  "I keep the published portfolio version fictional, privacy-safe, and free of real internal architecture or sensitive details.",
  "I pair the visual with enough written context to prove defensive reasoning rather than only diagramming skill.",
];

const quizQuestions = [
  {
    question:
      "What is the strongest reason to create a security diagram for a portfolio project?",
    choices: [
      "To communicate security-relevant relationships, boundaries, evidence, and design reasoning clearly",
      "To fit as many technical icons as possible on one page",
      "To prove that the student used a diagramming tool",
      "To replace every written explanation in the project",
    ],
    answer: 0,
    explanation:
      "A strong diagram is evidence of reasoning. It should help the reader understand important relationships, trust changes, flows, dependencies, and design decisions.",
  },
  {
    question:
      "A supplied interview says a reporting flow probably exists, but the current integration document is missing. How should the diagram represent it?",
    choices: [
      "As an unverified relationship tied to the evidence source and a request for current validation",
      "As a confirmed relationship because the interview came from an owner",
      "As no relationship at all, with no note that uncertainty exists",
      "As a confirmed relationship only if it makes the diagram easier to read",
    ],
    answer: 0,
    explanation:
      "The uncertain flow is still relevant, but uncertainty should remain visible. A diagram should not silently convert a belief into a fact.",
  },
  {
    question:
      "Why are trust boundaries important on a security diagram?",
    choices: [
      "They show where assumptions, identity, privilege, ownership, exposure, or control responsibility changes",
      "They prove that systems on different sides can never communicate",
      "They replace the need for access-control decisions",
      "They are decorative borders used only to separate colors",
    ],
    answer: 0,
    explanation:
      "Trust boundaries help reviewers understand where security assumptions change and where stronger validation, control, monitoring, or governance may be needed.",
  },
  {
    question:
      "Which revision most improves a diagram that contains dozens of unlabeled arrows?",
    choices: [
      "Keep only meaningful relationships and label important flows such as requests, identity, telemetry, administration, or recovery",
      "Add more arrows so every component touches every other component",
      "Remove the legend and rely on arrow direction alone",
      "Replace all labels with asset codes",
    ],
    answer: 0,
    explanation:
      "The reader needs to understand what the relationships mean. Fewer, well-labeled flows usually communicate more security value than dense unexplained connectivity.",
  },
  {
    question:
      "A technically accurate internal architecture diagram contains real private hostnames and organizational details. What is the best portfolio choice?",
    choices: [
      "Create a fictionalized or reconstructed version that preserves the learning objective without exposing the real internal details",
      "Publish it unchanged because accuracy matters more than confidentiality",
      "Publish it if the student originally had access",
      "Hide one hostname and assume the rest is safe",
    ],
    answer: 0,
    explanation:
      "Portfolio publication requires a separate safety decision. A fictionalized reconstruction can demonstrate the same reasoning without exposing real sensitive architecture.",
  },
  {
    question:
      "What does choosing an appropriate abstraction level mean?",
    choices: [
      "Including enough detail to answer the diagram's purpose for the intended audience without burying the security story in unrelated detail",
      "Always drawing the most technically detailed diagram possible",
      "Removing every security control so the diagram looks simple",
      "Using only executive-level labels for every audience",
    ],
    answer: 0,
    explanation:
      "Abstraction is a design decision. The right level depends on the question and audience while preserving the relationships needed for sound conclusions.",
  },
  {
    question:
      "Which package best turns a security diagram into a strong portfolio artifact?",
    choices: [
      "Diagram, legend, scope, evidence references, design rationale, limitations, review findings, revision notes, and concise audience context",
      "A screenshot of the final diagram with no explanation",
      "A list of every icon used in the diagram",
      "A claim that the diagram represents a real production environment",
    ],
    answer: 0,
    explanation:
      "The supporting material makes the student's reasoning, evidence, boundaries, and growth visible. The visual alone rarely proves the full learning process.",
  },
];

const takeaways = [
  "A security diagram is a communication and reasoning artifact, not merely a collection of boxes and arrows.",
  "Purpose and scope determine which systems, identities, flows, boundaries, controls, dependencies, and notes belong on the page.",
  "Trust boundaries make changes in identity, privilege, ownership, exposure, and control responsibility easier to review.",
  "Important arrows should communicate meaning such as request flow, identity, administration, telemetry, recovery, or data movement.",
  "Uncertain or stale relationships should remain visible as uncertainty rather than being silently promoted to confirmed facts.",
  "A portfolio-ready diagram includes context, evidence references, rationale, limitations, review findings, and revision history in addition to the visual itself.",
  "Publication safety matters: use fictional or reconstructed architecture instead of exposing real internal systems, identifiers, or sensitive relationships.",
];

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-8">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-white">
        {title}
      </h2>
      <div className="mt-5 text-slate-300">{children}</div>
    </section>
  );
}

function Navigation() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link
        href={previousLesson}
        className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-purple-400 hover:text-purple-100"
      >
        Previous Lesson
      </Link>

      <Link
        href={modulePath}
        className="rounded-xl border border-slate-700 px-5 py-3 font-black text-slate-200 transition hover:border-cyan-400 hover:text-cyan-100"
      >
        Module A19
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

export default function SecurityDiagramProjectPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.16),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="flex flex-wrap gap-3 text-xs font-black uppercase tracking-[0.18em]">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-cyan-100">
              High School Advanced
            </span>
            <span className="rounded-full border border-purple-400/40 bg-purple-400/10 px-4 py-2 text-purple-100">
              A19.2
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-100">
              Cybersecurity Portfolio Projects
            </span>
          </div>

          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Lesson A19.2
          </p>

          <h1 className="mt-3 max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Security Diagram Project
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            A professional security diagram should make an architecture easier to
            reason about. It shows the relationships that matter: trust changes,
            identity, data movement, management, monitoring, dependencies,
            ownership, uncertainty, and the boundaries of the review.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-slate-400">
            This lesson teaches how to design and review a useful security diagram
            before you build the portfolio artifact. Every system, record, and
            architecture detail below is fictional and safe for classroom use.
          </p>

          <div className="mt-8">
            <Navigation />
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Advanced"
          moduleTitle="A19: Cybersecurity Portfolio Projects"
          lessonTitle="Security Diagram Project"
          lessonNumber={2}
          totalLessons={10}
        />

        <ReadinessCheck
          title="A19.2 Entry Readiness"
          items={[
            "I can explain why a portfolio artifact needs context and evidence instead of relying on appearance alone.",
            "I understand that this project uses only fictional architecture and supplied synthetic records.",
            "I am ready to show uncertainty and limitations instead of forcing every diagram relationship to look confirmed.",
            "I will design the diagram around a clear security question and audience rather than trying to include every possible detail.",
          ]}
        />

        <Section
          eyebrow="Professional Hook"
          title="The Best Security Diagram Is the One That Helps Someone Make a Better Decision"
        >
          <p className="leading-8">
            Imagine a reviewer sees two architecture diagrams. The first contains
            thirty polished icons and dozens of arrows. The second contains fewer
            components, but clearly separates public access, application services,
            data, management, monitoring, and external dependencies. Its arrows
            are labeled, uncertain paths are marked, and the written notes explain
            the two design decisions that matter most.
          </p>

          <p className="mt-4 leading-8">
            The second diagram is more useful because the reviewer can reason from
            it. Security architecture is not improved by visual density. It is
            improved when important relationships become easier to understand,
            question, validate, and communicate.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="text-xl font-black">
              A security diagram is successful when another person can use it to
              understand the architecture without inventing the missing story.
            </p>
          </div>
        </Section>

        <Section eyebrow="Learning Objectives" title="Five Capabilities for A19.2">
          <div className="grid gap-4">
            {objectives.map((objective, index) => (
              <div
                key={objective}
                className="flex gap-4 rounded-2xl border border-blue-400/25 bg-blue-400/10 p-5 text-blue-50"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{objective}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Core Teaching" title="What a Security Diagram Is Supposed to Communicate">
          <p className="leading-8">
            A security diagram is a simplified representation of a system designed
            to make selected security relationships understandable. It is not a
            complete copy of reality. Every diagram chooses what to include, what
            to group, and what to omit. Those choices should be driven by the
            purpose of the review.
          </p>

          <div className="mt-6 grid gap-5">
            {diagramPurposes.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 leading-8 text-slate-300">{item.detail}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Scope and Purpose" title="Start with the Question Before You Start with the Boxes">
          <p className="leading-8">
            Diagram quality begins before drawing. First decide what the reader
            should learn. A diagram of the same fictional service could be built
            for segmentation review, identity review, recovery review, logging
            coverage, cloud dependency review, or executive communication. Each
            version would include different detail because each supports a
            different decision.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Purpose statement",
                detail:
                  "Write one sentence beginning with 'This diagram helps the reader understand...' If that sentence is vague, the visual will probably become vague too.",
              },
              {
                title: "Scope statement",
                detail:
                  "Name the fictional service, workflow, architecture slice, time context, and any intentional exclusions. Scope prevents the picture from appearing more complete than the review actually is.",
              },
              {
                title: "Audience statement",
                detail:
                  "Identify whether the primary reader is a technical peer, evaluator, hiring reviewer, manager, or nontechnical leader. Audience affects presentation depth, not the truth of the architecture.",
              },
              {
                title: "Evidence statement",
                detail:
                  "List the supplied records used to support the drawing. This creates traceability between visual claims and the fictional evidence behind them.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <h3 className="font-black text-blue-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-blue-100">{item.detail}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Diagram Language" title="Nine Elements That Carry Security Meaning">
          <div className="grid gap-5">
            {diagramElements.map((item) => (
              <article
                key={item.element}
                className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-6"
              >
                <h3 className="text-xl font-black text-cyan-50">{item.element}</h3>
                <p className="mt-3 leading-7 text-cyan-100">{item.meaning}</p>
                <div className="mt-4 rounded-xl border border-slate-700 bg-slate-950 p-4 text-sm leading-7 text-slate-300">
                  <span className="font-black text-white">Review question:</span> {item.question}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Abstraction" title="Choose the Right Level of Detail for the Decision">
          <p className="leading-8">
            More detail does not automatically make a diagram more advanced.
            Professionals choose an abstraction level that preserves the
            relationships required for the decision while removing detail that
            would distract, overwhelm, or expose information unnecessarily.
          </p>

          <div className="mt-6 grid gap-5">
            {abstractionLevels.map((item) => (
              <article
                key={item.level}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-6"
              >
                <h3 className="text-xl font-black text-purple-50">{item.level}</h3>
                <p className="mt-3 leading-7 text-purple-100">
                  <span className="font-black">Use when:</span> {item.useWhen}
                </p>
                <p className="mt-3 leading-7 text-white">
                  <span className="font-black">Include:</span> {item.include}
                </p>
                <p className="mt-3 leading-7 text-slate-300">
                  <span className="font-black">Avoid:</span> {item.avoid}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Visual Communication" title="Diagram Conventions Should Reduce Guesswork">
          <div className="grid gap-5 md:grid-cols-2">
            {visualRules.map((item) => (
              <article
                key={item.rule}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5"
              >
                <h3 className="font-black text-emerald-50">{item.rule}</h3>
                <p className="mt-2 text-sm leading-7 text-emerald-100">{item.why}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Evidence Discipline" title="Draw What the Evidence Supports — and Mark What It Does Not">
          <p className="leading-8">
            Architecture records are often incomplete. One document may be old,
            an owner may describe a path from memory, or a monitoring inventory
            may list only some sources. A professional diagram should preserve
            those limits. The visual can include an uncertain relationship, but
            uncertainty must be communicated rather than hidden.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-y-3 text-left text-sm">
              <thead className="text-xs uppercase tracking-[0.16em] text-slate-400">
                <tr>
                  <th className="px-4 py-2">Evidence state</th>
                  <th className="px-4 py-2">Diagram treatment</th>
                  <th className="px-4 py-2">Documentation</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Confirmed",
                    "Normal visual convention for the relationship",
                    "Reference the evidence source when the relationship is material to the review.",
                  ],
                  [
                    "Supported but incomplete",
                    "Show the relationship with a note that limits what is known",
                    "State which part is supported and what remains unverified.",
                  ],
                  [
                    "Assumed",
                    "Use a distinct unverified-flow convention",
                    "Explain why the assumption matters and what evidence should confirm or reject it.",
                  ],
                  [
                    "Contradicted",
                    "Do not choose one version silently",
                    "Show the conflict in the notes and identify which records disagree.",
                  ],
                  [
                    "Unknown",
                    "Leave the uncertainty visible",
                    "Record the gap rather than drawing a guessed relationship to make the picture look complete.",
                  ],
                ].map(([state, treatment, documentation]) => (
                  <tr key={state} className="bg-slate-950">
                    <td className="rounded-l-2xl border-y border-l border-slate-700 px-4 py-4 font-black text-white">
                      {state}
                    </td>
                    <td className="border-y border-slate-700 px-4 py-4 text-slate-300">
                      {treatment}
                    </td>
                    <td className="rounded-r-2xl border-y border-r border-slate-700 px-4 py-4 text-slate-300">
                      {documentation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <FakeDashboardCard
          title="Northbridge Diagram Review Dashboard"
          subtitle="Synthetic portfolio-review metrics for a fictional architecture draft"
          metrics={[
            {
              label: "Architecture zones",
              value: "7",
              note: "Includes external, identity, application, data, management, monitoring, and provider boundaries.",
            },
            {
              label: "Evidence references",
              value: "8",
              note: "Stable fictional records DG-E01 through DG-E08 support the draft.",
            },
            {
              label: "Unverified relationships",
              value: "1",
              note: "The reporting export is believed to exist but lacks a current integration record.",
            },
            {
              label: "Monitoring gaps",
              value: "1",
              note: "No current telemetry source is listed for the external managed backup archive.",
            },
            {
              label: "Major revisions",
              value: "5",
              note: "The portfolio version records why each material visual change was made.",
            },
            {
              label: "Real system data",
              value: "0",
              note: "All names, identifiers, dependencies, and records are fictional.",
            },
          ]}
        />

        <FakeAlertCard
          title="Architecture Review Finding — Unverified Reporting Flow"
          severity="Medium"
          time="Fictional review checkpoint 14:20"
          source="Northbridge Portfolio Review"
          details="The draft shows a nightly DATA-NB-14 to DATA-NB-15 reporting export as confirmed, but the only available source is a low-confidence owner interview summary and the current integration document is missing."
          recommendation="Change the visual to an unverified-flow convention, cite DG-E07, keep the uncertainty visible, and request current integration evidence before raising confidence."
        />

        <FakeLogPanel
          title="Synthetic Diagram Evidence Notes"
          logs={[
            "DG-E01 | architecture brief | CONFIRMED | customer request path reaches APP-NB-52 and API-NB-53 through the managed edge service",
            "DG-E02 | identity note | CONFIRMED | APP-NB-52 uses fictional service identity SVC-NB-52 for the API relationship",
            "DG-E03 | monitoring inventory | PARTIAL | application and identity telemetry listed; external backup archive telemetry not listed",
            "DG-E04 | change record | CONFIRMED | privileged administration depends on the access broker plus approved change workflow",
            "DG-E05 | recovery overview | CONFIRMED | operational data produces protected recovery copies before external archive transfer",
            "DG-E06 | classification note | CONFIRMED | customer records and derived reporting data have different sensitivity labels",
            "DG-E07 | owner interview | UNVERIFIED | nightly reporting export believed to exist; current integration document missing",
            "DG-E08 | operations note | SUPPORTED | message provider affects notifications but is not required for the core transaction",
          ]}
        />

        <Section eyebrow="Fictional Architecture" title="Northbridge Customer Services — What the Diagram Needs to Represent">
          <p className="leading-8">
            The Northbridge case is intentionally small enough to diagram clearly
            but complex enough to show professional security relationships. The
            project is not asking you to draw a real enterprise. It is asking you
            to convert supplied evidence into a defensible visual explanation.
          </p>

          <div className="mt-6 grid gap-5">
            {northbridgeArchitecture.map((item) => (
              <article
                key={item.zone}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.zone}</h3>
                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  <span className="font-black">Components:</span> {item.components}
                </p>
                <p className="mt-3 leading-7 text-slate-300">{item.purpose}</p>
                <p className="mt-3 rounded-xl border border-purple-400/20 bg-purple-400/10 p-4 text-sm leading-7 text-purple-100">
                  <span className="font-black">Diagram review:</span> {item.review}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Source Provenance" title="Evidence Inventory for the Northbridge Diagram">
          <div className="grid gap-5">
            {evidenceInventory.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-blue-300 px-3 py-1 text-xs font-black text-slate-950">
                    {item.id}
                  </span>
                  <h3 className="font-black text-blue-50">{item.source}</h3>
                  <span className="rounded-full border border-slate-600 px-3 py-1 text-xs font-black text-slate-200">
                    Confidence: {item.confidence}
                  </span>
                </div>
                <p className="mt-3 leading-7 text-blue-100">{item.evidence}</p>
                <p className="mt-3 text-sm leading-7 text-white">
                  <span className="font-black">Diagram use:</span> {item.diagramUse}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: The Unverified Reporting Export"
          question="What is the most defensible way to represent the DATA-NB-14 to DATA-NB-15 relationship?"
          evidence={[
            "DG-E06 confirms that both data stores exist and have different classification roles.",
            "DG-E07 says a nightly reporting export is believed to occur.",
            "The current integration document is missing.",
            "The portfolio diagram will be reviewed for evidence discipline, not just visual completeness.",
          ]}
          options={[
            "Show an unverified data-flow relationship, cite DG-E07, and record the current integration document as the next evidence request.",
            "Draw the export as confirmed because both data stores are known to exist.",
            "Delete DATA-NB-15 from the architecture because the flow is uncertain.",
            "Describe the export as a confirmed security weakness without additional evidence.",
          ]}
          bestAnswer={0}
          explanation="The available evidence supports the existence and roles of the stores but does not fully confirm the current integration path. The strongest diagram preserves the relationship as an explicit uncertainty instead of inventing certainty or deleting relevant context."
        />

        <Section eyebrow="Review Model" title="Six Questions for a Professional Diagram Review">
          <div className="grid gap-5">
            {reviewQuestions.map((item) => (
              <article
                key={item.question}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-6"
              >
                <h3 className="text-xl font-black text-emerald-50">{item.question}</h3>
                <p className="mt-3 leading-7 text-emerald-100">
                  <span className="font-black">Strong:</span> {item.strong}
                </p>
                <p className="mt-3 leading-7 text-red-100">
                  <span className="font-black">Weak:</span> {item.weak}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Architecture Dependencies" title="A Diagram Should Reveal What the Service Relies On">
          <p className="leading-8">
            Security review is often dependency review. A service may depend on
            identity to authenticate users, monitoring to preserve visibility,
            management infrastructure to make controlled changes, external
            providers to deliver a business function, and recovery services to
            restore important data. A diagram that hides those dependencies can
            make the architecture appear more resilient or self-contained than it
            actually is.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Identity dependency",
                detail:
                  "Customer, workforce, service, and privileged identities support different workflows. Show the relationships that affect access and trust without implying that all identities are equivalent.",
              },
              {
                title: "Monitoring dependency",
                detail:
                  "Telemetry paths affect what defenders can observe. Missing sources should appear as evidence gaps rather than being silently represented as monitored.",
              },
              {
                title: "Management dependency",
                detail:
                  "Administrative changes rely on privileged identity, controlled workstations, approval workflow, and configuration governance. Keep this path distinct from ordinary user traffic.",
              },
              {
                title: "Recovery dependency",
                detail:
                  "Backups and external archives matter because recovery depends on them. The diagram can show the relationship without exposing real recovery locations or operational details.",
              },
              {
                title: "External provider dependency",
                detail:
                  "Place third-party services outside internal trust boundaries and explain what function depends on them. External does not automatically mean insecure, but responsibility and resilience still matter.",
              },
              {
                title: "Ownership dependency",
                detail:
                  "A technically reasonable architecture can remain difficult to govern when ownership is unclear. Record which team or role should validate material components and decisions.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">{item.detail}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="Anti-Patterns" title="Common Diagram Choices That Reduce Security Value">
          <div className="grid gap-5 md:grid-cols-2">
            {antiPatterns.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-red-400/20 bg-red-400/10 p-5"
              >
                <h3 className="font-black text-red-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-red-100">
                  <span className="font-black">Problem:</span> {item.problem}
                </p>
                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  <span className="font-black">Improve it:</span> {item.improve}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <ScenarioDecisionLab
          title="Scenario Decision Lab 1 — Stale Evidence Behind a Diagram Arrow"
          scenario="A fictional Northbridge architecture draft shows a reporting export as confirmed. During review, you discover that the current integration document is missing and the only remaining source is a low-confidence interview summary."
          choices={scenarioOneChoices}
        />

        <ScenarioDecisionLab
          title="Scenario Decision Lab 2 — Real Internal Diagram in a Student Portfolio"
          scenario="A student wants to reuse an old diagram from a legitimate school or work experience. The original image contains real internal architecture relationships, identifiers, and private operational details."
          choices={scenarioTwoChoices}
        />

        <Section eyebrow="Safe Fictional Lab" title="Build the Northbridge Security Diagram Project">
          <p className="leading-8">
            Your goal is not to create the most complicated picture. Your goal is
            to produce a diagram that another reviewer can use to understand the
            supplied architecture, ask better questions, and trace important
            visual claims back to fictional evidence.
          </p>

          <div className="mt-6 grid gap-4">
            {labSteps.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-blue-400/20 bg-blue-400/10 p-5 text-blue-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6 text-yellow-50">
            <p className="font-black">Lab boundary</p>
            <p className="mt-2 leading-7">
              Build only from the supplied fictional Northbridge records. Do not
              inspect real networks, cloud accounts, devices, identity systems,
              private diagrams, internal documentation, or organizational
              architecture to complete this project.
            </p>
          </div>
        </Section>

        <Section eyebrow="Revision Evidence" title="Show How the Diagram Became More Defensible">
          <p className="leading-8">
            A portfolio reviewer learns more from a few meaningful revision notes
            than from a claim that the first draft was perfect. Revision shows
            that you can respond to evidence, correct overstatement, improve
            communication, and preserve uncertainty.
          </p>

          <div className="mt-6 grid gap-5">
            {revisionNotes.map((item) => (
              <article
                key={item.version}
                className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-6"
              >
                <h3 className="text-xl font-black text-emerald-50">{item.version}</h3>
                <p className="mt-3 leading-7 text-emerald-100">
                  <span className="font-black">Observation:</span> {item.observation}
                </p>
                <p className="mt-3 leading-7 text-white">
                  <span className="font-black">Revision:</span> {item.revision}
                </p>
                <p className="mt-3 leading-7 text-slate-300">
                  <span className="font-black">Why:</span> {item.reason}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <AnalyzeEvidenceCard
          title="Evidence Analysis: Monitoring Coverage in the Draft"
          question="What should the portfolio diagram communicate about the external backup archive?"
          evidence={[
            "DG-E05 confirms that recovery copies are transferred to an external managed backup archive.",
            "DG-E03 lists application and identity telemetry sources but does not list telemetry from the external backup archive.",
            "No supplied record proves that the archive is unmonitored.",
            "The diagram is supposed to distinguish evidence from unsupported conclusions.",
          ]}
          options={[
            "Show the backup dependency and record monitoring visibility as unknown or not confirmed by the supplied inventory, without claiming the archive is definitely unmonitored.",
            "Label the external archive insecure because it does not appear in the monitoring inventory.",
            "Remove the external archive from the diagram because monitoring evidence is incomplete.",
            "Draw a telemetry arrow anyway so the architecture looks fully monitored.",
          ]}
          bestAnswer={0}
          explanation="The evidence confirms the backup dependency but does not prove the monitoring state. The defensible diagram preserves the dependency and labels the visibility question accurately rather than inventing either coverage or failure."
        />

        <Section eyebrow="Advanced Challenge" title="Create Two Views of the Same Architecture Without Changing the Facts">
          <p className="leading-8">
            Build two portfolio-safe views of the same fictional Northbridge case.
            The first is an architecture-review view for a technical reader. The
            second is an executive-context view for a nontechnical reviewer. The
            underlying facts, uncertainty, and evidence references must remain
            consistent, but the amount and organization of detail should change.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {challengeCriteria.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-5"
              >
                <h3 className="font-black text-purple-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-purple-100">{item.strong}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-6 text-cyan-50">
            <p className="font-black">Challenge rule</p>
            <p className="mt-2 leading-7">
              Simplification may change presentation, but it must not change the
              facts. Do not remove uncertainty, invent stronger control coverage,
              or alter the architecture story just to make the executive view look
              cleaner.
            </p>
          </div>
        </Section>

        <DefenderChecklist title="A19.2 Security Diagram Project Checklist" items={checklistItems} />

        <Section eyebrow="Skill Check" title="Seven Questions">
          <MiniQuiz
            title="A19.2 Mini Quiz: Security Diagram Project"
            questions={quizQuestions}
          />
        </Section>

        <PortfolioPrompt
          title="Portfolio Build — Security Diagram Project"
          prompt="Create a portfolio-ready Security Diagram Project using only the fictional Northbridge evidence from this lesson. Include the final diagram, purpose and scope statement, legend, evidence inventory, trust-boundary notes, labeled flows, dependencies, ownership notes where relevant, uncertainty markers, design rationale, at least three meaningful revision notes, limitations, review findings, and a concise audience summary explaining what the artifact demonstrates."
          tips={[
            "Lead with the architecture question, not the diagramming tool you used.",
            "Use role-based labels and simple visual conventions that a reviewer can understand quickly.",
            "Tie material relationships to fictional evidence IDs when traceability improves the explanation.",
            "Keep uncertain relationships visibly uncertain and state what evidence would confirm them.",
            "Publish only the fictional or safely reconstructed version; never expose real internal architecture.",
          ]}
        />

        <Section eyebrow="Confidence / Readiness Reflection" title="Are You Ready for A19.3?">
          <p className="leading-8">
            A19.3 moves into the Incident Report Project. Before continuing, make
            sure you can turn architecture evidence into a clear visual without
            overstating what the evidence proves.
          </p>

          <div className="mt-6 grid gap-4">
            {[
              "I can explain the purpose and scope of a security diagram before drawing it.",
              "I can show trust boundaries, labeled flows, identity, monitoring, management, data, and dependencies when they matter to the review question.",
              "I can distinguish confirmed architecture evidence from assumptions, stale records, and unknowns.",
              "I can choose an abstraction level that fits the audience without changing the underlying facts.",
              "I can explain how revision notes and written context turn a diagram into a stronger portfolio artifact.",
            ].map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5 text-emerald-50"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-300 font-black text-slate-950">
                  {index + 1}
                </span>
                <p className="leading-7">{item}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section eyebrow="Portfolio Build Guide" title="How to Make the Security Diagram Look Professional Without Making It Artificial">
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: "Give the diagram a decision-oriented title",
                detail:
                  "Use a title such as 'Northbridge Customer Services — Trust Boundaries and Defensive Dependencies' instead of a vague label such as 'System Diagram.'",
              },
              {
                title: "Put the legend near the visual",
                detail:
                  "Readers should see the meaning of zones, confirmed flows, unverified flows, telemetry, and external boundaries without searching through another page.",
              },
              {
                title: "Keep evidence IDs secondary",
                detail:
                  "Use readable role-based component names first. Add fictional IDs where they help trace a relationship to the evidence inventory.",
              },
              {
                title: "Use callouts for the important story",
                detail:
                  "A few short annotations can highlight a monitoring gap, shared identity dependency, unverified path, or external-provider boundary. Do not annotate every box.",
              },
              {
                title: "Show revision, not design-tool history",
                detail:
                  "Record meaningful reasoning changes, such as correcting an assumption or clarifying a boundary. You do not need to document every formatting edit.",
              },
              {
                title: "End with limitations",
                detail:
                  "Tell the reader what the visual does not prove. This makes the artifact more credible and prevents a simplified architecture view from being mistaken for a complete environment description.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-5"
              >
                <h3 className="font-black text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">{item.detail}</p>
              </article>
            ))}
          </div>
        </Section>

        <KeyTakeaways takeaways={takeaways} />

        <section className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-6 text-yellow-50">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-200">
            Lesson Safety Boundary
          </p>
          <h2 className="mt-2 text-2xl font-black">
            A19.2 diagrams remain fictional, defensive, privacy-safe, and non-operational
          </h2>
          <p className="mt-3 leading-7">
            Do not inspect, copy, map, probe, scan, enumerate, or publish real
            networks, devices, cloud environments, identity systems, internal
            diagrams, private architecture records, credentials, configuration
            details, or confidential organizational relationships. Complete the
            project only with the supplied fictional Northbridge evidence or other
            purpose-built synthetic material.
          </p>
        </section>

        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-200">
            Lesson Complete
          </p>
          <h2 className="mt-2 text-2xl font-black text-white">
            A19.2 Security Diagram Project Complete
          </h2>
          <p className="mt-3 max-w-4xl leading-7 text-cyan-50">
            You now have a portfolio-ready method for turning fictional
            architecture evidence into a clear, bounded, reviewable security
            diagram. Next, A19.3 applies the same evidence discipline to an
            incident report project.
          </p>

          <div className="mt-6">
            <Navigation />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}