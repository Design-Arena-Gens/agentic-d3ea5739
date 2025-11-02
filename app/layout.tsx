import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "MAN 36/48 Common Rail Guide",
  description:
    "Step-by-step explanation of the MAN 36/48 marine diesel engine common rail fuel system components and their operation.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
