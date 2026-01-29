// src/pages/WorkspaceDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { isAuthenticated } from "../auth/auth-helper";

const WorkspaceDetail = () => {
  const { workspaceId } = useParams();
  const { token } = isAuthenticated();
  const [workspace, setWorkspace] = useState(null);

  useEffect(() => {
    const BASE_URL =
  process.env.REACT_APP_API_URL || "http://localhost:5000/api";

fetch(`${BASE_URL}/workspaces/${workspaceId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setWorkspace(data);
        }
      });
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