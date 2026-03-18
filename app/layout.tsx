import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MUY METHY",
  description: "software developer",
  icons: {
    icon: "/tlogo.png",
    shortcut: "/tlogo.png",
    apple: "/tlogo.png",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}