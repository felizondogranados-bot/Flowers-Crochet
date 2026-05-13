import flowerPink from "../assets/images/flowerPink.png";
import flowerOrange from "../assets/images/flowerOrange.png";
import patternFlowers from "../assets/images/patternFlowers.png";
import logo from "../assets/images/logo.png";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#ffe8f1] min-h-screen">

      {/* Fondo Pattern */}

      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${patternFlowers})`,
          backgroundSize: "500px",
        }}
      ></div>

      {/* Glow */}

      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-pink-300 rounded-full blur-3xl opacity-40"></div>

      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-orange-300 rounded-full blur-3xl opacity-40"></div>

      {/* Contenido */}

      <div className="relative z-10 max-w-7xl mx-auto px-10 py-20 grid md:grid-cols-2 gap-16 items-center">

        {/* TEXTO */}

        <div>

          <div className="bg-[#ff5c00] inline-block px-6 py-2 rounded-full shadow-xl mb-8 rotate-[-3deg]">

            <p className="text-white font-bold text-lg">
              handmade with love 🌸
            </p>

          </div>

          <h1 className="text-[90px] leading-[0.9] font-black text-pink-500">

            Flowers
            <br />

            <span className="text-[#ff5c00]">
              Crochet
            </span>

          </h1>

          <p className="text-gray-700 text-2xl mt-8 max-w-xl leading-relaxed">
            Flores tejidas a mano llenas de color, amor y creatividad.
          </p>

          <div className="flex gap-6 mt-10">

            <button className="bg-[#ff5c00] hover:scale-105 transition duration-300 text-white px-10 py-5 rounded-full text-xl font-black shadow-xl">

              Ver Catálogo

            </button>

            <button className="bg-pink-400 hover:bg-pink-500 transition duration-300 text-white px-10 py-5 rounded-full text-xl font-black shadow-xl">

              Sobre Mí

            </button>

          </div>

        </div>

        {/* IMAGENES */}

        <div className="relative flex justify-center items-center">

          {/* Blob principal */}

          <div className="bg-[#ff5c00] w-[500px] h-[500px] rounded-[38%] rotate-6 shadow-2xl flex items-center justify-center relative overflow-hidden">

            <div className="absolute inset-0 bg-white opacity-10"></div>

            <img
              src={logo}
              alt=""
              className="w-[350px] drop-shadow-2xl"
            />

          </div>

          {/* Flores flotando */}

          <img
            src={flowerPink}
            alt=""
            className="absolute w-44 top-[-20px] left-[-30px] animate-bounce"
          />

          <img
            src={flowerOrange}
            alt=""
            className="absolute w-44 bottom-[-20px] right-[-20px] animate-pulse"
          />

          <img
            src={flowerPink}
            alt=""
            className="absolute w-28 bottom-[100px] left-[-60px] rotate-12"
          />

        </div>

      </div>

      {/* Bottom wave */}

      <div className="absolute bottom-0 left-0 w-full h-24 bg-[#ff5c00] rounded-t-[100px]"></div>

    </section>
  );
}

export default Hero;