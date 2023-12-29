// import React from "react";
// import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
// import "./ProductModels.css";

// const ProductModels = () => {
//   const { selectedButton } = useParams();

//   const handleSubModelClick = (subModel) => {
//     // Navigate to another page based on the clicked subModel
//     // For now, let's just log the subModel to the console
//     console.log(`Navigating to another page for ${subModel}`);
//   };

//   return (
//     <div className="product-models-container">
//       <h2>{selectedButton} Models</h2>
//       <div>
//         <span
//           className="sub-model"
//           onClick={() => handleSubModelClick("ModelA")}
//         >
//           ModelA
//         </span>
//       </div>
//       <div>
//         <span
//           className="sub-model"
//           onClick={() => handleSubModelClick("ModelB")}
//         >
//           ModelB
//         </span>
//       </div>
//       <div>
//         <span
//           className="sub-model"
//           onClick={() => handleSubModelClick("ModelC")}
//         >
//           ModelC
//         </span>
//       </div>
//       <div className="back-link">
//         <Link to={`/product-main-models/${encodeURIComponent(selectedButton)}`}>
//           Back to {selectedButton}
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default ProductModels;

import React from "react";
import { useParams } from "react-router-dom";
import "./ProductModelsCIJ.css";

const ProductModelsCIJ = () => {
  const { selectedButton } = useParams();

  const handleSubModelClick = (subModel) => {
    // Navigate to another page or perform an action based on the clicked subModel
    // For now, let's just log the subModel to the console
    console.log(`Navigating to another page for ${subModel}`);
  };

  return (
    <div className="product-models-cij-container">
      <h2>{selectedButton} Models</h2>
      <div className="sub-model-container">
        <span className="plus-sign" onClick={() => handleSubModelClick("SubModel1")}>
          +
        </span>
        <span className="sub-model-text">SubModel1</span>
      </div>
      <div className="sub-model-container">
        <span className="plus-sign" onClick={() => handleSubModelClick("SubModel2")}>
          +
        </span>
        <span className="sub-model-text">SubModel2</span>
      </div>
      <div className="sub-model-container">
        <span className="plus-sign" onClick={() => handleSubModelClick("SubModel3")}>
          +
        </span>
        <span className="sub-model-text">SubModel3</span>
      </div>
      <div className="sub-model-container">
        <span className="plus-sign" onClick={() => handleSubModelClick("SubModel4")}>
          +
        </span>
        <span className="sub-model-text">SubModel4</span>
      </div>
      <div className="sub-model-container">
        <span className="plus-sign" onClick={() => handleSubModelClick("SubModel5")}>
          +
        </span>
        <span className="sub-model-text">SubModel5</span>
      </div>
    </div>
  );
};

export default ProductModelsCIJ;