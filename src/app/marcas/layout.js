import "../globals.css";
export const metadata = {
  title: "Harridui | Marcas",
  description: "Harridui | Taller de serigrafía",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
