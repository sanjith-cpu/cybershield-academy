import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const portGroups = [
  {
    title: "Core Infrastructure",
    items: [
      ["20/TCP", "FTP Data", "Legacy file-transfer data channel.", "FTP is unencrypted and should be reviewed carefully."],
      ["21/TCP", "FTP Control", "Legacy file-transfer control channel.", "Credentials and data may be exposed without protection."],
      ["22/TCP", "SSH", "Secure shell and secure remote administration.", "Confirm whether remote administration is required."],
      ["23/TCP", "Telnet", "Legacy remote terminal access.", "Traffic is unencrypted; replace or disable when not required."],
      ["25/TCP", "SMTP", "Mail transfer between servers.", "Do not confuse mail transport with user mailbox access."],
      ["53/TCP+UDP", "DNS", "Name resolution and zone-transfer related traffic.", "DNS is critical infrastructure; investigate before changing it."],
      ["67/UDP", "DHCP Server", "Server-side DHCP traffic.", "DHCP availability may be essential for clients."],
      ["68/UDP", "DHCP Client", "Client-side DHCP traffic.", "Do not block if clients depend on dynamic addressing."],
    ],
  },
  {
    title: "Web & Application",
    items: [
      ["80/TCP", "HTTP", "Unencrypted web traffic.", "An open HTTP port is not automatically a vulnerability if required by the scenario."],
      ["443/TCP", "HTTPS", "Encrypted web traffic using TLS.", "HTTPS still requires valid configuration and secure application behavior."],
      ["8080/TCP", "Alternate HTTP", "Common alternate web/application port.", "Port 8080 does not guarantee the application is HTTP."],
      ["8443/TCP", "Alternate HTTPS", "Common alternate TLS web/application port.", "Confirm the actual listening process."],
    ],
  },
  {
    title: "Windows & File Sharing",
    items: [
      ["135/TCP", "RPC Endpoint Mapper", "Windows RPC service discovery.", "Common on Windows systems; evaluate with host role and firewall scope."],
      ["137/UDP", "NetBIOS Name Service", "Legacy Windows name resolution.", "May be unnecessary in modern environments."],
      ["138/UDP", "NetBIOS Datagram", "Legacy Windows datagram service.", "Review whether legacy compatibility is required."],
      ["139/TCP", "NetBIOS Session Service", "Legacy SMB/session traffic.", "SMB can also operate directly over TCP 445."],
      ["445/TCP", "SMB", "Windows file sharing, named pipes, and related services.", "Required on many file servers and domain environments."],
    ],
  },
  {
    title: "Remote Access & Management",
    items: [
      ["22/TCP", "SSH", "Encrypted remote shell.", "Strong authentication and access scope still matter."],
      ["23/TCP", "Telnet", "Unencrypted remote shell.", "Avoid when secure alternatives are available."],
      ["3389/TCP", "RDP", "Windows Remote Desktop.", "Check whether RDP is required before disabling it."],
      ["5900/TCP", "VNC", "Remote graphical desktop on many implementations.", "Authentication and encryption vary by product."],
      ["5985/TCP", "WinRM HTTP", "Windows Remote Management over HTTP.", "HTTP transport can still use message-level security depending on configuration."],
      ["5986/TCP", "WinRM HTTPS", "Windows Remote Management over TLS.", "Certificate and trust configuration matter."],
    ],
  },
  {
    title: "Directory & Authentication",
    items: [
      ["88/TCP+UDP", "Kerberos", "Authentication protocol used heavily in Active Directory.", "Critical in domain environments."],
      ["389/TCP+UDP", "LDAP", "Directory queries and updates.", "Plain LDAP may expose data unless protected."],
      ["636/TCP", "LDAPS", "LDAP over TLS.", "Certificate configuration matters."],
      ["3268/TCP", "Global Catalog", "Active Directory global catalog queries.", "Expected on domain controllers providing GC services."],
      ["3269/TCP", "Global Catalog TLS", "Encrypted global catalog queries.", "Requires appropriate certificate support."],
    ],
  },
  {
    title: "Email",
    items: [
      ["25/TCP", "SMTP", "Server-to-server mail transfer.", "Not usually used for end-user mailbox retrieval."],
      ["110/TCP", "POP3", "Legacy mailbox retrieval.", "Plain POP3 is unencrypted."],
      ["143/TCP", "IMAP", "Mailbox access and synchronization.", "Plain IMAP is unencrypted unless upgraded."],
      ["465/TCP", "SMTPS", "SMTP over implicit TLS on many services.", "Usage varies by provider."],
      ["587/TCP", "SMTP Submission", "Authenticated client mail submission.", "Common for user-to-mail-server sending."],
      ["993/TCP", "IMAPS", "IMAP over TLS.", "Common secure mailbox access."],
      ["995/TCP", "POP3S", "POP3 over TLS.", "Secure transport does not guarantee secure credentials or server policy."],
    ],
  },
  {
    title: "Monitoring & Time",
    items: [
      ["123/UDP", "NTP", "Network time synchronization.", "Accurate time is critical for logs and authentication."],
      ["161/UDP", "SNMP", "Network monitoring and management queries.", "SNMPv1/v2 community strings can be weak if poorly configured."],
      ["162/UDP", "SNMP Trap", "Asynchronous monitoring alerts.", "Check destination and community/security configuration."],
      ["514/UDP", "Syslog", "Traditional syslog transport.", "UDP syslog is not encrypted or guaranteed delivery."],
      ["6514/TCP", "Syslog over TLS", "Encrypted syslog transport.", "Certificate and collector configuration matter."],
    ],
  },
  {
    title: "Databases",
    items: [
      ["1433/TCP", "Microsoft SQL Server", "Common SQL Server database port.", "Confirm the actual process and whether remote access is required."],
      ["3306/TCP", "MySQL / MariaDB", "Common MySQL-family database port.", "Database exposure should be limited to required hosts."],
      ["5432/TCP", "PostgreSQL", "Common PostgreSQL database port.", "Check listen addresses and access-control rules."],
    ],
  },
];

const tcpUdp = [
  {
    title: "TCP",
    points: [
      "Connection-oriented.",
      "Provides ordered delivery and retransmission.",
      "Uses a handshake before normal data transfer.",
      "Common for web, SSH, RDP, SMB, database, and mail sessions.",
    ],
  },
  {
    title: "UDP",
    points: [
      "Connectionless.",
      "No built-in delivery guarantee or ordering.",
      "Lower overhead for many request/response and real-time uses.",
      "Common for DNS, DHCP, NTP, SNMP, and some logging traffic.",
    ],
  },
];

const interpretationRules = [
  "A port number is a clue, not proof of the application.",
  "A listening socket means a process is waiting for connections; it does not prove remote reachability.",
  "A firewall rule that allows a port does not prove anything is actually listening.",
  "An established connection proves communication occurred, not whether that communication was legitimate.",
  "A standard service can run on a nonstandard port.",
  "A nonstandard port can still host an ordinary service.",
  "Always map the port to the owning process or service when possible.",
  "Always consider the host's assigned role before deciding whether a service is unnecessary.",
];

const windowsChecks = [
  ["Get-NetTCPConnection -State Listen", "Shows listening Windows TCP sockets."],
  ["Get-NetTCPConnection", "Shows TCP endpoints, states, and owning PIDs."],
  ["Get-NetUDPEndpoint", "Shows Windows UDP endpoints."],
  ["netstat -ano", "Classic socket view with PID mapping."],
  ["Get-Process -Id <pid>", "Maps a PID to a process."],
  ["Get-CimInstance Win32_Service | Select Name,State,StartName,PathName", "Maps service configuration and executable paths."],
];

const linuxChecks = [
  ["ss -tulpn", "Shows listening TCP/UDP sockets and processes when permissions allow."],
  ["ss -tpn", "Shows active TCP connections and processes."],
  ["sudo lsof -i -P -n", "Shows network sockets and owning processes where lsof is available."],
  ["ps -fp <pid>", "Shows process details for one PID."],
  ["systemctl status <service>", "Shows service state and recent logs."],
  ["journalctl -u <service> --since \"1 hour ago\"", "Shows recent journal entries for one service."],
];

const serviceDecisions = [
  "Is this service required by the scenario?",
  "Which process owns the port?",
  "Which account runs that process or service?",
  "What executable path is associated with it?",
  "Is the port bound to localhost, one interface, or all interfaces?",
  "Does the firewall allow inbound access?",
  "Is the service actually reachable from the required network?",
  "Is there log evidence showing recent use?",
  "What will break if I disable or remove it?",
  "How will I verify required functionality after the change?",
];

const mistakes = [
  "Disabling every unfamiliar port without checking the host role.",
  "Assuming port 80 means a web server is insecure simply because it is HTTP.",
  "Assuming port 443 means the service is automatically safe.",
  "Blocking DNS, DHCP, Kerberos, or SMB on systems that depend on them.",
  "Treating a firewall allow rule as proof that a service is running.",
  "Treating a listening socket as proof that it is reachable from another host.",
  "Forgetting that services can run on nonstandard ports.",
  "Changing several firewall or service settings at once and losing the cause of the result.",
];

function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
        {label}
      </p>
      <h2 className="mt-3 text-3xl font-black text-white">{title}</h2>
      {description && (
        <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}

export default function PortsProtocolsServicesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pt-10 lg:px-8 lg:pt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/command-center"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Command Center
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
              href="/cyberpatriot/command-center/forensics"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Forensics
            </Link>
            <Link
              href="/cyberpatriot/command-center/command-index"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Next: Command Index &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 shadow-2xl shadow-cyan-950/30 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Command Center &middot; Reference 06
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Ports, Protocols &amp; Services
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Fast recognition for common TCP and UDP ports, service purpose,
                Windows and Linux listener checks, and the reasoning needed to
                decide whether a network service is expected.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Memorize the common associations, but never treat a port number
                as proof of the application or as proof of a vulnerability.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Service Rule
              </p>
              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Port</span>
                  <span className="font-bold text-white">Hint</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Process</span>
                  <span className="font-bold text-white">Identity</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Host role</span>
                  <span className="font-bold text-white">Context</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Decision</span>
                  <span className="font-bold text-white">Evidence-based</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-yellow-400/20 bg-yellow-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-200">
            Important
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Ports are associations, not conclusions
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300">
            The same application can use a different port, and a different
            application can bind to a familiar port. Always identify the owning
            process or service and compare it with the host&apos;s required role.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {tcpUdp.map((protocol) => (
            <div
              key={protocol.title}
              className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9"
            >
              <SectionHeading label="Transport" title={protocol.title} />
              <div className="mt-6 grid gap-3">
                {protocol.points.map((point) => (
                  <div
                    key={point}
                    className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-sm leading-7 text-slate-300"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="grid gap-6">
          {portGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9"
            >
              <SectionHeading label="Port reference" title={group.title} />

              <div className="mt-8 grid gap-4 lg:grid-cols-2">
                {group.items.map(([port, service, purpose, caution]) => (
                  <div
                    key={`${port}-${service}`}
                    className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="text-xl font-black text-cyan-300">
                        {port}
                      </span>
                      <span className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs font-bold text-slate-300">
                        {service}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-slate-300">
                      {purpose}
                    </p>

                    <div className="mt-4 rounded-xl border border-yellow-400/15 bg-yellow-400/5 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.14em] text-yellow-200">
                        Context
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {caution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <SectionHeading
            label="Interpretation"
            title="How to reason about a port correctly"
          />

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {interpretationRules.map((item, index) => (
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
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Windows"
              title="Listener and process checks"
            />
            <div className="mt-6 grid gap-4">
              {windowsChecks.map(([command, meaning]) => (
                <div
                  key={command}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <pre className="overflow-x-auto whitespace-pre-wrap text-sm leading-7 text-cyan-100">
{command}
                  </pre>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {meaning}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7">
            <SectionHeading
              label="Linux"
              title="Listener and process checks"
            />
            <div className="mt-6 grid gap-4">
              {linuxChecks.map(([command, meaning]) => (
                <div
                  key={command}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <pre className="overflow-x-auto whitespace-pre-wrap text-sm leading-7 text-cyan-100">
{command}
                  </pre>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {meaning}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Service decision check
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Ask these before disabling a service or blocking a port
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {serviceDecisions.map((item, index) => (
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
        <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-200">
            Common mistakes
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Port mistakes that break working systems
          </h2>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {mistakes.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl border border-red-400/15 bg-slate-950/50 p-4"
              >
                <span className="font-black text-red-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-6 text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-800 pt-8">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/cyberpatriot/command-center"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Command Center
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
              href="/cyberpatriot/command-center/forensics"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Forensics
            </Link>
            <Link
              href="/cyberpatriot/command-center/command-index"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Next: Command Index &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
