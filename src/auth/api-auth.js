// client/src/auth/api-auth.js

// const BASE_URL = "https://portfolio-backend-1-87ql.onrender.com/api/auth";
// const BASE_URL = "http://localhost:5000/api/auth";
const BASE_URL = process.env.REACT_APP_API_URL + "/api/auth";

const signin = async (user) => {
  try {
    const response = await fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(user), // <-- this is the correct line
    });
    return await response.json();
  } catch (err) {
    console.error('Network error during sign-in:', err);
    throw err;
  }
};

const signout = async () => {
  try {
    const response = await fetch(`${BASE_URL}/signout`, {
      method: 'GET',
      credentials: 'include',
    });

    return await response.json();
  } catch (err) {
    console.error("Signout error:", err);
    return { error: "Network error during sign-out" };
  }
};

// Store JWT in localStorage
const authenticate = (jwt, next) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('jwt', JSON.stringify(jwt));
    next();
  }
};

// Remove JWT from localStorage
const clearJWT = (cb) => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('jwt');
    cb();
  }
};

const isAuthenticated = () => {
  if (typeof window === 'undefined') return false;

  const jwt = localStorage.getItem('jwt');
  return jwt ? JSON.parse(jwt) : false;
};

export { signin, signout, authenticate, isAuthenticated, clearJWT };