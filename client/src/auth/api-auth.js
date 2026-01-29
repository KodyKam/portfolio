// src/auth/api-auth.js
import API_BASE from "../config/api";

const BASE_URL = `${API_BASE}/auth`;

// ------------------------
//  Shared helpers
// ------------------------
const handleResponse = async (res) => {
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Auth API Error: ${res.status} ${res.statusText} — ${text}`);
  }
  const contentType = res.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    const text = await res.text();
    throw new Error(`Expected JSON but got: ${text.substring(0, 100)}`);
  }
  return res.json();
};

const handleError = (err) => {
  console.error("Auth API call failed:", err);
  return { error: err.message || "Network error, please try again." };
};

// ------------------------
//  Auth endpoints
// ------------------------
const signin = async (user) => {
  try {
    const res = await fetch(`${BASE_URL}/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      credentials: "include",
      body: JSON.stringify(user),
    });
    return await handleResponse(res);
  } catch (err) {
    return handleError(err);
  }
};

const signup = async (user) => {
  try {
    const res = await fetch(`${BASE_URL}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(user),
    });
    return await handleResponse(res);
  } catch (err) {
    return handleError(err);
  }
};

const signout = async () => {
  try {
    const res = await fetch(`${BASE_URL}/signout`, {
      method: "GET",
      credentials: "include",
    });
    return await handleResponse(res);
  } catch (err) {
    return handleError(err);
  }
};

// ------------------------
//  Local storage helpers
// ------------------------
const authenticate = (jwt, next = () => {}) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(jwt));
    next();
  }
};

const clearJWT = (cb = () => {}) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
    cb();
  }
};

const isAuthenticated = () => {
  if (typeof window === "undefined") return false;
  const jwt = localStorage.getItem("jwt");
  return jwt ? JSON.parse(jwt) : false;
};

export { signin, signup, signout, authenticate, clearJWT, isAuthenticated };