import './App.css';

import {useState, useEffect} from "react";

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    async function fecthData() {
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
    }
    fecthData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    }

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    });

    const addedProduct = await res.json();

    setProducts((previousProducts) => [...previousProducts, addedProduct]);

    setName("");
    setPrice("");
  };

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      <ul>
        {products.map((p) => {
          return (
            <li key={p.id}>
              <span>{p.name} R$ {p.price}</span>
            </li>
          )
        })}
      </ul>
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome: </span>
            <input 
              type="text" 
              name="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Digite o nome do produto" 
            />
          </label>
          <label>
            <span>Preço: </span>
            <input 
              type="number" 
              name="price" 
              value={price} 
              onChange={(e) => setPrice(e.target.value)} 
              placeholder="Digite o valor do produto" 
            />
          </label>
          <input type="submit"  value="Criar"/>
        </form>
      </div>
    </div>
  );
}

export default App;
