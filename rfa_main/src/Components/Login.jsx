import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [phone1, setphone] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");
  // const [role_id, setRole] = useState(0);

  const submitHandle = async (e) => {
    e.preventDefault();
    //alert(role_id);
    try {
      const res = await axios.get("http://localhost:1122/rfa/main_login", {
        params: {
          // role_id: role_id,
          phone1: phone1,
          password: password,
        },
      });

      if (res.data > 0) {
        setError("");
        sessionStorage.setItem("user", res.data);
        // sessionStorage.setItem("role", role_id);

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
                      {/* <div class="col-12">
                        <label for="cars" class="form-label">
                          Choose a Role:
                        </label>

                        <select
                          name="cars"
                          id="cars"
                          class="form-control"
                          onChange={(e) => setRole(e.target.value)}
                        >
                          <option value="0">Select Role</option>
                          <option value="1">Buyer</option>
                          <option value="2">Seller</option>
                        </select>
                      </div> */}
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
                      <div class="col-12">
                        <p class="small mb-0">
                          Don't have account?{" "}
                          <Link to="/Teacher_reg">Create an account</Link>
                        </p>
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
