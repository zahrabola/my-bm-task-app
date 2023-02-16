const FilterRow = ({region}) => {

    console.log(region)
    return(
        <div className="row mt-2 mb-2 ">
            <div className="col-lg-12 border">
                <h4 className="filtertitle">Filter</h4>
            </div>
            <div className="row">
                <div className="col-md-6 ">
                    City
                </div>
                <div className="col-md-6 ">
                    <label htmlFor="region">Regions</label>
                    <select
                    className="form-control"
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
                <div className="col-md-4">
                    Checkboxes
                </div>
                </div>
               
          
            </div>
        </div>
    )
}
export default FilterRow;