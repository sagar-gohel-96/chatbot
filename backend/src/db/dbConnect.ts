import dotenv from "dotenv";
import mongoose, { ConnectOptions } from "mongoose";
dotenv.config();
const MONGODB_URI = process.env.DB_URI;

export interface Global {
  mongoose: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
}
if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env"
  );
}
let cached = (global as unknown as Global).mongoose;

if (!cached) {
  cached = (global as unknown as Global).mongoose = {
    conn: null,
    promise: null,
  };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    const opts: ConnectOptions = {};

    cached.promise = mongoose
      .connect(MONGODB_URI as string, opts)
      .then((mongoose) => {
        console.log("DB connected");
        return mongoose;
      });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
