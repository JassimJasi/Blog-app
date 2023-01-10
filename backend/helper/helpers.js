const blogModel = require("../model/blogModel");

module.exports = {
  createBlog: (blog) => {
    console.log("helper---------------------------", blog);
    return new Promise(async (resolve, reject) => {
      let data = await blogModel.create(blog);
      resolve(data);
      try {
      } catch (error) {
        reject(error);
      }
    });
  },
  getBlog: (id) => {
    //console.log("helper---------------------------", id);
    return new Promise(async (resolve, reject) => {
      let data = await blogModel.findById(id);
      resolve(data);
      try {
      } catch (error) {
        reject(error);
      }
    });
  },
  allBlog: () => {
    // console.log("helper---------------------------");
    return new Promise(async (resolve, reject) => {
      let data = await blogModel.find();
      // console.log(data);
      resolve(data);
      try {
      } catch (error) {
        reject(error);
      }
    });
  },
};
