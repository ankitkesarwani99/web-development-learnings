import "./BlogList.css";
import BlogItem from "./BlogItem";
import { useContext } from "react";
import BlogContext from "../../Store/blog-context";
function BlogList(props) {
  const blogCtx = useContext(BlogContext);

  if (blogCtx.items.length === 0) {
    return <h2 className="blog-list__fallback">Sorry! No Post Available</h2>;
  }
  return (
    <>
      <h3 id="available-post-tag">Available Posts</h3>
      <ul className="blog-list">
        {blogCtx.items.map((blog) => (
          <BlogItem blog={blog}></BlogItem>
        ))}
      </ul>
    </>
  );
}

export default BlogList;
