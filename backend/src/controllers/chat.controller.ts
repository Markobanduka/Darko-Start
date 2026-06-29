import { Request, Response } from "express";

export const chatController = async (req: Request, res: Response) => {
  const { messages } = req.body;

  try {
    console.log("📩 Incoming messages:", JSON.stringify(messages, null, 2));

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

    console.log("===== GEMINI RESPONSE =====");
    console.log(JSON.stringify(data, null, 2));
    console.log("===========================");

    const botMessage =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      data.error?.message ||
      data.promptFeedback?.blockReason ||
      "No response from model";

    return res.json({ text: botMessage });
  } catch (err) {
    console.error("❌ CHAT CONTROLLER ERROR:", err);
    return res.status(500).json({ error: "Server error" });
  }
};