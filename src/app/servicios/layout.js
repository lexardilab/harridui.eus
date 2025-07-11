import Textil from "../components/Servicios/Textil";
import Papel from "../components/Servicios/Papel";

export const metadata = {
  title: "Harridui | Servicios",
  description: "Harridui | Taller de serigrafía",
};

export default function RootLayout({ children }) {
  return (
    <main className="bg-[#eae9b9]">
      <Textil />
      <Papel />
      {children}
    </main>
  );
}
