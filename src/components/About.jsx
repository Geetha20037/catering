import { motion } from "framer-motion";
import { Award, Check, Heart, Users } from "lucide-react";

const features = [
  "Fresh and thoughtfully sourced ingredients",
  "Menus customized for your occasion",
  "Professional and attentive service",
  "Beautiful presentation with every detail considered",
];

function About() {
  return (
    <section id="about" className="section-padding overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative mx-auto max-w-lg">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=85"
              alt="Savora catering food"
              className="h-[500px] w-full rounded-[2rem] object-cover shadow-2xl"
            />

            <div className="absolute -bottom-7 -right-4 rounded-2xl bg-white p-5 shadow-xl sm:-right-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f5e4d7] text-[#b76538]">
                  <Award size={23} />
                </div>

                <div>
                  <p className="font-display text-xl font-bold">12+</p>
                  <p className="text-xs text-[#77716b]">
                    Years of Excellence
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -left-4 -top-5 h-28 w-28 rounded-full border-[12px] border-[#efd5c2] sm:-left-8" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#b76538]">
            The Savora Story
          </p>

          <h2 className="font-display text-4xl font-semibold leading-tight text-[#292522] sm:text-5xl">
            Good food brings people together.
            <span className="block text-[#b76538]">
              Great food makes it memorable.
            </span>
          </h2>

          <p className="mt-6 leading-8 text-[#716b65]">
            Savora was created for people who believe that food should be more
            than something served at an event. It should become part of the
            story. Our culinary team combines familiar flavors, seasonal
            ingredients and modern presentation to create memorable occasions.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f5e4d7] text-[#b76538]">
                  <Check size={14} strokeWidth={3} />
                </span>

                <span className="text-sm font-medium text-[#4f4944]">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-9 grid grid-cols-3 gap-3 border-t border-[#e9e0d8] pt-7">
            <div>
              <Users className="mb-2 text-[#b76538]" size={21} />
              <p className="font-display text-xl font-bold">48K+</p>
              <p className="text-xs text-[#77716b]">Guests</p>
            </div>

            <div>
              <Heart className="mb-2 text-[#b76538]" size={21} />
              <p className="font-display text-xl font-bold">98%</p>
              <p className="text-xs text-[#77716b]">Happy Clients</p>
            </div>

            <div>
              <Award className="mb-2 text-[#b76538]" size={21} />
              <p className="font-display text-xl font-bold">25+</p>
              <p className="text-xs text-[#77716b]">Awards</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;