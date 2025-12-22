// config.js
const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 5000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri:
    process.env.MONGODB_URI || "mongodb+srv://Kam_Admin:IJYQra3jG8vjX4sB@kodykam.ul5ycz8.mongodb.net/Portfolio?retryWrites=true&w=majority&appName=KodyKam"
};

export default config;