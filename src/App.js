/* https://www.accuweather.com/en/gb/liverpool/l7-9/february-weather/330510  */
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState} from "react";
import {weatherdata} from "./mockdata.js";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Weathercard from './components/Weathercard';
import FilterRow from './components/FilterRow';
import Formemail from './components/Formemail';


function App() {
 // dropdown rendering list with map.() and .filter() manipulation as a prop
const DataFromDropdown = () => {
  return [
    ...new Set(weatherdata.map(item => item.region)),
  ] /*wrapp return in an array */
}
const DataFromDropdowntemp = () => {
  return [
    ...new Set(weatherdata.map(item => item.category)),
  ] 
}
// filter city name
 const handleChangeCity = (city) => {
  const filterWeatherData = weatherdata.filter((item) => {
    if (item.city.toLocaleLowerCase().includes(city.toLocaleLowerCase())){
      return item 
    }  return false
  })
  setTempData(filterWeatherData)
 }
 // region drop down 
 const handleRegionDD = (region) => {
  const filterWeatherData =  weatherdata.filter((item) => {
    if (item.region === region) {
      return item;
    }
   return false;
  });
  setTempData(filterWeatherData)
};
// temperature  drop down
const handleTempDD = (category) => {
  const filterWeatherData =  weatherdata.filter((item) => {
    if (item.category === category) {
      return item;
    }
   return false;
  });
  setTempData(filterWeatherData)
};


const [tempdata, setTempData] = useState(weatherdata);


  return (
    <div className="App">
     <Container>
      <Row>
        <Col  md={{ span: 6, offset: 3 }} >
          <Row>
           <FilterRow
           region={DataFromDropdown()}
           category={DataFromDropdowntemp()}
           onCityFilter={handleChangeCity}
           onRegionFilter={handleRegionDD }
           onTempFilter={handleTempDD}
           />
          </Row> 
        </Col>
        <Row>
            {tempdata.map((item) => (
                <Weathercard item={item} key={item.id} />
            ))}              
          </Row>
      </Row>
      <Col  md={{ span: 6, offset: 3 }}>
        <Formemail />
        </Col>
     </Container>
    </div>
  );
}

export default App;
