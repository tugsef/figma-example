import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { siteMetadata } from "@/assets/metadata";
import { HireMe } from "@/components/hire-me";

const spaceGrotesk = localFont({
  src: './fonts/SpaceGrotesk-VariableFont_wght.ttf',
  weight: '100 900'
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title, // a default is required when creating a template
  },
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    images: [siteMetadata.socialBanner],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.className} min-h-screen antialiased`}
      >
        {children}
        <HireMe/>

      </body>
    </html>
  );
}
