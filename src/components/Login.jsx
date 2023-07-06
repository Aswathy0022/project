import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { BrowserRouter, Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

export default function Login() {
  return (
    <Container>
      
      <Routes>
        <Route path="/login" element={<LoginPage/>}>
        </Route>
        <Route path="/signup" element={<SignupPage/>}>
        </Route>
      </Routes>
     
    </Container>
  );
}

function LoginPage() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4" style={{ width: '300px' }}>
        <h1 className="text-center">Login</h1>
        <p className="text-center text-muted">Skip the lag</p>

        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>

          <Button variant="primary" type="submit" block>
            Login
          </Button>
          <p className="text-center mt-3">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </Form>
      </Card>
    </div>
  );
}

function SignupPage() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4" style={{ width: '300px' }}>
        <h1 className="text-center">Sign Up</h1>
        <p className="text-center text-muted">Join us!</p>

        {/* Add signup form here */}
      </Card>
    </div>
  );
}
