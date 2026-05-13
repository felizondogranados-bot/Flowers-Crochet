// src/components/Catalog.jsx

function Catalog() {

  const products = [
    {
      name: "Tulipanes Rosados",
      category: "Tulipanes",
      price: "$350 MXN",
      image: "https://images.unsplash.com/photo-1520763185298-1b434c919102?q=80&w=1200&auto=format&fit=crop"
    },
    {
      name: "Ramo Primavera",
      category: "Ramos",
      price: "$650 MXN",
      image: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?q=80&w=1200&auto=format&fit=crop"
    },
    {
      name: "Girasol Tejido",
      category: "Girasoles",
      price: "$280 MXN",
      image: "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?q=80&w=1200&auto=format&fit=crop"
    },
    {
      name: "Rosa Clásica",
      category: "Rosas",
      price: "$320 MXN",
      image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=1200&auto=format&fit=crop"
    },
  ];

  return (

    <section className="bg-[#fff7fa] py-24 px-8">

      {/* TITULO */}

      <div className="text-center mb-16">

        <h2 className="text-7xl font-black text-pink-500">
          Catálogo 🌸
        </h2>

        <p className="text-gray-600 text-xl mt-4">
          Descubre nuestras flores tejidas a mano
        </p>

      </div>

      {/* FILTROS */}

      <div className="flex flex-wrap justify-center gap-5 mb-16">

        <button className="bg-pink-500 text-white px-8 py-3 rounded-full font-bold shadow-lg">
          Todos
        </button>

        <button className="bg-white px-8 py-3 rounded-full font-bold text-gray-700 shadow">
          Ramos
        </button>

        <button className="bg-white px-8 py-3 rounded-full font-bold text-gray-700 shadow">
          Tulipanes
        </button>

        <button className="bg-white px-8 py-3 rounded-full font-bold text-gray-700 shadow">
          Girasoles
        </button>

        <button className="bg-white px-8 py-3 rounded-full font-bold text-gray-700 shadow">
          Rosas
        </button>

      </div>

      {/* CONTENIDO */}

      <div className="grid lg:grid-cols-[1fr_350px] gap-10 max-w-7xl mx-auto">

        {/* PRODUCTOS */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {products.map((product, index) => (

            <div
              key={index}
              className="bg-white rounded-[35px] overflow-hidden shadow-xl hover:scale-[1.02] transition duration-300"
            >

              {/* IMAGEN */}

              <div className="relative">

                <img
                  src={product.image}
                  alt=""
                  className="h-[260px] w-full object-cover"
                />

                <button className="absolute top-4 right-4 bg-white w-12 h-12 rounded-full shadow flex items-center justify-center text-pink-500 text-2xl">

                  ♡

                </button>

              </div>

              {/* INFO */}

              <div className="p-6">

                <h3 className="text-2xl font-black text-gray-800">
                  {product.name}
                </h3>

                <p className="text-gray-500 mt-2">
                  {product.category}
                </p>

                <p className="text-pink-500 text-2xl font-black mt-4">
                  {product.price}
                </p>

                {/* BOTONES */}

                <div className="flex items-center justify-between mt-6 gap-4">

                  <div className="flex items-center bg-[#fff3f7] rounded-full px-4 py-2 gap-4">

                    <button className="text-xl font-bold">
                      -
                    </button>

                    <span className="font-bold">
                      1
                    </span>

                    <button className="text-xl font-bold">
                      +
                    </button>

                  </div>

                  <button className="bg-[#ff6b00] hover:bg-orange-600 transition text-white px-6 py-3 rounded-full font-bold shadow-lg">

                    Agregar

                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* PANEL PEDIDO */}

        <div className="bg-white rounded-[40px] shadow-2xl p-8 h-fit sticky top-10">

          <h3 className="text-4xl font-black text-pink-500 mb-8">
            Tu pedido 🛍️
          </h3>

          {/* PRODUCTO */}

          <div className="flex justify-between items-center border-b pb-6 mb-6">

            <div>

              <h4 className="font-black text-lg">
                Tulipanes Rosados
              </h4>

              <p className="text-pink-500 font-bold">
                $350 MXN
              </p>

            </div>

            <span className="bg-pink-100 text-pink-500 px-4 py-2 rounded-full font-bold">
              x1
            </span>

          </div>

          {/* PRODUCTO */}

          <div className="flex justify-between items-center border-b pb-6 mb-6">

            <div>

              <h4 className="font-black text-lg">
                Ramo Primavera
              </h4>

              <p className="text-pink-500 font-bold">
                $650 MXN
              </p>

            </div>

            <span className="bg-pink-100 text-pink-500 px-4 py-2 rounded-full font-bold">
              x1
            </span>

          </div>

          {/* TOTAL */}

          <div className="flex justify-between items-center mt-10">

            <h4 className="text-2xl font-black">
              Total
            </h4>

            <p className="text-3xl font-black text-pink-500">
              $1000 MXN
            </p>

          </div>

          {/* BOTON */}

          <button className="w-full mt-10 bg-[#ff6b00] hover:bg-orange-600 transition text-white py-5 rounded-full text-xl font-black shadow-xl">

            Realizar Pedido 💖

          </button>

          {/* WHATSAPP */}

          <button className="w-full mt-5 bg-pink-100 hover:bg-pink-200 transition text-pink-500 py-5 rounded-full text-xl font-black">

            Pedir por WhatsApp

          </button>

        </div>

      </div>

    </section>

  );
}

export default Catalog;