import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 border-b border-slate-800 bg-slate-950 text-white">
      <Link href="/" className="text-2xl font-bold tracking-tight">
        CyberShield Academy
      </Link>

      <div className="hidden md:flex gap-6 text-sm text-slate-300">
        <Link href="/" className="hover:text-white transition">
          Home
        </Link>

        <Link href="/kids" className="hover:text-white transition">
          Kids
        </Link>

        <Link href="/junior" className="hover:text-white transition">
          Junior
        </Link>

        <Link href="/high-school" className="hover:text-white transition">
          High School
        </Link>

        <Link href="/quiz" className="hover:text-white transition">
          Quiz
        </Link>

        <Link href="/about" className="hover:text-white transition">
          About
        </Link>
      </div>
    </nav>
  );
}