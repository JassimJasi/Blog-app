import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./pages/blogPage";
import Home from "./pages/home";
import NewBlog from "./pages/NewBlog";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/blog/:id" element={<Blog />} exact />
        <Route path="/new_blog" element={<NewBlog />} exact />
      </Routes>
    </>
  );
}

export default App;
