import { db } from "../db.js";

export const getusers = (req, res) => {
  const query1 = "SELECT * FROM users";
  // "SELECT a.*, b.seller_name FROM product a, sellers b where b.seller_id= a.seller_id";
  db.query(query1, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

export const getuser = (req, res) => {
  const query = "select * from users where user_id=?";

  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
};

export const deleteuser = (req, res) => {
  const query = "DELETE FROM users where user_id=?";
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("users has been deleted");
  });
};

export const insertuser = (req, res) => {
  const query =
    "INSERT INTO users(`user_name`, `phone1`,`user_email`, `password`, `img`, `state`, `city`, `zipcode`, `address`) values(?)";
  const values = [
    req.body.user_name,
    req.body.phone1,
    req.body.user_email,
    req.body.password,
    req.file?.filename,
    req.body.state,
    req.body.city,
    req.body.zipcode,
    req.body.address,
  ];
  console.log(query);
  console.log(values);
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("New user has been added");
  });
};

// export const updatepassword = (req, res) => {
//   const query = "UPDATE `user` SET `password`=? where user_id=?";
//   const values = [req.body.password];
//   console.log(query);
//   db.query(query, [...values, req.params.id], (err, data) => {
//     if (err) return res.json(err);
//     return res.json("user data has been updated");
//   });
// };
export const updateuser = (req, res) => {
  const query =
    "UPDATE `users` SET `user_name`=?, `phone1`=?, `user_email`=?, `password`=?, `img`=?, `state`=?, `city`=?, `zipcode`=?, `address`=? where user_id=?";
  const values = [
    req.body.user_name,
    req.body.phone1,
    req.body.user_email,
    req.body.password,
    req.file?.filename,
    req.body.state,
    req.body.city,
    req.body.zipcode,
    req.body.address,
  ];
  console.log(query);
  db.query(query, [...values, req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("users data has been updated");
  });
};
