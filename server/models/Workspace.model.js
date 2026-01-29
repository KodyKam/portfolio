// server/models/Workspace.model.js
import mongoose from "mongoose";

const workspaceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ["active", "completed", "archived"],
    default: "active"
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  updated: Date
});

export default mongoose.model("Workspace", workspaceSchema);