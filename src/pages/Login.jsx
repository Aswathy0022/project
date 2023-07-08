import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import LoginComponent from "../components/login/LoginComponents";
import WelcomeComponent from "../components/login/Welcomecomponents";

export function LoginPage() {
  return (
    <div className="d-flex vh-100">
      <WelcomeComponent />
      <LoginComponent />
    </div>
  );
}
