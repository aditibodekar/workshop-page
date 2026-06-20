import type { Request, Response } from "express";
import { Enquiry } from "../models/Enquiry";
import { isDatabaseConnected } from "../config/db";
import { saveInMemory, getInMemoryEnquiries } from "../utils/inMemoryStore";
import type { EnquiryInput } from "../utils/enquiryValidation";

export async function createEnquiry(req: Request, res: Response): Promise<void> {
  const data = req.body as EnquiryInput;

  try {
    if (isDatabaseConnected()) {
      const enquiry = await Enquiry.create(data);
      res.status(201).json({
        success: true,
        message: "Thanks! Your registration has been received. We'll be in touch shortly.",
        data: {
          id: enquiry._id,
          name: enquiry.name,
          email: enquiry.email,
          phone: enquiry.phone,
        },
      });
      return;
    }

    // Graceful fallback: no database configured, store in memory + log
    const record = saveInMemory(data);
    console.log("📩 New enquiry (in-memory, no DB configured):", record);

    res.status(201).json({
      success: true,
      message: "Thanks! Your registration has been received. We'll be in touch shortly.",
      data: {
        id: record.id,
        name: record.name,
        email: record.email,
        phone: record.phone,
      },
    });
  } catch (error) {
    console.error("Failed to save enquiry:", error);
    res.status(500).json({
      success: false,
      message: "We couldn't save your registration right now. Please try again.",
    });
  }
}

export async function listEnquiries(_req: Request, res: Response): Promise<void> {
  try {
    if (isDatabaseConnected()) {
      const enquiries = await Enquiry.find().sort({ createdAt: -1 }).limit(200);
      res.status(200).json({ success: true, count: enquiries.length, data: enquiries });
      return;
    }

    const enquiries = getInMemoryEnquiries();
    res.status(200).json({ success: true, count: enquiries.length, data: enquiries });
  } catch (error) {
    console.error("Failed to fetch enquiries:", error);
    res.status(500).json({ success: false, message: "Could not fetch enquiries." });
  }
}
