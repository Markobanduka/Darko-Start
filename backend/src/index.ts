import express from "express";
import cors from "cors";
import "dotenv/config";
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

// Health check
app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

// CHAT endpoint
app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;

  if (!messages) {
    return res.status(400).json({ error: "Messages are required" });
  }

  try {
    console.log("Incoming messages:", JSON.stringify(messages, null, 2));

    const response = await fetch(
      `${process.env.GEMINI_URL}?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: messages,
        }),
      }
    );

    const data = await response.json();

    // 🔥 DEBUG LOG - OVO JE KLJUČNO
    console.log("===== GEMINI RAW RESPONSE =====");
    console.log(JSON.stringify(data, null, 2));
    console.log("================================");

    const botMessage =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      data.error?.message ||
      data.promptFeedback?.blockReason ||
      "No response from model";

    res.json({ text: botMessage });
  } catch (err) {
    console.error("SERVER ERROR:", err);
    res.status(500).json({ error: "Server error" });
  }
});

// Start server
app.listen(env.PORT, () => {
  console.log("Server running on port", env.PORT);

  if (env.NODE_ENV === "production") {
    keepAliveCron.start();
  }
});