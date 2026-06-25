import express from "express";
import cors from "cors"
import "dotenv/config";
import { getEnv } from "./lib/env";

const env= getEnv();
const app = express();

app.use(express.json());
app.use(cors())


app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/api/chat", async (req, res) => {

});

app.listen(env.PORT , () => console.log("Server running on port", env.PORT));

//1:33:21