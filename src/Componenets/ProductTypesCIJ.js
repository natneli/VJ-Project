// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import "./ProductTypesCIJ.css";

// const ProductTypesCIJ = () => {
//   const { selectedButton } = useParams();
//   const [openSubmodel, setOpenSubmodel] = useState(null);
//   const [openContent, setOpenContent] = useState(null);
//   const [openSection, setOpenSection] = useState(null);

//   const submodels = {
//     "1000 Line": [
//       "1210-1510",
//       "1220-1520",
//       "1510E",
//       "1520E",
//       "1550",
//       "1610",
//       "1610DH",
//       "1610E",
//       "1610E DH",
//       "1620E",
//       "1650",
//       "1650-1650 UHS",
//     ],
//     "Pigmented Ink(1000 Line)": ["1710"],
//     Simplicity: [
//       "1280",
//       "1580",
//       "1860",
//       "1880",
//       "1580C",
//       "1580+",
//       "1880+",
//       "1880 UHS",
//       "1880 HR",
//     ],
//   };

//   const contents = {
//     "1000 Line": [
//       "Parts Identification",
//       "Troublshooting",
//       "Disassembly and Assembly",
//       "Service Manual",
//       "Fluid Diagrams",
//       "Electrical Schematics",
//       "Specification",
//       "Service Bulletins",
//       "Service Software",
//       "Scratchpads",
//       "Maintenance Items",
//     ],
//     "Pigmented Ink(1000 Line)": [
//       "Parts Identification",
//       "Troublshooting",
//       "Disassembly and Assembly",
//       "Service Manual",
//       "Fluid Diagrams",
//       "Electrical Schematics",
//       "Specification",
//       "Service Bulletins",
//       "Service Software",
//       "Scratchpads",
//       "Maintenance Items",
//     ],
//     "Simplicity": [
//       "Parts Identification",
//       "Troublshooting",
//       "Disassembly and Assembly",
//       "Service Manual",
//       "Fluid Diagrams",
//       "Electrical Schematics",
//       "Specification",
//       "Service Bulletins",
//       "Service Software",
//       "Scratchpads",
//       "Maintenance Items",
//     ],
//   };

//   const Sections = [
//     "Electronic Compartment",
//     "Ink Compartment",
//     "Printhead",
//     "Body",
//   ];

//   const handleSubmodelClick = (subModel) => {
//     setOpenSubmodel((prev) => (prev === subModel ? null : subModel));
//     setOpenContent(null);
//     setOpenSection(null);
//   };

//   const handleContentClick = (content) => {
//     setOpenContent((prev) => (prev === content ? null : content));
//     setOpenSection(null);
//   };

//   const handleSectionClick = (section) => {
//     setOpenSection((prev) => (prev === section ? null : section));
//   };

//   return (
//     <div className="product-types-cij-container">
//       <h2>{selectedButton}</h2>
//       {Object.keys(submodels).map((model) => (
//         <div key={model} className="model-container">
//           <div className="model-content">
//             <span
//               className={`plus-sign ${openSubmodel === model ? "open" : ""}`}
//               onClick={() => handleSubmodelClick(model)}
//             >
//               {openSubmodel === model ? "-" : "+"}
//             </span>
//             <span className="model-text">{model}</span>
//           </div>
//           {openSubmodel === model && (
//             <div className="submodel-dropdown">
//               {submodels[model].map((subModel) => (
//                 <div key={subModel}>
//                   <span
//                     className="plus-sign-submodel"
//                     onClick={() => handleContentClick(subModel)}
//                   >
//                     +
//                   </span>
//                   {subModel}
//                   {openContent === subModel && (
//                     <div className="content-dropdown">
//                       {contents[model].map((content) => (
//                         <div key={content}>
//                           <span
//                             className="plus-sign-content"
//                             onClick={() => handleSectionClick(content)}
//                           >
//                             +
//                           </span>
//                           {content}
//                           {openSection === content && (
//                             <div className="section-dropdown">
//                               {Sections.map((Section) => (
//                                 <div key={Section}>
//                                   {Section}
//                                 </div>
//                               ))}
//                             </div>
//                           )}
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
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
      "1210-1510",
      "1220-1520",
      "1510E",
      "1520E",
      "1550",
      "1610",
      "1610DH",
      "1610E",
      "1610E DH",
      "1620E",
      "1650",
      "1650-1650 UHS",
    ],
    "Pigmented Ink(1000 Line)": ["1710"],
    Simplicity: [
      "1280",
      "1580",
      "1860",
      "1880",
      "1580C",
      "1580+",
      "1880+",
      "1880 UHS",
      "1880 HR",
    ],
  };

  const contents = {
    "1000 Line": [
      "Parts Identification",
      "Troublshooting",
      "Disassembly and Assembly",
      "Service Manual",
      "Fluid Diagrams",
      "Electrical Schematics",
      "Specification",
      "Service Bulletins",
      "Service Software",
      "Scratchpads",
      "Maintenance Items",
    ],
    "Pigmented Ink(1000 Line)": [
      "Parts Identification",
      "Troublshooting",
      "Disassembly and Assembly",
      "Service Manual",
      "Fluid Diagrams",
      "Electrical Schematics",
      "Specification",
      "Service Bulletins",
      "Service Software",
      "Scratchpads",
      "Maintenance Items",
    ],
    Simplicity: [
      "Parts Identification",
      "Troublshooting",
      "Disassembly and Assembly",
      "Service Manual",
      "Fluid Diagrams",
      "Electrical Schematics",
      "Specification",
      "Service Bulletins",
      "Service Software",
      "Scratchpads",
      "Maintenance Items",
    ],
  };

  const Sections = {
    "Parts Identification": [
      "Electronic Compartment",
      "Ink Compartment",
      "Printhead",
      "Body",
    ],
    Troublshooting: ["Problem1", "Problem2", "Problem3", "Problem5"],
    "Disassembly and Assembly": [
      "Printhead",
      "Valve Deck",
      "Ink Core",
      "Umbilical",
      "MainBoard",
    ],
    "Service Manual": ["Service Manual1", "Service Manual2"],
    "Fluid Diagrams": ["Diagram1", "Diagram2"],
    "Electrical Schematics": ["Schematic1", "Schematics2"],
    Specification: ["Spec1", "Spec2"],
    "Service Bulletins": ["Bul1", "Bul2"],
    "Service Software": ["SW1", "SW2", "SW3"],
    Scratchpads: ["SPS1", "SPS2", "SPS3"],
    "Maintenance Items": ["M1", "M2", "M3"],
  };

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
                      {contents[model].map((content, index) => (
                        <div key={index}>
                          <span
                            className="plus-sign-content"
                            onClick={() => handleSectionClick(content)}
                          >
                            +
                          </span>
                          {content}
                          {openSection === content && (
                            <div className="section-dropdown">
                              {Sections[content].map((section, index) => (
                                <div key={index}>{section}</div>
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






// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
//  import "@react-pdf-viewer/react-pdf/dist/esm/index.css";
// import { Worker, Viewer } from "@react-pdf-viewer/core";
// import "./ProductTypesCIJ.css";

// const ProductTypesCIJ = () => {
//   const { selectedButton } = useParams();
//   const [openSubmodel, setOpenSubmodel] = useState(null);
//   const [openContent, setOpenContent] = useState(null);
//   const [openSection, setOpenSection] = useState(null);
//   const [selectedPDF, setSelectedPDF] = useState(null); // State to track the selected PDF

//   const submodels = {
//     "1000 Line": [
//       "1210-1510",
//       "1220-1520",
//       "1510E",
//       "1520E",
//       "1550",
//       "1610",
//       "1610DH",
//       "1610E",
//       "1610E DH",
//       "1620E",
//       "1650",
//       "1650-1650 UHS",
//     ],
//     "Pigmented Ink(1000 Line)": ["1710"],
//     Simplicity: [
//       "1280",
//       "1580",
//       "1860",
//       "1880",
//       "1580C",
//       "1580+",
//       "1880+",
//       "1880 UHS",
//       "1880 HR",
//     ],
//   };

//   const contents = {
//     "1000 Line": [
//       "Parts Identification",
//       "Troubleshooting",
//       "Disassembly and Assembly",
//       "Service Manual",
//       "Fluid Diagrams",
//       "Electrical Schematics",
//       "Specification",
//       "Service Bulletins",
//       "Service Software",
//       "Scratchpads",
//       "Maintenance Items",
//     ],
//     "Pigmented Ink(1000 Line)": [
//       "Parts Identification",
//       "Troubleshooting",
//       "Disassembly and Assembly",
//       "Service Manual",
//       "Fluid Diagrams",
//       "Electrical Schematics",
//       "Specification",
//       "Service Bulletins",
//       "Service Software",
//       "Scratchpads",
//       "Maintenance Items",
//     ],
//     Simplicity: [
//       "Parts Identification",
//       "Troubleshooting",
//       "Disassembly and Assembly",
//       "Service Manual",
//       "Fluid Diagrams",
//       "Electrical Schematics",
//       "Specification",
//       "Service Bulletins",
//       "Service Software",
//       "Scratchpads",
//       "Maintenance Items",
//     ],
//   };

//   const Sections = {
//     "Parts Identification": [
//       "Electronic Compartment",
//       "Ink Compartment",
//       "Printhead",
//       "Body",
//     ],
//     Troubleshooting: ["Problem1", "Problem2", "Problem3", "Problem5"],
//     "Disassembly and Assembly": [
//       "Printhead",
//       "Valve Deck",
//       "Ink Core",
//       "Umbilical",
//       "MainBoard",
//     ],
//     "Service Manual": ["Service Manual1", "Service Manual2"],
//     "Fluid Diagrams": ["Diagram1", "Diagram2"],
//     "Electrical Schematics": ["Schematic1", "Schematics2"],
//     Specification: ["Spec1", "Spec2"],
//     "Service Bulletins": ["Bul1", "Bul2"],
//     "Service Software": ["SW1", "SW2", "SW3"],
//     Scratchpads: ["SPS1", "SPS2", "SPS3"],
//     "Maintenance Items": ["M1", "M2", "M3"],
//   };

//   const handleSubmodelClick = (subModel) => {
//     setOpenSubmodel((prev) => (prev === subModel ? null : subModel));
//     setOpenContent(null);
//     setOpenSection(null);
//     setSelectedPDF(null); // Close PDF viewer when selecting a new submodel
//   };

//   const handleContentClick = (content) => {
//     setOpenContent((prev) => (prev === content ? null : content));
//     setOpenSection(null);
//     setSelectedPDF(null); // Close PDF viewer when selecting a new content
//   };

//   const handleSectionClick = (section) => {
//     setOpenSection((prev) => (prev === section ? null : section));
//     setSelectedPDF(section); // Set the selected PDF when clicking a section
//   };

//   return (
//     <div className="product-types-cij-container">
//       <h2>{selectedButton}</h2>
//       {Object.keys(submodels).map((model) => (
//         <div key={model} className="model-container">
//           <div className="model-content">
//             <span
//               className={`plus-sign ${openSubmodel === model ? "open" : ""}`}
//               onClick={() => handleSubmodelClick(model)}
//             >
//               {openSubmodel === model ? "-" : "+"}
//             </span>
//             <span className="model-text">{model}</span>
//           </div>
//           {openSubmodel === model && (
//             <div className="submodel-dropdown">
//               {submodels[model].map((subModel) => (
//                 <div key={subModel}>
//                   <span
//                     className="plus-sign-submodel"
//                     onClick={() => handleContentClick(subModel)}
//                   >
//                     +
//                   </span>
//                   {subModel}
//                   {openContent === subModel && (
//                     <div className="content-dropdown">
//                       {contents[model].map((content) => (
//                         <div key={content}>
//                           <span
//                             className="plus-sign-content"
//                             onClick={() => handleSectionClick(content)}
//                           >
//                             +
//                           </span>
//                           {content}
//                           {openSection === content && (
//                             <div className="section-dropdown">
//                               {Sections[content].map((section) => (
//                                 <div key={section}>{section}</div>
//                               ))}
//                             </div>
//                           )}
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       ))}
//       <div className="pdf-viewer-container">
//         {selectedPDF && (
//           <Worker
//             workerUrl={`https://unpkg.com/pdfjs-dist@${"4.0.379"}/build/pdf.worker.min.js`}
//           >
//             <Viewer file={`../../src/PDF Files/Basics.pdf`} />
//           </Worker>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductTypesCIJ;
