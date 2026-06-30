import express from "express";
import cors from "cors";
import "dotenv/config";
import chatRoutes from "./routes/chat.route";
import bookRoute from "./routes/book.route";

import { getEnv } from "./lib/env";
import keepAliveCron from "./lib/cron";

const env = getEnv();
const app = express();

app.use(express.json());

const allowedOrigins = [
  "http://localhost:5173",
  "https://start-fitness.vercel.app"
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error("CORS blocked"));
  }
}));

app.use("/api/chat", chatRoutes);
app.use("/api/sessions",bookRoute)


app.get("/health", (_req, res) => {
  res.json({ ok: true });
});


app.listen(env.PORT, () => {
  console.log("Server running on port", env.PORT);

  if (env.NODE_ENV === "production") {
    keepAliveCron.start();
  }
});