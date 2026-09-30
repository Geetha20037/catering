import { useState } from "react";
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
import EventPlannerModal from "./components/EventPlannerModal";
import MenuBuilderModal from "./components/MenuBuilderModal";

function App() {
  const [plannerOpen, setPlannerOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");
  const [menuBuilderOpen, setMenuBuilderOpen] = useState(false);

  const openPlanner = (packageName = "") => {
    setSelectedPackage(packageName);
    setPlannerOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#fbf8f3] text-[#28231f]">
      <Navbar />

      <main>
        <Hero onPlanEvent={() => openPlanner()} />
        <About />
        <Services />
        <Menu onCreateMenu={() => setMenuBuilderOpen(true)} />
        <Events onChoosePackage={openPlanner} />
        <Gallery />
        <Testimonials />
        <Booking />
      </main>

      <Footer />
      <ScrollToTop />

      <EventPlannerModal
        isOpen={plannerOpen}
        onClose={() => setPlannerOpen(false)}
        selectedPackage={selectedPackage}
      />

      <MenuBuilderModal
        isOpen={menuBuilderOpen}
        onClose={() => setMenuBuilderOpen(false)}
      />
    </div>
  );
}

export default App;
