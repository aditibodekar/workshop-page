import { Router } from "express";
import { createEnquiry, listEnquiries } from "../controllers/enquiryController";
import { validateEnquiry } from "../middleware/validateEnquiry";
import { enquiryRateLimiter } from "../middleware/rateLimiter";

const router = Router();

// POST /api/enquiry — submit a new workshop registration
router.post("/", enquiryRateLimiter, validateEnquiry, createEnquiry);

// GET /api/enquiry — list submitted enquiries (basic admin/debug use)
router.get("/", listEnquiries);

export default router;
