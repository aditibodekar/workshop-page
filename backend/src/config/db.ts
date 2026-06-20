import mongoose from "mongoose";

let isConnected = false;

export function isDatabaseConnected(): boolean {
  return isConnected;
}

export async function connectDatabase(): Promise<void> {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.warn(
      "⚠️  MONGODB_URI not set — running WITHOUT a database. " +
        "Enquiries will be logged to the console only and not persisted."
    );
    return;
  }

  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(uri);
    isConnected = true;
    console.log("✅ MongoDB connected successfully");

    mongoose.connection.on("disconnected", () => {
      isConnected = false;
      console.warn("⚠️  MongoDB disconnected");
    });
  } catch (error) {
    isConnected = false;
    console.error("❌ MongoDB connection failed:", (error as Error).message);
    console.warn("Continuing to run WITHOUT a database.");
  }
}
