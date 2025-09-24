import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Creatorslab – Empowering Creators to Grow, Engage, and Earn",
  description:
    "Creatorslab helps you grow your audience, engage your community, and earn on the low-fee Solana blockchain.",
  metadataBase: new URL("https://www.creatorslab.cc"),
  keywords: [
    "Creatorslab",
    "Web3",
    "Solana",
    "Blockchain",
    "Creators",
    "Community",
    "Creatorslab logo",
    "Creators Lab app",
    "CLS token",
    "GasPass",
    "empowering global creativity with Web3",
    "Web3 growth platform",
    "community-powered Web3 launchpad",
    "creator economy Web3",
    "Web3 growth challenges",
    "earn CLS rewards",
    "spend CLS to promote content",
    "grow with CLS",
    "gasless airdrops",
    "claim airdrops without gas fees",
    "borrow gas with GasPass",
    "repay gas later Web3",
    "promote campaigns with CLS",
    "referral rewards Web3",
    "creators in Web3",
    "Web3 projects growth",
    "amplify creator voice",
    "reward community efforts",
    "expand social presence Web3",
    "powered by Solana Foundation",
    "powered by Superteam NG",
    "Solana blockchain creators",
  ],
  alternates: {
    canonical: "https://www.creatorslab.cc",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Creatorslab – Empowering Creators Worldwide",
    description:
      "Grow your audience, engage your community, and earn with low-fee Solana blockchain support.",
    url: "https://www.creatorslab.cc",
    siteName: "Creatorslab",
    type: "website",
    images: [
      {
        url: "https://www.creatorslab.cc/og-image.png",
        width: 1200,
        height: 630,
        alt: "Creatorslab Landing Page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creatorslab – Empowering Creators Worldwide",
    description:
      "Grow your audience, engage your community, and earn with low-fee Solana blockchain support.",
    images: ["https://www.creatorslab.cc/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Creatorslab",
    url: "https://www.creatorslab.cc",
    description:
      "Platform enabling creators to grow, engage, and earn on the Solana blockchain.",
    publisher: {
      "@type": "Organization",
      name: "Creatorslab",
      logo: {
        "@type": "ImageObject",
        url: "https://www.creatorslab.cc/favicon.ico",
      },
    },
    image: "https://www.creatorslab.cc/og-image.png",
  };

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://www.creatorslab.cc/"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="antialiased bg-black text-white">{children}</body>
    </html>
  );
}
