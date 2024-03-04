import express from "express";
import cors from "cors";
import router1 from "./models/r_user.js";
import router from "./models/r_buyers.js";
import router3 from "./models/r_admin.js";
import router4 from "./models/r_bid.js";
import router2 from "./models/r_myorder.js";
import router6 from "./models/r_product.js";
import router5 from "./models/r_login.js";
import router7 from "./models/r_mainLogin.js";
import router8 from "./models/r_win.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));
app.use("/rfa/buyers", router);
app.use("/rfa/myorders", router2);
app.use("/rfa/user", router1);
app.use("/rfa/admin", router3);
app.use("/rfa/bid", router4);
app.use("/rfa/product", router6);
app.use("/rfa/login", router5);
app.use("/rfa/main_login", router7);
app.use("/rfa/winner", router8);

app.listen(1122, () => {
  console.log("Server is running on 1122 port...");
});
