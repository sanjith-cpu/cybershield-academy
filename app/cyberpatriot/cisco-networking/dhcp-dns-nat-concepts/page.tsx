import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain the roles of DHCP, DNS, and NAT in an IPv4 network.",
  "Trace how a client gets an address, resolves a name, and reaches a remote service.",
  "Understand DHCP relay, DNS resolution, and common NAT terminology.",
  "Inspect Cisco DHCP and NAT state safely before changing configuration.",
  "Separate service failures from VLAN, routing, ACL, and application problems.",
  "Verify required connectivity end to end before saving.",
];

const concepts = [
  ["DHCP", "Automatically supplies clients with IPv4 configuration such as address, mask, gateway, DNS server, and lease information."],
  ["DNS", "Translates names into IP addresses so applications can locate services."],
  ["NAT", "Changes IPv4 address representation as traffic crosses a translation boundary."],
  ["DHCP relay", "Forwards DHCP messages between clients and a server on another subnet."],
  ["Resolver", "The client-side component that asks a DNS server to resolve a name."],
  ["Translation table", "Shows how NAT is currently mapping inside addresses to outside-facing representations."],
];

const serviceChain = [
  ["01", "Join the VLAN", "The endpoint first needs a working switchport and correct VLAN."],
  ["02", "Receive addressing", "DHCP or static configuration provides IP, mask, gateway, and DNS."],
  ["03", "Resolve a name", "If the application uses a hostname, the client asks its DNS resolver."],
  ["04", "Route the packet", "Remote traffic moves toward the default gateway and through the routing table."],
  ["05", "Translate if required", "At a NAT boundary, matching traffic may receive an inside-global representation."],
  ["06", "Return successfully", "Routing, ACLs, NAT state, and endpoint policy must allow the response back."],
];

const dora = [
  ["Discover", "Client searches for a DHCP server."],
  ["Offer", "Server offers an address and lease options."],
  ["Request", "Client requests the offered configuration."],
  ["Acknowledge", "Server confirms the lease."],
];

const dhcpOptions = [
  ["IPv4 address", "Identifies the client on its subnet."],
  ["Subnet mask", "Defines the local network boundary."],
  ["Default gateway", "Provides the next hop for remote destinations."],
  ["DNS server", "Tells the client where to send name queries."],
  ["Lease time", "Defines how long the client may use the assignment before renewal."],
  ["Domain information", "May provide a local suffix or related DNS information."],
];

const dhcpCommands = [
  ["show ip dhcp pool", "Review configured IOS DHCP pools and utilization."],
  ["show ip dhcp binding", "Review active DHCP bindings."],
  ["show ip dhcp conflict", "Review detected DHCP address conflicts where supported."],
  ["show running-config | section dhcp", "Inspect DHCP pool and exclusion configuration."],
  ["show running-config interface <interface>", "Check for ip helper-address on the client gateway."],
  ["show ip interface brief", "Confirm the relay or gateway interface is operational."],
];

const dhcpConfig = [
  ["01", "Reserve infrastructure addresses", ["configure terminal", "ip dhcp excluded-address 192.168.10.1 192.168.10.20"]],
  ["02", "Create the Staff pool", ["ip dhcp pool STAFF", "network 192.168.10.0 255.255.255.0"]],
  ["03", "Set the gateway", ["default-router 192.168.10.1"]],
  ["04", "Set DNS", ["dns-server 192.168.30.53"]],
  ["05", "Verify", ["end", "show ip dhcp pool", "show ip dhcp binding"]],
];

const relayConcepts = [
  ["DHCP begins with broadcast behavior", "A new client may not know the server address yet."],
  ["Routers normally stop broadcasts", "A server on another subnet therefore needs relay behavior."],
  ["ip helper-address provides relay", "Cisco IOS can forward selected UDP broadcasts toward a configured server."],
  ["Relay belongs on the client gateway", "Place the helper where client broadcasts arrive."],
  ["Routing still matters", "The relay must reach the DHCP server and replies must return."],
  ["One missing helper can break one VLAN", "Compare gateway interfaces when only one VLAN cannot obtain leases."],
];

const dhcpSymptoms = [
  ["Client gets a 169.254.x.x address", "Check VLAN, DHCP server, helper-address, pool availability, and server reachability."],
  ["VLAN 10 works but VLAN 20 has no leases", "Compare VLAN 20 helper-address, scope, gateway interface, and routing."],
  ["Client receives an address from the wrong subnet", "Check access VLAN, relay path, scopes, and any unintended DHCP source."],
  ["Client gets IP but no gateway", "Inspect the DHCP default-router option."],
  ["Client gets IP and gateway but no DNS", "Inspect the DHCP DNS-server option."],
  ["Pool is exhausted", "Review exclusions, lease use, unexpected clients, and subnet sizing."],
];

const dnsConcepts = [
  ["Resolver", "Sends the client's DNS questions to a configured server."],
  ["Recursive server", "Obtains the final answer for the client when configured to do so."],
  ["Authoritative server", "Hosts official records for a DNS zone."],
  ["A record", "Maps a hostname to an IPv4 address."],
  ["CNAME", "Maps one DNS name to another DNS name."],
  ["PTR", "Supports reverse lookup from IP address to name when configured."],
];

const dnsFlow = [
  ["01", "Application asks for a name", "Example: portal.example."],
  ["02", "Client checks local information", "Cache or local host information may be checked first."],
  ["03", "Resolver queries DNS", "The request goes to the configured resolver."],
  ["04", "DNS returns an answer", "The client receives an address, another record, or an error."],
  ["05", "Application uses the returned IP", "Routing, ACLs, NAT, and service state now determine success."],
];

const dnsTests = [
  ["Test a known IP directly", "If IP works but the hostname fails, DNS becomes more likely."],
  ["Query the configured DNS server", "Use nslookup or another available resolver tool."],
  ["Check the DHCP-provided DNS address", "A correct lease can still contain the wrong resolver."],
  ["Check UDP and TCP 53 policy", "DNS commonly uses UDP and can also require TCP."],
  ["Compare answer to expected server IP", "Successful DNS can still return a stale or incorrect address."],
  ["Test by IP and by name", "The difference separates name resolution from application reachability."],
];

const dnsCisco = [
  ["show running-config | include name-server", "Review configured DNS resolver addresses on IOS where used."],
  ["show hosts", "Review cached or configured hostname information where supported."],
  ["show running-config | include domain", "Review domain-related device configuration."],
  ["ping <dns-server-ip>", "Confirm IP reachability before blaming name resolution."],
];

const natTerms = [
  ["Inside local", "The inside host address as it exists on the internal network."],
  ["Inside global", "The address representing that inside host toward the outside."],
  ["Outside global", "The outside host address as it exists in the global network."],
  ["Outside local", "The outside host address as represented to the inside; often the same as outside global."],
];

const natTypes = [
  ["Static NAT", "Fixed one-to-one mapping.", "Useful when one internal host needs a predictable translated address."],
  ["Dynamic NAT", "Chooses an address from a translation pool.", "Useful when inside hosts temporarily consume available global addresses."],
  ["PAT / overload", "Many inside hosts share one or a few global addresses by also tracking transport identifiers.", "Common for outbound access from private networks."],
];

const natCommands = [
  ["show ip nat translations", "Display active translation entries."],
  ["show ip nat statistics", "Review translation counts and inside/outside interface roles."],
  ["show running-config | include ip nat", "Locate NAT-related configuration."],
  ["show running-config interface <interface>", "Verify ip nat inside or ip nat outside placement."],
  ["show access-lists", "Review ACLs used to classify translated traffic."],
  ["show ip route", "Verify routing before concluding NAT is the problem."],
];

const patConfig = [
  ["01", "Classify Staff addresses", ["configure terminal", "access-list 1 permit 192.168.10.0 0.0.0.255"]],
  ["02", "Mark the inside", ["interface GigabitEthernet0/0", "ip nat inside"]],
  ["03", "Mark the outside", ["interface GigabitEthernet0/1", "ip nat outside"]],
  ["04", "Enable overload", ["exit", "ip nat inside source list 1 interface GigabitEthernet0/1 overload", "end"]],
  ["05", "Verify with authorized traffic", ["show ip nat translations", "show ip nat statistics"]],
];

const natPath = [
  ["01", "Inside host sends remote traffic", "The packet leaves a private subnet toward the edge router."],
  ["02", "Routing selects the outside path", "The router still needs a valid route."],
  ["03", "Traffic matches NAT classification", "An ACL, route-map, or static mapping identifies eligible traffic."],
  ["04", "Translation is created or used", "Inside-local information is represented by an inside-global address."],
  ["05", "Return traffic arrives", "The edge router matches it to translation state."],
  ["06", "Inside destination is restored", "The packet is translated back and routed toward the internal host."],
];

const natSymptoms = [
  ["No translation appears", "Check matching traffic, NAT ACL, inside/outside roles, routing, and interface state."],
  ["Translations appear but outside traffic fails", "Check upstream route, return path, ACLs, and remote service state."],
  ["Only one subnet translates", "Check whether the NAT classification intentionally includes the other subnet."],
  ["Static mapping exists but inbound service fails", "Check outside reachability, ACLs, server service, mapping, and return route."],
  ["Wrong interface roles appear in statistics", "Compare ip nat inside/outside to the actual topology."],
  ["Private host reaches internal but not outside networks", "Check default route, NAT classification, outside interface, and upstream path."],
];

const privateRanges = [
  ["10.0.0.0/8", "Private IPv4 range."],
  ["172.16.0.0/12", "Private IPv4 range from 172.16.0.0 through 172.31.255.255."],
  ["192.168.0.0/16", "Private IPv4 range common in labs and smaller networks."],
];

const troubleshooting = [
  ["1. Link", "Are endpoint, switch, router, and server interfaces operational?"],
  ["2. VLAN", "Is the client in the correct VLAN and can it reach its gateway?"],
  ["3. Addressing", "Does the client have the correct IP, mask, gateway, and DNS server?"],
  ["4. Routing", "Can the network reach the DHCP/DNS server and outside path?"],
  ["5. Policy", "Do ACLs permit DHCP, DNS, and the required application?"],
  ["6. NAT", "If required, does traffic match translation and create the expected entry?"],
  ["7. Application", "Does the actual destination service respond?"],
];

const reasoning = [
  ["Client has no address in VLAN 20", "Changing NAT is unrelated.", "Start with VLAN 20, DHCP scope or relay, gateway interface, and server reachability."],
  ["Client can ping 192.168.30.10 but portal.example fails", "Routing is not necessarily broken.", "Check DNS configuration and whether the name resolves to the expected server."],
  ["NAT table is empty", "Do not rebuild NAT immediately.", "Generate authorized matching traffic and verify routing, interface roles, and classification first."],
  ["Only Staff gets DHCP leases", "Do not replace the whole DHCP server.", "Compare Student helper-address, pool, gateway, and routing."],
  ["DNS ACL permits only UDP 53", "Do not assume DNS can never need TCP.", "Verify whether TCP 53 is required in the environment."],
  ["PAT exists but outbound browsing fails", "Do not add duplicate overload rules.", "Check default route, NAT match criteria, outside path, ACLs, and upstream reachability."],
];

const unsafe = [
  ["Creating overlapping DHCP pools", "Can produce duplicate or incorrect client addressing."],
  ["Adding helper-address to random interfaces", "Can relay the wrong networks and hide the real gateway design."],
  ["Changing DNS because raw IP reachability fails", "DNS is not required for direct IP connectivity."],
  ["Clearing NAT translations before documenting them", "Removes useful evidence about matching traffic."],
  ["Marking the wrong NAT inside/outside interfaces", "Can prevent or misdirect translation."],
  ["Using NAT to hide missing routes", "Translation does not replace routing."],
];

const verification = [
  ["DHCP lease", "Client receives the expected IP, mask, gateway, DNS server, and lease."],
  ["DHCP relay", "Remote VLANs use the correct helper address and route to the server."],
  ["DNS", "The configured resolver returns the expected address for the required hostname."],
  ["Routing", "Required internal and outside destinations are reachable before NAT conclusions are made."],
  ["NAT roles", "Interfaces are correctly marked inside and outside."],
  ["NAT match", "Only intended traffic matches the translation rule."],
  ["Translations", "Expected entries appear during authorized test traffic."],
  ["Application", "The required service works by IP and by name where appropriate."],
];

const lab = [
  ["01", "Build a fictional network with Staff VLAN 10, Student VLAN 20, Server VLAN 30, a DHCP/DNS server, and an edge router."],
  ["02", "Verify VLANs, inter-VLAN routing, and direct IP reachability before configuring relay or NAT."],
  ["03", "Create Staff and Student DHCP scopes and configure the proper helpers on the client VLAN gateways."],
  ["04", "Verify both clients receive the intended address, gateway, and DNS server."],
  ["05", "Create a fictional DNS record for portal.example and verify resolution."],
  ["06", "Configure PAT for Staff toward the simulated outside interface and verify a translation appears."],
  ["07", "Introduce one fault such as a missing helper, wrong DNS option, wrong NAT role, or incomplete NAT ACL."],
  ["08", "Use layered evidence to identify and correct only that fault, then retest each dependency."],
];

const checklist = [
  "I can explain DHCP, DNS, and NAT separately.",
  "I understand DHCP Discover, Offer, Request, and Acknowledge.",
  "I know what ip helper-address does.",
  "I can explain why one VLAN can lose DHCP while another still works.",
  "I can separate DNS failure from basic IP-connectivity failure.",
  "I know DNS can use UDP and TCP port 53.",
  "I understand static NAT, dynamic NAT, and PAT.",
  "I can identify NAT inside and outside roles.",
  "I know routing must work before NAT can create a successful end-to-end path.",
  "I inspect NAT state before changing translation rules.",
  "I do not use DNS or NAT changes to hide unrelated routing problems.",
  "I verify the actual application after every dependency passes.",
];

const reflection = [
  "Why can one VLAN receive DHCP while another cannot?",
  "How does ip helper-address allow a remote DHCP server to serve another subnet?",
  "Why does access by IP but not by hostname point toward DNS?",
  "What is the difference between inside local and inside global?",
  "Why can a correct NAT rule still fail if routing is broken?",
  "What evidence should you collect before changing DHCP, DNS, or NAT?",
];

export default function DhcpDnsNatConceptsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/cisco-networking" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              Back to Cisco & Networking
            </Link>
            <Link href="/cyberpatriot" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              CyberPatriot Hub
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/cisco-networking/access-control-lists" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/cisco-networking/cisco-device-hardening-management-plane"
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
                Cisco & Networking · Lesson 14
              </p>
              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                DHCP, DNS & NAT Concepts
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Learn how clients receive addressing, resolve names, and cross
                translation boundaries without confusing service failures with
                VLAN, routing, ACL, or application problems.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Lesson Snapshot</p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex justify-between border-b border-slate-800 pb-3"><span>Services</span><span className="font-bold text-white">3</span></div>
                <div className="flex justify-between border-b border-slate-800 pb-3"><span>DHCP stages</span><span className="font-bold text-white">4</span></div>
                <div className="flex justify-between border-b border-slate-800 pb-3"><span>NAT types</span><span className="font-bold text-white">3</span></div>
                <div className="flex justify-between"><span>Main goal</span><span className="font-bold text-white">Separate dependencies</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Learning objectives</p>
          <h2 className="mt-3 text-3xl font-black text-white">Troubleshoot the whole service chain</h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {objectives.map((item, i) => (
              <div key={item} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                <span className="font-black text-cyan-300">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Core idea</p>
            <h2 className="mt-3 text-2xl font-black text-white">Three services, three different jobs</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              DHCP gives configuration, DNS translates names, and NAT changes
              address representation. Test each service independently.
            </p>
          </div>
          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">Competition warning</p>
            <h2 className="mt-3 text-2xl font-black text-white">Do not fix the wrong layer</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              A raw-IP failure is not a DNS problem, and an empty NAT table is
              not proof of broken NAT if no matching traffic crossed the router.
            </p>
          </div>
        </div>
      </section>

      {[
        ["Core concepts", "Know what each service actually does", concepts],
        ["End-to-end service chain", "Follow the client from link to application", serviceChain],
        ["DHCP DORA", "How a client receives a lease", dora],
        ["DHCP lease contents", "An address alone is not enough", dhcpOptions],
        ["Cisco DHCP inspection", "Inspect pools, bindings, conflicts, and relay", dhcpCommands],
      ].map(([label, title, items]) => (
        <section key={label as string} className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">{label as string}</p>
            <h2 className="mt-3 text-3xl font-black text-white">{title as string}</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {(items as string[][]).map((item) => (
                <div key={item[0]} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                  <h3 className="text-lg font-black text-white">{item[0]}</h3>
                  {item.length > 2 && <p className="mt-2 text-sm font-bold text-cyan-300">{item[1]}</p>}
                  <p className="mt-3 text-sm leading-7 text-slate-400">{item[item.length - 1]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">IOS DHCP pool</p>
          <h2 className="mt-3 text-3xl font-black text-white">Build a fictional Staff scope</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {dhcpConfig.map(([step, title, commands]) => (
              <div key={step as string} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <span className="text-sm font-black text-cyan-300">{step as string}</span>
                <h3 className="mt-3 font-black text-white">{title as string}</h3>
                <div className="mt-4 grid gap-2">
                  {(commands as string[]).map((command) => (
                    <code key={command} className="block overflow-x-auto text-sm text-cyan-200">{command}</code>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {[
        ["DHCP relay", "Carry client broadcasts toward a remote server", relayConcepts],
        ["DHCP troubleshooting", "Let the lease symptom narrow the problem", dhcpSymptoms],
        ["DNS concepts", "Name resolution is a separate service layer", dnsConcepts],
        ["DNS flow", "From hostname to application connection", dnsFlow],
        ["DNS troubleshooting", "Compare IP access with name-based access", dnsTests],
        ["Cisco DNS awareness", "Verify the resolver path before changing DNS", dnsCisco],
        ["NAT terminology", "Track address identity across the boundary", natTerms],
      ].map(([label, title, items]) => (
        <section key={label as string} className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">{label as string}</p>
            <h2 className="mt-3 text-3xl font-black text-white">{title as string}</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {(items as string[][]).map((item) => (
                <div key={item[0]} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                  <h3 className="text-lg font-black text-white">{item[0]}</h3>
                  {item.length > 2 && <p className="mt-2 text-sm font-bold text-cyan-300">{item[1]}</p>}
                  <p className="mt-3 text-sm leading-7 text-slate-400">{item[item.length - 1]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">NAT types</p>
          <h2 className="mt-3 text-3xl font-black text-white">Static, dynamic, and overload solve different needs</h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {natTypes.map(([type, behavior, use]) => (
              <div key={type} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
                <h3 className="text-xl font-black text-white">{type}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{behavior}</p>
                <div className="mt-4 rounded-xl border border-cyan-400/15 bg-cyan-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-300">Common use</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{use}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {[
        ["Private IPv4 awareness", "Common inside address space", privateRanges],
        ["Cisco NAT inspection", "Read translation state before changing it", natCommands],
      ].map(([label, title, items]) => (
        <section key={label as string} className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">{label as string}</p>
            <h2 className="mt-3 text-3xl font-black text-white">{title as string}</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {(items as string[][]).map((item) => (
                <div key={item[0]} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                  <code className="block overflow-x-auto text-sm font-bold text-cyan-200">{item[0]}</code>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{item[1]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">PAT configuration pattern</p>
          <h2 className="mt-3 text-3xl font-black text-white">Translate one fictional inside subnet outward</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {patConfig.map(([step, title, commands]) => (
              <div key={step as string} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <span className="text-sm font-black text-cyan-300">{step as string}</span>
                <h3 className="mt-3 font-black text-white">{title as string}</h3>
                <div className="mt-4 grid gap-2">
                  {(commands as string[]).map((command) => (
                    <code key={command} className="block overflow-x-auto text-sm text-cyan-200">{command}</code>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-5">
            <p className="text-sm font-black text-yellow-200">NAT ACLs classify traffic</p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              An ACL referenced by NAT commonly identifies addresses to translate.
              That is different from applying an ACL to an interface with ip access-group.
            </p>
          </div>
        </div>
      </section>

      {[
        ["NAT packet path", "Translation still depends on routing", natPath],
        ["NAT troubleshooting", "Translation evidence tells you where to look next", natSymptoms],
        ["Layered troubleshooting", "Test in dependency order", troubleshooting],
      ].map(([label, title, items]) => (
        <section key={label as string} className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">{label as string}</p>
            <h2 className="mt-3 text-3xl font-black text-white">{title as string}</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {(items as string[][]).map((item) => (
                <div key={item[0]} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                  <h3 className="text-lg font-black text-white">{item[0]}</h3>
                  {item.length > 2 && <p className="mt-2 text-sm font-bold text-cyan-300">{item[1]}</p>}
                  <p className="mt-3 text-sm leading-7 text-slate-400">{item[item.length - 1]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Evidence-based reasoning</p>
          <h2 className="mt-3 text-3xl font-black text-white">Fix the service that is actually failing</h2>
          <div className="mt-8 grid gap-5">
            {reasoning.map(([finding, weak, better]) => (
              <div key={finding} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
                <h3 className="text-lg font-black text-white">{finding}</h3>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl border border-red-400/15 bg-red-400/5 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-red-200">Weak response</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{weak}</p>
                  </div>
                  <div className="rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Better reasoning</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{better}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">Unsafe shortcuts</p>
          <h2 className="mt-3 text-3xl font-black text-white">Changes that erase evidence or hide the real problem</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {unsafe.map(([title, risk]) => (
              <div key={title} className="rounded-2xl border border-red-400/15 bg-slate-950/50 p-5">
                <h3 className="text-lg font-black text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{risk}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Verification</p>
          <h2 className="mt-3 text-3xl font-black text-white">Prove each dependency separately</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {verification.map(([area, check]) => (
              <div key={area} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <h3 className="text-lg font-black text-white">{area}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{check}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">Defensive lab</p>
          <h2 className="mt-3 text-3xl font-black text-white">Build and troubleshoot a fictional DHCP, DNS, and NAT path</h2>
          <div className="mt-8 grid gap-3">
            {lab.map(([step, task]) => (
              <div key={step} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-950/60 p-5">
                <span className="font-black text-cyan-300">{step}</span>
                <p className="text-sm leading-7 text-slate-300">{task}</p>
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
              {reflection.map((item, index) => (
                <div key={item} className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">Question {index + 1}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
              <p className="text-sm font-black text-cyan-200">Carry this forward</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                First prove the client has the right address, then prove routing,
                then prove name resolution, then inspect translation if the path
                crosses a NAT boundary. Dependency order prevents random changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-8">
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/cisco-networking" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              Back to Cisco & Networking
            </Link>
            <Link href="/cyberpatriot" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              CyberPatriot Hub
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/cyberpatriot/cisco-networking/access-control-lists" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200">
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/cisco-networking/cisco-device-hardening-management-plane"
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
