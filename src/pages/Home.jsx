// src/pages/Home.jsx

/*
====================================================
HOME
====================================================
*/

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Featured from "../components/Featured";
import Catalog from "../components/Catalog";
import About from "../components/About";
import Footer from "../components/Footer";

function Home() {

  return (

    <main className="bg-[#fff8fb] overflow-hidden">

      <Navbar />

      <Hero />

      <Categories />

      <Featured />

      {/* NUEVO CATALOGO */}

      <Catalog />

      <About />

      <Footer />

    </main>

  );
}

export default Home;