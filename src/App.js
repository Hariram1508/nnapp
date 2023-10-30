import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';



function App() {
  return (
    <Container fluid>
 <Row >
       <Col lg={5} md={1} sm={2} className='bg-primary p-5 col-lg-5'>Column1</Col>
       <Col lg={5} md={2} sm={2} className='bg-success p-5 '>Column2</Col>
       <Col lg={1} md={4} sm={2} className='bg-secondary p-5 '>Column3</Col>
       <Col lg={1} md={5} sm={2} className='bg-danger p-5 '>Column4</Col>
    </Row>
  </Container>
  );
}

export default App;
