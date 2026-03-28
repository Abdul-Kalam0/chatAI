import express from "express";

const router = express.Router();
import { geminiChat } from "../controllers.js/chatController.js";

router.post("/chat", geminiChat);

export default router;
