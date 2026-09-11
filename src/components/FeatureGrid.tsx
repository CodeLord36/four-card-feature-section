import { features } from "../data/features";
import FeatureCard from "./FeatureCard";

function FeatureGrid() {
  return (
    <section className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-3 ">
      {features.map((feature) => (
        <FeatureCard key={feature.title} feature={feature} />
      ))}
    </section>
  );
}

export default FeatureGrid;
