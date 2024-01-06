import './App.css';
import Header from './Componenets/Header';
import Home from './Componenets/Home';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProductModels from './Componenets/ProductModelsCIJ';
import ProductTypesCIJ from './Componenets/ProductTypesCIJ';
import ProductModelsCIJ from './Componenets/ProductModelsCIJ';
import Login from './Componenets/Login';
import SignUp from './Componenets/SignUp';


function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Home />} />
          <Route
            path="/product-types-cij/:selectedButton"
            element={<ProductTypesCIJ />}
          />
          <Route
            path="/product-models-cij/:selectedButton"
            element={<ProductModelsCIJ />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

