import type { Feature } from "../types/feature";

interface FeatureCardProps {
  feature: Feature;
}

const accentColors = {
  cyan: "border-primary-cyan",
  red: "",
  orange: "",
  blue: "",
} as const;

function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <article
      className={`relative min-h-64 rounded-md border-t-4 bg-white p-8 shadow-[0_10px_25px_rgba(0,0,0,0,0.08)] ${accentColors[feature.accent]} `}
    >
      <h2 className="text-xl font-semibold text-grey-400 ">{feature.title}</h2>

      <p className="">{feature.description} </p>

      <img src={feature.icon} alt="feature-icon" />
    </article>
  );
}

export default FeatureCard;
