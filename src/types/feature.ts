export type AccentColor = "red" | "cyan" | "orange" | "blue";

export interface Feature {
  title: string;
  description: string;
  icon: string;
  accent: AccentColor;
}
