
import { useState } from "react";
import { ArrowUp, ChefHat } from "lucide-react";

const footerLinks = {
  Explore: [
    ["About Us", "#about"],
    ["Our Services", "#services"],
    ["Our Menu", "#menu"],
    ["Gallery", "#gallery"],
  ],
  Celebrations: [
    ["Weddings", "#events"],
    ["Corporate Events", "#events"],
    ["Private Parties", "#events"],
    ["Custom Catering", "#booking"],
  ],
};

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSubscribe = (event) => {
    event.preventDefault();

    if (!email.trim()) return;

    setSubscribed(true);
    setEmail("");

    setTimeout(() => {
      setSubscribed(false);
    }, 3000);
  };

  return (
    <footer className="bg-[#1e1a17] text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">

          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#b76538]">
                <ChefHat size={20} />
              </span>

              <div>
                <span className="block font-display text-2xl font-bold leading-none">
                  Savora
                </span>

                <span className="text-[9px] font-semibold uppercase tracking-[0.25em]">
                  Catering
                </span>
              </div>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/50">
              Crafted cuisine, thoughtful service and beautiful celebrations.
              Savora turns special occasions into unforgettable memories.
            </p>

            {/* Social Media */}
            <div className="mt-6 flex gap-2">
              <a
                href="#home"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-sm font-bold text-white/60 transition-all hover:bg-[#b76538] hover:text-white"
              >
                IG
              </a>

              <a
                href="#home"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-lg font-bold text-white/60 transition-all hover:bg-[#b76538] hover:text-white"
              >
                f
              </a>

              <a
                href="#home"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-base font-bold text-white/60 transition-all hover:bg-[#b76538] hover:text-white"
              >
                ð•
              </a>

              <a
                href="#home"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-sm font-bold text-white/60 transition-all hover:bg-[#b76538] hover:text-white"
              >
                in
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold">{title}</h3>

              <div className="mt-5 space-y-3">
                {links.map(([name, href]) => (
                  <a
                    key={name}
                    href={href}
                    className="block text-sm text-white/50 transition-colors hover:text-[#eab16e]"
                  >
                    {name}
                  </a>
                ))}
              </div>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h3 className="font-bold">Join our table</h3>

            <p className="mt-5 text-sm leading-6 text-white/50">
              Receive seasonal menus, event inspiration and special updates
              from Savora.
            </p>

            {!subscribed ? (
              <form
                onSubmit={handleSubscribe}
                className="mt-5 flex overflow-hidden rounded-full border border-white/10 bg-white/5 p-1"
              >
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Your email"
                  className="min-w-0 flex-1 bg-transparent px-4 text-sm text-white outline-none placeholder:text-white/30"
                />

                <button
                  type="submit"
                  className="rounded-full bg-[#b76538] px-5 py-2.5 text-sm font-bold transition-all hover:bg-[#934a26] hover:scale-105"
                >
                  Join
                </button>
              </form>
            ) : (
              <div className="mt-5 rounded-2xl border border-[#b76538]/30 bg-[#b76538]/10 px-5 py-4">
                <p className="text-sm font-semibold text-[#eab16e]">
                  âœ“ You're subscribed!
                </p>

                <p className="mt-1 text-xs text-white/50">
                  Thanks for joining the Savora table.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-14 flex flex-col justify-between gap-5 border-t border-white/10 pt-7 text-xs text-white/40 sm:flex-row">
          <p>Â© 2026 Savora Catering. All rights reserved.</p>

          <div className="flex gap-6">
            <a
              href="#home"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#home"
              className="transition-colors hover:text-white"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>

      {/* Back To Top */}
      <button
        onClick={scrollTop}
        className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#b76538] text-white shadow-xl transition-all hover:-translate-y-1 hover:bg-[#934a26]"
        aria-label="Back to top"
      >
        <ArrowUp size={19} />
      </button>
    </footer>
  );
}

export default Footer;