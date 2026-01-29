// server/controllers/workspace.controller.js
import Workspace from "../models/Workspace.model.js";

// ----------------- PARAM -----------------
export const workspaceByID = async (req, res, next, id) => {
  try {
    const workspace = await Workspace.findById(id)
      .populate("owner", "_id name email");

    if (!workspace)
      return res.status(404).json({ error: "Workspace not found." });

    req.workspace = workspace;
    next();
  } catch (err) {
    res.status(400).json({ error: "Could not fetch workspace." });
  }
};

// ----------------- CREATE -----------------
export const create = async (req, res) => {
  try {
    const workspace = new Workspace(req.body);
    const saved = await workspace.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: "Could not create workspace." });
  }
};

// ----------------- LIST (Client Dashboard) -----------------
export const listByClient = async (req, res) => {
  try {
    const workspaces = await Workspace.find({
      owner: req.profile._id
    }).sort({ created: -1 });

    res.json(workspaces);
  } catch (err) {
    res.status(400).json({ error: "Could not fetch workspaces." });
  }
};

// ----------------- READ -----------------
export const read = (req, res) => {
  res.json(req.workspace);
};

export const addProject = async (req, res) => {
  try {
    const { workspaceId } = req.params;
    const { title, description, previewUrl, githubUrl } = req.body;

    const workspace = await Workspace.findById(workspaceId);
    if (!workspace) return res.status(404).json({ error: 'Workspace not found' });

    workspace.projects.push({ title, description, previewUrl, githubUrl });
    await workspace.save();

    res.json(workspace);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}