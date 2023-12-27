// import React from "react";
// import { useHistory } from "react-router-dom";

// const ProductMainModels = () => {
//     const history = useHistory();

//     const handlePlusClick = (text) => {
//         // Navigate to another page based on the clicked text
//         // For now, let's just log the text to the console
//         console.log(`Navigating to another page for ${text}`);
//     };

//     return (
//         <div>
//         <h2>Product Main Models</h2>
//         <div>
//             <span>1000 Line</span>
//             <span onClick={() => handlePlusClick("1000 Line")}>+</span>
//         </div>
//         <div>
//             <span>1710 Pigmented Ink</span>
//             <span onClick={() => handlePlusClick("1710 Pigmented Ink")}>+</span>
//         </div>
//         <div>
//             <span>Simplicity</span>
//             <span onClick={() => handlePlusClick("Simplicity")}>+</span>
//         </div>
//         </div>
//     );
// };

// export default ProductMainModels;

import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductMainModels = ({ buttonData }) => {
  const navigate = useNavigate();
  const { selectedButton } = useParams();

  const handlePlusClick = (text) => {
    // Navigate to another page based on the clicked text
    // For now, let's just log the text to the console
    console.log(`Navigating to another page for ${text}`);
  };

  return (
    <div>
      <h2>{selectedButton}</h2>
      {Array.isArray(buttonData[selectedButton]) && (
        <ul>
          {buttonData[selectedButton].map((item) => (
            <li key={item}>
              {item} <span onClick={() => handlePlusClick(item)}>+</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductMainModels;