import express, { type Application, type Request, type Response } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import enquiryRoutes from "./routes/enquiryRoutes";
import { notFoundHandler, errorHandler } from "./middleware/errorHandler";

export function createApp(): Application {
  const app = express();

  const allowedOrigins = (process.env.CLIENT_ORIGIN ?? "http://localhost:5173")
    .split(",")
    .map((origin) => origin.trim());

  app.use(helmet());
  app.use(
    cors({
      origin: (origin, callback) => {
        // Allow requests with no origin (curl, mobile apps, server-to-server)
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          callback(new Error("Not allowed by CORS"));
        }
      },
      methods: ["GET", "POST"],
    })
  );
  app.use(express.json({ limit: "10kb" }));
  app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));

  app.get("/", (_req: Request, res: Response) => {
    res.status(200).json({
      success: true,
      message: "AI & Robotics Summer Workshop API is running 🚀",
    });
  });

  app.get("/api/health", (_req: Request, res: Response) => {
    res.status(200).json({ success: true, status: "ok", timestamp: new Date().toISOString() });
  });

  app.use("/api/enquiry", enquiryRoutes);

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}
