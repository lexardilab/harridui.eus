import "../globals.css";
export const metadata = {
  title: "Harridui | Presupuesto",
  description: "Harridui | Taller de serigrafía",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
