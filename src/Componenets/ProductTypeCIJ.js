// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import "./ProductTypesCIJ.css";

// const ProductTypesCIJ = () => {
//   const { selectedButton } = useParams();
//   const [openSubmodel, setOpenSubmodel] = useState(null);
//   const [openContent, setOpenContent] = useState(null);
//   const [openSection, setOpenSection] = useState(null);
//   const [pdfUrl, setPdfUrl] = useState(null);

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
//     setPdfUrl(null);
//   };

//   const handleContentClick = (content) => {
//     setOpenContent((prev) => (prev === content ? null : content));
//     setOpenSection(null);
//     setPdfUrl(null);
//   };

//   const handleSectionClick = (section) => {
//     // Only handle the click if it's a leaf node (not another section)
//     if (Object.keys(Sections).includes(section)) {
//       setOpenSection((prev) => (prev === section ? null : section));
//     } else {
//       // It's a leaf node, so let's assume the PDF URL is the same for all sections
//       setPdfUrl(`${process.env.PUBLIC_URL}/PDF Files/Basics.pdf`);
//     }
//   };



//   useEffect(() => {
//     console.log("openSubmodel", openSubmodel);
//     console.log("openContent", openContent);
//     console.log("openSection", openSection);
//   }, [openSubmodel, openContent, openSection]);

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
//                       {contents[model].map((content, index) => (
//                         <div key={index}>
//                           <span
//                             className="plus-sign-content"
//                             onClick={() => handleSectionClick(content)}
//                           >
//                             +
//                           </span>
//                           {content}
//                           {openSection === content && (
//                             <div className="section-dropdown">
//                               {Sections[content].map((section, index) => (
//                                 <div key={index}>
//                                   <span
//                                     className="plus-sign-section"
//                                     onClick={() => handleSectionClick(section)}
//                                   >
//                                     +
//                                   </span>
//                                   {section}
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
//       {pdfUrl && (
//         <div className="pdf-viewer-container">
//           <iframe title="PDF Viewer" src={pdfUrl} width="1300" height="800" />
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductTypesCIJ;



// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import "./ProductTypesCIJ.css";

// const ProductTypesCIJ = () => {
//   const { selectedButton } = useParams();
//   const [openSubmodel, setOpenSubmodel] = useState(null);
//   const [openContent, setOpenContent] = useState(null);
//   const [openSection, setOpenSection] = useState(null);
//   const [pdfUrl, setPdfUrl] = useState(null);

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

//   const sections = {
//     "Parts Identification": [
//       "Electronics Compartment",
//       "Ink Compartment",
//       "Printhead",
//       "Umbilical",
//       "Cables",
//       "Optional Accessories",
//       "Tools Kit"
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
//     setPdfUrl(null);
//   };

//   const handleContentClick = (content) => {
//     setOpenContent((prev) => (prev === content ? null : content));
//     setOpenSection(null);
//     setPdfUrl(null);
//   };


// const handleSectionClick = (section) => {
//   if (Object.keys(sections).includes(section)) {
//     setOpenSection((prev) => (prev === section ? null : section));
//     setPdfUrl(null);
//   } else {
//     // Construct the PDF file name
//     const pdfName = `${openContent}_${section}.pdf`;

//     // Construct the PDF file URL
//     const pdfUrl = `${process.env.PUBLIC_URL}/PDF Files/${pdfName}`;

//     // Log information for debugging
//     console.log("pdfName:", pdfName);
//     console.log("pdfUrl:", pdfUrl);

//     // Check if the PDF file exists
//     fetch(pdfUrl)
//       .then((response) => {
//         if (!response.ok) {
//           // If the PDF file doesn't exist, set pdfUrl to null
//           setPdfUrl(null);
//         } else {
//           // If the PDF file exists, set pdfUrl
//           setPdfUrl(pdfUrl);
//         }
//       })
//       .catch((error) => {
//         console.error("Error checking PDF existence:", error);
//         // Handle any errors here, and set pdfUrl to null
//         setPdfUrl(null);
//       });
//   }
// };






//   const handleLeafSectionClick = (leafSection) => {
//     // Handle leaf section click
//     const pdfName = `${contents[openSubmodel].findIndex(
//       (c) => c === openContent
//     )}_${openSection}_${leafSection}`;
//     setPdfUrl(`${process.env.PUBLIC_URL}/PDF Files/${pdfName}.pdf`);
//   };

//   useEffect(() => {
//     console.log("openSubmodel", openSubmodel);
//     console.log("openContent", openContent);
//     console.log("openSection", openSection);
//   }, [openSubmodel, openContent, openSection]);

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
//                       {contents[model].map((content, index) => (
//                         <div key={index}>
//                           <span
//                             className="plus-sign-content"
//                             onClick={() => handleSectionClick(content)}
//                           >
//                             +
//                           </span>
//                           {content}
//                           {openSection === content && (
//                             <div className="section-dropdown">
//                               {sections[content].map((section, index) => (
//                                 <div key={index}>
//                                   <span
//                                     className="plus-sign-section"
//                                     onClick={() => handleSectionClick(section)}
//                                   >
//                                     +
//                                   </span>
//                                   {section}
//                                   {openSection === section && (
//                                     <div className="leaf-section-dropdown">
//                                       {sections[section].map(
//                                         (leafSection, index) => (
//                                           <div key={index}>
//                                             <span
//                                               className="plus-sign-leaf-section"
//                                               onClick={() =>
//                                                 handleLeafSectionClick(
//                                                   leafSection
//                                                 )
//                                               }
//                                             >
//                                               +
//                                             </span>
//                                             {leafSection}
//                                           </div>
//                                         )
//                                       )}
//                                     </div>
//                                   )}
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
//       {pdfUrl && (
//         <div className="pdf-viewer-container">
//           <iframe title="PDF Viewer" src={pdfUrl} width="1300" height="800" />
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductTypesCIJ;

// ---------------------

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import "./ProductTypesCIJ.css";

// const ProductTypesCIJ = () => {
//   const { selectedButton } = useParams();
//   const [openSubmodel, setOpenSubmodel] = useState(null);
//   const [openContent, setOpenContent] = useState(null);
//   const [openSection, setOpenSection] = useState(null);
//   const [openSubsection, setOpenSubsection] = useState(null);
//   const [pdfUrl, setPdfUrl] = useState(null);

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

//   const sections = {
//     "Parts Identification": [
//       "Electronics Compartment",
//       "Ink Compartment",
//       "Printhead",
//       "Umbilical",
//       "Cables",
//       "Optional Accessories",
//       "Tools Kit",
//     ],
//     Troubleshooting: [
//       "Problem1",
//       "Problem2",
//       "Problem3",
//       "Problem4",
//       "Problem5",
//     ],
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

//   const subsections = {
//     Problem3: ["Gutter", "Ink", "Septum"],
//     // Add more subsections as needed
//   };

//   const handleSubmodelClick = (subModel) => {
//     setOpenSubmodel((prev) => (prev === subModel ? null : subModel));
//     setOpenContent(null);
//     setOpenSection(null);
//     setOpenSubsection(null);
//     setPdfUrl(null);
//   };

//   const handleContentClick = (content) => {
//     setOpenContent((prev) => (prev === content ? null : content));
//     setOpenSection(null);
//     setOpenSubsection(null);
//     setPdfUrl(null);
//   };

// const handleSectionClick = (section) => {
//   console.log("Clicked on section:", section);
//   console.log("Sections object structure:", sections);
//   if (sections[section]) {
//     setOpenSection((prev) => (prev === section ? null : section));
//     setPdfUrl(null);
//   } else if (section.subsections) {
//     // Handle the case where section has subsections
//     setOpenSection((prev) => (prev === section.name ? null : section.name));
//     setPdfUrl(null);

//     // Set the openSubsection state
//     setOpenSubsection(section.subsections[0]); // You can set the default subsection here
//     console.log("openSubsection set to:", section.subsections[0]);
//   } else {
//     // Construct the PDF file name
//     const pdfName = `${openContent}_${section}.pdf`;

//     // Construct the PDF file URL
//     const pdfUrl = `${process.env.PUBLIC_URL}/PDF Files/${pdfName}`;

//     // Check if the PDF file exists
//     fetch(pdfUrl)
//       .then((response) => {
//         if (!response.ok) {
//           // If the PDF file doesn't exist, set pdfUrl to null
//           setPdfUrl(null);
//         } else {
//           // If the PDF file exists, set pdfUrl
//           setPdfUrl(pdfUrl);
//         }
//       })
//       .catch((error) => {
//         console.error("Error checking PDF existence:", error);
//         // Handle any errors here, and set pdfUrl to null
//         setPdfUrl(null);
//       });

//     setOpenSubsection(null);
//   }

//   console.log("openSubmodel", openSubmodel);
//   console.log("openContent", openContent);
//   console.log("openSection", openSection);
//   console.log("openSubsection", openSubsection);
// };




//   // const handleSubsectionClick = (subsection) => {
//   //   // Set the openSubsection state
//   //   setOpenSubsection(subsection);

//   //   // Construct the PDF file name for subsection
//   //   const pdfName = `${openContent}_${openSection}_${subsection}.pdf`;

//   //   // Construct the PDF file URL for subsection
//   //   const pdfUrl = `${process.env.PUBLIC_URL}/PDF Files/${pdfName}`;

//   //   // Check if the PDF file for subsection exists
//   //   fetch(pdfUrl)
//   //     .then((response) => {
//   //       if (!response.ok) {
//   //         // If the PDF file for subsection doesn't exist, set pdfUrl to null
//   //         setPdfUrl(null);
//   //       } else {
//   //         // If the PDF file for subsection exists, set pdfUrl
//   //         setPdfUrl(pdfUrl);
//   //       }
//   //     })
//   //     .catch((error) => {
//   //       console.error("Error checking PDF existence:", error);
//   //       // Handle any errors here, and set pdfUrl to null
//   //       setPdfUrl(null);
//   //     });
//   // };


// const handleSubsectionClick = (subsection) => {
//   // Set the openSubproblem state
//   setOpenSubsection(subsection);

//   // Construct the PDF file name for subproblem
//   const pdfName = `${openContent}_${openSection}_${subsection}.pdf`;

//   // Construct the PDF file URL for subproblem
//   const pdfUrl = `${process.env.PUBLIC_URL}/PDF Files/${pdfName}`;

//   // Check if the PDF file for subproblem exists
//   fetch(pdfUrl)
//     .then((response) => {
//       if (!response.ok) {
//         // If the PDF file for subproblem doesn't exist, set pdfUrl to null
//         setPdfUrl(null);
//       } else {
//         // If the PDF file for subproblem exists, set pdfUrl
//         setPdfUrl(pdfUrl);
//       }
//     })
//     .catch((error) => {
//       console.error("Error checking PDF existence:", error);
//       // Handle any errors here, and set pdfUrl to null
//       setPdfUrl(null);
//     });
// };

//   useEffect(() => {
//     console.log("openSubmodel", openSubmodel);
//     console.log("openContent", openContent);
//     console.log("openSection", openSection);
//     console.log("openSubsection", openSubsection);
//   }, [openSubmodel, openContent, openSection, openSubsection]);

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
//                       {contents[model].map((content, index) => (
//                         <div key={index}>
//                           <span
//                             className="plus-sign-content"
//                             onClick={() => handleSectionClick(content)}
//                           >
//                             +
//                           </span>
//                           {content}
//                           {openSection === content && (
//                             <div className="section-dropdown">
//                               {Array.isArray(sections[content])
//                                 ? sections[content].map((section, index) => (
//                                     <div key={index}>
//                                       <span
//                                         className="plus-sign-section"
//                                         onClick={() =>
//                                           handleSectionClick(
//                                             section.name || section
//                                           )
//                                         }
//                                       >
//                                         +
//                                       </span>
//                                       {section.name || section}
//                                       {openSection ===
//                                         (section.name || section) &&
//                                         subsections[section] && (
//                                           <div className="subsection-dropdown">
//                                             {subsections[section].map(
//                                               (subsection, index) => (
//                                                 <div key={index}>
//                                                   <span
//                                                     className="plus-sign-subsection"
//                                                     onClick={() =>
//                                                       handleSubsectionClick(
//                                                         subsection
//                                                       )
//                                                     }
//                                                   >
//                                                     +
//                                                   </span>
//                                                   {subsection}
//                                                 </div>
//                                               )
//                                             )}
//                                           </div>
//                                         )}
//                                     </div>
//                                   ))
//                                 : null}
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
//       {pdfUrl && (
//         <div className="pdf-viewer-container">
//           <iframe title="PDF Viewer" src={pdfUrl} width="1300" height="800" />
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductTypesCIJ;

// [[[[[[[[[[[[]]]]]]]]]]]]


// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import "./ProductTypesCIJ.css";

// const ProductTypesCIJ = () => {
//   const { selectedButton } = useParams();
//   const [openSubmodel, setOpenSubmodel] = useState(null);
//   const [openContent, setOpenContent] = useState(null);
//   const [openSection, setOpenSection] = useState(null);
//   const [openSubproblem, setOpenSubproblem] = useState(null);
//   const [pdfUrl, setPdfUrl] = useState(null);

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

//   const subproblems = {
//     Problem3: ["Gutter", "Ink", "Septum"],
//     // Add more subproblems as needed
//   };

//   const sections = {
//     "Parts Identification": [
//       "Electronics Compartment",
//       "Ink Compartment",
//       "Printhead",
//       "Umbilical",
//       "Cables",
//       "Optional Accessories",
//       "Tools Kit",
//     ],
//     Troubleshooting: [
//       "Problem1",
//       "Problem2",
//       "Problem3",
//       "Problem4",
//       "Problem5",
//     ],
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
//     setOpenSubproblem(null);
//     setPdfUrl(null);
//   };

//   const handleContentClick = (content) => {
//     setOpenContent((prev) => (prev === content ? null : content));
//     setOpenSection(null);
//     setOpenSubproblem(null);
//     setPdfUrl(null);
//   };

//   const handleSectionClick = (section) => {
//     console.log("Clicked on section:", section);

//     if (subproblems[openContent] && subproblems[openContent][section]) {
//       // Handle the case where section has subproblems
//       setOpenSection((prev) => (prev === section ? null : section));
//       setPdfUrl(null);

//       // Set the openSubproblem state
//       setOpenSubproblem(subproblems[openContent][section][0]); // You can set the default subproblem here
//       console.log(
//         "openSubproblem set to:",
//         subproblems[openContent][section][0]
//       );
//     } else {
//       setOpenSection((prev) => (prev === section ? null : section));
//       setPdfUrl(null);
//       setOpenSubproblem(null);
//     }

//     console.log("openSubmodel", openSubmodel);
//     console.log("openContent", openContent);
//     console.log("openSection", openSection);
//     console.log("openSubproblem", openSubproblem);
//   };

//   const handleSubproblemClick = (subproblem) => {
//     // Set the openSubproblem state
//     setOpenSubproblem(subproblem);

//     // Construct the PDF file name for subproblem
//     const pdfName = `${openContent}_${openSection}_${subproblem}.pdf`;

//     // Construct the PDF file URL for subproblem
//     const pdfUrl = `${process.env.PUBLIC_URL}/PDF Files/${pdfName}`;

//     // Check if the PDF file for subproblem exists
//     fetch(pdfUrl)
//       .then((response) => {
//         if (!response.ok) {
//           // If the PDF file for subproblem doesn't exist, set pdfUrl to null
//           setPdfUrl(null);
//         } else {
//           // If the PDF file for subproblem exists, set pdfUrl
//           setPdfUrl(pdfUrl);
//         }
//       })
//       .catch((error) => {
//         console.error("Error checking PDF existence:", error);
//         // Handle any errors here, and set pdfUrl to null
//         setPdfUrl(null);
//       });
//   };

//   // const handleSubproblemClick = (subproblem) => {
//   //   // Set the openSubproblem state
//   //   setOpenSubproblem(subproblem);

//   //   // Construct the PDF file name for subproblem
//   //   const pdfName = `${openContent}_${openSection}_${subproblem}.pdf`;

//   //   // Construct the PDF file URL for subproblem
//   //   const pdfUrl = `${process.env.PUBLIC_URL}/PDF Files/${pdfName}`;

//   //   // Check if the PDF file for subproblem exists
//   //   fetch(pdfUrl)
//   //     .then((response) => {
//   //       if (!response.ok) {
//   //         // If the PDF file for subproblem doesn't exist, set pdfUrl to null
//   //         setPdfUrl(null);
//   //       } else {
//   //         // If the PDF file for subproblem exists, set pdfUrl
//   //         setPdfUrl(pdfUrl);
//   //       }
//   //     })
//   //     .catch((error) => {
//   //       console.error("Error checking PDF existence:", error);
//   //       // Handle any errors here, and set pdfUrl to null
//   //       setPdfUrl(null);
//   //     });
//   // };

//   useEffect(() => {
//     console.log("openSubmodel", openSubmodel);
//     console.log("openContent", openContent);
//     console.log("openSection", openSection);
//     console.log("openSubproblem", openSubproblem);
//   }, [openSubmodel, openContent, openSection, openSubproblem]);

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
//                       {contents[model].map((content, index) => (
//                         <div key={index}>
//                           <span
//                             className="plus-sign-content"
//                             onClick={() => handleSectionClick(content)}
//                           >
//                             +
//                           </span>
//                           {content}
//                           {openSection === content && (
//                             <div className="section-dropdown">
//                               {Array.isArray(sections[content])
//                                 ? sections[content].map((section, index) => (
//                                     <div key={index}>
//                                       <span
//                                         className="plus-sign-section"
//                                         onClick={() =>
//                                           handleSubproblemClick(
//                                             section.name || section
//                                           )
//                                         }
//                                       >
//                                         +
//                                       </span>
//                                       {section.name || section}
//                                       {openSubproblem ===
//                                         (section.name || section) &&
//                                         subproblems[section] && (
//                                           <div className="subproblem-dropdown">
//                                             {subproblems[section].map(
//                                               (subproblem, index) => (
//                                                 <div key={index}>
//                                                   <span
//                                                     className="plus-sign-subproblem"
//                                                     onClick={() =>
//                                                       handleSubproblemClick(
//                                                         subproblem
//                                                       )
//                                                     }
//                                                   >
//                                                     +
//                                                   </span>
//                                                   {subproblem}
//                                                 </div>
//                                               )
//                                             )}
//                                           </div>
//                                         )}
//                                     </div>
//                                   ))
//                                 : null}
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
//       {pdfUrl && (
//         <div className="pdf-viewer-container">
//           <iframe title="PDF Viewer" src={pdfUrl} width="1300" height="800" />
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductTypesCIJ;

// 0000000000000
















import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductTypeCIJ.css";

const ProductTypeCIJ = () => {
  const { selectedButton } = useParams();
  const [openSubmodel, setOpenSubmodel] = useState(null);
  const [openContent, setOpenContent] = useState(null);
  const [openSection, setOpenSection] = useState(null);
  const [openSubsection, setOpenSubsection] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [openSubsections, setOpenSubsections] = useState([]);

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
      "Troubleshooting",
      "Printer Operation",
      "Installation",
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
      "Troubleshooting",
      "Printer Operation",
      "Installation",
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
      "Troubleshooting",
      "Printer Operation",
      "Installation",
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

  const subsections = {
    "Troubleshooting Flowcharts": ["Head Start Diagnostic", "Head Stop Diagnostic", "Ink On Diagnostic","Drooling Printhead", "Gutter Fault", "EHT Fault", "Ink Viscosity Too High","Makeup Consumption"],
    "Display Faults":["Display Faults Excel Interface","Display Faults Willet Interface"]
      
    // Add more subproblems as needed
  };

  const sections = {
    "Parts Identification": [
      "Electronics Compartment",
      "Ink Compartment",
      "Printhead",
      "Umbilical",
      "Cables",
      "Optional Accessories",
      "Tools Kit",
    ],
    "Troubleshooting": [
      "Troubleshooting Flowcharts",
      "Startup Problems",
      "Display Faults",
      "Beacon Identification",
      "Fault Icons",
      "CSB Test Points"
    ],
    "Disassembly and Assembly": [
      "Printhead",
      "Valve Deck",
      "Ink Core",
      "Umbilical",
      "MainBoard",
    ],
    "Installation": ["Installation Excel Interface", "Installation Willet Interface" ],
    "Printer Operation":["Printer Operation Excel Interface", "Printer Operation Willet Interface"],
    "Service Manual": ["Service Manual1", "Service Manual2"],
    "Fluid Diagrams": ["Diagram1", "Diagram2"],
    "Electrical Schematics": ["Schematic1", "Schematics2"],
    "Specification": ["Spec1", "Spec2"],
    "Service Bulletins": ["Bul1", "Bul2"],
    "Service Software": ["SW1", "SW2", "SW3"],
    "Scratchpads": ["SPS1", "SPS2", "SPS3"],
    "Maintenance Items": ["M1", "M2", "M3"],
  };

  const toggleSubsection = (subsection) => {
    setOpenSubsections((prev) =>
      prev.includes(subsection)
        ? prev.filter((item) => item !== subsection)
        : [...prev, subsection]
    );
  };

  const handleSubmodelClick = (subModel) => {
    setOpenSubmodel((prev) => (prev === subModel ? null : subModel));
    setOpenContent(null);
    setOpenSection(null);
    setOpenSubsection(null);
    setPdfUrl(null);
  };

  const handleContentClick = (content) => {
    setOpenContent((prev) => (prev === content ? null : content));
    setOpenSection(null);
    setOpenSubsection(null);
    setPdfUrl(null);
  };

  const handleSectionClick = (section) => {
    console.log("Clicked on section:", section);

    if (sections[section]) {
      setOpenSection((prev) => (prev === section ? null : section));
      setOpenSubsection(null);
      setOpenSubsections([]); // Reset openSubsections when a section is clicked
    } else if (subsections[section]) {
      toggleSubsection(section);
    } else {
      const pdfName = `${openContent}_${section}.pdf`;
      const pdfUrl = `${process.env.PUBLIC_URL}/PDF Files/${pdfName}`;

      fetch(pdfUrl)
        .then((response) => {
          if (!response.ok) {
            setPdfUrl(null);
          } else {
            setPdfUrl(pdfUrl);
          }
        })
        .catch((error) => {
          console.error("Error checking PDF existence:", error);
          setPdfUrl(null);
        });
    }

    console.log("openSubmodel", openSubmodel);
    console.log("openContent", openContent);
    console.log("openSection", openSection);
    console.log("openSubsection", openSubsection);
    console.log("openSubsections", openSubsections);
  };


  const handleSubsectionClick = (subsection) => {
    console.log("Clicked on subsection:", subsection);
    console.log("openContent:", openContent);
    console.log("openSection:", openSection);
    console.log("openSubsection:", openSubsection);
    console.log("openSubmodel:", openSubmodel);

    setOpenSubsection(subsection);

    // Construct the PDF file name for subsection
    const pdfName = `${openContent}_${openSection}_${openSubsection}.pdf`;

    console.log("Constructed PDF Name:", pdfName);

    // Construct the PDF file URL for subsection
    const pdfUrl = `${process.env.PUBLIC_URL}/PDF Files/${pdfName}`;

    console.log("Constructed PDF URL:", pdfUrl);

    // Check if the PDF file for subsection exists
fetch(pdfUrl)
  .then((response) => {
    console.log("PDF Fetch Response:", response);
    return response.text(); // Log the response text
  })
  .then((pdfText) => {
    console.log("PDF Content:", pdfText); // Log the content of the PDF
    if (!pdfText) {
      setPdfUrl(null);
    } else {
      setPdfUrl(pdfUrl);
    }
  })
  .catch((error) => {
    console.error("Error checking PDF existence:", error);
    setPdfUrl(null);
  });
  };


  useEffect(() => {
    if (openContent && openSection && openSubsection) {
      // Construct the PDF file name for subsection
      const pdfName = `${openContent}_${openSection}_${openSubsection}.pdf`;

      // Construct the PDF file URL for subsection
      const pdfUrl = `${process.env.PUBLIC_URL}/PDF Files/${pdfName}`;

      // Check if the PDF file for subsection exists
      fetch(pdfUrl)
        .then((response) => {
          console.log("PDF Fetch Response:", response);
          return response.text(); // Log the response text
        })
        .then((pdfText) => {
          console.log("PDF Content:", pdfText); // Log the content of the PDF
          if (!pdfText) {
            setPdfUrl(null);
          } else {
            setPdfUrl(pdfUrl);
          }
        })
        .catch((error) => {
          console.error("Error checking PDF existence:", error);
          setPdfUrl(null);
        });
    }

    console.log("openSubmodel", openSubmodel);
    console.log("openContent", openContent);
    console.log("openSection", openSection);
    console.log("openSubsection", openSubsection);
  }, [openSubmodel, openContent, openSection, openSubsection]);

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
                              {Array.isArray(sections[content])
                                ? sections[content].map((section, index) => (
                                    <div key={index}>
                                      <span
                                        className="plus-sign-section"
                                        onClick={() =>
                                          handleSectionClick(section)
                                        }
                                      >
                                        +
                                      </span>
                                      {section}
                                      {openSubsections.includes(section) &&
                                        subsections[section] && (
                                          <div className="subsection-dropdown">
                                            {subsections[section].map(
                                              (subsection, index) => (
                                                <div key={index}>
                                                  <span
                                                    className="plus-sign-subsection"
                                                    onClick={() =>
                                                      handleSubsectionClick(
                                                        subsection
                                                      )
                                                    }
                                                  >
                                                    +
                                                  </span>
                                                  {subsection}
                                                </div>
                                              )
                                            )}
                                          </div>
                                        )}
                                    </div>
                                  ))
                                : null}
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
      {pdfUrl && (
        <div className="pdf-viewer-container">
          <iframe title="PDF Viewer" src={pdfUrl} width="1300" height="800" />
        </div>
      )}
    </div>
  );
};

export default ProductTypeCIJ;