import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import '@fortawesome/fontawesome-svg-core/styles.css'
import Footer from "@/components/footer/Footer";
import TopBar from "@/components/pageTop/TopBar";


const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "INTIMASIA",
  description: "INTIMASIA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}
      >
        <div className="">
          <TopBar/>
        </div>
        
        <div className="w-full overflow-hidden mt-36 pb-400 h-fit text-3xl font-bold flex justify-center content-center flex-wrap bg-black md:mt-35 lg:mt-35">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
