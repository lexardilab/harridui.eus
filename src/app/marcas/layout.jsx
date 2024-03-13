import Navbar from "../components/Navbar";

export const metadata = {
  title: "Harridui | Marcas",
  description: "Estudio de Serigrafía y Diseño",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-[#eae9b9] h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
