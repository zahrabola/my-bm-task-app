/* https://www.accuweather.com/en/gb/liverpool/l7-9/february-weather/330510  */
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {weatherdata} from "./mockdata.js";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Weathercard from './components/Weathercard';
import FilterRow from './components/FilterRow';

function App() {
 ///// dropdown rendering list with map.() and .filter() manipulation as a prop
const DataFromDropdown = () => {
  return [
    ...new Set(weatherdata.map(item => item.region)),
  ] /*wrapp return in an array */
}








  return (
    <div className="App">
     <Container>
      <Row>
        <Col sm={8}>
          <Row>
           <FilterRow
           region={DataFromDropdown()}
           />
          </Row>
          <Row>
            {weatherdata.map((item) => (
                <Weathercard item={item} key={item.id} />
            ))}  
          </Row>
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
