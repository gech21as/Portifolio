import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contact.js";

dotenv.config();

const app = express();

/**
 * ✅ Production + local allowed origins
 */
const allowedOrigins = (
  process.env.ALLOWED_ORIGINS ||
  "http://localhost:5173,http://localhost:3000,https://portifolio-one-khaki-80.vercel.app"
)
  .split(",")
  .map((origin) => origin.trim());

app.use(
  cors({
    origin: (origin, callback) => {
      // allow tools like Postman or server-to-server calls
      if (!origin) return callback(null, true);

      // check if it's in allowedOrigins list or is a Vercel app
      if (allowedOrigins.includes(origin) || origin.endsWith(".vercel.app") || origin.startsWith("https://portifolio-")) {
        return callback(null, true);
      }

      console.log("❌ Blocked by CORS:", origin);
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

/**
 * Middleware
 */
app.use(express.json());

/**
 * Routes
 */
app.use("/api/contact", contactRoutes);

/**
 * Health check route
 */
app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Backend API is running",
  });
});

/**
 * Render dynamic port
 */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});