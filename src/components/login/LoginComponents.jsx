import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./css/style.css";

export default function LoginComponent() {
  return (
    <Card className="p-3 m-4 bg-login" style={{ flex: 0.3 }}>
      <h3>Login</h3>
      <p className="text">Glad you are back!</p>
      <Form>
        <UserText
          title={"Email address"}
          formId="formBasicEmail"
          type="email"
          placeholder="Enter email"
          hintText="We'll never share your email with anyone else."
        />
        <UserText
          title={"Password"}
          formId="formBasicPassword"
          type="password"
          placeholder="Password"
        />

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <div className="d-flex flex-column  align-items-center justify-content-center my-4">
          <Button className="my-2 w-100" variant="primary" type="submit" block>
            Login
          </Button>
        </div>

        <span className="text-center mt-3">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </span>
      </Form>
    </Card>
  );
}

function UserText({
  type = "text",
  placeholder = "",
  title,
  formId,
  hintText = "",
}) {
  return (
    <Form.Group controlId={formId} className={"my-2"}>
      <Form.Label>{title}</Form.Label>
      <Form.Control
        className="bg-user-input"
        type={type}
        placeholder={placeholder}
      />
      {hintText && <Form.Text className="text-muted">{hintText}</Form.Text>}
    </Form.Group>
  );
}
