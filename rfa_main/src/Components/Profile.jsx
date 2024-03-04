import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Profile() {
  const [user_name, setuser_name] = useState("");
  const [user_email, setuser_email] = useState("");
  const [phone1, setphone1] = useState("");
  const [password, setpassword] = useState("");

  const [id, setId] = useState(sessionStorage.getItem("user"));
  const [formErros, setFormErrros] = useState({});
  useEffect(() => {
    fatchUserName();
    console.log(id);
  }, [id]);

  const fatchUserName = async () => {
    try {
      const res = await axios.get("http://localhost:1122/rfa/user/" + id);
      console.log(res.data);
      setuser_name(res.data.user_name);
      setuser_email(res.data.user_email);
      setphone1(res.data.phone1);
      setpassword(res.data.password);
    } catch (error) {}
  };

  const submitbtn = async (e) => {
    e.preventDefault();

    try {
      const data = {
        user_name,
        user_email,
        phone1,
        password,
      };
      let res = "";
      if (id) {
        res = await axios.put("http://localhost:1122/rfa/user/" + id, data);
      }
      alert(res.data);
      console.log(res.data);
      window.location.reload();
    } catch (error) {}
  };
  const [winner, setwinner] = useState([]);
  let i = 1;
  useEffect(() => {
    getwinner();
  }, []);
  const getwinner = async () => {
    const res = await axios.get("http://localhost:1122/rfa/winner/" + id);
    setwinner(res.data);
    console.log(res.data);
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Rare Find Auctions</h2>
          <p>Profile</p>
        </div>
      </div>
      <main
        id="main"
        class="main"
        style={{ marginLeft: "100px", marginRight: "100px" }}
      >
        <section class="section profile">
          <div class="row">
            <div class="col-xl-4">
              <div class="card">
                <div class="card-body profile-card pt-4 d-flex flex-column align-items-center">
                  {/* <img
                  src={`http://localhost:1122/uploads/${img}`}
                  height={"500px"}
                  width={"500px"}
                  class="img-fluid"
                  alt="..."
                ></img> */}

                  <>
                    <h2>{user_name}</h2>
                  </>

                  {/* <h3>{job}</h3> */}
                  <div class="social-links mt-2">
                    <a href="#" class="twitter">
                      <i class="bi bi-twitter"></i>
                    </a>
                    <a href="#" class="facebook">
                      <i class="bi bi-facebook"></i>
                    </a>
                    <a href="#" class="instagram">
                      <i class="bi bi-instagram"></i>
                    </a>
                    <a href="#" class="linkedin">
                      <i class="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-8">
              <div class="card">
                <div class="card-body pt-3">
                  <ul class="nav nav-tabs nav-tabs-bordered">
                    <li class="nav-item">
                      <button
                        class="nav-link active"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-overview"
                      >
                        Overview
                      </button>
                    </li>

                    <li class="nav-item">
                      <button
                        class="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#profile-edit"
                      >
                        Edit Profile
                      </button>
                    </li>
                  </ul>
                  <div class="tab-content pt-2">
                    <div
                      class="tab-pane fade show active profile-overview"
                      id="profile-overview"
                    >
                      {/* // show profile */}
                      <>
                        <h5 class="card-title">About</h5>
                        <p class="small fst-italic">{}</p>

                        <h5 class="card-title">Profile Details</h5>
                        <div class="row">
                          <div class="col-lg-3 col-md-4 label ">Full Name</div>
                          <div class="col-lg-9 col-md-8">{user_name}</div>
                        </div>

                        <div class="row">
                          <div class="col-lg-3 col-md-4 label">Phone no.</div>
                          <div class="col-lg-9 col-md-8">{phone1}</div>
                        </div>

                        <div class="row">
                          <div class="col-lg-3 col-md-4 label">Email</div>
                          <div class="col-lg-9 col-md-8">{user_email}</div>
                        </div>

                        {/* <div class="row">
                        <div class="col-lg-3 col-md-4 label">Address</div>
                        <div class="col-lg-9 col-md-8">{buyer_address}</div>
                      </div> */}
                      </>
                    </div>
                    {/* edit profile */}
                    <>
                      <div
                        class="tab-pane fade profile-edit pt-3"
                        id="profile-edit"
                      >
                        <form>
                          <div class="row mb-3">
                            <label
                              for="profileImage"
                              class="col-md-4 col-lg-3 col-form-label"
                            >
                              Profile Image
                            </label>
                            <div class="col-md-8 col-lg-9">
                              <img
                                src="assets/img/profile-img.jpg"
                                alt="Profile"
                              />
                              {/* <div class="pt-2">
                                <a
                                  href="#"
                                  class="btn btn-primary btn-sm"
                                  title="Upload new profile image"
                                >
                                  <i class="bi bi-upload"></i>
                                </a>
                                <a
                                  href="#"
                                  class="btn btn-danger btn-sm"
                                  title="Remove my profile image"
                                >
                                  <i class="bi bi-trash"></i>
                                </a>
                              </div> */}
                              {/* <div class="col-md-6">
                                <div class="form-floating">
                                  <input
                                    type="file"
                                    class="form-control"
                                    placeholder="Profile Image"
                                    defaultValue={img}
                                    onChange={(e) =>
                                      setdescription(e.target.files[0])
                                    }
                                  />
                                  <label for="floatingPassword">
                                    Description
                                  </label>
                                </div>
                              </div> */}
                            </div>
                          </div>

                          <div class="row mb-3">
                            <label
                              for="fullName"
                              class="col-md-4 col-lg-3 col-form-label"
                            >
                              Full Name
                            </label>
                            <div class="col-md-8 col-lg-9">
                              <input
                                name="fullName"
                                type="text"
                                class="form-control"
                                id="fullName"
                                defaultValue={user_name}
                                onChange={(e) => setuser_name(e.target.value)}
                              />
                            </div>
                          </div>

                          <div class="row mb-3">
                            <label
                              for="company"
                              class="col-md-4 col-lg-3 col-form-label"
                            >
                              Email
                            </label>
                            <div class="col-md-8 col-lg-9">
                              <input
                                name="company"
                                type="text"
                                class="form-control"
                                id="company"
                                defaultValue={user_email}
                                onChange={(e) => setuser_email(e.target.value)}
                              />
                            </div>
                          </div>

                          <div class="row mb-3">
                            <label
                              for="Job"
                              class="col-md-4 col-lg-3 col-form-label"
                            >
                              Contact
                            </label>
                            <div class="col-md-8 col-lg-9">
                              <input
                                name="job"
                                type="text"
                                class="form-control"
                                id="Job"
                                defaultValue={phone1}
                                onChange={(e) => setphone1(e.target.value)}
                              />
                            </div>
                          </div>

                          <div class="row mb-3">
                            <label
                              for="Job"
                              class="col-md-4 col-lg-3 col-form-label"
                            >
                              password
                            </label>
                            <div class="col-md-8 col-lg-9">
                              <input
                                name="job"
                                type="text"
                                class="form-control"
                                id="Job"
                                defaultValue={password}
                                onChange={(e) => setpassword(e.target.value)}
                              />
                            </div>
                          </div>

                          <div class="text-center">
                            <button
                              type="submit"
                              class="button-6"
                              onClick={submitbtn}
                            >
                              Save Changes
                            </button>
                          </div>
                        </form>
                      </div>
                    </>

                    <div
                      class="tab-pane fade profile-edit pt-3"
                      id="wins"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
