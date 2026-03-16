import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MUY METHY — Software Developer",
  description: "Devops and software developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
