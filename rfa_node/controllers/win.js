import { db } from "../db.js";

// export const getwinners = (req, res) => {
//   //   const query1 =
//   const query1 = "SELECT * FROM winner";
//   db.query(query1, (err, data) => {
//     if (err) {
//       return res.json(err);
//     } else {
//       return res.json(data);
//     }
//   });
// };

export const getwinner = (req, res) => {
  const query =
    "select a.*,b.*,c.* from winner a, product b, users c where a.product_id=b.product_id and a.user_id=c.user_id and a.user_id=?";

  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
};

export const deletewinner = (req, res) => {
  const query = "DELETE FROM winner where win_id=?";
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("winner has been deleted");
  });
};

export const insertwinner = (req, res) => {
  const query = "INSERT INTO winner( `product_id`, `user_id`) values(?)";
  const values = [req.body.product_id, req.body.user_id];
  console.log(query);
  console.log(values);
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("New winner has been added");
  });
};

export const updatewinner = (req, res) => {
  const query =
    "UPDATE `winner` SET `product_id`=?, `user_id`=? where win_id=?";
  const values = [req.body.product_id, req.body.user_id];
  console.log(query);
  db.query(query, [...values, req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("winner data has been updated");
  });
};
