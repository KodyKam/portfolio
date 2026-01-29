// src/pages/WorkspaceDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { isAuthenticated } from "../auth/auth-helper";
import API_BASE from "../config/api"; // ✅ use single API base

const WorkspaceDetail = () => {
  const { workspaceId } = useParams();
  const auth = isAuthenticated();
  const token = auth ? auth.token : null;
  const [workspace, setWorkspace] = useState(null);

  useEffect(() => {
    if (!workspaceId || !token) return;

    const fetchWorkspace = async () => {
      try {
        const response = await fetch(`${API_BASE}/workspaces/${workspaceId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json"
          }
        });

        if (!response.ok) {
          const text = await response.text();
          console.error("Workspace fetch error:", text);
          return;
        }

        const data = await response.json();
        if (data) {
          setWorkspace(data);
        }
      } catch (err) {
        console.error("Workspace fetch failed:", err);
      }
    };

    fetchWorkspace();
  }, [workspaceId, token]);

  if (!workspace) {
    return (
      <div className="page-container">
        <p>Loading workspace...</p>
      </div>
    );
  }

  return (
    <div className="page-container">
      <Link to="/dashboard">← Back to Client Area</Link>

      <h1>{workspace.title}</h1>

      <p>
        <strong>Status:</strong> {workspace.status}
      </p>

      {workspace.description && <p>{workspace.description}</p>}

      {workspace.previewUrl && (
        <a
          href={workspace.previewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn workspace-btn"
          onClick={(e) => e.stopPropagation()}
        >
          Open Preview
        </a>
      )}
    </div>
  );
};

export default WorkspaceDetail;