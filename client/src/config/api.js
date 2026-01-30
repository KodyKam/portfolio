// client/src/config/api.js
const API_BASE = process.env.REACT_APP_API_URL;

if (!API_BASE) {
  console.error(
    "REACT_APP_API_URL is missing. Frontend was built without backend URL."
  );
}

export default API_BASE;