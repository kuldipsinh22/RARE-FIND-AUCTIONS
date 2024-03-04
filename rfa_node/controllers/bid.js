import { db } from "../db.js";

export const getbiduser = (req, res) => {
  const query1 =
    "SELECT a.*,b.*,c.* FROM bids a, product b, users c where a.product_id=b.product_id and a.user_id=c.user_id and b.product_id=? order by bid_amount desc";
  db.query(query1, req.params.id, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

export const getBids = (req, res) => {
  const query1 = "SELECT * FROM bids";
  db.query(query1, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

export const getbid = (req, res) => {
  const query = "select * from bids where bid_id=?";

  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
};

export const deletebid = (req, res) => {
  const query = "DELETE FROM bids where bid_id=?";
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("bid has been deleted");
  });
};

export const insertbid = (req, res) => {
  const query =
    "INSERT INTO bids( `product_id`, `user_id`, `bid_amount`) values(?)";
  const values = [req.body.product_id, req.body.user_id, req.body.bid_amount];
  console.log(query);
  console.log(values);
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("New bid has been added");
  });
};

export const updatebid = (req, res) => {
  const query =
    "UPDATE `bids` SET `product_id`=?, `user_id`=?, `bid_amount`=? where bid_id=?";
  const values = [req.body.product_id, req.body.user_id, req.body.bid_amount];
  console.log(query);
  db.query(query, [...values, req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("bid data has been updated");
  });
};
