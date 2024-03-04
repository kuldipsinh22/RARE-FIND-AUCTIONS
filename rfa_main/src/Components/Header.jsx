import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Header() {
  const [u_name, setName] = useState("");
  const [id, setId] = useState(sessionStorage.getItem("user"));

  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.clear();
    navigate("/");
    window.location.reload();
  };
  return (
    <header
      id="header"
      class="fixed-top"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
    >
      <div class="container d-flex align-items-center justify-content-lg-between">
        <h1 class="logo me-auto me-lg-0">
          <a href="index.html">
            RFA<span>.</span>
          </a>
        </h1>

        <nav id="navbar" class="navbar order-last order-lg-0">
          <ul>
            <li>
              <Link class="nav-link scrollto" to="/Home">
                Home
              </Link>
            </li>

            <li>
              <Link class="nav-link scrollto" to="/Product">
                Products
              </Link>
            </li>

            <li>
              <Link class="nav-link scrollto" to="/About">
                About
              </Link>
            </li>

            <li>
              <Link class="nav-link scrollto" to="/ContactUs">
                Contact
              </Link>
            </li>
            <li class="dropdown">
              <a href="#">
                <span>Settings</span> <i class="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li>
                  <Link class="nav-link scrollto" to={`/Profile/` + id}>
                    Profile
                  </Link>
                </li>

                <li>
                  <Link class="nav-link scrollto" to={`/Add_product`}>
                    Add product
                  </Link>
                </li>

                <li>
                  <a href="#" onClick={logout}>
                    Sign Out
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}
