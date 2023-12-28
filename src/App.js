import './App.css';
import Header from './Componenets/Header';
import Home from './Componenets/Home';
import ProductMainModels from './Componenets/ProductMainModels';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProductModels from './Componenets/ProductModels';


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route
            path="/product-main-models/:selectedButton"
            element={<ProductMainModels />}
          />
          <Route
            path="/product-models/:selectedButton/:subModel"
            element={<ProductModels />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

