import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain what Cisco switch port security is designed to control.",
  "Distinguish maximum MAC limits, static secure MAC addresses, sticky learning, and violation modes.",
  "Inspect existing port-security state before changing an access port.",
  "Recognize the difference between protect, restrict, and shutdown violation behavior.",
  "Troubleshoot port-security violations without erasing useful evidence or disabling required devices.",
  "Apply port security only to confirmed endpoint-facing access ports and verify the result.",
];

const coreConcepts = [
  {
    title: "Port security",
    text:
      "A Cisco switch feature that limits which source MAC addresses can use a Layer 2 access port and what happens when the configured policy is violated.",
  },
  {
    title: "Secure MAC address",
    text:
      "A MAC address accepted by the port-security policy, whether configured manually, learned dynamically, or learned with sticky behavior.",
  },
  {
    title: "Maximum MAC count",
    text:
      "The number of secure MAC addresses the switch permits on the port before a violation condition occurs.",
  },
  {
    title: "Sticky learning",
    text:
      "A feature that learns source MAC addresses dynamically and can place them into the running configuration as sticky secure addresses.",
  },
  {
    title: "Violation mode",
    text:
      "The configured response when a frame arrives from a MAC address that violates the port-security policy.",
  },
  {
    title: "Err-disabled state",
    text:
      "A protective state in which Cisco IOS disables a port after certain serious conditions, including port-security shutdown violations on many platforms.",
  },
];

const whyUsePortSecurity = [
  {
    title: "Limit unexpected devices",
    text:
      "An access port intended for one workstation can be restricted so additional unauthorized MAC addresses do not automatically gain normal access.",
  },
  {
    title: "Reduce casual port sharing",
    text:
      "Port security can make it harder to connect an unmanaged switch or multiple unexpected endpoints behind a single access port.",
  },
  {
    title: "Create useful evidence",
    text:
      "Violation counters and secure-MAC state can show when a port has observed behavior outside the configured policy.",
  },
  {
    title: "Support least privilege",
    text:
      "The switchport can be configured for the number and type of devices the scenario actually requires.",
  },
  {
    title: "Protect access ports",
    text:
      "Port security is generally most appropriate on known endpoint-facing access ports, not on trunks or broad infrastructure links.",
  },
  {
    title: "Complement other controls",
    text:
      "Port security does not replace VLAN design, authentication, ACLs, DHCP protections, or endpoint security.",
  },
];

const prerequisites = [
  {
    check: "Confirm the interface is an access port",
    why:
      "Port security is intended for access-style endpoint links on the supported Cisco platform.",
  },
  {
    check: "Confirm the connected device role",
    why:
      "A workstation, phone-plus-PC combination, access point, or downstream switch may require different MAC limits.",
  },
  {
    check: "Inspect current MAC learning",
    why:
      "The existing MAC table helps show how many devices the port currently sees.",
  },
  {
    check: "Check current port-security state",
    why:
      "The feature may already be configured with a deliberate maximum, violation mode, or secure MAC list.",
  },
  {
    check: "Document required endpoint MAC addresses if known",
    why:
      "Static or sticky decisions should reflect the authorized environment rather than guesses.",
  },
  {
    check: "Confirm console or alternate management access when needed",
    why:
      "A broad switchport mistake should not lock the team out of critical management paths.",
  },
];

const ciscoInspection = [
  {
    command: "show interfaces status",
    purpose:
      "Review physical status, VLAN, duplex, speed, and port role clues.",
  },
  {
    command: "show interfaces <interface> switchport",
    purpose:
      "Confirm access mode and VLAN before touching port security.",
  },
  {
    command: "show running-config interface <interface>",
    purpose:
      "Review the exact switchport and port-security statements already applied.",
  },
  {
    command: "show mac address-table interface <interface>",
    purpose:
      "See which MAC addresses the switch has learned on the port.",
  },
  {
    command: "show port-security interface <interface>",
    purpose:
      "Review port-security status, violation mode, maximum MACs, secure MAC count, and violations where supported.",
  },
  {
    command: "show port-security address",
    purpose:
      "Display secure MAC addresses known to port security on supported switches.",
  },
  {
    command: "show interfaces <interface>",
    purpose:
      "Review detailed link state and interface counters.",
  },
  {
    command: "show logging",
    purpose:
      "Look for port-security or err-disable messages when logging is available.",
  },
];

const macTypes = [
  {
    type: "Static secure MAC",
    behavior:
      "Explicitly configured by the administrator and accepted by the port-security policy.",
    strength:
      "Predictable for known fixed endpoints.",
    caution:
      "Requires accurate MAC documentation and manual updates when hardware changes.",
  },
  {
    type: "Dynamic secure MAC",
    behavior:
      "Learned dynamically while port security is active, depending on platform behavior.",
    strength:
      "Requires less manual entry.",
    caution:
      "Dynamic entries may not persist after reload unless the design saves them another way.",
  },
  {
    type: "Sticky secure MAC",
    behavior:
      "Learned dynamically and represented as sticky secure MAC configuration.",
    strength:
      "Combines automatic learning with configuration visibility.",
    caution:
      "Review what was learned before saving so an unexpected device is not made persistent.",
  },
];

const violationModes = [
  {
    mode: "protect",
    forwarding:
      "Frames from violating source MAC addresses are dropped.",
    logging:
      "Typically limited compared with restrict; behavior varies by IOS platform.",
    portState:
      "Port remains up.",
    competitionUse:
      "Useful to understand, but can make violations less visible if evidence is needed.",
  },
  {
    mode: "restrict",
    forwarding:
      "Frames from violating source MAC addresses are dropped.",
    logging:
      "Violation counters and logging/SNMP notification may be generated depending on platform.",
    portState:
      "Port remains up.",
    competitionUse:
      "Often useful when you want to preserve the authorized device while still recording violations.",
  },
  {
    mode: "shutdown",
    forwarding:
      "Violation triggers a serious protective response.",
    logging:
      "Violation is normally visible through port-security state and system messages.",
    portState:
      "Port commonly becomes err-disabled.",
    competitionUse:
      "Strong response, but a wrong MAC limit can disconnect a required endpoint and demand deliberate recovery.",
  },
];

const basicConfig = [
  {
    step: "01",
    title: "Confirm access mode",
    commands: [
      "show interfaces GigabitEthernet0/5 switchport",
      "show running-config interface GigabitEthernet0/5",
    ],
    reason:
      "Do not enable port security on a port whose role is uncertain.",
  },
  {
    step: "02",
    title: "Inspect learned MAC addresses",
    commands: [
      "show mac address-table interface GigabitEthernet0/5",
    ],
    reason:
      "Confirm how many legitimate devices currently use the port.",
  },
  {
    step: "03",
    title: "Enter the access port",
    commands: [
      "configure terminal",
      "interface GigabitEthernet0/5",
    ],
    reason:
      "Limit scope to the one confirmed endpoint-facing interface.",
  },
  {
    step: "04",
    title: "Enable port security",
    commands: [
      "switchport mode access",
      "switchport port-security",
    ],
    reason:
      "Make the access role explicit before enabling the feature.",
  },
  {
    step: "05",
    title: "Set the intended maximum",
    commands: [
      "switchport port-security maximum 1",
    ],
    reason:
      "Use a number that matches the actual endpoint design, not a universal rule.",
  },
  {
    step: "06",
    title: "Select violation behavior",
    commands: [
      "switchport port-security violation restrict",
    ],
    reason:
      "Choose the response deliberately based on the scenario and the risk of disconnecting a required device.",
  },
  {
    step: "07",
    title: "Configure secure MAC behavior",
    commands: [
      "switchport port-security mac-address sticky",
    ],
    reason:
      "Use sticky learning only if the design calls for learning the authorized endpoint dynamically.",
  },
  {
    step: "08",
    title: "Exit and verify",
    commands: [
      "end",
      "show port-security interface GigabitEthernet0/5",
      "show port-security address",
    ],
    reason:
      "Confirm the policy and learned address before saving.",
  },
];

const staticExamples = [
  {
    goal: "Permit one known workstation MAC",
    commands: [
      "configure terminal",
      "interface GigabitEthernet0/5",
      "switchport mode access",
      "switchport port-security",
      "switchport port-security maximum 1",
      "switchport port-security mac-address 00AA.BBCC.DD01",
      "switchport port-security violation restrict",
      "end",
    ],
    verify:
      "show port-security interface GigabitEthernet0/5",
  },
  {
    goal: "Allow an IP phone plus workstation design",
    commands: [
      "configure terminal",
      "interface GigabitEthernet0/8",
      "switchport mode access",
      "switchport port-security",
      "switchport port-security maximum 2",
      "switchport port-security mac-address sticky",
      "switchport port-security violation restrict",
      "end",
    ],
    verify:
      "show port-security address",
  },
  {
    goal: "Remove one incorrect static secure MAC",
    commands: [
      "configure terminal",
      "interface GigabitEthernet0/5",
      "no switchport port-security mac-address 00AA.BBCC.DD99",
      "end",
    ],
    verify:
      "show port-security interface GigabitEthernet0/5",
  },
];

const maximumReasoning = [
  {
    design: "Single workstation",
    likelyMaximum:
      "1",
    caution:
      "Verify there is not also a legitimate phone, hypervisor, or bridged device behind the port.",
  },
  {
    design: "IP phone with attached workstation",
    likelyMaximum:
      "Often more than 1",
    caution:
      "Voice/data designs can expose multiple legitimate source MAC addresses on one physical switchport.",
  },
  {
    design: "Virtualization host",
    likelyMaximum:
      "Potentially several",
    caution:
      "A hypervisor can legitimately source traffic from multiple virtual machines.",
  },
  {
    design: "Downstream switch",
    likelyMaximum:
      "Many",
    caution:
      "This may be an infrastructure link and may not be appropriate for ordinary access-port security at all.",
  },
  {
    design: "Wireless access point",
    likelyMaximum:
      "Potentially many",
    caution:
      "The correct configuration depends on AP mode and network design.",
  },
];

const stickyWorkflow = [
  {
    step: "01",
    title: "Start from a known authorized endpoint",
    text:
      "Do not learn sticky MAC addresses while unknown devices are connected.",
  },
  {
    step: "02",
    title: "Enable sticky learning",
    text:
      "The switch learns source MAC addresses according to the port-security maximum.",
  },
  {
    step: "03",
    title: "Generate normal authorized traffic",
    text:
      "Allow the legitimate endpoint to send frames so the switch can learn it.",
  },
  {
    step: "04",
    title: "Inspect the learned secure address",
    text:
      "Use show port-security address and the interface running configuration.",
  },
  {
    step: "05",
    title: "Confirm the MAC belongs to the required endpoint",
    text:
      "Compare with endpoint information or documented topology before saving.",
  },
  {
    step: "06",
    title: "Save only after validation",
    text:
      "If sticky MAC lines are now part of running-config, saving can make those learned addresses persistent.",
  },
];

const violationSymptoms = [
  {
    symptom:
      "Violation counter increases but the authorized workstation still works",
    likelyMode:
      "restrict",
    nextChecks:
      "Identify the violating source MAC, confirm the maximum, and inspect whether an unexpected device is connected.",
  },
  {
    symptom:
      "Unexpected device receives no traffic, but the port remains up and little evidence appears",
    likelyMode:
      "protect",
    nextChecks:
      "Check the secure MAC list and current learned addresses because protect can be less visible.",
  },
  {
    symptom:
      "Port becomes err-disabled after another device is connected",
    likelyMode:
      "shutdown",
    nextChecks:
      "Inspect port-security status and logs before attempting recovery.",
  },
  {
    symptom:
      "Legitimate phone-plus-PC port violates a maximum of 1",
    likelyMode:
      "Policy mismatch",
    nextChecks:
      "Confirm the authorized design and adjust the maximum only if the scenario really requires two legitimate MAC addresses.",
  },
  {
    symptom:
      "Sticky secure MAC belongs to an old workstation",
    likelyMode:
      "Stale secure address",
    nextChecks:
      "Verify the replacement device is authorized, document the old value, and update only the affected secure-MAC configuration.",
  },
  {
    symptom:
      "Many MAC addresses appear behind an uplink",
    likelyMode:
      "Wrong feature placement",
    nextChecks:
      "Confirm whether the interface is actually an infrastructure link rather than an endpoint access port.",
  },
];

const errDisableProcess = [
  {
    step: "01",
    title: "Preserve evidence",
    text:
      "Record show port-security interface output, secure MAC addresses, logs, and the connected-device information before resetting anything.",
  },
  {
    step: "02",
    title: "Identify the cause",
    text:
      "Confirm that port security caused the err-disabled state rather than another protection feature.",
  },
  {
    step: "03",
    title: "Correct the policy or endpoint problem",
    text:
      "Remove the unauthorized device, correct a stale MAC, or adjust the maximum only if the scenario supports the change.",
  },
  {
    step: "04",
    title: "Recover the interface deliberately",
    text:
      "On many IOS switches, shutdown followed by no shutdown can recover the port after the cause is corrected.",
  },
  {
    step: "05",
    title: "Verify secure state",
    text:
      "Recheck port-security status, learned MAC addresses, and violation counters.",
  },
  {
    step: "06",
    title: "Test the required endpoint",
    text:
      "Confirm the authorized device regains expected network access before saving.",
  },
];

const recoveryCommands = [
  {
    command: "show port-security interface GigabitEthernet0/5",
    purpose:
      "Confirm violation status, secure MAC count, and violation mode.",
  },
  {
    command: "show interfaces status err-disabled",
    purpose:
      "List err-disabled interfaces on supported IOS platforms.",
  },
  {
    command: "show logging",
    purpose:
      "Look for the reason the port was disabled.",
  },
  {
    command: "configure terminal",
    purpose:
      "Enter configuration mode only after the cause has been understood.",
  },
  {
    command: "interface GigabitEthernet0/5",
    purpose:
      "Select the exact affected port.",
  },
  {
    command: "shutdown",
    purpose:
      "Administratively reset the interface as part of deliberate recovery.",
  },
  {
    command: "no shutdown",
    purpose:
      "Re-enable the interface after the violation cause has been corrected.",
  },
];

const configStateNotes = [
  {
    title: "Dynamic MAC entries can age",
    text:
      "Ordinary switch MAC-table learning and port-security secure-address behavior are related but not identical. Inspect both when troubleshooting.",
  },
  {
    title: "Sticky addresses can enter running-config",
    text:
      "That means a learned device can become part of persistent policy if the configuration is later saved.",
  },
  {
    title: "Maximum and current counts are different",
    text:
      "A maximum of 2 does not mean two devices are currently connected; inspect the secure MAC count and address list.",
  },
  {
    title: "Violation count is historical evidence",
    text:
      "A nonzero counter shows that a violation occurred, even if the currently connected endpoint is now legitimate.",
  },
  {
    title: "A secure address does not prove authorization",
    text:
      "Sticky learning can learn the wrong device if the port was not controlled during enrollment.",
  },
  {
    title: "Saving preserves mistakes too",
    text:
      "Always review sticky or static secure addresses before copying running-config to startup-config.",
  },
];

const phoneAndVoiceNotes = [
  {
    title: "Phones can complicate MAC counts",
    text:
      "A phone with a workstation connected through it can legitimately produce more than one source MAC address on the switchport.",
  },
  {
    title: "Voice VLAN behavior is separate",
    text:
      "A voice VLAN may coexist with a data access VLAN on some Cisco access-port designs.",
  },
  {
    title: "Do not assume maximum 1 everywhere",
    text:
      "Use the endpoint role and scenario to set a reasonable secure-MAC maximum.",
  },
  {
    title: "Inspect before applying templates",
    text:
      "A port-security template suitable for a single desktop may break phones, access points, virtualization hosts, or other valid devices.",
  },
];

const reasoningCases = [
  {
    finding:
      "Gi0/5 has two MAC addresses but documentation says one workstation is connected",
    weak:
      "Immediately shut down the port.",
    better:
      "Confirm whether there is a phone, virtual machine bridge, downstream device, or stale learning before changing the port-security policy.",
  },
  {
    finding:
      "A port-security violation counter is 4",
    weak:
      "Erase the counter and move on.",
    better:
      "Treat the counter as evidence. Identify the secure MAC list, violation mode, connected device, and recent topology changes.",
  },
  {
    finding:
      "A port is err-disabled",
    weak:
      "Run shutdown/no shutdown immediately.",
    better:
      "First determine why it was disabled, correct the underlying cause, preserve evidence, then recover the port.",
  },
  {
    finding:
      "Sticky learning captured an unfamiliar MAC",
    weak:
      "Save the configuration because sticky means trusted.",
    better:
      "Sticky means learned, not automatically authorized. Verify the device identity before making the address persistent.",
  },
  {
    finding:
      "An uplink has dozens of MAC addresses",
    weak:
      "Set maximum 1 to harden it.",
    better:
      "An uplink may legitimately carry many devices and may not be an appropriate port-security target.",
  },
  {
    finding:
      "A single-PC port uses violation protect",
    weak:
      "There is no reason to inspect because protect keeps the port up.",
    better:
      "Protect can silently drop violating traffic. Inspect secure addresses and policy state if unexpected connectivity occurs.",
  },
];

const unsafeShortcuts = [
  {
    shortcut:
      "Enabling port security on trunks",
    risk:
      "Infrastructure links can legitimately carry many MAC addresses and may not support or suit standard access-port security behavior.",
  },
  {
    shortcut:
      "Setting maximum 1 on every port",
    risk:
      "Can break phones, virtualization hosts, access points, or other legitimate multi-MAC access designs.",
  },
  {
    shortcut:
      "Using sticky learning before verifying the connected device",
    risk:
      "Can enroll an unauthorized or accidental endpoint into persistent policy.",
  },
  {
    shortcut:
      "Clearing secure MAC state before documenting it",
    risk:
      "Removes valuable evidence about what the switch observed.",
  },
  {
    shortcut:
      "Recovering err-disabled ports before correcting the cause",
    risk:
      "The violation may immediately recur and the root cause remains unknown.",
  },
  {
    shortcut:
      "Saving immediately after sticky addresses appear",
    risk:
      "Can preserve the wrong MAC addresses across reloads.",
  },
];

const verificationChecklist = [
  {
    area: "Port role",
    check:
      "The interface is a confirmed endpoint-facing access port.",
  },
  {
    area: "Access VLAN",
    check:
      "The port remains in the intended VLAN after port-security changes.",
  },
  {
    area: "Maximum",
    check:
      "The configured secure-MAC limit matches the legitimate endpoint design.",
  },
  {
    area: "Secure MAC list",
    check:
      "Every static or sticky secure address belongs to an authorized device.",
  },
  {
    area: "Violation mode",
    check:
      "Protect, restrict, or shutdown behavior matches the intended defensive response.",
  },
  {
    area: "Violation count",
    check:
      "Unexpected increases are investigated rather than ignored.",
  },
  {
    area: "Port state",
    check:
      "The required interface remains operational and is not unintentionally err-disabled.",
  },
  {
    area: "End-to-end access",
    check:
      "The authorized endpoint still reaches its gateway and required services.",
  },
];

const packetTracerLab = [
  {
    step: "01",
    task:
      "Build a fictional switch with one Staff workstation on Gi0/5 in VLAN 10 and verify basic connectivity before enabling port security.",
  },
  {
    step: "02",
    task:
      "Inspect the port with show interfaces switchport, show mac address-table interface, and show port-security interface where supported.",
  },
  {
    step: "03",
    task:
      "Enable port security with maximum 1 and sticky learning on the confirmed Staff access port.",
  },
  {
    step: "04",
    task:
      "Generate normal workstation traffic and verify the secure MAC address learned by the switch.",
  },
  {
    step: "05",
    task:
      "Connect a second fictional endpoint or otherwise simulate a second source MAC and observe the configured violation behavior.",
  },
  {
    step: "06",
    task:
      "Record the violation count, port state, and secure MAC list before changing anything.",
  },
  {
    step: "07",
    task:
      "Restore the authorized workstation-only state and, if necessary, recover the port after correcting the cause.",
  },
  {
    step: "08",
    task:
      "Verify the legitimate workstation can reach its gateway and required service, then review sticky state before saving.",
  },
];

const practiceScenarios = [
  {
    prompt:
      "A port is configured maximum 1, but the design shows an IP phone and workstation.",
    response:
      "Verify the two-device design and adjust the maximum only if both MAC addresses are legitimately required.",
  },
  {
    prompt:
      "show port-security interface reports Secure-shutdown.",
    response:
      "Preserve the evidence, identify the violating MAC and cause, correct the issue, then deliberately recover the interface.",
  },
  {
    prompt:
      "Sticky learning shows a MAC address that does not match the authorized workstation.",
    response:
      "Do not save. Verify what device was connected and remove or replace the incorrect sticky secure address according to the scenario.",
  },
  {
    prompt:
      "A trunk uplink has many MAC addresses and no port security configured.",
    response:
      "That can be normal. Do not apply single-host access-port security to an infrastructure trunk.",
  },
  {
    prompt:
      "Violation restrict is configured and the legitimate PC works, but the counter keeps increasing.",
    response:
      "Investigate whether another device or source MAC is appearing on the port rather than ignoring the counter.",
  },
  {
    prompt:
      "A teammate wants to clear all secure addresses to make the problem disappear.",
    response:
      "Document the current addresses and violation state first. Remove only confirmed stale or unauthorized entries.",
  },
];

const checklist = [
  "I understand what Cisco port security controls.",
  "I know that port security is primarily for confirmed endpoint-facing access ports.",
  "I can inspect secure MAC addresses and violation state before changing policy.",
  "I understand the difference between static, dynamic, and sticky secure MAC addresses.",
  "I can explain protect, restrict, and shutdown violation behavior.",
  "I know that maximum 1 is not appropriate for every access port.",
  "I do not treat sticky learning as automatic proof of authorization.",
  "I preserve evidence before recovering an err-disabled port.",
  "I understand that a trunk or uplink may legitimately learn many MAC addresses.",
  "I verify access VLAN and endpoint connectivity after port-security changes.",
  "I investigate violation counters instead of simply clearing them.",
  "I review learned sticky addresses before saving the configuration.",
];

const reflection = [
  "Why should port security usually be applied to endpoint-facing access ports instead of trunks?",
  "What is the practical difference between restrict and shutdown violation modes?",
  "Why can sticky learning accidentally make an unauthorized device persistent?",
  "Why might a legitimate access port need a maximum greater than one?",
  "What evidence should you collect before recovering an err-disabled port?",
  "Why does a nonzero violation counter matter even if the authorized workstation still works?",
];

export default function SwitchPortSecurityPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/cisco-networking"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Back to Cisco & Networking
            </Link>
            <Link
              href="/cyberpatriot"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              CyberPatriot Hub
            </Link>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/cisco-networking/inter-vlan-routing"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/cisco-networking/router-interfaces-static-routing"
              className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/15"
            >
              Next Lesson &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Cisco & Networking · Lesson 10
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Switch Port Security
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Learn how Cisco port security limits source MAC addresses on
                access ports, how sticky learning works, how violation modes
                differ, and how to recover safely when a protective response is triggered.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Port security is useful only when it matches the real endpoint
                design. Strong competition work means securing the port without
                disconnecting phones, workstations, servers, or other required devices.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Core concepts</span>
                  <span className="font-bold text-white">6</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Violation modes</span>
                  <span className="font-bold text-white">3</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Inspection commands</span>
                  <span className="font-bold text-white">8</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Main goal</span>
                  <span className="font-bold text-white">Control endpoint MAC access</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Learning objectives
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Secure access ports without guessing
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {objectives.map((objective, index) => (
              <div
                key={objective}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
              >
                <span className="font-black text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-slate-300">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.05fr]">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Core idea
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Secure the expected access-port behavior
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Port security works best when you already know what type of device
              belongs on the port, how many legitimate MAC addresses it may use,
              and what response should occur if something unexpected appears.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Competition warning
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Maximum 1 is not a universal hardening rule
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Phones, virtualization hosts, access points, and other legitimate
              designs can produce multiple source MAC addresses. Inspect first.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Core concepts
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Six ideas behind switch port security
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {coreConcepts.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Why it matters
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Port security narrows who can use an access port
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {whyUsePortSecurity.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Before configuration
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Confirm the port role and endpoint design first
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {prerequisites.map((item) => (
              <div
                key={item.check}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.check}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.why}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Cisco inspection
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Collect evidence before changing the port
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {ciscoInspection.map((item) => (
              <div
                key={item.command}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <code className="block overflow-x-auto text-sm font-bold text-cyan-200">
                  {item.command}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.purpose}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-5">
            <p className="text-sm font-black text-yellow-200">
              Packet Tracer behavior can differ
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              Some simulated Cisco switch models support only part of the full
              port-security command set. Use the available inspection output and
              focus on the policy concepts, secure MAC state, and violation behavior.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Secure MAC types
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Static, dynamic, and sticky do different jobs
          </h2>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {macTypes.map((item) => (
              <div
                key={item.type}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.type}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {item.behavior}
                </p>

                <div className="mt-4 rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                    Strength
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.strength}
                  </p>
                </div>

                <div className="mt-3 rounded-xl border border-yellow-400/15 bg-yellow-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                    Caution
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.caution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Violation modes
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Decide what the switch should do when policy is violated
          </h2>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {violationModes.map((item) => (
              <div
                key={item.mode}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <code className="text-xl font-black text-cyan-200">
                  {item.mode}
                </code>

                <div className="mt-5 grid gap-3">
                  <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-300">
                      Forwarding
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.forwarding}
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-300">
                      Evidence
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.logging}
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-300">
                      Port state
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.portState}
                    </p>
                  </div>
                  <div className="rounded-xl border border-yellow-400/15 bg-yellow-400/5 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                      Competition note
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.competitionUse}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Basic configuration
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Inspect, constrain, and verify one confirmed access port
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {basicConfig.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <span className="text-sm font-black text-cyan-300">
                  {item.step}
                </span>
                <h3 className="mt-3 text-lg font-black text-white">
                  {item.title}
                </h3>

                <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950 p-4">
                  <div className="grid gap-2">
                    {item.commands.map((command) => (
                      <code
                        key={command}
                        className="block overflow-x-auto text-sm text-cyan-200"
                      >
                        {command}
                      </code>
                    ))}
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {item.reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Controlled examples
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Match the policy to the actual access-port design
          </h2>

          <div className="mt-8 grid gap-5">
            {staticExamples.map((item) => (
              <div
                key={item.goal}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <h3 className="text-lg font-black text-white">{item.goal}</h3>

                <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_0.9fr]">
                  <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-300">
                      Commands
                    </p>
                    <div className="mt-3 grid gap-2">
                      {item.commands.map((command) => (
                        <code
                          key={command}
                          className="block overflow-x-auto text-sm text-cyan-200"
                        >
                          {command}
                        </code>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                      Verify
                    </p>
                    <code className="mt-2 block overflow-x-auto text-sm text-slate-200">
                      {item.verify}
                    </code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Maximum MAC count
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Set the limit from the endpoint role, not from habit
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {maximumReasoning.map((item) => (
              <div
                key={item.design}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.design}</h3>
                <p className="mt-3 text-sm font-bold text-cyan-300">
                  Likely maximum: {item.likelyMaximum}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.caution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Sticky learning
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Learn only from a known authorized endpoint
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {stickyWorkflow.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <span className="text-sm font-black text-cyan-300">
                  {item.step}
                </span>
                <h3 className="mt-3 text-lg font-black text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Violation symptoms
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Use the symptom to infer the policy state
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {violationSymptoms.map((item) => (
              <div
                key={item.symptom}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.symptom}
                </h3>
                <p className="mt-3 text-sm font-bold text-cyan-300">
                  Likely: {item.likelyMode}
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.nextChecks}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Err-disabled recovery
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Fix the cause before re-enabling the port
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {errDisableProcess.map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <span className="text-sm font-black text-cyan-300">
                  {item.step}
                </span>
                <h3 className="mt-3 text-lg font-black text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {recoveryCommands.map((item) => (
              <div
                key={item.command}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <code className="block overflow-x-auto text-sm font-bold text-cyan-200">
                  {item.command}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.purpose}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Configuration-state reasoning
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Port-security state is evidence
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {configStateNotes.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Phone and multi-device awareness
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            One physical port can legitimately represent multiple devices
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {phoneAndVoiceNotes.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Evidence-based reasoning
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Secure the port without misclassifying normal behavior
          </h2>

          <div className="mt-8 grid gap-5">
            {reasoningCases.map((item) => (
              <div
                key={item.finding}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <h3 className="text-lg font-black text-white">{item.finding}</h3>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-red-400/15 bg-red-400/5 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">
                      Weak response
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.weak}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
                      Better reasoning
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {item.better}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            Unsafe shortcuts
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Port-security mistakes that can disconnect required systems
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {unsafeShortcuts.map((item) => (
              <div
                key={item.shortcut}
                className="rounded-2xl border border-red-400/15 bg-slate-950/50 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.shortcut}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.risk}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Practice scenarios
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Choose the safest next action
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {practiceScenarios.map((item) => (
              <div
                key={item.prompt}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="font-black text-white">{item.prompt}</h3>
                <div className="mt-4 rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                  <p className="text-sm leading-7 text-slate-300">
                    {item.response}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Verification
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Prove the policy protects the port without blocking the authorized device
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {verificationChecklist.map((item) => (
              <div
                key={item.area}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.area}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.check}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Defensive lab
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Build, trigger, and recover a fictional port-security policy
          </h2>

          <div className="mt-8 grid gap-3">
            {packetTracerLab.map((item) => (
              <div
                key={item.step}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <span className="font-black text-cyan-300">{item.step}</span>
                <p className="text-sm leading-7 text-slate-300">{item.task}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Lesson checklist
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Before moving on
            </h2>

            <div className="mt-6 grid gap-3">
              {checklist.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <span className="font-black text-cyan-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Reflection
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Check your reasoning
            </h2>

            <div className="mt-6 grid gap-3">
              {reflection.map((question, index) => (
                <div
                  key={question}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                    Question {index + 1}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {question}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
              <p className="text-sm font-black text-cyan-200">
                Carry this forward
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Port security is strongest when the policy reflects the real
                endpoint role. Inspect the port, identify the legitimate MAC
                behavior, choose a deliberate violation response, and verify the
                required device still works before saving.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-8">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/cisco-networking"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Back to Cisco & Networking
            </Link>
            <Link
              href="/cyberpatriot"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              CyberPatriot Hub
            </Link>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/cisco-networking/inter-vlan-routing"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/cisco-networking/router-interfaces-static-routing"
              className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/15"
            >
              Next Lesson &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
