import express from "express";
import {
  deleteBuyer,
  getBuyer,
  getBuyers,
  insertBuyer,
  updateBuyer,
} from "../controllers/buyers.js";
import multer from "multer";

const router = express.Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + Date.now());
  },
});

const upload = multer({ storage: storage });

router.get("/", getBuyers);
router.get("/:id", getBuyer);
router.put("/:id", upload.single("img"), updateBuyer);
router.post("/", upload.single("img"), insertBuyer);
router.delete("/:id", deleteBuyer);
export default router;
