import { AnimatePresence, motion } from "framer-motion";
import { useScrolled } from "../hooks/useScrolled";
import { scrollToId } from "../utils/scroll";

export default function StickyMobileCta() {
  const scrolled = useScrolled(400);

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 lg:hidden"
        >
          <button
            onClick={() => scrollToId("register")}
            className="btn-primary w-full !py-4 shadow-[0_12px_30px_-6px_rgba(255,90,77,0.5)]"
          >
            Enroll Now · ₹2,999
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
