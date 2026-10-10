import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain how Linux interfaces, addresses, routes, DNS, and network services work together.",
  "Inspect current interface state, addressing, routes, DNS configuration, and listening services before changing anything.",
  "Distinguish host configuration from upstream network behavior so local fixes are not applied to problems outside the machine.",
  "Recognize common Ubuntu and Linux Mint networking tools such as ip, NetworkManager, netplan, and systemd-resolved where present.",
  "Troubleshoot connectivity in layers: link, address, route, DNS, service, firewall, and client path.",
  "Apply only the narrow configuration change justified by the scenario and verify the full required network path afterward.",
];

const coreConcepts = [
  {
    title: "Interface",
    text:
      "A network interface represents a wired, wireless, virtual, loopback, bridge, tunnel, or other network endpoint on the system.",
  },
  {
    title: "Address",
    text:
      "An interface can have one or more IPv4 or IPv6 addresses. Addressing determines how the host identifies itself on a network.",
  },
  {
    title: "Route",
    text:
      "Routes tell the kernel where to send traffic. The default route is especially important for reaching networks outside the local subnet.",
  },
  {
    title: "DNS",
    text:
      "DNS resolves names such as hostnames and domains to IP addresses. A host can have working IP connectivity while DNS resolution is broken.",
  },
  {
    title: "Resolver",
    text:
      "The local resolver configuration may be managed by NetworkManager, systemd-resolved, netplan, or static files depending on the system.",
  },
  {
    title: "Service exposure",
    text:
      "A correctly configured interface does not guarantee an application is reachable. The service, bind address, route, and firewall must also align.",
  },
];

const importantPaths = [
  {
    path: "/etc/netplan/",
    purpose:
      "Common location for netplan YAML configuration on modern Ubuntu systems.",
    caution:
      "Do not edit or apply netplan blindly. A mistake can remove network access.",
  },
  {
    path: "/etc/NetworkManager/",
    purpose:
      "NetworkManager system configuration and connection-related settings.",
    caution:
      "Desktop-oriented Ubuntu and Linux Mint systems often rely heavily on NetworkManager.",
  },
  {
    path: "/etc/resolv.conf",
    purpose:
      "Resolver configuration entry point used by applications.",
    caution:
      "It may be a symlink managed by systemd-resolved or another service. Inspect before editing.",
  },
  {
    path: "/etc/systemd/resolved.conf",
    purpose:
      "Configuration file for systemd-resolved where that service is used.",
    caution:
      "Changing resolver behavior can affect the entire system. Verify the active resolver first.",
  },
  {
    path: "/etc/hosts",
    purpose:
      "Static hostname-to-address mappings that are consulted locally.",
    caution:
      "Unexpected entries can override DNS results and misdirect applications.",
  },
  {
    path: "/etc/nsswitch.conf",
    purpose:
      "Controls lookup order for names and other identity sources.",
    caution:
      "Changes can alter how hostnames resolve even when DNS itself is healthy.",
  },
];

const inspectionCommands = [
  {
    command: "ip link",
    purpose:
      "Show interfaces, administrative state, and link-layer information.",
  },
  {
    command: "ip addr",
    purpose:
      "Show IPv4 and IPv6 addresses assigned to interfaces.",
  },
  {
    command: "ip route",
    purpose:
      "Show IPv4 routes including the default gateway.",
  },
  {
    command: "ip -6 route",
    purpose:
      "Show IPv6 routes when IPv6 is in use.",
  },
  {
    command: "nmcli device status",
    purpose:
      "Show NetworkManager device state on systems using NetworkManager.",
  },
  {
    command: "nmcli connection show",
    purpose:
      "Show known NetworkManager connection profiles.",
  },
  {
    command: "resolvectl status",
    purpose:
      "Show resolver status, DNS servers, search domains, and per-link DNS information when systemd-resolved is active.",
  },
  {
    command: "readlink -f /etc/resolv.conf",
    purpose:
      "Reveal whether /etc/resolv.conf is a regular file or managed symlink.",
  },
  {
    command: "cat /etc/resolv.conf",
    purpose:
      "Show the resolver configuration visible to applications.",
  },
  {
    command: "getent hosts example.com",
    purpose:
      "Test name resolution using the system's normal name service configuration.",
  },
  {
    command: "ping -c 3 127.0.0.1",
    purpose:
      "Test the local TCP/IP stack without depending on network connectivity.",
  },
  {
    command: "ping -c 3 GATEWAY_IP",
    purpose:
      "Test reachability to the local gateway when ICMP is permitted.",
  },
  {
    command: "ss -tulpn",
    purpose:
      "Show listening sockets and bind addresses for local network services.",
  },
  {
    command: "ip neigh",
    purpose:
      "Show neighbor-cache information for directly connected hosts.",
  },
];

const troubleshootingLayers = [
  {
    layer: "01",
    title: "Interface",
    question:
      "Is the correct interface present and administratively up?",
    evidence:
      "ip link, nmcli device status",
  },
  {
    layer: "02",
    title: "Address",
    question:
      "Does the interface have the expected IPv4 and/or IPv6 address?",
    evidence:
      "ip addr",
  },
  {
    layer: "03",
    title: "Local subnet",
    question:
      "Can the host reach a nearby system or gateway on the same network?",
    evidence:
      "ip route, ping where allowed, ip neigh",
  },
  {
    layer: "04",
    title: "Route",
    question:
      "Is there a correct path to the destination or a valid default route?",
    evidence:
      "ip route, ip -6 route",
  },
  {
    layer: "05",
    title: "DNS",
    question:
      "Can the system resolve required names using the configured resolver path?",
    evidence:
      "resolvectl status, getent hosts, /etc/resolv.conf",
  },
  {
    layer: "06",
    title: "Service",
    question:
      "Is the required application actually listening on the expected address and port?",
    evidence:
      "ss -tulpn, systemctl status",
  },
  {
    layer: "07",
    title: "Firewall",
    question:
      "Does UFW permit the required network path while blocking unnecessary exposure?",
    evidence:
      "ufw status verbose",
  },
  {
    layer: "08",
    title: "Client path",
    question:
      "Can the authorized client actually reach and use the required service?",
    evidence:
      "Controlled client-side test",
  },
];

const routeConcepts = [
  {
    title: "Connected route",
    text:
      "Created for networks directly attached to an interface. It tells the kernel that destinations in that subnet are reachable without a gateway.",
  },
  {
    title: "Default route",
    text:
      "Used when no more specific route matches. It usually points to the local network gateway.",
  },
  {
    title: "Metric",
    text:
      "A route metric influences preference when multiple routes could reach the same destination.",
  },
  {
    title: "Source address",
    text:
      "The chosen source address can matter on multi-homed systems or hosts with several addresses.",
  },
  {
    title: "Policy routing",
    text:
      "Advanced systems can use multiple routing tables and rules. Do not assume one simple default route explains every path.",
  },
  {
    title: "IPv6 route",
    text:
      "IPv6 routing is separate from IPv4. Ignoring IPv6 can leave unexpected connectivity or exposure.",
  },
];

const dnsConcepts = [
  {
    title: "Name resolution can fail while IP works",
    text:
      "If reaching an IP works but a hostname fails, investigate DNS before changing interfaces or routes.",
  },
  {
    title: "/etc/resolv.conf may be managed",
    text:
      "On many Ubuntu-family systems, editing the file directly is temporary or incorrect because another service owns it.",
  },
  {
    title: "Per-link DNS exists",
    text:
      "systemd-resolved and NetworkManager can assign different DNS servers to different interfaces or VPNs.",
  },
  {
    title: "/etc/hosts can override DNS",
    text:
      "A local hosts entry may return an address even when the DNS server would answer differently.",
  },
  {
    title: "Search domains affect short names",
    text:
      "A hostname such as server1 may resolve differently depending on configured search domains.",
  },
  {
    title: "DNS service and DNS client are different",
    text:
      "A system may consume DNS as a client without running a DNS server. Do not open port 53 unless the host is actually required to serve DNS.",
  },
];

const reasoningCases = [
  {
    finding: "The machine cannot reach example.com by name",
    weak:
      "Replace /etc/resolv.conf immediately.",
    better:
      "Test IP connectivity first, inspect resolver ownership, DNS servers, /etc/hosts, and getent results, then change only the failing layer.",
  },
  {
    finding: "An interface has two IPv4 addresses",
    weak:
      "Delete the unfamiliar address.",
    better:
      "Determine whether the system is multi-homed, hosting a service, using a migration address, or misconfigured before removing it.",
  },
  {
    finding: "There are two default routes",
    weak:
      "Delete one of them.",
    better:
      "Compare interfaces, metrics, connection profiles, and scenario purpose. Multiple defaults can be intentional.",
  },
  {
    finding: "A service listens on 0.0.0.0",
    weak:
      "The network configuration is wrong.",
    better:
      "The service is bound to all IPv4 interfaces. Decide whether that exposure matches the scenario, then address service bind settings and firewall scope.",
  },
  {
    finding: "NetworkManager is installed",
    weak:
      "Disable it and use static files instead.",
    better:
      "Identify whether the system actively depends on NetworkManager before replacing its role.",
  },
  {
    finding: "resolv.conf contains 127.0.0.53",
    weak:
      "DNS is broken because the file does not list a public DNS server.",
    better:
      "Recognize this as a common systemd-resolved stub resolver pattern and inspect resolvectl status for the upstream DNS servers.",
  },
];

const networkManagers = [
  {
    tool: "NetworkManager",
    commonUse:
      "Desktop and laptop networking, including many Ubuntu Desktop and Linux Mint installations.",
    inspect:
      "nmcli device status; nmcli connection show",
    caution:
      "Editing lower-level files can be overwritten or conflict with NetworkManager-managed profiles.",
  },
  {
    tool: "netplan",
    commonUse:
      "Ubuntu network configuration abstraction that can render settings to NetworkManager or systemd-networkd.",
    inspect:
      "ls -l /etc/netplan; cat /etc/netplan/*.yaml",
    caution:
      "YAML indentation matters. Validate before applying changes.",
  },
  {
    tool: "systemd-networkd",
    commonUse:
      "Common on some server and minimal systems.",
    inspect:
      "networkctl; systemctl status systemd-networkd",
    caution:
      "Do not enable or disable it without confirming whether it is the active network backend.",
  },
  {
    tool: "systemd-resolved",
    commonUse:
      "Local DNS resolver service on many Ubuntu systems.",
    inspect:
      "resolvectl status; systemctl status systemd-resolved",
    caution:
      "Resolver behavior can be tied to symlinks and per-link DNS settings.",
  },
];

const controlledChanges = [
  {
    goal: "Bring an interface up",
    command: "sudo ip link set INTERFACE up",
    caution:
      "Use only when the interface should be active and its higher-level manager will not immediately override the change.",
  },
  {
    goal: "Renew a NetworkManager connection",
    command: "sudo nmcli connection up 'CONNECTION_NAME'",
    caution:
      "May interrupt connectivity. Confirm the connection profile and required remote-access path first.",
  },
  {
    goal: "Validate netplan",
    command: "sudo netplan generate",
    caution:
      "Generation checks syntax/rendering but does not prove the configuration will preserve connectivity.",
  },
  {
    goal: "Test netplan with rollback window",
    command: "sudo netplan try",
    caution:
      "Prefer this over immediate apply when supported because it can revert if the new configuration is not confirmed.",
  },
  {
    goal: "Apply netplan",
    command: "sudo netplan apply",
    caution:
      "Can disrupt remote access. Use only after review and validation.",
  },
  {
    goal: "Restart resolver",
    command: "sudo systemctl restart systemd-resolved",
    caution:
      "Only appropriate when systemd-resolved is the active resolver and the configuration change requires restart.",
  },
];

const evidenceSources = [
  {
    source: "Interface state",
    command: "ip link",
    value:
      "Shows which interfaces exist and whether they are administratively up.",
  },
  {
    source: "Addressing",
    command: "ip addr",
    value:
      "Shows assigned IPv4/IPv6 addresses and interface scope.",
  },
  {
    source: "Routing",
    command: "ip route",
    value:
      "Shows the current forwarding decision table for IPv4.",
  },
  {
    source: "Resolver state",
    command: "resolvectl status",
    value:
      "Shows per-link DNS servers, search domains, and resolver configuration when supported.",
  },
  {
    source: "NetworkManager state",
    command: "nmcli connection show",
    value:
      "Shows configured connection profiles and which are active.",
  },
  {
    source: "Listening services",
    command: "ss -tulpn",
    value:
      "Shows which local applications expose network sockets and where they bind.",
  },
];

const highRiskShortcuts = [
  {
    shortcut: "Editing /etc/resolv.conf without checking ownership",
    risk:
      "The file may be managed by systemd-resolved or NetworkManager and your edit may be overwritten or break resolution.",
  },
  {
    shortcut: "netplan apply over SSH without a recovery plan",
    risk:
      "A bad address, route, or DNS configuration can immediately cut off remote administration.",
  },
  {
    shortcut: "Deleting extra routes or addresses because they look unusual",
    risk:
      "Multi-homed systems and required services can legitimately use multiple addresses and routes.",
  },
  {
    shortcut: "Restarting every network service at once",
    risk:
      "Makes it harder to identify the real cause and can create a larger outage.",
  },
  {
    shortcut: "Disabling IPv6 without scenario justification",
    risk:
      "Can break applications or hide unexpected exposure rather than correctly securing it.",
  },
  {
    shortcut: "Testing only localhost",
    risk:
      "Local success does not prove routing, DNS, firewall, or remote-client connectivity.",
  },
];

const verification = [
  {
    area: "Interface",
    check:
      "Confirm the required interface remains present and up.",
  },
  {
    area: "Address",
    check:
      "Confirm expected IPv4 and/or IPv6 addresses are assigned.",
  },
  {
    area: "Route",
    check:
      "Confirm the required local and default routes still exist with appropriate metrics.",
  },
  {
    area: "DNS",
    check:
      "Use getent hosts or an application lookup to verify required names resolve correctly.",
  },
  {
    area: "Service",
    check:
      "Confirm required network services are listening on the intended addresses and ports.",
  },
  {
    area: "Client path",
    check:
      "Test the full authorized path from client to required service after network changes.",
  },
];

const fictionalLab = [
  {
    step: "01",
    task:
      "Read the fictional scenario: the host must reach an internal DNS server and default gateway, Morgan must SSH from the training subnet, and an internal HTTPS application must remain reachable.",
  },
  {
    step: "02",
    task:
      "Record ip link, ip addr, ip route, nmcli device status, resolvectl status, /etc/resolv.conf ownership, and listening sockets without changing anything.",
  },
  {
    step: "03",
    task:
      "Test connectivity by layer: loopback, gateway, known IP destination, hostname resolution, SSH, and HTTPS.",
  },
  {
    step: "04",
    task:
      "Identify a fictional stale DNS server in the active connection profile but do not edit resolv.conf directly if it is managed.",
  },
  {
    step: "05",
    task:
      "Correct only the active DNS configuration using the system's actual network manager, preserving current address and route settings.",
  },
  {
    step: "06",
    task:
      "Verify the resolver state, hostname resolution, SSH, HTTPS, firewall rules, and system logs after the change.",
  },
  {
    step: "07",
    task:
      "Document the final interface, address, gateway, DNS servers, and required service exposure.",
  },
];

const checklist = [
  "I can explain interfaces, addresses, routes, DNS, and resolvers.",
  "I use ip link, ip addr, and ip route before changing network configuration.",
  "I determine whether NetworkManager, netplan, systemd-networkd, and systemd-resolved are actually in use before editing files.",
  "I inspect /etc/resolv.conf ownership before changing DNS settings.",
  "I separate IP-connectivity problems from DNS-resolution problems.",
  "I do not remove extra addresses or routes until I understand their role.",
  "I correlate listening services with bind addresses and firewall policy.",
  "I consider both IPv4 and IPv6 when reviewing exposure.",
  "I avoid disruptive network changes over SSH without a recovery path.",
  "I verify the full client-to-service path after configuration changes.",
];

const reflection = [
  "Why can a host reach an IP address but fail to reach the same service by hostname?",
  "Why should /etc/resolv.conf be inspected before it is edited?",
  "What is the difference between an interface address and a route?",
  "Why can multiple default routes be legitimate?",
  "How does a service listening on 127.0.0.1 differ from one listening on 0.0.0.0?",
  "What should you verify after changing DNS or route configuration on a system that must remain remotely accessible?",
];

export default function LinuxNetworkingInterfacesDnsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/linux"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Back to Linux
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
              href="/cyberpatriot/linux/ufw-firewall-network-exposure"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/linux/cron-jobs-scheduled-persistence"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
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
                Linux · Lesson 11
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Networking, Interfaces & DNS
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Troubleshoot Linux connectivity by separating interface state,
                addresses, routes, DNS, service exposure, firewall policy, and
                client reachability instead of changing network settings blindly.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Network problems are layered. A machine can have a healthy
                interface and broken DNS, correct DNS and no route, or a healthy
                route while the required application is listening only on
                localhost. Diagnose the failing layer first.
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
                  <span>Troubleshooting layers</span>
                  <span className="font-bold text-white">8</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Inspection commands</span>
                  <span className="font-bold text-white">14</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Main goal</span>
                  <span className="font-bold text-white">Layered network diagnosis</span>
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
            Diagnose the network layer that is actually failing
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
              Connectivity is a chain, not one setting
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Required communication depends on interface state, addressing,
              routing, name resolution, service binding, firewall policy, and
              the remote endpoint. A failure at any layer can look like a
              general network problem.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Availability risk
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Network changes can remove your own recovery path
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Address, route, DNS, NetworkManager, and netplan changes can cut
              off SSH immediately. Inspect the active manager and keep a recovery
              option before applying disruptive changes.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Networking fundamentals
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Six concepts behind Linux connectivity
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {coreConcepts.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Important paths
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Know which component owns the network configuration
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {importantPaths.map((item) => (
              <div
                key={item.path}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <code className="text-base font-black text-cyan-200">{item.path}</code>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.purpose}</p>
                <div className="mt-4 rounded-xl border border-yellow-400/15 bg-yellow-400/5 p-4">
                  <p className="text-sm leading-6 text-slate-400">{item.caution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Inspection first
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Capture current network state before editing it
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {inspectionCommands.map((item) => (
              <div
                key={item.command}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <code className="block overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm font-bold text-cyan-200">
                  {item.command}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.purpose}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Troubleshooting layers
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Work from the local interface outward
          </h2>
          <div className="mt-8 grid gap-4">
            {troubleshootingLayers.map((item) => (
              <div
                key={item.layer}
                className="grid gap-5 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 lg:grid-cols-[0.35fr_0.9fr_1.2fr_1fr]"
              >
                <span className="text-lg font-black text-cyan-300">{item.layer}</span>
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="text-sm leading-6 text-slate-300">{item.question}</p>
                <p className="text-sm leading-6 text-slate-400">{item.evidence}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Routing</p>
            <h2 className="mt-3 text-2xl font-black text-white">Routes decide where packets go</h2>
            <div className="mt-6 grid gap-3">
              {routeConcepts.map((item) => (
                <div key={item.title} className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                  <h3 className="font-black text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">DNS</p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Name resolution is its own troubleshooting layer
            </h2>
            <div className="mt-6 grid gap-3">
              {dnsConcepts.map((item) => (
                <div key={item.title} className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                  <h3 className="font-black text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Network managers</p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Do not fight the component that owns the configuration
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {networkManagers.map((item) => (
              <div key={item.tool} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-lg font-black text-white">{item.tool}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.commonUse}</p>
                <code className="mt-4 block overflow-x-auto rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-cyan-200">
                  {item.inspect}
                </code>
                <div className="mt-4 rounded-xl border border-yellow-400/15 bg-yellow-400/5 p-4">
                  <p className="text-sm leading-6 text-slate-400">{item.caution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Evidence-based reasoning</p>
          <h2 className="mt-3 text-3xl font-black text-white">Fix the failing layer, not the symptom</h2>
          <div className="mt-8 grid gap-5">
            {reasoningCases.map((item) => (
              <div key={item.finding} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
                <h3 className="text-lg font-black text-white">{item.finding}</h3>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-red-400/15 bg-red-400/5 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Weak response</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{item.weak}</p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Better reasoning</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{item.better}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Network evidence</p>
            <h2 className="mt-3 text-2xl font-black text-white">Preserve the baseline before changing it</h2>
            <div className="mt-6 grid gap-3">
              {evidenceSources.map((item) => (
                <div key={item.source} className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                  <h3 className="font-black text-white">{item.source}</h3>
                  <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-cyan-200">
                    {item.command}
                  </code>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Controlled changes</p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Prefer reversible, manager-aware configuration
            </h2>
            <div className="mt-6 grid gap-3">
              {controlledChanges.map((item) => (
                <div key={item.goal} className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                  <h3 className="font-black text-white">{item.goal}</h3>
                  <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-cyan-200">
                    {item.command}
                  </code>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.caution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">High-risk shortcuts</p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Network changes that can create outages or hide the cause
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {highRiskShortcuts.map((item) => (
              <div key={item.shortcut} className="rounded-2xl border border-red-400/15 bg-slate-950/50 p-5">
                <h3 className="text-lg font-black text-white">{item.shortcut}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.risk}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Verification</p>
          <h2 className="mt-3 text-3xl font-black text-white">Prove the full network path after a change</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {verification.map((item) => (
              <div key={item.area} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-lg font-black text-white">{item.area}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.check}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Defensive lab</p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Diagnose a fictional DNS failure without breaking the network
          </h2>
          <div className="mt-8 grid gap-3">
            {fictionalLab.map((item) => (
              <div key={item.step} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-5">
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
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Lesson checklist</p>
            <h2 className="mt-3 text-2xl font-black text-white">Before moving on</h2>
            <div className="mt-6 grid gap-3">
              {checklist.map((item, index) => (
                <div key={item} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                  <span className="font-black text-cyan-300">{String(index + 1).padStart(2, "0")}</span>
                  <p className="text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Reflection</p>
            <h2 className="mt-3 text-2xl font-black text-white">Check your reasoning</h2>
            <div className="mt-6 grid gap-3">
              {reflection.map((question, index) => (
                <div key={question} className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">
                    Question {index + 1}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{question}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
              <p className="text-sm font-black text-cyan-200">Carry this forward</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Diagnose networking from the interface outward. Identify the active manager,
                preserve the current state, change only the failing layer, and verify the real
                client-to-service path before declaring the system healthy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-8">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/linux"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Back to Linux
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
              href="/cyberpatriot/linux/ufw-firewall-network-exposure"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/linux/cron-jobs-scheduled-persistence"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
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
