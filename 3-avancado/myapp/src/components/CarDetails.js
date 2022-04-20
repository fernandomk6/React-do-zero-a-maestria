const CarDetails = ({marca, modelo, cor, ano, km, id}) => {

  return(
    <div>
      <h2>Veiculos</h2>
      <ul>
        <li>{marca}</li>
        <li>{modelo}</li>
        <li>{cor}</li>
        <li>{ano}</li>
        <li>{km}</li>
      </ul>
    </div>
  );
};

export default CarDetails;