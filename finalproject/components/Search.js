import { useState } from "react";
import CarList from "./CarList";

const carsArray = [
  {
    id: 1,
    name: "AMG",
    brand: "Mercedes-Benz",
    description: "Mercedes-benz car",
    size: "3",
    type: "SUV",
    price: 100,
    image: "./car1.png",
  },
  {
    id: 2,
    name: "AMG-2",
    brand: "Mercedez-Benz",
    description: "MB car",
    size: "2",
    type: "Sedan",
    price: 100,
    image: "./car2.png",
  },
  {
    id: 3,
    name: "Golf",
    brand: "VolksWagen",
    description: "VW car",
    size: "1",
    type: "Small",
    price: 100,
    image: "./car3.png",
  },
  {
    id: 4,
    name: "Jaguar",
    brand: "Jaguar",
    description: "Jaguar car",
    size: "3",
    type: "SUV",
    price: 100,
    image: "./car4.png",
  },
  {
    id: 5,
    name: "Pick up",
    brand: "Ford",
    description: "Pick up car",
    size: "4",
    type: "Pickup",
    price: 200,
    image: "./car5.png",
  },
  {
    id: 6,
    name: "Small car",
    brand: "Toyota",
    description: "Yaris car",
    size: "1",
    type: "Small",
    price: 50,
    image: "./car6.png",
  },
  {
    id: 7,
    name: "Sedan car",
    brand: "Honda",
    description: "Civic car",
    size: "2",
    type: "Sedan",
    price: 150,
    image: "./car7.png",
  },
];

const Search = () => {
  const [carsList, setCarsList] = useState([]);

  const toCarList = () => {
    console.log("here?");
    setCarsList(carsArray);
    console.log("cars?", carsList);
  };
  return (
    <>
      <div className="container text-left" style={{ margin: 20 }}>
        <form className="row">
          <div className="col-12">
            <label htmlFor="location" className="form-label">
              Location
            </label>
            {/* <input type="search" className="form-control" id="location" /> */}
            <select className="form-control" id="location">
                <option value="na"></option>
              <option value="montreal">Montreal</option>
              <option value="quebeccity">Quebec city</option>
              <option value="ottawa">Ottawa</option>
              <option value="toronto">Toronto</option>
            </select>
          </div>
          <div className="col-6">
            <div className="mb-3">
              <label htmlFor="pickUpDate" className="form-label">
                Pick-up date
              </label>
              <input type="date" className="form-control" id="pickUpDate" />
            </div>
          </div>
          <div className="col-6">
            <div className="mb-3">
              <label htmlFor="dropOffDate" className="form-label">
                Drop-off date
              </label>
              <input type="date" className="form-control" id="dropOffDate" />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="btn"
              style={{ margin: 20, backgroundColor: "#264653", color: "white" }}
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </>
  );

  // }
};

export default Search;
