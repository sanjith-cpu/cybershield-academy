import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Review Windows Server DNS zones, records, forwarders, interfaces, recursion, dynamic updates, and transfer settings safely.",
  "Explain why DNS is especially important on an Active Directory domain controller.",
  "Use DNS Manager, Event Viewer, PowerShell, and client-side resolution tests to inspect DNS without deleting records blindly.",
  "Recognize suspicious or overly broad DNS settings while preserving required name resolution.",
  "Distinguish between forward lookup zones, reverse lookup zones, conditional forwarding, recursion, and zone transfers.",
  "Verify DNS from an authorized client after any DNS configuration change.",
];

const coreConcepts = [
  {
    title: "Zone",
    text:
      "A DNS administrative boundary containing records for a namespace, such as a domain or reverse-lookup network.",
  },
  {
    title: "Resource record",
    text:
      "A DNS entry such as A, AAAA, CNAME, MX, NS, PTR, or SRV that maps names to addresses, services, or other DNS information.",
  },
  {
    title: "Forwarder",
    text:
      "A DNS server that receives queries this server cannot answer locally and attempts to resolve them on its behalf.",
  },
  {
    title: "Recursion",
    text:
      "The process of resolving a DNS query by contacting other DNS servers until an answer is found.",
  },
  {
    title: "Dynamic update",
    text:
      "Allows authorized clients or services to create or update DNS records automatically instead of relying only on manual changes.",
  },
  {
    title: "Zone transfer",
    text:
      "Copies DNS zone data to another DNS server, usually for an authorized secondary-server relationship.",
  },
];

const toolPaths = [
  {
    title: "DNS Manager",
    path:
      "Server Manager → Tools → DNS",
    shortcut:
      "Win + R → dnsmgmt.msc",
    note:
      "Primary GUI for reviewing DNS servers, zones, records, forwarders, server interfaces, recursion-related settings, and zone transfers.",
  },
  {
    title: "Forward Lookup Zones",
    path:
      "DNS Manager → server → Forward Lookup Zones",
    shortcut:
      "Expand the required zone and inspect records.",
    note:
      "Review the zone that supports the scenario-required domain or application namespace.",
  },
  {
    title: "Reverse Lookup Zones",
    path:
      "DNS Manager → server → Reverse Lookup Zones",
    shortcut:
      "Review PTR records when reverse resolution is part of the environment.",
    note:
      "Reverse zones may be useful for logging, troubleshooting, and applications, but not every environment requires every reverse zone.",
  },
  {
    title: "Server properties",
    path:
      "DNS Manager → right-click the DNS server → Properties",
    shortcut:
      "Review Interfaces, Forwarders, Advanced, Monitoring, and other applicable tabs.",
    note:
      "Server-wide settings can affect every zone and client using the DNS server.",
  },
  {
    title: "Zone properties",
    path:
      "DNS Manager → right-click the zone → Properties",
    shortcut:
      "Review General, Name Servers, Zone Transfers, and applicable security settings.",
    note:
      "Zone-level changes can affect domain registration, replication, secondary servers, and client resolution.",
  },
  {
    title: "Event Viewer",
    path:
      "Event Viewer → Applications and Services Logs → DNS Server",
    shortcut:
      "Review recent DNS Server warnings and errors.",
    note:
      "Event evidence helps explain service failures, loading problems, update issues, and some configuration changes.",
  },
  {
    title: "PowerShell",
    path:
      "Start → search PowerShell → Run as administrator when required",
    shortcut:
      "Use DNS Server cmdlets for read-only inspection.",
    note:
      "Cmdlets such as Get-DnsServerZone, Get-DnsServerResourceRecord, Get-DnsServerForwarder, and Get-DnsServerRecursion are useful when the DNS role tools are installed.",
  },
];

const adDnsRelationship = [
  {
    title: "Domain discovery",
    text:
      "Active Directory clients use DNS to locate domain controllers and directory services.",
  },
  {
    title: "SRV records",
    text:
      "Service records help clients find LDAP, Kerberos, Global Catalog, and other domain services.",
  },
  {
    title: "Domain controller registration",
    text:
      "Domain controllers register important DNS records automatically when DNS and Netlogon-related functions are healthy.",
  },
  {
    title: "Group Policy",
    text:
      "Domain clients normally need working DNS to find domain controllers and retrieve Group Policy reliably.",
  },
  {
    title: "Authentication",
    text:
      "Broken DNS can appear to be an authentication problem because clients cannot locate the correct domain services.",
  },
  {
    title: "Replication",
    text:
      "DNS problems can interfere with communication between domain controllers and other infrastructure components.",
  },
];

const recordTypes = [
  {
    type: "A",
    purpose:
      "Maps an IPv4 hostname to an IPv4 address.",
    review:
      "Check whether the hostname and address match the required system.",
  },
  {
    type: "AAAA",
    purpose:
      "Maps an IPv6 hostname to an IPv6 address.",
    review:
      "Confirm the record is intentional if IPv6 is part of the environment.",
  },
  {
    type: "CNAME",
    purpose:
      "Creates an alias that points one DNS name to another canonical name.",
    review:
      "Verify the alias still points to an authorized, required host.",
  },
  {
    type: "MX",
    purpose:
      "Identifies mail servers for a domain.",
    review:
      "Review only when mail service is part of the authorized environment.",
  },
  {
    type: "NS",
    purpose:
      "Identifies authoritative DNS servers for a zone.",
    review:
      "Unexpected name-server entries deserve investigation.",
  },
  {
    type: "PTR",
    purpose:
      "Maps an IP address back to a hostname in a reverse lookup zone.",
    review:
      "Useful for reverse resolution and troubleshooting.",
  },
  {
    type: "SRV",
    purpose:
      "Publishes the location of services, including important Active Directory services.",
    review:
      "On a domain controller, do not delete unfamiliar SRV records without understanding their AD role.",
  },
];

const zoneReviewQuestions = [
  "Is this zone required by the scenario?",
  "Is the zone Active Directory-integrated, primary, secondary, or another supported type?",
  "Which DNS servers are authoritative for the zone?",
  "Are dynamic updates enabled, disabled, or restricted?",
  "Are zone transfers enabled?",
  "If transfers are enabled, which servers are authorized to receive them?",
  "Are there unexpected or duplicate A, CNAME, NS, MX, PTR, or SRV records?",
  "Are stale-looking records actually unused, or do clients/services still depend on them?",
  "Does aging/scavenging apply to this zone?",
  "How will required names be tested after a change?",
];

const serverReviewQuestions = [
  "Which network interfaces is DNS listening on?",
  "Which forwarders are configured?",
  "Is recursion required for the clients using this server?",
  "Is this server exposed to networks that should not use it recursively?",
  "Does the firewall allow only the DNS traffic the server role requires?",
  "Is the DNS Server service running?",
  "Does the server use root hints, forwarders, or both for external resolution?",
  "Are conditional forwarders configured for any required internal namespace?",
  "Is the server also an Active Directory domain controller?",
  "What client-side tests prove the server is resolving names correctly?",
];

const powershellChecks = [
  {
    label: "DNS service state",
    command:
      'Get-Service -Name "DNS"',
    purpose:
      "Shows whether the DNS Server service is running.",
  },
  {
    label: "DNS zones",
    command:
      "Get-DnsServerZone | Select-Object ZoneName, ZoneType, IsDsIntegrated, IsReverseLookupZone, DynamicUpdate",
    purpose:
      "Inventories DNS zones and shows useful zone-type and dynamic-update information.",
  },
  {
    label: "Zone records",
    command:
      'Get-DnsServerResourceRecord -ZoneName "example.local" | Select-Object HostName, RecordType, TimeStamp, RecordData',
    purpose:
      "Lists records in a selected zone. Replace example.local with the authorized zone.",
  },
  {
    label: "Forwarders",
    command:
      "Get-DnsServerForwarder",
    purpose:
      "Shows the DNS servers used as forwarders.",
  },
  {
    label: "Recursion",
    command:
      "Get-DnsServerRecursion",
    purpose:
      "Shows recursion-related DNS server configuration.",
  },
  {
    label: "DNS server interfaces",
    command:
      "Get-DnsServerSetting -All | Select-Object -ExpandProperty ListeningIpAddress",
    purpose:
      "Shows configured DNS listening addresses when supported by the installed DNS Server module.",
  },
  {
    label: "DNS Server events",
    command:
      "Get-WinEvent -LogName 'DNS Server' -MaxEvents 40 | Select-Object TimeCreated, Id, LevelDisplayName, Message",
    purpose:
      "Reviews recent DNS Server events for warnings, errors, and operational clues.",
  },
  {
    label: "Client-style resolution test",
    command:
      'Resolve-DnsName "host.example.local" -Server "dns-server-name"',
    purpose:
      "Tests a specific name against the intended DNS server. Replace the example values with the authorized target.",
  },
];

const dynamicUpdates = [
  {
    title: "None",
    text:
      "Records are managed manually. This can reduce automatic changes but may not fit environments that rely on dynamic registration.",
  },
  {
    title: "Nonsecure and secure",
    text:
      "Allows a broader set of dynamic updates and can be riskier because unauthorized changes may be easier.",
  },
  {
    title: "Secure only",
    text:
      "Available for Active Directory-integrated zones and uses domain security to control dynamic updates.",
  },
  {
    title: "Role-first decision",
    text:
      "Do not change dynamic-update mode without considering domain clients, DHCP integration, server registration, and the scenario.",
  },
];

const transferReview = [
  {
    title: "Transfers disabled",
    text:
      "Appropriate when no authorized secondary DNS server requires a copy of the zone.",
  },
  {
    title: "Authorized secondary servers",
    text:
      "If transfers are required, limit them to the DNS servers that actually need the zone.",
  },
  {
    title: "Broad transfer exposure",
    text:
      "Allowing zone transfers to arbitrary hosts can reveal the zone's records and internal naming structure.",
  },
  {
    title: "Do not break redundancy",
    text:
      "Disabling transfers can break legitimate secondary DNS if the design depends on them.",
  },
];

const forwarderReview = [
  {
    title: "Known resolver",
    text:
      "Each forwarder should have an understood purpose and belong to the authorized environment or approved upstream resolver.",
  },
  {
    title: "Unexpected address",
    text:
      "An unknown forwarder can redirect unresolved queries and deserves investigation.",
  },
  {
    title: "Conditional forwarder",
    text:
      "Routes queries for a specific DNS namespace to designated DNS servers and may be required for trusts or partner namespaces.",
  },
  {
    title: "Forwarder failure",
    text:
      "If a forwarder is unreachable, clients may experience slow or failed external resolution depending on server configuration.",
  },
];

const recursionGuidance = [
  {
    title: "Internal recursive resolver",
    text:
      "Many internal DNS servers need recursion so clients can resolve names outside locally hosted zones.",
  },
  {
    title: "Open recursion risk",
    text:
      "Providing recursion to untrusted networks can create unnecessary exposure and may allow abuse.",
  },
  {
    title: "Do not disable blindly",
    text:
      "Turning off recursion can break ordinary client resolution even when authoritative zones still work.",
  },
  {
    title: "Use network boundaries",
    text:
      "Firewall scope, interfaces, and network design can help limit who can query the server.",
  },
];

const agingScavenging = [
  {
    title: "Aging",
    text:
      "Tracks eligible dynamically registered records over time so stale records can eventually be identified.",
  },
  {
    title: "Scavenging",
    text:
      "Removes eligible stale records according to configured aging and scavenging behavior.",
  },
  {
    title: "Static records",
    text:
      "Static records are generally treated differently from dynamically timestamped records and should not be assumed stale just because they are old.",
  },
  {
    title: "Caution",
    text:
      "Aggressive scavenging can delete still-needed records if the environment is not configured correctly.",
  },
];

const suspiciousSignals = [
  {
    title: "Unknown forwarder",
    text:
      "A resolver outside the expected environment may redirect DNS queries or create an unnecessary dependency.",
  },
  {
    title: "Unexpected NS record",
    text:
      "An unfamiliar authoritative DNS server in the zone deserves investigation.",
  },
  {
    title: "Broad zone transfer",
    text:
      "Transfers allowed to any server expose zone data more broadly than necessary.",
  },
  {
    title: "Unusual host record",
    text:
      "A new A or CNAME record pointing a trusted name to an unexpected system should be investigated.",
  },
  {
    title: "Duplicate conflicting records",
    text:
      "Multiple records for the same name can cause intermittent or misleading resolution behavior.",
  },
  {
    title: "DNS listening on unnecessary interfaces",
    text:
      "The server may be reachable from networks that should not use the DNS service.",
  },
];

const troubleshooting = [
  {
    symptom: "Clients cannot resolve the Active Directory domain.",
    checks:
      "Confirm clients use the intended DNS server, verify the DNS service, inspect the AD-integrated zone and SRV records, test domain-name resolution, and review DNS Server events.",
  },
  {
    symptom: "Internal names resolve but Internet names do not.",
    checks:
      "Review forwarders, recursion, root-hint behavior, firewall/network reachability, and whether the server is intended to resolve external names.",
  },
  {
    symptom: "One hostname resolves to the wrong address.",
    checks:
      "Inspect A/AAAA/CNAME records, duplicate entries, dynamic-update history, client cache, DNS server cache, and whether the application recently moved.",
  },
  {
    symptom: "A DNS setting returns after being changed.",
    checks:
      "Active Directory replication, automation, Group Policy, DHCP registration, or management tooling may be restoring the setting or record.",
  },
  {
    symptom: "DNS works on the server but not from clients.",
    checks:
      "Review firewall scope, listening interfaces, client DNS settings, routing, network profile, and whether queries are reaching the server.",
  },
  {
    symptom: "Zone transfer to an authorized secondary fails.",
    checks:
      "Review Zone Transfers settings, authorized name servers, firewall/network access, secondary-server configuration, and DNS Server events.",
  },
];

const clientVerification = [
  {
    title: "Resolve the domain",
    command:
      "Resolve-DnsName example.local",
    purpose:
      "Confirms the client can resolve the required domain namespace.",
  },
  {
    title: "Resolve a required host",
    command:
      "Resolve-DnsName filesrv.example.local",
    purpose:
      "Confirms a required host record resolves to the expected address.",
  },
  {
    title: "Query a specific DNS server",
    command:
      "nslookup filesrv.example.local dns-server-name",
    purpose:
      "Tests the intended DNS server directly.",
  },
  {
    title: "Check an AD service record",
    command:
      "nslookup -type=SRV _ldap._tcp.dc._msdcs.example.local",
    purpose:
      "On an Active Directory domain, helps confirm expected LDAP domain-controller discovery records exist.",
  },
];

const changeDiscipline = [
  "Read the scenario and identify required DNS namespaces.",
  "Record the DNS server role and whether the server is a domain controller.",
  "Record existing zones, forwarders, interfaces, and transfer settings.",
  "Record the specific DNS record before changing it.",
  "Confirm whether DHCP, AD, applications, or clients update the record dynamically.",
  "Change one DNS setting or record at a time.",
  "Avoid deleting unfamiliar SRV or infrastructure records blindly.",
  "Verify internal name resolution.",
  "Verify required external or forwarded resolution when applicable.",
  "Verify from an authorized client, not only from the DNS server itself.",
];

const decisionCases = [
  {
    title: "Unknown forwarder appears",
    evidence:
      "The DNS server forwards unresolved queries to an address not listed in the scenario documentation.",
    reasoning:
      "The address may be unauthorized, but removing it immediately could also break external resolution if it is legitimate.",
    response:
      "Identify the owner and network location of the forwarder, compare it with authorized architecture, test current resolution, then replace or remove it only when justified.",
  },
  {
    title: "Zone transfers are allowed broadly",
    evidence:
      "A required internal zone permits transfers to servers beyond the known secondary DNS hosts.",
    reasoning:
      "The zone is required, but transfer scope is broader than necessary.",
    response:
      "Identify legitimate secondary servers, preserve required redundancy, and restrict transfers to authorized systems.",
  },
  {
    title: "Student wants to delete unfamiliar SRV records",
    evidence:
      "The records contain names such as _ldap and _kerberos.",
    reasoning:
      "These records are normal and important in Active Directory environments.",
    response:
      "Preserve them, confirm domain-controller registration and resolution, and investigate only records that conflict with the actual AD design.",
  },
  {
    title: "DNS listens on an unused network interface",
    evidence:
      "The server has multiple interfaces but only one network should use the DNS role.",
    reasoning:
      "Listening on unnecessary interfaces may broaden exposure.",
    response:
      "Confirm no required clients or replication path uses the interface, then restrict DNS listening only if the server role and network design support it.",
  },
];

const labSteps = [
  {
    number: "01",
    title: "Read the fictional requirement",
    text:
      "DC-PRACTICE is the required Active Directory domain controller and DNS server for CYBERSHIELD.LOCAL. Clients must resolve domain names and one approved external update site.",
  },
  {
    number: "02",
    title: "Inventory zones and server settings",
    text:
      "Open DNS Manager and use PowerShell to record zones, forwarders, recursion state, listening interfaces, and the DNS service state.",
  },
  {
    number: "03",
    title: "Review the domain zone",
    text:
      "Inspect A, CNAME, NS, and SRV records. Preserve expected Active Directory records and identify one suspicious duplicate A record.",
  },
  {
    number: "04",
    title: "Review forwarders and transfers",
    text:
      "One approved forwarder is documented. A second unknown forwarder exists. Zone transfers are enabled more broadly than the known secondary-server design requires.",
  },
  {
    number: "05",
    title: "Harden narrowly",
    text:
      "Preserve the required forwarder and legitimate zone-transfer target, remove only clearly unauthorized configuration, and correct the duplicate record after confirming the intended address.",
  },
  {
    number: "06",
    title: "Verify from a client",
    text:
      "Confirm domain resolution, a required host, Active Directory SRV records, and the approved external update site all resolve correctly.",
  },
];

const mistakes = [
  {
    title: "Deleting unfamiliar SRV records",
    text:
      "Active Directory relies on SRV records that may look strange to students who have only worked with A records.",
  },
  {
    title: "Disabling recursion blindly",
    text:
      "Clients may lose the ability to resolve names outside locally hosted zones.",
  },
  {
    title: "Removing every forwarder",
    text:
      "Required external resolution or partner-domain lookups may depend on them.",
  },
  {
    title: "Allowing zone transfers to everyone",
    text:
      "Broad transfer access exposes zone information unnecessarily.",
  },
  {
    title: "Deleting stale-looking records without dependency checks",
    text:
      "Servers, applications, or static infrastructure may still rely on old-looking records.",
  },
  {
    title: "Testing only on the DNS server",
    text:
      "The server can resolve locally while clients fail because of firewall, interface, or client-configuration problems.",
  },
];

const verification = [
  "The DNS Server service is running.",
  "Required forward lookup zones are present.",
  "Required reverse zones remain intact when applicable.",
  "Expected Active Directory SRV records remain available.",
  "Forwarders match the authorized environment.",
  "Zone transfers are limited to required secondary servers when transfers are used.",
  "Dynamic-update mode matches the zone design and scenario.",
  "DNS listens only on intended interfaces when interface restriction is used.",
  "Required internal names resolve from an authorized client.",
  "Required external or conditional-forwarded names resolve when applicable.",
];

const checklist = [
  "Open DNS Manager or dnsmgmt.msc.",
  "Review Forward Lookup Zones.",
  "Review Reverse Lookup Zones when applicable.",
  "Review server Interfaces.",
  "Review Forwarders.",
  "Review recursion behavior.",
  "Review zone dynamic updates.",
  "Review zone transfers and name servers.",
  "Inspect important A, CNAME, NS, PTR, and SRV records.",
  "Check DNS Server events.",
  "Use Resolve-DnsName or nslookup for verification.",
  "Verify from an authorized client after every major DNS change.",
];

const reflection = [
  "Why is DNS especially important to Active Directory?",
  "Why should unfamiliar SRV records not be deleted automatically?",
  "When can a forwarder be both useful and risky?",
  "Why can open recursion create unnecessary exposure?",
  "What is the difference between dynamic updates and zone transfers?",
  "What should be tested from a client after changing DNS settings?",
];

export default function DnsServerSecurityReviewPage() {
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
            <Link href="/cyberpatriot/windows-server/rdp-winrm-remote-administration" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
&larr; Previous Lesson
            </Link>            <Link href="/cyberpatriot/windows-server/dhcp-server-security-review" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson &rarr;
            </Link>          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Windows Server · Lesson 13
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                DNS Server Security Review
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Review DNS zones, records, forwarders, recursion, interfaces,
                dynamic updates, and zone transfers while preserving the name
                resolution Active Directory and required services depend on.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                DNS hardening is not about deleting unfamiliar records. It is
                about understanding which names and services must resolve, then
                reducing only the exposure that is clearly unnecessary.
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
                  <span className="font-bold text-white">dnsmgmt.msc</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>AD concern</span>
                  <span className="font-bold text-white">SRV + discovery</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Goal</span>
                  <span className="font-bold text-white">Resolve + restrict</span>
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
          Know what part of DNS you are reviewing
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
              DNS is infrastructure, not just a list of hostnames
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              On a Windows domain, authentication, Group Policy, domain
              discovery, and many applications depend on correct DNS behavior.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Active Directory warning
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Unfamiliar SRV records may be essential
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Records containing names such as _ldap, _kerberos, and _msdcs are
              normal in Active Directory environments.
            </p>
            <div className="mt-5 rounded-xl border border-red-400/25 bg-red-400/10 p-4 text-sm leading-6 text-red-100">
              Do not delete DNS records simply because their names look unusual.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Tool map
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Exactly where to review DNS
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
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            DNS and Active Directory
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Why broken DNS can look like a broken domain
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {adDnsRelationship.map((item) => (
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
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
          Record types
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Understand what each record is doing before editing it
        </h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {recordTypes.map((item) => (
            <div
              key={item.type}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <p className="text-sm font-black uppercase tracking-[0.18em] text-cyan-300">
                {item.type}
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.purpose}</p>
              <div className="mt-4 rounded-xl border border-cyan-400/20 bg-cyan-400/5 p-4">
                <p className="text-sm leading-6 text-slate-400">{item.review}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Zone review
            </p>
            <h2 className="mt-2 text-3xl font-black text-white">
              Ten questions before changing a zone
            </h2>
            <div className="mt-7 grid gap-3">
              {zoneReviewQuestions.map((item, index) => (
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
              Ten questions before changing server-wide DNS
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
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            PowerShell inspection
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Inventory DNS without changing it
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
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
          Dynamic updates
        </p>
        <h2 className="mt-2 text-3xl font-black text-white">
          Automatic registration should match the zone design
        </h2>
        <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {dynamicUpdates.map((item) => (
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
              Zone transfers
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Share zone data only with authorized DNS servers
            </h2>
            <div className="mt-6 grid gap-4">
              {transferReview.map((item) => (
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

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Forwarders
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Know where unresolved queries are being sent
            </h2>
            <div className="mt-6 grid gap-4">
              {forwarderReview.map((item) => (
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
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Recursion
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Resolve what clients need without becoming an open resolver
            </h2>
            <div className="mt-6 grid gap-4">
              {recursionGuidance.map((item) => (
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
              Aging and scavenging
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Stale-record cleanup needs careful timing
            </h2>
            <div className="mt-6 grid gap-4">
              {agingScavenging.map((item) => (
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
          DNS settings that deserve deeper investigation
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
            When DNS resolution does not match expectations
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
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Client verification
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Prove the DNS server works from the client side
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
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
            Ten steps for controlled DNS hardening
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
            DNS decisions in server context
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
            Review DNS on DC-PRACTICE
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
          DNS mistakes that can break the domain
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
              Test your DNS reasoning
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
              Confirm DNS and domain discovery still work
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
            Before leaving DNS review
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
                DHCP Server Security Review
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
                Next, review DHCP authorization, scopes, leases, reservations,
                options, exclusions, bindings, audit logs, and the network
                dependencies that keep clients configured correctly.
              </p>
            </div>

            <Link
              href="/cyberpatriot/windows-server/dhcp-server-security-review"
              className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-center text-sm font-bold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15"
            >
              Open Lesson 14 &rarr;
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
            <Link href="/cyberpatriot/windows-server/rdp-winrm-remote-administration" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
&larr; Previous Lesson
            </Link>            <Link href="/cyberpatriot/windows-server/dhcp-server-security-review" className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/15">
              Next Lesson &rarr;
            </Link>          </div>
        </div>
      </section>
<Footer />
    </main>
  );
}
