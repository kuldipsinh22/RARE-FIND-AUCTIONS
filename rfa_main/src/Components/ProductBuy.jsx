import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function ProductBuy() {
  const [product_name, setproduct_name] = useState("");
  const [description, setdescription] = useState("");
  const [starting_bid, setstarting_bid] = useState("");
  const [deadline, setdeadline] = useState("");
  const [bid_amount, setbid_amount] = useState("");
  const [product_id, setproduct_id] = useState("");
  const [img, setimg] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const navigate = useNavigate();

  const [user_id, setId] = useState(sessionStorage.getItem("user"));

  const location = useLocation();
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
    console.log("response", res.data);
    setproduct_name(res.data.product_name);
    setdescription(res.data.description);
    setstarting_bid(res.data.starting_bid);
    setdeadline(res.data.deadline);
    setimg(res.data.img);
  };

  const validate = () => {
    const error = {};
    if (parseInt(bid_amount) < parseInt(starting_bid)) {
      error.bid_amount = "Bid amount should be greater than starting bid";
    }
    return error;
  };

  const submitbtn = async (e) => {
    e.preventDefault();
    setFormErrors(validate());
    if (parseInt(bid_amount) > parseInt(starting_bid)) {
      const data = {
        product_id: id,
        user_id: user_id,
        bid_amount,
      };
      let res = "";

      {
        res = await axios.post("http://localhost:1122/rfa/bid", data);
      }
      alert(res.data);
      navigate("/product");
    }
  };

  const [bid, setBid] = useState([]);
  let i = 1;
  useEffect(() => {
    getbiduser();
  }, []);
  const getbiduser = async () => {
    const res = await axios.get("http://localhost:1122/rfa/bid/" + id);
    setBid(res.data);
    console.log(res.data);
  };

  return (
    <div class="main-wrapper" style={{ marginTop: "70px" }}>
      <div class="container">
        <div class="product-div">
          <div class="product-div-left">
            <div class="img-container">
              <img
                src={`http://localhost:1122/uploads/${img}`}
                // height={"900px"}
                // width={"900px"}
                class="img-fluid"
                alt="..."
              ></img>
            </div>
          </div>
          <div class="product-div-right">
            <span class="product-name">{product_name}</span>
            <span class="product-price">Base bid : {starting_bid}₹</span>
            <div class="product-rating">
              <span>
                <i class="fas fa-star"></i>
              </span>
              <span>
                <i class="fas fa-star"></i>
              </span>
              <span>
                <i class="fas fa-star"></i>
              </span>
              <span>
                <i class="fas fa-star"></i>
              </span>
              <span>
                <i class="fas fa-star-half-alt"></i>
              </span>
            </div>
            <p class="product-description">{description}</p>
            <div class="row">
              <div class="col-md-6 form-group mb-2">
                Bid amount -
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter your bid money"
                  onChange={(e) => setbid_amount(e.target.value)}
                  required
                />
                <p style={{ color: "red" }}>{formErrors.bid_amount}</p>
              </div>
            </div>
            {/* <div class="row">
              <div class="col-md-6 form-group ">
                Product ID -
                <input
                  type="text"
                  class="form-control"
                  placeholder="Product id"
                  defaultValue={id}
                  onChange={(e) => setproduct_id(e.target.value)}
                  required
                />
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 form-group ">
                Your ID -
                <input
                  type="text"
                  class="form-control"
                  placeholder="Product id"
                  defaultValue={user_id}
                  onChange={(e) => setbuyer_id(e.target.value)}
                  required
                />
              </div>
            </div> */}
            <div class="btn-groups">
              <button type="button" class="add-cart-btn" onClick={submitbtn}>
                <i class="fas fa-shopping-cart"></i>Bid now
              </button>
            </div>
          </div>
          <table class="table table-borderless">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Bid</th>
              </tr>
            </thead>
            <tbody>
              {bid.map((bid) => (
                <tr>
                  <th scope="row">{i++}</th>
                  <td>{bid.user_name}</td>
                  {/* <td>{bid.phone1}</td> */}
                  <td>{bid.bid_amount}</td>``
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
