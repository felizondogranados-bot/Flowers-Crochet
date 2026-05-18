// src/components/Catalog.jsx

/*
====================================================
RESPONSIVE CATALOG
====================================================

Catálogo responsive premium 🌸

====================================================
*/

import ProductCard from "./ProductCard";
import CartSidebar from "./CartSidebar";

import flowerPink from "../assets/images/flowerPink.png";
import flowerOrange from "../assets/images/flowerOrange.png";
import logo from "../assets/images/logo.png";

const products = [

  {
    id:1,
    name:"Pink Tulips",
    category:"Tulipanes",
    price:"₡12.000",
    description:"Tulipanes tejidos completamente a mano.",
    image:flowerPink
  },

  {
    id:2,
    name:"Orange Flower",
    category:"Ramos",
    price:"₡18.000",
    description:"Flores aesthetic pastel handmade.",
    image:flowerOrange
  },

  {
    id:3,
    name:"Cute Bouquet",
    category:"Bouquets",
    price:"₡22.000",
    description:"Ramo tejido inspirado en primavera.",
    image:logo
  },

  {
    id:4,
    name:"Pastel Flowers",
    category:"Decoración",
    price:"₡15.000",
    description:"Decoración floral hecha con crochet.",
    image:flowerPink
  },

];

function Catalog() {

  return (

    <section className="bg-[#fff7fa] py-24 md:py-32 px-6 md:px-10">

      {/* HEADER */}

      <div className="text-center mb-20">

        <span className="bg-pink-100 text-pink-500 px-6 py-3 rounded-full font-black text-sm md:text-base">

          flowers crochet catalog 🌸

        </span>

        <h2 className="text-5xl md:text-7xl font-black text-pink-500 mt-8">

          Our Products

        </h2>

        <p className="text-lg md:text-2xl text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">

          Descubre nuestras flores tejidas hechas
          completamente a mano con muchísimo amor ✨

        </p>

      </div>

      {/* FILTROS */}

      <div className="flex flex-wrap justify-center gap-4 md:gap-5 mb-20">

        <button className="bg-pink-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-black shadow-lg text-sm md:text-base">

          Todos

        </button>

        <button className="bg-white text-pink-500 px-6 md:px-8 py-3 md:py-4 rounded-full font-black shadow-lg hover:bg-pink-100 transition text-sm md:text-base">

          Tulipanes

        </button>

        <button className="bg-white text-pink-500 px-6 md:px-8 py-3 md:py-4 rounded-full font-black shadow-lg hover:bg-pink-100 transition text-sm md:text-base">

          Ramos

        </button>

        <button className="bg-white text-pink-500 px-6 md:px-8 py-3 md:py-4 rounded-full font-black shadow-lg hover:bg-pink-100 transition text-sm md:text-base">

          Bouquets

        </button>

      </div>

      {/* CONTENIDO */}

      <div className="max-w-7xl mx-auto grid xl:grid-cols-[1fr_380px] gap-12">

        {/* PRODUCTOS */}

        <div className="grid sm:grid-cols-2 gap-8 md:gap-10">

          {products.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))}

        </div>

        {/* SIDEBAR */}

        <CartSidebar />

      </div>

    </section>

  );
}

export default Catalog;