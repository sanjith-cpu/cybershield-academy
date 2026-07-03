import Link from "next/link";

type TrackCardProps = {
  title: string;
  grades: string;
  description: string;
  href: string;
};

export default function TrackCard({
  title,
  grades,
  description,
  href,
}: TrackCardProps) {
  return (
    <Link
      href={href}
      className="block rounded-2xl bg-slate-950 border border-slate-800 p-6 hover:border-cyan-500 hover:-translate-y-1 transition"
    >
      <h3 className="text-2xl font-bold mb-3 text-cyan-400">{title}</h3>

      <p className="text-slate-300 mb-4">{description}</p>

      <p className="text-sm text-slate-400">{grades}</p>
    </Link>
  );
}
