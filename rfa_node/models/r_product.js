import express from "express";
import {
  deleteproduct,
  getproduct,
  getproducts2,
  getproducts,
  insertproduct,
  updateproduct,
} from "../controllers/product.js";
import multer from "multer";

const router3 = express.Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + Date.now());
  },
});

const upload = multer({ storage: storage });

const router6 = express.Router();

router6.get("/", getproducts);
router6.get("/user/:id", getproducts2);
router6.get("/:id", getproduct);
router6.put("/:id", upload.single("img"), updateproduct);
router6.post("/", upload.single("img"), insertproduct);
router6.delete("/:id", deleteproduct);
export default router6;
