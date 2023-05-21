import React from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/netlogo.png";
import "./Header.css"

export default function Header(props) {
  const navigate = useNavigate();
  return (
    <header className="flex a-center j-between">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <button onClick={() => navigate(props.login ? "/login" : "/signup")}>
        {props.login ? "Log In" : "Sign Up"}
      </button>
    </header>
  );
}



