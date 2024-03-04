import { json } from "express";
import { db } from "../db.js";

export const getAdmin = (req, res) => {
  const admin_contact = req.query.admin_contact;
  const password = req.query.password;

  const query =
    "SELECT admin_id FROM `admin` WHERE admin_contact='" +
    admin_contact +
    "' AND password='" +
    password +
    "'";

  console.log(query);

  try {
    db.query(query, (err, data) => {
      console.log(data.length);

      if (err) return res.json(err);
      else {
        if (data.length == 0) return res.json(0);
        else {
          console.log(data[0].admin_id);
          return res.json(data[0].admin_id);
        }
      }
    });
  } catch (error) {
    return res.json(0);
  }
};
