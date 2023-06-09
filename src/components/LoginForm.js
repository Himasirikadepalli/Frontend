import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from 'react-router-dom';
import SignUp from './SignUp';

const LoginForm = () => {
  const [data, setData] = useState([]);
  const [selectedRole, setSelectedRole] = useState('');
  const history = useHistory();

    useEffect(() => {
      // Fetch data from the API
      fetch('https://localhost:7230/api/Auth/login')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.log(error));
    }, []);

    const handleRoleChange = (event) => {
      setSelectedRole(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      // Perform login logic
      // Redirect to a different page
      history.push('/dashboard');
    };

  return (
    <Router>
    <Container className="d-flex justify-content-center align-items-center vh-100">
    <Row className="justify-content-center">
      <Col md={6} className="pr-2">
        <Card className="shadow bg-white">
            <Card.Body>
              <h1 className="text-center">Login</h1>
              <Form>
                <Form.Group controlId="username">
                  <Form.Label>Username:</Form.Label>
                  <Form.Control type="text" name="username" maxLength={30} required />
                </Form.Group>
                <Form.Group controlId="pass">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control type="password" name="pass" maxLength={20} required />
                </Form.Group>
                <Form.Group controlId="role">
                  <Form.Label>Role:</Form.Label>
                  <Form.Select value={selectedRole} onChange={handleRoleChange}>
                    <option value="">Select Role</option>
                    <option value="guest">Guest</option>
                    <option value="user">registered User</option>
                    <option value="admin">Admin</option>
                  </Form.Select>
                </Form.Group>
                <div className="text-center">
                  <Button type="submit" style={{ backgroundColor: 'rgb(249, 97, 103)', border: '1px solid rgb(249, 97, 103)' }}>
                    Submit
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="pl-2 align-items-center">
          <Card className="shadow" style={{ backgroundColor: 'rgb(249, 97, 103)', width: '150%', height: '100%',  color: 'white' }}>
            <Card.Body>
              <h1 className="text-center"  style={{ fontSize: '40px', marginTop: '10%', transform: 'translateY(-10%)' }}>Hello, Friend!</h1>
              <p className="text-center" style={{ fontSize: '20px', marginTop: '10%', transform: 'translateY(-20%)'}}>Oh! Are you new to this application?</p>
              <p className="text-center" style={{ fontSize: '20px', marginTop: '10%', transform: 'translateY(-20%)'}}>Click Here</p>
              <div className="text-center">
                <Button variant="light" id="signUp">
                <Link to="/signup1" style={{ textDecoration: 'none', color: 'black' }}>
                      Sign Up
                </Link>
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </Container>
      <Switch>
        <Route path="/signup1" component={SignUp} />
      </Switch>
    </Router>
  );
};
export default LoginForm;