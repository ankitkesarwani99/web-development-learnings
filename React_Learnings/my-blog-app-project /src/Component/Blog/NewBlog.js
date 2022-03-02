import BlogForm from "./BlogForm";
import { useContext } from "react";
import BlogContext from "../../Store/blog-context";

function NewBlog(props) {
  const blogCtx = useContext(BlogContext);
  const saveBlogHanlder = (blogData) => {
    const derivedBlogData = {
      ...blogData,
      id: Math.ceil(Math.random() * 100).toString(),
    };
    blogCtx.addItem(derivedBlogData);
  };

  return (
    <div className="new-blog">
      <BlogForm saveBlog={saveBlogHanlder} />
    </div>
  );
}
export default NewBlog;
