import { useEffect, useReducer, useState } from "react";
import CarRow from "./CarRow";

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

function CarList() {
  const [cars, setCars] = useState([]);
  const [carType, setCarType] = useState("");
  // const db = SQLite.openDatabase("vanier.db");

  useEffect(() => {
    setCars(carsArray);
  }, []);

  return (
    <>
      <div className="row mb-2">
        <h3 className="themeFontColor text-center">Our available cars</h3>
      </div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Brand</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((c) => (
            <CarRow
              key={c.id}
              name={c.name}
              brand={c.brand}
              description={c.description}
              price={c.price}
              image={c.image}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}
export default CarList;
