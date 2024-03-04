import { Link } from "react-router-dom";

export default function F_header() {
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
              <Link class="nav-link scrollto" to="/F_product">
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
            <li>
              <Link class="nav-link scrollto" to="/Login">
                Login
              </Link>
            </li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}
