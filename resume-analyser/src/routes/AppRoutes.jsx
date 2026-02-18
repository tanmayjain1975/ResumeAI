import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import Dashboard from "../pages/Dashboard/Dashboard";
import Analyzer from "../pages/Dashboard/Analyzer";



function AppRoutes() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<Signup />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/analyzer" element={<Analyzer />} />

    </Routes>
  );
}

export default AppRoutes;
