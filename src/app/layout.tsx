import { Roboto } from "next/font/google";
import "./globals.css";
import "@/fonts/line-awesome-1.3.0/css/line-awesome.css";
import "@/styles/index.scss";
import "rc-slider/assets/index.css";
import Footer from "@/shared/Footer/Footer";
import SiteHeader from "@/app/SiteHeader";
import CommonClient from "./CommonClient";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["italic", "normal"],
});

export default function RootLayout({ children, params }: { children: React.ReactNode; params: any }) {
  return (
    <html lang='en' dir='' className={roboto.className}>
      <body className='bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200'>
        <SiteHeader />
        {children}
        <CommonClient />
        <Footer />
      </body>
    </html>
  );
}
