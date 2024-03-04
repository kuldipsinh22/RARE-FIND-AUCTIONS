import express from "express";
import {
  deletewinner,
  getwinner,
  // getwinners,
  insertwinner,
  updatewinner,
} from "../controllers/win.js";

const router8 = express.Router();

// router8.get("/", getwinners);
router8.get("/:id", getwinner);
router8.put("/:id", updatewinner);
router8.post("/", insertwinner);
router8.delete("/:id", deletewinner);
export default router8;
