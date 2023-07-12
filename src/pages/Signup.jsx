import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import { doSignup } from "../services/login";
import Signupdesign from "./Signupdesign";
export default function SignupPage() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [confirmaPassword, setConfirmPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      await doSignup(username, password, confirmaPassword, email);
      alert("User created successfully")
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="lg-container">
      <Signupdesign></Signupdesign>
      <div className="p-2 m-2 bg-login" style={{ width: "20%", height: "90%" }}>
        <Form onSubmit={onSubmit}>
          <UserText
            value={username}
            title={"Username"}
            formId="formBasicEmail"
            type="UserName"
            placeholder="UserName"
            onChangeText={(text) => {
              setError("");
              setUsername(text);
            }}
          />
          <UserText
            title={"Email/Phone"}
            formId="formBasicEmail"
            type="Email/Phone"
            placeholder="Email/Phone"
            value={email}
            onChangeText={(text) => {
              setError("");
              setEmail(text);
            }}
          />
          <UserText
            title={"Password"}
            formId="formBasicPassword"
            type="password"
            value={password}
            onChangeText={(text) => {
              setError("");
              setPassword(text);
            }}
            placeholder="Password"
          />
          <UserText
            title={"Confirm Password"}
            formId="formBasicPassword"
            type="password"
            onChangeText={(text) => {
              setError("");
              setConfirmPassword(text);
            }}
            value={confirmaPassword}
            placeholder="Confirm Password"
          />
          <p>{error}</p>
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
  onChangeText,
  value,
}) {
  return (
    <Form.Group controlId={formId} className={"my-1"}>
      <Form.Label>{title}</Form.Label>
      <Form.Control
        className="bg-user-input"
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChangeText(e.target.value)}
      />
      {hintText && <Form.Text className="text-muted">{hintText}</Form.Text>}
    </Form.Group>
  );
}
