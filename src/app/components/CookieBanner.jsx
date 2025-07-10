"use client";
import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setShowBanner(true);
  }, []);

  const handleConsent = (accepted) => {
    localStorage.setItem("cookie_consent", accepted ? "accepted" : "rejected");
    setShowBanner(false);
    if (accepted) {
      loadGoogleAnalytics();
    }
  };

  const loadGoogleAnalytics = () => {
    if (typeof window === "undefined") return;
    const script1 = document.createElement("script");
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-0RYGLLV69Z";
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-0RYGLLV69Z');
    `;
    document.head.appendChild(script2);
  };

  return showBanner ? (
    <div className="fixed bottom-0 z-50 flex flex-col items-center justify-between w-full p-4 text-sm bg-black border-t shadow-md md:flex-row">
      <span className="mb-2 text-white md:mb-0">
        Utilizamos cookies para analizar el tráfico y mejorar tu experiencia.
      </span>
      <div className="flex gap-2">
        <button
          onClick={() => handleConsent(false)}
          className="px-3 py-1 text-white border rounded hover:bg-black"
        >
          Rechazar
        </button>
        <button
          onClick={() => handleConsent(true)}
          className="px-3 py-1 text-black bg-white rounded hover:bg-black hover:text-white"
        >
          Aceptar
        </button>
      </div>
    </div>
  ) : null;
}
