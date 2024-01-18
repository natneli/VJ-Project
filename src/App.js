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
import ProductModelsCIJ from './Componenets/ProductModelsCIJ';
import Login from './Componenets/Login';
import SignUp from './Componenets/SignUp';
import ProductTypeCIJ from './Componenets/ProductTypeCIJ';
import ProductTypeLaser from './Componenets/ProductTypeLaser';


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
            path="/cij/:selectedButton"
            element={<ProductTypeCIJ />}
          />
          <Route
            path="/laser/:selectedButton"
            element={<ProductTypeLaser />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

