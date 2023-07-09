import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./css/style.css";

export default function LoginComponent() {
  return (
    <div className="p-2 m-2 bg-login" style={{ width: "20%", height: "80%" }}>
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
          <Form.Check style={{color:"#fff"}} type="checkbox" label="Remember me" />
        </Form.Group>
        <div className="d-flex flex-row  align-items-center justify-content-center my-1">
          <Button className="my-2 w-50" variant="primary" type="submit" block>
            Login
          </Button>
          <Link className="mx-2" to="/signup">
            Sign up
          </Link>
        </div>
      </Form>
    </div>
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
      <Form.Label style={{ color: "#fff" }}>{title}</Form.Label>
      <Form.Control
        className="bg-user-input"
        type={type}
        placeholder={placeholder}
      />
      {/* {hintText && <Form.Text className="text-muted">{hintText}</Form.Text>} */}
    </Form.Group>
  );
}
