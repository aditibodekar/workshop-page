import { Schema, model, type Document } from "mongoose";

export interface IEnquiry extends Document {
  name: string;
  email: string;
  phone: string;
  workshop: string;
  createdAt: Date;
}

const enquirySchema = new Schema<IEnquiry>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: 2,
      maxlength: 80,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please provide a valid email address"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
      minlength: 10,
      maxlength: 15,
    },
    workshop: {
      type: String,
      default: "AI & Robotics Summer Workshop",
      trim: true,
    },
  },
  { timestamps: true }
);

enquirySchema.index({ email: 1, createdAt: -1 });

export const Enquiry = model<IEnquiry>("Enquiry", enquirySchema);
