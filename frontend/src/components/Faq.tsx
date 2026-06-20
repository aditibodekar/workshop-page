import { useState } from "react";
import SectionHeading from "./SectionHeading";
import FaqAccordionItem from "./FaqAccordionItem";
import { FAQS } from "../utils/constants";

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  function handleToggle(id: string) {
    setOpenId((current) => (current === id ? null : id));
  }

  return (
    <section id="faq" className="bg-violet-50/60 py-20 sm:py-24">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Got questions?"
          title="Frequently asked questions"
          description="Quick answers for parents — tap a question to expand it."
          eyebrowColor="violet"
        />

        <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-4">
          {FAQS.map((item) => (
            <FaqAccordionItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
