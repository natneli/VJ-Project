import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Componenets/Header";
import Home from "./Componenets/Home";
import Login from "./Componenets/Login";
import SignUp from "./Componenets/SignUp";
import ProductTypeCIJ from "./Componenets/ProductTypeCIJ";
import ProductTypeLaser from "./Componenets/ProductTypeLaser";
import ProductTypeTIJ from "./Componenets/ProductTypeTIJ";
import ProductTypeCaseCoding from "./Componenets/ProductTypeCaseCoding";
import ProductTypeGraphics from "./Componenets/ProductTypeGraphics";
import ProductTypeTTO from "./Componenets/ProductTypeTTO";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cij/:selectedButton" element={<ProductTypeCIJ />} />
          <Route path="/laser/:selectedButton" element={<ProductTypeLaser />} />
          <Route path="/thermal-transfer/:selectedButton" element={<ProductTypeTTO />} />
          <Route path="/thermal-inkjets/:selectedButton" element={<ProductTypeTIJ />} />
          <Route path="/case-coding/:selectedButton" element={<ProductTypeCaseCoding />} />
          <Route path="/commercial-graphics/:selectedButton" element={<ProductTypeGraphics />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
