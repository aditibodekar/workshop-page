import { z } from "zod";

export const enquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter at least 2 characters.")
    .max(80, "Name looks too long. Please shorten it.")
    .regex(/^[a-zA-Z\s.'-]+$/, "Name should only contain letters."),
  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .min(10, "Phone number must be at least 10 digits.")
    .max(15, "Phone number looks too long.")
    .regex(/^[0-9+\s-]+$/, "Phone number should contain only digits.")
    .refine((val) => val.replace(/[^0-9]/g, "").length >= 10, {
      message: "Phone number must have at least 10 digits.",
    }),
});

export type EnquirySchema = z.infer<typeof enquirySchema>;
