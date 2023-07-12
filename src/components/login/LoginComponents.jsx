import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./css/style.css";
import { doLogin } from "../../services/login";

export default function LoginComponent() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const onLogin = async () => {
    try {
      await doLogin(username, password);
      alert("Login Successfull");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="p-2 m-2 bg-login" style={{ width: "20%", height: "80%" }}>
      <p>{error}</p>
      <UserText
        title={"username"}
        formId="formBasicEmail"
        type="text"
        value={username}
        onChangeText={(text) => {
          setError("");
          setUsername(text);
        }}
        placeholder="Enter Username"
        hintText="We'll never share your email with anyone else."
      />
      <UserText
        title={"Password"}
        formId="formBasicPassword"
        type="password"
        value={password}
        placeholder="Password"
        onChangeText={(text) => {
          setError("");
          setPassword(text);
        }}
      />

      <Form.Group controlId="formBasicCheckbox">
        <Form.Check
          style={{ color: "#fff" }}
          type="checkbox"
          label="Remember me"
        />
      </Form.Group>
      <div className="d-flex flex-row  align-items-center justify-content-center my-1">
        <Button
          onClick={onLogin}
          className="my-2 w-50"
          variant="primary"
          type="submit"
          block
        >
          Login
        </Button>
        <Link className="mx-2" to="/signup">
          Sign up
        </Link>
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
    <Form.Group controlId={formId} className={"my-2"}>
      <Form.Label style={{ color: "#fff" }}>{title}</Form.Label>
      <Form.Control
        className="bg-user-input"
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChangeText(e.target.value)}
      />
      {/* {hintText && <Form.Text className="text-muted">{hintText}</Form.Text>} */}
    </Form.Group>
  );
}
