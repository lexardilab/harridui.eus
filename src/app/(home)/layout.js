import { Montserrat } from "next/font/google";
import "../globals.css";
import Navbar from "../components/Navbar";
import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics } from "@next/third-parties/google";
const montserrat = Montserrat({
  weight: ["400", "700", "100"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Harridui Print Studio",
  description: "Taller de serigrafía",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={montserrat.className}>
        <Navbar />
        {children}
        <GoogleAnalytics gaId="G-NNW89DVQ84" />
      </body>
    </html>
  );
}
