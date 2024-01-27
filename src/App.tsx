import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./assets/components/Header/Header";
import Products from "./assets/components/Products/Products";

import Home from "./assets/components/Pages/Home";
import About from "./assets/components/Pages/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="Home" element={<Home />}></Route>
          </Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
