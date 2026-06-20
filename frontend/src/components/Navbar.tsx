import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrolled } from "../hooks/useScrolled";
import { scrollToId } from "../utils/scroll";
import Mascot from "./Mascot";

const NAV_LINKS = [
  { label: "Details", id: "details" },
  { label: "What You'll Learn", id: "outcomes" },
  { label: "Reviews", id: "testimonials" },
  { label: "FAQs", id: "faq" },
];

export default function Navbar() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  function handleNavClick(id: string) {
    setOpen(false);
    scrollToId(id);
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 shadow-card backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="section-shell flex items-center justify-between py-3">
        <button
          onClick={() => scrollToId("home")}
          className="flex items-center gap-2 font-display text-lg font-bold text-ink-800"
        >
          <span className="h-9 w-9 shrink-0">
            <Mascot className="h-full w-full" />
          </span>
          FutureMinds
        </button>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="font-semibold text-ink-700 transition-colors hover:text-coral-500"
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollToId("register")}
          className="btn-primary hidden lg:inline-flex !px-6 !py-2.5 text-sm"
        >
          Enroll Now
        </button>

        {/* Mobile toggle */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-50 text-violet-600 lg:hidden"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden bg-white shadow-card lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="rounded-xl px-3 py-3 text-left font-semibold text-ink-700 hover:bg-violet-50"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("register")}
                className="btn-primary mt-2 w-full"
              >
                Enroll Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
