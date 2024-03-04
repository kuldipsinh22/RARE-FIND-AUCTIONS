import { db } from "../db.js";

// export const getproducts1 = (req, res) => {
//   const query1 = `SELECT * FROM product ${
//     req?.query?.front == 1 ? "where status=1" : ""
//   } `;
//   // "SELECT a.*, b.seller_name FROM product a, sellers b where b.user_id= a.user_id";
//   db.query(query1, (err, data) => {
//     if (err) {
//       return res.json(err);
//     } else {
//       return res.json(data);
//     }
//   });
// };

export const getproducts = (req, res) => {
  const query1 = `SELECT * FROM product ${
    req?.query?.front == 1 ? "where status=1" : ""
  } `;
  db.query(query1, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

export const getproduct = (req, res) => {
  const query = "select * from product where product_id=?";

  db.query(query, req.params.id, (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
};

export const getproducts2 = (req, res) => {
  const query = "select * from product where user_id=?";

  db.query(query, req.params.id, (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
};
export const deleteproduct = (req, res) => {
  const query = "DELETE FROM product where product_id=?";
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("product has been deleted");
  });
};

export const insertproduct = (req, res) => {
  const query =
    "INSERT INTO product( `product_name`,`img`, `description`, `user_id`, `starting_bid`, `deadline`, `status`) values(?)";
  const values = [
    req.body.product_name,
    req.file?.filename,
    req.body.description,
    req.body.user_id,
    req.body.starting_bid,
    req.body.deadline,
    req.body.status || 0,
  ];
  console.log(query);
  console.log(values);
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("New product has been added");
  });
};

export const updateproduct = (req, res) => {
  const query =
    "UPDATE `product` SET `product_name`=?,`img`=?, `description`=?, `user_id`=?, `starting_bid`=?, `deadline`=?, `status`=? where product_id=?";
  const values = [
    req.body.product_name,
    req.file?.filename || req.body.img,
    req.body.description,
    req.body.user_id,
    req.body.starting_bid,
    req.body.deadline,
    req.body.status || 0,
  ];
  console.log(query);
  db.query(query, [...values, req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("product data has been updated");
  });
};
