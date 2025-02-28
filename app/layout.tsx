import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Protfolio",
  description: "Thats me in a portfolio",
  icons: {
    icon: "/profile.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
