
const Weathercard = ({item}) => {
return(
 <div className="col-lg-4 mb-4">
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">
                City: {item.city}
            </h5>
            <h6 className="temperature">{item.Temp1} {item.Temp2} </h6>
            <p className="text">Region: {item.region} </p>
            <p className="text">Description: {item.description} </p>
            <p className="text">Date: {item.date}</p>
        </div>
    </div>
 </div>
   
)
}
export default Weathercard