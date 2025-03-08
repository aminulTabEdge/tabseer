import type { Metadata } from "next";

type SEOProps = {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  image?: string;
  author?: string;
};

const generateSEO = ({
  title,
  description,
  keywords = "Web Developer, Next.js, React, Portfolio, MERN Stack, TypeScript, MongoDB",
  url = "https://aminul.tech",
  image = "https://aminul.tech/assets/banner/aminul.png",
  author = "Tabseer Inc",
}: SEOProps): Metadata => {
  return {
    title,
    description,
    keywords,
    icons: {
      icon: "/favicon.svg",
    },
    authors: [{ name: author, url }],
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Tabseer inc's Portfolio",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: "index, follow",
    // verification: {
    //   google: "YOUR_GOOGLE_VERIFICATION_CODE", // Optional: Google Search Console verification
    // },
    other: {
      "application-name": "Tabseer Inc's Portfolio",
      "apple-mobile-web-app-title": "Tabseer Inc's Portfolio",
    },
  };
};

export default generateSEO;
