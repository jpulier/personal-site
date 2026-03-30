import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PULYAY",
  description: "Artist site for PULYAY",
  openGraph: {
    title: "PULYAY",
    description: "Artist site for PULYAY",
    type: "website",
    url: "https://pulyay.com",
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
