import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ConvexClientProvider } from "@/components/ConvexClientProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nick Dahlhoff | AI & Business Systems Specialist",
  description:
    "AI and business systems consulting for West Michigan businesses. Cut through the noise, automate the busywork, and build systems that actually work. $100/hr, hands-on, in-person.",
  metadataBase: new URL("https://nickdahlhoff.com"),
  openGraph: {
    title: "Nick Dahlhoff | AI & Business Systems Specialist",
    description:
      "AI and business systems consulting for West Michigan businesses. Hands-on, in-person, built around your reality.",
    url: "https://nickdahlhoff.com",
    siteName: "Nick Dahlhoff",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nick Dahlhoff | AI & Business Systems Specialist",
    description:
      "AI and business systems consulting for West Michigan businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
