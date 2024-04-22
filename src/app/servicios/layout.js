import "../globals.css";
import ServiciosNavbar from "../components/Servicios/ServiciosNavbar";
export const metadata = {
  title: "Harridui | Servicios",
  description: "Harridui | Taller de serigrafía",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <ServiciosNavbar />
        {children}
      </body>
    </html>
  );
}
