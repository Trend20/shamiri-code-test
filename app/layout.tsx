import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ricky &Morty App",
  description: "App utilizing the Ricky & Morty API",
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
