import { useState } from "react";

const FilterRow = ({region}) => {

    console.log(region)
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
                    />
                </div>
                <div className="col-md-6 ">
                    <div className="row">
                    <label htmlFor="region"> Regions </label>
                    </div>
                    <select
                    className="region-form-control"
                    id="region-filter"
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
                            <input type="checkbox" value="checkbox2" />
                           <span> Less than 10°C </span> 
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value="checkbox2" />
                            <span> 10°C or more </span> 
                        </label>
                    </div>
              
                </div>
            </div>
        </div>
    )
}
export default FilterRow;