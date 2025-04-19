// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sen, Inter, Poppins } from "next/font/google";

const sen = Sen({ subsets: ["latin"], weight: ["700"], variable: "--font-sen" });
const inter = Inter({ subsets: ["latin"], weight: ["400"], variable: "--font-inter" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-poppins" });


export const metadata = {
  title: "MH | Web Engineer",
  description: "Mehboob Hassan, A Web Engineer Personal Site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${sen.variable} ${inter.variable} ${poppins.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
