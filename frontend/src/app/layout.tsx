import type { Metadata } from "next";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import DarkmodeProvider from "@/features/darkmode/darkmodeprovider";
import { Theme } from "@radix-ui/themes";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Optihive",
  description:
    "Optihive is a AI powered project manager tool for developers . it aims to help developers to manage their projects more efficiently .giving roles based on the developer's skills and experience . it offers too for project managers a dashboard to visualize their projects and the progress of their team members .",
  keywords: [
    "Optihive",
    "AI",
    "project manager",
    "developers",
    "dashboard",
    "roles",
    "skills",
    "experience",
    "projects",
    "progress",
    "team members",
  ],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Optihive",
    description: "Optihive",
    images: [
      {
        url: "/logo.png",
        width: 824,
        height: 303,
        alt: "Optihive",
      },
    ],
  },
  twitter: {
    title: "Optihive",
    description: "Optihive",
    images: [
      {
        url: "/logo.png",
        width: 824,
        height: 303,
        alt: "Optihive",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${inter.className} antialiased`}>
        <DarkmodeProvider />
        <Theme>{children}</Theme>
        <ToastContainer position="bottom-right" />
      </body>
    </html>
  );
}
