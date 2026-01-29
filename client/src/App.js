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
import AdminContacts from './pages/AdminContacts';
import ClientDashboard from "./pages/ClientDashboard";
import WorkspaceDetail from "./pages/WorkspaceDetail";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Public Access Now */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/contacts" element={<AdminContacts />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
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
        <Route path="/resume" element={<Resume />} />
        <Route
  path="/workspace/:workspaceId"
  element={
    <PrivateRoute>
      <WorkspaceDetail />
    </PrivateRoute>
  }
/>
        <Route
  path="/dashboard"
  element={
    <PrivateRoute>
      <ClientDashboard />
    </PrivateRoute>
  }
/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;