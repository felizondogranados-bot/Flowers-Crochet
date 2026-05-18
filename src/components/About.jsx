// src/components/About.jsx

/*
====================================================
ABOUT SECTION
====================================================

Sección sobre la marca.

Aquí puedes contar:
- quién eres
- cómo nació Flowers Crochet
- el significado del emprendimiento

====================================================
*/

import flowerPink from "../assets/images/flowerPink.png";
import logo from "../assets/images/logo.png";

function About() {

  return (

    <section className="bg-white py-32 px-10 relative overflow-hidden">

      {/* GLOW */}

      <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-pink-100 rounded-full blur-3xl opacity-50"></div>

      {/* CONTENIDO */}

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">

        {/* IMAGEN */}

        <div className="relative flex justify-center">

          <div className="bg-[#fff3f8] rounded-[60px] w-[500px] h-[500px] shadow-2xl flex items-center justify-center relative overflow-hidden">

            {/* EFECTO */}

            <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-white opacity-50"></div>

            {/* LOGO */}

            <img
              src={logo}
              alt=""
              className="w-[280px] relative z-10"
            />

          </div>

          {/* FLOR */}

          <img
            src={flowerPink}
            alt=""
            className="absolute top-[-20px] left-[0px] w-36 animate-bounce"
          />

        </div>

        {/* TEXTO */}

        <div>

          <span className="bg-pink-100 px-6 py-3 rounded-full text-pink-500 font-black">

            about Flowers Crochet 🌸

          </span>

          <h2 className="text-7xl font-black text-pink-500 mt-8 leading-[0.95]">

            Made with
            <br />

            love 💖

          </h2>

          <p className="text-gray-600 text-2xl leading-relaxed mt-8">

            Flowers Crochet nació del amor por el arte,
            los colores pastel y las flores tejidas a mano.

          </p>

          <p className="text-gray-600 text-2xl leading-relaxed mt-6">

            Cada pieza está hecha cuidadosamente para transmitir
            ternura, creatividad y muchísimo cariño ✨

          </p>

          {/* BOTON */}

          <button className="mt-10 bg-pink-500 hover:bg-pink-600 transition text-white px-10 py-5 rounded-full text-xl font-black shadow-xl">

            Leer más

          </button>

        </div>

      </div>

    </section>

  );
}

export default About;