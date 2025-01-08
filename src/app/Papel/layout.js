import { Montserrat } from "next/font/google";
import Navbar from "../components/Navbar";
import "../globals.css";
export const metadata = {
  title: "Harridui | Colores",
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
        {children}
      </body>
    </html>
  );
}
