import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  eyebrowColor?: "coral" | "violet" | "teal" | "sun";
}

const eyebrowColorMap: Record<string, string> = {
  coral: "bg-coral-50 text-coral-600 ring-coral-100",
  violet: "bg-violet-50 text-violet-600 ring-violet-100",
  teal: "bg-teal-50 text-teal-700 ring-teal-100",
  sun: "bg-sun-50 text-sun-700 ring-sun-100",
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  eyebrowColor = "violet",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className={`mx-auto max-w-2xl ${align === "center" ? "text-center" : "text-left"}`}
    >
      <span
        className={`inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wide ring-1 ${eyebrowColorMap[eyebrowColor]}`}
      >
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-bold text-ink-900 sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-ink-600">{description}</p>
      )}
    </motion.div>
  );
}
