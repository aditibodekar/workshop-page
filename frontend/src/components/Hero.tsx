import { motion } from "framer-motion";
import BackgroundBlobs from "./BackgroundBlobs";
import CountdownBadge from "./CountdownBadge";
import Mascot from "./Mascot";
import { scrollToId } from "../utils/scroll";
import { StarIcon } from "./icons";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-cream to-coral-50 pb-16 pt-10 sm:pt-14 lg:pb-24 lg:pt-16"
    >
      <BackgroundBlobs />

      <div className="section-shell relative grid items-center gap-12 lg:grid-cols-2">
        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="tag-pill">
            <StarIcon className="h-4 w-4 text-sun-500" />
            Live Online · Small Batches · Beginner Friendly
          </span>

          <h1 className="mt-5 font-display text-4xl font-extrabold leading-tight text-ink-900 sm:text-5xl lg:text-[3.4rem]">
            AI & Robotics
            <span className="block text-coral-500">Summer Workshop</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-600">
            A playful, hands-on 4-week adventure where kids aged 8–14 build
            real AI mini-projects, control friendly robots, and write their
            very first lines of code — all from the comfort of home.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button onClick={() => scrollToId("register")} className="btn-primary">
              Enroll Now
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button onClick={() => scrollToId("details")} className="btn-secondary">
              See Workshop Details
            </button>
          </div>

          <div className="mt-8">
            <CountdownBadge />
          </div>
        </motion.div>

        {/* Right: mascot + floating stat cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mx-auto flex w-full max-w-md items-center justify-center"
        >
          <div className="absolute h-72 w-72 rounded-full bg-gradient-to-br from-coral-200 via-violet-200 to-teal-200 blur-3xl sm:h-80 sm:w-80" />

          <div className="relative z-10 w-56 sm:w-64 animate-float">
            <Mascot className="h-auto w-full drop-shadow-xl" />
          </div>

          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute -left-2 top-6 rounded-2xl bg-white px-4 py-3 shadow-card sm:left-0"
          >
            <p className="font-display text-lg font-bold text-violet-600">4 Weeks</p>
            <p className="text-xs font-semibold text-ink-500">Live Sessions</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="absolute -right-2 bottom-10 rounded-2xl bg-white px-4 py-3 shadow-card sm:right-0"
          >
            <p className="font-display text-lg font-bold text-coral-500">₹2,999</p>
            <p className="text-xs font-semibold text-ink-500">All-inclusive fee</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
