import express from "express";
import {
  deletebid,
  getbid,
  getBids,
  insertbid,
  updatebid,
  getbiduser,
} from "../controllers/bid.js";

const router4 = express.Router();

router4.get("/", getBids);
router4.get("/:id", getbiduser);
router4.get("/:id", getbid);
router4.put("/:id", updatebid);
router4.post("/", insertbid);
router4.delete("/:id", deletebid);
export default router4;
