import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Manrope, Open_Sans } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400"],
});

const opensans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open_sans",
  weight: ["400", "600", "700"],
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main
        className={`${manrope.variable} font-sans ${opensans.variable} font-sans`}
      >
        <Component {...pageProps} />
      </main>
    </>
  );
}
