import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jake Pulier",
  description: "Creative Director, Designer & Maker of Things",
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
