// src/pages/ClientDashboard.jsx
import React, { useEffect, useState } from "react";
import { isAuthenticated } from "../auth/auth-helper";
import "./ClientDashboard.css";
import { Link } from "react-router-dom";
import { listByClient } from "../api/workspace";

const ClientDashboard = () => {
  const [workspaces, setWorkspaces] = useState([]);

  const auth = isAuthenticated();
  const user = auth?.user;
  const token = auth?.token;


useEffect(() => {
  if (!user || !token) return;

  listByClient({ userId: user._id }, token)
    .then((data) => {
      if (!data?.error) setWorkspaces(data);
    });
}, [user, token]);

  return (
    <div className="page-container client-dashboard">
      <h1>Client Area</h1>
      <p className="dashboard-subtitle">Your active workspaces</p>

      {!user ? (
        <p>Loading...</p>
      ) : workspaces.length === 0 ? (
        <p className="empty-state">No active workspaces yet.</p>
      ) : (
        <div className="workspace-grid">
          {workspaces.map((ws) => (
            <Link
              key={ws._id}
              to={`/workspace/${ws._id}`}
              className="workspace-card workspace-link"
            >
              <div className="workspace-header">
                <h3>{ws.title}</h3>
                <span className={`status-pill ${ws.status}`}>
                  {ws.status.replace("-", " ")}
                </span>
              </div>

              {ws.description && (
                <p className="workspace-description">{ws.description}</p>
              )}

              {ws.previewUrl && (
                <a
                  href={ws.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn workspace-btn"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Preview
                </a>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ClientDashboard;