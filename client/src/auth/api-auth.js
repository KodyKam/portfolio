// client/src/auth/api-auth.js
import API_BASE from "../config/api";
// -------------------------------------------------------
// Build the base URL once, then append /auth
// -------------------------------------------------------


const BASE_URL = `${API_BASE}/auth`;

// -------------------------------------------------------
//  Shared helpers
// -------------------------------------------------------
const handleResponse = async (response) => {
  if (!response.ok) {
    // Response isn’t 2xx → grab the body *as text* so we can surface it
    const errorText = await response.text();
    throw new Error(
      `Auth API Error: ${response.status} ${response.statusText} — ${errorText}`
    );
  }

  // Only attempt JSON parsing if server says it’s JSON
  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    const text = await response.text();
    throw new Error(`Expected JSON but received: ${text.substring(0, 100)}…`);
  }

  return response.json();
};

const handleError = (err) => {
  console.error("Auth API call failed:", err);
  return { error: err.message || "Network error, please try again." };
};

// -------------------------------------------------------
//  Auth endpoints
// -------------------------------------------------------
const signin = async (user) => {
  try {
    const response = await fetch(`${BASE_URL}/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",          // send cookies / refresh tokens
      body: JSON.stringify(user),
    });

    return await handleResponse(response);
  } catch (err) {
    return handleError(err);
  }
};

const signup = async (user) => {
  try {
    const response = await fetch(`${BASE_URL}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    return await handleResponse(response);
  } catch (err) {
    return handleError(err);
  }
};

const signout = async () => {
  try {
    const response = await fetch(`${BASE_URL}/signout`, {
      method: "GET",
      credentials: "include",
    });

    return await handleResponse(response);
  } catch (err) {
    return handleError(err);
  }
};

// -------------------------------------------------------
//  Local-storage helpers
// -------------------------------------------------------
const authenticate = (jwt, next = () => {}) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(jwt));
    if (typeof next === "function") next();
  }
};

const clearJWT = (cb = () => {}) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
    if (typeof cb === "function") cb();
  }
};

const isAuthenticated = () => {
  if (typeof window === "undefined") return false;
  const jwt = localStorage.getItem("jwt");
  return jwt ? JSON.parse(jwt) : false;
};

export { signin, signup, signout, authenticate, isAuthenticated, clearJWT };