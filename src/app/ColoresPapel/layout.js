import PapelNavbar from "../components/Papel/PapelNavbar";

export const metadata = {
  title: "Harridui | Papel",
  description: "Taller de serigrafía y diseño",
};

export default function ColoresPapelLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <PapelNavbar />
        {children}
      </body>
    </html>
  );
}
