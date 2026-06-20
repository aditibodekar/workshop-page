import type { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import { enquirySchema } from "../utils/enquiryValidation";

export function validateEnquiry(req: Request, res: Response, next: NextFunction): void {
  try {
    req.body = enquirySchema.parse(req.body);
    next();
  } catch (error) {
    if (error instanceof ZodError) {
      const errors = error.errors.reduce<Record<string, string>>((acc, issue) => {
        const field = issue.path[0]?.toString() ?? "form";
        if (!acc[field]) acc[field] = issue.message;
        return acc;
      }, {});

      res.status(400).json({
        success: false,
        message: "Please fix the errors below and try again.",
        errors,
      });
      return;
    }

    next(error);
  }
}
