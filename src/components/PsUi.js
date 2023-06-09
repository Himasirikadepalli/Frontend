import React from "react";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom"
import Home from "../components/Home"
import About from "../components/About"
import Contact from "../components/Contact"
import LoginForm from "../components/LoginForm"
import { Row, Col, Form, FormControl, Button } from 'react-bootstrap';

export default function PsUi() {
  return (
    <>
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Switch>
          <Route path="/home"><Home /></Route>
          <Route path="/about"><About /></Route>
          <Route path="/contact"><Contact /></Route>
          <Route path="/login"><LoginForm /></Route>
        </Switch>

      </div>
      </Router>
      <div>
        <Col>
          <h1 className="text-center">
            <span style={{ color: 'rgb(89, 40, 122)', fontSize: '50px' }}><strong>P</strong></span>
            <span style={{ color: 'rgb(0, 201, 167)' }}><strong>ro</strong></span>
            <span style={{ color: 'rgb(89, 40, 122)', fontSize: '50px' }}><strong>J</strong></span>
            <span style={{ color: 'rgb(0, 201, 167)' }}><strong>ect</strong></span>
            <span stle={{ color: 'rgb(29, 59, 85)', fontSize: '50px' }}><strong> S</strong></span>
            <span style={{ color: 'rgb(91, 192, 222)' }}><strong>ho</strong></span>
            <span style={{ color: 'rgb(29, 59, 85)', fontSize: '50px' }}><strong>W</strong></span>
            <span style={{ color: 'rgb(91, 192, 222)' }}><strong>ca</strong></span>
            <span style={{ color: 'rgb(29, 59, 85)', fontSize: '50px' }}><strong>S</strong></span>
            <span style={{ color: 'rgb(91, 192, 222)' }}><strong>e</strong></span>
          </h1>
        </Col>
      </div>
      <div>
        <Row className="mt-4">
          <Col md={{ span: 6, offset: 3 }}>
            <Form inline>
              <FormControl type="text" placeholder="" className="mr-sm-2" />
              <Button variant="outline-info" className="ml-sm-2"><i className='fas fa-search'></i>Search</Button>
            </Form>
          </Col>
        </Row>
      </div>
      </>
  )
}