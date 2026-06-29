import { Request, Response, NextFunction } from "express";

export const validateMessages = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({
      error: "Messages are required and must be an array",
    });
  }

  next();
};