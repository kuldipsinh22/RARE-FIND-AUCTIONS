import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function Add_product() {
  const [product_name, setproduct_name] = useState("");
  const [description, setdescription] = useState("");
  const [starting_bid, setstarting_bid] = useState("");
  const [deadline, setdeadline] = useState("");
  const [img, setimg] = useState("");
  const [status, setstatus] = useState("");
  const [user_id, setId] = useState(sessionStorage.getItem("user"));

  const submitbtn = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("product_name", product_name);
    formData.append("description", description);
    formData.append("user_id", user_id);
    formData.append("starting_bid", starting_bid);
    formData.append("deadline", deadline);
    formData.append("img", img);
    formData.append("status", status);
    let res = "";
    console.log(formData);

    res = await axios.post("http://localhost:1122/rfa/product", formData);

    console.log(res.data);
    alert(res.data);
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Rare Find Auctions</h2>
          <p>Add your product here</p>
        </div>
      </div>
      <main
        id="main"
        class="main"
        style={{ marginLeft: "100px", marginRight: "100px" }}
      >
        <div class="card">
          <div class="card-body">
            <form class="row g-3">
              <div class="col-md-6">
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="name"
                    onChange={(e) => setproduct_name(e.target.value)}
                  />
                  <label for="floatingName">Product name</label>
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Contact"
                    onChange={(e) => setdescription(e.target.value)}
                  />
                  <label for="floatingPassword">Description</label>
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Address"
                    onChange={(e) => setstarting_bid(e.target.value)}
                  />
                  <label for="floatingZip">Starting bid</label>
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Password"
                    onChange={(e) => setdeadline(e.target.value)}
                  />
                  <label for="floatingZip">Deadline</label>
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-floating">
                  <input
                    type="file"
                    class="form-control"
                    placeholder="Image"
                    onChange={(e) => setimg(e.target.files[0])}
                  />
                  <label for="floatingZip">Image</label>
                </div>
              </div>

              <div class="text-center">
                <button
                  type="submit"
                  class="btn btn-primary"
                  onClick={submitbtn}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
