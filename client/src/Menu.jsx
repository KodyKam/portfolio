//client/src/Menu.jsx
import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { Link, useNavigate, useLocation } from "react-router-dom";
import auth from "../lib/auth-helper";

// Utility to determine active link color
const isActive = (location, path) => (
  location.pathname === path ? "#ff4081" : "#ffffff"
);

export default function Menu() {
  const navigate = useNavigate();
  const location = useLocation();
  const isAuth = auth.isAuthenticated();

  const handleSignOut = () => {
    auth.clearJWT(() => navigate("/"));
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          KAM AuthSkel
        </Typography>

        <Link to="/">
          <IconButton aria-label="Home" sx={{ color: isActive(location, "/") }}>
            <HomeIcon />
          </IconButton>
        </Link>

        <Link to="/users">
          <Button sx={{ color: isActive(location, "/users") }}>Users</Button>
        </Link>

        {!isAuth && (
          <>
            <Link to="/signup">
              <Button sx={{ color: isActive(location, "/signup") }}>Sign up</Button>
            </Link>
            <Link to="/signin">
              <Button sx={{ color: isActive(location, "/signin") }}>Sign In</Button>
            </Link>
          </>
        )}

        {isAuth && (
          <>
            <Link to={`/user/${isAuth.user._id}`}>
              <Button sx={{ color: isActive(location, `/user/${isAuth.user._id}`) }}>
                My Profile
              </Button>
            </Link>
            <Button sx={{ color: "#ffffff" }} onClick={handleSignOut}>
              Sign out
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}