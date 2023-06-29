const CarRow = ({ name, brand, description, price, image }) => {
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
    </tr>
  );
};
export default CarRow;
