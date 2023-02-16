
const Weathercard = () => {
return(
    <div className="row">
        <div className="col-md-4">
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">
                        City:
                    </h3>
                    <h5 className="temperature">  °C</h5>
                    <p className="text">Region: </p>
                    <p className="text">Description: </p>
                </div>
            </div>
        </div>
    </div>
)
}
export default Weathercard