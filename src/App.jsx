import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Screen Components
import Home from "./Screens/Home/Home";
import Sub from "./Screens/Sub/Sub";

import Admin from "./Screens/Admin/Admin";
import Create from "./Screens/Admin/components/Create";
import Edit from "./Screens/Admin/components/Edit";

import Login from "./Screens/Admin/components/auth/Login";
import Sign from "./Screens/Admin/components/auth/Sign";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MN-Property" element={<Home />} />
          <Route path="/properti" element={<Sub />} />
          <Route path="/properties" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="properties/create" element={<Create />} />
          <Route path="properties/:id/edit" element={<Edit />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
