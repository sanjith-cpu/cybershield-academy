type FeatureCardProps = {
  title: string;
  description: string;
};

export default function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="rounded-xl border border-slate-800 p-5 bg-slate-900 hover:border-cyan-500 transition">
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-sm text-slate-300">{description}</p>
    </div>
  );
}
