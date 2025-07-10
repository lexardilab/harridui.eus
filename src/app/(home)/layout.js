import { Montserrat } from "next/font/google";
import "../globals.css";
import Navbar from "../components/Navbar";

const montserrat = Montserrat({
  weight: ["100", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Harridui Print Studio",
  description: "Taller de serigrafía",
  keywords: [
    "serigrafía",
    "estampación",
    "taller",
    "arte",
    "Harridui",
    "Print Studio",
    "camisetas",
    "impresión artesanal",
    "bilbao",
  ],
  metadataBase: new URL("https://harridui.com"), // Cambia por tu dominio real si es diferente
  alternates: {
    canonical: "https://harridui.com",
  },
  openGraph: {
    title: "Harridui Print Studio",
    description: "Taller de serigrafía artesanal",
    url: "https://harridui.com",
    siteName: "Harridui Print Studio",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "https://harridui.com/images/og-image.jpg", // Asegúrate de tener esta imagen en tu public/
        width: 1200,
        height: 630,
        alt: "Harridui Print Studio - Taller de serigrafía",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harridui Print Studio",
    description: "Taller de serigrafía artesanal en Bilbao.",
    images: ["https://harridui.com/images/og-image.jpg"],
    creator: "@harridui", // Opcional: tu cuenta de Twitter
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#ffffff", // O el color que uses en la UI
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={montserrat.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
