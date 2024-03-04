import express from "express";
import { getUser } from "../controllers/main_login.js";

const router7 = express.Router();

router7.get("/", getUser);
export default router7;
