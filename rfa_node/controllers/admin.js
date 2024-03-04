import { db } from "../db.js";

export const getadmins = (req, res) => {
  const query1 = "SELECT * FROM admin";
  db.query(query1, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

export const getadmin = (req, res) => {
  const query = "select * from admin where admin_id=?";

  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
};

export const deleteadmin = (req, res) => {
  const query = "DELETE FROM admin where admin_id=?";
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("admin has been deleted");
  });
};

export const insertadmin = (req, res) => {
  const query =
    "INSERT INTO admin( `admin_name`, `admin_contact`, `admin_email`, `admin_about`, `password`) values(?)";
  const values = [
    req.body.admin_name,
    req.body.admin_contact,
    req.body.admin_email,
    req.body.admin_about,
    req.body.password,
  ];
  console.log(query);
  console.log(values);
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("New admin has been added");
  });
};

// export const updatePassword = (req, res) => {
//   const query = "UPDATE `admin` SET `password`=? where admin_id=?";
//   const values = [req.body.password];
//   console.log(query);
//   db.query(query, [...values, req.params.id], (err, data) => {
//     if (err) return res.json(err);
//     return res.json("admin data has been updated");
//   });
// };
export const updateadmin = (req, res) => {
  const query =
    "UPDATE `admin` SET `admin_name`=?, `admin_contact`=?, `admin_email`=?, `admin_about`=?, `password`=? where admin_id=?";
  const values = [
    req.body.admin_name,
    req.body.admin_contact,
    req.body.admin_email,
    req.body.admin_about,
    req.body.password,
  ];
  console.log(query);
  db.query(query, [...values, req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("admin data has been updated");
  });
};
