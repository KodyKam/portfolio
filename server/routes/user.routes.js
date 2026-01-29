// server/routes/user.routes.js
import express from "express";
import { requireSignin } from "../controllers/auth.controller.js";
import * as userCtrl from "../controllers/user.controller.js";

const router = express.Router();

/* ---------- Public Routes ---------- */

// Create user
router.post("/", userCtrl.createUser);

// Get all users
router.get("/", userCtrl.getAllUsers);

/* ---------- User Profile (USED BY FRONTEND) ---------- */

// Read user profile
router.get(
  "/:userId",
  requireSignin,
  userCtrl.hasAuthorization,
  userCtrl.read
);

// Update user
router.put(
  "/:userId",
  requireSignin,
  userCtrl.hasAuthorization,
  userCtrl.updateUser
);

// Delete user
router.delete(
  "/:userId",
  requireSignin,
  userCtrl.hasAuthorization,
  userCtrl.deleteUser
);

// Param middleware
router.param("userId", userCtrl.userByID);

export default router;