const CarRow = ({ name, brand, description, price, image }) => {
  const saveCar = () => {
    alert('Your booking is confirmed.')
  }
  return (
    <tr>
      <td>{name}</td>
      <td>{brand}</td>
      <td>{description}</td>
      <td>{price}</td>
      <td>
        <img 
        src={image} 
        alt="Vehicle" 
        // style={{ width: "auto", height: 50 }} 
        />
      </td>
      <td>
        <button
         type="submit"
         className="btn"
         onClick={saveCar}
         style={{ backgroundColor: "#264653", color: "white" }}>Book
        </button>
      </td>
    </tr>
  );
};
export default CarRow;
