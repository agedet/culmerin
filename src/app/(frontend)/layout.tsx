import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { Providers } from "@/providers";
import { getServerSideURL } from "@/utilities/getURL";
import { mergeOpenGraph } from "@/utilities/mergeOpenGraph";
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
          <Header />
          {children}
          <Toaster richColors position="bottom-right" />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}