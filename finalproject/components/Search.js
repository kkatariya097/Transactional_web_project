import { useState } from "react";
import SearchCars from "./CarList";
const Search = () => {
    const [carType, setCarType] = useState("");
    return (
    <div className="container text-left" style={{margin: 20}}>
    <form className="row">
        <div className="col-6">
            <div className="mb-3">
                <label htmlFor="carType" className="form-label">Car type</label>
                <input type="search" className="form-control" id="carType" onChange={(Text) => setCarType(Text)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="pickUpDate" className="form-label">Pick-up date</label>
                <input type="date" className="form-control" id="pickUpDate"/>
            </div>
        </div>
        <div className="col-6">
            <div className="mb-3">
                <label htmlFor="location" className="form-label">Location</label>
                <input type="search" className="form-control" id="location"/>
            </div>             
            <div className="mb-3">
                <label htmlFor="dropOffDate" className="form-label">Drop-off date</label>
                <input type="date" className="form-control" id="dropOffDate"/>
            </div>
              
        </div>
        <div>
            <button type="submit" className="btn" style={{margin: 20, backgroundColor: "#264653", color: "white"}}>Search</button>
        </div>
    </form>
</div>
);

};

export default Search;