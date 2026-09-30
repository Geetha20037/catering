import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Users } from "lucide-react";

const packages = [
  {
    title: "Gather",
    price: "From $35",
    guests: "20â€“50 guests",
    description:
      "A relaxed package for intimate gatherings and casual celebrations.",
    features: [
      "3-course menu",
      "Buffet setup",
      "Basic table service",
    ],
  },
  {
    title: "Signature",
    price: "From $65",
    guests: "50â€“150 guests",
    description:
      "Our signature experience for weddings, celebrations and special events.",
    features: [
      "5-course menu",
      "Premium presentation",
      "Dedicated coordinator",
    ],
    featured: true,
  },
  {
    title: "Grand",
    price: "From $110",
    guests: "150+ guests",
    description:
      "A complete premium catering experience for large-scale occasions.",
    features: [
      "Custom menu",
      "Full-service staff",
      "Luxury table setup",
    ],
  },
];

function Events() {
  return (
    <section id="events" className="bg-[#29241f] section-padding text-white">
      <div className="mx-auto w-full px-3 sm:px-4 lg:px-5">
        <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#eab16e]">
              Events & Packages
            </p>

            <h2 className="font-display text-4xl font-semibold sm:text-5xl">
              Your celebration, your way
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/60">
            Choose a package and personalize it with our team to create an
            experience that fits your event perfectly.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -7 }}
              className={`relative rounded-3xl p-7 ${
                pkg.featured
                  ? "bg-[#b76538] shadow-2xl shadow-black/30"
                  : "bg-[#352f29] ring-1 ring-white/10"
              }`}
            >
              {pkg.featured && (
                <div className="absolute right-6 top-6 flex items-center gap-1 rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold">
                  <Sparkles size={13} />
                  Popular
                </div>
              )}

              <p
                className={`text-sm font-semibold ${
                  pkg.featured ? "text-white/80" : "text-[#eab16e]"
                }`}
              >
                {pkg.guests}
              </p>

              <h3 className="mt-3 font-display text-3xl font-bold">
                {pkg.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-white/65">
                {pkg.description}
              </p>

              <p className="mt-7 font-display text-3xl font-bold">
                {pkg.price}
              </p>

              <div className="my-7 h-px bg-white/10" />

              <div className="space-y-4">
                {pkg.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-sm"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                      âœ“
                    </span>

                    {feature}
                  </div>
                ))}
              </div>

              <a
                href="#booking"
                className={`mt-8 flex items-center justify-center gap-2 rounded-full py-3.5 text-sm font-bold transition-all ${
                  pkg.featured
                    ? "bg-white text-[#b76538] hover:bg-[#fff3ea]"
                    : "bg-white/10 text-white hover:bg-white hover:text-[#29241f]"
                }`}
              >
                Choose Package
                <ArrowRight size={17} />
              </a>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
          <Users size={18} className="text-[#eab16e]" />

          <p className="text-sm text-white/60">
            Need something different?{" "}
            <a href="#booking" className="font-bold text-[#eab16e]">
              Create a custom package
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Events;