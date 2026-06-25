import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pilot Program | Try BOOSTER in Your Lab",
  description:
    "Apply to Cellivate's BOOSTER pilot program and test our serum-free, EV-based FBS alternative in your cell culture lab. Limited spots available for biotech companies and research institutions.",
  keywords: [
    "cell culture pilot program",
    "FBS alternative trial",
    "serum-free media pilot",
    "BOOSTER pilot biotech",
    "cell culture media testing",
    "EV supplement trial",
    "animal-free media pilot program",
    "biotech lab trial Singapore",
    "Cellivate pilot program",
  ],
  openGraph: {
    title: "Pilot Program | Try BOOSTER in Your Lab | Cellivate Technologies",
    description:
      "Join Cellivate's BOOSTER pilot program. Test an animal-free, EV-based FBS replacement in your lab. Apply today — limited spots.",
    url: "https://cellivate.co/pilot",
    images: [{ url: "/biotech_lab.png", width: 1200, height: 630, alt: "Cellivate BOOSTER Pilot Program" }],
  },
  alternates: { canonical: "https://cellivate.co/pilot" },
};

export default function PilotLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
