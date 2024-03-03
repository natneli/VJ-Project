import React, { useContext, useEffect, useState } from "react";
import "./Login.css";
import { UserContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { axiosInstance } from "../Utility/axios";
import { jwtDecode } from "jwt-decode";
import inkDrops from "../Images/Ink Drops.png"
function Login() {
    const [userData, setUserData] = useContext(UserContext);
    const [type, setType] = useState("password");
    const [response, setResponse] = useState();
    const [icon, setIcon] = useState(eyeOff);
    const [form, setform] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    useEffect(() => {
        if (userData && userData.user) {
        navigate("/home");
        }
    }, [userData, navigate]);

    // useEffect(() => {
    //   if (userData.user) {
    //     navigate("/home");
    //   }
    // }, [userData, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const loginRes = await axios
            .post("http://localhost:5004/user/login", {
            email: form.email,
            password: form.password,
            })
            .then((data) => {
            console.log(data.data);
            if (data.data.token === undefined) {
                setResponse(data.data);
            } else {
                let decodedToken = jwtDecode(data.data.token);
                setUserData({
                token: data.data.token,
                user: decodedToken.display_name,
                });
                localStorage.setItem("token", data.data.token);
                navigate("/home");
            }
            });
        } catch (error) {
        console.log(error.message);
        }
    };
    let handleChange = (e) => {
        switch (e.target.name) {
        case "user_email":
            setform((pre) => {
            return { ...pre, email: e.target.value };
            });
            break;
        case "user_password":
            setform((pre) => {
            return { ...pre, password: e.target.value };
            });
            break;
        default:
            break;
        }
    };
    const HandleIconChange = () => {
        // event listenforPassworder function
        if (type === "password") {
        setIcon(eye);
        setType("text");
        } else {
        setIcon(eyeOff);
        setType("password");
        }
    };

    console.log(userData);
    if (response) {
        return (
        <div className="forSuccessPa">
            <h1 className="thankYou">{response.messageToTheFront}</h1>
            <a className="thankYouAnch" href={response.navigation}>
            {response.messageToUser}
            </a>
        </div>
        );
    } else {
        return (
            <div className="container py-5 d-md-flex justify-content-between login_container">
                <div className="main col-12 col-md-6 me-md-2 p-5 d-flex flex-column justify-content-center">
                <p className="p1">Videojet Service Information System</p>
                <p className="p2 text-center">
                    Don't have an account? <br />
                    <Link to="/signup" className="a3">
                    {" "}
                    Create a new account
                    </Link>
                </p>
                <form onSubmit={handleSubmit}>
                    <input
                    className="in1"
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    required
                    autoComplete="new-password"
                    onChange={handleChange}
                    />
                    <input
                    className="in1"
                    type={type}
                    name="user_password"
                    placeholder="Your Password"
                    required
                    autoComplete="new-password"
                    onChange={handleChange}
                    />
                    <span className="showHide1">
                    <Icon
                        icon={icon}
                        size={20}
                        onClick={HandleIconChange}
                        className="iconss"
                    />
                    </span>
                    <button className="btn1">submit</button>
                </form>
                <Link to="/forgotPass" className="a3 a1">
                    Forgot password ?
                </Link>
                <br />
                <Link to="/signup" className="a3 a1 my-3">
                    Click Here To Create an Account?
                </Link>
                </div>
                <div className="about">
                <div>
                    <img src={inkDrops} alt="" className="about-image" />
                </div>
                <div className="sideNote2 container col-12 col-md-6 ms-md-2">
                    <p className="compInfo">
                    Videojet coding equipment can print and mark directly on
                    glass, plastic, metal, flexible film, and fiber-based
                    materials
                    </p>
                </div>
                </div>
            </div>
        );
    }
}

export default Login;

{
  /* <div className="container me-5 vh-100"> */
}
