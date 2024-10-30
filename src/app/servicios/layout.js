import "../globals.css";
import Navbar from "../components/Navbar";
export const metadata = {
  title: "Harridui | Servicios",
  description: "Harridui | Taller de serigrafía",
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
