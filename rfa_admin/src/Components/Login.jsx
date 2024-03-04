import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [admin_contact, setphone] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");

  const submitHandle = async (e) => {
    e.preventDefault();
    //alert(role_id);
    try {
      const res = await axios.get("http://localhost:1122/rfa/login", {
        params: {
          admin_contact: admin_contact,
          password: password,
        },
      });

      if (res.data > 0) {
        setError("");
        sessionStorage.setItem("user", res.data);
        window.location.reload();
      } else {
        setError("Invalid UserId or Password");
      }
    } catch (error) {}
  };

  return (
    <main>
      <div class="container">
        <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div class="d-flex justify-content-center py-4">
                  <a
                    href="index.html"
                    class="logo d-flex align-items-center w-auto"
                  >
                    <img src="assets/img/logo.png" alt="" />
                    <span class="d-none d-lg-block">Rare Find Auctions</span>
                  </a>
                </div>

                <div class="card mb-3">
                  <div class="card-body">
                    <div class="pt-4 pb-2">
                      <h5 class="card-title text-center pb-0 fs-4">
                        Login to Your Account
                      </h5>
                      <p class="text-center small">
                        Enter your phone & password to login
                      </p>
                    </div>

                    <form class="row g-3 needs-validation" novalidate>
                      <div class="col-12">
                        <label for="yourUsername" class="form-label">
                          Phone no.
                        </label>
                        <div class="input-group has-validation">
                          <span class="input-group-text" id="inputGroupPrepend">
                            +91
                          </span>
                          <input
                            type="text"
                            name="username"
                            class="form-control"
                            id="yourUsername"
                            onChange={(e) => setphone(e.target.value)}
                            required
                          />
                          <div class="invalid-feedback">
                            Please enter your Phone no.
                          </div>
                        </div>
                      </div>

                      <div class="col-12">
                        <label for="yourPassword" class="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          class="form-control"
                          id="yourPassword"
                          onChange={(e) => setpassword(e.target.value)}
                          required
                        />
                        {/* 
                        <div class="invalid-feedback" onClick={setError}>
                          // Please enter your password! //
                        </div> */}
                      </div>

                      <div class="col-12">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            name="remember"
                            value="true"
                            id="rememberMe"
                          />
                          <label class="form-check-label" for="rememberMe">
                            Remember me
                          </label>
                        </div>
                      </div>
                      <div class="col-12">
                        <button
                          class="btn btn-primary w-100"
                          type="submit"
                          onClick={submitHandle}
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div class="credits">
                  Designed by <a href="https://bootstrapmade.com/">KK BROS</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
