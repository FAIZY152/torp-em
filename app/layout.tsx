import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Fayaz | Full-Stack Software Engineer",
  description:
    "Premium portfolio for Muhammad Fayaz, a Full-Stack Software Engineer specializing in SaaS, AI integration, cloud deployment, and production-grade web applications.",
  icons: {
    icon: "/profile-img.jpeg",
  },
};
  
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${syne.variable} ${dmSans.variable} ${jetBrainsMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
