import express from "express";
import {
  deleteuser,
  getuser,
  getusers,
  insertuser,
  updateuser,
} from "../controllers/user.js";

const router1 = express.Router();

router1.get("/", getusers);
router1.get("/:id", getuser);
router1.put("/:id", updateuser);
router1.post("/", insertuser);
router1.delete("/:id", deleteuser);
export default router1;
