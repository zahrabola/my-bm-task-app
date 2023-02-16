import { useState, useRef } from "react";

const FilterRow = ({region, onCityFilter, onRegionFilter,}) => {
    console.log(region)
 


    const [filters, setFilters] = useState({
        city: "",
        region: "", 
      });

    const handleChange = (field) => (event) => {
        const {value} = event.target;
        setFilters({
            ...filters,
            [field]: value,
        });

    switch(field){
        case "city":
            onCityFilter(value);
            break;
        case "region":
            onRegionFilter(value);
            break;   
            default:
                ///////

      }
    };
    
    
    //checkbox
    const [msg, setMsg] = useState("");
    const checkbox = useRef();
   

    const handleClick = () => {
        if (checkbox.current.checked) {
            setMsg('Manchester, York and Liverpool are all at least 10°C, but unfortunately not sunny.');
        } else {
            setMsg();
        }
      }

   
    return(
        <div className="row mt-2 mb-2 ">
            <div className="col-lg-12 border">
                <h4 className="filtertitle">Filter</h4>
            </div>
            <div className="row">
                <div className="col-md-6 ">
                    <div className="row">
                    <label htmlFor="city"> City </label> 
                    </div>
                    <input
                    type="text"
                    id="cityname"
                    className="city-form-control"
                    value={filters.city}
                    onChange={handleChange("city")}
                   
                    />
                </div>
                <div className="col-md-6 ">
                    <div className="row">
                    <label htmlFor="region"> Regions </label>
                    </div>
                    <select
                    className="region-form-control"
                    id="region-filter"
                    onChange={handleChange("region")}
                    value={filters.region}
                    >
                        <option value="select">Select Region</option>
                        {region.map((region) => (
                              <option value={region} key={region}>
                                {region}
                              </option>
                        ))}
                        </select>                  
                </div>
                <div className="row">
                  <label htmlFor="checkbox"> Temperature </label>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" ref={checkbox} name="more" onClick={handleClick}/>
                            <span> 10°C or more </span> 
                            <p>  {msg} </p>
                        </label>
                    </div> 
                   
                </div>
            </div>
        </div>
    )
}
export default FilterRow;