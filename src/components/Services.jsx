import { motion } from "framer-motion";
import {
  HeartHandshake,
  Building2,
  CakeSlice,
  UtensilsCrossed,
  GlassWater,
  ChefHat,
} from "lucide-react";

const services = [
  {
    icon: HeartHandshake,
    title: "Weddings",
    text: "Elegant menus and seamless service for your most meaningful day.",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=700&q=80",
  },
  {
    icon: Building2,
    title: "Corporate Events",
    text: "Professional catering for meetings, launches, conferences and teams.",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=700&q=80",
  },
  {
    icon: CakeSlice,
    title: "Private Parties",
    text: "Delicious menus designed around birthdays, anniversaries and milestones.",
    image:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=700&q=80",
  },
  {
    icon: UtensilsCrossed,
    title: "Social Gatherings",
    text: "Warm hospitality and beautiful food for intimate get-togethers.",
    image:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=700&q=80",
  },
  {
    icon: GlassWater,
    title: "Cocktail Events",
    text: "Stylish small plates, drinks and service for sophisticated evenings.",
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=700&q=80",
  },
  {
    icon: ChefHat,
    title: "Custom Catering",
    text: "A personalized culinary experience built around your vision.",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=700&q=80",
  },
];

function Services() {
  return (
    <section id="services" className="bg-[#f2ebe3] section-padding">
      <div className="mx-auto w-full px-3 sm:px-4 lg:px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#b76538]">
            Our Expertise
          </p>

          <h2 className="font-display text-4xl font-semibold sm:text-5xl">
            Catering for every celebration
          </h2>

          <p className="mt-5 leading-7 text-[#716b65]">
            Whether you're planning an intimate dinner or a large celebration,
            our team handles the details while you enjoy the occasion.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-shadow hover:shadow-2xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <div className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#b76538] shadow-lg">
                    <Icon size={22} />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#77716b]">
                    {service.text}
                  </p>

                  <a
                    href="#booking"
                    className="mt-5 inline-flex text-sm font-bold text-[#b76538] transition-colors hover:text-[#934a26]"
                  >
                    Plan this event
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;