import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu as MenuIcon, X, ChefHat } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Menu", href: "#menu" },
  { name: "Events", href: "#events" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#booking" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#fffdf9]/95 shadow-md backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a
          href="#home"
          className={`flex items-center gap-3 ${
            scrolled ? "text-[#28231f]" : "text-white"
          }`}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#b76538] text-white">
            <ChefHat size={21} />
          </span>

          <div>
            <span className="block font-display text-2xl font-bold leading-none">
              Savora
            </span>
            <span className="text-[9px] font-semibold uppercase tracking-[0.25em]">
              Catering
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold transition-colors ${
                scrolled
                  ? "text-[#554e47] hover:text-[#b76538]"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {item.name}
            </a>
          ))}

          <a
            href="#booking"
            className="rounded-full bg-[#b76538] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#b76538]/20 transition-all hover:-translate-y-0.5 hover:bg-[#934a26]"
          >
            Book an Event
          </a>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`rounded-lg p-2 lg:hidden ${
            scrolled ? "text-[#28231f]" : "text-white"
          }`}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={27} /> : <MenuIcon size={27} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-[#eee5db] bg-[#fffdf9] shadow-lg lg:hidden"
          >
            <div className="flex flex-col px-6 py-5">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="border-b border-[#eee5db] py-4 text-sm font-semibold text-[#514a44] transition-colors hover:text-[#b76538]"
                >
                  {item.name}
                </a>
              ))}

              <a
                href="#booking"
                onClick={closeMobileMenu}
                className="mt-5 rounded-full bg-[#b76538] px-6 py-3 text-center font-bold text-white"
              >
                Book an Event
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;