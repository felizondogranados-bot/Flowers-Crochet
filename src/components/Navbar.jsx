function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-10 py-8 flex justify-between items-center">

      <h1 className="text-[#ff5c00] text-5xl font-black rotate-[-2deg]">
        Flowers Crochet
      </h1>

      <ul className="flex gap-10 text-[#ff5c00] text-xl font-black">

        <li className="hover:scale-110 transition cursor-pointer">
          Home
        </li>

        <li className="hover:scale-110 transition cursor-pointer">
          Catálogo
        </li>

        <li className="hover:scale-110 transition cursor-pointer">
          About
        </li>

        <li className="hover:scale-110 transition cursor-pointer">
          Contact
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;