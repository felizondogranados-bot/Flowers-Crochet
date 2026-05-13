function FeaturedProducts() {

  const products = [
    "Tulipanes",
    "Ramos",
    "Girasoles"
  ];

  return (
    <section className="bg-[#ff5c00] py-20 px-10">

      <h2 className="text-center text-white text-5xl font-black mb-16">
        Productos Destacados ✨
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {products.map((product, index) => (

          <div
            key={index}
            className="bg-pink-200 p-10 rounded-[40px] shadow-xl hover:scale-105 transition duration-300"
          >

            <div className="w-28 h-28 bg-pink-400 rounded-full mx-auto mb-6"></div>

            <h3 className="text-center text-[#ff5c00] text-3xl font-black">
              {product}
            </h3>

            <button className="mt-6 bg-white text-pink-500 px-6 py-3 rounded-full font-bold w-full hover:bg-pink-100 transition">
              Ver Más
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default FeaturedProducts;