import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
const montserrat = Montserrat({
  weight: ["400", "700", "100"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Harridui",
  description: "Estudio de Serigrafía y Diseño",
};

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
