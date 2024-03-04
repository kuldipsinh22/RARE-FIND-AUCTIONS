import { db } from "../db.js";

export const getBuyers = (req, res) => {
  const query1 = "SELECT * FROM buyers";
  db.query(query1, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

export const getBuyer = (req, res) => {
  const query = "select * from buyers where buyer_id=?";

  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
};

export const deleteBuyer = (req, res) => {
  const query = "DELETE FROM buyers where buyer_id=?";
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("Buyers has been deleted");
  });
};

export const insertBuyer = (req, res) => {
  const query =
    "INSERT INTO Buyers( `buyer_name`, `buyer_email`, `phone1`, `password`, `buyer_address`, `img`) values(?)";
  const values = [
    req.body.buyer_name,
    req.body.buyer_email,
    req.body.phone1,
    req.body.password,
    req.body.buyer_address,
    req.file?.filename,
  ];
  console.log(query);
  console.log(values);
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("New Buyers has been added");
  });
};

// export const updatePassword = (req, res) => {
//   const query = "UPDATE `buyer` SET `password`=? where buyer_id=?";
//   const values = [req.body.password];
//   console.log(query);
//   db.query(query, [...values, req.params.id], (err, data) => {
//     if (err) return res.json(err);
//     return res.json("Buyers data has been updated");
//   });
// };
export const updateBuyer = (req, res) => {
  const query =
    "UPDATE `buyers` SET `buyer_name`=?, `buyer_email`=?, `phone1`=?,  `password`=?, `buyer_address`=?, `img`=? where buyer_id=?";
  const values = [
    req.body.buyer_name,
    req.body.buyer_email,
    req.body.phone1,
    req.body.password,
    req.body.buyer_address,
    req.file?.filename || req.body.img,
  ];
  console.log(query);
  db.query(query, [...values, req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("Buyers data has been updated");
  });
};
