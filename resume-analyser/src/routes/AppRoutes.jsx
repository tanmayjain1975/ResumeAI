import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";

import Dashboard from "../pages/Dashboard/Dashboard";
import Analyzer from "../pages/Dashboard/Analyzer";

import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {

  return (
    <Routes>

      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected Dashboard */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* Protected Analyzer */}
      <Route
        path="/analyzer"
        element={
          <ProtectedRoute>
            <Analyzer />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default AppRoutes;
