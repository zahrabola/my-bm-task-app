
const Weathercard = ({item}) => {
return(
 <div className="col-lg-3 mb-4 ">
    <div className="card bg-light border-light">
        <div className="card-body">
            <h5 className="card-title">
                City: {item.city}
            </h5>
            <h6 className="temperature">{item.temp}  </h6>
            <p className="text">Region: {item.region} </p>
            <p className="text">Description: {item.description} </p>
            <p className="text">Date: {item.date}</p>
        </div>
    </div>
 </div>
   
)
}
export default Weathercard