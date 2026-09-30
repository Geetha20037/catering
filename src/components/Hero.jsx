import { motion } from "framer-motion";
import { ArrowRight, Play, Star } from "lucide-react";

function Hero({ onPlanEvent }) {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=2000&q=90')",
        }}
      />

      <div className="absolute inset-0 bg-black/58" />

      <div className="absolute -left-20 top-40 h-72 w-72 rounded-full bg-[#b76538]/20 blur-3xl" />

      <div className="absolute -right-20 bottom-20 h-80 w-80 rounded-full bg-[#dca36b]/20 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-32 sm:px-8 lg:px-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md"
          >
            <Star size={15} fill="#eab16e" className="text-[#eab16e]" />

            <span>Celebrating 2,500+ unforgettable events</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-8xl"
          >
            Crafted flavors.
            <span className="block text-[#eab16e]">
              Beautiful celebrations.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-7 max-w-2xl text-base leading-7 text-white/80 sm:text-lg"
          >
            Savora brings thoughtful cuisine, elegant presentation and warm
            hospitality to weddings, corporate gatherings and celebrations of
            every kind.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <button type="button" onClick={onPlanEvent} className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#b76538] px-7 py-4 font-bold text-white transition-all hover:-translate-y-1 hover:bg-[#934a26]">
              Plan Your Celebration
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" /></button>

            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/30 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur-md transition-all hover:bg-white hover:text-[#28231f]"
            >
              <Play size={17} fill="currentColor" />
              Discover Our Menu
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid max-w-2xl grid-cols-3 gap-5 border-t border-white/20 pt-7"
        >
          {[
            ["12+", "Years of Craft"],
            ["48K+", "Guests Served"],
            ["150+", "Events Each Year"],
          ].map(([number, label]) => (
            <div key={label}>
              <p className="font-display text-2xl font-bold text-white sm:text-3xl">
                {number}
              </p>

              <p className="mt-1 text-xs text-white/60 sm:text-sm">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/60 sm:flex">
        <span className="text-[10px] uppercase tracking-[0.3em]">
          Explore
        </span>

        <span className="h-10 w-px bg-white/40" />
      </div>
    </section>
  );
}

export default Hero;