// src/api/workspace.js
const BASE_URL = 
    process.env.REACT_APP_API_URL;

export const listByClient = async ({ userId }, token, signal) => {
  try {
    const response = await fetch(
      `${BASE_URL}/workspaces/by-client/${userId}`,
      {
        method: "GET",
        signal,
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`
        }
      }
    );

    return await response.json();
  } catch (err) {
    console.error("Workspace fetch failed:", err);
    return { error: "Could not load workspaces" };
  }
};