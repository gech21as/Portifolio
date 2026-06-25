import express from "express";
import { sendContactMessage } from "../controllers/contactController.js";

const router = express.Router();

/**
 * ✅ Route: POST /api/contact
 * This will handle contact form submissions
 */
router.post("/", sendContactMessage);

export default router;