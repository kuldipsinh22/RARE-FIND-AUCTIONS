// import { json } from "express";
// import { db } from "../db.js";

// export const getUser = (req, res) => {
//   // const role_id = req.query.role_id;
//   const phone1 = req.query.phone1;
//   const password = req.query.password;
//   // console.log("role_id", role_id);
//   // if (role_id == 1) {
//   const query =
//     "SELECT user_id FROM `user` WHERE phone1='" +
//     phone1 +
//     "' AND password='" +
//     password +
//     "'";

//   console.log(query);

//   try {
//     db.query(query, (err, data) => {
//       // console.log(data.length);

//       if (err) return res.json(err);
//       else {
//         if (data.length == 0) return res.json(0);
//         else {
//           console.log(data[0].user_id);
//           return res.json(data[0].user_id);
//         }
//       }
//     });
//   } catch (error) {
//     return res.json(0);
//   }
//   // }
//   // else if (role_id == 2) {
//   //   const query =
//   //     "SELECT seller_id FROM `sellers` WHERE phone1='" +
//   //     phone1 +
//   //     "' AND password='" +
//   //     password +
//   //     "'";

//   //   console.log(query);

//   //   try {
//   //     db.query(query, (err, data) => {
//   //       console.log(data.length);

//   //       if (err) return res.json(err);
//   //       else {
//   //         if (data.length == 0) return res.json(0);
//   //         else {
//   //           console.log(data[0].seller_id);
//   //           return res.json(data[0].seller_id);
//   //         }
//   //       }
//   //     });
//   //   } catch (error) {
//   //     return res.json(0);
//   //   }
//   // }
// };
import { json } from "express";
import { db } from "../db.js";

export const getUser = (req, res) => {
  const phone1 = req.query.phone1;
  const password = req.query.password;

  const query =
    "SELECT user_id FROM `users` WHERE phone1='" +
    phone1 +
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
          console.log(data[0].user_id);
          return res.json(data[0].user_id);
        }
      }
    });
  } catch (error) {
    return res.json(0);
  }
};
