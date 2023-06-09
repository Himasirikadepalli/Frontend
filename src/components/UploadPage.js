import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import Logo from '../Images/Logo.jpg';

const UploadPage = () => {
  const [projectFile, setProjectFile] = useState(null);
  const [plagiarismFile, setPlagiarismFile] = useState(null);

  const handleProjectFileUpload = (e) => {
    const file = e.target.files[0];
    setProjectFile(file);
  };

  const handlePlagiarismFileUpload = (e) => {
    const file = e.target.files[0];
    setPlagiarismFile(file);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Do something with the uploaded files
    console.log('Project File:', projectFile);
    console.log('Plagiarism File:', plagiarismFile);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row className="justify-content-center">
      <Col md={4} className="pl-2 align-items-center">
        <Card className="shadow" style={{ backgroundColor: '#353a40', width: '150%', height: '100%',  color: 'white' }}>
            <Card.Body>
              <Card.Title>Upload Project Report</Card.Title>
              <Form onSubmit={handleFormSubmit}>
                <Form.Group controlId="projectReport">
                  <Form.Label>Choose a .pdf or .word file:</Form.Label>
                  <Form.Control
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleProjectFileUpload}
                  />
                </Form.Group>
                <Button type="submit">Upload</Button>
              </Form>
              <Card.Title>Upload Plagiarism Report</Card.Title>
              <Form onSubmit={handleFormSubmit}>
                <Form.Group controlId="plagiarismReport">
                  <Form.Label>Choose a .pdf or .word file:</Form.Label>
                  <Form.Control
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handlePlagiarismFileUpload}
                  />
                </Form.Group>
                <Button type="submit">Upload</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="pl-2 align-items-center">
        <Card className="shadow" style={{ backgroundColor: '#e49325', width: '150%', height: '100%',  color: 'white' }}>
            <Card.Body>
              <Card.Title className="text-center" >Publish your Projects</Card.Title>
              <div className="Logo" style={{ marginTop: '10%', transform: 'translateY(-30%)', width: '100%', height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={Logo} alt="Logo" style={{ align: 'center', maxWidth: '100%', maxHeight: '50%', objectFit: 'contain' }} />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UploadPage;