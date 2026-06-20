import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { WORKSHOP_DETAILS } from "../utils/constants";
import {
  AgeIcon,
  CalendarIcon,
  DurationIcon,
  FeeIcon,
  ModeIcon,
} from "./icons";
import type { WorkshopDetailItem } from "../types";

const iconMap: Record<WorkshopDetailItem["icon"], (props: { className?: string }) => JSX.Element> = {
  age: AgeIcon,
  duration: DurationIcon,
  mode: ModeIcon,
  fee: FeeIcon,
  calendar: CalendarIcon,
};

const colorMap: Record<WorkshopDetailItem["icon"], string> = {
  age: "bg-coral-50 text-coral-500",
  duration: "bg-violet-50 text-violet-600",
  mode: "bg-teal-50 text-teal-600",
  fee: "bg-sun-50 text-sun-600",
  calendar: "bg-coral-50 text-coral-500",
};

export default function WorkshopDetails() {
  return (
    <section id="details" className="section-shell py-20 sm:py-24">
      <SectionHeading
        eyebrow="Workshop at a glance"
        title="Everything you need to know"
        description="Simple, transparent details so parents can plan ahead — no hidden surprises."
        eyebrowColor="teal"
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {WORKSHOP_DETAILS.map((item, idx) => {
          const Icon = iconMap[item.icon];
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="group rounded-2xl bg-white p-6 text-center shadow-card ring-1 ring-ink-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft"
            >
              <div
                className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl ${colorMap[item.icon]} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
              >
                <Icon className="h-7 w-7" />
              </div>
              <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-ink-400">
                {item.label}
              </p>
              <p className="mt-1 font-display text-xl font-bold text-ink-900">
                {item.value}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
