import express from "express";
import { chatController } from "../controllers/chat.controller";
import { validateMessages } from "../middleware/validateMessages";

const router = express.Router();


router.post("/", validateMessages, chatController);

export default router;