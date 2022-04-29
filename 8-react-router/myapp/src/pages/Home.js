import "./Home.css"

import {Link} from "react-router-dom";
import {useFetch} from "../hooks/useFetch";

const Home = () => {

  const url = "http://localhost:3000/products";

  const {data: items, loading, error} = useFetch(url);

  return (
    <div className="home-container">
      <h2>Home</h2>
      {error && (
        <p>{error}</p>
      )}
      {!loading && (
        <ul className="products">
          {items && items.map((item) => {
            return (
              <li key={item.id}>
                <h4>{item.name}</h4>
                <p>R$ {item.price}</p>
                <Link to={`/products/${item.id}`}>Detalhes</Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Home;