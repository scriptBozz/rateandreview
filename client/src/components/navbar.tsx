import React from "react";
import { Link } from "react-router-dom";


export default function Navbar(){
  return (
    <nav className="top-nav">
      <div className="logo">WhatIorderedReview</div>
      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>

        <Link to={"/about"}>
          <li>About </li>
        </Link>

        <Link to={"/businesses"}>
          <li>Businesses</li>
        </Link>
        <Link to={"/blog"}>
          <li>Blog</li>
        </Link>

        <Link to={"/login"}>
          <li>Login</li>
        </Link>
      </ul>
    </nav>
  );
};


