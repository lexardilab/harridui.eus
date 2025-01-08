import { Montserrat } from "next/font/google";
import "../globals.css";
import Navbar from "../components/Navbar";
import Textil from "../components/Servicios/Textil";
import Papel from "../components/Servicios/Papel";

export const metadata = {
  title: "Harridui | Servicios",
  description: "Harridui | Taller de serigrafía",
};
const montserrat = Montserrat({
  weight: ["400", "700", "100"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});


export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={montserrat.className}>
        <Navbar />
        <Textil />
        <Papel />
        {children}
      </body>
    </html>
  );
}
