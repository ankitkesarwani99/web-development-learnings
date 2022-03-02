const BlogImage = (props) => {
  const fileUploadHandler = (event) => {
    const updatedImage = {
      image: event.target.files[0],
      url: URL.createObjectURL(event.target.files[0]),
    };
    props.onBlogImageSelection(updatedImage);
  };

  return (
    <div className="blog-image__control">
      <label htmlFor="BlogImage">Add Your Image</label>
      <input
        type="file"
        id="BlogImage"
        name="BlogImage"
        onChange={fileUploadHandler}
        ref={props.inputFileRef}
      />
    </div>
  );
};
export default BlogImage;
