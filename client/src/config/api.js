// client/src/config/api.js
const API_BASE = process.env.REACT_APP_API_URL;

if (!API_BASE) {
  console.error(
    "API_BASE is not set! Make sure REACT_APP_API_URL is defined at build time."
  );
}

export default API_BASE;