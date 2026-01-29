const API_BASE =
  process.env.REACT_APP_API_URL ??
  process.env.VITE_BACKEND_URL ??
  "https://portfolio-backend-1-87ql.onrender.com/api";

export default API_BASE;