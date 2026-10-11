import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const objectives = [
  "Explain what the Cisco management plane is and why it requires deliberate protection.",
  "Distinguish console, SSH, Telnet, HTTP/HTTPS, SNMP, and local user authentication from normal routed traffic.",
  "Review device identity, local accounts, privilege, secrets, banners, and remote-access settings safely.",
  "Harden VTY access with SSH and restrict management exposure without locking out required administrators.",
  "Recognize weak or legacy management settings such as Telnet, HTTP, default credentials, and weak password handling.",
  "Verify device hardening while preserving required management access and documenting rollback.",
];

const coreConcepts = [
  {
    title: "Management plane",
    text:
      "The set of interfaces, protocols, accounts, and services used to administer the network device itself.",
  },
  {
    title: "Control plane",
    text:
      "The logic the device uses to learn and maintain network state, including routing and certain Layer 2 protocol decisions.",
  },
  {
    title: "Data plane",
    text:
      "The forwarding path that moves user and application traffic through the device.",
  },
  {
    title: "Least privilege",
    text:
      "Administrators and services should receive only the access required for their role.",
  },
  {
    title: "Management exposure",
    text:
      "The interfaces, source networks, and protocols from which the device can be administered.",
  },
  {
    title: "Secure baseline",
    text:
      "A documented minimum configuration that removes unnecessary services and protects required administration paths.",
  },
];

const managementMethods = [
  {
    method: "Console",
    transport:
      "Local physical or virtual console session",
    security:
      "Out-of-band style access when physically protected",
    use:
      "Recovery, first-time setup, and safe troubleshooting",
    caution:
      "Physical console access is powerful and must be controlled.",
  },
  {
    method: "SSH",
    transport:
      "Encrypted remote terminal",
    security:
      "Preferred remote CLI method for most modern IOS administration",
    use:
      "Routine remote management",
    caution:
      "Still requires strong authentication, trusted source restrictions, and correct crypto settings.",
  },
  {
    method: "Telnet",
    transport:
      "Unencrypted remote terminal",
    security:
      "Legacy and insecure",
    use:
      "Avoid where SSH is available",
    caution:
      "Credentials and session content can be exposed in plaintext.",
  },
  {
    method: "HTTPS",
    transport:
      "Encrypted web management",
    security:
      "Can be acceptable when required and properly configured",
    use:
      "Web-based device administration",
    caution:
      "Do not enable it unless the environment actually needs it.",
  },
  {
    method: "HTTP",
    transport:
      "Unencrypted web management",
    security:
      "Legacy and weak for administration",
    use:
      "Generally disable when not explicitly required",
    caution:
      "Provides a management surface without transport encryption.",
  },
  {
    method: "SNMP",
    transport:
      "Network management protocol",
    security:
      "Depends strongly on version and configuration",
    use:
      "Monitoring and management integration",
    caution:
      "SNMPv1/v2c community strings are weaker than authenticated/encrypted SNMPv3 designs.",
  },
];

const inspectionCommands = [
  {
    command: "show running-config",
    purpose:
      "Review the complete active configuration and identify management-plane services, accounts, line settings, and interface exposure.",
  },
  {
    command: "show running-config | include hostname",
    purpose:
      "Confirm the device hostname used for identity and SSH key generation context.",
  },
  {
    command: "show running-config | include username",
    purpose:
      "Review configured local user entries without assuming every account is authorized.",
  },
  {
    command: "show running-config | section line",
    purpose:
      "Review console and VTY line authentication, transport, timeout, and access restrictions.",
  },
  {
    command: "show running-config | include enable",
    purpose:
      "Inspect enable secret or legacy enable password configuration.",
  },
  {
    command: "show ip ssh",
    purpose:
      "Review SSH status and version where supported.",
  },
  {
    command: "show users",
    purpose:
      "Review current management sessions.",
  },
  {
    command: "show login",
    purpose:
      "Review login enhancement state where supported.",
  },
  {
    command: "show access-lists",
    purpose:
      "Review ACLs that may restrict management source networks.",
  },
  {
    command: "show ip interface brief",
    purpose:
      "Identify which interfaces and addresses may expose the management plane.",
  },
];

const identityHardening = [
  {
    item: "Hostname",
    reason:
      "Clear device identity reduces mistakes when multiple routers or switches are open at once.",
  },
  {
    item: "Domain name",
    reason:
      "A domain name is commonly used with hostname information when generating RSA keys for SSH.",
  },
  {
    item: "Login banner",
    reason:
      "A legal or authorized-use banner can communicate access expectations before login where required by policy.",
  },
  {
    item: "Clock and time zone",
    reason:
      "Accurate time improves log usefulness and change tracking.",
  },
  {
    item: "Interface descriptions",
    reason:
      "Descriptions help administrators distinguish uplinks, user access ports, management links, and service connections.",
  },
  {
    item: "Configuration comments and documentation",
    reason:
      "Clear documentation reduces accidental changes and helps the team understand why a control exists.",
  },
];

const passwordConcepts = [
  {
    title: "enable secret",
    text:
      "Preferred over legacy enable password for protecting privileged EXEC access on classic IOS configurations.",
  },
  {
    title: "Local usernames",
    text:
      "Named local accounts improve accountability compared with one shared line password.",
  },
  {
    title: "Secret vs password syntax",
    text:
      "Where supported, secret-based storage is generally stronger than reversible or weak password representations.",
  },
  {
    title: "service password-encryption",
    text:
      "Obscures certain plaintext line passwords in the configuration, but older Type 7 representations are reversible and should not be treated as strong encryption.",
  },
  {
    title: "Password policy",
    text:
      "Strong unique credentials should be used according to the competition or organizational policy.",
  },
  {
    title: "Do not expose configs publicly",
    text:
      "Running configurations can contain secrets, hashes, SNMP strings, keys, and network details.",
  },
];

const localAccountWorkflow = [
  {
    step: "01",
    title: "Review existing users",
    commands: [
      "show running-config | include username",
      "show users",
    ],
    note:
      "Do not remove unfamiliar accounts until their purpose is checked against the scenario.",
  },
  {
    step: "02",
    title: "Create or update an authorized local administrator",
    commands: [
      "configure terminal",
      "username netadmin privilege 15 secret <strong-secret>",
    ],
    note:
      "Use a fictional placeholder in training. Never place real credentials in public materials.",
  },
  {
    step: "03",
    title: "Protect privileged EXEC",
    commands: [
      "enable secret <strong-secret>",
    ],
    note:
      "Use the environment's required credential policy.",
  },
  {
    step: "04",
    title: "Verify authentication configuration",
    commands: [
      "end",
      "show running-config | include username",
      "show running-config | include enable",
    ],
    note:
      "Verify the intended account exists before changing remote login behavior.",
  },
];

const sshPrerequisites = [
  {
    title: "Hostname",
    text:
      "The device should have a deliberate hostname.",
  },
  {
    title: "Domain name",
    text:
      "IOS commonly requires a domain name before generating RSA keys.",
  },
  {
    title: "Local user or AAA method",
    text:
      "SSH needs an authentication method that administrators can actually use.",
  },
  {
    title: "RSA keys",
    text:
      "The device needs cryptographic keys for SSH on traditional IOS platforms.",
  },
  {
    title: "VTY transport",
    text:
      "The VTY lines must permit SSH and should not unnecessarily permit Telnet.",
  },
  {
    title: "Reachable management IP",
    text:
      "The administrator still needs a valid routed or switched path to the device's management address.",
  },
];

const sshConfig = [
  {
    step: "01",
    title: "Set identity",
    commands: [
      "configure terminal",
      "hostname SW-ACCESS-1",
      "ip domain-name training.local",
    ],
  },
  {
    step: "02",
    title: "Create an authorized local admin",
    commands: [
      "username netadmin privilege 15 secret <strong-secret>",
    ],
  },
  {
    step: "03",
    title: "Generate RSA keys",
    commands: [
      "crypto key generate rsa",
    ],
  },
  {
    step: "04",
    title: "Prefer SSH version 2 where supported",
    commands: [
      "ip ssh version 2",
    ],
  },
  {
    step: "05",
    title: "Configure VTY authentication",
    commands: [
      "line vty 0 4",
      "login local",
      "transport input ssh",
      "exit",
      "end",
    ],
  },
  {
    step: "06",
    title: "Verify",
    commands: [
      "show ip ssh",
      "show running-config | section line vty",
    ],
  },
];

const vtyControls = [
  {
    control: "login local",
    purpose:
      "Uses the local username database for VTY authentication.",
  },
  {
    control: "transport input ssh",
    purpose:
      "Allows SSH and excludes Telnet when only ssh is listed.",
  },
  {
    control: "exec-timeout",
    purpose:
      "Disconnects idle management sessions after the configured interval.",
  },
  {
    control: "access-class",
    purpose:
      "Restricts which source addresses may open VTY sessions using a standard or extended ACL depending on platform support.",
  },
  {
    control: "logging synchronous",
    purpose:
      "Improves CLI usability by reducing command-line disruption from log messages.",
  },
  {
    control: "transport output",
    purpose:
      "Controls outbound remote terminal protocols initiated from the device where relevant.",
  },
];

const managementAclExample = [
  {
    step: "01",
    title: "Permit only the fictional management subnet",
    commands: [
      "configure terminal",
      "ip access-list standard MGMT_SOURCES",
      "10 permit 192.168.99.0 0.0.0.255",
      "exit",
    ],
  },
  {
    step: "02",
    title: "Apply to VTY lines",
    commands: [
      "line vty 0 4",
      "access-class MGMT_SOURCES in",
      "login local",
      "transport input ssh",
      "end",
    ],
  },
  {
    step: "03",
    title: "Verify",
    commands: [
      "show access-lists MGMT_SOURCES",
      "show running-config | section line vty",
    ],
  },
];

const accessClassReasoning = [
  {
    title: "Protect the management service",
    text:
      "A VTY access-class controls which source addresses can attempt remote CLI access to the device.",
  },
  {
    title: "Do not confuse with data-plane filtering",
    text:
      "A management-plane source restriction is conceptually different from an interface ACL filtering user traffic through the router.",
  },
  {
    title: "Verify your own source first",
    text:
      "If the administrator's network is omitted, the team can lock itself out of SSH.",
  },
  {
    title: "Keep console access available during training",
    text:
      "Console access provides a safer recovery path while testing management ACLs in Packet Tracer or an authorized lab.",
  },
];

const lineSecurity = [
  {
    title: "Console line",
    text:
      "Local console access can use authentication and an idle timeout where supported and appropriate.",
  },
  {
    title: "VTY lines",
    text:
      "Remote terminal lines should use a deliberate login method, secure transport, timeout, and source restrictions.",
  },
  {
    title: "AUX line",
    text:
      "Legacy auxiliary management lines may exist on some devices and should be reviewed if present.",
  },
  {
    title: "Unused lines and transports",
    text:
      "Do not leave unnecessary remote protocols enabled merely because they are defaults.",
  },
];

const loginProtection = [
  {
    title: "Failed-login monitoring",
    text:
      "IOS login enhancements can help detect and react to repeated authentication failures on supported devices.",
  },
  {
    title: "login block-for",
    text:
      "Can temporarily block login attempts after a configured number of failures within a time window.",
  },
  {
    title: "login quiet-mode access-class",
    text:
      "Can permit trusted management sources during quiet mode on supported IOS versions.",
  },
  {
    title: "Use carefully",
    text:
      "Incorrect thresholds or ACLs can lock out legitimate administrators, so verify console recovery before testing.",
  },
];

const loginProtectionExample = [
  {
    goal: "Example defensive login throttling in a fictional lab",
    commands: [
      "configure terminal",
      "login block-for 60 attempts 3 within 60",
      "end",
    ],
    verify:
      "show login",
  },
];

const webManagement = [
  {
    service: "HTTP server",
    command:
      "ip http server",
    guidance:
      "Disable if web management is not required.",
  },
  {
    service: "HTTPS server",
    command:
      "ip http secure-server",
    guidance:
      "Enable only when required and when authentication and certificate expectations are understood.",
  },
  {
    service: "HTTP authentication",
    command:
      "ip http authentication local",
    guidance:
      "Can use the local user database on supported IOS platforms.",
  },
  {
    service: "Inspection",
    command:
      "show running-config | include ip http",
    guidance:
      "Review whether HTTP or HTTPS management is currently enabled.",
  },
];

const webHardeningExample = [
  {
    goal: "Disable unneeded HTTP management",
    commands: [
      "configure terminal",
      "no ip http server",
      "end",
    ],
    verify:
      "show running-config | include ip http",
  },
  {
    goal: "Preserve HTTPS only if required",
    commands: [
      "configure terminal",
      "no ip http server",
      "ip http secure-server",
      "ip http authentication local",
      "end",
    ],
    verify:
      "show running-config | include ip http",
  },
];

const snmpConcepts = [
  {
    title: "SNMPv1",
    text:
      "Legacy SNMP version with weak security properties.",
  },
  {
    title: "SNMPv2c",
    text:
      "Uses community strings and does not provide the same authenticated encryption model as SNMPv3.",
  },
  {
    title: "SNMPv3",
    text:
      "Supports stronger authentication and privacy options and is generally preferred when SNMP is required.",
  },
  {
    title: "Community strings are sensitive",
    text:
      "Treat them like credentials and do not publish real values.",
  },
  {
    title: "Restrict management sources",
    text:
      "SNMP access should be limited to authorized management systems where the platform and design support it.",
  },
  {
    title: "Disable when unused",
    text:
      "If the scenario does not require SNMP, unnecessary SNMP configuration increases management exposure.",
  },
];

const snmpInspection = [
  {
    command: "show running-config | include snmp",
    purpose:
      "Locate SNMP community, user, group, host, and related configuration.",
  },
  {
    command: "show snmp",
    purpose:
      "Review SNMP engine information and counters where supported.",
  },
  {
    command: "show access-lists",
    purpose:
      "Inspect ACLs that may restrict SNMP management sources.",
  },
];

const cdpLldpConcepts = [
  {
    title: "CDP",
    text:
      "Cisco Discovery Protocol can reveal directly connected Cisco device identity and interface information.",
  },
  {
    title: "LLDP",
    text:
      "A vendor-neutral Layer 2 discovery protocol with a similar operational purpose.",
  },
  {
    title: "Useful for troubleshooting",
    text:
      "Discovery protocols help confirm topology and neighbor relationships.",
  },
  {
    title: "Exposure should be deliberate",
    text:
      "Do not enable discovery everywhere without considering whether the scenario requires it.",
  },
  {
    title: "Per-interface control",
    text:
      "Some discovery protocols can be disabled globally or on selected interfaces depending on platform.",
  },
  {
    title: "Do not disable blindly",
    text:
      "Competition tasks may rely on topology discovery, IP phones, or other legitimate functions.",
  },
];

const discoveryInspection = [
  {
    command: "show cdp neighbors detail",
    purpose:
      "Review Cisco neighbor identity and interface relationships.",
  },
  {
    command: "show lldp neighbors detail",
    purpose:
      "Review LLDP neighbor information where enabled and supported.",
  },
  {
    command: "show running-config | include cdp",
    purpose:
      "Inspect CDP-related configuration.",
  },
  {
    command: "show running-config | include lldp",
    purpose:
      "Inspect LLDP-related configuration.",
  },
];

const unusedServices = [
  {
    item: "Telnet",
    action:
      "Prefer SSH and remove Telnet from VTY transport when not required.",
  },
  {
    item: "HTTP management",
    action:
      "Disable if web administration is not required.",
  },
  {
    item: "Legacy SNMP",
    action:
      "Remove or replace only after confirming monitoring requirements.",
  },
  {
    item: "Unnecessary discovery",
    action:
      "Limit carefully without breaking required topology or endpoint features.",
  },
  {
    item: "Unused interfaces",
    action:
      "Review role and consider shutdown only when the scenario confirms the port is unused.",
  },
  {
    item: "Default or stale accounts",
    action:
      "Verify authorization and dependencies before removal.",
  },
];

const timeAndLogging = [
  {
    title: "Accurate clock",
    text:
      "Logs are far more useful when timestamps reflect the correct time.",
  },
  {
    title: "Buffered logging",
    text:
      "Local log buffering can preserve recent events for troubleshooting on supported IOS devices.",
  },
  {
    title: "Remote syslog",
    text:
      "A central logging server can preserve device events beyond local memory when the environment requires it.",
  },
  {
    title: "Timestamping",
    text:
      "Service timestamps can improve event correlation when configured appropriately.",
  },
  {
    title: "Do not clear logs casually",
    text:
      "Logs may contain evidence about failed logins, interface changes, and management sessions.",
  },
  {
    title: "Verify the logging destination",
    text:
      "Do not point production-like devices to unknown or unauthorized logging servers.",
  },
];

const loggingInspection = [
  {
    command: "show clock",
    purpose:
      "Check the device's current time.",
  },
  {
    command: "show logging",
    purpose:
      "Review buffered logs, logging state, and configured destinations where supported.",
  },
  {
    command: "show running-config | include logging",
    purpose:
      "Locate logging configuration.",
  },
  {
    command: "show running-config | include service timestamps",
    purpose:
      "Review timestamp behavior for logs and debugging output.",
  },
];

const configProtection = [
  {
    title: "running-config is active",
    text:
      "Management-plane hardening changes take effect in the running configuration immediately.",
  },
  {
    title: "startup-config is persistent",
    text:
      "Saving after verification preserves the hardened state across reloads.",
  },
  {
    title: "Secrets may be visible in some form",
    text:
      "Do not assume a hashed or encoded value is safe to publish.",
  },
  {
    title: "Back up before major changes",
    text:
      "In an authorized lab, preserve a known-good copy or Packet Tracer file before broad management changes.",
  },
  {
    title: "Do not use copy direction as rollback",
    text:
      "copy startup-config running-config can merge configuration rather than act as a clean universal undo.",
  },
  {
    title: "Document rollback explicitly",
    text:
      "Record the original line, account, transport, or ACL configuration before replacing it.",
  },
];

const troubleshootingCases = [
  {
    symptom:
      "SSH fails but ping to the management IP works",
    checks:
      "SSH status, RSA keys, VTY transport, login method, local user, source ACL, TCP/22 policy.",
  },
  {
    symptom:
      "Console works but remote management fails",
    checks:
      "VTY settings, management ACL, routing, interface IP, SSH service, remote source subnet.",
  },
  {
    symptom:
      "Telnet works but SSH does not",
    checks:
      "Domain name, RSA keys, SSH version, VTY transport, IOS feature support.",
  },
  {
    symptom:
      "SSH works from Management VLAN but not Staff VLAN",
    checks:
      "This may be intentional source restriction. Review VTY access-class and scenario requirements.",
  },
  {
    symptom:
      "HTTPS management stopped after hardening",
    checks:
      "Determine whether HTTPS was required before re-enabling it. Do not restore HTTP just because web access disappeared.",
  },
  {
    symptom:
      "SNMP monitoring stopped",
    checks:
      "Confirm whether SNMP is required, which version is expected, source restrictions, credentials, and network path.",
  },
];

const reasoningCases = [
  {
    finding:
      "VTY lines allow telnet and ssh",
    weak:
      "Leave both because more options improve availability.",
    better:
      "If SSH is available and Telnet is not required, restrict VTY transport to SSH after verifying SSH login first.",
  },
  {
    finding:
      "An unfamiliar local username exists",
    weak:
      "Delete it immediately.",
    better:
      "Check scenario documentation, current sessions, privilege, and whether the account supports a required service before removal.",
  },
  {
    finding:
      "HTTP management is enabled",
    weak:
      "Replace it with HTTPS without checking usage.",
    better:
      "First determine whether web management is required at all. Disable unnecessary management services rather than automatically substituting another.",
  },
  {
    finding:
      "A management ACL permits only 192.168.99.0/24",
    weak:
      "Remove it so every subnet can administer the device.",
    better:
      "Verify whether the management subnet is intentionally restricted. Test your authorized admin path before changing source controls.",
  },
  {
    finding:
      "service password-encryption is present",
    weak:
      "Assume all device passwords are strongly encrypted.",
    better:
      "Recognize that older Type 7-style obfuscation is reversible and does not replace stronger secret-based credential storage.",
  },
  {
    finding:
      "SSH is unavailable in Packet Tracer on one device model",
    weak:
      "Assume the concept is invalid.",
    better:
      "Packet Tracer support varies. Use the closest supported device or verify the configuration concept without inventing unsupported commands.",
  },
];

const unsafeShortcuts = [
  {
    shortcut:
      "Changing every credential before verifying access",
    risk:
      "Can lock the team out and make rollback difficult.",
  },
  {
    shortcut:
      "Disabling every management service at once",
    risk:
      "Can remove required monitoring, HTTPS, SSH, or other authorized administration paths.",
  },
  {
    shortcut:
      "Applying a VTY source ACL before testing your own subnet",
    risk:
      "Can lock out remote administrators.",
  },
  {
    shortcut:
      "Removing unknown accounts without investigation",
    risk:
      "May disable a required service or authorized team workflow.",
  },
  {
    shortcut:
      "Publishing the running configuration",
    risk:
      "May expose hashes, usernames, community strings, keys, topology, and sensitive addresses.",
  },
  {
    shortcut:
      "Saving immediately after remote-access changes",
    risk:
      "A lockout-causing mistake can become persistent.",
  },
];

const verificationChecklist = [
  {
    area: "Identity",
    check:
      "Hostname, descriptions, and device role are clear.",
  },
  {
    area: "Accounts",
    check:
      "Only authorized local administrative accounts remain and required credentials work.",
  },
  {
    area: "Privilege",
    check:
      "Privileged EXEC access is protected with a deliberate secret.",
  },
  {
    area: "SSH",
    check:
      "SSH works from an authorized management source before Telnet is removed.",
  },
  {
    area: "VTY policy",
    check:
      "login method, transport, timeout, and access-class match the intended management design.",
  },
  {
    area: "Web and SNMP",
    check:
      "Only required management services are enabled and source restrictions are preserved.",
  },
  {
    area: "Logging",
    check:
      "Time and logs remain useful for troubleshooting and evidence.",
  },
  {
    area: "Persistence",
    check:
      "The hardened configuration is saved only after all required management paths are tested.",
  },
];

const packetTracerLab = [
  {
    step: "01",
    task:
      "Build a fictional router or switch with Management VLAN 99 and one authorized administrator workstation.",
  },
  {
    step: "02",
    task:
      "Record the existing hostname, users, enable settings, VTY configuration, management IP, and available remote services.",
  },
  {
    step: "03",
    task:
      "Create a fictional local admin account, configure an enable secret, and verify console access before changing VTY authentication.",
  },
  {
    step: "04",
    task:
      "Configure SSH using a hostname, domain name, RSA keys, login local, and transport input ssh where supported.",
  },
  {
    step: "05",
    task:
      "Verify SSH from the Management VLAN before removing Telnet from the allowed VTY transports.",
  },
  {
    step: "06",
    task:
      "Create a standard ACL permitting the Management VLAN and apply it to VTY access in the fictional lab.",
  },
  {
    step: "07",
    task:
      "Test authorized access from Management and verify an unauthorized source subnet cannot open the remote CLI.",
  },
  {
    step: "08",
    task:
      "Review HTTP/HTTPS, SNMP, discovery, logging, and unused services; change only what the fictional scenario says is unnecessary, then verify again before saving.",
  },
];

const practiceScenarios = [
  {
    prompt:
      "SSH works from VLAN 99 but not from VLAN 10.",
    response:
      "Check whether VLAN 99 is the intended management source and whether the VTY access-class is deliberately restricting other subnets.",
  },
  {
    prompt:
      "The VTY lines use transport input telnet ssh.",
    response:
      "Verify SSH works first, then remove Telnet if the scenario does not require it.",
  },
  {
    prompt:
      "An old username has privilege 15.",
    response:
      "Investigate whether the account is authorized or required before removal; do not assume age alone proves it is unsafe.",
  },
  {
    prompt:
      "HTTP is enabled and no one uses web administration.",
    response:
      "If the scenario confirms it is unnecessary, disable the HTTP server and verify required management still works.",
  },
  {
    prompt:
      "service password-encryption is present.",
    response:
      "Do not treat that as strong protection for all credentials. Prefer secret-based credentials where supported.",
  },
  {
    prompt:
      "A teammate wants to apply a restrictive VTY ACL remotely.",
    response:
      "Confirm the current management source is permitted and preserve console or alternate recovery access before applying it.",
  },
];

const checklist = [
  "I can explain the management plane, control plane, and data plane.",
  "I know why SSH is preferred over Telnet.",
  "I can inspect usernames, enable settings, VTY lines, and SSH state.",
  "I understand the difference between enable secret and weaker legacy password handling.",
  "I know how login local and transport input ssh work together.",
  "I understand how a VTY access-class restricts management sources.",
  "I can explain why a management ACL is different from a forwarding ACL.",
  "I know why HTTP, SNMP, discovery, and other services must be reviewed rather than blindly disabled.",
  "I preserve logs and configuration evidence before broad changes.",
  "I do not publish real device configurations containing sensitive data.",
  "I verify an authorized management path before removing legacy access methods.",
  "I save only after management-plane access and required services have been tested.",
];

const reflection = [
  "Why is the management plane different from normal user traffic?",
  "Why should SSH be tested before Telnet is removed?",
  "How can a VTY access-class improve security and also create a lockout risk?",
  "Why does service password-encryption not guarantee strong credential protection?",
  "What should you verify before removing an unfamiliar administrator account?",
  "Why should hardening changes be tested before copy running-config startup-config?",
];

export default function CiscoDeviceHardeningManagementPlanePage() {
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
              href="/cyberpatriot/cisco-networking/dhcp-dns-nat-concepts"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/cisco-networking/network-troubleshooting-workflow"
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
                Cisco & Networking · Lesson 15
              </p>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Cisco Device Hardening & Management Plane
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Protect the device itself: accounts, privileged access, SSH,
                VTY lines, management source restrictions, web management,
                SNMP, discovery, logging, and other administrative services.
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                Management hardening must reduce exposure without locking out
                authorized administrators or disabling services the scenario
                explicitly requires.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Lesson Snapshot
              </p>

              <div className="mt-5 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Management methods</span>
                  <span className="font-bold text-white">6</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Inspection commands</span>
                  <span className="font-bold text-white">10+</span>
                </div>
                <div className="flex items-center justify-between gap-6 border-b border-slate-800 pb-3">
                  <span>Main remote access</span>
                  <span className="font-bold text-white">SSH</span>
                </div>
                <div className="flex items-center justify-between gap-6">
                  <span>Main goal</span>
                  <span className="font-bold text-white">Reduce management exposure</span>
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
            Harden administration without losing control of the device
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
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
              Core idea
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Secure the path administrators use to control the network
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Management-plane hardening protects credentials, remote access,
              monitoring, administrative protocols, and device identity.
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/25 bg-yellow-400/10 p-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-300">
              Competition warning
            </p>
            <h2 className="mt-3 text-2xl font-black text-white">
              Never harden yourself out of the device
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Verify the new account, SSH path, and management source before
              removing old access methods or applying restrictive ACLs.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Planes of operation
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Know what you are protecting
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
            Management methods
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Not every administrative protocol is equally safe
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {managementMethods.map((item) => (
              <div
                key={item.method}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <h3 className="text-xl font-black text-white">{item.method}</h3>
                <p className="mt-3 text-sm font-bold text-cyan-300">
                  {item.transport}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {item.security}
                </p>
                <div className="mt-4 rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-emerald-200">
                    Common use
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.use}
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
            Baseline inspection
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Read the current management plane before changing it
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {inspectionCommands.map((item) => (
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
            Device identity
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Clear identity prevents administrative mistakes
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {identityHardening.map((item) => (
              <div
                key={item.item}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.item}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
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
            Credentials
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Protect privileged and named administrative access
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {passwordConcepts.map((item) => (
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

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {localAccountWorkflow.map((item) => (
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
                <div className="mt-4 grid gap-2">
                  {item.commands.map((command) => (
                    <code
                      key={command}
                      className="block overflow-x-auto text-sm text-cyan-200"
                    >
                      {command}
                    </code>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            SSH prerequisites
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Build secure remote access in dependency order
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {sshPrerequisites.map((item) => (
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
            SSH configuration pattern
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Verify SSH before removing legacy remote access
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {sshConfig.map((item) => (
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
                <div className="mt-4 grid gap-2">
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
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-5">
            <p className="text-sm font-black text-yellow-200">
              RSA generation prompts vary
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              IOS and Packet Tracer versions can prompt for key size differently
              or expose a reduced SSH feature set. Follow the supported device
              behavior instead of forcing unsupported syntax.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            VTY controls
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Authentication, transport, timeout, and source restriction
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {vtyControls.map((item) => (
              <div
                key={item.control}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <code className="text-base font-black text-cyan-200">
                  {item.control}
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
            Management source restriction
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Limit who can even attempt remote CLI access
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {accessClassReasoning.map((item) => (
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

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {managementAclExample.map((item) => (
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
                <div className="mt-4 grid gap-2">
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
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Line security
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Review every administrative line that exists
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {lineSecurity.map((item) => (
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
            Login protection
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Slow repeated authentication abuse without blocking yourself
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {loginProtection.map((item) => (
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

          {loginProtectionExample.map((item) => (
            <div
              key={item.goal}
              className="mt-8 rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
            >
              <h3 className="text-lg font-black text-white">{item.goal}</h3>
              <div className="mt-4 grid gap-2 rounded-xl border border-slate-800 bg-slate-950 p-4">
                {item.commands.map((command) => (
                  <code
                    key={command}
                    className="block overflow-x-auto text-sm text-cyan-200"
                  >
                    {command}
                  </code>
                ))}
              </div>
              <p className="mt-4 text-sm text-emerald-200">
                Verify: <code>{item.verify}</code>
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Web management
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Do not expose a browser interface unless it is required
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {webManagement.map((item) => (
              <div
                key={item.service}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.service}</h3>
                <code className="mt-3 block overflow-x-auto text-sm text-cyan-200">
                  {item.command}
                </code>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.guidance}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {webHardeningExample.map((item) => (
              <div
                key={item.goal}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6"
              >
                <h3 className="text-lg font-black text-white">{item.goal}</h3>
                <div className="mt-4 grid gap-2">
                  {item.commands.map((command) => (
                    <code
                      key={command}
                      className="block overflow-x-auto text-sm text-cyan-200"
                    >
                      {command}
                    </code>
                  ))}
                </div>
                <p className="mt-4 text-sm text-emerald-200">
                  Verify: <code>{item.verify}</code>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            SNMP
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Monitoring is part of the management plane too
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {snmpConcepts.map((item) => (
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

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {snmpInspection.map((item) => (
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
            Discovery protocols
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Useful visibility, but still a deliberate exposure decision
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {cdpLldpConcepts.map((item) => (
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

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {discoveryInspection.map((item) => (
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
            Service minimization
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Remove exposure only after proving it is unnecessary
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {unusedServices.map((item) => (
              <div
                key={item.item}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">{item.item}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.action}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 lg:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-300">
            Time and logging
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Preserve evidence for administrative events
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {timeAndLogging.map((item) => (
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

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {loggingInspection.map((item) => (
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
            Configuration protection
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Harden carefully, document rollback, save deliberately
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {configProtection.map((item) => (
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
            Troubleshooting
          </p>
          <h2 className="mt-3 text-3xl font-black text-white">
            Use the failure pattern to isolate the management layer
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {troubleshootingCases.map((item) => (
              <div
                key={item.symptom}
                className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
              >
                <h3 className="text-lg font-black text-white">
                  {item.symptom}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.checks}
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
            Hardening decisions should follow evidence, not habit
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
            Management changes that can lock out the team or destroy evidence
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
            Choose the safest next management-plane action
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
            Prove the hardened device is still manageable
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
            Harden a fictional Cisco management plane without locking yourself out
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
                Secure management in dependency order: verify identity and
                accounts, establish SSH, restrict VTY access, review optional
                management services, preserve logging, test an authorized path,
                and only then save.
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
              href="/cyberpatriot/cisco-networking/dhcp-dns-nat-concepts"
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              &larr; Previous Lesson
            </Link>
            <Link
              href="/cyberpatriot/cisco-networking/network-troubleshooting-workflow"
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
