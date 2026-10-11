import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Navigate Cisco IOS command modes confidently without changing configuration accidentally.",
  "Distinguish user EXEC, privileged EXEC, global configuration, and subconfiguration modes.",
  "Use built-in help, command completion, history, and filtering to work efficiently.",
  "Collect a baseline with safe show commands before entering configuration mode.",
  "Understand the difference between running-config and startup-config.",
  "Make, verify, save, and if necessary reverse small configuration changes in a controlled way.",
];

const cliModes = [
  {
    mode: "User EXEC",
    prompt: "Router>",
    purpose:
      "Basic monitoring and limited commands. This is commonly the first CLI mode after console or remote login.",
    enter:
      "Login to the device.",
    leave:
      "exit or logout",
    caution:
      "You usually cannot make normal configuration changes from this mode.",
  },
  {
    mode: "Privileged EXEC",
    prompt: "Router#",
    purpose:
      "Broader monitoring, debugging, file operations, saving configuration, and access to configuration mode.",
    enter:
      "enable",
    leave:
      "disable or exit",
    caution:
      "This mode has significantly more power. Treat operational commands such as reload and clear carefully.",
  },
  {
    mode: "Global configuration",
    prompt: "Router(config)#",
    purpose:
      "Change device-wide settings and enter specific subconfiguration modes.",
    enter:
      "configure terminal",
    leave:
      "end, Ctrl+Z, or exit",
    caution:
      "Commands entered here can immediately change the running configuration.",
  },
  {
    mode: "Interface configuration",
    prompt: "Router(config-if)#",
    purpose:
      "Configure one physical or logical interface.",
    enter:
      "interface <interface-id>",
    leave:
      "exit or end",
    caution:
      "Confirm the exact interface before applying addressing, shutdown, switchport, or description commands.",
  },
  {
    mode: "Line configuration",
    prompt: "Router(config-line)#",
    purpose:
      "Configure console, VTY, or auxiliary line behavior.",
    enter:
      "line console 0 or line vty <range>",
    leave:
      "exit or end",
    caution:
      "A mistake here can lock out authorized administrators.",
  },
  {
    mode: "Router configuration",
    prompt: "Router(config-router)#",
    purpose:
      "Configure supported dynamic routing processes.",
    enter:
      "router <protocol>",
    leave:
      "exit or end",
    caution:
      "Routing changes can affect many networks. Verify the scenario and route table first.",
  },
];

const navigationCommands = [
  {
    command: "enable",
    meaning:
      "Move from user EXEC to privileged EXEC mode.",
  },
  {
    command: "configure terminal",
    meaning:
      "Enter global configuration mode from privileged EXEC.",
  },
  {
    command: "exit",
    meaning:
      "Move back one configuration level or leave the current session depending on context.",
  },
  {
    command: "end",
    meaning:
      "Return directly from configuration mode to privileged EXEC.",
  },
  {
    command: "Ctrl+Z",
    meaning:
      "Keyboard shortcut that also returns from configuration mode to privileged EXEC on many IOS platforms.",
  },
  {
    command: "disable",
    meaning:
      "Move from privileged EXEC back to user EXEC.",
  },
];

const helpTools = [
  {
    tool: "?",
    use:
      "Show commands or keywords that are valid at the current point in the command.",
    example:
      "show ?",
  },
  {
    tool: "Tab",
    use:
      "Complete an unambiguous command or keyword.",
    example:
      "show run<Tab>",
  },
  {
    tool: "Abbreviation",
    use:
      "IOS accepts shortened commands when the abbreviation is unique.",
    example:
      "show ip int br",
  },
  {
    tool: "Up Arrow",
    use:
      "Recall previous commands from command history.",
    example:
      "Useful when repeating a show command after a change.",
  },
  {
    tool: "Ctrl+A",
    use:
      "Move the cursor to the beginning of the current command line on many terminal implementations.",
    example:
      "Helpful when editing a long command.",
  },
  {
    tool: "Ctrl+E",
    use:
      "Move the cursor to the end of the current command line on many terminal implementations.",
    example:
      "Useful for quick edits without retyping.",
  },
];

const baselineCommands = [
  {
    command: "show running-config",
    purpose:
      "Display the active running configuration currently controlling the device.",
  },
  {
    command: "show startup-config",
    purpose:
      "Display the saved configuration that will normally load after a reload.",
  },
  {
    command: "show ip interface brief",
    purpose:
      "Summarize interface addressing and up/down state.",
  },
  {
    command: "show interfaces",
    purpose:
      "Review detailed interface state, counters, errors, speed, and duplex information.",
  },
  {
    command: "show version",
    purpose:
      "Review IOS version, platform information, uptime, configuration register details, and other system information where supported.",
  },
  {
    command: "show inventory",
    purpose:
      "Review hardware inventory on supported devices.",
  },
  {
    command: "show users",
    purpose:
      "Review current terminal or remote users where supported.",
  },
  {
    command: "show clock",
    purpose:
      "Check device time before interpreting logs or documenting changes.",
  },
  {
    command: "show logging",
    purpose:
      "Review logging state and buffered log messages where supported.",
  },
  {
    command: "show ip route",
    purpose:
      "Review the IPv4 routing table.",
  },
  {
    command: "show vlan brief",
    purpose:
      "Review VLANs and access-port membership on supported switches.",
  },
  {
    command: "show interfaces trunk",
    purpose:
      "Review active trunk state and VLAN carriage on supported switches.",
  },
];

const filteringExamples = [
  {
    command: "show running-config | include username",
    purpose:
      "Display lines matching the text username.",
  },
  {
    command: "show running-config | include ip address",
    purpose:
      "Find configuration lines containing IP address statements.",
  },
  {
    command: "show running-config | section interface",
    purpose:
      "Display interface-related sections on IOS versions that support section filtering.",
  },
  {
    command: "show running-config | begin line vty",
    purpose:
      "Begin displaying output at the first matching line.",
  },
  {
    command: "show interfaces | include line protocol|error",
    purpose:
      "Search large interface output for selected terms where the platform supports the expression.",
  },
  {
    command: "show ip route | include 192.168.",
    purpose:
      "Filter route-table output for matching networks.",
  },
];

const runStartConcepts = [
  {
    title: "Running configuration",
    source:
      "Active configuration in device memory",
    behavior:
      "Changes made in configuration mode usually take effect here immediately.",
    survival:
      "Normally lost after reload unless saved.",
  },
  {
    title: "Startup configuration",
    source:
      "Saved configuration in nonvolatile storage",
    behavior:
      "Normally loaded when the device boots.",
    survival:
      "Persists across reloads until changed or erased.",
  },
];

const saveCommands = [
  {
    command: "copy running-config startup-config",
    meaning:
      "Copy the currently active running configuration into startup configuration.",
    caution:
      "Save only after verifying the desired state. Saving a bad running configuration makes the bad state persistent.",
  },
  {
    command: "write memory",
    meaning:
      "Common legacy shorthand for saving the running configuration on many IOS devices.",
    caution:
      "Prefer the explicit copy command when teaching because it clearly states source and destination.",
  },
  {
    command: "show startup-config",
    meaning:
      "Review what is currently stored for the next boot.",
    caution:
      "Use this to confirm whether the saved state matches expectations.",
  },
];

const configPattern = [
  {
    step: "01",
    title: "Inspect",
    text:
      "Collect the current state with show commands before entering configuration mode.",
  },
  {
    step: "02",
    title: "Enter the narrowest mode",
    text:
      "Move only into the specific interface, line, VLAN, or feature context required for the change.",
  },
  {
    step: "03",
    title: "Change one thing",
    text:
      "Apply the smallest justified configuration change possible.",
  },
  {
    step: "04",
    title: "Exit and verify",
    text:
      "Return to privileged EXEC and use show commands plus connectivity tests to confirm the result.",
  },
  {
    step: "05",
    title: "Document",
    text:
      "Record the old value, new value, reason, device, and verification evidence.",
  },
  {
    step: "06",
    title: "Save deliberately",
    text:
      "Copy running-config to startup-config only after the configuration is verified.",
  },
];

const safeExamples = [
  {
    goal: "Set a descriptive interface label",
    commands: [
      "configure terminal",
      "interface GigabitEthernet0/1",
      "description Staff uplink",
      "end",
    ],
    verify:
      "show running-config interface GigabitEthernet0/1",
    rollback:
      "no description",
  },
  {
    goal: "Configure a router interface IPv4 address",
    commands: [
      "configure terminal",
      "interface GigabitEthernet0/0",
      "ip address 192.168.10.1 255.255.255.0",
      "no shutdown",
      "end",
    ],
    verify:
      "show ip interface brief",
    rollback:
      "Restore the documented previous address or use no ip address only if the scenario confirms the interface should have none.",
  },
  {
    goal: "Create a local hostname change",
    commands: [
      "configure terminal",
      "hostname Branch-R1",
      "end",
    ],
    verify:
      "show running-config | include hostname",
    rollback:
      "Restore the documented previous hostname.",
  },
];

const noCommandPatterns = [
  {
    pattern: "no <command>",
    meaning:
      "Cisco IOS commonly uses the no form to remove or disable a configuration statement.",
    example:
      "no description",
    warning:
      "Do not assume every no command simply restores a safe default. Confirm the intended state first.",
  },
  {
    pattern: "default <command>",
    meaning:
      "On supported platforms, the default form may return a setting to its default behavior.",
    example:
      "default interface GigabitEthernet0/1",
    warning:
      "This can remove many interface settings at once and is high impact. Avoid using it casually in competition.",
  },
];

const operationalVsConfig = [
  {
    category: "Read-only inspection",
    commands:
      "show, ping, traceroute",
    impact:
      "Primarily collects evidence and tests reachability.",
  },
  {
    category: "Configuration entry",
    commands:
      "configure terminal, interface, line vty, vlan",
    impact:
      "Moves into a context where configuration can be modified.",
  },
  {
    category: "Operational actions",
    commands:
      "clear, reload, debug",
    impact:
      "Can affect runtime behavior even outside configuration mode.",
  },
  {
    category: "Persistence",
    commands:
      "copy running-config startup-config",
    impact:
      "Makes the active state survive reboot.",
  },
];

const terminalSafety = [
  {
    topic: "Console access",
    detail:
      "Direct console access is valuable because it can remain available even when IP-based management is misconfigured.",
  },
  {
    topic: "SSH access",
    detail:
      "SSH provides encrypted remote CLI access when correctly configured and restricted.",
  },
  {
    topic: "Telnet",
    detail:
      "Telnet is unencrypted and should generally not be preferred for management when secure alternatives are available and supported.",
  },
  {
    topic: "VTY lines",
    detail:
      "Virtual terminal lines control remote CLI access. Changes can affect every remote administrator.",
  },
  {
    topic: "Timeouts",
    detail:
      "Session timeout settings can reduce exposure from unattended administrative sessions.",
  },
  {
    topic: "Source restrictions",
    detail:
      "Management access can be restricted to authorized networks where the scenario and platform support it.",
  },
];

const showReasoning = [
  {
    symptom: "Interface address looks wrong",
    commands:
      "show ip interface brief; show running-config interface <interface>",
    reason:
      "Compare the summary with the actual configured statement before editing.",
  },
  {
    symptom: "Remote management stopped working",
    commands:
      "show running-config | section line vty; show users; show ip interface brief",
    reason:
      "Check management-line configuration and Layer 3 reachability before changing passwords or transport settings.",
  },
  {
    symptom: "Changes disappeared after reload",
    commands:
      "show running-config; show startup-config",
    reason:
      "Compare active and saved states to determine whether the configuration was never saved.",
  },
  {
    symptom: "Device prompt changed unexpectedly",
    commands:
      "show running-config | include hostname",
    reason:
      "Confirm whether the hostname was intentionally modified.",
  },
  {
    symptom: "A command is rejected",
    commands:
      "?; show version",
    reason:
      "You may be in the wrong mode, using unsupported syntax, or working on a different IOS feature set.",
  },
  {
    symptom: "Output is too large to read efficiently",
    commands:
      "Use include, section, or begin filters where supported",
    reason:
      "Narrow the evidence rather than making decisions from partial scrolling.",
  },
];

const configRegisterNotes = [
  {
    title: "Know it exists",
    text:
      "The configuration register can influence boot behavior on some Cisco platforms.",
  },
  {
    title: "Do not change it casually",
    text:
      "Changing boot behavior can prevent normal startup or alter how configuration is loaded.",
  },
  {
    title: "Inspect first",
    text:
      "show version may display configuration-register information on supported devices.",
  },
  {
    title: "Treat recovery procedures separately",
    text:
      "Password-recovery and boot-recovery workflows should only be used when the authorized scenario specifically requires them.",
  },
];

const commandHistoryNotes = [
  {
    title: "History helps verification",
    text:
      "After a change, recall the exact show command you used before and compare the result.",
  },
  {
    title: "History is not documentation",
    text:
      "Terminal history can disappear. Record important changes separately.",
  },
  {
    title: "Be careful with recalled commands",
    text:
      "Pressing Enter on a recalled configuration or operational command executes it again.",
  },
  {
    title: "Read the prompt",
    text:
      "The same text can behave differently depending on whether you are at Router>, Router#, or Router(config)#.",
  },
];

const reasoningCases = [
  {
    finding: "The prompt shows Router>",
    weak:
      "Type configure terminal immediately.",
    better:
      "Recognize that you are in user EXEC. Move to privileged EXEC with enable only if authorized and needed.",
  },
  {
    finding: "The prompt shows Router(config-if)#",
    weak:
      "Assume all commands are device-wide.",
    better:
      "You are inside one interface context. Read the prompt before entering commands so you know their scope.",
  },
  {
    finding: "A configuration change works until reboot",
    weak:
      "The router is unreliable.",
    better:
      "Compare running-config and startup-config. The running state may never have been saved.",
  },
  {
    finding: "A teammate saved immediately after a change",
    weak:
      "Saving is always good because it protects progress.",
    better:
      "Saving preserves both good and bad changes. Verify the network first, then save the intended state.",
  },
  {
    finding: "show interfaces produces too much output",
    weak:
      "Skip the command.",
    better:
      "Use a more targeted show command or supported output filters to narrow the evidence.",
  },
  {
    finding: "A remembered command returns Invalid input",
    weak:
      "The feature must be broken.",
    better:
      "Check your current mode, use ?, verify interface naming, and confirm platform/IOS support before assuming a failure.",
  },
];

const highRiskActions = [
  {
    action: "reload",
    risk:
      "Reboots the device, causes downtime, and may load a startup configuration different from the current running state.",
  },
  {
    action: "erase startup-config / write erase",
    risk:
      "Removes saved configuration and can leave the device unconfigured after reboot.",
  },
  {
    action: "default interface",
    risk:
      "Can remove multiple interface settings at once, including required addressing, VLAN, trunk, or security configuration.",
  },
  {
    action: "shutdown",
    risk:
      "Administratively disables an interface and can immediately break required connectivity.",
  },
  {
    action: "clear <feature>",
    risk:
      "Clear commands can reset counters, tables, sessions, or protocol state depending on the feature.",
  },
  {
    action: "debug",
    risk:
      "Debugging can produce heavy output and resource load. Use only when justified and understand how to stop it.",
  },
];

const verificationChecklist = [
  {
    area: "Prompt",
    check:
      "You know which IOS mode you are currently in before entering a command.",
  },
  {
    area: "Scope",
    check:
      "The command affects only the intended device, interface, line, or feature.",
  },
  {
    area: "Running state",
    check:
      "show commands confirm the active configuration matches the intended change.",
  },
  {
    area: "Connectivity",
    check:
      "Required local, routed, and management traffic still works after the change.",
  },
  {
    area: "Saved state",
    check:
      "startup-config is updated only after the running configuration is confirmed correct.",
  },
  {
    area: "Documentation",
    check:
      "The previous value, new value, and verification result are recorded for important changes.",
  },
];

const fictionalLab = [
  {
    step: "01",
    task:
      "Open a fictional Packet Tracer router and identify whether the prompt begins in user EXEC or privileged EXEC mode.",
  },
  {
    step: "02",
    task:
      "Use ? and command completion to explore available show commands without changing configuration.",
  },
  {
    step: "03",
    task:
      "Collect a baseline with show running-config, show startup-config, show ip interface brief, show version, and show ip route.",
  },
  {
    step: "04",
    task:
      "Compare running-config and startup-config and record whether they appear consistent.",
  },
  {
    step: "05",
    task:
      "Enter global configuration mode, select one fictional interface, and add only a harmless descriptive label.",
  },
  {
    step: "06",
    task:
      "Return to privileged EXEC and verify the description with a targeted show command.",
  },
  {
    step: "07",
    task:
      "Remove the description with the appropriate no command and verify the rollback.",
  },
  {
    step: "08",
    task:
      "Repeat the description change, verify it, then save the running configuration and confirm the startup configuration contains the intended value.",
  },
];

const practiceScenarios = [
  {
    prompt:
      "You are at Switch(config)# and want to inspect VLANs without leaving configuration mode.",
    response:
      "On IOS versions that support it, use do show vlan brief. Otherwise exit to privileged EXEC and run show vlan brief.",
  },
  {
    prompt:
      "You typed interface g0/1 but the device rejects it.",
    response:
      "Use show ip interface brief or show interfaces to confirm the actual interface naming, then use ? from configuration mode.",
  },
  {
    prompt:
      "A working interface configuration is active but not present after reboot.",
    response:
      "Compare running-config and startup-config. If the running state is correct and authorized, save it deliberately.",
  },
  {
    prompt:
      "You cannot remember the full command after show ip.",
    response:
      "Use show ip ? to display valid next keywords rather than guessing.",
  },
  {
    prompt:
      "A teammate suggests write erase because the configuration looks messy.",
    response:
      "Do not erase the saved configuration. Inspect and correct only confirmed issues.",
  },
  {
    prompt:
      "You changed a VTY setting and lost SSH access.",
    response:
      "Use console access if available, review line vty and SSH-related configuration, restore required authorized management, then verify before saving.",
  },
];

const checklist = [
  "I recognize user EXEC, privileged EXEC, global configuration, and common subconfiguration prompts.",
  "I can move between IOS modes without guessing.",
  "I use ? and command completion when syntax or platform support is uncertain.",
  "I collect a baseline before configuration changes.",
  "I understand the difference between running-config and startup-config.",
  "I know that configuration changes often affect running-config immediately.",
  "I verify before saving the configuration.",
  "I understand that no <command> can remove a configuration statement.",
  "I avoid high-impact commands such as reload, erase, clear, and default interface without clear justification.",
  "I use targeted show commands and output filtering to reduce noise.",
  "I document meaningful changes and rollback information.",
  "I verify both device state and real network connectivity after configuration changes.",
];

const reflection = [
  "Why is the IOS prompt itself useful evidence?",
  "What is the practical difference between running-config and startup-config?",
  "Why can saving too early make a mistake harder to recover from?",
  "What should you do when a familiar command is rejected by the device?",
  "Why is default interface more dangerous than removing one specific configuration line?",
  "What evidence should you collect before and after changing a router interface?",
];

export default function CiscoIosCliSafeNavigationPage() {
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
              href="/cyberpatriot/cisco-networking/subnetting-for-competition"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/cisco-networking/switching-mac-tables-ethernet"
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
                Cisco & Networking · Lesson 05
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Cisco IOS CLI & Safe Navigation
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Learn how Cisco IOS command modes, prompts, help, show commands,
                configuration contexts, running configuration, startup
                configuration, and verification fit together into safe CLI work.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                The goal is not to memorize hundreds of commands. It is to know
                where you are, what a command will affect, how to inspect first,
                and how to prove a change worked before you save it.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>CLI modes</span>
                  <span className="font-bold text-white">6</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Baseline commands</span>
                  <span className="font-bold text-white">12</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Safe change stages</span>
                  <span className="font-bold text-white">6</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Main goal</span>
                  <span className="font-bold text-white">Know scope before action</span>
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
            Work in IOS without losing track of scope
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
              The prompt tells you your scope
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Router&gt;, Router#, Router(config)#, and Router(config-if)# are not
              cosmetic differences. Each prompt tells you which command set is
              available and how broad your next action may be.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Safety rule
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Show first, configure second
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Collect a baseline before entering configuration mode. Without the
              original state, you lose evidence and make rollback harder.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Cisco IOS modes
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Read the prompt before typing
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {cliModes.map((item) => (
              <div
                key={item.mode}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-lg font-black text-white">{item.mode}</h3>
                  <code className="text-sm font-black text-cyan-200">
                    {item.prompt}
                  </code>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {item.purpose}
                </p>
                <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-300">
                    Enter
                  </p>
                  <code className="mt-2 block text-sm text-cyan-200">
                    {item.enter}
                  </code>
                  <p className="mt-3 text-xs font-black uppercase tracking-[0.15em] text-cyan-300">
                    Leave
                  </p>
                  <code className="mt-2 block text-sm text-cyan-200">
                    {item.leave}
                  </code>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-400">
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
            Mode navigation
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Move deliberately between command contexts
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {navigationCommands.map((item) => (
              <div
                key={item.command}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <code className="block text-base font-black text-cyan-200">
                  {item.command}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.meaning}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Built-in help
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Let IOS tell you valid syntax
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {helpTools.map((item) => (
              <div
                key={item.tool}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.tool}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.use}
                </p>
                <code className="mt-4 block rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-cyan-200">
                  {item.example}
                </code>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
            <p className="text-sm font-black text-cyan-200">
              Prefer discovery over guessing
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              Interface names, feature syntax, and available commands vary by
              platform and IOS version. Use the prompt and ? to discover the
              device you actually have.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Baseline
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Twelve show commands worth knowing
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {baselineCommands.map((item) => (
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
            Output filtering
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Narrow large outputs instead of scrolling blindly
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {filteringExamples.map((item) => (
              <div
                key={item.command}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <code className="block overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-cyan-200">
                  {item.command}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.purpose}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm leading-7 text-slate-400">
            Filtering syntax and regular-expression behavior can vary by IOS
            platform. If a filter is unsupported, use a narrower show command or
            inspect the complete output rather than assuming the data is absent.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {runStartConcepts.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7"
            >
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
                Configuration state
              </p>
              <h2 className="mt-3 text-2xl font-black text-white">
                {item.title}
              </h2>
              <div className="mt-5 grid gap-3">
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-300">
                    Source
                  </p>
                  <p className="mt-2 text-sm text-slate-300">{item.source}</p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-300">
                    Behavior
                  </p>
                  <p className="mt-2 text-sm text-slate-300">{item.behavior}</p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-300">
                    Persistence
                  </p>
                  <p className="mt-2 text-sm text-slate-300">{item.survival}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Saving configuration
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Save only after verification
          </h2>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {saveCommands.map((item) => (
              <div
                key={item.command}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <code className="block overflow-x-auto text-sm font-black text-cyan-200">
                  {item.command}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.meaning}
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
            Safe change pattern
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Six stages for controlled CLI changes
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {configPattern.map((item) => (
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
            Controlled examples
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Small changes with explicit verification
          </h2>

          <div className="mt-8 grid gap-5">
            {safeExamples.map((item) => (
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

                  <div className="grid gap-3">
                    <div className="rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                        Verify
                      </p>
                      <code className="mt-2 block overflow-x-auto text-sm text-slate-200">
                        {item.verify}
                      </code>
                    </div>
                    <div className="rounded-xl border border-yellow-400/15 bg-yellow-400/5 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.15em] text-yellow-200">
                        Rollback concept
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {item.rollback}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-5">
            <p className="text-sm font-black text-yellow-200">
              Do not copy commands blindly
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              Interface identifiers, existing addresses, and intended settings
              differ between topologies. Treat every command block as a pattern
              to understand, then adapt it to the authorized scenario.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {noCommandPatterns.map((item) => (
            <div
              key={item.pattern}
              className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7"
            >
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
                Configuration removal
              </p>
              <code className="mt-3 block text-xl font-black text-cyan-200">
                {item.pattern}
              </code>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {item.meaning}
              </p>
              <code className="mt-4 block rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-cyan-200">
                {item.example}
              </code>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                {item.warning}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Command impact
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Configuration mode is not the only place powerful actions exist
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {operationalVsConfig.map((item) => (
              <div
                key={item.category}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.category}
                </h3>
                <code className="mt-3 block text-sm leading-6 text-cyan-200">
                  {item.commands}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.impact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Management access
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Keep authorized administration available
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {terminalSafety.map((item) => (
              <div
                key={item.topic}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.topic}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Troubleshooting with show commands
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Match evidence to the symptom
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {showReasoning.map((item) => (
              <div
                key={item.symptom}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.symptom}
                </h3>
                <code className="mt-3 block text-sm leading-6 text-cyan-200">
                  {item.commands}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Boot awareness
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Configuration register
            </h2>

            <div className="mt-6 grid gap-3">
              {configRegisterNotes.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              CLI efficiency
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Command history with caution
            </h2>

            <div className="mt-6 grid gap-3">
              {commandHistoryNotes.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Evidence-based reasoning
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Read the mode and state before deciding
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
            High-impact actions
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Commands that deserve extra caution
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {highRiskActions.map((item) => (
              <div
                key={item.action}
                className="rounded-2xl border border-red-400/15 bg-slate-950/50 p-5"
              >
                <code className="text-lg font-black text-red-200">
                  {item.action}
                </code>
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
            Choose the safest next CLI action
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
            Prove the device is correct before you save
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
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
            Navigate IOS, make one safe change, and verify persistence
          </h2>

          <div className="mt-8 grid gap-3">
            {fictionalLab.map((item) => (
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
                Read the prompt, inspect the current state, make the smallest
                justified change, verify the network, then save deliberately.
                That sequence protects both evidence and required connectivity.
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
              href="/cyberpatriot/cisco-networking/subnetting-for-competition"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/cisco-networking/switching-mac-tables-ethernet"
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
