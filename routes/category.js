const express = require("express");

const {
  getCategories,
  postCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");


const authenticate = require("../middleware/authenticate");
const getCounts = require("../controllers/count");

const router = express.Router();

router.get("/categories",authenticate, getCategories);
router.post("/create-categories",authenticate, postCategory);
router.put("/update-categories/:id",authenticate, updateCategory);
router.delete("/remove-categories/:id",authenticate, deleteCategory);


router.get("/count",authenticate, getCounts);

module.exports = router;
