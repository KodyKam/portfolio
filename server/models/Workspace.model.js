// server/models/Workspace.model.js
import mongoose from 'mongoose';

const workspaceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    status: { type: String, enum: ['active', 'pending', 'completed'], default: 'pending' },
    client: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    projects: [
      {
        title: String,
        description: String,
        previewUrl: String, // live URL for previews/mockups
        githubUrl: String, // optional link to repo
        created: { type: Date, default: Date.now },
        status: { type: String, enum: ['draft', 'review', 'published'], default: 'draft' },
      }
    ],
  },
  { timestamps: true }
);

export default mongoose.model('Workspace', workspaceSchema);