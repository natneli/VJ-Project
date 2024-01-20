// import React, { useState } from 'react';
// import './Home.css'; // Assuming you have a corresponding CSS file for styling

// const App = () => {
//   const [selectedButton, setSelectedButton] = useState(null);

//   const buttonData = {
//     'Continues Inkjet(CIJ)': 'Details about Continues Inkjet(CIJ)',
//     'Laser Marking System': 'Details about Laser Marking System',
//     'Thermal Transfer Overprints': 'Details about Thermal Transfer Overprints',
//     'Thermal Inkjets': 'Details about Thermal Inkjets',
//     'Case Coding': 'Details about Case Coding',
//     'Commercial Graphics': 'Details about Commercial Graphics',
//   };

//   const handleButtonClick = (button) => {
//     setSelectedButton(button);
//   };

//   return (
//     <div className="home-container">
//       <div className="buttons-container">
//         {Object.keys(buttonData).map((button) => (
//           <button
//             key={button}
//             onClick={() => handleButtonClick(button)}
//             className={selectedButton === button ? 'active' : ''}
//           >
//             {button}
//           </button>
//         ))}
//       </div>
//       <div className="details-container">
//         {selectedButton && <p>{buttonData[selectedButton]}</p>}
//       </div>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";
// import "./Home.css"; // Assuming you have a corresponding CSS file for styling
// import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const [selectedButton, setSelectedButton] = useState(null);
//   const navigate = useNavigate();

//   const buttonData = {
//     "Continues Inkjet(CIJ)": "Details about Continues Inkjet(CIJ)",
//     "Laser Marking System": "Details about Laser Marking System",
//     "Thermal Transfer Overprints": "Details about Thermal Transfer Overprints",
//     "Thermal Inkjets": "Details about Thermal Inkjets",
//     "Case Coding": "Details about Case Coding",
//     "Commercial Graphics": "Details about Commercial Graphics",
//   };

//   const handleButtonClick = (button) => {
//     setSelectedButton(button);
//     // Navigate to the ProductMainModels page with the selected button as a parameter
//     navigate(`/product-types-cij/${encodeURIComponent(button)}`);

    

//   };

//   return (
//     <div className="home-container">
//       <div className="buttons-container">
//         {Object.keys(buttonData).map((button) => (
//           <button
//             key={button}
//             onClick={() => handleButtonClick(button)}
//             className={selectedButton === button ? "active" : ""}
//           >
//             {button}
//           </button>
//         ))}
//       </div>
//       <div className="details-container">
//         {/* Include the ProductMainModels component */}
//         {selectedButton && <p>{buttonData[selectedButton]}</p>}
//       </div>
//     </div>
//   );
// };

// export default Home;


// import React from "react";
// import { Link } from "react-router-dom";
// import "./Home.css"; // Assuming you have a corresponding CSS file for styling

// const Home = () => {
//   const buttonData = {
//     "Continuous Inkjet(CIJ)": "Details about Continues Inkjet(CIJ)",
//     "Laser Marking System": "Details about Laser Marking System",
//     "Thermal Transfer Overprints": "Details about Thermal Transfer Overprints",
//     "Thermal Inkjets": "Details about Thermal Inkjets",
//     "Case Coding": "Details about Case Coding",
//     "Commercial Graphics": "Details about Commercial Graphics",
//   };

//   return (
//     <div className="home-container">
//       <div className="buttons-container">
//         {Object.keys(buttonData).map((button) => (
//           <Link
//             key={button}
//             to={`/cij/${encodeURIComponent(button)}`}
//             className="button"
//           >
//             {button}
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;


import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Assuming you have a corresponding CSS file for styling

const Home = () => {
  const buttonData = {
    "Continuous Inkjet(CIJ)": "Details about Continues Inkjet(CIJ)",
    "Laser Marking System": "Details about Laser Marking System",
    "Thermal Transfer Overprints": "Details about Thermal Transfer Overprints",
    "Thermal Inkjets": "Details about Thermal Inkjets",
    "Case Coding": "Details about Case Coding",
    "Commercial Graphics": "Details about Commercial Graphics",
  };

  const videojetConnectLinks = [
    {
      label: "Videojet Workflow Module Portal",
      url: "https://wfx.videojet.com",
    },
    { label: "Veralto Sharepoint", url: "https://veralto.sharepoint.com" },
    { label: "Salesforce", url: "https:/videojet.my.salesforce.com" },
    { label: "Wheels", url: "https://wheels.com" },
    { label: "Videojet Remote Service", url: "https://videojetcloud.com" },
    {
      label: "7Day Password",
      url: "https://veralto.sharepoint.com/sites/VTISP/GC/Pages/7Days.aspx",
    },
    {
      label: "Concur Expense and Travel",
      url: "https://us2.concursolutions.com/home.asp",
    },
    { label: "ADP Payroll & Time and Attendance", url: "https://my.adp.com" },
    { label: "Workday", url: "https://myworkday.com" },
    { label: "IT Support Portal", url: "https://videojettit.atlassian.net" },
    { label: "CWT", url: "https://travel.mycwt.com" },
    { label: "Link 1", url: "https://example.com/link1" },
    { label: "Link 2", url: "https://example.com/link2" },
  ];

  const appointmentManagementLinks = [
    
    { label: "Salesforce", url: "https:/videojet.my.salesforce.com" },
    { label: "Wheels", url: "https://wheels.com" },
    {
      label: "My Awaiting Acceptance Appointment",
      url: "https://idealforce.my.site.com/",
    },
    {
      label: "My service Appointments(-7/+30d)",
      url: "https://idealforce.my.site.com/",
    },
    {
      label: "My Awaiting Acceptance Appointments",
      url: "https://idealforce.my.site.com/",
    },
    {
      label: "WT01 Service Appointments",
      url: "https://idealforce.my.site.com/",
    },
    {
      label: "My Open PM Appointments",
      url: "https://idealforce.my.site.com/",
    },
    {
      label: "My service Appointments(-7/+30d)",
      url: "https://idealforce.my.site.com/",
    },
    {
      label: "My Open PM Appointments",
      url: "https://idealforce.my.site.com/",
    },
  ];

  return (
    <div className="home-container">
      <div className="buttons-container">
        {Object.keys(buttonData).map((button) => (
          <Link
            key={button}
            to={`/${getRouteName(button)}/${encodeURIComponent(button)}`}
            className="button"
          >
            {button}
          </Link>
        ))}
      </div>
      <div className="more-info">
        <div className="appointment-management-container">
          <h2>Appointment Management</h2>
          <ul>
            {appointmentManagementLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="videojet-connect-container">
          <h2>Videojet Connect</h2>
          <ul>
            {videojetConnectLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Helper function to get the corresponding route name for each button
const getRouteName = (button) => {
  switch (button) {
    case "Continuous Inkjet(CIJ)":
      return "cij";
    case "Laser Marking System":
      return "laser";
    case "Thermal Transfer Overprints":
      return "thermal-transfer";
    case "Thermal Inkjets":
      return "thermal-inkjets";
    case "Case Coding":
      return "case-coding";
    case "Commercial Graphics":
      return "commercial-graphics";
    default:
      return "";
  }
};

export default Home;
