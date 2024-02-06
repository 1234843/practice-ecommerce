import React, { useState, useEffect } from "react";
import "../components/Header.css";
import logo from "../logo.svg";
import Home from "./Home";
import Male from "./Male";
import Female from "./Female";
import Cosmetics from "./Cosmetics";
import Signup from "./Signup";

const Header = ({}) => {
  const [activeState, setActiveState] = useState("Home");
  //   useEffect(() => {
  //     set();
  //   }, []);

  useEffect(() => {
    const renderComponent = () => {
        console.log(activeState)
      switch (activeState) {
        case "Home":
          return <Home />;
        case "Male":
          return <Male />;
        case "Female":
          return <Female />;
        case "Cosmetics":
          return <Cosmetics />;
        case "Signup":
          return <Signup />;
        default:
          return <Home />;
      }
    };
  
    // You can do any other side effects or cleanup here if needed
    
    // Make sure to include all dependencies in the dependencies array
  }, []);

  return (
    <>
      <div className="header">
        <img className="App-logo" src={logo} alt="logo" />
        <input className="search-box"type="text" name="search" id="search" placeholder="Search" />

        <nav>
          <ul className="nav">
            <li onClick={() => setActiveState("Home")}>Home</li>

            <li onClick={() => setActiveState("Male")}>Male</li>

            <li onClick={() => setActiveState("Female")}>Female</li>

            <li onClick={() => setActiveState("Cosmetics")}>Cosmetics</li>

            <li onClick={() => setActiveState("Signup")}> Signup</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
