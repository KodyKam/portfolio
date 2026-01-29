//client/src/user/Profile.jsx
import React, { useState, useEffect } from "react";
import {
  Paper,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Avatar,
  IconButton,
  Typography,
  Divider,
  Button, // ✅ NEW
  Box,    // ✅ NEW
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import PersonIcon from "@mui/icons-material/Person";
import DashboardIcon from "@mui/icons-material/Dashboard"; // ✅ NEW
import { useLocation, Navigate, Link, useParams } from "react-router-dom";

import DeleteUser from "./DeleteUser";
import { isAuthenticated } from "../auth/auth-helper.js";
import { read } from "./api-user.js";

console.log(isAuthenticated()); // verifying that isAuthenticated helper works

export default function Profile() {
  const location = useLocation();
  const { userId } = useParams();

  const authUser = isAuthenticated();
  const [user, setUser] = useState({});
  const [redirectToSignin, setRedirectToSignin] = useState(false);

  useEffect(() => {
  const abortController = new AbortController();
  const signal = abortController.signal;
  let isActive = true;

  // Only run if authUser exists and has a token
  if (authUser && authUser.token) {
    read({ userId }, authUser.token, signal)
      .then(function(data) {
        if (isActive) {
          if (data && data.error) {
            setRedirectToSignin(true);
          } else {
            setUser(data);
          }
        }
      })
      .catch(function(err) {
        if (err.name !== "AbortError") {
          console.error("Profile fetch failed:", err);
        }
      });
  } else {
    setRedirectToSignin(true);
  }

  return function cleanup() {
    isActive = false;
    abortController.abort();
  };
}, [userId, authUser]);

  console.log("authUser:", authUser);
  console.log("fetched user:", user);

  if (redirectToSignin) {
    return <Navigate to="/signin" state={{ from: location.pathname }} replace />;
  }

  return (
    <Paper elevation={4} sx={{ maxWidth: 600, mx: "auto", mt: 5, p: 3 }}>
      <Typography variant="h6" sx={{ mt: 1, mb: 2 }}>
        Profile
      </Typography>

      <List dense>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <PersonIcon />
            </Avatar>
          </ListItemAvatar>

          <ListItemText primary={user.name} secondary={user.email} />

          {authUser?.user && authUser.user._id === user._id && (
            <ListItemSecondaryAction>
              <Link to={`/user/edit/${user._id}`}>
                <IconButton aria-label="Edit" color="primary">
                  <EditIcon />
                </IconButton>
              </Link>
              <DeleteUser userId={user._id} />
            </ListItemSecondaryAction>
          )}
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary={
              user.created
                ? `Joined: ${new Date(user.created).toDateString()}`
                : "Loading..."
            }
          />
        </ListItem>
      </List>

      {/* ✅ NEW: Workspace / Dashboard CTA */}
      {authUser?.user && authUser.user._id === user._id && (
        <Box sx={{ mt: 3, textAlign: "center" }}>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              startIcon={<DashboardIcon />}
            >
              Go to My Workspaces
            </Button>
          </Link>
        </Box>
      )}
    </Paper>
  );
}