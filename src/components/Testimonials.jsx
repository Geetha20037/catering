import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
} from "lucide-react";

const testimonials = [
  {
    name: "Ananya Rao",
    role: "Wedding Client",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    text: "Savora made our wedding dinner incredibly special. The presentation was beautiful, the food was delicious and the entire team was so attentive.",
  },
  {
    name: "Daniel Carter",
    role: "Corporate Client",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    text: "Our annual company event was handled beautifully. Everything was organized, professional and the food received amazing feedback from our guests.",
  },
  {
    name: "Priya Mehta",
    role: "Private Event Client",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&q=80",
    text: "From the first conversation to the final dessert, Savora made everything feel effortless. The menu was personalized perfectly for our celebration.",
  },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const testimonial = testimonials[current];

  return (
    <section className="bg-[#f2ebe3] section-padding">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#b76538]">
            Client Stories
          </p>

          <h2 className="font-display text-4xl font-semibold sm:text-5xl">
            Loved by our guests
          </h2>
        </div>

        <div className="relative rounded-[2rem] bg-white p-7 shadow-xl sm:p-12">
          <Quote
            className="absolute right-8 top-8 text-[#f2dfd1] sm:right-12"
            size={70}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.35 }}
              className="relative z-10"
            >
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={17}
                    fill="#d99759"
                    className="text-[#d99759]"
                  />
                ))}
              </div>

              <blockquote className="mt-7 max-w-3xl font-display text-2xl leading-relaxed text-[#302b27] sm:text-3xl">
                â€œ{testimonial.text}â€
              </blockquote>

              <div className="mt-9 flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-14 w-14 rounded-full object-cover"
                />

                <div>
                  <p className="font-bold">{testimonial.name}</p>

                  <p className="mt-1 text-sm text-[#77716b]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-between border-t border-[#eee5dc] pt-6">
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all ${
                    current === index
                      ? "w-8 bg-[#b76538]"
                      : "w-2 bg-[#d9cec3]"
                  }`}
                  aria-label={`Show testimonial ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={previous}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e5dcd3] text-[#4d4741] transition-all hover:bg-[#b76538] hover:text-white"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={19} />
              </button>

              <button
                onClick={next}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#b76538] text-white transition-all hover:bg-[#934a26]"
                aria-label="Next testimonial"
              >
                <ChevronRight size={19} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;