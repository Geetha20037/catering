import { useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

function Booking() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="booking" className="section-padding">
      <div className="mx-auto w-full px-3 sm:px-4 lg:px-5">
        <div className="grid overflow-hidden rounded-[2rem] bg-[#29241f] lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden p-8 text-white sm:p-12 lg:p-14"
          >
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#b76538]/20 blur-3xl" />

            <p className="relative text-sm font-bold uppercase tracking-[0.25em] text-[#eab16e]">
              Start Planning
            </p>

            <h2 className="relative mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Let's create something delicious.
            </h2>

            <p className="relative mt-5 max-w-md leading-7 text-white/60">
              Tell us about your event and our team will prepare a personalized
              catering proposal for you.
            </p>

            <div className="relative mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-[#eab16e]">
                  <Phone size={19} />
                </span>

                <div>
                  <p className="text-xs text-white/40">Call us</p>
                  <p className="mt-1 font-semibold">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-[#eab16e]">
                  <Mail size={19} />
                </span>

                <div>
                  <p className="text-xs text-white/40">Email us</p>
                  <p className="mt-1 font-semibold">hello@savora.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-[#eab16e]">
                  <MapPin size={19} />
                </span>

                <div>
                  <p className="text-xs text-white/40">Visit us</p>
                  <p className="mt-1 font-semibold">Bengaluru, Karnataka</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="bg-white p-7 sm:p-12 lg:p-14">
            {submitted ? (
              <div className="flex min-h-[480px] flex-col items-center justify-center text-center">
                <CheckCircle2 size={60} className="text-[#4f9d69]" />

                <h3 className="mt-6 font-display text-3xl font-bold">
                  Booking request received!
                </h3>

                <p className="mt-3 max-w-md leading-7 text-[#77716b]">
                  Thank you for choosing Savora. Our event specialist will
                  contact you shortly.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-7 rounded-full bg-[#b76538] px-6 py-3 text-sm font-bold text-white"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-8">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b76538]">
                    Book Savora
                  </p>

                  <h3 className="mt-2 font-display text-3xl font-bold">
                    Tell us about your event
                  </h3>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Full Name
                    </label>

                    <input
                      required
                      type="text"
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-[#e5ddd5] bg-[#fcfaf8] px-4 py-3.5 text-sm outline-none transition-all placeholder:text-[#aaa29a] focus:border-[#b76538] focus:ring-4 focus:ring-[#b76538]/10"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Email Address
                    </label>

                    <input
                      required
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-[#e5ddd5] bg-[#fcfaf8] px-4 py-3.5 text-sm outline-none transition-all placeholder:text-[#aaa29a] focus:border-[#b76538] focus:ring-4 focus:ring-[#b76538]/10"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Event Type
                    </label>

                    <select
                      required
                      className="w-full rounded-xl border border-[#e5ddd5] bg-[#fcfaf8] px-4 py-3.5 text-sm outline-none focus:border-[#b76538] focus:ring-4 focus:ring-[#b76538]/10"
                    >
                      <option value="">Select event</option>
                      <option>Wedding</option>
                      <option>Corporate Event</option>
                      <option>Birthday Party</option>
                      <option>Private Dinner</option>
                      <option>Anniversary</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Number of Guests
                    </label>

                    <select
                      required
                      className="w-full rounded-xl border border-[#e5ddd5] bg-[#fcfaf8] px-4 py-3.5 text-sm outline-none focus:border-[#b76538] focus:ring-4 focus:ring-[#b76538]/10"
                    >
                      <option value="">Select guests</option>
                      <option>20â€“50</option>
                      <option>50â€“100</option>
                      <option>100â€“200</option>
                      <option>200â€“500</option>
                      <option>500+</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Event Date
                    </label>

                    <div className="relative">
                      <CalendarDays
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#99918a]"
                      />

                      <input
                        required
                        type="date"
                        className="w-full rounded-xl border border-[#e5ddd5] bg-[#fcfaf8] py-3.5 pl-11 pr-4 text-sm outline-none focus:border-[#b76538] focus:ring-4 focus:ring-[#b76538]/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Phone Number
                    </label>

                    <input
                      required
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl border border-[#e5ddd5] bg-[#fcfaf8] px-4 py-3.5 text-sm outline-none transition-all placeholder:text-[#aaa29a] focus:border-[#b76538] focus:ring-4 focus:ring-[#b76538]/10"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-semibold">
                      Tell us more
                    </label>

                    <textarea
                      rows="4"
                      placeholder="Tell us about your event, food preferences, venue, theme, etc."
                      className="w-full resize-none rounded-xl border border-[#e5ddd5] bg-[#fcfaf8] px-4 py-3.5 text-sm outline-none transition-all placeholder:text-[#aaa29a] focus:border-[#b76538] focus:ring-4 focus:ring-[#b76538]/10"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#b76538] px-6 py-4 font-bold text-white shadow-lg shadow-[#b76538]/20 transition-all hover:-translate-y-0.5 hover:bg-[#934a26]"
                >
                  Send Booking Request
                  <Send size={17} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Booking;