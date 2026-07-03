import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 border-b border-slate-800 bg-slate-950 text-white">
      <Link href="/" className="text-2xl font-bold tracking-tight">
        CyberShield Academy
      </Link>

      <div className="hidden md:flex gap-6 text-sm text-slate-300">
        <Link href="/#tracks" className="hover:text-white transition">
          Learning Tracks
        </Link>

        <Link href="/#features" className="hover:text-white transition">
          Features
        </Link>

        <Link href="/#mission" className="hover:text-white transition">
          Mission
        </Link>

        <Link href="/about" className="hover:text-white transition">
          About
        </Link>
      </div>
    </nav>
  );
}
