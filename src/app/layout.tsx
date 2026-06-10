import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "APEX FITNESS | Forge Your Legend",
  description:
    "Sri Lanka's most elite fitness facility. World-class equipment, expert trainers, and a community built to push limits. Join APEX FITNESS today.",
  keywords: ["gym", "fitness", "apex fitness", "personal training", "Sri Lanka gym", "powerlifting", "weight training"],
  openGraph: {
    title: "APEX FITNESS | Forge Your Legend",
    description: "Sri Lanka's most elite fitness facility.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-apex-black text-apex-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
