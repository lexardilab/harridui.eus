import "../globals.css";
import Navbar from "../components/Navbar";
export const metadata = {
  title: "Harridui | Marcas",
  description: "Harridui | Trabajamos con las principales marcas del sector, Stanley Stella, Native Spirit, Gildan y muchas más.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
