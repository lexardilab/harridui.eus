import "../globals.css";
import MarcasNavbar from "../components/Marcas/MarcasNavbar";
export const metadata = {
  title: "Harridui | Marcas",
  description: "Harridui | Taller de serigrafía",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <MarcasNavbar />
        {children}
      </body>
    </html>
  );
}
