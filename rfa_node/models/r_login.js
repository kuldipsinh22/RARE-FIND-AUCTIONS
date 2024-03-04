import express from "express";
import { getAdmin } from "../controllers/login.js";

const router5 = express.Router();

router5.get("/", getAdmin);
export default router5;
