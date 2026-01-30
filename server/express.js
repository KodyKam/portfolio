// server/express.js
import express from "express";
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";

// Controllers
import { requireSignin } from './controllers/auth.controller.js';

// Route imports
import userRoutes from "./routes/user.routes.js";
import contactRoutes from './routes/contact.routes.js';
import projectRoutes from "./routes/project.routes.js";
import educationRoutes from "./routes/education.routes.js";
import authRoutes from "./routes/auth.routes.js";
import workspaceRoutes from "./routes/workspace.routes.js";

const app = express();

// ------------------------
// CORS setup
// ------------------------

const allowedOrigins = ["http://localhost:3000", "https://kodykam.netlify.app"];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) callback(null, true);
    else callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
}));

// ------------------------
// Body parsing & security
// ------------------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compress());
app.use(helmet());

// ------------------------
// Test protected route
// ------------------------
app.get("/api/secret", requireSignin, (req, res) => {
  res.json({ message: "Protected route accessed", user: req.auth });
});

// ------------------------
// API routes
// ------------------------
app.use("/api/users", userRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/qualifications", educationRoutes);
app.use("/api/auth", authRoutes);          // ✅ Mount auth routes
app.use("/api/workspaces", workspaceRoutes);

console.log("Auth routes loaded:", authRoutes);

// ------------------------
// Default route
// ------------------------
app.get("/", (req, res) => {
  res.json({ message: "Welcome to My Portfolio application." });
});

// temporary test post route
app.post("/api/test", (req, res) => res.json({ ok: true }));

// ------------------------
// Error handling
// ------------------------
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    return res.status(401).json({ error: err.name + ": " + err.message });
  } else if (err) {
    console.error(err);
    return res.status(400).json({ error: err.name + ": " + err.message });
  }
});

app._router.stack.forEach((layer) => {
  if (layer.route) {
    console.log(
      Object.keys(layer.route.methods).join(",").toUpperCase(),
      layer.route.path
    );
  }
});

export default app;