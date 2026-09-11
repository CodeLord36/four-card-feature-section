import type { Feature } from "../types/feature";

export const features = {
  supervisor: {
    title: "Supervisor",
    description: "Monitors activity to identify project roadblocks",
    icon: "/images/icon-supervisor.svg",
    accent: "cyan",
    position: "supervisor",
  },

  middle: [
    {
      title: "Team Builder",
      description:
        "Scans our talent network to create the optimal team for your project",
      icon: "/images/icon-team-builder.svg",
      accent: "red",
      position: "team-builder",
    },
    {
      title: "Karma",
      description: "Regularly evaluates our talent to ensure quality",
      icon: "/images/icon-karma.svg",
      accent: "orange",
      position: "karma",
    },
  ],

  calculator: {
    title: "Calculator",
    description:
      "Uses data from past projects to provide better delivery estimates",
    icon: "/images/icon-calculator.svg",
    accent: "blue",
    position: "calculator",
  },
} satisfies {
  supervisor: Feature;
  middle: Feature[];
  calculator: Feature;
};
