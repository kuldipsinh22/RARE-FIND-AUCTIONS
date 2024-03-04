import { db } from "../db.js";

export const getmy_orderss = (req, res) => {
  const query1 = "SELECT * FROM my_orders";
  db.query(query1, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

export const getmy_orders = (req, res) => {
  const query = "select * from my_orders where order_id=?";

  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
};

export const deletemy_orders = (req, res) => {
  const query = "DELETE FROM my_orders where order_id=?";
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("my_orders has been deleted");
  });
};

export const insertmy_orders = (req, res) => {
  const query =
    "INSERT INTO my_orders(`product_id`, `buyer_id`, `seller_id`, `entry_date`) values(?)";
  const values = [
    req.body.product_id,
    req.body.buyer_id,
    req.body.seller_id,
    req.body.entry_date,
  ];
  console.log(query);
  console.log(values);
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("New my_orders has been added");
  });
};

export const updatemy_orders = (req, res) => {
  const query =
    "UPDATE `my_orders` SET `product_id`=?, `buyer_id`=?, `seller_id`=?, `entry_date`=? where order_id=?";
  const values = [
    req.body.product_id,
    req.body.buyer_id,
    req.body.seller_id,
    req.body.entry_date,
  ];
  console.log(query);
  db.query(query, [...values, req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("my_orders data has been updated");
  });
};
