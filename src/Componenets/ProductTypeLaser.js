import React from 'react';
import "./ProductTypeLaser.css"
import pageImage from  "../Images/Laser.jpg"

function ProductTypeLaser() {
  return (
    <div>
      <h1>Product Type Laser</h1>
      <img src={pageImage} alt="" className="sample-image" />
    </div>
  );
}

export default ProductTypeLaser