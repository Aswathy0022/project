import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import Signupdesign from "./Signupdesign"
export default function SignupPage() {
  return (
    <div className="bg-signup">
      <Signupdesign></Signupdesign>
      <Card className="p-3 m-4 " style={{flex:0.3}}>
        <h3>SignUp</h3>
        <p className="text">Just some details to get you in! </p>
        <Form>
          <UserText
            formId="formBasicEmail"
            type="UserName"
            placeholder="UserName"
          />
          <UserText
            formId="formBasicEmail"
            type="Email/Phone"
            placeholder="Email/Phone"
          />
          <UserText
            formId="formBasicPassword"
            type="password"
            placeholder="Password"
          />
          <UserText
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
      </Card>
    </div>
  )
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
