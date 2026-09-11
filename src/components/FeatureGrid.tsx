import { features } from "../data/features";
import FeatureCard from "./FeatureCard";

function FeatureGrid() {
  return (
    <section>
      {features.map((feature) => (
        <FeatureCard key={feature.title} feature={feature} />
      ))}
    </section>
  );
}

export default FeatureGrid;
