
// import React from "react";
// import { useParams } from "react-router-dom";
// import "./ProductTypesCIJ.css";

// const ProductTypesCIJ = () => {
//   const { selectedButton } = useParams();

//   const handlePlusClick = (text) => {
//     // Navigate to another page based on the clicked text
//     // For now, let's just log the text to the console
//     console.log(`Navigating to another page for ${text}`);
//   };

//   return (
//     <div className="product-types-cij-container">
//       <h2>{selectedButton}</h2>
//       <div className="model-container">
//         <span
//           className="plus-sign"
//           onClick={() => handlePlusClick("1000 Line")}
//         >
//           +
//         </span>
//         <span className="model-text">1000 Line</span>
//       </div>
//       <div className="model-container">
//         <span
//           className="plus-sign"
//           onClick={() => handlePlusClick("1710 Pigmented Ink")}
//         >
//           +
//         </span>
//         <span className="model-text">1710 Pigmented Ink</span>
//       </div>
//       <div className="model-container">
//         <span
//           className="plus-sign"
//           onClick={() => handlePlusClick("Simplicity")}
//         >
//           +
//         </span>
//         <span className="model-text">Simplicity</span>
//       </div>
//     </div>
//   );
// };

// export default ProductTypesCIJ;

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductTypesCIJ.css";

const ProductTypesCIJ = () => {
  const { selectedButton } = useParams();
  const [openSubmodel, setOpenSubmodel] = useState(null);
  const [openContent, setOpenContent] = useState(null);
  const [openSection, setOpenSection] = useState(null);

  const submodels = {
    "1000 Line": [
      "SubModel1",
      "SubModel2",
      "SubModel3",
      "SubModel4",
      "SubModel5",
    ],
    "1710 Pigmented Ink": [
      "SubModel6",
      "SubModel7",
      "SubModel8",
      "SubModel9",
      "SubModel10",
    ],
    Simplicity: [
      "SubModel11",
      "SubModel12",
      "SubModel13",
      "SubModel14",
      "SubModel15",
    ],
  };

  const contents = {
    "1000 Line": Array.from(
      { length: 10 },
      (_, index) => `Content${index + 1}`
    ),
    "1710 Pigmented Ink": Array.from(
      { length: 10 },
      (_, index) => `Content${index + 11}`
    ),
    Simplicity: Array.from(
      { length: 10 },
      (_, index) => `Content${index + 21}`
    ),
  };

  const sections = Array.from(
    { length: 10 },
    (_, index) => `Section${index + 1}`
  );

  const handleSubmodelClick = (subModel) => {
    setOpenSubmodel((prev) => (prev === subModel ? null : subModel));
    setOpenContent(null);
    setOpenSection(null);
  };

  const handleContentClick = (content) => {
    setOpenContent((prev) => (prev === content ? null : content));
    setOpenSection(null);
  };

  const handleSectionClick = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <div className="product-types-cij-container">
      <h2>{selectedButton}</h2>
      {Object.keys(submodels).map((model) => (
        <div key={model} className="model-container">
          <div className="model-content">
            <span
              className={`plus-sign ${openSubmodel === model ? "open" : ""}`}
              onClick={() => handleSubmodelClick(model)}
            >
              {openSubmodel === model ? "-" : "+"}
            </span>
            <span className="model-text">{model}</span>
          </div>
          {openSubmodel === model && (
            <div className="submodel-dropdown">
              {submodels[model].map((subModel) => (
                <div key={subModel}>
                  <span
                    className="plus-sign-submodel"
                    onClick={() => handleContentClick(subModel)}
                  >
                    +
                  </span>
                  {subModel}
                  {openContent === subModel && (
                    <div className="content-dropdown">
                      {contents[model].map((content) => (
                        <div key={content}>
                          <span
                            className="plus-sign-content"
                            onClick={() => handleSectionClick(content)}
                          >
                            +
                          </span>
                          {content}
                          {openSection === content && (
                            <div className="section-dropdown">
                              {sections.map((section) => (
                                <div key={section}>{section}</div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductTypesCIJ;
