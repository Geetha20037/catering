import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";

const gallery = [
  {
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
    title: "Artisan Table",
  },
  {
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=85",
    title: "Elegant Dinner",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=900&q=85",
    title: "Beautiful Celebration",
  },
  {
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=85",
    title: "Fresh Ingredients",
  },
  {
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
    title: "Garden Fresh",
  },
];

function Gallery() {
  return (
    <section id="gallery" className="section-padding">
      <div className="mx-auto w-full px-3 sm:px-4 lg:px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#b76538]">
            Our Gallery
          </p>

          <h2 className="font-display text-4xl font-semibold sm:text-5xl">
            A taste of Savora
          </h2>

          <p className="mt-5 leading-7 text-[#77716b]">
            Take a look at some of the tables, dishes and celebrations we've
            had the pleasure of creating.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {gallery.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group relative h-[300px] overflow-hidden rounded-3xl bg-[#e8ddd4] shadow-sm"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="absolute bottom-5 left-5 right-5 flex translate-y-4 items-center justify-between gap-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="font-display text-xl font-bold text-white">
                  {item.title}
                </span>

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#b76538] shadow-lg">
                  <Maximize2 size={17} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
