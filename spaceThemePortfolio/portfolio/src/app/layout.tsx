import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tushar Pachouri | Developer Portfolio",
  description: "Cinematic developer portfolio of Tushar Pachouri, a Full-Stack Developer and UI/UX Engineer.",
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
