import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import FormField from "./FormField";
import Mascot from "./Mascot";
import { enquirySchema, type EnquirySchema } from "../utils/validation";
import { submitEnquiry } from "../api/enquiryApi";
import { CheckIcon } from "./icons";
import { WORKSHOP_DETAILS } from "../utils/constants";

export default function RegistrationForm() {
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<EnquirySchema>({
    resolver: zodResolver(enquirySchema),
    mode: "onBlur",
  });

  async function onSubmit(values: EnquirySchema) {
    setSubmitError(null);
    try {
      await submitEnquiry(values);
      setIsSuccess(true);
      reset();
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Could not submit. Please try again.");
    }
  }

  return (
    <section id="register" className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-coral-50 via-cream to-teal-50" />

      <div className="section-shell relative grid items-start gap-10 lg:grid-cols-[1.05fr_1fr]">
        {/* Left: pitch */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="lg:pr-6"
        >
          <span className="tag-pill">Limited seats per batch</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-ink-900 sm:text-4xl">
            Reserve your child's spot today
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-600">
            Fill in a few details and our team will reach out with next steps,
            batch timing options, and payment instructions.
          </p>

          <ul className="mt-6 space-y-3">
            {WORKSHOP_DETAILS.map((item) => (
              <li key={item.id} className="flex items-center gap-3 text-ink-700">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-teal-100 text-teal-600">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <span className="font-semibold">{item.label}:</span>
                <span>{item.value}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 hidden w-40 sm:block">
            <Mascot className="h-auto w-full" />
          </div>
        </motion.div>

        {/* Right: form card */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative rounded-3xl bg-white p-6 shadow-soft ring-1 ring-ink-100 sm:p-8"
        >
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center py-8 text-center"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-teal-600">
                  <CheckIcon className="h-9 w-9" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold text-ink-900">
                  You're on the list! 🎉
                </h3>
                <p className="mt-2 max-w-sm text-ink-600">
                  Thanks for registering. Our team will contact you shortly with
                  batch timings and payment details.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="btn-secondary mt-6"
                >
                  Submit another response
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-5"
                noValidate
              >
                <h3 className="font-display text-xl font-bold text-ink-900">
                  Registration Form
                </h3>

                <FormField
                  id="name"
                  label="Full Name"
                  type="text"
                  placeholder="E.g. Aarav Kapoor"
                  autoComplete="name"
                  error={errors.name?.message}
                  {...register("name")}
                />

                <FormField
                  id="email"
                  label="Email Address"
                  type="email"
                  placeholder="parent@example.com"
                  autoComplete="email"
                  error={errors.email?.message}
                  {...register("email")}
                />

                <FormField
                  id="phone"
                  label="Phone Number"
                  type="tel"
                  placeholder="98765 43210"
                  autoComplete="tel"
                  error={errors.phone?.message}
                  {...register("phone")}
                />

                {submitError && (
                  <p role="alert" className="rounded-xl bg-coral-50 px-4 py-3 text-sm font-medium text-coral-600">
                    {submitError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary mt-1 w-full disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="h-5 w-5 animate-spin text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    "Confirm Registration"
                  )}
                </button>

                <p className="text-center text-xs text-ink-400">
                  By submitting, you agree to be contacted about this workshop.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
