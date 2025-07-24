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
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import PersonIcon from "@mui/icons-material/Person";
import { useLocation, Navigate, Link, useParams } from "react-router-dom";

import DeleteUser from "./DeleteUser";
import { isAuthenticated } from "../auth/auth-helper.js";
import { read } from "./api-user.js";

export default function Profile() {
  const location = useLocation();
  const { userId } = useParams();

  // ✅ All hooks at the top
  const authUser = isAuthenticated();
  const [user, setUser] = useState({});
  const [redirectToSignin, setRedirectToSignin] = useState(false);

useEffect(() => {
  const abortController = new AbortController();
  const signal = abortController.signal;
  let isActive = true;

  if (authUser) {
    read({ userId }, { t: authUser.token }, signal)
      .then((data) => {
        if (isActive) {
          if (data && data.error) {
            setRedirectToSignin(true);
          } else {
            setUser(data);
          }
        }
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          // Fetch aborted: no action needed
          console.log("Fetch aborted");
        } else {
          // Handle other errors
          console.error(err);
        }
      });
  } else {
    setRedirectToSignin(true);
  }

  return () => {
    isActive = false;
    abortController.abort();
  };
}, [userId, authUser]);

  // ✅ Now conditionally render after hooks are declared
  if (redirectToSignin) {
    return <Navigate to="/signin" state={{ from: location.pathname }} replace />;
  }

  return (
    <Paper elevation={4} sx={{ maxWidth: 600, mx: "auto", mt: 5, p: 3 }}>
      <Typography variant="h6" sx={{ mt: 3, mb: 2, color: "text.primary" }}>
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
    </Paper>
  );
}