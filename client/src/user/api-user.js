// src/user/api-user.js
import API_BASE from "../config/api";

const BASE_URL = `${API_BASE}/users`;

// ------------------------
//  Helpers
// ------------------------
const handleResponse = async (res) => {
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`API Error: ${res.status} ${res.statusText} — ${text}`);
  }
  return res.json();
};

const handleError = (err) => {
  console.error("API call failed:", err);
  return { error: err.message || "Network or server error" };
};

// ------------------------
//  User CRUD
// ------------------------
const create = async (user) => {
  try {
    const res = await fetch(`${BASE_URL}/`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(user),
    });
    return await handleResponse(res);
  } catch (err) {
    return handleError(err);
  }
};

const list = async (signal) => {
  try {
    const res = await fetch(BASE_URL, { method: "GET", signal });
    return await handleResponse(res);
  } catch (err) {
    return handleError(err);
  }
};

const read = async ({ userId }, token, signal) => {
  try {
    const res = await fetch(`${BASE_URL}/${userId}`, {
      method: "GET",
      signal,
      headers: { Accept: "application/json", Authorization: `Bearer ${token}` },
    });
    return await handleResponse(res);
  } catch (err) {
    return handleError(err);
  }
};

const update = async ({ userId }, { t }, user) => {
  try {
    const res = await fetch(`${BASE_URL}/${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", Accept: "application/json", Authorization: `Bearer ${t}` },
      body: JSON.stringify(user),
    });
    return await handleResponse(res);
  } catch (err) {
    return handleError(err);
  }
};

const remove = async ({ userId }, { t }) => {
  try {
    const res = await fetch(`${BASE_URL}/${userId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json", Accept: "application/json", Authorization: `Bearer ${t}` },
    });
    return await handleResponse(res);
  } catch (err) {
    return handleError(err);
  }
};

export { create, list, read, update, remove };