import React from "react";

function NewBlogcomponent({ setState, state }) {
  return (
    <div className="addBlog">
      <div className="addBlogeditIcons"> </div>
      <div className="addTitle">
        <input
          type="text"
          placeholder="        Title..."
          value={state?.title}
          onChange={(e) => setState({ ...state, title: e.target.value })}
        />
      </div>
      <hr className="hr"></hr>
      <textarea
        value={state?.content}
        onChange={(e) => setState({ ...state, content: e.target.value })}
        className="textarea"
        placeholder="Type your blog here..."
      ></textarea>
    </div>
  );
}

export default NewBlogcomponent;
