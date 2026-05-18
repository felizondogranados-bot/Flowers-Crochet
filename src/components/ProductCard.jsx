// src/components/ProductCard.jsx

/*
====================================================
RESPONSIVE PRODUCT CARD
====================================================

Card responsive premium 🌸

- Mobile First
- Responsive
- Hover animations
- Diseño boutique

====================================================
*/

function ProductCard({ product }) {

  return (

    <div className="bg-white rounded-[30px] md:rounded-[35px] overflow-hidden shadow-xl hover:scale-[1.02] transition duration-300 group">

      {/* ================================================= */}
      {/* IMAGEN */}
      {/* ================================================= */}

      <div className="relative overflow-hidden">

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[240px] md:h-[280px] object-cover group-hover:scale-105 transition duration-500"
        />

        {/* FAVORITO */}

        <button className="absolute top-4 right-4 bg-white w-10 h-10 md:w-12 md:h-12 rounded-full shadow-lg flex items-center justify-center text-pink-500 text-xl md:text-2xl hover:scale-110 transition">

          ♡

        </button>

      </div>

      {/* ================================================= */}
      {/* INFO */}
      {/* ================================================= */}

      <div className="p-5 md:p-7">

        {/* CATEGORIA */}

        <span className="bg-pink-100 text-pink-500 px-4 py-2 rounded-full text-xs md:text-sm font-bold">

          {product.category}

        </span>

        {/* TITULO */}

        <h3 className="text-2xl md:text-3xl font-black text-gray-800 mt-5">

          {product.name}

        </h3>

        {/* DESCRIPCION */}

        <p className="text-gray-500 mt-4 leading-relaxed text-sm md:text-base">

          {product.description}

        </p>

        {/* FOOTER */}

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mt-8">

          {/* PRECIO */}

          <p className="text-2xl md:text-3xl font-black text-pink-500">

            {product.price}

          </p>

          {/* BOTON */}

          <button className="bg-[#ffb18c] hover:bg-[#ff9b6d] transition text-white px-6 py-3 rounded-full font-black shadow-lg w-full sm:w-auto">

            Agregar

          </button>

        </div>

      </div>

    </div>

  );
}

export default ProductCard;