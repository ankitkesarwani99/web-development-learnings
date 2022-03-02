import moment from "moment";
const BlogTimeAgo = (props) => {
  return (
    <span style={{ fontStyle: "italic" }}>
      {moment(props.createdAt).fromNow()}
    </span>
  );
};
export default BlogTimeAgo;
