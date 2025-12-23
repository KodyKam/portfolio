// client/user/Signup.jsx
import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  CardActions,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { Link } from "react-router-dom";
import { create } from "../user/api-user"; // ✅ relative import from the same folder

export default function Signup() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
  });

  const [open, setOpen] = useState(false);

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const clickSubmit = () => {
    const user = {
      name: values.name.trim() || undefined,
      email: values.email.trim() || undefined,
      password: values.password || undefined,
    };

    create(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, name: "", email: "", password: "", error: "" });
        setOpen(true);
      }
    });
  };

  return (
    <div>
      <Card
        sx={{
          maxWidth: 400,
          margin: "0 auto",
          mt: 3,
          p: 2,
          textAlign: "center",
        }}
      >
        <CardContent>
          <Typography variant="h6">Sign Up</Typography>

          <TextField
            id="name"
            label="Name"
            fullWidth
            value={values.name}
            onChange={handleChange("name")}
            margin="normal"
          />

          <TextField
            id="email"
            label="Email"
            fullWidth
            value={values.email}
            onChange={handleChange("email")}
            margin="normal"
          />

          <TextField
            id="password"
            label="Password"
            type="password"
            fullWidth
            value={values.password}
            onChange={handleChange("password")}
            margin="normal"
          />

          {values.error && (
            <Typography color="error" sx={{ mt: 1 }}>
              {values.error}
            </Typography>
          )}
        </CardContent>

        <CardActions>
          <Button
            color="primary"
            variant="contained"
            onClick={clickSubmit}
            sx={{ margin: "0 auto", mb: 2 }}
          >
            Submit
          </Button>
        </CardActions>
      </Card>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Account</DialogTitle>
        <DialogContent>
          <DialogContentText>
            New account successfully created.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to="/signin">
            <Button
              color="primary"
              autoFocus
              variant="contained"
              onClick={handleClose}
            >
              Sign In
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}