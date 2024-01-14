import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./assets/components/Header/Header";

import Home from "./assets/components/Pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
