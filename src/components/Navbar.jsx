// src/components/Navbar.jsx

/*
====================================================
RESPONSIVE NAVBAR
====================================================

Navbar responsive premium 🌸

Incluye:
- Menú hamburguesa
- Responsive móvil
- Animaciones
- Diseño aesthetic

====================================================
*/

import { useState } from "react";

/*
====================================================
ICONOS
====================================================
*/

import { Menu, X } from "lucide-react";

function Navbar() {

  /*
  ====================================================
  ESTADO MENU
  ====================================================
  */

  const [isOpen, setIsOpen] = useState(false);

  return (

    <header className="w-full absolute top-0 left-0 z-50">

      <nav className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex items-center justify-between">

        {/* ================================================= */}
        {/* LOGO */}
        {/* ================================================= */}

        <h1 className="text-3xl md:text-5xl font-black text-pink-500">

          Flowers Crochet 🌸

        </h1>

        {/* ================================================= */}
        {/* MENU DESKTOP */}
        {/* ================================================= */}

        <ul className="hidden md:flex gap-10 text-lg font-bold text-[#ff8ab5]">

          <li className="hover:text-pink-500 transition cursor-pointer">

            Home

          </li>

          <li className="hover:text-pink-500 transition cursor-pointer">

            Catálogo

          </li>

          <li className="hover:text-pink-500 transition cursor-pointer">

            About

          </li>

          <li className="hover:text-pink-500 transition cursor-pointer">

            Contact

          </li>

        </ul>

        {/* ================================================= */}
        {/* BOTON MOBILE */}
        {/* ================================================= */}

        <button

          onClick={() => setIsOpen(!isOpen)}

          className="md:hidden text-pink-500"
        >

          {
            isOpen
              ? <X size={35} />
              : <Menu size={35} />
          }

        </button>

      </nav>

      {/* ================================================= */}
      {/* MENU MOBILE */}
      {/* ================================================= */}

      {
        isOpen && (

          <div className="md:hidden bg-white shadow-2xl mx-6 rounded-[30px] p-8">

            <ul className="flex flex-col gap-8 text-center text-xl font-black text-pink-500">

              <li className="hover:text-[#ffb18c] transition cursor-pointer">

                Home

              </li>

              <li className="hover:text-[#ffb18c] transition cursor-pointer">

                Catálogo

              </li>

              <li className="hover:text-[#ffb18c] transition cursor-pointer">

                About

              </li>

              <li className="hover:text-[#ffb18c] transition cursor-pointer">

                Contact

              </li>

            </ul>

          </div>

        )
      }

    </header>

  );
}

export default Navbar;