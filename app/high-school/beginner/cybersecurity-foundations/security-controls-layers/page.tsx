import Link from "next/link";
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
  VisualDiagramCard,
} from "@/components/high-school/HighSchoolComponents";

const moduleHref = "/high-school/beginner/cybersecurity-foundations";
const previousHref = "/high-school/beginner/cybersecurity-foundations/how-cyber-defenders-think";
const nextHref = "/high-school/beginner/cybersecurity-foundations/safe-case-study-what-went-wrong";

function NavButton({ href, children, variant = "secondary" }: { href: string; children: React.ReactNode; variant?: "primary" | "secondary" }) {
  return (
    <Link
      href={href}
      className={
        variant === "primary"
          ? "rounded-full bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
          : "rounded-full border border-slate-700 px-5 py-3 text-sm font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
      }
    >
      {children}
    </Link>
  );
}

function LessonNav() {
  return (
    <nav className="flex flex-wrap gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
      <NavButton href={previousHref}>← Previous Lesson</NavButton>
      <NavButton href={moduleHref}>Back to Module</NavButton>
      <NavButton href="/high-school/beginner">Beginner Track</NavButton>
      <NavButton href={nextHref} variant="primary">
        Next Lesson →
      </NavButton>
    </nav>
  );
}

function SectionCard({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <div className="mt-4 text-slate-300">{children}</div>
    </section>
  );
}

function DefenseLayersVisual() {
  const layers = [
    {
      name: "People & Policy",
      example: "Rules, training, reporting paths, trusted adults, and clear ownership",
      purpose: "Guides safe choices before a problem grows.",
    },
    {
      name: "Identity",
      example: "Strong passphrases, MFA, account roles, recovery settings, and login alerts",
      purpose: "Helps confirm who is allowed to access something.",
    },
    {
      name: "Device",
      example: "Updates, screen locks, app permissions, security settings, and safe installs",
      purpose: "Protects the computer, phone, tablet, or school device itself.",
    },
    {
      name: "Network",
      example: "Wi-Fi settings, firewalls, segmentation concepts, and monitoring alerts",
      purpose: "Controls how systems communicate and what traffic is allowed.",
    },
    {
      name: "Data & Recovery",
      example: "Backups, file permissions, encryption concepts, classification, and restore plans",
      purpose: "Protects the information even if another layer has trouble.",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Visual Diagram</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Defense-in-Depth: Security Works in Layers</h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        A single control can fail, be forgotten, or only protect one part of the situation. Defense-in-depth means placing several reasonable defensive layers around the things that matter.
      </p>

      <div className="mt-6 grid gap-4">
        {layers.map((layer, index) => (
          <div key={layer.name} className="rounded-2xl border border-cyan-400/20 bg-slate-950 p-4">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 text-lg font-black text-slate-950">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-cyan-100">{layer.name}</h3>
                </div>
                <p className="mt-3 text-slate-300">{layer.example}</p>
              </div>
              <p className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-3 text-sm font-semibold text-emerald-100 md:max-w-xs">
                {layer.purpose}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ControlsGrid() {
  const controls = [
    {
      title: "Preventive Controls",
      label: "Reduce the chance",
      examples: ["MFA", "screen locks", "least privilege", "safe install rules"],
      style: "border-emerald-400/30 bg-emerald-400/10 text-emerald-100",
    },
    {
      title: "Detective Controls",
      label: "Notice clues",
      examples: ["login alerts", "fake log review", "security dashboards", "warning banners"],
      style: "border-yellow-400/30 bg-yellow-400/10 text-yellow-100",
    },
    {
      title: "Corrective Controls",
      label: "Recover safely",
      examples: ["password reset", "restore from backup", "remove unsafe app", "report and document"],
      style: "border-cyan-400/30 bg-cyan-400/10 text-cyan-100",
    },
  ];

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Technical Breakdown</p>
      <h2 className="mt-2 text-2xl font-bold text-white">Three Jobs Controls Can Do</h2>
      <p className="mt-3 max-w-3xl text-slate-300">
        A security control is not just a random rule. Good controls have a job: they prevent problems, detect clues, or help people recover.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {controls.map((control) => (
          <div key={control.title} className={`rounded-2xl border p-5 ${control.style}`}>
            <p className="text-sm font-bold uppercase tracking-[0.2em] opacity-80">{control.label}</p>
            <h3 className="mt-3 text-xl font-black text-white">{control.title}</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {control.examples.map((example) => (
                <li key={example} className="rounded-xl border border-white/10 bg-slate-950/80 p-3">
                  {example}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function SecurityControlsAndLayersPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_34%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">High School Beginner • Module B1 • Lesson 5</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-white md:text-6xl">Security Controls and Layers</h1>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Learn how defenders use layered controls to reduce risk, catch warning signs, and recover when something goes wrong. This lesson turns the idea of “be safe online” into a professional defensive model.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <NavButton href={previousHref}>← Previous Lesson</NavButton>
              <NavButton href={nextHref} variant="primary">
                Next Lesson →
              </NavButton>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-8 px-6 py-10">
        <LessonNav />

        <LessonProgressBar
          track="High School Beginner"
          moduleTitle="B1: Cybersecurity Foundations"
          lessonTitle="B1.5 Security Controls and Layers"
          lessonNumber={5}
          totalLessons={7}
        />

        <ReadinessCheck
          items={[
            "I can explain that risk is connected to threats, vulnerabilities, and impact.",
            "I understand that defenders make decisions using evidence instead of panic.",
            "I know that cybersecurity protects people, accounts, devices, systems, and data.",
          ]}
        />

        <SectionCard eyebrow="Professional Hook" title="Why One Safety Habit Is Not Enough">
          <p className="leading-8">
            Imagine a school laptop that has a strong password but never receives updates. Or a cloud folder that has a backup but is shared with too many people. A defender would not say, “one control exists, so everything is safe.” A defender asks: what layers are protecting the asset, what could still go wrong, and what evidence would show that a layer is failing?
          </p>
        </SectionCard>

        <SectionCard eyebrow="Learning Objectives" title="By the End of This Lesson, You Should Be Able To">
          <div className="grid gap-3 md:grid-cols-2">
            {[
              "Define a security control in beginner-friendly technical language.",
              "Explain preventive, detective, and corrective controls.",
              "Describe defense-in-depth as layers of protection.",
              "Match controls to risks without overreacting or ignoring evidence.",
              "Use fake evidence to recommend safe defensive next steps.",
              "Build a short layered defense plan for a school-safe scenario.",
            ].map((objective) => (
              <div key={objective} className="rounded-2xl border border-slate-700 bg-slate-950 p-4 text-slate-300">
                {objective}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard eyebrow="Why This Matters" title="Controls Turn Cybersecurity From Advice Into Action">
          <p className="leading-8">
            A control is a safeguard. It can be a setting, rule, tool, process, habit, or physical protection that reduces risk. Instead of only telling people to “be careful,” cybersecurity teams choose controls that protect specific assets from specific risks.
          </p>
          <div className="mt-5 rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            <span className="font-bold">Beginner defender idea:</span> a control should connect to a real risk. If the risk is account takeover, useful controls might include MFA, login alerts, recovery settings, and a clear reporting workflow.
          </div>
        </SectionCard>

        <SectionCard eyebrow="Core Concept" title="What Is a Security Control?">
          <p className="leading-8">
            A security control is something defenders use to lower risk. Some controls stop problems before they happen. Some controls help defenders notice clues. Some controls help people recover safely after an issue.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5 text-emerald-100">
              <h3 className="font-black text-white">Example Risk</h3>
              <p className="mt-2">A student account could be accessed by someone who should not have access.</p>
            </div>
            <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-cyan-100">
              <h3 className="font-black text-white">Possible Controls</h3>
              <p className="mt-2">MFA, passphrase rules, recovery settings, login alerts, and trusted reporting.</p>
            </div>
            <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-5 text-yellow-100">
              <h3 className="font-black text-white">Defender Question</h3>
              <p className="mt-2">Which control best reduces this risk without creating a bigger problem?</p>
            </div>
          </div>
        </SectionCard>

        <DefenseLayersVisual />

        <SectionCard eyebrow="Key Vocabulary" title="Terms Cyber Defenders Use">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ["Security Control", "A safeguard used to reduce risk, notice problems, or support recovery."],
              ["Defense-in-Depth", "Using multiple layers of protection instead of depending on one safeguard."],
              ["Preventive Control", "A control designed to reduce the chance of a problem happening."],
              ["Detective Control", "A control designed to identify clues that a problem may be happening."],
              ["Corrective Control", "A control designed to help restore safety after a problem."],
              ["Compensating Control", "An alternate safeguard used when the ideal control is not possible yet."],
            ].map(([term, definition]) => (
              <div key={term} className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
                <h3 className="font-bold text-cyan-200">{term}</h3>
                <p className="mt-2 text-slate-300">{definition}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <ControlsGrid />

        <VisualDiagramCard
          title="Risk to Control Mapping"
          description="Defenders do not choose controls randomly. They connect the risk to the asset, the possible weakness, and the safest protective action."
          steps={[
            "Identify what needs protection",
            "Name the risk clearly",
            "Choose layered controls that lower the risk",
          ]}
        />

        <FakeDashboardCard
          title="Fake Layered Defense Dashboard"
          subtitle="Training-only dashboard showing how layered controls might be reviewed by a beginner defender."
          metrics={[
            { label: "Preventive controls enabled", value: "4/5", note: "MFA, updates, screen lock, and safe install rules are active." },
            { label: "Detective controls active", value: "3/4", note: "Login alerts, backup checks, and fake log review are enabled." },
            { label: "Recovery readiness", value: "Medium", note: "Backups exist, but restore testing needs review." },
          ]}
        />

        <SectionCard eyebrow="Common Mistakes" title="What Beginners Often Get Wrong About Controls">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <h3 className="font-black text-white">Mistake 1</h3>
              <p className="mt-2">Thinking one control makes everything safe.</p>
            </div>
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <h3 className="font-black text-white">Mistake 2</h3>
              <p className="mt-2">Choosing controls without connecting them to a real risk.</p>
            </div>
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-red-100">
              <h3 className="font-black text-white">Mistake 3</h3>
              <p className="mt-2">Ignoring recovery because prevention feels more exciting.</p>
            </div>
          </div>
        </SectionCard>

        <SectionCard eyebrow="Safe Defensive Lab" title="Build a Layered Defense Plan">
          <p className="leading-8">
            Use this fake situation: a student club stores meeting notes, event flyers, and member contact preferences in a shared cloud folder. No real names, passwords, or personal information should be used in this practice.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-emerald-100">
              <h3 className="font-bold text-white">Prevent</h3>
              <p className="mt-2">Limit editing access, require MFA, use clear file naming, and avoid storing private data.</p>
            </div>
            <div className="rounded-2xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-100">
              <h3 className="font-bold text-white">Detect</h3>
              <p className="mt-2">Review sharing settings, check fake access alerts, and notice unexpected file changes.</p>
            </div>
            <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-4 text-cyan-100">
              <h3 className="font-bold text-white">Recover</h3>
              <p className="mt-2">Keep a backup copy, document what changed, and ask a trusted adult or school staff for help.</p>
            </div>
          </div>
        </SectionCard>

        <FakeAlertCard
          title="Shared Folder Permission Change"
          severity="Medium"
          time="09:42 AM"
          source="Fake Cloud Classroom Alert"
          details="A training folder changed from 'Only invited editors' to 'Anyone with the link can edit.' No real folder is involved. This is fake practice evidence."
          recommendation="Do not open unknown links or investigate real accounts. In this fake scenario, recommend changing the setting back, reviewing who needs access, and reporting the change to the responsible teacher or club sponsor."
        />

        <FakeLogPanel
          title="Fake Control Review Log"
          logs={[
            "09:40:12 control.review shared-folder access_mode=invited_editors status=expected",
            "09:42:03 control.change shared-folder access_mode=anyone_with_link_can_edit status=needs_review",
            "09:43:18 alert.generated shared-folder permission_change severity=medium",
            "09:45:02 recommended.action verify_owner notify_sponsor restore_safer_setting document_change",
          ]}
        />

        <AnalyzeEvidenceCard
          title="Which Control Should Be Checked First?"
          evidence={[
            "The fake alert shows a shared folder permission change.",
            "The fake log shows the folder became editable by anyone with the link.",
            "There is no evidence of data loss in the fake logs, but the exposure risk increased.",
          ]}
          question="What is the safest first defensive conclusion?"
          options={[
            "Assume the folder is fully compromised and delete every file immediately.",
            "Review and restore safer sharing permissions, document the change, and notify the responsible adult or staff member.",
            "Ignore it because no data loss is proven yet.",
            "Send the folder link to more people to ask whether it works.",
          ]}
          bestAnswer={1}
          explanation="The best answer is to reduce the exposure safely, document the evidence, and involve the responsible adult or staff member. A defender does not panic, ignore the clue, or spread the link."
        />

        <ScenarioDecisionLab
          title="A Layer Failed. What Do You Do?"
          scenario="A fake school project folder accidentally becomes editable by anyone with the link. You are not the owner, but you notice the warning in a training dashboard."
          choices={[
            {
              label: "A",
              response: "Privately change the folder settings yourself and say nothing.",
              outcome: "This is risky because it skips ownership, documentation, and trusted reporting. Even helpful actions should stay within permission boundaries.",
              tone: "risk",
            },
            {
              label: "B",
              response: "Screenshot the fake evidence for the lab notes, tell the responsible teacher or sponsor, and recommend restoring safer sharing settings.",
              outcome: "Best choice. This keeps the response defensive, documented, and within trusted help channels.",
              tone: "best",
            },
            {
              label: "C",
              response: "Assume someone did it on purpose and accuse the most recent editor.",
              outcome: "This jumps to a conclusion without enough evidence. Defenders separate facts from assumptions.",
              tone: "caution",
            },
          ]}
        />

        <DefenderChecklist
          items={[
            "I can explain the difference between preventive, detective, and corrective controls.",
            "I can describe defense-in-depth without saying one tool solves everything.",
            "I can connect a control to a specific risk.",
            "I can use fake evidence to recommend a safe defensive next step.",
            "I know when to involve a trusted adult, teacher, guardian, or school technology staff member.",
          ]}
        />

        <MiniQuiz
          questions={[
            {
              question: "What is a security control?",
              choices: [
                "A safeguard used to reduce risk, detect clues, or support recovery",
                "A guarantee that no cyber problem can happen",
                "A real suspicious link students should test",
                "A way to avoid asking for help",
              ],
              answer: 0,
              explanation: "A control is a safeguard. It lowers risk, helps identify clues, or supports recovery, but it is not a perfect guarantee.",
            },
            {
              question: "Which example is a detective control?",
              choices: ["MFA", "Login alert", "Screen lock", "Backup restore"],
              answer: 1,
              explanation: "A login alert helps notice a clue that something may need review, so it is detective.",
            },
            {
              question: "Why do defenders use layers?",
              choices: [
                "Because one control can fail or only protect one part of the risk",
                "Because more tools always means perfect security",
                "Because layers remove the need for people to make decisions",
                "Because recovery plans are not important",
              ],
              answer: 0,
              explanation: "Defense-in-depth works because each layer covers a different part of the risk. No single layer is perfect.",
            },
            {
              question: "A backup plan is most closely connected to which control job?",
              choices: ["Corrective", "Decorative", "Accusatory", "Unrelated"],
              answer: 0,
              explanation: "Backups help restore data after a problem, so they are part of recovery and corrective control thinking.",
            },
          ]}
        />

        <PortfolioPrompt
          title="Create a Layered Defense Mini-Plan"
          prompt="Write a short layered defense plan for a fake student club account or fake shared project folder. Include at least one preventive control, one detective control, one corrective control, and one trusted reporting step."
          tips={[
            "Use fake data only.",
            "Connect each control to a risk.",
            "Keep your recommendation calm and professional.",
          ]}
        />

        <KeyTakeaways
          takeaways={[
            "Security controls are safeguards that reduce risk, detect clues, or support recovery.",
            "Defense-in-depth means using multiple layers instead of relying on one control.",
            "Good controls connect to specific risks and assets.",
            "Defenders document evidence and involve trusted help instead of guessing or panicking.",
          ]}
        />

        <LessonNav />
      </div>

      <Footer />
    </main>
  );
}