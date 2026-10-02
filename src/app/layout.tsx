import { SITE_URL } from "@/app/site";
import type { Metadata, Viewport } from "next";
import { Overpass, Ubuntu } from "next/font/google";
import "./globals.css";

const overpass = Overpass({
  variable: "--font-overpass",
  weight: ["300", "600"],
  subsets: ["latin"],
  display: "swap",
});

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const name = "Blogr";
const title = `${name} | A modern publishing platform`;
const description =
  "A free and open publishing platform with an extensible editor, flexible content management, and worldwide infrastructure that keeps your blog fast.";

const shareImage = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: "Two phones showing the Blogr app, beside the headline “A modern publishing platform”.",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: name,
    locale: "en_US",
    type: "website",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [shareImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ff6f48",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${overpass.variable} ${ubuntu.variable} antialiased`}
    >
      <body>
        <a href="#main" className="v-skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
