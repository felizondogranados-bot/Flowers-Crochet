// src/components/Categories.jsx

/*
====================================================
CATEGORIAS
====================================================

Círculos aesthetic como la referencia.

====================================================
*/

import flowerPink from "../assets/images/flowerPink.png";
import flowerOrange from "../assets/images/flowerOrange.png";

function Categories() {

  const categories = [

    {
      name: "Tulipanes",
      image: flowerPink,
      color: "bg-pink-200"
    },

    {
      name: "Ramos",
      image: flowerOrange,
      color: "bg-orange-200"
    },

    {
      name: "Rosas",
      image: flowerPink,
      color: "bg-purple-200"
    },

    {
      name: "Girasoles",
      image: flowerOrange,
      color: "bg-yellow-200"
    },

  ];

  return (

    <section className="bg-white py-28 px-10">

      {/* TITULO */}

      <div className="text-center mb-20">

        <h2 className="text-6xl font-black text-pink-500">

          Shop by category 🌸

        </h2>

      </div>

      {/* GRID */}

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">

        {categories.map((item, index) => (

          <div
            key={index}
            className="flex flex-col items-center"
          >

            {/* CIRCULO */}

            <div className={`${item.color} w-52 h-52 rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition duration-300`}>

              <img
                src={item.image}
                alt=""
                className="w-28"
              />

            </div>

            {/* TEXTO */}

            <h3 className="text-2xl font-black text-pink-500 mt-8">

              {item.name}

            </h3>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Categories;