import express from "express";
import {
  deleteadmin,
  getadmin,
  getadmins,
  insertadmin,
  updateadmin,
} from "../controllers/admin.js";

const router3 = express.Router();

router3.get("/", getadmins);
router3.get("/:id", getadmin);
router3.put("/:id", updateadmin);
router3.post("/", insertadmin);
router3.delete("/:id", deleteadmin);
export default router3;
