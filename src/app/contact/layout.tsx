import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Cellivate Technologies",
  description:
    "Get in touch with Cellivate Technologies. Partner with us, enquire about BOOSTER, or reach our Singapore and Australia offices. Email: admin@cellivatetech.com.",
  keywords: [
    "contact Cellivate Technologies",
    "Cellivate Technologies email",
    "biotech supplier contact Singapore",
    "FBS alternative supplier contact",
    "cell culture media supplier",
    "Cellivate Singapore office",
    "Cellivate Australia office",
  ],
  openGraph: {
    title: "Contact Cellivate Technologies",
    description:
      "Reach out to Cellivate Technologies to learn more about BOOSTER, our pilot program, or partnership opportunities. Offices in Singapore and Australia.",
    url: "https://cellivate.co/contact",
    images: [{ url: "/biotech_lab.png", width: 1200, height: 630, alt: "Contact Cellivate Technologies" }],
  },
  alternates: { canonical: "https://cellivate.co/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
