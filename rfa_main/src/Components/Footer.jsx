import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="footer-info">
                <h3>
                  Gp<span>.</span>
                </h3>
                <p>
                  Sardarnagar <br />
                  Bhavnagar, Gujarat, India
                  <br />
                  <br />
                  <strong>Phone:</strong> +91 9999999999
                  <br />
                  <strong>Email:</strong> info@example.com
                  <br />
                </p>
              </div>
            </div>

            <div class="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <Link to="/Home">Home</Link>
                </li>
                <li>
                  <i class="bx bx-chevron-right"></i>{" "}
                  <Link to="/About">About Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>AA</span>
          </strong>
          . All Rights Reserved
        </div>
        <div class="credits">
          Designed by <a href="">AA bros</a>
        </div>
      </div>
    </footer>
  );
}
