import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

const ProjectForm =() => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [keywords, setKeywords] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://localhost:7230/api/createProject', {
        Title: title,
        Description: description,
        Keywords: keywords,
      });

      console.log('Project created:', response.data);
      // Do something with the response if needed
    } catch (error) {
      console.error('Project creation failed:', error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Col md={4} className="pl-2 align-items-center">
        <Card className="p-4" style={{ backgroundColor: 'purple' }}>
          <h2 style={{ color: 'pink', textAlign: 'center' }}>Create Projects</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="title">
              <Form.Label>Title:</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{ color: 'pink' }}
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description:</Form.Label>
              <Form.Control
                as="textarea"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{ color: 'pink' }}
              />
            </Form.Group>
            <Form.Group controlId="keywords">
              <Form.Label>Keywords:</Form.Label>
              <Form.Control
                type="text"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                style={{ color: 'pink' }}
              />
            </Form.Group>
            <Button
              type="create"
              style={{
                backgroundColor: 'pink',
                border: 'pink',
                color: 'black',
              }}
            >
              Create Project
            </Button>
          </Form>
        </Card>
      </Col>

      <Col md={4} className="pl-2 align-items-center">
        <Card
          className="shadow bg-pink text-white"
          style={{
            width: '100%',
            height: '400%',
            Img: `url("./Images/hi1.png")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></Card>
      </Col>
    </div>
  );
};

export default ProjectForm;