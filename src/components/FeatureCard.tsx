import type { Feature } from "../types/feature";

interface FeatureCardProps {
  feature: Feature;
}

const accentColors = {
  cyan: "border-primary-cyan",
  red: "border-primary-red",
  orange: "border-primary-orange",
  blue: "border-primary-blue",
} as const;

const position = {
  supervisor: "md:col-start-1 md:row-start-2 ",
  "team-builder": "md:col-start-2 md:row-start-1",
  karma: "md:col-start-2 md:row-start-3",
  calculator: "md:col-start-3 md:row-start-2",
};

function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <article
      className={`relative min-h-64 rounded-md border-t-4 bg-white p-8 shadow-2xl ${accentColors[feature.accent]} ${position[feature.position]} `}
    >
      <h2 className="text-xl font-semibold text-grey-500 ">{feature.title}</h2>

      <p className="mt-2 text-sm text-grey-500 ">{feature.description} </p>

      <img
        className="absolute bottom-8 right-8 "
        src={feature.icon}
        alt="feature-icon"
      />
    </article>
  );
}

export default FeatureCard;
