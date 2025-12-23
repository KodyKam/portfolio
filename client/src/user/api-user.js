// client/src/user/api-user.js

const BASE_URL =
  process.env.REACT_APP_API_URL || process.env.VITE_BACKEND_URL || "http://localhost:5000/api";
  // const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000/api";

const handleResponse = async (response) => {
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`API Error: ${response.status} ${response.statusText} — ${errorText}`);
  }
  try {
    return await response.json();
  } catch (err) {
    console.error("Failed to parse JSON:", err);
    throw err;
  }
};

const handleError = (err) => {
  console.error("API call failed:", err);
  throw err;
};

const create = async (user) => {
  try {
    const response = await fetch(`${BASE_URL}/users/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (err) {
    console.error("Signup failed:", err);
    return { error: "Signup failed. Please try again." };
  }
};

const list = async (signal) => {
  try {
    const response = await fetch(BASE_URL, {
      method: "GET",
      signal,
    });
    return await handleResponse(response);
  } catch (err) {
    return handleError(err);
  }
};

const read = async ({ userId }, { t }, signal) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${userId}`, {
      method: "GET",
      signal,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${t}`,
      },
    });
    return await handleResponse(response);
  } catch (err) {
    return handleError(err);
  }
};

const update = async ({ userId }, { t }, user) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${userId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${t}`,
      },
      body: JSON.stringify(user),
    });
    return await handleResponse(response);
  } catch (err) {
    return handleError(err);
  }
};

const remove = async ({ userId }, { t }) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${userId}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${t}`,
      },
    });
    return await handleResponse(response);
  } catch (err) {
    return handleError(err);
  }
};

export { create, list, read, update, remove };