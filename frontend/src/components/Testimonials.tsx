import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { TESTIMONIALS } from "../utils/constants";
import { StarIcon } from "./icons";
import type { TestimonialItem } from "../types";

const avatarColorMap: Record<TestimonialItem["avatarColor"], string> = {
  coral: "bg-coral-500",
  violet: "bg-violet-500",
  teal: "bg-teal-500",
  sun: "bg-sun-500",
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-shell py-20 sm:py-24">
      <SectionHeading
        eyebrow="Loved by parents"
        title="What families are saying"
        eyebrowColor="coral"
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {TESTIMONIALS.map((t, idx) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: idx * 0.1 }}
            className="flex flex-col rounded-2xl bg-white p-6 shadow-card ring-1 ring-ink-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft"
          >
            <div className="flex gap-1 text-sun-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon
                  key={i}
                  className={`h-4 w-4 ${i < t.rating ? "text-sun-400" : "text-ink-200"}`}
                />
              ))}
            </div>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-600">
              “{t.quote}”
            </p>
            <div className="mt-5 flex items-center gap-3">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-full font-display text-sm font-bold text-white ${avatarColorMap[t.avatarColor]}`}
              >
                {t.initials}
              </div>
              <div>
                <p className="font-display text-sm font-bold text-ink-900">{t.name}</p>
                <p className="text-xs text-ink-400">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
