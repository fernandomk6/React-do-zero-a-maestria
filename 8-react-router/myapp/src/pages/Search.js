import {useSearchParams, Link} from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Search = () => {
  const [searchParams] = useSearchParams();
  const url = "http://localhost:3000/products?" + searchParams;

  const {data: items, loading, error} = useFetch(url);
  return (
    <div>
      <h2>Resultados Disponiveis</h2>
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
    </div>
  )
}

export default Search