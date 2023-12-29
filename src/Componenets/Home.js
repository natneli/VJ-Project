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

import React, { useState } from "react";
import "./Home.css"; // Assuming you have a corresponding CSS file for styling
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const navigate = useNavigate();

  const buttonData = {
    "Continues Inkjet(CIJ)": "Details about Continues Inkjet(CIJ)",
    "Laser Marking System": "Details about Laser Marking System",
    "Thermal Transfer Overprints": "Details about Thermal Transfer Overprints",
    "Thermal Inkjets": "Details about Thermal Inkjets",
    "Case Coding": "Details about Case Coding",
    "Commercial Graphics": "Details about Commercial Graphics",
  };

  const handleButtonClick = (button) => {
    setSelectedButton(button);
    // Navigate to the ProductMainModels page with the selected button as a parameter
    navigate(`/product-types-cij/${encodeURIComponent(button)}`);
  };

  return (
    <div className="home-container">
      <div className="buttons-container">
        {Object.keys(buttonData).map((button) => (
          <button
            key={button}
            onClick={() => handleButtonClick(button)}
            className={selectedButton === button ? "active" : ""}
          >
            {button}
          </button>
        ))}
      </div>
      <div className="details-container">
        {/* Include the ProductMainModels component */}
        {selectedButton && <p>{buttonData[selectedButton]}</p>}
      </div>
    </div>
  );
};

export default Home;
