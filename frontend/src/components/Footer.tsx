import Mascot from "./Mascot";
import { scrollToId } from "../utils/scroll";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-900 pb-10 pt-14 text-ink-100">
      <div className="section-shell grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-9 w-9">
              <Mascot className="h-full w-full" />
            </span>
            <span className="font-display text-lg font-bold text-white">FutureMinds</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-300">
            Fun, beginner-friendly AI & Robotics workshops that turn curious
            kids into confident young creators.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wide text-white">
            Explore
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-ink-300">
            <li>
              <button onClick={() => scrollToId("details")} className="hover:text-coral-300">
                Workshop Details
              </button>
            </li>
            <li>
              <button onClick={() => scrollToId("outcomes")} className="hover:text-coral-300">
                Learning Outcomes
              </button>
            </li>
            <li>
              <button onClick={() => scrollToId("testimonials")} className="hover:text-coral-300">
                Testimonials
              </button>
            </li>
            <li>
              <button onClick={() => scrollToId("faq")} className="hover:text-coral-300">
                FAQs
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wide text-white">
            Contact
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-ink-300">
            <li>hello@futureminds-workshops.com</li>
            <li>+91 98765 43210</li>
            <li>Mon–Sat, 10am–7pm IST</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wide text-white">
            Ready to begin?
          </h4>
          <p className="mt-4 text-sm text-ink-300">
            Seats for the 15 July 2026 batch are filling fast.
          </p>
          <button onClick={() => scrollToId("register")} className="btn-primary mt-4 !px-6 !py-2.5 text-sm">
            Enroll Now
          </button>
        </div>
      </div>

      <div className="section-shell mt-10 border-t border-white/10 pt-6 text-center text-xs text-ink-400">
        © {year} FutureMinds Workshops. All rights reserved.
      </div>
    </footer>
  );
}
