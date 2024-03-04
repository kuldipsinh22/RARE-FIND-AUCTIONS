import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function Add_product() {
  const [product_name, setproduct_name] = useState("");
  const [description, setdescription] = useState("");
  const [user_id, setuser_id] = useState("");
  const [starting_bid, setstarting_bid] = useState("");
  const [deadline, setdeadline] = useState("");
  const [img, setimg] = useState("");
  const [status, setstatus] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const id = location.pathname.split("/")[2]
    ? location.pathname.split("/")[2]
    : "";
  useEffect(() => {
    console.log(id);
    if (id) {
      getproduct();
    }
  }, []);

  const getproduct = async () => {
    const url = "http://localhost:1122/rfa/product/" + id;
    console.log(url);
    const res = await axios.get(url);
    console.log(res.data);
    setproduct_name(res.data.product_name);
    setdescription(res.data.description);
    setuser_id(res.data.user_id);
    setstarting_bid(res.data.starting_bid);
    setdeadline(res.data.deadline);
    setimg(res.data.img);
    setstatus(res.data.status);
  };

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

    if (id) {
      res = await axios.put(
        "http://localhost:1122/rfa/product/" + id,
        formData
      );
    } else {
      res = await axios.post("http://localhost:1122/rfa/product", formData);
    }
    console.log(res.data);
    alert(res.data);
    navigate("/product");
  };

  return (
    <main id="main" class="main">
      <div class="card">
        <div class="card-body">
          <h1 class="card-title">Add Product here</h1>
          <form class="row g-3">
            <div class="col-md-6">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  placeholder="name"
                  defaultValue={product_name}
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
                  defaultValue={description}
                  onChange={(e) => setdescription(e.target.value)}
                />
                <label for="floatingPassword">Description</label>
              </div>
            </div>

            <div class="col-md-6">
              <div class="col-md-12">
                <div class="form-floating">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Email"
                    defaultValue={user_id}
                    onChange={(e) => setuser_id(e.target.value)}
                  />
                  <label for="floatingCity">User id</label>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Address"
                  defaultValue={starting_bid}
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
                  defaultValue={deadline}
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
                  defaultValue={img}
                  onChange={(e) => setimg(e.target.files[0])}
                />
                <label for="floatingZip">Image</label>
              </div>
            </div>

            <div class="col-6">
              <label for="cars" class="form-label">
                Choose a Role:
              </label>

              <select
                name="cars"
                id="cars"
                class="form-control"
                onChange={(e) => setstatus(e.target.value)}
              >
                <option>Choose</option>

                <option value="0">Inactive</option>
                <option value="1">Active</option>
              </select>
            </div>

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
