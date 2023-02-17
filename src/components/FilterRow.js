import { useState, useRef } from "react";

const FilterRow = ({region, category, onCityFilter, onRegionFilter, onTempFilter}) => {
    //console.log(region)
    //console.log(category)
 

    const [filters, setFilters] = useState({
        city: "",
        region: "",
        category: "",

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
        case "category":
                onTempFilter(value);
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
            setMsg('Eight cities are all at least 10°C, unfortunately none are sunny.');
        } else {
            setMsg();
        }
      }

   
    return(
        <div className="row mt-2 mb-2 ">
            <div className="col-lg-12 ">
                <h4 className="filtertitle">Filter</h4>
            </div>
            <div className="row">
                <div className="col ">
                    <div className="row">
                    <label htmlFor="city"> City Name </label> 
                    </div>
                    <input
                    type="text"
                    id="cityname"
                    className="form-control city-form"
                    value={filters.city}
                    onChange={handleChange("city")}
                   
                    />
                </div>
            </div>
            <div className="row">
             <div className="col-md-6 ">
             <div className="row">
                    <label htmlFor="category"> Temperature </label>
                    </div>
                    <select
                    className="form-control category-form"
                    id="category-filter"
                    onChange={handleChange("category")}
                    value={filters.category}
                    >
                        <option value={category}>Select °C</option>
                        {category.map((category) => (
                              <option value={category} key={category}>
                                {category}
                              </option>
                        ))}
                        </select>                 
                </div>
                <div className="col-md-6 ">
                    <div className="row">
                    <label htmlFor="region"> Regions </label>
                    </div>
                    <select
                    className="region-form form-control"
                    id="region-filter"
                    onChange={handleChange("region")}
                    value={filters.region}
                    >
                          <option value="">Select Region</option>
                        {region.map((region) => (
                              <option value={region} key={region}>
                                {region}
                              </option>
                        ))}
                        </select>                  
                </div>
                <div className="row">
                    <div className="checkbox">
                        <label htmlFor="checkbox"> 18th of Feb weather <span>data checkbox</span> <br/>
                            <input type="checkbox" ref={checkbox} name="more" onClick={handleClick}/>
                            <p>  {msg} </p>
                        </label>
                    </div> 
                   
                </div>
            </div>
        </div>
    )
}
export default FilterRow;