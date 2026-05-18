// src/components/CartSidebar.jsx

/*
====================================================
RESPONSIVE CART SIDEBAR
====================================================

Carrito responsive premium 🌸

====================================================
*/

function CartSidebar() {

  return (

    <aside className="bg-white rounded-[35px] md:rounded-[40px] shadow-2xl p-6 md:p-8 h-fit">

      {/* TITULO */}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">

        <h3 className="text-3xl md:text-4xl font-black text-pink-500">

          Your Cart 🛍️

        </h3>

        <span className="bg-pink-100 text-pink-500 px-4 py-2 rounded-full font-black w-fit">

          2 items

        </span>

      </div>

      {/* ================================================= */}
      {/* PRODUCTO */}
      {/* ================================================= */}

      <div className="flex items-center gap-4 border-b border-pink-100 pb-6 mb-6">

        <div className="bg-pink-100 w-20 h-20 md:w-24 md:h-24 rounded-3xl flex items-center justify-center text-3xl">

          🌷

        </div>

        <div className="flex-1">

          <h4 className="text-lg md:text-xl font-black text-gray-800">

            Pink Tulips

          </h4>

          <p className="text-pink-500 font-black mt-2">

            ₡12.000

          </p>

        </div>

      </div>

      {/* ================================================= */}
      {/* PRODUCTO */}
      {/* ================================================= */}

      <div className="flex items-center gap-4 border-b border-pink-100 pb-6 mb-6">

        <div className="bg-orange-100 w-20 h-20 md:w-24 md:h-24 rounded-3xl flex items-center justify-center text-3xl">

          🌸

        </div>

        <div className="flex-1">

          <h4 className="text-lg md:text-xl font-black text-gray-800">

            Handmade Bouquet

          </h4>

          <p className="text-pink-500 font-black mt-2">

            ₡18.000

          </p>

        </div>

      </div>

      {/* ================================================= */}
      {/* TOTAL */}
      {/* ================================================= */}

      <div className="flex items-center justify-between mt-10">

        <h4 className="text-2xl md:text-3xl font-black text-gray-800">

          Total

        </h4>

        <p className="text-3xl md:text-4xl font-black text-pink-500">

          ₡30.000

        </p>

      </div>

      {/* ================================================= */}
      {/* BOTONES */}
      {/* ================================================= */}

      <div className="flex flex-col gap-5 mt-10">

        <button className="bg-pink-500 hover:bg-pink-600 transition text-white py-4 md:py-5 rounded-full text-lg md:text-xl font-black shadow-xl">

          Realizar Pedido 💖

        </button>

        <button className="bg-[#fff1f7] hover:bg-pink-100 transition text-pink-500 py-4 md:py-5 rounded-full text-lg md:text-xl font-black shadow-lg">

          Pedir por WhatsApp

        </button>

      </div>

    </aside>

  );
}

export default CartSidebar;