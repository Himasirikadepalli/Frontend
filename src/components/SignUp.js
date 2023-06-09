import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';


const SignUp = () => {

  const [data, setData] = useState([]);
  const [selectedRole, setSelectedRole] = useState('');
  const history = useHistory();
 
  useEffect(() => {
    // Fetch data from the API
    fetch('https://localhost:7230/api/Auth/register')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };
  const handleSignUp = () => {
    // Perform signup logic here
    history.push('/success'); // Navigate to success page after signup
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/signup">
          <Container className="d-flex justify-content-center align-items-center vh-100">
            <Row className="justify-content-center">
              <Col md={8} className="pr-2">
                <Card className="shadow bg-white" style={{ width: '100%', height: '100%' }}>
                  <Card.Body>
                    <h1 className="text-center">Register</h1>
                    <Form>
                      <Form.Group controlId="username">
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control type="text" name="username" maxLength={20} required />
                      </Form.Group>
                      <Form.Group controlId="username">
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control type="text" name="username" maxLength={20} required />
                      </Form.Group>
                      <Form.Group controlId="loginid">
                        <Form.Label>Email Id:</Form.Label>
                        <Form.Control type="text" name="loginid" maxLength={30} required />
                      </Form.Group>
                      <Form.Group controlId="pass">
                        <Form.Label>Create Password:</Form.Label>
                        <Form.Control type="password" name="pass" maxLength={20} required />
                      </Form.Group>
                      <Form.Group controlId="pass">
                        <Form.Label>Re-Enter Password:</Form.Label>
                        <Form.Control type="password" name="pass" maxLength={20} required />
                      </Form.Group>
                      <Form.Group controlId="role">
                        <Form.Label>Role:</Form.Label>
                        <Form.Select value={selectedRole} onChange={handleRoleChange}>
                          <option value="">Select Role</option>
                          <option value="guest">Guest</option>
                          <option value="user">Registered User</option>
                          <option value="admin">Admin</option>
                        </Form.Select>
                      </Form.Group>
                      <div className="text-center" style={{ fontSize: '10px' }}>.</div>
                      <div className="text-center">
                        <Button type="submit" onClick={handleSignUp}>SIGN UP</Button>
                      </div>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={4} className="pl-2 align-items-center">
                <Card className="shadow bg-primary text-white" style={{ width: '150%', height: '100%' }}>
                  <Card.Body>
                  <h1 className="text-center" style={{ fontSize: '40px', marginTop: '30%', transform: 'translateY(-30%)' }}>
                      Hello, Friend!
                    </h1>
                    <h2 className="text-center" style={{ fontSize: '20px', marginTop: '15%', transform: 'translateY(-20%)' }}>Welcome to</h2>
                    <h1 className="text-center" style={{ fontSize: '50px', marginTop: '15%', transform: 'translateY(-30%)' }}>PROJECT SHOWCASE</h1>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Route>
        <Route path="/success">
          <h1>Sign Up Successful!</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default SignUp;

