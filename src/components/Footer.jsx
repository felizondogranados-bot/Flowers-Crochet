// src/components/Footer.jsx

/*
====================================================
FOOTER
====================================================

Pie de página aesthetic.

====================================================
*/

function Footer() {

  return (

    <footer className="bg-[#ffd6e7] py-20 px-10">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16">

        {/* MARCA */}

        <div>

          <h2 className="text-5xl font-black text-pink-500">

            Flowers Crochet 🌸

          </h2>

          <p className="text-gray-600 text-xl mt-6 leading-relaxed">

            Handmade crochet flowers made with love,
            creativity and pastel aesthetic vibes ✨

          </p>

        </div>

        {/* LINKS */}

        <div>

          <h3 className="text-3xl font-black text-pink-500 mb-8">

            Links

          </h3>

          <ul className="space-y-4 text-gray-600 text-xl font-semibold">

            <li>Home</li>

            <li>Catálogo</li>

            <li>About</li>

            <li>Contact</li>

          </ul>

        </div>

        {/* CONTACT */}

        <div>

          <h3 className="text-3xl font-black text-pink-500 mb-8">

            Contact

          </h3>

          <ul className="space-y-4 text-gray-600 text-xl font-semibold">

            <li>Instagram</li>

            <li>TikTok</li>

            <li>WhatsApp</li>

            <li>@flowers_crochet</li>

          </ul>

        </div>

      </div>

      {/* COPYRIGHT */}

      <div className="border-t border-pink-200 mt-16 pt-10 text-center">

        <p className="text-gray-500 text-lg">

          © 2026 Flowers Crochet — All rights reserved 🌸

        </p>

      </div>

    </footer>

  );
}

export default Footer;