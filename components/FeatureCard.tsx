import Link from "next/link";

type FeatureCardProps = {
  title: string;
  description: string;
  href?: string;
};

export default function FeatureCard({
  title,
  description,
  href,
}: FeatureCardProps) {
  const cardContent = (
    <div className="rounded-xl border border-slate-800 p-5 bg-slate-900 hover:border-cyan-500 transition h-full">
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-sm text-slate-300">{description}</p>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}