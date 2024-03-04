import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Product() {
  const [product, setproduct] = useState([]);

  let i = 1;
  useEffect(() => {
    getproducts();
  }, []);
  const getproducts = async () => {
    const res = await axios.get("http://localhost:1122/rfa/product");
    setproduct(res.data);
    console.log(res.data);
  };
  const deleteproduct = async (id) => {
    let ans = window.confirm("are you sure?");
    if (ans) {
      const res = await axios.delete("http://localhost:1122/rfa/product/" + id);
      console.log(res.data);
      alert(res.data);
      getproducts();
    }
  };
  return (
    <div>
      <main id="main" class="main">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">product</h5>

            <button class="button-39" role="button">
              <Link to={`/Add_product/`}>Add product</Link>
            </button>

            <table class="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Product name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Base bid amount</th>
                  <th scope="col">Product Image</th>
                </tr>
              </thead>
              <tbody>
                {product.map((product) => (
                  <tr>
                    <th scope="row">{i++}</th>
                    <td>{product.product_name}</td>
                    <td>{product.description}</td>
                    <td>{product.starting_bid}</td>
                    <td>
                      <img
                        src={`http://localhost:1122/uploads/${product.img}`}
                        height={"200px"}
                        width={"200px"}
                      ></img>
                    </td>
                    <td>
                      <button class="button-39" role="button">
                        <Link to={`/Add_product/` + product.product_id}>
                          Edit
                        </Link>
                      </button>
                      &nbsp; &nbsp; &nbsp;
                      <button
                        onClick={() => deleteproduct(product.product_id)}
                        class="button-40"
                        role="button"
                      >
                        DELETE
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
