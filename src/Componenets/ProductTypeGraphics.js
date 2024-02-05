import React from 'react';
import "./ProductTypeGraphics.css";
import pageImage from "../Images/Graphics.webp";

function ProductTypeGraphics() {
  return (
    <div>
      <h1>Commercial Graphics</h1>
      <img src={pageImage} alt="" className="sample-image" />
    </div>
  );
}

export default ProductTypeGraphics