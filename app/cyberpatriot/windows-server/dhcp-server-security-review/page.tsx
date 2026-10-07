import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Review Windows Server DHCP authorization, scopes, leases, reservations, exclusions, options, bindings, and audit logs.",
  "Explain how DHCP fits into a domain network and why incorrect settings can disconnect many clients at once.",
  "Use DHCP Manager, Server Manager, Event Viewer, PowerShell, and client-side tests to inspect DHCP safely.",
  "Recognize suspicious or overly broad DHCP configuration without deleting required scopes, options, or reservations blindly.",
  "Understand the difference between scope options, server options, reservations, exclusions, leases, and bindings.",
  "Verify client addressing and network access after any DHCP change.",
];

const coreConcepts = [
  {
    title: "Scope",
    text:
      "A range of IP addresses and related settings that a DHCP server can lease to clients on a specific network.",
  },
  {
    title: "Lease",
    text:
      "A temporary assignment of an IP address and DHCP options to a client.",
  },
  {
    title: "Reservation",
    text:
      "A mapping that assigns a predictable address to a specific client, usually based on its hardware identifier.",
  },
  {
    title: "Exclusion range",
    text:
      "Addresses inside a scope that the DHCP server must not lease dynamically.",
  },
  {
    title: "DHCP option",
    text:
      "Additional configuration delivered to clients, such as default gateway, DNS servers, or DNS domain name.",
  },
  {
    title: "Authorization",
    text:
      "In Active Directory environments, DHCP servers can be authorized so domain infrastructure recognizes them as approved DHCP servers.",
  },
];

const toolPaths = [
  {
    title: "DHCP Manager",
    path:
      "Server Manager → Tools → DHCP",
    shortcut:
      "Win + R → dhcpmgmt.msc",
    note:
      "Primary GUI for reviewing DHCP servers, IPv4/IPv6 scopes, leases, reservations, options, policies, filters, and server properties.",
  },
  {
    title: "IPv4 scope",
    path:
      "DHCP Manager → server → IPv4 → expand the required scope",
    shortcut:
      "Review Address Pool, Address Leases, Reservations, Scope Options, and Policies.",
    note:
      "Start with the scenario-required scope before changing server-wide settings.",
  },
  {
    title: "Server options",
    path:
      "DHCP Manager → server → IPv4 → Server Options",
    shortcut:
      "Review settings that may apply broadly across scopes.",
    note:
      "Server Options can affect many clients if a scope does not override them.",
  },
  {
    title: "Server properties",
    path:
      "DHCP Manager → right-click server → Properties",
    shortcut:
      "Review bindings, DNS behavior, logging, filters, and other server-wide settings.",
    note:
      "Server-wide changes can affect every active scope.",
  },
  {
    title: "DHCP authorization",
    path:
      "DHCP Manager → right-click DHCP → Manage Authorized Servers",
    shortcut:
      "Review approved DHCP servers in the Active Directory environment.",
    note:
      "Do not unauthorize a required production or competition server simply because another DHCP server also appears.",
  },
  {
    title: "Event Viewer",
    path:
      "Event Viewer → Applications and Services Logs → Microsoft → Windows → DHCP-Server",
    shortcut:
      "Review applicable DHCP operational and admin logs.",
    note:
      "Event evidence can help explain service, authorization, lease, and configuration problems.",
  },
  {
    title: "DHCP audit logs",
    path:
      "C:\\Windows\\System32\\dhcp",
    shortcut:
      "Review DHCP audit log files when audit logging is enabled.",
    note:
      "Audit logs can contain lease and server activity useful for investigation.",
  },
  {
    title: "PowerShell",
    path:
      "Start → search PowerShell → Run as administrator when required",
    shortcut:
      "Use Get-DhcpServer* cmdlets for read-only inspection.",
    note:
      "PowerShell is especially useful for fast scope, option, lease, reservation, and binding inventory.",
  },
];

const scopeReviewQuestions = [
  "What subnet does this scope serve?",
  "What is the start and end address of the pool?",
  "Which addresses are excluded from dynamic leasing?",
  "Are any important systems using reservations?",
  "What lease duration is configured?",
  "Which default gateway is supplied to clients?",
  "Which DNS servers are supplied to clients?",
  "Which DNS domain name is supplied?",
  "Are any policies changing options for selected clients?",
  "How will a client obtain or renew a lease after the change?",
];

const serverReviewQuestions = [
  "Is this DHCP server authorized in Active Directory when authorization is part of the environment?",
  "Which network interfaces is DHCP bound to?",
  "Is the DHCP Server service running?",
  "Are audit logs enabled?",
  "Are filters being used?",
  "Are there multiple scopes and are all of them required?",
  "Are server-level options configured?",
  "Does DHCP update DNS records on behalf of clients?",
  "Are failover or relay relationships part of the network design?",
  "Which client-side tests prove DHCP is working correctly?",
];

const optionExamples = [
  {
    code: "003",
    name: "Router",
    purpose:
      "Provides the default gateway clients use to reach other networks.",
    risk:
      "An incorrect gateway can strand clients on the local subnet.",
  },
  {
    code: "006",
    name: "DNS Servers",
    purpose:
      "Provides the DNS resolvers clients should use.",
    risk:
      "Incorrect DNS can break domain logon, Group Policy, and ordinary name resolution.",
  },
  {
    code: "015",
    name: "DNS Domain Name",
    purpose:
      "Provides the DNS suffix or domain name used by clients.",
    risk:
      "An incorrect suffix can cause confusing name-resolution and domain behavior.",
  },
  {
    code: "044 / 046",
    name: "Legacy NetBIOS options",
    purpose:
      "May appear in older environments that still use NetBIOS name services.",
    risk:
      "Do not add or remove legacy options without understanding the environment that depends on them.",
  },
];

const powershellChecks = [
  {
    label: "DHCP service state",
    command:
      'Get-Service -Name "DHCPServer"',
    purpose:
      "Shows whether the DHCP Server service is running.",
  },
  {
    label: "Authorized DHCP servers",
    command:
      "Get-DhcpServerInDC",
    purpose:
      "Shows DHCP servers authorized in Active Directory when the cmdlet and domain context are available.",
  },
  {
    label: "IPv4 scopes",
    command:
      "Get-DhcpServerv4Scope | Select-Object ScopeId, Name, State, StartRange, EndRange, SubnetMask, LeaseDuration",
    purpose:
      "Creates a read-only inventory of IPv4 scopes.",
  },
  {
    label: "Scope leases",
    command:
      'Get-DhcpServerv4Lease -ScopeId "10.0.10.0" | Select-Object IPAddress, HostName, ClientId, AddressState, LeaseExpiryTime',
    purpose:
      "Shows leases for a selected scope. Replace the example ScopeId with the authorized scope.",
  },
  {
    label: "Reservations",
    command:
      'Get-DhcpServerv4Reservation -ScopeId "10.0.10.0" | Select-Object IPAddress, ClientId, Name, Description',
    purpose:
      "Lists reservations for a selected scope.",
  },
  {
    label: "Scope options",
    command:
      'Get-DhcpServerv4OptionValue -ScopeId "10.0.10.0"',
    purpose:
      "Shows DHCP options configured at the selected scope.",
  },
  {
    label: "Server options",
    command:
      "Get-DhcpServerv4OptionValue",
    purpose:
      "Shows server-level DHCP option values.",
  },
  {
    label: "Bindings",
    command:
      "Get-DhcpServerv4Binding",
    purpose:
      "Shows which network interfaces DHCP is bound to.",
  },
  {
    label: "Statistics",
    command:
      "Get-DhcpServerv4Statistics",
    purpose:
      "Shows useful DHCP server statistics such as addresses in use and available.",
  },
];

const addressPoolConcepts = [
  {
    title: "Start and end range",
    text:
      "Define which addresses the scope can potentially lease.",
  },
  {
    title: "Exclusions",
    text:
      "Protect addresses inside the subnet that should not be leased dynamically, such as statically configured infrastructure.",
  },
  {
    title: "Reservations",
    text:
      "Provide predictable addresses to known clients without manually configuring the client itself.",
  },
  {
    title: "Available addresses",
    text:
      "The usable dynamic pool is the configured range minus exclusions and reserved or currently leased addresses.",
  },
];

const authorizationGuidance = [
  {
    title: "Authorized server",
    text:
      "In an Active Directory environment, an authorized DHCP server is recognized as approved to provide DHCP service.",
  },
  {
    title: "Unauthorized server",
    text:
      "An unknown DHCP server can create conflicting network configuration, but do not assume every additional authorized server is malicious.",
  },
  {
    title: "Redundancy",
    text:
      "Multiple authorized DHCP servers can be legitimate when scopes, failover, or network design require them.",
  },
  {
    title: "Verify role ownership",
    text:
      "Compare authorized servers with scenario documentation and network design before removing authorization.",
  },
];

const dnsIntegration = [
  {
    title: "Client registration",
    text:
      "Clients may register their own DNS records depending on configuration.",
  },
  {
    title: "DHCP registration",
    text:
      "DHCP can be configured to update DNS records for clients, which creates a dependency between DHCP and DNS.",
  },
  {
    title: "Credentials",
    text:
      "Some environments use dedicated credentials for secure dynamic DNS updates.",
  },
  {
    title: "Aging and stale records",
    text:
      "DHCP lease changes can affect DNS records, so scavenging and update behavior should be reviewed together.",
  },
];

const suspiciousSignals = [
  {
    title: "Unknown default gateway",
    text:
      "A scope option pointing clients to an unexpected router can redirect traffic or break connectivity.",
  },
  {
    title: "Unexpected DNS server",
    text:
      "An unknown DNS resolver in Option 006 can redirect queries and break domain behavior.",
  },
  {
    title: "Overlapping scopes",
    text:
      "Two active scopes serving the same addresses can create conflicts and unpredictable client configuration.",
  },
  {
    title: "Unexpected reservation",
    text:
      "A reservation for an unknown client may be legitimate, stale, or suspicious and should be investigated.",
  },
  {
    title: "DHCP bound to unnecessary interface",
    text:
      "The server may be listening on a network where it should not provide leases.",
  },
  {
    title: "Large number of BAD_ADDRESS leases",
    text:
      "Repeated conflicts can indicate duplicate static addressing, rogue DHCP behavior, or another network problem.",
  },
];

const troubleshooting = [
  {
    symptom: "Client receives no DHCP address.",
    checks:
      "Confirm the DHCP Server service, active scope, available addresses, server authorization, interface binding, relay path if used, firewall/network reachability, and client request behavior.",
  },
  {
    symptom: "Client receives an address but cannot reach other networks.",
    checks:
      "Review Option 003 Router, subnet mask, VLAN/relay path, client route table, and whether the gateway address is valid for the scope.",
  },
  {
    symptom: "Client gets an address but cannot join or use the domain correctly.",
    checks:
      "Review Option 006 DNS Servers and Option 015 DNS Domain Name. Domain clients should use the intended internal DNS infrastructure.",
  },
  {
    symptom: "Scope is active but no addresses are available.",
    checks:
      "Review lease utilization, exclusions, reservations, stale leases, scope size, and whether the subnet design is correct.",
  },
  {
    symptom: "DHCP settings return after being changed.",
    checks:
      "Another administrator, failover partner, automation, configuration-management tool, or imported configuration may be restoring them.",
  },
  {
    symptom: "One network works but another does not.",
    checks:
      "Review the specific scope, DHCP relay/IP helper path, interface binding, VLAN routing, and scope options for the failing network.",
  },
];

const leaseReasoning = [
  {
    title: "Active",
    text:
      "The client currently holds a valid lease.",
  },
  {
    title: "Expired",
    text:
      "The lease is no longer valid and the address may become available for reuse.",
  },
  {
    title: "Reservation",
    text:
      "The address is tied to a specific client identity and should not be treated like an ordinary dynamic lease.",
  },
  {
    title: "BAD_ADDRESS",
    text:
      "Windows DHCP may mark an address bad when conflict detection identifies another device already using it.",
  },
];

const filtersAndPolicies = [
  {
    title: "Allow filters",
    text:
      "Can restrict service to approved client identifiers in environments that use filtering.",
  },
  {
    title: "Deny filters",
    text:
      "Can block selected clients from receiving leases.",
  },
  {
    title: "Policies",
    text:
      "Can provide different options or behavior to selected clients based on conditions.",
  },
  {
    title: "Caution",
    text:
      "Filters and policies can explain why one client behaves differently from another, so inspect them before assuming the scope is broken.",
  },
];

const clientVerification = [
  {
    title: "View current address",
    command:
      "ipconfig /all",
    purpose:
      "Shows whether the client obtained its address, gateway, DNS servers, DHCP server, lease times, and DNS suffix as expected.",
  },
  {
    title: "Release lease",
    command:
      "ipconfig /release",
    purpose:
      "Releases the current DHCP lease. Use only on an authorized test client because connectivity will temporarily drop.",
  },
  {
    title: "Renew lease",
    command:
      "ipconfig /renew",
    purpose:
      "Requests a new or renewed DHCP lease from the authorized DHCP infrastructure.",
  },
  {
    title: "Verify gateway",
    command:
      "ipconfig /all",
    purpose:
      "Confirm the default gateway matches the expected scope configuration.",
  },
  {
    title: "Verify DNS",
    command:
      "ipconfig /all",
    purpose:
      "Confirm the client is using the intended internal DNS servers.",
  },
  {
    title: "Verify domain connectivity",
    command:
      "Resolve-DnsName example.local",
    purpose:
      "Confirms DHCP-provided DNS configuration supports required domain name resolution.",
  },
];

const changeDiscipline = [
  "Read the scenario and identify required subnets.",
  "Record scope ranges, exclusions, reservations, and options.",
  "Record DHCP authorization and interface bindings.",
  "Check current leases and active clients before disruptive changes.",
  "Identify DHCP-DNS integration dependencies.",
  "Change one scope or server setting at a time.",
  "Avoid deleting reservations or exclusions without confirming ownership.",
  "Avoid changing the default gateway or DNS options blindly.",
  "Renew a lease from an authorized test client.",
  "Verify address, gateway, DNS, and domain connectivity after changes.",
];

const decisionCases = [
  {
    title: "Scope supplies an unknown DNS server",
    evidence:
      "Option 006 contains the required internal DNS server plus one undocumented address.",
    reasoning:
      "The second resolver may be unauthorized, stale, or part of a legitimate redundancy design.",
    response:
      "Identify the second server, compare it with the authorized network design, test current client behavior, then remove it only if it is clearly unnecessary or incorrect.",
  },
  {
    title: "Large exclusion range appears",
    evidence:
      "A major portion of the scope is excluded from leasing.",
    reasoning:
      "The exclusion may protect static infrastructure or may unnecessarily shrink the pool.",
    response:
      "Map the excluded addresses to known servers, network devices, and reservations before changing the exclusion range.",
  },
  {
    title: "Unknown reservation exists",
    evidence:
      "A reserved address is tied to a client identifier not listed in the scenario.",
    reasoning:
      "It may belong to an infrastructure device, printer, server, or old client.",
    response:
      "Check hostname, lease history, DNS records, device ownership, and scenario requirements before deleting the reservation.",
  },
  {
    title: "Second authorized DHCP server appears",
    evidence:
      "Get-DhcpServerInDC returns two authorized servers.",
    reasoning:
      "A second server may be legitimate for redundancy, another site, or failover.",
    response:
      "Verify the network design and scope ownership before changing authorization.",
  },
];

const labSteps = [
  {
    number: "01",
    title: "Read the fictional requirement",
    text:
      "DHCP-SRV provides addresses for the 10.20.30.0/24 client network. Clients must use 10.20.30.1 as the gateway and DC-PRACTICE as their internal DNS server.",
  },
  {
    number: "02",
    title: "Inventory the server",
    text:
      "Open DHCP Manager and use PowerShell to record authorization, interface bindings, scopes, statistics, and the DHCP service state.",
  },
  {
    number: "03",
    title: "Review the client scope",
    text:
      "Inspect Address Pool, exclusions, leases, reservations, Scope Options, and any policies.",
  },
  {
    number: "04",
    title: "Investigate anomalies",
    text:
      "The scope includes an undocumented second DNS server and a reservation for an unknown device. A large exclusion range also exists.",
  },
  {
    number: "05",
    title: "Harden narrowly",
    text:
      "Preserve required static infrastructure and reservations, remove only clearly unauthorized option values or entries, and keep the client pool large enough for the scenario.",
  },
  {
    number: "06",
    title: "Verify from a client",
    text:
      "Release and renew an authorized test client lease, then confirm the expected IP range, gateway, DNS server, DNS suffix, and domain resolution.",
  },
];

const mistakes = [
  {
    title: "Deleting unknown reservations",
    text:
      "Reservations often belong to printers, servers, appliances, or other required infrastructure.",
  },
  {
    title: "Changing DNS option casually",
    text:
      "Domain clients can lose authentication and Group Policy functionality when given the wrong DNS resolver.",
  },
  {
    title: "Removing exclusions blindly",
    text:
      "The excluded addresses may be statically assigned to routers, servers, or network devices.",
  },
  {
    title: "Unauthorizing an unfamiliar DHCP server",
    text:
      "Multiple authorized servers can be legitimate in multi-site or redundant designs.",
  },
  {
    title: "Testing only in DHCP Manager",
    text:
      "The server can look healthy while clients still receive bad options or fail to reach the network.",
  },
  {
    title: "Ignoring scope utilization",
    text:
      "A secure configuration still fails if the address pool is exhausted.",
  },
];

const verification = [
  "The DHCP Server service is running.",
  "The server is authorized when domain authorization is part of the design.",
  "Required scopes are active.",
  "Address pools and exclusions match the intended subnet design.",
  "Required reservations remain intact.",
  "Default gateway options are correct.",
  "DNS server and DNS domain options are correct.",
  "DHCP bindings match the intended interfaces.",
  "Authorized clients can obtain or renew leases.",
  "Clients can reach required networks and resolve required domain names.",
];

const checklist = [
  "Open DHCP Manager or dhcpmgmt.msc.",
  "Review authorized DHCP servers.",
  "Review IPv4 scopes.",
  "Review Address Pool and exclusions.",
  "Review Address Leases.",
  "Review Reservations.",
  "Review Scope Options.",
  "Review Server Options.",
  "Review interface bindings.",
  "Review filters and policies when present.",
  "Check DHCP audit/Event Viewer logs.",
  "Verify from an authorized client with ipconfig /all and lease renewal.",
];

const reflection = [
  "Why can an incorrect DHCP DNS option break Active Directory behavior?",
  "Why should a large exclusion range be investigated before being removed?",
  "Why can multiple authorized DHCP servers be legitimate?",
  "What is the difference between a reservation and a dynamic lease?",
  "Why should DHCP filters and policies be checked when one client behaves differently from another?",
  "What should be verified on a client after changing DHCP settings?",
];

export default function DhcpServerSecurityReviewPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/windows-server" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              Back to Windows Server
            </Link>
            <Link href="/cyberpatriot" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              CyberPatriot Hub
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/windows-server/dns-server-security-review" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
&larr; Previous Lesson
            </Link>            <Link href="/cyberpatriot/windows-server/scheduled-tasks-persistence-review" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson &rarr;
            </Link>          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Windows Server · Lesson 14
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                DHCP Server Security Review
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Review DHCP authorization, scopes, leases, reservations,
                exclusions, options, interface bindings, and logs without
                breaking the network configuration clients depend on.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                DHCP is not just an address dispenser. It can define a client's
                gateway, DNS servers, domain suffix, and other network behavior,
                so one incorrect setting can affect an entire subnet.
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
                  <span>Primary console</span>
                  <span className="font-bold text-white">dhcpmgmt.msc</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Key client data</span>
                  <span className="font-bold text-white">IP + GW + DNS</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Goal</span>
                  <span className="font-bold text-white">Address + verify</span>
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
            What this lesson should help you do
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {objectives.map((item, index) => (
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
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Core concepts
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Understand what DHCP is actually controlling
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {coreConcepts.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Core idea
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              DHCP controls more than the IP address
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Gateway and DNS options can determine whether a client can reach
              other networks, find the domain, and use required services.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Network warning
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              One scope change can affect many clients
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Incorrect gateway, DNS, exclusion, or address-range changes can
              disconnect an entire subnet.
            </p>
            <div className="mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
              Record the current scope and options before changing them.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Tool map
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Exactly where to review DHCP
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {toolPaths.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-black/30 px-3 py-2 text-sm text-cyan-200">
                {item.path}
              </code>
              <p className="mt-3 text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                Quick action
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{item.shortcut}</p>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Scope review
            </p>
            <h2 className="mt-2 text-3xl font-black text-white">
              Ten questions before changing a scope
            </h2>
            <div className="mt-7 grid gap-3">
              {scopeReviewQuestions.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900/70 p-4"
                >
                  <span className="font-black text-cyan-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Server review
            </p>
            <h2 className="mt-2 text-3xl font-black text-white">
              Ten questions before changing server-wide DHCP
            </h2>
            <div className="mt-7 grid gap-3">
              {serverReviewQuestions.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900/70 p-4"
                >
                  <span className="font-black text-cyan-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Common DHCP options
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Small option changes can have large network effects
        </h2>
        <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {optionExamples.map((item) => (
            <div
              key={item.code}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                Option {item.code}
              </p>
              <h3 className="mt-2 text-lg font-black text-white">{item.name}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.purpose}</p>
              <div className="mt-4 rounded-xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                <p className="text-sm leading-6 text-yellow-100">{item.risk}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            PowerShell inspection
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Inventory DHCP without changing it
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {powershellChecks.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.label}</h3>
                <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-black/30 px-3 py-2 text-sm text-cyan-200">
                  {item.command}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.purpose}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Address pool logic
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Range, exclusions, reservations, and leases are different things
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {addressPoolConcepts.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Authorization
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Authorized does not always mean single-server
            </h2>
            <div className="mt-6 grid gap-4">
              {authorizationGuidance.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              DHCP and DNS
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Lease changes can affect DNS records
            </h2>
            <div className="mt-6 grid gap-4">
              {dnsIntegration.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Suspicious signals
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          DHCP settings that deserve deeper investigation
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {suspiciousSignals.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Troubleshooting
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            When DHCP does not behave as expected
          </h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {troubleshooting.map((item) => (
              <div
                key={item.symptom}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-300">
                  Symptom
                </p>
                <h3 className="mt-2 text-lg font-black text-white">{item.symptom}</h3>
                <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                  Check
                </p>
                <p className="mt-2 text-sm leading-7 text-slate-400">{item.checks}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Lease states
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Lease status is evidence
            </h2>
            <div className="mt-6 grid gap-4">
              {leaseReasoning.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Filters and policies
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              One client can behave differently on purpose
            </h2>
            <div className="mt-6 grid gap-4">
              {filtersAndPolicies.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <h3 className="font-black text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Client verification
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Prove the client received the intended configuration
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {clientVerification.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <code className="mt-3 block overflow-x-auto rounded-lg border border-slate-800 bg-black/30 px-3 py-2 text-sm text-cyan-200">
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
            Change discipline
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Ten steps for controlled DHCP hardening
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {changeDiscipline.map((item, index) => (
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
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Decision cases
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            DHCP decisions in server context
          </h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {decisionCases.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.evidence}</p>
                <p className="mt-4 text-sm leading-7 text-slate-400">{item.reasoning}</p>
                <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                    Response
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.response}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
            Fictional defensive lab
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Review DHCP-SRV
          </h2>
          <div className="mt-8 grid gap-4">
            {labSteps.map((item) => (
              <div
                key={item.number}
                className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 lg:grid-cols-[0.24fr_1fr]"
              >
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-yellow-300">
                    Step {item.number}
                  </p>
                  <h3 className="mt-2 font-black text-white">{item.title}</h3>
                </div>
                <p className="text-sm leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Common mistakes
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          DHCP mistakes that can disconnect a subnet
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {mistakes.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="text-lg font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Reflection
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Test your DHCP reasoning
            </h2>
            <div className="mt-5 grid gap-3">
              {reflection.map((item, index) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-cyan-300">
                    Question {index + 1}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Verification checklist
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Confirm clients receive the intended network configuration
            </h2>
            <div className="mt-5 grid gap-3">
              {verification.map((item, index) => (
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
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Competition checklist
          </p>
          <h2 className="mt-3 text-2xl font-black text-white">
            Before leaving DHCP review
          </h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
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
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 via-slate-900/80 to-slate-900/80 p-7 lg:p-9">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
                Next Windows Server lesson
              </p>
              <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                Scheduled Tasks &amp; Persistence Review
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                Next, review scheduled tasks, triggers, actions, run-as
                identities, task history, unusual execution paths, and the
                difference between legitimate automation and suspicious
                persistence.
              </p>
            </div>

            <Link
              href="/cyberpatriot/windows-server/scheduled-tasks-persistence-review"
              className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-center text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15"
            >
              Open Lesson 15 &rarr;
            </Link>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-8">
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/windows-server" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              Back to Windows Server
            </Link>
            <Link href="/cyberpatriot" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              CyberPatriot Hub
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/windows-server/dns-server-security-review" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
&larr; Previous Lesson
            </Link>            <Link href="/cyberpatriot/windows-server/scheduled-tasks-persistence-review" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson &rarr;
            </Link>          </div>
        </div>
      </section>
<Footer />
    </main>
  );
}
