import { Instrument_Sans } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-instrument-sans',
});

export const metadata = {
  title: 'Adam White',
  description: 'Product designer based in New York City',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${instrumentSans.variable} antialiased bg-white text-black font-sans font-normal text-lg`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
