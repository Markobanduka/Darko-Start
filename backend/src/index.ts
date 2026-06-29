import express from "express";
import cors from "cors"
import "dotenv/config";
import { getEnv } from "./lib/env";
import keepAliveCron from "./lib/cron";

const env= getEnv();
const app = express();

app.use(express.json());
app.use(cors({
  origin: env.FRONTEND_URL,
  credentials: true
}));


app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;

  try {
    const response = await fetch(process.env.GEMINI_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GEMINI_API_KEY}`,
      },
      body: JSON.stringify({
        contents: messages,
      }),
    });

    const data = await response.json();

    const botMessage =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response from model";

    res.json({ text: botMessage });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(env.PORT , () => {
  console.log("Server running on port", env.PORT)

  if(env.NODE_ENV === "production") keepAliveCron.start();
});

