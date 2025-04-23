"use client";
// components/Navbar.jsx
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Cierra el menú cuando se hace clic en cualquier lugar
  useEffect(() => {
    const handleClickOutside = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    // Solo agregamos el listener cuando el menú está abierto
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    // Limpieza del event listener
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  // Detiene la propagación del clic en el botón para evitar que se cierre inmediatamente
  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  // Evita que los clics dentro del menú cierren el menú
  const handleMenuClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <nav className="relative z-20 p-4 text-black ">
        <div className="container flex items-center justify-between mx-auto">
          {/* Logo */}

          {/* Botón hamburguesa */}
          <div>
            <button
              onClick={toggleMenu}
              className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5 z-30 relative"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <span
                className={`block w-6 h-0.5 ${
                  isOpen ? "bg-black" : "bg-black"
                } transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 ${
                  isOpen ? "bg-black" : "bg-black"
                } transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 ${
                  isOpen ? "bg-black" : "bg-black"
                } transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Menú a pantalla completa */}
      {isOpen && (
        <div
          className="fixed inset-0 z-10 flex items-center justify-center overflow-auto transition-all duration-300 ease-in-out bg-white"
          onClick={handleMenuClick}
        >
          <div className="container flex flex-col items-center py-2 mx-auto space-y-6">
            <Link href="/marcas">
              <h1
                className="text-4xl font-medium"
                onClick={() => setIsOpen(false)}
              >
                Marcas
              </h1>
            </Link>

            <Link href="/servicios">
              <h1
                className="text-4xl font-medium"
                onClick={() => setIsOpen(false)}
              >
                Servicios
              </h1>
            </Link>

            <Link href="/presupuesto">
              <h1
                className="text-4xl font-medium "
                onClick={() => setIsOpen(false)}
              >
                Presupuesto
              </h1>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
