// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import "./ProductTypeCIJ.css";
// import { useMediaQuery } from "@mui/material";

// const ProductTypeCIJ = () => {
//   const { selectedButton } = useParams();
//   const [openSubmodel, setOpenSubmodel] = useState(null);
//   const [openContent, setOpenContent] = useState(null);
//   const [openSection, setOpenSection] = useState(null);
//   const [openSubsection, setOpenSubsection] = useState(null);
//   const [pdfUrl, setPdfUrl] = useState(null);
//   const [openSubsections, setOpenSubsections] = useState([]);
  

  
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
//     "Simplicity": [
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
//       "Printer Operation",
//       "Installation",
//       "Disassembly and Assembly",
//       "Service Manual",
//       "Fluid Diagrams",
//       "Electrical Schematics",
//       "Specification",
//       "Service Bulletins",
//       "Service Software",
//       "Maintenance Items",
//     ],
//     "Pigmented Ink(1000 Line)": [
//       "Parts Identification",
//       "Troubleshooting",
//       "Printer Operation",
//       "Installation",
//       "Disassembly and Assembly",
//       "Service Manual",
//       "Fluid Diagrams",
//       "Electrical Schematics",
//       "Specification",
//       "Service Bulletins",
//       "Service Software",
//       "Maintenance Items",
//     ],
//     "Simplicity": [
//       "Parts Identification",
//       "Troubleshooting",
//       "Printer Operation",
//       "Installation",
//       "Disassembly and Assembly",
//       "Service Manual",
//       "Fluid Diagrams",
//       "Electrical Schematics",
//       "Specification",
//       "Service Bulletins",
//       "Service Software",
//       "Maintenance Items",
//     ],
//   };

//   const subsections = {
//     "Electronics Compartment": [
//       "Electronics Compartment",
//       "CSB",
//       "Power Switch",
//       "Electronics Door Assembly",
//       "LCD FIB Assembly",
//       "Power Supply",
//       "EHT Module",
//       "PIB",
//       "Electronics Fan Assembly",
//       "Positive Air Pump",
//       "Connector Panel",
//       "PCB1 PCB2 Assembly",
//     ],
//     "Troubleshooting Flowcharts": [
//       "Head Start Diagnostic",
//       "Head Stop Diagnostic",
//       "Ink On Diagnostic",
//       "Drooling Printhead",
//       "Gutter Fault",
//       "EHT Fault",
//       "Ink Viscosity Too High FC",
//       "Makeup Consumption",
//     ],
//     "Display Faults": [
//       "Display Faults Excel Interface",
//       "Display Faults Willet Interface",
//     ],
//     "Ink Viscosity Too High": [
//       "Viscosity Too High",
//       "Makeup Add Tracking",
//       "Measure Makeup Addition",
//       "Condensor Related",
//       "GPVM Related"
//     ],
//     "Ink and Makeup Add Problems": ["Ink Add Problem", "Makeup Add Problem"],
//   };

//   const sections = {
//     "Parts Identification": [
//       "Touch Screen Display",
//       "Electronics Compartment",
//       "Ink Compartment",
//       "Ink System (Simplicity)",
//       "Printhead",
//       "Umbilical",
//       "Cables",
//       "Optional Accessories",
//       "Tools Kit",
//     ],
//     "Troubleshooting": [
//       "Troubleshooting Flowcharts",
//       "Ink Viscosity Too High",
//       "Ink Viscosity Too Low",
//       "Ink and Makeup Add Problems",
//       "Low Vaccum Problems",
//       "GPVM(1710 Only)",
//       "Startup Problems",
//       "Fault Icons",
//       "Display Faults",
//       "Beacon Identification",
//       "CSB Test Points",
//       "Code Related Problems"
//     ],
//     "Disassembly and Assembly": [
//       "Printer Stand",
//       "Printhead Nozzle Deck",
//       "Printhead Valve Deck",
//       "Ink Core",
//       "Umbilical",
//       "positive Air Pump Kits",
//       "Beacon",
//       "Printer Display",
//       "MainBoard",
//       "Codensor"
//     ],
//     "Installation": [
//       "Installation Excel Interface",
//       "Installation Willet Interface",
//     ],
//     "Printer Operation": [
//       "Printer Operation Excel Interface",
//       "Printer Operation Willet Interface",
//     ],
//     "Service Manual": ["Service Manual1", "Service Manual2"],
//     "Fluid Diagrams": ["Fluid Diagram"],
//     "Electrical Schematics": ["Schematic1", "Schematics2"],
//     "Specification": ["Spec1", "Spec2"],
//     "Service Bulletins": ["Bul1", "Bul2"],
//     "Service Software": ["SPS Files", "Magicloader", "SW1", "SW2", "SW3"],
//     "Maintenance Items": ["M1", "M2", "M3"],
//   };

//   const toggleSubsection = (subsection) => {
//     setOpenSubsections((prev) =>
//       prev.includes(subsection)
//         ? prev.filter((item) => item !== subsection)
//         : [...prev, subsection]
//     );
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

//   const handleSectionClick = (section) => {
//     console.log("Clicked on section:", section);

//     if (sections[section]) {
//       setOpenSection((prev) => (prev === section ? null : section));
//       setOpenSubsection(null);
//       setOpenSubsections([]); // Reset openSubsections when a section is clicked
//     } else if (subsections[section]) {
//       toggleSubsection(section);
//     } else {
//       const pdfName = `${openContent}_${section}.pdf`;
//       const pdfUrl = `${process.env.PUBLIC_URL}/PDF Files/${pdfName}`;

//       fetch(pdfUrl)
//         .then((response) => {
//           if (!response.ok) {
//             setPdfUrl(null);
//           } else {
//             setPdfUrl(pdfUrl);
//           }
//         })
//         .catch((error) => {
//           console.error("Error checking PDF existence:", error);
//           setPdfUrl(null);
//         });
//     }

//     console.log("openSubmodel", openSubmodel);
//     console.log("openContent", openContent);
//     console.log("openSection", openSection);
//     console.log("openSubsection", openSubsection);
//     console.log("openSubsections", openSubsections);
//   };


//   const handleSubsectionClick = (subsection) => {
//     console.log("Clicked on subsection:", subsection);
//     console.log("openContent:", openContent);
//     console.log("openSection:", openSection);
//     console.log("openSubsection:", openSubsection);
//     console.log("openSubmodel:", openSubmodel);

//     setOpenSubsection(subsection);

//     // Construct the PDF file name for subsection
//     const pdfName = `${openContent}_${openSection}_${openSubsection}.pdf`;

//     console.log("Constructed PDF Name:", pdfName);

//     // Construct the PDF file URL for subsection
//     const pdfUrl = `${process.env.PUBLIC_URL}/PDF Files/${pdfName}`;

//     console.log("Constructed PDF URL:", pdfUrl);

//     // Check if the PDF file for subsection exists
// fetch(pdfUrl)
//   .then((response) => {
//     console.log("PDF Fetch Response:", response);
//     return response.text(); // Log the response text
//   })
//   .then((pdfText) => {
//     console.log("PDF Content:", pdfText); // Log the content of the PDF
//     if (!pdfText) {
//       setPdfUrl(null);
//     } else {
//       setPdfUrl(pdfUrl);
//     }
//   })
//   .catch((error) => {
//     console.error("Error checking PDF existence:", error);
//     setPdfUrl(null);
//   });
//   };


//   useEffect(() => {
//     if (openContent && openSection && openSubsection) {
//       // Construct the PDF file name for subsection
//       const pdfName = `${openContent}_${openSection}_${openSubsection}.pdf`;

//       // Construct the PDF file URL for subsection
//       const pdfUrl = `${process.env.PUBLIC_URL}/PDF Files/${pdfName}`;

//       // Check if the PDF file for subsection exists
//       fetch(pdfUrl)
//         .then((response) => {
//           console.log("PDF Fetch Response:", response);
//           return response.text(); // Log the response text
//         })
//         .then((pdfText) => {
//           console.log("PDF Content:", pdfText); // Log the content of the PDF
//           if (!pdfText) {
//             setPdfUrl(null);
//           } else {
//             setPdfUrl(pdfUrl);
//           }
//         })
//         .catch((error) => {
//           console.error("Error checking PDF existence:", error);
//           setPdfUrl(null);
//         });
//     }

//     console.log("openSubmodel", openSubmodel);
//     console.log("openContent", openContent);
//     console.log("openSection", openSection);
//     console.log("openSubsection", openSubsection);
//   }, [openSubmodel, openContent, openSection, openSubsection]);

//   return (
//     <div className="product-type-cij-container">
//       <h2>{selectedButton}</h2>
//       {Object.keys(submodels).map((model) => (
//         <div key={model} className="model-container">
//           <div className="model-content">
//             <button
//               className={`plus-sign ${openSubmodel === model ? "open" : ""}`}
//               onClick={() => handleSubmodelClick(model)}
//             >
//               {openSubmodel === model ? "-" : "+"}
//             </button>
//             <span className="model-text">{model}</span>
//           </div>
//           {openSubmodel === model && (
//             <div className="submodel-dropdown">
//               {submodels[model].map((subModel) => (
//                 <div key={subModel}>
//                   <button
//                     className="plus-sign-submodel"
//                     onClick={() => handleContentClick(subModel)}
//                   >
//                     {openContent === subModel ? "-" : "+"}
//                   </button>
//                   {subModel}
//                   {openContent === subModel && (
//                     <div className="content-dropdown">
//                       {contents[model].map((content, index) => (
//                         <div key={index}>
//                           <button
//                             className="plus-sign-content"
//                             onClick={() => handleSectionClick(content)}
//                           >
//                             {openSection === content ? "-" : "+"}
//                           </button>
//                           {content}
//                           {openSection === content && (
//                             <div className="section-dropdown">
//                               {Array.isArray(sections[content])
//                                 ? sections[content].map((section, index) => (
//                                     <div key={index}>
//                                       <button
//                                         className="plus-sign-section"
//                                         onClick={() =>
//                                           handleSectionClick(section)
//                                         }
//                                       >
//                                         {openSection === content &&
//                                         openSubsections.includes(section)
//                                           ? "-"
//                                           : "+"}
//                                       </button>
//                                       {section}
//                                       {openSubsections.includes(section) &&
//                                         subsections[section] && (
//                                           <div className="subsection-dropdown">
//                                             {subsections[section].map(
//                                               (subsection, index) => (
//                                                 <div key={index}>
//                                                   <button
//                                                     className="plus-sign-subsection"
//                                                     onClick={() =>
//                                                       handleSubsectionClick(
//                                                         subsection
//                                                       )
//                                                     }
//                                                   >
//                                                     {openSubsection ===
//                                                     subsection
//                                                       ? "-"
//                                                       : "+"}
//                                                   </button>
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
//       {/* {pdfUrl && (
//         <div className="pdf-viewer-container">
//           <iframe title="PDF Viewer" src={pdfUrl} width="1100" height="900" />
//         </div>
//       )} */}
//       {/* {pdfUrl !== null && (
//         <div className="pdf-viewer-container">
//           <div className="pdf-iframe">
//             <iframe title="PDF Viewer" src={pdfUrl} width="1100" height="900" />
//           </div>
//         </div>
//       )}
//       {pdfUrl === null && openSubsection !== null && (
//         <div className="pdf-not-prepared">Document not yet prepared</div>
//       )} */}
//       {/* {pdfUrl && (
//         <div className="pdf-viewer-container container-fluid">
//           <object
//             data={pdfUrl}
//             type="application/pdf"
//             width="100%"
//             height="100%"
//           >
//             <p>
//               It appears you don't have a PDF plugin for this browser. No
//               biggie... you can{" "}
//               <a href={pdfUrl}>click here to download the PDF file.</a>
//             </p>
//           </object>
//         </div>
//       )} */}
//       {pdfUrl && (
//         <div className="pdf-viewer-container container-fluid">
//           <button className="close-button" onClick={() => setPdfUrl(null)}>
//             Close
//           </button>
//           <object
//             data={pdfUrl}
//             type="application/pdf"
//             width="100%"
//             height="100%"
//           >
//             <p>
//               It appears you don't have a PDF plugin for this browser. No
//               biggie... you can{" "}
//               <a href={pdfUrl}>click here to download the PDF file.</a>
//             </p>
//           </object>
//         </div>
//       )}{" "}
//     </div>
//   );
// };

// export default ProductTypeCIJ;









import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductTypeCIJ.css";
import { useMediaQuery } from "@mui/material";

const ProductTypeCIJ = () => {
  const { selectedButton } = useParams();
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const [openSubmodel, setOpenSubmodel] = useState(null);
  const [openContent, setOpenContent] = useState(null);
  const [openSection, setOpenSection] = useState(null);
  const [openSubsection, setOpenSubsection] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [openSubsections, setOpenSubsections] = useState([]);

  // Function to handle breadcrumb click
  const handleBreadcrumbClick = (index) => {
    // Slice breadcrumbs up to the clicked index to go back
    setBreadcrumbs(breadcrumbs.slice(0, index + 1));

    // Logic to reset state based on the breadcrumb clicked
    switch (index) {
      case 0:
        setOpenSubmodel(null);
        setOpenContent(null);
        setOpenSection(null);
        setOpenSubsection(null);
        setPdfUrl(null);
        break;
      case 1:
        setOpenContent(null);
        setOpenSection(null);
        setOpenSubsection(null);
        setPdfUrl(null);
        break;
      case 2:
        setOpenSection(null);
        setOpenSubsection(null);
        setPdfUrl(null);
        break;
      case 3:
        setOpenSubsection(null);
        setPdfUrl(null);
        break;
      default:
        setPdfUrl(null);
        break;
    }
  };

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
      "Maintenance Items",
    ],
  };

  const subsections = {
    "Electronics Compartment": [
      "Electronics Compartment",
      "CSB",
      "Power Switch",
      "Electronics Door Assembly",
      "LCD FIB Assembly",
      "Power Supply",
      "EHT Module",
      "PIB",
      "Electronics Fan Assembly",
      "Positive Air Pump",
      "Connector Panel",
      "PCB1 PCB2 Assembly",
    ],
    "Troubleshooting Flowcharts": [
      "Head Start Diagnostic",
      "Head Stop Diagnostic",
      "Ink On Diagnostic",
      "Drooling Printhead",
      "Gutter Fault",
      "EHT Fault",
      "Ink Viscosity Too High FC",
      "Makeup Consumption",
    ],
    "Display Faults": [
      "Display Faults Excel Interface",
      "Display Faults Willet Interface",
    ],
    "Ink Viscosity Too High": [
      "Viscosity Too High",
      "Makeup Add Tracking",
      "Measure Makeup Addition",
      "Condensor Related",
      "GPVM Related",
    ],
    "Ink and Makeup Add Problems": ["Ink Add Problem", "Makeup Add Problem"],
  };

  const sections = {
    "Parts Identification": [
      "Touch Screen Display",
      "Electronics Compartment",
      "Ink Compartment",
      "Ink System (Simplicity)",
      "Printhead",
      "Umbilical",
      "Cables",
      "Optional Accessories",
      "Tools Kit",
    ],
    Troubleshooting: [
      "Troubleshooting Flowcharts",
      "Ink Viscosity Too High",
      "Ink Viscosity Too Low",
      "Ink and Makeup Add Problems",
      "Low Vaccum Problems",
      "GPVM(1710 Only)",
      "Startup Problems",
      "Fault Icons",
      "Display Faults",
      "Beacon Identification",
      "CSB Test Points",
      "Code Related Problems",
    ],
    "Disassembly and Assembly": [
      "Printer Stand",
      "Printhead Nozzle Deck",
      "Printhead Valve Deck",
      "Ink Core",
      "Umbilical",
      "positive Air Pump Kits",
      "Beacon",
      "Printer Display",
      "MainBoard",
      "Codensor",
    ],
    Installation: [
      "Installation Excel Interface",
      "Installation Willet Interface",
    ],
    "Printer Operation": [
      "Printer Operation Excel Interface",
      "Printer Operation Willet Interface",
    ],
    "Service Manual": ["Service Manual1", "Service Manual2"],
    "Fluid Diagrams": ["Fluid Diagram"],
    "Electrical Schematics": ["Schematic1", "Schematics2"],
    Specification: ["Spec1", "Spec2"],
    "Service Bulletins": ["Bul1", "Bul2"],
    "Service Software": ["SPS Files", "Magicloader", "SW1", "SW2", "SW3"],
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

  // const handleSubsectionClick = (subsection) => {
  //   console.log("Clicked on subsection:", subsection);
  //   console.log("openContent:", openContent);
  //   console.log("openSection:", openSection);
  //   console.log("openSubsection:", openSubsection);
  //   console.log("openSubmodel:", openSubmodel);

  //   setOpenSubsection(subsection);

  //   // Construct the PDF file name for subsection
  //   const pdfName = `${openContent}_${openSection}_${openSubsection}.pdf`;

  //   console.log("Constructed PDF Name:", pdfName);

  //   // Construct the PDF file URL for subsection
  //   const pdfUrl = `${process.env.PUBLIC_URL}/PDF Files/${pdfName}`;

  //   console.log("Constructed PDF URL:", pdfUrl);

  //   // Check if the PDF file for subsection exists
  //   fetch(pdfUrl)
  //     .then((response) => {
  //       console.log("PDF Fetch Response:", response);
  //       return response.text(); // Log the response text
  //     })
  //     .then((pdfText) => {
  //       console.log("PDF Content:", pdfText); // Log the content of the PDF
  //       if (!pdfText) {
  //         setPdfUrl(null);
  //       } else {
  //         setPdfUrl(pdfUrl);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error checking PDF existence:", error);
  //       setPdfUrl(null);
  //     });
  // };

  // Function to handle the click on the last child
  const handleLastChildClick = (subsection) => {
    setOpenSubsection(subsection);

    // Construct the PDF file name for subsection
    const pdfName = `${openContent}_${openSection}_${subsection}.pdf`;

    // Construct the PDF file URL for subsection
    const pdfUrl = `${process.env.PUBLIC_URL}/PDF Files/${pdfName}`;

    // Fetch and display the PDF document
    fetch(pdfUrl)
      .then((response) => {
        if (response.ok) {
          setPdfUrl(pdfUrl);
        } else {
          console.error("Failed to fetch PDF:", response.statusText);
        }
      })
      .catch((error) => {
        console.error("Error fetching PDF:", error);
      });
  };

  // useEffect(() => {
  //   // Update breadcrumbs based on state changes
  //   const updatedBreadcrumbs = [];
  //   if (openSubmodel) updatedBreadcrumbs.push(openSubmodel);
  //   if (openContent) updatedBreadcrumbs.push(openContent);
  //   if (openSection) updatedBreadcrumbs.push(openSection);
  //   if (openSubsection) updatedBreadcrumbs.push(openSubsection);
  //   setBreadcrumbs(updatedBreadcrumbs);
  // }, [openSubmodel, openContent, openSection, openSubsection]);
  useEffect(() => {
    // Update breadcrumbs based on state changes
    const updatedBreadcrumbs = [];
    if (openSubmodel) updatedBreadcrumbs.push(openSubmodel);
    if (openContent) updatedBreadcrumbs.push(openContent);
    if (openSection) updatedBreadcrumbs.push(openSection);
    if (openSubsection) updatedBreadcrumbs.push(openSubsection);
    setBreadcrumbs(updatedBreadcrumbs);
  }, [openSubmodel, openContent, openSection, openSubsection]);

  return (
    <div className="product-type-cij-container container-fluid">
      <h2>{selectedButton}</h2>
      <div className="breadcrumbs">
        {breadcrumbs.map((breadcrumb, index) => (
          <span key={index} onClick={() => handleBreadcrumbClick(index)}>
            {breadcrumb}
            {index !== breadcrumbs.length - 1 && <span> &gt; </span>}
          </span>
        ))}
      </div>
      {/* Render tree structure if PDF URL is not present */}
      {!pdfUrl && (
        <div className="tree-structure">
          {Object.keys(submodels).map((model) => (
            <div key={model} className="model-container">
              <div className="model-content">
                <button
                  className={`plus-sign ${
                    openSubmodel === model ? "open" : ""
                  }`}
                  onClick={() => handleSubmodelClick(model)}
                >
                  {openSubmodel === model ? "-" : "+"}
                </button>
                <span className="model-text">{model}</span>
              </div>
              {openSubmodel === model && (
                <div className="submodel-dropdown">
                  {submodels[model].map((subModel) => (
                    <div key={subModel}>
                      <button
                        className="plus-sign-submodel"
                        onClick={() => handleContentClick(subModel)}
                      >
                        {openContent === subModel ? "-" : "+"}
                      </button>
                      {subModel}
                      {openContent === subModel && (
                        <div className="content-dropdown">
                          {contents[model].map((content, index) => (
                            <div key={index}>
                              <button
                                className="plus-sign-content"
                                onClick={() => handleSectionClick(content)}
                              >
                                {openSection === content ? "-" : "+"}
                              </button>
                              {content}
                              {openSection === content && (
                                <div className="section-dropdown">
                                  {Array.isArray(sections[content])
                                    ? sections[content].map(
                                        (section, index) => (
                                          <div key={index}>
                                            <button
                                              className="plus-sign-section"
                                              onClick={() =>
                                                handleSectionClick(section)
                                              }
                                            >
                                              {openSection === content &&
                                              openSubsections.includes(section)
                                                ? "-"
                                                : "+"}
                                            </button>
                                            {section}
                                            {openSubsections.includes(
                                              section
                                            ) &&
                                              subsections[section] && (
                                                <div className="subsection-dropdown">
                                                  {subsections[section].map(
                                                    (subsection, index) => (
                                                      <div key={index}>
                                                        <button
                                                          className="plus-sign-subsection"
                                                          onClick={() =>
                                                            handleLastChildClick(
                                                              subsection
                                                            )
                                                          }
                                                        >
                                                          {openSubsection ===
                                                          subsection
                                                            ? "-"
                                                            : "+"}
                                                        </button>
                                                        {subsection}
                                                      </div>
                                                    )
                                                  )}
                                                </div>
                                              )}
                                          </div>
                                        )
                                      )
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
        </div>
      )}
      {/* {pdfUrl && (
        <div className="pdf-viewer-container">
          <iframe title="PDF Viewer" src={pdfUrl} width="1100" height="900" />
        </div>
      )} */}
      {/* {pdfUrl !== null && (
        <div className="pdf-viewer-container">
          <div className="pdf-iframe">
            <iframe title="PDF Viewer" src={pdfUrl} width="1100" height="900" />
          </div>
        </div>
      )}
      {pdfUrl === null && openSubsection !== null && (
        <div className="pdf-not-prepared">Document not yet prepared</div>
      )} */}
      {/* {pdfUrl && (
        <div className="pdf-viewer-container container-fluid">
          <object
            data={pdfUrl}
            type="application/pdf"
            width="100%"
            height="100%"
          >
            <p>
              It appears you don't have a PDF plugin for this browser. No
              biggie... you can{" "}
              <a href={pdfUrl}>click here to download the PDF file.</a>
            </p>
          </object>
        </div>
      )} */}
      {pdfUrl && (
        <div className="pdf-viewer-container container-fluid">
          <button className="close-button" onClick={() => setPdfUrl(null)}>
            Close
          </button>
          <object
            data={pdfUrl}
            type="application/pdf"
            width="100%"
            height="100%"
          >
            <p>
              It appears you don't have a PDF plugin for this browser. No
              biggie... you can{" "}
              <a href={pdfUrl}>click here to download the PDF file.</a>
            </p>
          </object>
        </div>
      )}
    </div>
  );
};

export default ProductTypeCIJ;