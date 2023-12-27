import './App.css';
import Header from './Componenets/Header';
import Home from './Componenets/Home';
import ProductMainModels from './Componenets/ProductMainModels';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import SignUp from "./pages/signUp/SignUp.js";
// import Login from "./pages/Login/Login.js";
// import Home from "./pages/Home/Home.js";
// import Answer from "./pages/answer/Answer";
// import Question from "./pages/Question/Question";
// import ForGotEmail from "./pages/ForGotPasswordForEmail/ForGotEmail";
// import PassWordUpdatePage from "./pages/passWordUpdatePage/PassUpdate";
// import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/product-main-models" element={<ProductMainModels />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/question" element={<Question />} />
          <Route path="/answer/:question_id/:user_id" element={<Answer />} />
          <Route path="/forgotPass" element={<ForGotEmail />} />
          <Route
            path="/user/updatePassword/:user_id"
            element={<PassWordUpdatePage />}
          />
          {/* Add a catch-all route for unknown paths */}
          {/* <Route path="*" element={<Navigate to="/" />} />  */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

