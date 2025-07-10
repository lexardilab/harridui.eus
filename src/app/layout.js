import { Montserrat } from "next/font/google";
import "../globals.css";
import Navbar from "../components/Navbar";
import CookieBanner from "../components/CookieBanner";

const montserrat = Montserrat({
  weight: ["100", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

// ✅ metadata (sin viewport ni themeColor)
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
  metadataBase: new URL("https://harridui.com"),
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
        url: "https://harridui.com/images/og-image.jpg",
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
    creator: "@harridui",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

// ✅ export por separado para themeColor y viewport
export const themeColor = "#ffffff";

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={montserrat.className}>
        <Navbar />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
