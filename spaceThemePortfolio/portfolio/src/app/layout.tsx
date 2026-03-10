import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex Nova | Developer Journey",
  description: "A cinematic developer portfolio traveling from Earth to a black hole.",
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
