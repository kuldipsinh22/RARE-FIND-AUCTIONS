import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Win_product() {
  const [win, setWins] = useState([]);

  const [id, setId] = useState(sessionStorage.getItem("user"));

  let i = 1;
  useEffect(() => {
    getwinuser();
  }, []);
  const getwinuser = async () => {
    const res = await axios.get("http://localhost:1122/rfa/winner/" + id);
    setWins(res.data);
    console.log(res.data);
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Rare Find Auctions</h2>
          <p>Your Winning products</p>
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
          {win.map((win) => (
            <tr>
              <th scope="row">{i++}</th>
              <td>{win.user_name}</td>
              {/* <td>{win.phone1}</td> */}
              <td>{win.product_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
