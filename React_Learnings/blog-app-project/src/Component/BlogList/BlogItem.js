import "./BlogItem.css";
import Card from "../Card/Card";
import BlogReactions from "../Blog/BlogReactions";
import BlogTimeAgo from "../Blog/BlogTimeAgo";
import { Link } from "react-router-dom";

function BlogItem(props) {
  const eligibleThemes = [];
  Object.entries(props.blog.selectedThemes).forEach(([key, value]) => {
    if (value === true) {
      eligibleThemes.push(key);
    }
  });
  return (
    <Card className="blog-item">
      <div className="blog-item__title-reader">
        <h2 className="blog-item__title">{props.blog.title}</h2>
        <span className="blog-item__Reader-type button_like_bg">
          {props.blog.selectedReaderType.selectedReaderType}
        </span>
      </div>
      <div className="blog-item__author-description">
        <span className="blog-item_Author">{`by ${props.blog.author}`}</span>
        <BlogTimeAgo
          className="blog-item_Time-ago "
          createdAt={props.blog.createdAt}
        />
      </div>
      <p className="blog-item__content">{props.blog.content}</p>
      <div className="blog-item__themes">
        {eligibleThemes.map((key) => (
          <span className="button_like_bg blog-item__theme">{key}</span>
        ))}
      </div>
      {props.blog.selectedBlogImage.url && (
        <div className="blog-item__image">
          <img
            style={{ height: "300px", width: "500px" }}
            src={props.blog.selectedBlogImage.url}
            alt="No Image"
          ></img>
        </div>
      )}
      <div className="blog-item__reactions">
        <BlogReactions blog={props.blog}></BlogReactions>
      </div>
      <Link
        className="button_like_bg blog-item__view-post"
        to={`/post/${props.blog.id}`}
      >
        View Post
      </Link>
    </Card>
  );
}
export default BlogItem;
