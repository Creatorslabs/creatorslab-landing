import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Creatorslab – Empowering Creators Worldwide",
  description:
    "Grow your audience, engage your community, and earn with low-fee Solana blockchain support. Backed by Solana Foundation and SuperteamNG.",
  metadataBase: new URL("https://www.creatorslab.cc"),
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
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
