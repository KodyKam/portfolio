// server/routes/workspace.routes.js
import express from "express";
import * as authCtrl from "../controllers/auth.controller.js";
import * as userCtrl from "../controllers/user.controller.js";
import * as workspaceCtrl from "../controllers/workspace.controller.js";

const router = express.Router();

// Client: list their own workspaces
router.get(
  "/by-client/:userId",
  authCtrl.requireSignin,
  userCtrl.hasAuthorization,
  workspaceCtrl.listByClient
);

// Admin: create workspace
router.post(
  "/",
  authCtrl.requireSignin,
  workspaceCtrl.create
);

// Read single workspace
router.get(
  "/:workspaceId",
  authCtrl.requireSignin,
  workspaceCtrl.read
);

// Params
router.param("userId", userCtrl.userByID);
router.param("workspaceId", workspaceCtrl.workspaceByID);

export default router;