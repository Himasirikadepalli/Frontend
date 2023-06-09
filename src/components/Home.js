import Intro from '../Videos/Intro.mp4';
import { Container, Button, Card } from 'react-bootstrap';

const Home = () => {
  return (
    <Container>
      <Button variant="outline-primary" block>
        <video src={Intro} alt="Intro Video" className="img-fluid" controls />
      </Button>
    </Container>
  );
};

function BasicExample() {
  return (
    <Container className="d-flex align-items-center vh-100">
        <Card style={{ width: '18rem' }}>
        <Card.Img
            variant="top"
            src="https://images.app.goo.gl/z1qvNnkwsp4shJoj8"
            alt="Biological Projects"
            style={{ marginTop: '10%', transform: 'translateY(-50%)', width: '100%', height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        />
        <Card.Body>
            <Card.Title>Biological Projects</Card.Title>
            <Card.Text>
            Biological projects involve the study and application of living organisms and their systems to address various scientific, environmental, and health-related challenges.
            </Card.Text>
            <Button variant="primary">Explore More</Button>
        </Card.Body>
        </Card>
    </Container>
  );
}

export default BasicExample;
