// client/src/auth/auth-helper.js
export const authenticate = (jwt, next) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('jwt', JSON.stringify(jwt));
    next();
  }
};

export const isAuthenticated = () => {
  if (typeof window === 'undefined') return false;
  const jwt = localStorage.getItem('jwt');
  return jwt ? JSON.parse(jwt) : false;
};

export const signout = (next) => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('jwt');
  }

  next();

  return fetch('/api/auth/signout', { method: 'GET' })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};