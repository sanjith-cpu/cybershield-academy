import Link from "next/link";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  KeyTakeaways,
  MiniQuiz,
  ReadinessCheck,
} from "@/components/high-school/HighSchoolComponents";

const beginnerPath = "/high-school/beginner";
const previousPage = `${beginnerPath}/practice-test-2`;

const testQuestions = [
  {
    "question": "Which cybersecurity principle protects information from unauthorized viewing?",
    "choices": [
      "Confidentiality.",
      "Availability.",
      "Integrity.",
      "Redundancy."
    ],
    "answer": 0,
    "explanation": "Confidentiality limits information access to authorized people and systems."
  },
  {
    "question": "Which cybersecurity principle protects information from improper modification?",
    "choices": [
      "Availability.",
      "Integrity.",
      "Convenience.",
      "Confidentiality."
    ],
    "answer": 1,
    "explanation": "Integrity protects the accuracy and trusted state of data and systems."
  },
  {
    "question": "Which cybersecurity principle focuses on keeping approved services usable when needed?",
    "choices": [
      "Confidentiality.",
      "Classification.",
      "Integrity.",
      "Availability."
    ],
    "answer": 3,
    "explanation": "Availability ensures authorized users can access systems and data when required."
  },
  {
    "question": "What is an asset in cybersecurity?",
    "choices": [
      "Something valuable that should be protected.",
      "A severity label.",
      "Only a physical computer.",
      "A confirmed attack."
    ],
    "answer": 0,
    "explanation": "Assets can include people, accounts, data, devices, services, money, and reputation."
  },
  {
    "question": "What is a threat?",
    "choices": [
      "A trusted owner.",
      "A completed backup.",
      "A person, event, action, or condition that could cause harm.",
      "A required security control."
    ],
    "answer": 2,
    "explanation": "Threats are possible sources of harm to assets."
  },
  {
    "question": "What is a vulnerability?",
    "choices": [
      "A user role.",
      "A guaranteed incident.",
      "A weakness that could be used or triggered by a threat.",
      "A recovery owner."
    ],
    "answer": 2,
    "explanation": "Vulnerabilities are weaknesses in technology, configuration, process, or behavior."
  },
  {
    "question": "Which statement best describes risk?",
    "choices": [
      "A guaranteed cyberattack.",
      "The possibility that a threat may use a vulnerability and harm an asset.",
      "A password policy only.",
      "A device inventory only."
    ],
    "answer": 1,
    "explanation": "Risk connects assets, threats, vulnerabilities, likelihood, and impact."
  },
  {
    "question": "What is a security control?",
    "choices": [
      "A safeguard used to prevent, detect, respond to, or recover from risk.",
      "A user profile.",
      "A confirmed attacker.",
      "A public website."
    ],
    "answer": 0,
    "explanation": "Controls reduce risk through prevention, detection, response, or recovery."
  },
  {
    "question": "What does defense in depth mean?",
    "choices": [
      "Using one expensive product.",
      "Using multiple protective layers so one failed control does not expose everything.",
      "Turning off monitoring after installation.",
      "Giving every user administrator access."
    ],
    "answer": 1,
    "explanation": "Layered defenses reduce dependence on any single safeguard."
  },
  {
    "question": "Which action is the strongest first step in a risk review?",
    "choices": [
      "Buy a tool immediately.",
      "Assume every alert is malicious.",
      "Delete old logs.",
      "Identify the valuable asset and its owner."
    ],
    "answer": 3,
    "explanation": "Defenders need to understand what is being protected before selecting controls."
  },
  {
    "question": "What must be confirmed before a cybersecurity lab begins?",
    "choices": [
      "Explicit authorization and clear scope.",
      "A public website.",
      "A real administrator password.",
      "A production account."
    ],
    "answer": 0,
    "explanation": "Safe learning begins with permission and clearly defined boundaries."
  },
  {
    "question": "What does scope define?",
    "choices": [
      "The approved systems, data, tools, actions, time, and goals.",
      "Only the lesson title.",
      "Any action the learner wants to try.",
      "Every reachable system."
    ],
    "answer": 0,
    "explanation": "Scope identifies exactly what is and is not permitted."
  },
  {
    "question": "What should a learner do when permission is unclear?",
    "choices": [
      "Assume public visibility means permission.",
      "Stop and ask the responsible owner or instructor.",
      "Test only a small part.",
      "Continue because the goal is educational."
    ],
    "answer": 1,
    "explanation": "Uncertainty is not authorization."
  },
  {
    "question": "Does a publicly visible login page create permission to test it?",
    "choices": [
      "No. Public visibility does not create authorization.",
      "Yes, if the learner is curious.",
      "Yes, if no damage is intended.",
      "Yes, if only one request is sent."
    ],
    "answer": 0,
    "explanation": "Only the responsible owner or approved authority can authorize testing."
  },
  {
    "question": "What should happen when unexpected real personal data appears in a fictional lab?",
    "choices": [
      "Stop, preserve the source safely, and notify the instructor or owner.",
      "Continue and publish the data.",
      "Share it with classmates.",
      "Copy it into a personal note."
    ],
    "answer": 0,
    "explanation": "Unexpected real data creates privacy and authorization risk."
  },
  {
    "question": "Why are stop conditions important?",
    "choices": [
      "They remove privacy requirements.",
      "They pause activity when unexpected risk, real data, instability, or unclear permission appears.",
      "They replace documentation.",
      "They expand the learner's scope."
    ],
    "answer": 1,
    "explanation": "Stop conditions protect people, systems, data, evidence, and authorization boundaries."
  },
  {
    "question": "Which evidence-handling practice is strongest?",
    "choices": [
      "Share the evidence publicly.",
      "Delete timestamps.",
      "Preserve originals, document timestamps, restrict access, and work from approved copies.",
      "Edit the original evidence."
    ],
    "answer": 2,
    "explanation": "Preserving originals supports reliable review and accountability."
  },
  {
    "question": "What is privacy minimization?",
    "choices": [
      "Disabling access controls.",
      "Collecting, viewing, storing, and sharing only what the task requires.",
      "Collecting every available detail.",
      "Publishing all information."
    ],
    "answer": 1,
    "explanation": "Privacy improves when unnecessary information is not collected or exposed."
  },
  {
    "question": "What is responsible disclosure?",
    "choices": [
      "Keeping the issue secret forever.",
      "Posting the issue publicly first.",
      "Testing the issue on unrelated systems.",
      "Reporting a possible issue through an approved channel without exposing unnecessary details."
    ],
    "answer": 3,
    "explanation": "Responsible disclosure supports safe correction while protecting users and owners."
  },
  {
    "question": "Which behavior best demonstrates professional accountability?",
    "choices": [
      "Hiding errors.",
      "Claiming total confidence without evidence.",
      "Deleting case notes after completion.",
      "Documenting actions, evidence, approvals, uncertainty, mistakes, and next steps honestly."
    ],
    "answer": 3,
    "explanation": "Professional work should be transparent, accurate, and reviewable."
  },
  {
    "question": "What is an IP address used for?",
    "choices": [
      "Creating recovery codes.",
      "Storing passwords.",
      "Classifying documents.",
      "Helping devices send data to the correct network destination."
    ],
    "answer": 3,
    "explanation": "IP addresses identify network destinations for communication."
  },
  {
    "question": "What does DNS do?",
    "choices": [
      "It stores every password.",
      "It guarantees website honesty.",
      "It replaces a router.",
      "It translates domain names into network addresses."
    ],
    "answer": 3,
    "explanation": "DNS helps devices find the address associated with a domain name."
  },
  {
    "question": "Which device directs traffic between networks?",
    "choices": [
      "A monitor.",
      "A router.",
      "A keyboard.",
      "A printer driver."
    ],
    "answer": 1,
    "explanation": "Routers help data move between different networks."
  },
  {
    "question": "What is a network port?",
    "choices": [
      "A web page title.",
      "A numbered logical doorway used by applications and services.",
      "A type of backup.",
      "A physical password."
    ],
    "answer": 1,
    "explanation": "Ports help identify the service involved in communication."
  },
  {
    "question": "What is a protocol?",
    "choices": [
      "A shared set of rules that systems use to communicate.",
      "A type of malware.",
      "A data label.",
      "A user account."
    ],
    "answer": 0,
    "explanation": "Protocols define how systems exchange information."
  },
  {
    "question": "What is a network baseline?",
    "choices": [
      "A type of malware.",
      "A list of passwords.",
      "A documented pattern of expected communication used for comparison.",
      "A guarantee that every connection is safe."
    ],
    "answer": 2,
    "explanation": "Baselines help defenders compare current activity with expected patterns."
  },
  {
    "question": "Why is unusual network traffic not automatic proof of an attack?",
    "choices": [
      "Anomalies should always be ignored.",
      "Approved changes, maintenance, or legitimate activity may explain it.",
      "Network logs are never useful.",
      "Unusual traffic is always harmless."
    ],
    "answer": 1,
    "explanation": "Technical and business context are required before a reliable conclusion."
  },
  {
    "question": "What is network segmentation?",
    "choices": [
      "Separating systems or network areas to limit unnecessary communication.",
      "Deleting network logs.",
      "Disabling authentication.",
      "Giving every system access to every other system."
    ],
    "answer": 0,
    "explanation": "Segmentation reduces unnecessary access and can limit incident spread."
  },
  {
    "question": "Which evidence set is strongest for reviewing a connection?",
    "choices": [
      "Only the alert color.",
      "Source, destination, service, protocol, time, volume, and expected purpose.",
      "Only the user's opinion.",
      "Only the device wallpaper."
    ],
    "answer": 1,
    "explanation": "Strong network review combines technical details with business context."
  },
  {
    "question": "Why are timestamps important in network analysis?",
    "choices": [
      "They replace device identity.",
      "They help connect events and build an ordered timeline.",
      "They prove every event is malicious.",
      "They remove the need for logs."
    ],
    "answer": 1,
    "explanation": "Timestamps support correlation across systems and evidence sources."
  },
  {
    "question": "What does a firewall commonly do?",
    "choices": [
      "Stores every backup.",
      "Allows or blocks network traffic according to defined rules.",
      "Replaces endpoint protection.",
      "Creates all user accounts."
    ],
    "answer": 1,
    "explanation": "Firewalls enforce approved traffic rules between systems or networks."
  },
  {
    "question": "What is the safest response to a new unfamiliar cloud destination?",
    "choices": [
      "Compare it with approved changes, ownership, domain, service, and expected device groups.",
      "Assume it is malicious immediately.",
      "Block it without authority.",
      "Ignore it permanently."
    ],
    "answer": 0,
    "explanation": "New approved services can create unfamiliar but legitimate traffic."
  },
  {
    "question": "Which event should be correlated with an endpoint alert?",
    "choices": [
      "A normal login from another user.",
      "An unrelated printer message.",
      "Outbound attempts from the same device during the same time window.",
      "A scheduled class event."
    ],
    "answer": 2,
    "explanation": "Shared device and time context can connect network and endpoint evidence."
  },
  {
    "question": "Why should defenders record the direction of traffic?",
    "choices": [
      "It replaces DNS.",
      "It helps distinguish inbound requests from outbound connections.",
      "It proves the alert severity.",
      "It determines the user's password."
    ],
    "answer": 1,
    "explanation": "Traffic direction helps explain what system initiated or received communication."
  },
  {
    "question": "What is the strongest response to an unclear network anomaly?",
    "choices": [
      "Delete the logs.",
      "State that it is definitely malicious.",
      "Preserve evidence, compare with the baseline and approved changes, document uncertainty, and escalate if needed.",
      "Ignore it because it is unfamiliar."
    ],
    "answer": 2,
    "explanation": "Evidence, context, and proportionate escalation support reliable decisions."
  },
  {
    "question": "What does HTTPS mainly protect?",
    "choices": [
      "The accuracy of every page claim.",
      "The connection between the browser and the website.",
      "The safety of every download.",
      "The honesty of every website owner."
    ],
    "answer": 1,
    "explanation": "HTTPS encrypts the connection and supports certificate-based trust, but it does not guarantee honest content."
  },
  {
    "question": "Why should users read the full URL?",
    "choices": [
      "To identify the actual domain and possible look-alike spelling.",
      "To avoid checking HTTPS.",
      "To confirm the page color.",
      "To prove the site is safe because it has a logo."
    ],
    "answer": 0,
    "explanation": "Look-alike pages often imitate appearance while using a different domain."
  },
  {
    "question": "What is the safest response to a browser certificate warning?",
    "choices": [
      "Disable browser security.",
      "Do not continue or enter information; use a trusted route and report the warning if needed.",
      "Enter credentials quickly.",
      "Ignore it because warnings are harmless."
    ],
    "answer": 1,
    "explanation": "Certificate warnings should not be bypassed casually."
  },
  {
    "question": "Which statement about the padlock icon is correct?",
    "choices": [
      "It guarantees every file is safe.",
      "It proves the website owner is honest.",
      "It indicates a protected connection, not that every request or claim on the page is trustworthy.",
      "It makes URL review unnecessary."
    ],
    "answer": 2,
    "explanation": "The padlock describes connection protection, not the legitimacy of all content."
  },
  {
    "question": "What should a user do with an unexpected download?",
    "choices": [
      "Rename it and try again.",
      "Share it with friends.",
      "Avoid opening it, preserve relevant details, and report it.",
      "Run it immediately."
    ],
    "answer": 2,
    "explanation": "Unexpected files should not be opened or executed during beginner review."
  },
  {
    "question": "What should a user do when a page requests an unnecessary browser permission?",
    "choices": [
      "Approve every permission.",
      "Enter credentials first.",
      "Disable browser protections.",
      "Deny or pause, verify the need, and use the official service through a trusted route."
    ],
    "answer": 3,
    "explanation": "Browser permissions should match a verified and expected purpose."
  },
  {
    "question": "What is a browser cookie?",
    "choices": [
      "A network router.",
      "A password manager.",
      "Data a website stores in the browser to remember sessions, preferences, or activity.",
      "A type of malware in every case."
    ],
    "answer": 2,
    "explanation": "Cookies can support useful functions but should be managed with privacy awareness."
  },
  {
    "question": "Which combination is a strong warning sign for a fake login page?",
    "choices": [
      "A verified bookmark and expected login.",
      "A page with no request.",
      "A look-alike domain, urgent language, and a request for credentials.",
      "A normal school announcement."
    ],
    "answer": 2,
    "explanation": "Look-alike spelling, pressure, and credential requests strongly increase risk."
  },
  {
    "question": "What is the safest way to access an important service after receiving a suspicious link?",
    "choices": [
      "Forward the link to friends.",
      "Open the official app, trusted bookmark, or manually entered official address.",
      "Use the suspicious link quickly.",
      "Reply with the password."
    ],
    "answer": 1,
    "explanation": "A trusted route avoids relying on an unverified message link."
  },
  {
    "question": "Why is a familiar logo weak evidence of legitimacy?",
    "choices": [
      "Only browsers display logos.",
      "Logos and page designs can be copied easily.",
      "A logo always proves ownership.",
      "Logos cannot appear online."
    ],
    "answer": 1,
    "explanation": "Attackers can imitate trusted branding without controlling the legitimate domain."
  },
  {
    "question": "Why should important accounts use unique passwords?",
    "choices": [
      "So one exposed password does not endanger every other account.",
      "So MFA becomes unnecessary.",
      "So passwords are easier to share.",
      "So recovery can be disabled."
    ],
    "answer": 0,
    "explanation": "Unique credentials limit damage when one password is exposed."
  },
  {
    "question": "What is the main purpose of a password manager?",
    "choices": [
      "To publish passwords.",
      "To generate and securely store unique passwords.",
      "To replace every security control.",
      "To disable recovery options."
    ],
    "answer": 1,
    "explanation": "Password managers make strong, unique credentials practical across many accounts."
  },
  {
    "question": "What does multi-factor authentication add?",
    "choices": [
      "Automatic administrator access.",
      "A public recovery code.",
      "Another type of verification beyond the password.",
      "A second copy of the same password."
    ],
    "answer": 2,
    "explanation": "MFA reduces dependence on a password alone."
  },
  {
    "question": "What is the safest response to an unexpected MFA approval request?",
    "choices": [
      "Deny it and review the account through the official service.",
      "Approve it quickly.",
      "Disable MFA permanently.",
      "Share the code with the requester."
    ],
    "answer": 0,
    "explanation": "Unexpected MFA prompts may indicate attempted account access."
  },
  {
    "question": "Why should recovery codes be protected?",
    "choices": [
      "They may allow account access when the normal authentication method is unavailable.",
      "They should be posted online.",
      "They are harmless public information.",
      "They replace every password."
    ],
    "answer": 0,
    "explanation": "Recovery codes can provide powerful account access."
  },
  {
    "question": "What is least privilege?",
    "choices": [
      "Keeping all old permissions.",
      "Giving every user administrator access.",
      "Removing all access from everyone.",
      "Giving an identity only the minimum access needed for approved responsibilities."
    ],
    "answer": 3,
    "explanation": "Least privilege limits unnecessary exposure and misuse."
  },
  {
    "question": "What is the difference between authentication and authorization?",
    "choices": [
      "Authorization checks only passwords.",
      "Authentication verifies identity; authorization determines permitted access.",
      "They are exactly the same.",
      "Authentication grants administrator rights."
    ],
    "answer": 1,
    "explanation": "One process confirms who the user is, while the other defines what the user may do."
  },
  {
    "question": "Why are shared administrator accounts risky?",
    "choices": [
      "They remove the need for logs.",
      "They make MFA unnecessary.",
      "They always improve security.",
      "They weaken accountability and make actions harder to trace."
    ],
    "answer": 3,
    "explanation": "Named accounts support accountability and investigation."
  },
  {
    "question": "What should happen to a former contractor account?",
    "choices": [
      "Share it with another person.",
      "Delete all related logs first.",
      "Leave it active forever.",
      "Disable or suspend it through the approved offboarding process."
    ],
    "answer": 3,
    "explanation": "Accounts should not remain active after the approved need ends."
  },
  {
    "question": "Which access-review decision is strongest?",
    "choices": [
      "Use one shared administrator account.",
      "Keep every old permission.",
      "Remove permissions that are no longer required and document the change.",
      "Grant more access just in case."
    ],
    "answer": 2,
    "explanation": "Access should match current responsibilities and least privilege."
  },
  {
    "question": "What is an account session?",
    "choices": [
      "A type of backup.",
      "A browser warning.",
      "An authenticated period during which a user remains signed in.",
      "A firewall rule."
    ],
    "answer": 2,
    "explanation": "Session review can help identify unfamiliar or unauthorized account activity."
  },
  {
    "question": "What should a user do after noticing an unfamiliar active session?",
    "choices": [
      "Share the password.",
      "Ignore it permanently.",
      "Use the official account controls to end it, secure the account, and review recent activity.",
      "Approve all pending MFA requests."
    ],
    "answer": 2,
    "explanation": "Unfamiliar sessions may indicate unauthorized access and should be handled through trusted account controls."
  },
  {
    "question": "Which recovery method is strongest?",
    "choices": [
      "A stranger's email address.",
      "An old number no longer controlled by the user.",
      "A public note.",
      "A current trusted method protected by MFA and regular review."
    ],
    "answer": 3,
    "explanation": "Recovery methods should remain current, trusted, and protected."
  },
  {
    "question": "Why should privileged accounts receive extra protection?",
    "choices": [
      "They never require monitoring.",
      "They should always be shared.",
      "They can affect more systems, users, settings, or data.",
      "They cannot be compromised."
    ],
    "answer": 2,
    "explanation": "Greater access creates greater potential impact."
  },
  {
    "question": "What should be documented during an access review?",
    "choices": [
      "Only the password length.",
      "Only the final severity.",
      "The account, role, current need, permissions, evidence, approver, change, and follow-up date.",
      "Only the username."
    ],
    "answer": 2,
    "explanation": "Complete documentation supports accountability and future review."
  },
  {
    "question": "What is data classification?",
    "choices": [
      "Giving everyone the same access.",
      "Labeling information by sensitivity, value, and required protection.",
      "Deleting every file.",
      "Sharing all data publicly."
    ],
    "answer": 1,
    "explanation": "Classification guides access, storage, sharing, retention, and protection."
  },
  {
    "question": "Which privacy setting is strongest for personal profile details?",
    "choices": [
      "Limit visibility to the smallest appropriate audience.",
      "Share recovery information.",
      "Make all details public.",
      "Publish exact location history."
    ],
    "answer": 0,
    "explanation": "Privacy improves when personal information is shared only with the intended audience."
  },
  {
    "question": "What should happen to an app permission that is no longer needed?",
    "choices": [
      "Grant additional access.",
      "Keep every permission forever.",
      "Share the account password.",
      "Remove the permission and verify the app still works as required."
    ],
    "answer": 3,
    "explanation": "Permissions should match current need."
  },
  {
    "question": "What should happen to an old public sharing link after a project ends?",
    "choices": [
      "Leave it active forever.",
      "Post it more widely.",
      "Remove the file owner.",
      "Restrict or remove it and review current access."
    ],
    "answer": 3,
    "explanation": "Sharing should match current business or learning need."
  },
  {
    "question": "Which cloud-storage practice is strongest?",
    "choices": [
      "Use restricted sharing, clear ownership, classification, and regular access review.",
      "Use public links for every file.",
      "Remove all owners.",
      "Store recovery codes in shared folders."
    ],
    "answer": 0,
    "explanation": "Cloud data needs access control, ownership, and review."
  },
  {
    "question": "What is data retention?",
    "choices": [
      "A browser warning.",
      "A rule for how long information should be kept and when it should be removed.",
      "A password strength score.",
      "A router setting."
    ],
    "answer": 1,
    "explanation": "Retention reduces unnecessary storage and supports legal and operational requirements."
  },
  {
    "question": "What is secure disposal?",
    "choices": [
      "Moving data to a public folder.",
      "Keeping every copy forever.",
      "Removing data or media through an approved process so it cannot be recovered improperly.",
      "Renaming a file."
    ],
    "answer": 2,
    "explanation": "Sensitive information should be removed through approved methods."
  },
  {
    "question": "Which backup plan is strongest?",
    "choices": [
      "One copy on the same device.",
      "No restore testing.",
      "Separate protected copies, clear ownership, regular testing, and documented recovery goals.",
      "No owner."
    ],
    "answer": 2,
    "explanation": "Strong backups require separation, protection, ownership, and validation."
  },
  {
    "question": "What does restore validation confirm?",
    "choices": [
      "That the password is strong.",
      "That old files were deleted.",
      "That backup data can actually be recovered and used.",
      "Only that a backup job started."
    ],
    "answer": 2,
    "explanation": "A backup is trustworthy only when recovery can be tested safely."
  },
  {
    "question": "What does the recovery point objective describe?",
    "choices": [
      "The firewall rule count.",
      "The number of users.",
      "The password length.",
      "The acceptable amount of data loss."
    ],
    "answer": 3,
    "explanation": "The recovery point objective addresses how much recent data loss is acceptable."
  },
  {
    "question": "What does the recovery time objective describe?",
    "choices": [
      "The age of the backup server.",
      "The target time for restoring service.",
      "The number of recovery codes.",
      "The time a user logs in."
    ],
    "answer": 1,
    "explanation": "The recovery time objective describes how quickly service should be restored."
  },
  {
    "question": "Why should backup access be restricted?",
    "choices": [
      "Public access improves integrity.",
      "Restrictions make recovery impossible.",
      "Backups may contain large amounts of sensitive and historical information.",
      "Backups never contain data."
    ],
    "answer": 2,
    "explanation": "Backup repositories are valuable targets and require strong access control."
  },
  {
    "question": "Why should important data have more than one protected copy?",
    "choices": [
      "A single copy can be lost, damaged, encrypted, deleted, or become unavailable.",
      "One copy is always enough.",
      "Multiple copies guarantee perfect recovery.",
      "More copies remove the need for access control."
    ],
    "answer": 0,
    "explanation": "Separate copies reduce dependence on one device or location."
  },
  {
    "question": "What is the strongest response to an unowned backup process?",
    "choices": [
      "Assign a responsible owner, document duties, and schedule restore validation.",
      "Assume the backup will work.",
      "Disable recovery testing.",
      "Delete backup logs."
    ],
    "answer": 0,
    "explanation": "Clear ownership is necessary for reliable recovery."
  },
  {
    "question": "Which privacy review question is strongest?",
    "choices": [
      "Is this information necessary, who can see it, how long is it kept, and how is it protected?",
      "Can more people access it?",
      "Does the page look attractive?",
      "Can retention be unlimited?"
    ],
    "answer": 0,
    "explanation": "Privacy review focuses on necessity, audience, retention, and protection."
  },
  {
    "question": "What is phishing?",
    "choices": [
      "A secure login method.",
      "A routine software update.",
      "A deceptive attempt to influence someone into revealing information or taking an unsafe action.",
      "A type of backup."
    ],
    "answer": 2,
    "explanation": "Phishing uses deceptive messages or websites to manipulate the target."
  },
  {
    "question": "What is social engineering?",
    "choices": [
      "Testing backups.",
      "Using deception, pressure, impersonation, trust, or emotion to influence a person.",
      "Installing approved software.",
      "Encrypting a connection."
    ],
    "answer": 1,
    "explanation": "Social engineering targets human judgment and behavior."
  },
  {
    "question": "Which phishing indicator is strongest?",
    "choices": [
      "A professional design.",
      "Correct spelling.",
      "A mismatched domain combined with urgency and a request for credentials.",
      "A familiar logo alone."
    ],
    "answer": 2,
    "explanation": "Strong triage combines sender, domain, urgency, request, and link evidence."
  },
  {
    "question": "Why is the display name weak evidence of the sender's identity?",
    "choices": [
      "Display names are never shown.",
      "Only trusted senders use names.",
      "It can be copied while the real sending address is different.",
      "The address never matters."
    ],
    "answer": 2,
    "explanation": "The full address and domain provide stronger evidence."
  },
  {
    "question": "What should happen to an unexpected attachment?",
    "choices": [
      "Forward it to classmates.",
      "Upload it publicly.",
      "Open it immediately.",
      "Do not open it; preserve the message and follow the approved review process."
    ],
    "answer": 3,
    "explanation": "Unexpected attachments should not be opened or executed."
  },
  {
    "question": "What should a user do with a suspicious password-reset message?",
    "choices": [
      "Forward the message widely.",
      "Reply with the old password.",
      "Click the link immediately.",
      "Avoid the link and access the official account page directly."
    ],
    "answer": 3,
    "explanation": "Using the official service directly avoids relying on an untrusted link."
  },
  {
    "question": "Why should the original suspicious message be preserved?",
    "choices": [
      "It proves the sender is malicious.",
      "It makes the link safe.",
      "It removes the need for reporting.",
      "It may contain headers, timestamps, sender details, URLs, and other evidence."
    ],
    "answer": 3,
    "explanation": "The original message may contain important investigation evidence."
  },
  {
    "question": "What is impersonation?",
    "choices": [
      "A backup method.",
      "A data label.",
      "Pretending to be a trusted person, organization, or service.",
      "A secure protocol."
    ],
    "answer": 2,
    "explanation": "Impersonation attempts to gain trust by copying a known identity."
  },
  {
    "question": "Which emotional technique is common in social engineering?",
    "choices": [
      "Urgency, fear, curiosity, authority, or sympathy.",
      "Clear documentation.",
      "Least privilege.",
      "Independent verification."
    ],
    "answer": 0,
    "explanation": "Attackers often use emotion to reduce careful thinking."
  },
  {
    "question": "What is the safest response to a message requesting an MFA code?",
    "choices": [
      "Post the code publicly.",
      "Disable MFA.",
      "Send the code quickly.",
      "Do not share it; verify the account through the official service and report the request."
    ],
    "answer": 3,
    "explanation": "MFA codes should never be shared with message senders."
  },
  {
    "question": "What is the safest way to verify an unusual request from a known person?",
    "choices": [
      "Use the provided phone number without checking.",
      "Contact the person through a separate trusted channel.",
      "Assume the display name proves identity.",
      "Reply only to the suspicious message."
    ],
    "answer": 1,
    "explanation": "Independent verification helps detect impersonation."
  },
  {
    "question": "Which message should receive the highest phishing priority?",
    "choices": [
      "A verified class reminder.",
      "A message with no request.",
      "A normal newsletter.",
      "A privileged user's message with a look-alike domain, credential request, and reported link click."
    ],
    "answer": 3,
    "explanation": "Privilege, possible interaction, and strong indicators increase risk."
  },
  {
    "question": "What should a defender record during email triage?",
    "choices": [
      "Only the final severity.",
      "Sender, recipient, subject, time, links, attachments, request, indicators, user action, and decision.",
      "Only the display name.",
      "Only the message color."
    ],
    "answer": 1,
    "explanation": "Structured evidence supports reliable review and correlation."
  },
  {
    "question": "Why should suspicious content not be forwarded to friends for testing?",
    "choices": [
      "Testing removes the need for reporting.",
      "Friends always have better tools.",
      "It may spread risk and expose more people.",
      "Forwarding proves the message is safe."
    ],
    "answer": 2,
    "explanation": "Suspicious content should remain within approved reporting and review channels."
  },
  {
    "question": "Which conclusion is strongest when evidence is incomplete?",
    "choices": [
      "No documentation is needed.",
      "The message is definitely safe.",
      "The sender is definitely an attacker.",
      "The message is suspicious and requires review, but malicious intent is not yet confirmed."
    ],
    "answer": 3,
    "explanation": "Defenders should state what is known and what remains uncertain."
  },
  {
    "question": "What is malware?",
    "choices": [
      "A backup schedule.",
      "Software designed to disrupt, damage, spy on, steal from, or gain unauthorized access.",
      "A secure browser setting.",
      "A password manager."
    ],
    "answer": 1,
    "explanation": "Malware is software created for harmful or unauthorized purposes."
  },
  {
    "question": "What is an endpoint alert?",
    "choices": [
      "Automatic proof of compromise.",
      "A backup schedule.",
      "A password type.",
      "A notification about suspicious or policy-related activity on a managed device."
    ],
    "answer": 3,
    "explanation": "Endpoint alerts are starting points for investigation."
  },
  {
    "question": "What should happen to a suspicious file during beginner analysis?",
    "choices": [
      "Execute it again.",
      "Send it to classmates.",
      "Upload it publicly.",
      "Do not open or run it; preserve evidence and follow the approved playbook."
    ],
    "answer": 3,
    "explanation": "Suspicious files should never be executed or shared during beginner review."
  },
  {
    "question": "What does an endpoint process chain show?",
    "choices": [
      "Only the alert severity.",
      "Only the user's role.",
      "Only the device name.",
      "The sequence of programs, files, or actions connected to an event."
    ],
    "answer": 3,
    "explanation": "Process chains help explain how activity started and what followed."
  },
  {
    "question": "What is containment?",
    "choices": [
      "Deleting all logs.",
      "Ignoring the alert.",
      "An approved action used to limit possible harm while preserving evidence.",
      "Sharing suspicious files."
    ],
    "answer": 2,
    "explanation": "Containment limits risk while protecting evidence."
  },
  {
    "question": "Why is a blocked script not enough to close a case?",
    "choices": [
      "Related account, email, network, or recovery evidence may remain unresolved.",
      "Logs are unnecessary.",
      "Blocked events are always harmless.",
      "The script should be run again."
    ],
    "answer": 0,
    "explanation": "One successful control may stop only part of the activity."
  },
  {
    "question": "What is correlation?",
    "choices": [
      "Connecting related users, accounts, devices, messages, alerts, logs, and timestamps.",
      "Assigning every alert to a different team.",
      "Deleting duplicate alerts.",
      "Changing all alerts to high severity."
    ],
    "answer": 0,
    "explanation": "Correlation helps defenders see a complete supported pattern."
  },
  {
    "question": "Which factor should influence incident priority?",
    "choices": [
      "Only the alert color.",
      "Only the number of alerts.",
      "Evidence, impact, urgency, spread risk, privilege, and uncertainty.",
      "Only the first timestamp."
    ],
    "answer": 2,
    "explanation": "Priority should reflect actual risk and context."
  },
  {
    "question": "Why is case ownership important?",
    "choices": [
      "It makes someone responsible for coordination, documentation, escalation, and follow-up.",
      "It removes the need for teamwork.",
      "It replaces evidence preservation.",
      "It proves the case is malicious."
    ],
    "answer": 0,
    "explanation": "Clear ownership prevents gaps and duplicated work."
  },
  {
    "question": "What is escalation?",
    "choices": [
      "Deleting the case.",
      "Ignoring the alert.",
      "Sharing evidence publicly.",
      "Moving a case to a more specialized or authorized responder when risk or uncertainty requires it."
    ],
    "answer": 3,
    "explanation": "Escalation ensures the right expertise and authority are involved."
  },
  {
    "question": "Which incident timeline is strongest?",
    "choices": [
      "A guess about what happened.",
      "An ordered record of relevant events, evidence, actions, owners, and decisions.",
      "Only the final alert.",
      "A list with no timestamps."
    ],
    "answer": 1,
    "explanation": "Timelines support sequence analysis and correlation."
  },
  {
    "question": "What should be documented in a case?",
    "choices": [
      "Only the final score.",
      "Evidence, facts, uncertainty, decisions, owners, actions, limitations, and next steps.",
      "Only the user's opinion.",
      "Only the alert title."
    ],
    "answer": 1,
    "explanation": "Complete documentation supports accountability and follow-up."
  },
  {
    "question": "What should a defender do when evidence is incomplete?",
    "choices": [
      "State total confidence.",
      "Invent missing details.",
      "Close the case immediately.",
      "Document uncertainty, gather approved context, choose a proportionate action, and escalate when needed."
    ],
    "answer": 3,
    "explanation": "Honest uncertainty supports safer decisions."
  },
  {
    "question": "Which case deserves the highest priority?",
    "choices": [
      "A normal approved update.",
      "A resolved printer notice.",
      "A privileged account, suspicious email, unfamiliar login, blocked script, and related outbound attempts.",
      "A harmless wallpaper change."
    ],
    "answer": 2,
    "explanation": "Privilege, correlation, possible impact, and active evidence increase priority."
  },
  {
    "question": "What is the strongest multi-alert response?",
    "choices": [
      "Ask users for passwords and MFA codes.",
      "Correlate evidence, prioritize by risk, assign ownership, take authorized actions, and document the timeline.",
      "Delete low-severity alerts before review.",
      "Handle every alert separately."
    ],
    "answer": 1,
    "explanation": "Coordinated defensive work depends on correlation, prioritization, authorization, ownership, and documentation."
  },
  {
    "question": "What is encryption?",
    "choices": [
      "Deleting data permanently.",
      "Transforming readable data into protected form using a key.",
      "Publishing data publicly.",
      "Renaming a file."
    ],
    "answer": 1,
    "explanation": "Encryption protects confidentiality by making data unreadable without the appropriate key."
  },
  {
    "question": "What is decryption?",
    "choices": [
      "Transforming encrypted data back into readable form using the appropriate key.",
      "Deleting a certificate.",
      "Changing a filename.",
      "Creating a password hint."
    ],
    "answer": 0,
    "explanation": "Decryption restores readable data for an authorized party."
  },
  {
    "question": "What is hashing commonly used for?",
    "choices": [
      "Creating public sharing links.",
      "Creating a fixed-length value used for integrity checking and password-storage concepts.",
      "Routing network traffic.",
      "Reversibly encrypting every file."
    ],
    "answer": 1,
    "explanation": "Hashes can help detect changes and support secure password storage designs."
  },
  {
    "question": "Which statement about hashing is correct?",
    "choices": [
      "A hash is the same as plain text.",
      "Hashing routes traffic.",
      "A secure hash is designed to be one-way rather than normally reversible.",
      "Every hash can be decrypted with a browser."
    ],
    "answer": 2,
    "explanation": "Hashing differs from reversible encryption."
  },
  {
    "question": "What is encoding?",
    "choices": [
      "Representing data in another format for compatibility or transport, not for secrecy.",
      "A firewall rule.",
      "An account recovery process.",
      "A guaranteed encryption method."
    ],
    "answer": 0,
    "explanation": "Encoding changes representation but usually does not provide confidentiality."
  },
  {
    "question": "Why must cryptographic keys be protected?",
    "choices": [
      "A stolen key may allow unauthorized decryption or signing.",
      "Keys replace all access controls.",
      "Keys are always public.",
      "Keys cannot affect security."
    ],
    "answer": 0,
    "explanation": "Key protection is essential to cryptographic trust."
  },
  {
    "question": "What is a digital certificate used for in HTTPS concepts?",
    "choices": [
      "Replacing DNS.",
      "Storing all passwords.",
      "Guaranteeing every page claim is honest.",
      "Helping a browser verify the identity associated with a secure connection."
    ],
    "answer": 3,
    "explanation": "Certificates support identity and encrypted connection establishment."
  },
  {
    "question": "What is an integrity check?",
    "choices": [
      "A routing protocol.",
      "A password-reset message.",
      "A method used to detect whether data has changed.",
      "A public-sharing setting."
    ],
    "answer": 2,
    "explanation": "Integrity checks help identify unexpected modification."
  },
  {
    "question": "Which statement correctly compares encryption and hashing?",
    "choices": [
      "They are exactly the same.",
      "Encryption cannot protect data.",
      "Hashing always uses a browser certificate.",
      "Encryption is designed to be reversed with a key; hashing is generally designed to be one-way."
    ],
    "answer": 3,
    "explanation": "Encryption and hashing serve different security purposes."
  },
  {
    "question": "What is the safest beginner practice for cryptographic secrets?",
    "choices": [
      "Share passwords with classmates.",
      "Use fictional examples and never expose real private keys, passwords, or recovery codes.",
      "Post real keys for proof.",
      "Use production secrets in demonstrations."
    ],
    "answer": 1,
    "explanation": "Real secrets should never be included in beginner practice or portfolios."
  },
  {
    "question": "What makes a strong portfolio artifact?",
    "choices": [
      "It is the longest file.",
      "It demonstrates a specific skill through clear evidence and explanation.",
      "It contains private information.",
      "It uses the most technical words possible."
    ],
    "answer": 1,
    "explanation": "Strong artifacts connect a skill claim with understandable evidence."
  },
  {
    "question": "Why is redaction important?",
    "choices": [
      "It guarantees expert-level work.",
      "It protects sensitive, private, identifying, and unnecessary information.",
      "It hides all learning evidence.",
      "It removes the need for permission."
    ],
    "answer": 1,
    "explanation": "Redaction protects information while preserving useful evidence."
  },
  {
    "question": "Which beginner skill claim is most credible?",
    "choices": [
      "I know everything about cybersecurity.",
      "I can analyze a fictional phishing report by reviewing evidence, uncertainty, and safe next actions.",
      "I never make mistakes.",
      "I am an expert because I completed one quiz."
    ],
    "answer": 1,
    "explanation": "Specific, limited, evidence-based claims are more credible."
  },
  {
    "question": "What should a reflection include?",
    "choices": [
      "What was learned, what evidence shows it, what was difficult, what changed, and what comes next.",
      "Only positive statements.",
      "Only the score.",
      "Only the title."
    ],
    "answer": 0,
    "explanation": "Reflection should be specific, honest, and focused on growth."
  },
  {
    "question": "What is a knowledge gap?",
    "choices": [
      "A completed lesson.",
      "A concept, process, or decision area that still needs review or practice.",
      "A certificate.",
      "A correct answer."
    ],
    "answer": 1,
    "explanation": "Knowledge gaps guide focused review."
  },
  {
    "question": "How should a learner prioritize final review?",
    "choices": [
      "Focus first on high-impact topics with weak evidence, repeated mistakes, or low confidence.",
      "Study every topic for the same amount of time.",
      "Review only favorite topics.",
      "Ignore missed questions."
    ],
    "answer": 0,
    "explanation": "Targeted review is stronger than treating all topics equally."
  },
  {
    "question": "What should happen after a missed practice question?",
    "choices": [
      "Ignore it permanently.",
      "Change the answer key.",
      "Review the explanation, identify the misunderstanding, practice again, and record the gap.",
      "Memorize only the answer letter."
    ],
    "answer": 2,
    "explanation": "Missed questions should become specific improvement actions."
  },
  {
    "question": "Which evidence should lower a confidence rating?",
    "choices": [
      "A complete checklist.",
      "A revised artifact.",
      "One correctly explained practice set.",
      "Repeated missed questions and weak explanations in the same domain."
    ],
    "answer": 3,
    "explanation": "Confidence should match actual evidence of understanding."
  },
  {
    "question": "What is the best use of a practice-test score?",
    "choices": [
      "Memorize answer letters.",
      "Ignore missed questions.",
      "Treat it as the only measure of ability.",
      "Identify weak domains, review explanations, and build a targeted study plan."
    ],
    "answer": 3,
    "explanation": "Practice scores are useful when they guide review and improvement."
  },
  {
    "question": "What should happen before moving from Beginner to a more advanced track?",
    "choices": [
      "Claim expert status immediately.",
      "Confirm foundational readiness, review weak areas, and continue learning with accurate skill claims.",
      "Skip all missed topics.",
      "Publish private evidence."
    ],
    "answer": 1,
    "explanation": "Strong progression is based on evidence, reflection, ethics, and continued practice."
  }
];

function SectionCard({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-950/20">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      <div className="mt-4 text-slate-300">{children}</div>
    </section>
  );
}

export default function BeginnerFinalTestPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_35%),linear-gradient(135deg,_#020617_0%,_#0f172a_55%,_#111827_100%)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8 flex flex-wrap gap-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2">
              High School Beginner
            </span>
            <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-emerald-200">
              Final Assessment
            </span>
            <span className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2">
              125 Questions
            </span>
          </div>

          <h1 className="max-w-5xl text-4xl font-black tracking-tight text-white md:text-6xl">
            High School Beginner Final Test
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Complete the comprehensive 125-question assessment covering the
            entire Beginner Track: foundations, ethics, networking, web safety,
            identity, access, privacy, data, backups, threats, defensive
            operations, cryptography, careers, portfolios, and readiness.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={previousPage}
              className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Previous: Practice Test 2
            </Link>
            <Link
              href={beginnerPath}
              className="rounded-full border border-slate-700 px-5 py-3 font-bold text-slate-200 transition hover:border-cyan-400 hover:text-cyan-200"
            >
              Beginner Track
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10">
        <ReadinessCheck
          title="Before You Begin"
          items={[
            "I completed all fifteen Beginner modules and both 50-question practice tests.",
            "I reviewed repeated mistakes and can explain my weakest domains.",
            "I will answer all 125 questions before submitting the final assessment.",
          ]}
        />

        <SectionCard
          eyebrow="Final Test Instructions"
          title="Complete All 125 Questions"
        >
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-4">
              <p className="font-bold text-cyan-100">Step 1</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Work independently and read every answer choice.
              </p>
            </div>
            <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-4">
              <p className="font-bold text-cyan-100">Step 2</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Select the strongest ethical, evidence-based, and defensive answer.
              </p>
            </div>
            <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-4">
              <p className="font-bold text-cyan-100">Step 3</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Submit once to reveal your score and all explanations.
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-xl border border-yellow-400/30 bg-yellow-400/10 p-4 text-yellow-50">
            Answers and explanations remain hidden until submission. Because
            this is the final assessment, review every unanswered question
            before submitting.
          </div>
        </SectionCard>

        <SectionCard
          eyebrow="Assessment Coverage"
          title="Ten Beginner Knowledge Domains"
        >
          <div className="grid gap-3 md:grid-cols-2">
            {[
              "Cybersecurity foundations, CIA, assets, threats, vulnerabilities, risks, controls, and defense in depth.",
              "Ethics, authorization, scope, privacy, evidence handling, stop conditions, and responsible disclosure.",
              "Networking, IP addresses, DNS, routers, ports, protocols, baselines, firewalls, and segmentation.",
              "Web safety, URLs, HTTPS, certificates, browser permissions, cookies, look-alike pages, and downloads.",
              "Digital identity, passwords, password managers, MFA, recovery, least privilege, access reviews, and sessions.",
              "Privacy, data classification, cloud sharing, retention, disposal, backups, restore validation, RPO, and RTO.",
              "Phishing, social engineering, impersonation, message triage, suspicious links, attachments, and reporting.",
              "Endpoint alerts, malware concepts, containment, correlation, prioritization, ownership, escalation, and timelines.",
              "Encryption, decryption, hashing, encoding, keys, certificates, and integrity checks.",
              "Careers, portfolios, redaction, reflections, skill claims, knowledge gaps, practice evidence, and readiness.",
            ].map((domain) => (
              <div
                key={domain}
                className="rounded-xl border border-slate-700 bg-slate-950 p-4 text-sm leading-6 text-slate-300"
              >
                {domain}
              </div>
            ))}
          </div>
        </SectionCard>

        <MiniQuiz
          title="High School Beginner Final Test"
          questions={testQuestions}
        />

        <KeyTakeaways
          takeaways={[
            "The final score should be supported by explanations, ethical judgment, and evidence-based reasoning.",
            "Strong cybersecurity decisions connect people, accounts, devices, networks, data, controls, and recovery.",
            "Authorization, scope, privacy, and safe evidence handling apply across every cybersecurity domain.",
            "Alerts and unusual activity require context before a reliable conclusion.",
            "Beginner completion is a foundation for continued supervised, ethical, and defensive learning.",
          ]}
        />

        <section className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-200">
            Beginner Track Assessment Complete
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Review Your Results and Record Your Growth
          </h2>
          <p className="mt-3 max-w-3xl leading-7 text-emerald-50">
            Review every missed explanation, record remaining knowledge gaps,
            and return to the Beginner Track to revisit any lesson that needs
            more practice.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={previousPage}
              className="rounded-xl border border-emerald-300/40 px-5 py-3 font-bold text-emerald-50 transition hover:border-white"
            >
              Previous: Practice Test 2
            </Link>
            <Link
              href={beginnerPath}
              className="rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Return to Beginner Track
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}