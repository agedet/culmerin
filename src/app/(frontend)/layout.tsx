import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
// import Header from "@/components/Global/Header";
// import Footer from "@/components/Global/Footer";
import { Toaster } from "@/components/ui/sonner";
import { Providers } from "@/providers";
import { getServerSideURL } from "@/utilities/getURL";
import { mergeOpenGraph } from "@/utilities/mergeOpenGraph";
import Navbar from "@/components/Global/Navbar";
import FooterNew from "@/components/Global/FooterNew";
// import { AdminBar } from "@/components/AdminBar";

const inter = Inter({
  variable: "--font-Inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Culmerin Technologies - Software Development Agency",
  description: "Culmerin Technologies is a Web and software development agency.",
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: "summary_large_image",
    creator: "@culmerintech",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
      >
        <Providers>
          {/* <AdminBar 
            adminBarProps={{
              preview: isEnabled
            }} 
          /> */}
          <Navbar />
          {children}
          <Toaster richColors position="bottom-right" />
          <FooterNew />
        </Providers>
      </body>
    </html>
  );
}