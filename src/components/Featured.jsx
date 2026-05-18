// src/components/Featured.jsx

/*
====================================================
FEATURED SECTION
====================================================

Sección inspirada en:
- editorial boutique
- bloques alternados
- diseño aesthetic

Aquí mostraremos:
- productos destacados
- promociones
- colecciones

====================================================
*/

import logo from "../assets/images/logo.png";
import flowerPink from "../assets/images/flowerPink.png";
import flowerOrange from "../assets/images/flowerOrange.png";

function Featured() {

  return (

    <section className="bg-[#fff7fa] py-28 px-10 overflow-hidden">

      {/* CONTENEDOR */}

      <div className="max-w-7xl mx-auto space-y-28">

        {/* ================================================= */}
        {/* BLOQUE 1 */}
        {/* ================================================= */}

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGEN */}

          <div className="relative">

            <div className="bg-pink-200 rounded-[60px] h-[500px] flex items-center justify-center shadow-2xl overflow-hidden relative">

              {/* DEGRADADO */}

              <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-[#ffd8c7] opacity-50"></div>

              {/* LOGO */}

              <img
                src={logo}
                alt=""
                className="w-[300px] relative z-10"
              />

            </div>

            {/* FLORES */}

            <img
              src={flowerPink}
              alt=""
              className="absolute top-[-30px] left-[-20px] w-36 animate-bounce"
            />

            <img
              src={flowerOrange}
              alt=""
              className="absolute bottom-[-20px] right-[-20px] w-36 animate-pulse"
            />

          </div>

          {/* TEXTO */}

          <div>

            <span className="bg-white px-6 py-3 rounded-full text-pink-500 font-black shadow-md">

              nueva colección ✨

            </span>

            <h2 className="text-7xl font-black text-pink-500 mt-8 leading-[0.95]">

              Handmade
              <br />

              Bouquets 🌸

            </h2>

            <p className="text-gray-600 text-2xl leading-relaxed mt-8 max-w-xl">

              Ramos tejidos completamente a mano
              inspirados en flores reales y colores
              pastel aesthetic.

            </p>

            {/* BOTON */}

            <button className="mt-10 bg-pink-500 hover:bg-pink-600 transition text-white px-10 py-5 rounded-full text-xl font-black shadow-xl">

              Comprar ahora

            </button>

          </div>

        </div>

        {/* ================================================= */}
        {/* BLOQUE 2 */}
        {/* ================================================= */}

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* TEXTO */}

          <div className="order-2 lg:order-1">

            <span className="bg-white px-6 py-3 rounded-full text-[#ffb18c] font-black shadow-md">

              best sellers 💖

            </span>

            <h2 className="text-7xl font-black text-[#ffb18c] mt-8 leading-[0.95]">

              Cute
              <br />

              Tulips 🌷

            </h2>

            <p className="text-gray-600 text-2xl leading-relaxed mt-8 max-w-xl">

              Nuestros tulipanes tejidos son perfectos
              para regalos, decoración y detalles
              especiales llenos de amor.

            </p>

            {/* BOTON */}

            <button className="mt-10 bg-[#ffb18c] hover:bg-[#ffa276] transition text-white px-10 py-5 rounded-full text-xl font-black shadow-xl">

              Ver colección

            </button>

          </div>

          {/* IMAGEN */}

          <div className="relative order-1 lg:order-2">

            <div className="bg-[#ffe7dc] rounded-[60px] h-[500px] flex items-center justify-center shadow-2xl overflow-hidden relative">

              {/* EFECTO */}

              <div className="absolute inset-0 bg-gradient-to-br from-[#fff1eb] to-[#ffd7c5] opacity-50"></div>

              {/* FLOR */}

              <img
                src={flowerOrange}
                alt=""
                className="w-[250px] relative z-10"
              />

            </div>

            {/* DECORACION */}

            <img
              src={flowerPink}
              alt=""
              className="absolute top-[-20px] right-[-20px] w-32 animate-bounce"
            />

          </div>

        </div>

      </div>

    </section>

  );
}

export default Featured;