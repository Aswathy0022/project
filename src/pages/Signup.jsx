import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import Signupdesign from "./Signupdesign";
export default function SignupPage() {
  return (
    <div className="lg-container">
      <Signupdesign></Signupdesign>
      <div className="p-2 m-2 bg-login" style={{ width: "20%", height: "90%" }}>
        <Form>
          <UserText
            title={"Username"}
            formId="formBasicEmail"
            type="UserName"
            placeholder="UserName"
          />
          <UserText
            title={"Email/Phone"}
            formId="formBasicEmail"
            type="Email/Phone"
            placeholder="Email/Phone"
          />
          <UserText
            title={"Password"}
            formId="formBasicPassword"
            type="password"
            placeholder="Password"
          />
          <UserText
            title={"Confirm Password"}
            formId="formBasicPassword"
            type="password"
            placeholder="Confirm Password"
          />
          <div className="d-flex flex-column  align-items-center justify-content-center my-4">
            <Button
              className="my-2 w-100"
              variant="primary"
              type="submit"
              block
            >
              SignUp
            </Button>
          </div>
        </Form>
      </div>
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
    <Form.Group controlId={formId} className={"my-1"}>
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
