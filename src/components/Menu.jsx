
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Leaf, Utensils } from "lucide-react";

const categories = [
  "All",
  "Starters",
  "Main Course",
  "Breads & Rice",
  "Desserts",
  "Beverages",
];

const foods = [
  {
    id: 1,
    name: "Paneer Tikka",
    category: "Starters",
    price: "\u20B91,199",
    type: "Veg",
    description: "Smoky cottage cheese with peppers and aromatic spices.",
    image:
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 2,
    name: "Veg Spring Rolls",
    category: "Starters",
    price: "\u20B9899",
    type: "Veg",
    description: "Crispy rolls filled with fresh seasonal vegetables.",
    image:
      "https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/food_pics_v2/medium/vegetable_loempia.jpg",
  },
  {
    id: 3,
    name: "Chicken Tikka",
    category: "Starters",
    price: "\u20B91,399",
    type: "Non-Veg",
    description: "Tender grilled chicken marinated in herbs and spices.",
    image:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 4,
    name: "Truffle Bruschetta",
    category: "Starters",
    price: "\u20B9999",
    type: "Veg",
    description: "Toasted artisan bread with tomato, herbs and truffle oil.",
    image:
      "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: 5,
    name: "Butter Chicken",
    category: "Main Course",
    price: "\u20B91,799",
    type: "Non-Veg",
    description: "Classic creamy tomato curry with tender grilled chicken.",
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 6,
    name: "Paneer Butter Masala",
    category: "Main Course",
    price: "\u20B91,499",
    type: "Veg",
    description: "Soft paneer in a rich, silky tomato and butter gravy.",
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 7,
    name: "Creamy Herb Pasta",
    category: "Main Course",
    price: "\u20B91,499",
    type: "Veg",
    description: "Silky pasta tossed with herbs, cream and parmesan.",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 8,
    name: "Herb Grilled Salmon",
    category: "Main Course",
    price: "\u20B92,199",
    type: "Non-Veg",
    description: "Fresh salmon grilled with herbs, lemon and seasonal greens.",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: 9,
    name: "Garlic Naan",
    category: "Breads & Rice",
    price: "\u20B9499",
    type: "Veg",
    description: "Soft tandoor-baked naan finished with garlic and butter.",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Garlic_naan.jpg",
  },
  {
    id: 10,
    name: "Butter Naan",
    category: "Breads & Rice",
    price: "\u20B9399",
    type: "Veg",
    description: "Classic fluffy naan brushed with warm butter.",
    image:
      "https://cdn.uengage.io/uploads/10295/image-5432-1770195287.jpg",
  },
  {
    id: 11,
    name: "Vegetable Biryani",
    category: "Breads & Rice",
    price: "\u20B91,299",
    type: "Veg",
    description: "Fragrant basmati rice layered with vegetables and saffron.",
    image:
      "https://tb-static.uber.com/prod/image-proc/processed_images/66512c3d68732a8edb2c4af19cfe07cc/bc9c318a9c96996e2d990faf2b0c65f6.jpeg",
  },
  {
    id: 12,
    name: "Jeera Rice",
    category: "Breads & Rice",
    price: "\u20B9699",
    type: "Veg",
    description: "Aromatic basmati rice tempered with roasted cumin.",
    image:
      "https://d1w7312wesee68.cloudfront.net/F5krd33cSPKq6_nWbu5oRU0IpqIAhDzA1Ld_acT_Xxk/resize%3Afit%3A720%3A720/plain/s3%3A/toasttab/restaurants/restaurant-176719000000000000/menu/items/1/item-900000022837412081_1772756111.jpg",
  },

  {
    id: 13,
    name: "Gulab Jamun",
    category: "Desserts",
    price: "\u20B9599",
    type: "Veg",
    description: "Soft golden dumplings soaked in fragrant sugar syrup.",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto/FOOD_CATALOG/IMAGES/CMS/2024/7/23/3972c744-8e7d-4118-85c6-be5faa8a1bdd_13b2f21f-6ca1-4012-bce8-f5f0111d6643.jpg",
  },
  {
    id: 14,
    name: "Berry Cheesecake",
    category: "Desserts",
    price: "\u20B9799",
    type: "Veg",
    description: "Creamy cheesecake topped with fresh seasonal berries.",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 15,
    name: "Rasmalai",
    category: "Desserts",
    price: "\u20B9699",
    type: "Veg",
    description: "Delicate cheese dumplings served in chilled saffron milk.",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Rasmalai.jpg",
  },
  {
    id: 16,
    name: "Chocolate Mousse",
    category: "Desserts",
    price: "\u20B9899",
    type: "Veg",
    description: "Smooth dark chocolate mousse finished with cocoa.",
    image:
      "https://jernejkitchen.com/sites/default/files/styles/text_verticalbreakpoints_theme_jernejkitchenr_screen-md-max_1x/public/chocolate-mousse-01-jernejkitchen_2.jpg?itok=amMtMvBs",
  },

  {
    id: 17,
    name: "Mango Cooler",
    category: "Beverages",
    price: "\u20B9599",
    type: "Veg",
    description: "Refreshing mango drink blended with citrus and mint.",
    image:
      "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 18,
    name: "Signature Citrus",
    category: "Beverages",
    price: "\u20B9599",
    type: "Veg",
    description: "Fresh orange, lemon and lime with sparkling water.",
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 19,
    name: "Masala Chai",
    category: "Beverages",
    price: "\u20B9299",
    type: "Veg",
    description: "Warm Indian tea infused with cardamom and aromatic spices.",
    image:
      "https://static.toiimg.com/thumb/109703220/109703220.jpg?height=746&imgsize=51066&resizemode=76&width=420",
  },
  {
    id: 20,
    name: "Fresh Lime Cooler",
    category: "Beverages",
    price: "\u20B9399",
    type: "Veg",
    description: "Fresh lime, mint and chilled sparkling water.",
    image:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Fresh_Lime.JPG",
  },
];

function Menu({ onCreateMenu }) {
  const [active, setActive] = useState("All");

  const filteredFoods =
    active === "All"
      ? foods
      : foods.filter((food) => food.category === active);

  return (
    <section
      id="menu"
      className="section-padding overflow-hidden bg-[#fbf8f3]"
    >
      <div className="mx-auto w-full px-3 sm:px-4 lg:px-5">

        {/* Heading */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-[#b76538]" />

              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b76538]">
                From Our Kitchen
              </p>
            </div>

            <h2 className="font-display text-4xl font-semibold leading-tight text-[#292522] sm:text-5xl lg:text-6xl">
              A menu made
              <span className="block text-[#b76538]">
                for your moments
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-md"
          >
            <p className="leading-7 text-[#77716b]">
              From elegant starters to indulgent desserts, every dish is
              prepared with carefully selected ingredients and designed to
              complement your celebration.
            </p>

            <div className="mt-5 flex items-center gap-3 text-sm font-semibold text-[#4f4944]">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f1dfd2] text-[#b76538]">
                <Utensils size={17} />
              </span>
              Custom menus available for every event
            </div>
          </motion.div>
        </div>

        {/* Category Filters */}
        <div className="mt-12 overflow-x-auto pb-3">
          <div className="flex min-w-max gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActive(category)}
                className={`relative rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                  active === category
                    ? "bg-[#b76538] text-white shadow-lg shadow-[#b76538]/20"
                    : "bg-white text-[#625b54] ring-1 ring-[#e8dfd7] hover:-translate-y-0.5 hover:bg-[#f5ebe3]"
                }`}
              >
                {category}

                {active === category && (
                  <motion.span
                    layoutId="activeCategory"
                    className="absolute inset-0 -z-10 rounded-full"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Food Count */}
        <div className="mt-5 flex items-center justify-between">
          <p className="text-sm text-[#8a827a]">
            Showing{" "}
            <span className="font-bold text-[#4f4944]">
              {filteredFoods.length}
            </span>{" "}
            {filteredFoods.length === 1 ? "dish" : "dishes"}
          </p>

          <p className="hidden text-xs font-semibold uppercase tracking-wider text-[#a09890] sm:block">
            Savora Signature Collection
          </p>
        </div>

        {/* Food Grid */}
        <motion.div layout className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filteredFoods.map((food, index) => (
              <motion.article
                layout
                key={food.id}
                initial={{ opacity: 0, y: 25, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.035,
                }}
                whileHover={{ y: -7 }}
                className="group overflow-hidden rounded-[1.6rem] bg-white shadow-sm ring-1 ring-[#eee6de] transition-shadow duration-300 hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={food.image}
                    alt={food.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-80" />

                  {/* Category */}
                  <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#6c625a] shadow">
                    {food.category}
                  </div>

                  {/* Price */}
                  <div className="absolute right-4 top-4 rounded-full bg-[#b76538] px-3.5 py-1.5 font-bold text-white shadow-lg">
                    {food.price}
                  </div>

                  {/* Food Type */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-black/35 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                    <span
                      className={`flex h-4 w-4 items-center justify-center rounded-full ${
                        food.type === "Veg"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    </span>

                    {food.type}
                  </div>

                  {/* Hover Button */}
                  <button
                    type="button"
                    onClick={() =>
                      document
                        .getElementById("booking")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="absolute bottom-4 right-4 flex h-11 w-11 translate-y-4 items-center justify-center rounded-full bg-white text-[#b76538] opacity-0 shadow-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-[#b76538] hover:text-white"
                    aria-label={`Book ${food.name}`}
                  >
                    <ArrowUpRight size={19} />
                  </button>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl font-bold leading-tight text-[#302b27]">
                      {food.name}
                    </h3>

                    {food.type === "Veg" && (
                      <span
                        className="mt-1 flex shrink-0 items-center justify-center text-green-600"
                        title="Vegetarian"
                      >
                        <Leaf size={17} fill="currentColor" />
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-sm leading-6 text-[#857d75]">
                    {food.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between border-t border-[#eee7e0] pt-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#a09890]">
                      Savora Kitchen
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        document
                          .getElementById("booking")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="text-xs font-bold text-[#b76538] transition-colors hover:text-[#934a26]"
                    >
                      Enquire </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 flex flex-col items-center justify-between gap-6 rounded-3xl bg-[#f2e8de] p-7 sm:flex-row sm:p-9"
        >
          <div>
            <p className="font-display text-2xl font-bold text-[#302b27]">
              Looking for a customized menu?
            </p>

            <p className="mt-2 text-sm leading-6 text-[#77716b]">
              Tell us your guest count, preferences and event style. We'll
              create a menu around your celebration.
            </p>
          </div>

          <button type="button" onClick={onCreateMenu} className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#b76538] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#b76538]/20 transition-all hover:-translate-y-1 hover:bg-[#934a26]">
            Create Your Menu <ArrowUpRight size={17} /></button>
        </motion.div>
      </div>
    </section>
  );
}

export default Menu;


