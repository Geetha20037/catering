import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, Check, ChefHat, X } from "lucide-react";

function EventPlannerModal({ isOpen, onClose, selectedPackage = "" }) {
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    eventType: "",
    guests: "",
    date: "",
    package: selectedPackage,
    message: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ duration: 0.3 }}
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] bg-[#fbf8f3] p-6 shadow-2xl sm:p-8"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#eee5dc] text-[#4b423b] transition-all hover:bg-[#b76538] hover:text-white"
              aria-label="Close"
            >
              <X size={19} />
            </button>

            {!submitted ? (
              <>
                <div className="mb-7 pr-12">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f0ddd0] text-[#b76538]">
                      <ChefHat size={21} />
                    </span>

                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#b76538]">
                      Savora Catering
                    </span>
                  </div>

                  <h2 className="font-display text-3xl font-bold text-[#2d2723] sm:text-4xl">
                    Plan your celebration
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-[#7c746d]">
                    Tell us a little about your event and our team will help
                    create the perfect catering experience.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-[#4c443e]">
                        Your Name
                      </label>
                      <input
                        required
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full rounded-xl border border-[#e4d9cf] bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#b76538] focus:ring-2 focus:ring-[#b76538]/10"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-[#4c443e]">
                        Event Type
                      </label>
                      <select
                        required
                        name="eventType"
                        value={form.eventType}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-[#e4d9cf] bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#b76538]"
                      >
                        <option value="">Select event</option>
                        <option>Wedding</option>
                        <option>Corporate Event</option>
                        <option>Birthday Party</option>
                        <option>Private Party</option>
                        <option>Social Gathering</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-[#4c443e]">
                        Number of Guests
                      </label>
                      <input
                        required
                        type="number"
                        min="1"
                        name="guests"
                        value={form.guests}
                        onChange={handleChange}
                        placeholder="e.g. 100"
                        className="w-full rounded-xl border border-[#e4d9cf] bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#b76538]"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-[#4c443e]">
                        Event Date
                      </label>
                      <input
                        required
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-[#e4d9cf] bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#b76538]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#4c443e]">
                      Preferred Package
                    </label>
                    <select
                      name="package"
                      value={form.package}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-[#e4d9cf] bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#b76538]"
                    >
                      <option value="">I'll decide later</option>
                      <option>Gather</option>
                      <option>Signature</option>
                      <option>Grand</option>
                      <option>Custom Menu</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#4c443e]">
                      Tell us about your event
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Food preferences, theme, special requirements..."
                      className="w-full resize-none rounded-xl border border-[#e4d9cf] bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#b76538]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[#b76538] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-[#b76538]/20 transition-all hover:-translate-y-0.5 hover:bg-[#934a26]"
                  >
                    <CalendarDays size={18} />
                    Start Planning
                  </button>
                </form>
              </>
            ) : (
              <div className="flex min-h-[430px] flex-col items-center justify-center text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-[#e4f2e6] text-green-600"
                >
                  <Check size={38} />
                </motion.div>

                <h2 className="mt-6 font-display text-3xl font-bold text-[#2d2723]">
                  Your request is received!
                </h2>

                <p className="mt-3 max-w-md text-sm leading-7 text-[#7c746d]">
                  Thank you for choosing Savora. Our catering team will review
                  your event details and get back to you soon.
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default EventPlannerModal;
