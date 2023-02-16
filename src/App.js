/* https://www.accuweather.com/en/gb/liverpool/l7-9/february-weather/330510  */
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {weatherdata} from "./mockdata.json";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Weathercard from './components/Weathercard';

function App() {
  return (
    <div className="App">
     <Container>
      <Row>
        <Col sm={8}>
        checkbox filterside
        <Weathercard />
        </Col>
        <Col>
        email side
        </Col>
      </Row>
     </Container>
    </div>
  );
}

export default App;
