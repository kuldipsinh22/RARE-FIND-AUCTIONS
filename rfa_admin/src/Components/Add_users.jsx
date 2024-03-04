import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function Add_users() {
  const [user_name, setuser_name] = useState("");
  const [user_email, setuser_email] = useState("");
  const [phone1, setphone1] = useState("");
  const [password, setpassword] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const id = location.pathname.split("/")[2]
    ? location.pathname.split("/")[2]
    : "";
  useEffect(() => {
    console.log(id);
    if (id) {
      getUser();
    }
  }, []);

  const getUser = async () => {
    const url = "http://localhost:1122/rfa/user/" + id;
    console.log(url);
    const res = await axios.get(url);
    console.log(res.data);
    setuser_name(res.data.user_name);
    setuser_email(res.data.user_email);
    setphone1(res.data.phone1);
    setpassword(res.data.password);
  };

  const submitbtn = async (e) => {
    e.preventDefault();

    const data = {
      user_name,
      user_email,
      phone1,
      password,
    };
    let res = "";
    if (id) {
      res = await axios.put("http://localhost:1122/rfa/user/" + id, data);
    } else {
      res = await axios.post("http://localhost:1122/rfa/user", data);
    }
    alert(res.data);
    navigate("/Users");
  };
  return (
    <main id="main" class="main">
      <div class="card">
        <div class="card-body">
          <h1 class="card-title">Add User here</h1>
          <form class="row g-3">
            <div class="col-md-4">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingName"
                  defaultValue={user_name}
                  onChange={(e) => setuser_name(e.target.value)}
                />
                <label for="floatingName">Name</label>
              </div>
            </div>

            <div class="col-md-4">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  defaultValue={user_email}
                  onChange={(e) => setuser_email(e.target.value)}
                />
                <label for="floatingPassword">Email</label>
              </div>
            </div>

            <div class="col-md-4">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  defaultValue={phone1}
                  onChange={(e) => setphone1(e.target.value)}
                />
                <label for="floatingCity">Contact</label>
              </div>
            </div>

            <div class="col-md-4">
              <div class="form-floating">
                <input
                  type="Email"
                  class="form-control"
                  defaultValue={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
                <label for="floatingZip">Password</label>
              </div>
            </div>

            {/* <div class="col-md-4">
              <div class="form-floating">
                <input
                  type="Email"
                  class="form-control"
                  defaultValue={seller_address}
                  onChange={(e) => setseller_address(e.target.value)}
                />
                <label for="floatingZip">Address</label>
              </div>
            </div> */}

            <div class="text-center">
              <button type="submit" class="btn btn-primary" onClick={submitbtn}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
