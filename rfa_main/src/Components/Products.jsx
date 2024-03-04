import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Products() {
  const [product, setProduct] = useState([]);
  const [status, setstatus] = useState("");
  const [id, setId] = useState(sessionStorage.getItem("user"));

  let i = 1;
  useEffect(() => {
    getProduct1();
  }, []);
  const getProduct1 = async () => {
    const res = await axios.get("http://localhost:1122/rfa/Product?front=1");
    setProduct(res.data);
    console.log(res.data);
  };

  // const getProduct1 = async () => {
  //   const res = await axios.get("http://localhost:1122/rfa/product");
  //   setProduct(res.data);
  //   console.log(res.data);
  // };
  return (
    <div style={{ marginTop: "100px" }}>
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Rare Auctions</h2>
          <p>Check our awailable auctions</p>
        </div>
      </div>

      <div class="container">
        <div class="row">
          {product.map((product) => (
            <div
              class="flex col-sm-8 col-md-6 col-lg-3"
              style={{
                marginBottom: "30px",
              }}
            >
              <div class="card">
                <img
                  src={`http://localhost:1122/uploads/${product.img}`}
                  height={"500px"}
                  width={"500px"}
                  class="img-fluid"
                  alt="..."
                ></img>
                <div class="card-img-overlay d-flex justify-content-end">
                  <a href="#" class="card-link text-danger like">
                    <i class="fas fa-heart"></i>
                  </a>
                </div>
                <div class="card-body">
                  <h4 class="card-title">{product.product_name}</h4>

                  <p class="card-text">{product.seller_name}</p>

                  <div class="buy d-flex justify-content-between align-items-center">
                    <div class="price text-success">
                      <h5 class="mt-4">
                        Starting bid ={">"} Rs.{product.starting_bid}
                      </h5>
                    </div>
                  </div>
                  <button
                    class="button-28"
                    role="button"
                    style={{ marginTop: "10px" }}
                  >
                    <Link to={`/ProductBuy/` + product.product_id}>
                      Bid Now
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
