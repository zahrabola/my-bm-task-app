const FilterRow = () => {
    return(
        <div className="row mt-2 mb-2">
            <div className="col">
                <h4 className="filtertitle">Filter</h4>
            </div>
            <div className="row">
                <div className="col-md-4">
                    City
                </div>
                <div className="col-md-4">
                    <label htmlFor="region">Regions</label>
                    <select
                    className="form-control"
                    id="region-filter"
                    >
                        <option value="select">Select</option>

                        <option value={region} key={region}>

                        </option>
                        
                        </select>
                    Regions
                </div>
                <div className="col-md-4">
                    Checkboxes
                </div>
          
            </div>
        </div>
    )
}
export default FilterRow;