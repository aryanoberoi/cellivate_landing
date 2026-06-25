import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Cellivate Technologies | Singapore Deep-Tech Biotech",
  description:
    "Cellivate Technologies is a Singapore-based deep-tech biotech startup pioneering animal-free cell culture media. Winner of CNA's The Big Spark, backed by Enterprise Singapore, ASPIRE, and Mitsubishi Chemical Group.",
  keywords: [
    "Cellivate Technologies Singapore",
    "deep-tech biotech startup Singapore",
    "CNA Big Spark winner",
    "animal-free biotech company",
    "Enterprise Singapore biotech",
    "ASPIRE incubation deep-tech",
    "cell culture company Singapore",
    "sustainable biotech startup",
    "cultivated meat company Singapore",
    "Cellivate about",
  ],
  openGraph: {
    title: "About Cellivate Technologies | Singapore Deep-Tech Biotech",
    description:
      "Meet the team behind BOOSTER — Cellivate Technologies, winner of CNA's The Big Spark and a Singapore-based deep-tech biotech pioneer in animal-free cell culture.",
    url: "https://cellivate.co/about",
    images: [{ url: "/biotech_lab.png", width: 1200, height: 630, alt: "Cellivate Technologies Team" }],
  },
  alternates: { canonical: "https://cellivate.co/about" },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
