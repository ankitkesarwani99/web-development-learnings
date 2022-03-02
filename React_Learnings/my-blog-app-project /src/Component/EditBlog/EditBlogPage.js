import { useContext } from "react";
import { useParams } from "react-router-dom";
import BlogContext from "../../Store/blog-context";
import EditBlogForm from "./EditBlogForm";

function EditBlogPage(props) {
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
    return (
      <h2 style={{ color: "red", textAlign: "center", marginTop: "6rem" }}>
        Not a valid Post
      </h2>
    );
  }
  const saveBlogHanlder = (blogData) => {
    const updatedBlog = {
      ...blog,
      ...blogData,
    };
    blogCtx.updateItem(updatedBlog);
  };

  return (
    <div>
      <EditBlogForm blog={blog} saveBlog={saveBlogHanlder} />
    </div>
  );
}
export default EditBlogPage;
