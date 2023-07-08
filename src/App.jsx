import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { LoginPage } from "./pages/Login";
import SignupPage from "./pages/Signup";
import Navbar from './components/Navbar';
import Home from './pages/Home';

export default function App() {
  return (
    <div>
      <Container className="bg-container" fluid>
       
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        
      </Container>
    </div>
  );
}
