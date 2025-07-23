// client/src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Signin from './auth/Signin';
import Signup from './auth/Signup';
import Profile from './user/Profile';
import EditProfile from './user/EditProfile';
import Users from './user/Users';
import DeleteUser from './user/DeleteUser';
import PrivateRoute from './auth/PrivateRoute';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Resume from './pages/Resume';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/projects"
          element={<PrivateRoute><Projects /></PrivateRoute>}
        />
        <Route
          path="/services"
          element={<PrivateRoute><Services /></PrivateRoute>}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/users" element={<Users />} />
        <Route
          path="/user/edit/:userId"
          element={<PrivateRoute><EditProfile /></PrivateRoute>}
        />
        <Route
          path="/user/:userId"
          element={<PrivateRoute><Profile /></PrivateRoute>}
        />
        <Route
          path="/user/delete/:userId"
          element={<PrivateRoute><DeleteUser /></PrivateRoute>}
        />
        <Route
          path="/resume"
          element={<PrivateRoute><Resume /></PrivateRoute>}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;