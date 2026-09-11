import { features } from "../data/features";
import FeatureCard from "./FeatureCard";

function FeatureGrid() {
  return (
    <section className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 mb-16 md:grid-cols-3 md:items-center md:gap-6 ">
      <FeatureCard feature={features.supervisor} />

      <div className="grid grid-cols-1 gap-6 md:grid-rows-2 ">
        {features.middle.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} />
        ))}
      </div>

      <FeatureCard feature={features.calculator} />
    </section>
  );
}

export default FeatureGrid;
