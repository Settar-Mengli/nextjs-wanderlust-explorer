import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { FavoritesProvider } from "@/components/FavoritesProvider";
import Navbar from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Wanderlust Explorer | Premium Travel Experiences",
    template: "%s | Wanderlust Explorer",
  },
  description:
    "Explore curated adventure, culture, food, wellness, and nature experiences around the world with Wanderlust Explorer.",
  authors: [{ name: "Settar Mengli" }],
  creator: "Settar Mengli",
  keywords: [
    "travel explorer",
    "curated experiences",
    "adventure travel",
    "culture travel",
    "wellness retreats",
    "food tours",
  ],
  openGraph: {
    title: "Wanderlust Explorer",
    description:
      "A premium travel explorer for curated experiences around the world.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#f6f3ee]">
        <FavoritesProvider>
          <Navbar />
          {children}
        </FavoritesProvider>
      </body>
    </html>
  );
}
