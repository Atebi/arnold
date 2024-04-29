import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Arnold Peckham - Finance and Innovation Writer",
  description: "Arnold Peckham's portfolio website.",
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
