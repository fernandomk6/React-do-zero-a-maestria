import style from "./Cars.module.css";

const Cars = ({cars}) => {

  return (
    <div className={style.cars}>
      {cars.map((car, index) => {
        return (
          <ul key={index}>
            <li>Marca: {car.marca}</li>
            <li>Modelo: {car.modelo}</li>
            <li>Ano: {car.ano}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default Cars;