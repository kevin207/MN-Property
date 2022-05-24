import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

import "./auth.css";

const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/properties");
    } catch {
      setError("Failed to login");
    }
    setLoading(false);
  }

  return (
    <>
      <Card className="form_auth">
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <h2 className="text-center mb-4">Log in</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label className="mt-2">Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>

            <Form.Group id="password">
              <Form.Label className="mt-2">Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>

            <Button disabled={loading} className="w-100 mt-4" type="submit">
              Log in
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default Login;
