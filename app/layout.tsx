import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ClientProvider from "@/provider/ClientProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  title: "AI Discoverer",
  description: "AI tools directory",
};

export function Providers({ children }: { children: React.ReactNode }) {
  return (<ClientProvider>{children}</ClientProvider>);
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased `}>
        
        
        <Providers>
          
          
          <Header />
  
          <main className="pt-16 min-h-screen">{children}</main>
  
          <Footer />
        
        </Providers>

      </body>
    </html>
  );
}
