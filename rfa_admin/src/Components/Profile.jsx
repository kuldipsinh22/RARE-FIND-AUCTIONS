import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Profile() {
  //   const [admin, setAdmin] = useState([]);
  const [admin_name, setadmin_name] = useState("");
  const [admin_contact, setadmin_contact] = useState("");
  const [admin_email, setadmin_email] = useState("");
  const [admin_about, setadmin_about] = useState("");
  const [password, setpassword] = useState("");
  const [img, setimg] = useState("");

  const [id, setId] = useState(sessionStorage.getItem("user"));

  //   const id = location.pathname.split("/")[2]
  //     ? location.pathname.split("/")[2]
  //     : "";

  useEffect(() => {
    console.log(id);
    if (id) {
      getAdmin();
    }
  }, []);
  const getAdmin = async () => {
    const url = "http://localhost:1122/rfa/admin/" + id;
    console.log(url);
    const res = await axios.get(url);
    console.log(res.data);
    setadmin_name(res.data.admin_name);
    setadmin_contact(res.data.admin_contact);
    setadmin_email(res.data.admin_email);
    setadmin_about(res.data.admin_about);
    setpassword(res.data.password);
    setimg(res.data.img);
  };

  const submitbtn = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("admin_name", admin_name);
    formData.append("admin_contact", admin_contact);
    formData.append("admin_email", admin_email);
    formData.append("admin_about", admin_about);
    formData.append("password", "password");
    formData.append("img", "img");
    let res = "";
    if (id) {
      res = await axios.put("http://localhost:1122/rfa/admin/" + id, formData);
    }
    alert(res.data);
    window.location.reload();
  };
  return (
    <main id="main" class="main">
      <div class="pagetitle">
        <h1>Profile</h1>
      </div>

      <section class="section profile">
        <div class="row">
          <div class="col-xl-4">
            <div class="card">
              <div class="card-body profile-card pt-4 d-flex flex-column align-items-center">
                <img
                  src="assets/img/profile-img.jpg"
                  alt="Profile"
                  class="rounded-circle"
                />

                <h2>{admin_name}</h2>

                <h3>Admin</h3>
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
                    <h5 class="card-title">About</h5>
                    <p class="small fst-italic">{admin_about}</p>

                    <h5 class="card-title">Profile Details</h5>

                    <div class="row">
                      <div class="col-lg-3 col-md-4 label ">Full Name</div>
                      <div class="col-lg-9 col-md-8">{admin_name}</div>
                    </div>

                    <div class="row">
                      <div class="col-lg-3 col-md-4 label">Email</div>
                      <div class="col-lg-9 col-md-8">{admin_email}</div>
                    </div>

                    <div class="row">
                      <div class="col-lg-3 col-md-4 label">Contact</div>
                      <div class="col-lg-9 col-md-8">{admin_contact}</div>
                    </div>
                  </div>

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
                            src={`http://localhost:1122/uploads/${img}`}
                            height={"200px"}
                            width={"200px"}
                          ></img>
                          <div class="pt-2">
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
                          </div>
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
                            defaultValue={admin_name}
                            onChange={(e) => setadmin_name(e.target.value)}
                          />
                        </div>
                      </div>

                      <div class="row mb-3">
                        <label
                          for="Phone"
                          class="col-md-4 col-lg-3 col-form-label"
                        >
                          Phone
                        </label>
                        <div class="col-md-8 col-lg-9">
                          <input
                            name="phone"
                            type="text"
                            class="form-control"
                            id="Phone"
                            defaultValue={admin_contact}
                            onChange={(e) => setadmin_contact(e.target.value)}
                          />
                        </div>
                      </div>

                      <div class="row mb-3">
                        <label
                          for="Email"
                          class="col-md-4 col-lg-3 col-form-label"
                        >
                          Email
                        </label>
                        <div class="col-md-8 col-lg-9">
                          <input
                            name="email"
                            type="email"
                            class="form-control"
                            id="Email"
                            defaultValue={admin_email}
                            onChange={(e) => setadmin_email(e.target.value)}
                          />
                        </div>
                      </div>

                      <div class="row mb-3">
                        <label
                          for="Address"
                          class="col-md-4 col-lg-3 col-form-label"
                        >
                          About
                        </label>
                        <div class="col-md-8 col-lg-9">
                          <input
                            name="about"
                            type="text"
                            class="form-control"
                            id="Address"
                            defaultValue={admin_about}
                            onChange={(e) => setadmin_about(e.target.value)}
                          />
                        </div>
                      </div>

                      <div class="row mb-3">
                        <label
                          for="Twitter"
                          class="col-md-4 col-lg-3 col-form-label"
                        >
                          Password
                        </label>
                        <div class="col-md-8 col-lg-9">
                          <input
                            name="Password"
                            type="password"
                            class="form-control"
                            id="Password"
                            defaultValue={password}
                            onChange={(e) => setpassword(e.target.value)}
                          />
                        </div>
                      </div>

                      <div class="text-center">
                        <button
                          type="submit"
                          class="btn btn-primary"
                          onClick={submitbtn}
                        >
                          Save Changes
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
