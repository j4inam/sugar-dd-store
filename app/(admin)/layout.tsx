import "./admin-globals.css";

import type { Metadata } from "next";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Welcome to Sugar DD Admin",
  description: "Admin Dashboard for Sugar DD Store",
};

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${quicksand.className}`}>
        {children}
      </body>
    </html>
  );
}
