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

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ProductMainModels from './ProductMainModels';
import './Home.css';

const Home = ({ buttonData }) => {
  return (
    <div className="home-container">
      <div className="buttons-container">
        {Object.keys(buttonData).map((button) => (
          <Link
            key={button}
            to={`/product-main-models/${encodeURIComponent(button)}`}
            className="button"
          >
            {button}
          </Link>
        ))}
      </div>
      <div className="details-container">
        <Routes>
          {Object.keys(buttonData).map((button) => (
            <Route
              key={button}
              path={`/product-main-models/${encodeURIComponent(button)}`}
              element={<ProductMainModels buttonText={buttonData[button]} />}
            />
          ))}
        </Routes>
      </div>
    </div>
  );
};

export default Home;