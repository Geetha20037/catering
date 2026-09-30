import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChefHat, Minus, Plus, X } from "lucide-react";

const menuItems = {
  Starters: [
    ["Paneer Tikka", 1199],
    ["Veg Spring Rolls", 899],
    ["Chicken Tikka", 1399],
    ["Truffle Bruschetta", 999],
  ],
  "Main Course": [
    ["Butter Chicken", 1799],
    ["Paneer Butter Masala", 1499],
    ["Creamy Herb Pasta", 1499],
    ["Herb Grilled Salmon", 2199],
  ],
  "Breads & Rice": [
    ["Garlic Naan", 499],
    ["Butter Naan", 399],
    ["Vegetable Biryani", 1299],
    ["Jeera Rice", 699],
  ],
  Desserts: [
    ["Gulab Jamun", 599],
    ["Berry Cheesecake", 799],
    ["Rasmalai", 699],
    ["Chocolate Mousse", 799],
  ],
  Beverages: [
    ["Mango Cooler", 599],
    ["Signature Citrus", 599],
    ["Masala Chai", 299],
    ["Fresh Lime Cooler", 399],
  ],
};

function MenuBuilderModal({ isOpen, onClose }) {
  const [selected, setSelected] = useState({});
  const [guests, setGuests] = useState(50);
  const [submitted, setSubmitted] = useState(false);

  const toggleItem = (name) => {
    setSelected((current) => {
      const updated = { ...current };

      if (updated[name]) {
        delete updated[name];
      } else {
        updated[name] = 1;
      }

      return updated;
    });
  };

  const updateQuantity = (name, change) => {
    setSelected((current) => {
      const currentQuantity = current[name] || 0;
      const nextQuantity = currentQuantity + change;

      if (nextQuantity <= 0) {
        const updated = { ...current };
        delete updated[name];
        return updated;
      }

      return {
        ...current,
        [name]: nextQuantity,
      };
    });
  };

  const total = useMemo(() => {
    return Object.entries(selected).reduce((sum, [name, quantity]) => {
      const item = Object.values(menuItems)
        .flat()
        .find(([itemName]) => itemName === name);

      return sum + (item ? item[1] * quantity : 0);
    }, 0);
  }, [selected]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (Object.keys(selected).length === 0) return;

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setSelected({});
      setGuests(50);
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[110] flex items-center justify-center bg-black/65 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 35, scale: 0.96 }}
            transition={{ duration: 0.3 }}
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] bg-[#fbf8f3] p-5 shadow-2xl sm:p-8"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#eee5dc] text-[#4b423b] transition-all hover:bg-[#b76538] hover:text-white"
              aria-label="Close menu builder"
            >
              <X size={19} />
            </button>

            {!submitted ? (
              <>
                <div className="pr-12">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f0ddd0] text-[#b76538]">
                      <ChefHat size={21} />
                    </span>

                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#b76538]">
                      Savora Catering
                    </span>
                  </div>

                  <h2 className="font-display text-3xl font-bold text-[#2d2723] sm:text-4xl">
                    Create Your Menu
                  </h2>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-[#7c746d]">
                    Pick your favorite dishes and build a menu that matches
                    your celebration.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-8">
                  <div className="grid gap-5 lg:grid-cols-[1fr_320px]">
                    <div className="space-y-7">
                      {Object.entries(menuItems).map(([category, items]) => (
                        <div key={category}>
                          <div className="mb-3 flex items-center justify-between">
                            <h3 className="font-display text-2xl font-bold text-[#342c27]">
                              {category}
                            </h3>

                            <span className="text-xs font-semibold text-[#9a8d83]">
                              {items.length} options
                            </span>
                          </div>

                          <div className="grid gap-3 sm:grid-cols-2">
                            {items.map(([name, price]) => {
                              const quantity = selected[name] || 0;
                              const isSelected = quantity > 0;

                              return (
                                <div
                                  key={name}
                                  className={`rounded-2xl border p-4 transition-all ${
                                    isSelected
                                      ? "border-[#b76538] bg-[#fff3ea] shadow-sm"
                                      : "border-[#e6dbd1] bg-white hover:border-[#c9aa94]"
                                  }`}
                                >
                                  <div className="flex items-start justify-between gap-3">
                                    <div>
                                      <p className="font-semibold text-[#342c27]">
                                        {name}
                                      </p>

                                      <p className="mt-1 text-sm text-[#9a8d83]">
                                        ₹{price.toLocaleString("en-IN")}
                                      </p>
                                    </div>

                                    {!isSelected ? (
                                      <button
                                        type="button"
                                        onClick={() => toggleItem(name)}
                                        className="flex h-9 w-9 items-center justify-center rounded-full bg-[#b76538] text-white transition-all hover:scale-105 hover:bg-[#934a26]"
                                        aria-label={`Add ${name}`}
                                      >
                                        <Plus size={17} />
                                      </button>
                                    ) : (
                                      <div className="flex items-center gap-2 rounded-full bg-white p-1 shadow-sm">
                                        <button
                                          type="button"
                                          onClick={() =>
                                            updateQuantity(name, -1)
                                          }
                                          className="flex h-7 w-7 items-center justify-center rounded-full bg-[#eee5dc] text-[#4b423b] hover:bg-[#b76538] hover:text-white"
                                          aria-label={`Remove ${name}`}
                                        >
                                          <Minus size={14} />
                                        </button>

                                        <span className="min-w-5 text-center text-sm font-bold">
                                          {quantity}
                                        </span>

                                        <button
                                          type="button"
                                          onClick={() =>
                                            updateQuantity(name, 1)
                                          }
                                          className="flex h-7 w-7 items-center justify-center rounded-full bg-[#b76538] text-white hover:bg-[#934a26]"
                                          aria-label={`Add another ${name}`}
                                        >
                                          <Plus size={14} />
                                        </button>
                                      </div>
                                    )}
                                  </div>

                                  {isSelected && (
                                    <p className="mt-3 flex items-center gap-1 text-xs font-semibold text-[#b76538]">
                                      <Check size={13} />
                                      Added to your menu
                                    </p>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="lg:sticky lg:top-0 lg:self-start">
                      <div className="rounded-3xl bg-[#29241f] p-6 text-white shadow-xl">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#eab16e]">
                          Your Menu
                        </p>

                        <h3 className="mt-2 font-display text-2xl font-bold">
                          Celebration details
                        </h3>

                        <label className="mt-6 block text-sm font-semibold text-white/80">
                          Number of Guests
                        </label>

                        <input
                          required
                          type="number"
                          min="1"
                          value={guests}
                          onChange={(event) =>
                            setGuests(Number(event.target.value))
                          }
                          className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none focus:border-[#eab16e]"
                        />

                        <div className="my-6 h-px bg-white/10" />

                        <div className="flex items-center justify-between">
                          <span className="text-sm text-white/60">
                            Selected dishes
                          </span>

                          <span className="font-bold">
                            {Object.keys(selected).length}
                          </span>
                        </div>

                        <div className="mt-4 max-h-52 space-y-2 overflow-y-auto pr-1">
                          {Object.entries(selected).length === 0 ? (
                            <p className="rounded-xl bg-white/5 px-4 py-3 text-xs leading-5 text-white/45">
                              Your selected dishes will appear here.
                            </p>
                          ) : (
                            Object.entries(selected).map(
                              ([name, quantity]) => (
                                <div
                                  key={name}
                                  className="flex items-center justify-between gap-3 text-sm"
                                >
                                  <span className="text-white/70">
                                    {name}
                                  </span>

                                  <span className="font-semibold">
                                    ×{quantity}
                                  </span>
                                </div>
                              ),
                            )
                          )}
                        </div>

                        <div className="my-6 h-px bg-white/10" />

                        <div>
                          <p className="text-xs text-white/45">
                            Estimated menu total
                          </p>

                          <p className="mt-1 font-display text-3xl font-bold">
                            ₹{total.toLocaleString("en-IN")}
                          </p>
                        </div>

                        <p className="mt-2 text-[11px] leading-5 text-white/40">
                          Final catering pricing may vary based on guest count,
                          service style and custom requirements.
                        </p>

                        <button
                          type="submit"
                          disabled={Object.keys(selected).length === 0}
                          className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#b76538] px-5 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-[#934a26] disabled:cursor-not-allowed disabled:opacity-40"
                        >
                          <Check size={17} />
                          Create My Menu
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </>
            ) : (
              <div className="flex min-h-[520px] flex-col items-center justify-center text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-[#e4f2e6] text-green-600"
                >
                  <Check size={38} />
                </motion.div>

                <h2 className="mt-6 font-display text-3xl font-bold text-[#2d2723]">
                  Your menu is ready!
                </h2>

                <p className="mt-3 max-w-md text-sm leading-7 text-[#7c746d]">
                  We've received your customized menu request. Our catering
                  team will review the selections and contact you with the
                  final quote.
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MenuBuilderModal;
