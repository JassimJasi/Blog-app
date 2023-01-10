const { createBlog, getBlog, allBlog } = require("../helper/helpers");

module.exports = {
  postBlog: async (req, res, next) => {
    try {
      // console.log("controller------------------", req.body);
      let data = await createBlog(req.body);
      res.json(data);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
  getBlog: async (req, res, next) => {
    try {
      console.log("controller------------------", req.body);
      let data = await getBlog(req.body.id);
      //console.log(data);
      res.json(data);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
  allBlog: async (req, res, next) => {
    try {
      let data = await allBlog();
      res.json(data);
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  },
};
