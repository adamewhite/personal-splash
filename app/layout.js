import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-instrument-sans",
});

export const metadata = {
  title: "Adam White | UX and Data Strategy",
  description: "Product designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.variable} font-sans text-lg font-normal text-black antialiased`}
      >
        <div className="bg-white">
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
