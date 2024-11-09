import type { Metadata } from "next";
import "./globals.css";

import ThemeClient from "./theme";

import { Roboto } from "next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Michael Prestonise",
  description: "An experienced product leader writing about business, innovation, design, engineering, and technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeClient>
      <html lang="en">
        <body className={roboto.className}>
          {children}
        </body>
      </html>
    </ThemeClient>
  );
}
