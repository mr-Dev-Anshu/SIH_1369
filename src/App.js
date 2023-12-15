import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Home from "./components/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Welcome from "./auth/Welcome";
import UploadCard from "./Pages/UploadCard";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/upload" element={<UploadCard/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
