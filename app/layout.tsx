import type { Metadata } from "next";
import { Macondo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import UserAccountActions from "@/components/UserAccountActions";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const macondo = Macondo({
  weight: "400",
  preload: false,
});

export const metadata: Metadata = {
  title: "Welcome to Sugar DD",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isAuthenticated } = getKindeServerSession();
  const isUserLoggedin = await isAuthenticated();

  return (
    <html lang="en">
      <body className={macondo.className} data-theme="luxury">
        <div className="drawer drawer-end">
          <input id="nav-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col justify-between h-screen p-4">
            <Navbar />
            {children}
            <Footer />
          </div>
          <div className="md:hidden drawer-side">
            <label
              htmlFor="nav-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu px-0 py-2 w-60 min-h-full bg-base-200">
              <li>
                <UserAccountActions />
              </li>
              <li>
                <Link href="/about-us">
                  <button className="btn btn-block">About Us</button>
                </Link>
              </li>
              <li>
                <Link href="/contact-us">
                  <button className="btn btn-block">Contact Us</button>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <button className="btn btn-block">FAQs</button>
                </Link>
              </li>
              <li>
                <Link href="/orders">
                  <button className="btn btn-block">View Orders</button>
                </Link>
              </li>
              {isUserLoggedin && (
                <li className="absolute bottom-2 w-full">
                  <div className="divider m-1"></div>
                  <LogoutLink className="ml-6">
                    <button>Log Out</button>
                  </LogoutLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </body>
    </html>
  );
}
