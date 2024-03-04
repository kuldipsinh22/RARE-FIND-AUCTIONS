import express from "express";
import {
  deletemy_orders,
  getmy_orders,
  getmy_orderss,
  insertmy_orders,
  updatemy_orders,
} from "../controllers/myorder.js";

const router2 = express.Router();

router2.get("/", getmy_orderss);
router2.get("/:id", getmy_orders);
router2.put("/:id", updatemy_orders);
router2.post("/", insertmy_orders);
router2.delete("/:id", deletemy_orders);
export default router2;
