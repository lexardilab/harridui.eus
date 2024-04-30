import "../globals.css";
import PapelNavbar from "../components/PapelUtils/PapelNavbar";

export const metadata = {
  title: "Harridui | Presupuesto",
  description: "Harridui | Taller de serigrafía",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <PapelNavbar />
        {children}
      </body>
    </html>
  );
}
