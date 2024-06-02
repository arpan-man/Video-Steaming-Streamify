import React from "react";
import "./App.css";
import Modal from "react-modal";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Authentication/Login";
import Secure from "./components/Authentication/Secure";

Modal.setAppElement("#root");

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/secure" element={<Secure />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
