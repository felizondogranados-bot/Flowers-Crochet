import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";
import Catalog from "../components/Catalog";

function Home() {
    return (
        <div className="bg-[#fff4f7] min-h-screen overflow-hidden">

            <Navbar />

            <Hero />

            <Catalog />

            <FeaturedProducts />

            <Footer />

        </div>
    );
}

export default Home;