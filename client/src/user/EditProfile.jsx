// client/src/user/EditProfile.jsx
import React, { useState, useEffect } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { isAuthenticated } from "../auth/auth-helper";
import { read, update } from "./api-user";
import { Card, CardContent, Typography, TextField, Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

export default function EditProfile() {
  const { userId } = useParams();
  const jwt = isAuthenticated();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    redirectToProfile: false,
  });

useEffect(() => {
  const abortController = new AbortController();
  const signal = abortController.signal;

  read({ userId }, { t: jwt.token }, signal)
    .then((data) => {
      if (data?.error) {
        setValues((prev) => ({ ...prev, error: data.error }));
      } else {
        setValues((prev) => ({
          ...prev,
          name: data.name,
          email: data.email,
        }));
      }
    })
    .catch((err) => {
      if (err.name === "AbortError") {
        // Request was aborted, no need to update state or throw error
        console.log("Fetch aborted");
      } else {
        setValues((prev) => ({ ...prev, error: "Failed to fetch user data" }));
      }
    });

  return () => abortController.abort();
}, [userId, jwt.token]);

  const handleChange = (name) => (event) => {
    setValues((prev) => ({ ...prev, [name]: event.target.value }));
  };

  const clickSubmit = () => {
    const user = {};
    if (values.name) user.name = values.name;
    if (values.email) user.email = values.email;
    if (values.password) user.password = values.password;

    update({ userId }, { t: jwt.token }, user).then((data) => {
      if (data?.error) {
        setValues((prev) => ({ ...prev, error: data.error }));
      } else {
        setValues((prev) => ({ ...prev, redirectToProfile: true }));
      }
    });
  };

  if (!jwt) {
    return <Navigate to="/signin" />;
  }

  if (values.redirectToProfile) {
    return <Navigate to={`/user/${userId}`} />;
  }

  return (
    <Card sx={{ maxWidth: 600, mx: "auto", mt: 4, px: 2 }}>
      <CardContent>
        <Typography variant="h5" sx={{ mb: 2 }}>
          <PersonIcon sx={{ verticalAlign: "middle", mr: 1 }} />
          Edit Profile
        </Typography>

        <TextField
          id="name"
          label="Name"
          value={values.name}
          onChange={handleChange("name")}
          margin="normal"
          fullWidth
        />
        <TextField
          id="email"
          label="Email"
          type="email"
          value={values.email}
          onChange={handleChange("email")}
          margin="normal"
          fullWidth
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          value={values.password}
          onChange={handleChange("password")}
          margin="normal"
          fullWidth
          helperText="Leave blank to keep your current password"
        />

        {values.error && (
          <Typography color="error" sx={{ mt: 1 }}>
            {values.error}
          </Typography>
        )}

        <Button
          variant="contained"
          color="primary"
          onClick={clickSubmit}
          sx={{ mt: 2, mr: 2 }}
          disabled={!values.name || !values.email}
        >
          Submit
        </Button>

        <Button
          variant="outlined"
          color="secondary"
          sx={{ mt: 2 }}
          onClick={() => navigate(`/user/${userId}`)}
        >
          Cancel
        </Button>
      </CardContent>
    </Card>
  );
}