import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-col gap-4 px-8 py-6 border-b border-slate-800 bg-slate-950 text-white md:flex-row md:items-center md:justify-between">
      <Link href="/" className="text-2xl font-bold tracking-tight">
        CyberShield Academy
      </Link>

      <div className="hidden md:flex flex-wrap justify-end gap-x-4 gap-y-2 text-xs text-slate-300">
        <Link href="/" className="hover:text-white transition">
          Home
        </Link>

        <Link href="/lessons" className="hover:text-white transition">
          Lessons
        </Link>

        <Link href="/activities" className="hover:text-white transition">
          Activities
        </Link>

        <Link href="/resources" className="hover:text-white transition">
          Resources
        </Link>

        <Link href="/teacher-toolkit" className="hover:text-white transition">
          Teacher Toolkit
        </Link>

        <Link href="/certificates" className="hover:text-white transition">
          Certificates
        </Link>

        <Link href="/outreach" className="hover:text-white transition">
          Outreach
        </Link>

        <Link href="/impact" className="hover:text-white transition">
          Impact
        </Link>

        <Link href="/feedback" className="hover:text-white transition">
          Feedback
        </Link>

        <Link href="/roadmap" className="hover:text-white transition">
          Roadmap
        </Link>

        <Link href="/about" className="hover:text-white transition">
          About
        </Link>
      </div>
    </nav>
  );
}