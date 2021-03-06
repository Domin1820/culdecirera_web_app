import './App.css';
import {Background, Welcome, Music} from './components/main.js';
import {Left, Footer, Header} from './components/main.js';
import {Rightbox} from './components/main.js';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Container, Row, Col} from 'react-bootstrap';

function App() {
  return (
    <div>
        <Background/>
        <Header/>
        <Container className="App">
          <Row>
            <Music/>
          </Row>
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
