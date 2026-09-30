import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Menu from "./components/Menu";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="min-h-screen bg-[#fbf8f3] text-[#28231f]">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Menu />
        <Events />
        <Gallery />
        <Testimonials />
        <Booking />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;