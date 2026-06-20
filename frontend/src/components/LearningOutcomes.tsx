import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { LEARNING_OUTCOMES } from "../utils/constants";
import { BrainIcon, CodeIcon, PuzzleIcon, RobotIcon, SensorIcon } from "./icons";
import type { LearningOutcomeItem } from "../types";

const iconMap: Record<LearningOutcomeItem["icon"], (props: { className?: string }) => JSX.Element> = {
  brain: BrainIcon,
  robot: RobotIcon,
  code: CodeIcon,
  sensor: SensorIcon,
  puzzle: PuzzleIcon,
};

const colorMap: Record<LearningOutcomeItem["color"], { bg: string; ring: string; icon: string }> = {
  coral: { bg: "bg-coral-50", ring: "hover:ring-coral-200", icon: "text-coral-500" },
  violet: { bg: "bg-violet-50", ring: "hover:ring-violet-200", icon: "text-violet-600" },
  teal: { bg: "bg-teal-50", ring: "hover:ring-teal-200", icon: "text-teal-600" },
  sun: { bg: "bg-sun-50", ring: "hover:ring-sun-200", icon: "text-sun-600" },
};

export default function LearningOutcomes() {
  return (
    <section
      id="outcomes"
      className="relative overflow-hidden bg-violet-900 py-20 sm:py-24"
    >
      <div className="absolute -left-16 top-10 h-56 w-56 rounded-blob bg-violet-700/40 blur-3xl" />
      <div className="absolute -right-10 bottom-0 h-64 w-64 rounded-blob bg-coral-500/20 blur-3xl" />

      <div className="section-shell relative">
        <SectionHeading
          eyebrow="What your child will learn"
          title="5 skills they'll walk away with"
          description="Designed by educators to build real understanding — through play, not pressure."
          eyebrowColor="sun"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LEARNING_OUTCOMES.map((outcome, idx) => {
            const Icon = iconMap[outcome.icon];
            const colors = colorMap[outcome.color];
            return (
              <motion.div
                key={outcome.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: idx * 0.07 }}
                className={`rounded-2xl bg-white p-6 shadow-soft ring-1 ring-transparent transition-all duration-300 hover:-translate-y-1.5 ${colors.ring} ${
                  idx === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${colors.bg}`}>
                  <Icon className={`h-7 w-7 ${colors.icon}`} />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-ink-900">
                  {outcome.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  {outcome.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
