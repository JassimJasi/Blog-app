const express = require("express");
const {
  postBlog,
  getBlog,
  allBlog,
  text,
} = require("../controller/controller");
const router = express.Router();

router.post("/create_blog", postBlog);
router.post("/get_blog", getBlog);
router.get("/get_all_blog", allBlog);

router.post("/text", text);

module.exports = router;
