// client/src/config/api.js

// Use the environment variable if defined, otherwise fallback
const API_BASE =
  process.env.REACT_APP_API_URL ||          // React env prefix
  process.env.VITE_BACKEND_URL ||           // Vite env prefix
  "https://portfolio-backend-1-87ql.onrender.com/api"; // fallback for production

  console.log("API_BASE is:", API_BASE);
  
export default API_BASE;