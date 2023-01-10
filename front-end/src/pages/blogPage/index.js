import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header";
import HomeIcons from "../../icons/HomeIcons";
import "./blogPage.css";

function Blog() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [blog, setBlog] = useState();

  useEffect(() => {
    axios.post("http://localhost:7000/get_blog", { id }).then((data) => {
      console.log("bloooooooooo", data.data);
      setBlog(data.data);
    });
  }, []);

  return (
    <>
      <Header />
      <div className="blogPage">
        <div className="title">
          <h1>{blog?.title}</h1>
        </div>
        <p>{blog?.content}</p>
      </div>
      <div className="homeIcons" onClick={() => navigate("/")}>
        <HomeIcons />
      </div>
    </>
  );
}

export default Blog;
