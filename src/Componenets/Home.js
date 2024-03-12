// import React from "react";
// import { Link } from "react-router-dom";
// import "./Home.css"; // Assuming you have a corresponding CSS file for styling
// import sampleImage from "../Images/Sample Image1.png";

// /**
//  * Home Component
//  * This component represents the home page of the application.
//  * It includes buttons for different product types, links for appointment management,
//  * and links for Videojet Connect. It also contains a sample image.
//  */

// const Home = () => {
//   // Data for buttons representing different product types
//   const buttonData = {
//     "Continuous Inkjet(CIJ)": "Details about Continues Inkjet(CIJ)",
//     "Laser Marking System": "Details about Laser Marking System",
//     "Thermal Transfer Overprints": "Details about Thermal Transfer Overprints",
//     "Thermal Inkjets": "Details about Thermal Inkjets",
//     "Case Coding": "Details about Case Coding",
//     "Commercial Graphics": "Details about Commercial Graphics",
//   };

//   const videojetConnectLinks = [
//     {
//       label: "Videojet Workflow Module Portal",
//       url: "https://wfx.videojet.com",
//     },
//     { label: "Veralto Sharepoint", url: "https://veralto.sharepoint.com" },
//     { label: "Salesforce", url: "https:/videojet.my.salesforce.com" },
//     { label: "Wheels", url: "https://wheels.com" },
//     { label: "Videojet Remote Service", url: "https://videojetcloud.com" },
//     {
//       label: "7-Days-Password-Generator",
//       url: "https://veralto.sharepoint.com/sites/VTISP/GC/Pages/7Days.aspx",
//     },
//     {
//       label: "Concur Expense and Travel",
//       url: "https://us2.concursolutions.com/home.asp",
//     },
//     { label: "ADP Payroll & Time and Attendance", url: "https://my.adp.com" },
//     { label: "Workday", url: "https://myworkday.com" },
//     { label: "IT Support Portal", url: "https://videojettit.atlassian.net" },
//     { label: "CWT", url: "https://travel.mycwt.com" },
//     { label: "Videojet Training ", url: "https://videojet.certpointsystems.com/Portal/Login.aspx" },
//     { label: "Link 2", url: "https://example.com/link2" },
//   ];

//   const appointmentManagementLinks = [
//     {
//       label: "My Awaiting Acceptance Appointment",
//       url: "https://idealforce.my.site.com/",
//     },
//     {
//       label: "My service Appointments(-7/+30d)",
//       url: "https://idealforce.my.site.com/",
//     },
//     {
//       label: "My Awaiting Acceptance Appointments",
//       url: "https://idealforce.my.site.com/",
//     },
//     {
//       label: "WT01 Service Appointments",
//       url: "https://idealforce.my.site.com/",
//     },
//     {
//       label: "My Open PM Appointments",
//       url: "https://idealforce.my.site.com/",
//     },
//     {
//       label: "My service Appointments(-7/+30d)",
//       url: "https://idealforce.my.site.com/",
//     },
//     {
//       label: "My Open PM Appointments",
//       url: "https://idealforce.my.site.com/",
//     },
//     {
//       label: "Inventory",
//       url: "https://idealforce.my.site.com/",
//     },
//     {
//       label: "Transfer Parts",
//       url: "https://idealforce.my.site.com/",
//     },
//     {
//       label: "Return Parts",
//       url: "https://idealforce.my.site.com/",
//     },
//     {
//       label: "Leads",
//       url: "https://idealforce.my.site.com/",
//     },
//     {
//       label: "Opportunities",
//       url: "https://idealforce.my.site.com/",
//     },
//   ];

//   return (
//     <div className="home-container">
//       <div className="buttons-container">
//         {Object.keys(buttonData).map((button) => (
//           <Link
//             key={button}
//             to={`/${getRouteName(button)}/${encodeURIComponent(button)}`}
//             className="buttons"
//           >
//             <span>{button}</span>
//           </Link>
//         ))}
//       </div>
//       <div className="more-info">
//         <div className="appointment-management-container">
//           <h2>Appointment Management</h2>
//           <ul>
//             {appointmentManagementLinks.map((link, index) => (
//               <li key={index}>
//                 <a href={link.url} target="_blank" rel="noopener noreferrer">
//                   {link.label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <img src={sampleImage} alt="" className="sample-image" />
//         <div className="videojet-connect-container">
//           <h2>Videojet Connect</h2>
//           <ul>
//             {videojetConnectLinks.map((link, index) => (
//               <li key={index}>
//                 <a href={link.url} target="_blank" rel="noopener noreferrer">
//                   {link.label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Helper function to get the corresponding route name for each button
// const getRouteName = (button) => {
//   switch (button) {
//     case "Continuous Inkjet(CIJ)":
//       return "cij";
//     case "Laser Marking System":
//       return "laser";
//     case "Thermal Transfer Overprints":
//       return "thermal-transfer";
//     case "Thermal Inkjets":
//       return "thermal-inkjets";
//     case "Case Coding":
//       return "case-coding";
//     case "Commercial Graphics":
//       return "commercial-graphics";
//     default:
//       return "";
//   }
// };

// export default Home;


// Responsive

import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Assuming you have a corresponding CSS file for styling
// import sampleImage from "../Images/Sample Image1.png";

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
    {
      label: "Inventory",
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
            className="buttons"
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
        {/* <div>
          <img src={sampleImage} alt="" className="sample-image" />
        </div> */}

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