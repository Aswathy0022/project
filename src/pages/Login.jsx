import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/Login.css";

import LoginComponent from "../components/login/LoginComponents";
import WelcomeComponent from "../components/login/Welcomecomponents";

export function LoginPage() {
  return (
    <div className="lg-container">
      <WelcomeComponent />
      <LoginComponent />
    </div>
  );
}
