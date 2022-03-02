import { useParams } from "react-router-dom";
import { useContext } from "react";
import BlogContext from "../../Store/blog-context";
import SingleBlog from "./SingleBlog";
const SingleBlogPage = () => {
  const { id } = useParams();
  const blogCtx = useContext(BlogContext);
  let blog = null;
  const blogs = [...blogCtx.items];
  for (let item = 0; item < blogs.length; item++) {
    if (blogs[item].id === id) {
      blog = blogs[item];
      break;
    }
  }
  if (blog === null) {
    console.log("hey");
    return (
      <h2 style={{ color: "red", textAlign: "center", marginTop: "6rem" }}>
        Not a valid Post
      </h2>
    );
  }
  return <SingleBlog blog={blog}></SingleBlog>;
};
export default SingleBlogPage;
