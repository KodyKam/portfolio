// client/src/config/api.js
const API_BASE = process.env.REACT_APP_API_URL;

if (!API_BASE) {
  console.error(
    "REACT_APP_API_URL is missing. Frontend cannot reach backend."
  );
}

console.log("API_BASE:", API_BASE);

export default API_BASE;