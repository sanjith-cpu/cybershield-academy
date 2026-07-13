import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  KeyTakeaways,
  LessonProgressBar,
  MiniQuiz,
  ReadinessCheck,
} from "@/components/high-school/HighSchoolComponents";

const trackPath = "/high-school/intermediate";
const modulePath = `${trackPath}/networking-for-defenders`;

const questions = [
  {
    "question": "Why do defenders use the OSI and TCP/IP models?",
    "choices": [
      "To organize communication, evidence, controls, and troubleshooting.",
      "To prove all networks use identical hardware.",
      "To replace logs and diagrams.",
      "To guarantee an alert is malicious."
    ],
    "answer": 0,
    "explanation": "Models provide a shared framework for layered reasoning."
  },
  {
    "question": "Which OSI layer is most closely associated with IP addressing and routing?",
    "choices": [
      "Network.",
      "Physical.",
      "Presentation.",
      "Session."
    ],
    "answer": 0,
    "explanation": "The Network layer handles logical addressing and routing."
  },
  {
    "question": "What does successful DNS resolution prove?",
    "choices": [
      "A resolver returned an answer for the requested name.",
      "The application connection succeeded.",
      "The destination is trustworthy.",
      "The user was authorized."
    ],
    "answer": 0,
    "explanation": "DNS confirms name resolution, not the later connection or application result."
  },
  {
    "question": "What does /26 in 10.44.20.93/26 describe?",
    "choices": [
      "The number of network bits.",
      "The application port.",
      "The router count.",
      "The permission level."
    ],
    "answer": 0,
    "explanation": "CIDR prefix length identifies the network portion."
  },
  {
    "question": "Which subnet contains 10.44.20.93/26?",
    "choices": [
      "10.44.20.64/26.",
      "10.44.20.0/26.",
      "10.44.20.128/26.",
      "10.44.20.192/26."
    ],
    "answer": 0,
    "explanation": "A /26 uses blocks of 64; 93 falls in 64–127."
  },
  {
    "question": "What is the main purpose of a default gateway?",
    "choices": [
      "To forward traffic toward off-subnet destinations.",
      "To assign usernames.",
      "To store passwords.",
      "To prove a destination is safe."
    ],
    "answer": 0,
    "explanation": "Off-subnet traffic is normally sent to the default gateway."
  },
  {
    "question": "What may a 169.254.x.x address indicate?",
    "choices": [
      "Normal address assignment may have failed.",
      "The device is definitely compromised.",
      "The user is an administrator.",
      "The certificate expired."
    ],
    "answer": 0,
    "explanation": "Link-local addressing may appear when normal assignment does not succeed."
  },
  {
    "question": "Why can an IP address not prove every user action?",
    "choices": [
      "It must be correlated with device, user, and application evidence.",
      "Addresses never appear in logs.",
      "Every address belongs permanently to one person.",
      "Addresses are only for websites."
    ],
    "answer": 0,
    "explanation": "An address is useful technical context, not complete identity proof."
  },
  {
    "question": "What is the main purpose of a network port?",
    "choices": [
      "To direct traffic to the correct application or service.",
      "To identify a building.",
      "To replace an IP address.",
      "To prove authorization."
    ],
    "answer": 0,
    "explanation": "Ports direct traffic to applications and services."
  },
  {
    "question": "Which statement best compares TCP and UDP?",
    "choices": [
      "TCP has connection and reliability concepts; UDP is connectionless at transport.",
      "TCP is always safe and UDP is malicious.",
      "UDP has no legitimate uses.",
      "They are application names."
    ],
    "answer": 0,
    "explanation": "Both are legitimate transport protocols with different behavior."
  },
  {
    "question": "Why can port 443 not prove traffic is trustworthy?",
    "choices": [
      "It gives service context, not full content, intent, ownership, or authorization.",
      "Port 443 is never used for web traffic.",
      "Ports cannot appear in logs.",
      "Encrypted traffic is always malicious."
    ],
    "answer": 0,
    "explanation": "A port is only one clue."
  },
  {
    "question": "What is an ephemeral port?",
    "choices": [
      "A temporary client-side port.",
      "A permanent public server.",
      "A physical switch port.",
      "A reset token."
    ],
    "answer": 0,
    "explanation": "Clients commonly use temporary source ports."
  },
  {
    "question": "Which evidence best connects a local program to a network connection?",
    "choices": [
      "Endpoint process and connection records.",
      "Only DNS.",
      "Only inventory.",
      "Only alert color."
    ],
    "answer": 0,
    "explanation": "Endpoint telemetry can connect a process, user, and connection."
  },
  {
    "question": "Which record commonly includes an assigned address, gateway, DNS options, and lease window?",
    "choices": [
      "A DHCP lease.",
      "A browser bookmark.",
      "A firewall color.",
      "A password policy."
    ],
    "answer": 0,
    "explanation": "DHCP records support address-assignment context."
  },
  {
    "question": "Why is NTP important to defenders?",
    "choices": [
      "Aligned clocks make logs and timelines reliable.",
      "It replaces DNS.",
      "It assigns IP addresses.",
      "It proves events are safe."
    ],
    "answer": 0,
    "explanation": "Time alignment is essential for correlation."
  },
  {
    "question": "What may NXDOMAIN mean?",
    "choices": [
      "The name does not exist in the queried DNS context.",
      "The device definitely has malware.",
      "The firewall is disabled.",
      "The user is an administrator."
    ],
    "answer": 0,
    "explanation": "The reason may still be a typo, stale link, or missing record."
  },
  {
    "question": "Which firewall rule best follows least privilege?",
    "choices": [
      "One approved source to one approved service using only the required protocol and port.",
      "Any source to any destination using all services.",
      "No logging.",
      "Permanent rules for every temporary test."
    ],
    "answer": 0,
    "explanation": "Least privilege allows only the minimum approved access."
  },
  {
    "question": "What does a firewall allow event prove?",
    "choices": [
      "The traffic matched an allow decision at that firewall and time.",
      "The action was fully trustworthy.",
      "The user had a valid business purpose.",
      "Every control approved the traffic."
    ],
    "answer": 0,
    "explanation": "An allow event records one control decision, not full legitimacy."
  },
  {
    "question": "What is a shadowed firewall rule?",
    "choices": [
      "A rule an earlier rule prevents from being reached.",
      "A rule with dark text.",
      "A DNS-only rule.",
      "A rule with no destination."
    ],
    "answer": 0,
    "explanation": "Rule order can prevent later rules from matching."
  },
  {
    "question": "Why should temporary firewall rules expire?",
    "choices": [
      "So short-term access is reviewed or removed when the need ends.",
      "So traffic becomes public.",
      "So no owner is needed.",
      "So logging can be disabled."
    ],
    "answer": 0,
    "explanation": "Expiration reduces stale access."
  },
  {
    "question": "What is the main purpose of network segmentation?",
    "choices": [
      "To separate trust levels and limit unnecessary paths.",
      "To make every system public.",
      "To eliminate identity controls.",
      "To replace logging."
    ],
    "answer": 0,
    "explanation": "Segmentation reduces unnecessary exposure."
  },
  {
    "question": "Why is a VLAN not a complete security control by itself?",
    "choices": [
      "Routing and policy still determine which VLANs can communicate.",
      "VLANs cannot group devices.",
      "VLANs allow every protocol.",
      "VLANs work only on websites."
    ],
    "answer": 0,
    "explanation": "Logical separation needs controlled cross-zone communication."
  },
  {
    "question": "Which management path is strongest?",
    "choices": [
      "Managed admin devices use MFA and a logged jump host for specific services.",
      "Any user device accesses all management interfaces.",
      "Guest devices access management during testing.",
      "Management is open to every internal zone."
    ],
    "answer": 0,
    "explanation": "Management access should be narrow, strongly authenticated, and monitored."
  },
  {
    "question": "What is diagram drift?",
    "choices": [
      "A mismatch between documented architecture and the current environment.",
      "Only a wireless signal problem.",
      "A moving image effect.",
      "A password policy failure."
    ],
    "answer": 0,
    "explanation": "Diagrams must be validated against current evidence."
  },
  {
    "question": "A managed device has the correct VLAN and successful DNS but receives an address from the wrong /26 scope and is denied as guest. What is the strongest next step?",
    "choices": [
      "Preserve evidence, confirm design, correct the scope or zone mapping through the owner, and validate.",
      "Disable the firewall.",
      "Assign a random static address.",
      "Conclude the service is malicious."
    ],
    "answer": 0,
    "explanation": "The response should target the earliest supported mismatch."
  }
];

const domains = [
  ["Questions 1–3", "Network models and layered reasoning"],
  ["Questions 4–8", "IPv4 addressing, subnets, gateways, and evidence"],
  ["Questions 9–13", "Ports, protocols, services, and endpoint context"],
  ["Questions 14–16", "DNS, DHCP, NTP, and common services"],
  ["Questions 17–20", "Firewalls, rule quality, and least privilege"],
  ["Questions 21–23", "Segmentation and management access"],
  ["Questions 24–25", "Diagrams and integrated defensive analysis"],
];

export default function I1ModuleTestPage() {
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
              Module I1
            </span>
            <span className="rounded-full border border-yellow-300/40 bg-yellow-300/10 px-4 py-2 text-yellow-200">
              25-Question Test
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            I1 Module Test: Networking for Defenders
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            Test your understanding of network models, IPv4 and subnetting,
            ports and protocols, DNS and DHCP, firewalls, segmentation,
            diagrams, and integrated defensive analysis.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={modulePath}
              className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Back to Module
            </Link>
            <Link
              href={`${modulePath}/network-defense-analysis-lab`}
              className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Review I1.8
            </Link>
            <Link
              href={trackPath}
              className="rounded-full bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Intermediate Track
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <LessonProgressBar
          track="High School Intermediate"
          moduleTitle="I1: Networking for Defenders"
          lessonTitle="Module Test"
          lessonNumber={9}
          totalLessons={9}
        />

        <ReadinessCheck
          title="Before You Begin"
          items={[
            "I completed or reviewed all eight I1 lessons.",
            "I will answer every question before submitting.",
            "I understand that answers and explanations remain hidden until submission.",
            "I will use my result to identify weak domains rather than only focusing on the total score.",
          ]}
        />

        <section className="rounded-2xl border border-yellow-300/30 bg-yellow-300/10 p-6">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-yellow-200">
            Test Instructions
          </p>
          <h2 className="mt-3 text-2xl font-black text-white">
            Complete all 25 questions in one focused attempt
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-700 bg-slate-950/70 p-5">
              <p className="font-black text-cyan-100">Recommended process</p>
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-300">
                <li>Read the full scenario or question.</li>
                <li>Identify the strongest evidence.</li>
                <li>Eliminate overconfident or unsafe choices.</li>
                <li>Select the most defensible answer.</li>
                <li>Submit only after all questions are answered.</li>
              </ol>
            </div>

            <div className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-5">
              <p className="font-black text-emerald-100">Suggested score guide</p>
              <div className="mt-3 space-y-2 text-sm leading-6 text-emerald-50">
                <p><span className="font-bold">23–25:</span> Strong I1 mastery</p>
                <p><span className="font-bold">20–22:</span> Ready with targeted review</p>
                <p><span className="font-bold">16–19:</span> Review weak domains</p>
                <p><span className="font-bold">0–15:</span> Revisit the module lessons and labs</p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-cyan-300">
            Domain Coverage
          </p>
          <h2 className="mt-3 text-2xl font-black text-white">
            What this test measures
          </h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {domains.map(([range, domain]) => (
              <div
                key={range}
                className="rounded-2xl border border-slate-700 bg-slate-950 p-4"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                  {range}
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-200">
                  {domain}
                </p>
              </div>
            ))}
          </div>
        </section>

        <MiniQuiz
          title="I1 Networking for Defenders Module Test"
          questions={questions}
        />

        <KeyTakeaways
          takeaways={[
            "Use network models to organize evidence rather than force every detail into one perfect box.",
            "Read the full IP address and prefix before deciding whether systems share a subnet.",
            "Ports and protocols provide service context but do not prove complete purpose or trustworthiness.",
            "DNS, DHCP, firewall, endpoint, identity, inventory, and change records must be correlated.",
            "Segmentation and firewall rules should follow least privilege, ownership, logging, review, testing, and rollback.",
            "Strong defenders preserve evidence, state uncertainty honestly, and correct the earliest supported mismatch.",
          ]}
        />

        <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Module Navigation
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Review or return to the Intermediate Track
          </h2>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href={`${modulePath}/network-defense-analysis-lab`}
              className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Review I1.8
            </Link>
            <Link
              href={modulePath}
              className="rounded-xl border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Back to I1 Module
            </Link>
            <Link
              href={trackPath}
              className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Intermediate Track
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}