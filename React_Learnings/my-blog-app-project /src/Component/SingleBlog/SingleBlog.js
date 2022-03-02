import "./SingleBlog.css";
import Card from "../Card/Card";
import BlogReactions from "../Blog/BlogReactions";
import { Link } from "react-router-dom";
import BlogTimeAgo from "../Blog/BlogTimeAgo";

function SingleBlog(props) {
  const eligibleThemes = [];
  Object.entries(props.blog.selectedThemes).forEach(([key, value]) => {
    if (value === true) {
      eligibleThemes.push(key);
    }
  });
  return (
    <Card className="single-blog-item">
      <div className="single-blog-item__title-reader">
        <h2 className="single-blog-item__title">{props.blog.title}</h2>
        <span className="single-blog-item__Reader-type button_like_bg">
          {props.blog.selectedReaderType.selectedReaderType}
        </span>
      </div>
      <div className="single-blog-item__author-description">
        <span className="single-blog-item_Author">{`by ${props.blog.author}`}</span>
        <BlogTimeAgo
          className="single-blog-item_Time-ago "
          createdAt={props.blog.createdAt}
        />
      </div>
      <p className="single-blog-item__content">{props.blog.content}</p>
      <div className="single-blog-item__themes">
        {eligibleThemes.map((key) => (
          <span className="button_like_bg single-blog-item__theme">{key}</span>
        ))}
      </div>
      {props.blog.selectedBlogImage.url && (
        <div className="single-blog-item__image">
          <img
            style={{ height: "300px", width: "500px" }}
            src={props.blog.selectedBlogImage.url}
            alt="No Image"
          ></img>
        </div>
      )}
      <div className="single-blog-item__reactions">
        <BlogReactions blog={props.blog}></BlogReactions>
      </div>
      <Link
        className="button_like_bg single-blog-item__view-post"
        to={`/editPost/${props.blog.id}`}
      >
        Edit Post
      </Link>
    </Card>
  );
}
export default SingleBlog;
