import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import {
  IconButton,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { isAuthenticated, signout } from "../auth/auth-helper.js";
import { remove } from "./api-user.js";

export default function DeleteUser() {
  const { userId } = useParams(); // ✅ get userId from URL
  const [open, setOpen] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const jwt = isAuthenticated();

  const handleClickOpen = () => {
    setOpen(true);
    setError("");
  };

  const handleClose = () => {
    if (!loading) setOpen(false);
  };

  const handleDelete = () => {
    setLoading(true);
    remove({ userId }, { t: jwt.token })
      .then((data) => {
        if (data?.error) {
          setError(data.error);
          setLoading(false);
        } else {
          signout(() => console.log("Account deleted"));
          setRedirect(true);
        }
      })
      .catch(() => {
        setError("Failed to delete account. Please try again.");
        setLoading(false);
      });
  };

  if (redirect) return <Navigate to="/" />;

  return (
    <>
      <IconButton
        aria-label="Delete account"
        onClick={handleClickOpen}
        color="error"
      >
        <DeleteIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Delete Account</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete your account? This action is
            irreversible.
          </DialogContentText>
          {error && (
            <Typography color="error" sx={{ mt: 2 }}>
              {error}
            </Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" disabled={loading}>
            Cancel
          </Button>
          <Button
            onClick={handleDelete}
            color="error"
            variant="contained"
            autoFocus
            disabled={loading}
          >
            {loading ? "Deleting..." : "Confirm"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}