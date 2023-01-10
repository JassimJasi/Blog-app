import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import NewBlogcomponent from "../../components/NewBlogcomponent";
import HomeIcons from "../../icons/HomeIcons";
import SubmitIcon from "../../icons/SubmitIcon";
import axios from "axios";
import "./newBlog.css";

function NewBlog() {
  const navigate = useNavigate();
  const [state, setState] = useState({ title: "", content: "" });
  const [err, setErr] = useState();

  const handleSubmit = () => {
    // console.log(state);
    state?.title !== "" && state?.content !== ""
      ? axios.post("http://localhost:7000/create_blog", state).then((data) => {
          console.log(data.data);
          setState({ title: "", content: "" });
          setErr("");
        })
      : setErr("Title and content required");
  };

  return (
    <>
      <Header />
      <NewBlogcomponent state={state} setState={setState} />
      <div className="homeIcons" onClick={() => navigate("/")}>
        <HomeIcons />
      </div>
      <div className="SubmitIcon" title="submit" onClick={handleSubmit}>
        <SubmitIcon />
      </div>
    </>
  );
}

export default NewBlog;
