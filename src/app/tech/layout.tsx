import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BOOSTER Technology | EV-Based FBS Alternative",
  description:
    "Discover how Cellivate's BOOSTER uses extracellular vesicles (EVs) to replace fetal bovine serum (FBS) — delivering measurably better cell proliferation, consistency, and sustainability across biotech applications.",
  keywords: [
    "BOOSTER cell culture",
    "extracellular vesicles FBS replacement",
    "EV-based serum-free media",
    "FBS alternative technology",
    "animal-free cell growth supplement",
    "cell proliferation booster",
    "serum-free biotech",
    "EV supplement for cell culture",
    "fetal bovine serum replacement technology",
  ],
  openGraph: {
    title: "BOOSTER Technology | EV-Based FBS Alternative | Cellivate Technologies",
    description:
      "How Cellivate's BOOSTER replaces FBS using extracellular vesicles — better cell growth, zero animal use, and reproducible results for every lab.",
    url: "https://cellivate.co/tech",
    images: [{ url: "/biotech_lab.png", width: 1200, height: 630, alt: "BOOSTER EV Cell Culture Technology" }],
  },
  alternates: { canonical: "https://cellivate.co/tech" },
};

export default function TechLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
