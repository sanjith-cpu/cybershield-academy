"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const feedbackUses = [
  "Improve lessons for different grade levels",
  "Understand which activities students find most helpful",
  "Collect teacher suggestions for classroom use",
  "Track what students want to learn next",
  "Improve outreach presentations over time",
];

const futureQuestions = [
  "Was the lesson easy to understand?",
  "Which activity helped you learn the most?",
  "What cybersecurity topic should be added next?",
  "Was the presentation the right difficulty level?",
  "Would you recommend CyberShield Academy to another student?",
];

export default function FeedbackPage() {
  const [role, setRole] = useState("");
  const [audience, setAudience] = useState("");
  const [rating, setRating] = useState("");
  const [helpful, setHelpful] = useState("");
  const [improve, setImprove] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    setSubmitted(true);
  }

  function resetForm() {
    setRole("");
    setAudience("");
    setRating("");
    setHelpful("");
    setImprove("");
    setSubmitted(false);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="px-8 py-24 max-w-6xl mx-auto">
        <p className="mb-4 text-cyan-400 font-semibold">
          Feedback Center
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Help improve CyberShield Academy.
        </h1>

        <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
          Feedback helps CyberShield Academy improve lessons, activities,
          outreach sessions, and student resources. This page is a demo feedback
          form for future students, teachers, parents, and volunteers.
        </p>
      </section>

      <section className="px-8 py-16 bg-slate-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6">
            <h2 className="text-3xl font-bold mb-4">
              Feedback Form
            </h2>

            <p className="text-slate-300 mb-6">
              This form does not save responses yet. In a future version, it can
              connect to a database, Google Form, or teacher feedback system.
            </p>

            <div className="rounded-xl border border-yellow-500 bg-yellow-950 p-4 mb-6">
              <p className="text-slate-200">
                Do not share private information such as your full address,
                phone number, password, or personal account details.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block font-semibold mb-2" htmlFor="role">
                  I am a:
                </label>

                <select
                  id="role"
                  value={role}
                  onChange={(event) => setRole(event.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-500"
                >
                  <option value="">Select one</option>
                  <option value="Student">Student</option>
                  <option value="Teacher">Teacher</option>
                  <option value="Parent">Parent</option>
                  <option value="Volunteer">Volunteer</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold mb-2" htmlFor="audience">
                  Which section did you use?
                </label>

                <select
                  id="audience"
                  value={audience}
                  onChange={(event) => setAudience(event.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-500"
                >
                  <option value="">Select one</option>
                  <option value="Kids">CyberShield Kids</option>
                  <option value="Junior">CyberShield Junior</option>
                  <option value="High School">CyberShield High School</option>
                  <option value="Activities">Interactive Activities</option>
                  <option value="Outreach">Outreach Session</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold mb-2" htmlFor="rating">
                  Overall rating:
                </label>

                <select
                  id="rating"
                  value={rating}
                  onChange={(event) => setRating(event.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-500"
                >
                  <option value="">Select one</option>
                  <option value="Excellent">Excellent</option>
                  <option value="Good">Good</option>
                  <option value="Okay">Okay</option>
                  <option value="Needs Improvement">Needs Improvement</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold mb-2" htmlFor="helpful">
                  What was most helpful?
                </label>

                <textarea
                  id="helpful"
                  value={helpful}
                  onChange={(event) => setHelpful(event.target.value)}
                  placeholder="Example: The scam examples were easy to understand."
                  className="min-h-28 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2" htmlFor="improve">
                  What should be improved?
                </label>

                <textarea
                  id="improve"
                  value={improve}
                  onChange={(event) => setImprove(event.target.value)}
                  placeholder="Example: Add more examples for middle school students."
                  className="min-h-28 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-cyan-500"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <button
                  type="submit"
                  className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400 transition"
                >
                  Preview Feedback
                </button>

                <button
                  type="button"
                  onClick={resetForm}
                  className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:border-cyan-500 transition"
                >
                  Reset Form
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl bg-slate-950 border border-slate-800 p-6">
              <h2 className="text-3xl font-bold mb-4">
                Why feedback matters
              </h2>

              <div className="space-y-3">
                {feedbackUses.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-800 bg-slate-900 p-4"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {submitted && (
              <div className="rounded-2xl bg-slate-950 border border-cyan-500 p-6">
                <h2 className="text-3xl font-bold text-cyan-400 mb-4">
                  Feedback Preview
                </h2>

                <div className="space-y-3 text-slate-300">
                  <p>
                    <span className="font-bold text-white">Role:</span>{" "}
                    {role || "Not selected"}
                  </p>

                  <p>
                    <span className="font-bold text-white">Section:</span>{" "}
                    {audience || "Not selected"}
                  </p>

                  <p>
                    <span className="font-bold text-white">Rating:</span>{" "}
                    {rating || "Not selected"}
                  </p>

                  <p>
                    <span className="font-bold text-white">Most helpful:</span>{" "}
                    {helpful || "No response"}
                  </p>

                  <p>
                    <span className="font-bold text-white">Improvement:</span>{" "}
                    {improve || "No response"}
                  </p>
                </div>

                <p className="text-sm text-slate-400 mt-5">
                  Demo only: this response is not saved yet.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
            <h2 className="text-3xl font-bold mb-6">
              Future Feedback Questions
            </h2>

            <div className="space-y-3">
              {futureQuestions.map((question) => (
                <div
                  key={question}
                  className="rounded-xl border border-slate-800 bg-slate-950 p-4"
                >
                  {question}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">
            <h2 className="text-3xl font-bold mb-4">
              Future improvement plan
            </h2>

            <p className="text-slate-300 leading-relaxed mb-4">
              In a later version, CyberShield Academy can connect this feedback
              form to a real response system so student and teacher feedback can
              be reviewed after outreach sessions.
            </p>

            <p className="text-slate-300 leading-relaxed">
              Feedback can help improve lesson difficulty, activity design,
              school presentations, and future cybersecurity topics.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}