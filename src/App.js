import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Home from "./components/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Welcome from "./auth/Welcome";
import UploadCard from "./Pages/UploadCard";
import Dashboard from "./Pages/Dashboard";
import { userContext } from "./AppContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config";
import { loadingContext } from "./AppContext";
import AllProjectList from "./Pages/AllProjectList";

function App() {

  const [user,setUser] = useState(null);
  const [loading,setLoading] = useState(false);

  onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser);
  })

  return (   
    <loadingContext.Provider value={{loading,setLoading}}>
  < userContext.Provider value={{user,setUser}}> 
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/upload" element={<UploadCard/>} />
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/project-list" element={<AllProjectList/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
    </userContext.Provider>
    </loadingContext.Provider>

  );
}

export default App;
