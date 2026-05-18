// src/components/Hero.jsx

/*
====================================================
HERO SECTION RESPONSIVE
====================================================

VERSIÓN RESPONSIVE PREMIUM 🌸

- Mobile First
- Responsive
- Framer Motion
- Diseño aesthetic
- Optimizado para GitHub Pages

====================================================
*/

import { motion } from "framer-motion";

import flowerPink from "../assets/images/flowerPink.png";
import flowerOrange from "../assets/images/flowerOrange.png";
import patternFlowers from "../assets/images/patternFlowers.png";
import logo from "../assets/images/logo.png";

function Hero() {

  return (

    <section className="relative min-h-screen overflow-hidden bg-[#fff7fa]">

      {/* ================================================= */}
      {/* FONDO */}
      {/* ================================================= */}

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${patternFlowers})`,
          backgroundSize: "350px",
        }}
      ></div>

      {/* ================================================= */}
      {/* CONTENIDO */}
      {/* ================================================= */}

      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-36 md:pt-44 pb-20 grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* ================================================= */}
        {/* TEXTO */}
        {/* ================================================= */}

        <motion.div

          initial={{ opacity:0, y:80 }}

          animate={{ opacity:1, y:0 }}

          transition={{
            duration:1
          }}

          className="text-center lg:text-left"
        >

          {/* ETIQUETA */}

          <motion.div

            initial={{ opacity:0, scale:0.8 }}

            animate={{ opacity:1, scale:1 }}

            transition={{
              delay:0.2
            }}

            className="inline-block bg-white border border-pink-200 px-5 py-3 rounded-full shadow-md mb-8"
          >

            <p className="text-pink-500 font-bold text-sm md:text-base">

              handmade with love 🌸

            </p>

          </motion.div>

          {/* TITULO */}

          <h1 className="leading-[0.9] font-black">

            <span className="text-pink-500 text-[58px] sm:text-[70px] md:text-[95px]">

              Flowers

            </span>

            <br />

            <span className="text-[#ffb18c] text-[58px] sm:text-[70px] md:text-[95px]">

              Crochet

            </span>

          </h1>

          {/* TEXTO */}

          <p className="text-gray-600 text-lg md:text-2xl leading-relaxed mt-8 max-w-xl mx-auto lg:mx-0">

            Flores tejidas a mano llenas de amor,
            color y muchísima creatividad ✨

          </p>

          {/* BOTONES */}

          <div className="flex flex-col sm:flex-row gap-5 mt-10 justify-center lg:justify-start">

            <button className="bg-pink-500 hover:bg-pink-600 hover:scale-105 transition duration-300 text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-lg md:text-xl font-black shadow-xl">

              Ver Catálogo

            </button>

            <button className="bg-white border-2 border-pink-300 hover:bg-pink-100 hover:scale-105 transition duration-300 text-pink-500 px-8 md:px-10 py-4 md:py-5 rounded-full text-lg md:text-xl font-black shadow-lg">

              Sobre Mí

            </button>

          </div>

        </motion.div>

        {/* ================================================= */}
        {/* VISUAL */}
        {/* ================================================= */}

        <motion.div

          initial={{ opacity:0, scale:0.8 }}

          animate={{ opacity:1, scale:1 }}

          transition={{
            duration:1,
            delay:0.3
          }}

          className="relative flex justify-center items-center mt-10 lg:mt-0"
        >

          {/* CARD */}

          <div className="bg-[#ffd6e7] w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] md:w-[540px] md:h-[540px] rounded-[40px] md:rounded-[60px] shadow-2xl relative overflow-hidden flex items-center justify-center">

            {/* EFECTO */}

            <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-[#ffd8c7] opacity-40"></div>

            {/* LOGO */}

            <motion.img

              animate={{
                y:[0,-10,0]
              }}

              transition={{
                repeat:Infinity,
                duration:4
              }}

              src={logo}
              alt="Flowers Crochet Logo"
              className="w-[180px] sm:w-[250px] md:w-[330px] relative z-10 drop-shadow-xl"
            />

          </div>

          {/* FLORES */}

          <motion.img

            animate={{
              y:[0,-15,0]
            }}

            transition={{
              repeat:Infinity,
              duration:3
            }}

            src={flowerPink}
            alt=""
            className="absolute top-[-10px] left-[0px] md:left-[20px] w-20 sm:w-28 md:w-40"
          />

          <motion.img

            animate={{
              y:[0,15,0]
            }}

            transition={{
              repeat:Infinity,
              duration:4
            }}

            src={flowerOrange}
            alt=""
            className="absolute bottom-[10px] right-[-5px] md:right-[-10px] w-20 sm:w-28 md:w-40"
          />

        </motion.div>

      </div>

    </section>

  );
}

export default Hero;