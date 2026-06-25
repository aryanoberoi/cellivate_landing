import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Join Cellivate Technologies",
  description:
    "Join Cellivate Technologies and help build the future of animal-free biotech. We're hiring scientists, engineers, and business developers across Singapore and Australia.",
  keywords: [
    "biotech jobs Singapore",
    "cell culture scientist jobs",
    "deep-tech careers Singapore",
    "biotech startup careers",
    "Cellivate Technologies jobs",
    "cell biology jobs Singapore",
    "biotech R&D jobs",
    "sustainable biotech employment",
  ],
  openGraph: {
    title: "Careers at Cellivate Technologies | Join Our Biotech Team",
    description:
      "Help us eliminate animal suffering from biotech. Explore open roles at Cellivate Technologies — scientists, engineers, and business roles in Singapore and Australia.",
    url: "https://cellivate.co/careers",
    images: [{ url: "/biotech_lab.png", width: 1200, height: 630, alt: "Careers at Cellivate Technologies" }],
  },
  alternates: { canonical: "https://cellivate.co/careers" },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
