import express from "express";
import cors from "cors"
import "dotenv/config";
import { getEnv } from "./lib/env";
import keepAliveCron from "./lib/cron";

const env= getEnv();
const app = express();

app.use(express.json());
app.use(cors())


app.get("/health", (_req, res) => {
  res.json({ ok: true });
});


app.listen(env.PORT , () => {
  console.log("Server running on port", env.PORT)

  if(env.NODE_ENV === "production") keepAliveCron.start();
});

