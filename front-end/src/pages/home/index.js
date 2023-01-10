import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import axios from "axios";
import "./home.css";
import { useNavigate } from "react-router-dom";
import NewBlog from "../../icons/NewBlog";

function Home() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState();
  useEffect(() => {
    axios.get("http://localhost:7000/get_all_blog").then((data) => {
      // console.log(data.data);
      setBlogs(data.data);
    });
  }, []);

  return (
    <div>
      <Header />
      <div className="homeBody">
        <div className="homeCard">
          {blogs?.map((curr, i) => (
            <div key={i} onClick={() => navigate(`/blog/${curr._id}`)}>
              <Card title={curr?.title} />
            </div>
          ))}
        </div>
        <div className="clipBoard" onClick={() => navigate("/new_blog")}>
          <NewBlog />
        </div>
      </div>
    </div>
  );
}

export default Home;
