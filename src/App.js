import './App.css';
import {Background, Welcome} from './components/main.js';
import {Left, Footer} from './components/main.js';
import {Rightbox} from './components/main.js';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Container, Row, Col} from 'react-bootstrap';

function App() {
  return (
    <div>
        <Background/>
        <Container className="App">
          <Row>
            <Col xs={3}><Left/></Col>
            <Col xs={6}><Welcome/></Col>
            <Col xs={3}><Rightbox/></Col>
          </Row>
        </Container>
        <Footer/>
    </div>
    
  );
}

export default App;
