import './App.css';

import {BrowserRouter, Routes, Route} from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";

// components
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <h1>Context Api</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
