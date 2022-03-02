import { useContext } from "react";
import BlogContext from "../../Store/blog-context";
import "./BlogReactions.css";
const reactionEmoji = {
  thumbsUp: "👍",
  hooray: "🎉",
  heart: "❤️",
  rocket: "🚀",
  eyes: "👀",
};
const BlogReactions = (props) => {
  const blogCtx = useContext(BlogContext);

  const onClickThumbsUp = () => {
    const updatedEmojiCount = {
      ...props.blog.reactionEmojiCount,
      thumbsUp: props.blog.reactionEmojiCount.thumbsUp + 1,
    };
    const updatedState = {
      ...props.blog,
      reactionEmojiCount: updatedEmojiCount,
    };
    blogCtx.updateItem(updatedState);
  };
  const onClickHooray = (event) => {
    const updatedEmojiCount = {
      ...props.blog.reactionEmojiCount,
      hooray: props.blog.reactionEmojiCount.hooray + 1,
    };
    const updatedState = {
      ...props.blog,
      reactionEmojiCount: updatedEmojiCount,
    };
    blogCtx.updateItem(updatedState);
  };
  const onClickHeart = (event) => {
    const updatedEmojiCount = {
      ...props.blog.reactionEmojiCount,
      heart: props.blog.reactionEmojiCount.heart + 1,
    };
    const updatedState = {
      ...props.blog,
      reactionEmojiCount: updatedEmojiCount,
    };
    blogCtx.updateItem(updatedState);
  };
  const onClickRocket = (event) => {
    const updatedEmojiCount = {
      ...props.blog.reactionEmojiCount,
      rocket: props.blog.reactionEmojiCount.rocket + 1,
    };
    const updatedState = {
      ...props.blog,
      reactionEmojiCount: updatedEmojiCount,
    };
    blogCtx.updateItem(updatedState);
  };
  const onClickEyes = (event) => {
    const updatedEmojiCount = {
      ...props.blog.reactionEmojiCount,
      eyes: props.blog.reactionEmojiCount.eyes + 1,
    };
    const updatedState = {
      ...props.blog,
      reactionEmojiCount: updatedEmojiCount,
    };
    blogCtx.updateItem(updatedState);
  };

  return (
    <div className="blog-reaction-buttons">
      <button
        className="blog-reaction-button"
        onClick={onClickThumbsUp}
      >{`${reactionEmoji.thumbsUp} ${props.blog.reactionEmojiCount.thumbsUp}`}</button>
      <button
        className="blog-reaction-button"
        onClick={onClickHooray}
      >{`${reactionEmoji.hooray} ${props.blog.reactionEmojiCount.hooray}`}</button>
      <button
        className="blog-reaction-button"
        onClick={onClickHeart}
      >{`${reactionEmoji.heart} ${props.blog.reactionEmojiCount.heart}`}</button>
      <button
        className="blog-reaction-button"
        onClick={onClickRocket}
      >{`${reactionEmoji.rocket} ${props.blog.reactionEmojiCount.rocket}`}</button>
      <button
        className="blog-reaction-button"
        onClick={onClickEyes}
      >{`${reactionEmoji.eyes} ${props.blog.reactionEmojiCount.eyes}`}</button>
    </div>
  );
};
export default BlogReactions;
