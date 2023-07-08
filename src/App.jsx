
import React from "react";
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { LoginPage } from "./pages/Login";
import SignupPage from "./pages/Signup";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="bg-container d-flex flex-column">
      
       
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/about" element={<About />} />
            <Route path="menu" element={<Menu/>} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        <Footer></Footer>
      
    </div>
  );
}
