import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const learningGoals = [
  "Explain what Bluetooth, AirDrop, and nearby sharing are",
  "Understand why nearby sharing features should be used carefully",
  "Recognize risky signs before accepting files, photos, links, or connection requests",
  "Practice safer choices before making a device discoverable",
  "Know when to ask a trusted adult before accepting or sharing anything nearby",
];

const vocabulary = [
  {
    term: "Bluetooth",
    definition:
      "A short-range wireless feature that can connect nearby devices, such as headphones, speakers, keyboards, watches, tablets, or phones.",
  },
  {
    term: "AirDrop",
    definition:
      "An Apple sharing feature that can send photos, files, links, and other items between nearby Apple devices when sharing settings allow it.",
  },
  {
    term: "Nearby Sharing",
    definition:
      "A feature on some devices that can share files, photos, links, or information with nearby devices using wireless connections.",
  },
  {
    term: "Discoverable",
    definition:
      "A setting that allows nearby devices to see a device name or request a connection or share.",
  },
  {
    term: "Connection Request",
    definition:
      "A message asking permission to connect, pair, or share between devices.",
  },
  {
    term: "Known Device",
    definition:
      "A device that belongs to the student, family, school, or another trusted person and has been confirmed before connecting or sharing.",
  },
];

const nearbySharingSituations = [
  {
    title: "Wireless Headphones",
    explanation:
      "A student wants to connect headphones to a phone, tablet, or laptop using Bluetooth.",
    saferChoice:
      "Connect only to the correct known headphones and ask a trusted adult if unknown device names appear.",
  },
  {
    title: "Photo Sharing Nearby",
    explanation:
      "A student wants to send a photo to a friend using AirDrop or nearby sharing.",
    saferChoice:
      "Share only with the correct person and check the recipient name before sending anything.",
  },
  {
    title: "Unexpected File Request",
    explanation:
      "A student receives a nearby sharing request from a device or person they do not recognize.",
    saferChoice:
      "Decline the request and show a trusted adult if the request feels strange, repeated, or upsetting.",
  },
  {
    title: "Public Place Sharing",
    explanation:
      "A student is in a cafeteria, bus, hallway, store, or event where many devices are nearby.",
    saferChoice:
      "Keep sharing settings limited and avoid accepting files or requests from unknown nearby devices.",
  },
];

const warningSigns = [
  {
    title: "Unknown Device Name",
    text: "A device name appears that the student does not recognize or cannot connect to a trusted person or device.",
  },
  {
    title: "Unexpected File or Photo",
    text: "The student receives a file, photo, link, contact, or message they did not ask for.",
  },
  {
    title: "Public Location",
    text: "Many people and devices are nearby, so it may be harder to know who is sending or requesting something.",
  },
  {
    title: "Pressure to Accept",
    text: "Someone tells the student to accept quickly without checking what is being sent or who is sending it.",
  },
  {
    title: "Too Much Visibility",
    text: "The device is set to be visible to everyone nearby when it only needs to share with trusted contacts or known devices.",
  },
  {
    title: "Repeated Requests",
    text: "The same unknown device keeps sending connection, pairing, or sharing requests after the student ignores or declines them.",
  },
];

const scenarios = [
  {
    title: "The Unknown AirDrop",
    situation:
      "A student is sitting in a school hallway and receives an AirDrop request from a name they do not recognize.",
    warningSigns:
      "The sender is unknown, and the student did not ask to receive anything.",
    riskyResponse:
      "Accept the request because the student is curious about what it is.",
    smarterResponse:
      "Decline the request and tell a trusted adult if it repeats or feels uncomfortable.",
    whyItWorks:
      "Students should not accept unknown nearby files or photos. Declining protects the student from unwanted or unsafe content.",
  },
  {
    title: "The Speaker Mix-Up",
    situation:
      "A student wants to connect to a classroom speaker, but several Bluetooth devices with similar names appear.",
    warningSigns:
      "The student is not sure which device is the correct trusted speaker.",
    riskyResponse:
      "Tap a random device name and hope it connects.",
    smarterResponse:
      "Ask the teacher or trusted adult to confirm the correct device name before connecting.",
    whyItWorks:
      "Checking the correct device helps students avoid connecting to the wrong nearby device.",
  },
  {
    title: "The Lunchroom Share",
    situation:
      "A student wants to send a picture to a friend during lunch, but many nearby names appear in the sharing list.",
    warningSigns:
      "There are many nearby devices, and the student could choose the wrong recipient.",
    riskyResponse:
      "Send it quickly without checking the name carefully.",
    smarterResponse:
      "Confirm the correct recipient before sending and avoid sharing anything private or embarrassing.",
    whyItWorks:
      "Nearby sharing can accidentally send information to the wrong person. Checking first helps protect privacy and reputation.",
  },
  {
    title: "The Repeated Pairing Request",
    situation:
      "A student's tablet keeps showing a pairing request from an unknown device while they are on the bus.",
    warningSigns:
      "The request is repeated, unknown, and happening in a public place.",
    riskyResponse:
      "Accept the request just to make the pop-up stop.",
    smarterResponse:
      "Decline it, stop interacting with the request, and ask a trusted adult for help with the device settings.",
    whyItWorks:
      "Students should not accept unknown connection requests. Trusted help is safer than guessing in the moment.",
  },
];

const actionSteps = [
  "Share only with known people and confirmed devices.",
  "Check the recipient name before sending photos, files, links, or contacts.",
  "Decline unexpected nearby sharing or pairing requests from unknown devices.",
  "Avoid making a device visible to everyone nearby when it is not needed.",
  "Do not accept unknown files, photos, links, or contacts out of curiosity.",
  "Ask a trusted adult when nearby sharing requests feel confusing, repeated, unwanted, or unsafe.",
];

const reflectionQuestions = [
  "What do Bluetooth, AirDrop, and nearby sharing help devices do?",
  "Why should students check device names before connecting or sharing?",
  "Why can public places make nearby sharing more confusing?",
  "Why should students decline unknown files or pairing requests?",
  "Who can students ask for help with nearby sharing settings?",
];

const skillCheck = [
  {
    question:
      "A student receives an AirDrop request from a name they do not recognize. What is the safer response?",
    choices: [
      "Accept it to see what it is",
      "Decline it and ask a trusted adult if it repeats or feels uncomfortable",
      "Forward it to classmates",
    ],
    answer: "Choice B",
    explanation:
      "Students should not accept unknown nearby files or photos. Declining and asking for help is safer.",
  },
  {
    question:
      "A student sees several similar Bluetooth device names. What should they do before connecting?",
    choices: [
      "Choose a random name",
      "Ask a trusted adult to confirm the correct device",
      "Connect to all devices until one works",
    ],
    answer: "Choice B",
    explanation:
      "Students should confirm the correct device before connecting so they do not connect to an unknown or wrong device.",
  },
  {
    question:
      "A student wants to share a photo in a crowded public place. What should they check first?",
    choices: [
      "That the correct recipient is selected",
      "That the photo sends as fast as possible",
      "That everyone nearby can receive it",
    ],
    answer: "Choice A",
    explanation:
      "Students should check the recipient before sharing to avoid sending photos or files to the wrong person.",
  },
  {
    question:
      "What is a safer habit for nearby sharing settings?",
    choices: [
      "Stay visible to everyone all the time",
      "Limit sharing to trusted people or known devices when possible",
      "Accept every request so nothing is missed",
    ],
    answer: "Choice B",
    explanation:
      "Limiting nearby sharing helps reduce unwanted requests and accidental sharing.",
  },
];

const checklist = [
  "I can explain what Bluetooth, AirDrop, and nearby sharing are.",
  "I can recognize why unknown nearby requests need caution.",
  "I can check device names before connecting or sharing.",
  "I can decline unexpected files, photos, links, or pairing requests.",
  "I can think before making my device visible to nearby devices.",
  "I know when to ask a trusted adult for help with sharing settings.",
];

export default function BluetoothAirdropAndNearbySharingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-300 font-semibold">
          CyberShield Junior • Module 9 • Lesson 9.4
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Bluetooth, AirDrop, and Nearby Sharing
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mb-10">
          Bluetooth, AirDrop, and nearby sharing can make it easy to connect
          devices or send files, photos, and links. This lesson teaches students
          to check device names, limit sharing, decline unexpected requests, and
          ask for help before accepting anything from unknown nearby devices.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/junior/devices-networks-and-wifi-safety/public-wifi-safety"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Previous Lesson
          </Link>

          <Link
            href="/junior/devices-networks-and-wifi-safety"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Back to Module 9
          </Link>

          <Link
            href="/junior/devices-networks-and-wifi-safety/shared-devices-and-school-device-safety"
            className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition text-center"
          >
            Next Lesson
          </Link>

          <Link
            href="/junior"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
          >
            Back to Junior Track
          </Link>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Real-Life Hook</p>

          <div className="rounded-2xl border border-yellow-400/40 bg-yellow-400/10 p-8">
            <h2 className="text-3xl font-bold text-yellow-100 mb-4">
              Nearby sharing is convenient, but students should know who they are connecting with.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              Imagine a student is in a hallway, classroom, bus, or lunchroom
              and a nearby device asks to connect or send a file. It might be a
              friend, but it might also be someone unknown. Safe sharing means
              checking first and declining anything unexpected.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">What You Will Learn</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Nearby sharing safety starts before accepting or sending.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {learningGoals.map((goal) => (
            <div
              key={goal}
              className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 text-slate-200"
            >
              {goal}
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Safety Rule</p>

          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-8">
            <h2 className="text-3xl font-bold text-red-200 mb-4">
              Do not accept unknown nearby files, photos, links, or connection requests.
            </h2>

            <p className="text-slate-200 leading-relaxed text-lg">
              CyberShield Academy uses fake examples only. Students should not
              test unknown nearby devices, accept random files, connect to
              devices they do not recognize, or change sharing settings without
              trusted help. When a request feels strange, decline it and ask a
              trusted adult.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Core Explanation</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Nearby features should be used with known people and trusted devices.
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>
            Bluetooth, AirDrop, and nearby sharing can help students connect
            headphones, keyboards, speakers, tablets, phones, and laptops. They
            can also help people send photos, files, links, and contacts quickly
            when devices are close to each other.
          </p>

          <p>
            Because nearby sharing works around other nearby devices, students
            should slow down before accepting, connecting, or sending. They can
            ask: Do I recognize this device? Did I ask to receive this file? Am I
            sending to the correct person? Is my device visible to more people
            than necessary?
          </p>

          <p>
            Students do not need to figure out confusing sharing requests alone.
            A safer response is to decline unknown requests, check the recipient
            before sending, limit sharing settings when possible, and ask a
            trusted adult for help with device settings.
          </p>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Key Vocabulary</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Important words for understanding Bluetooth, AirDrop, and nearby sharing.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vocabulary.map((word) => (
              <div
                key={word.term}
                className="rounded-2xl bg-slate-950 border border-slate-800 p-6"
              >
                <h3 className="text-xl font-bold text-cyan-200 mb-3">
                  {word.term}
                </h3>

                <p className="text-slate-300 leading-relaxed">
                  {word.definition}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">
          Nearby Sharing Situation Breakdown
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Nearby features can create different kinds of decisions.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {nearbySharingSituations.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6"
            >
              <h3 className="text-2xl font-bold text-cyan-200 mb-3">
                {item.title}
              </h3>

              <p className="text-slate-300 leading-relaxed mb-5">
                {item.explanation}
              </p>

              <div className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 p-4">
                <h4 className="font-bold text-emerald-200 mb-2">
                  Safer Choice
                </h4>

                <p className="text-slate-200 leading-relaxed">
                  {item.saferChoice}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Warning Signs</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Nearby sharing safety means checking warning signs before accepting or sending.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {warningSigns.map((sign) => (
              <div
                key={sign.title}
                className="rounded-2xl border border-yellow-400/40 bg-yellow-400/10 p-6"
              >
                <h3 className="text-xl font-bold text-yellow-100 mb-3">
                  {sign.title}
                </h3>

                <p className="text-slate-200 leading-relaxed">{sign.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">
          Smarter Choice vs Risky Choice
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Nearby sharing should not pressure students into accepting unknown requests.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-red-400/40 bg-red-400/10 p-6">
            <h3 className="text-2xl font-bold text-red-200 mb-4">
              Risky Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              A student accepts an unknown file, connects to a random device,
              makes their device visible to everyone, or sends something without
              checking the recipient.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-6">
            <h3 className="text-2xl font-bold text-emerald-200 mb-4">
              Smarter Choice
            </h3>

            <p className="text-slate-200 leading-relaxed">
              The student checks device names, shares only with known people,
              declines unexpected requests, limits visibility, and asks a
              trusted adult when unsure.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-cyan-300 font-semibold mb-3">Scenario Lab</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Practice safer nearby sharing decisions using fake examples.
          </h2>

          <div className="space-y-6">
            {scenarios.map((scenario) => (
              <div
                key={scenario.title}
                className="rounded-2xl bg-slate-950 border border-slate-800 p-6"
              >
                <h3 className="text-2xl font-bold text-cyan-200 mb-4">
                  {scenario.title}
                </h3>

                <div className="grid lg:grid-cols-2 gap-4">
                  <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
                    <h4 className="font-bold mb-2">Situation</h4>
                    <p className="text-slate-300 leading-relaxed">
                      {scenario.situation}
                    </p>
                  </div>

                  <div className="rounded-xl border border-yellow-400/40 bg-yellow-400/10 p-4">
                    <h4 className="font-bold text-yellow-200 mb-2">
                      Warning Signs
                    </h4>
                    <p className="text-slate-200 leading-relaxed">
                      {scenario.warningSigns}
                    </p>
                  </div>

                  <div className="rounded-xl border border-red-400/40 bg-red-400/10 p-4">
                    <h4 className="font-bold text-red-200 mb-2">
                      Risky Response
                    </h4>
                    <p className="text-slate-200 leading-relaxed">
                      {scenario.riskyResponse}
                    </p>
                  </div>

                  <div className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 p-4">
                    <h4 className="font-bold text-emerald-200 mb-2">
                      Smarter Response
                    </h4>
                    <p className="text-slate-200 leading-relaxed">
                      {scenario.smarterResponse}
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-cyan-400/40 bg-cyan-400/10 p-4">
                  <h4 className="font-bold text-cyan-200 mb-2">
                    Why the Smarter Response Works
                  </h4>
                  <p className="text-slate-200 leading-relaxed">
                    {scenario.whyItWorks}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">
          Real-Life Action Steps
        </p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Use these habits before connecting, accepting, or sharing nearby.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {actionSteps.map((step) => (
            <div
              key={step}
              className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 text-slate-200"
            >
              {step}
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-y border-slate-800">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6">
            <p className="text-cyan-300 font-semibold mb-3">
              Reflection Questions
            </p>

            <h2 className="text-3xl font-bold mb-6">Think before moving on.</h2>

            <div className="space-y-3">
              {reflectionQuestions.map((question) => (
                <div
                  key={question}
                  className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 text-slate-200"
                >
                  {question}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6">
            <p className="text-cyan-300 font-semibold mb-3">Skill Check</p>

            <h2 className="text-3xl font-bold mb-6">
              Choose first, then reveal the safer answer.
            </h2>

            <div className="space-y-4">
              {skillCheck.map((item, index) => (
                <div
                  key={item.question}
                  className="rounded-xl border border-slate-800 bg-slate-900/70 p-4"
                >
                  <p className="text-sm text-cyan-300 font-semibold mb-2">
                    Question {index + 1}
                  </p>

                  <h3 className="font-bold text-cyan-200 mb-3">
                    {item.question}
                  </h3>

                  <div className="space-y-2 mb-4">
                    {item.choices.map((choice, choiceIndex) => (
                      <div
                        key={choice}
                        className="rounded-lg border border-slate-800 bg-slate-950 p-3 text-slate-200"
                      >
                        <span className="font-bold text-cyan-200">
                          Choice {String.fromCharCode(65 + choiceIndex)}:
                        </span>{" "}
                        {choice}
                      </div>
                    ))}
                  </div>

                  <details className="rounded-lg border border-emerald-400/40 bg-emerald-400/10 p-3">
                    <summary className="cursor-pointer font-bold text-emerald-200">
                      Reveal safer response
                    </summary>

                    <div className="mt-3 text-slate-200 leading-relaxed">
                      <p className="font-bold mb-2">
                        Correct Answer: {item.answer}
                      </p>

                      <p>{item.explanation}</p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-6xl mx-auto">
        <p className="text-cyan-300 font-semibold mb-3">Junior Checklist</p>

        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Before finishing Lesson 9.4, students should be able to say:
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {checklist.map((item) => (
            <div
              key={item}
              className="rounded-xl border border-emerald-400/40 bg-emerald-400/10 p-4 text-slate-200"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-16 bg-slate-900/70 border-t border-slate-800">
        <div className="max-w-5xl mx-auto rounded-2xl bg-slate-950 border border-slate-800 p-8 text-center">
          <p className="text-cyan-300 font-semibold mb-3">Navigation</p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Lesson 9.4 complete.
          </h2>

          <p className="text-slate-300 leading-relaxed mb-8">
            Next, Lesson 9.5 will explain shared devices and school device
            safety.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/junior/devices-networks-and-wifi-safety/public-wifi-safety"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Previous Lesson
            </Link>

            <Link
              href="/junior/devices-networks-and-wifi-safety"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Back to Module 9
            </Link>

            <Link
              href="/junior/devices-networks-and-wifi-safety/shared-devices-and-school-device-safety"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300 transition text-center"
            >
              Next Lesson
            </Link>

            <Link
              href="/junior"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-400 transition text-center"
            >
              Back to Junior Track
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}