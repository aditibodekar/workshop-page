import { z } from "zod";

export const enquirySchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(2, "Name must be at least 2 characters long")
    .max(80, "Name must be under 80 characters")
    .regex(/^[a-zA-Z\s.'-]+$/, "Name should only contain letters"),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .min(1, "Email is required")
    .email("Please provide a valid email address"),
  phone: z
    .string({ required_error: "Phone number is required" })
    .trim()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number is too long")
    .regex(/^[0-9+\s-]+$/, "Phone number should contain only digits")
    .refine((val) => val.replace(/[^0-9]/g, "").length >= 10, {
      message: "Phone number must have at least 10 digits",
    }),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;
