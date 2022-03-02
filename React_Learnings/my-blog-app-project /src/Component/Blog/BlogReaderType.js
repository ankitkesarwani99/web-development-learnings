import "./BlogReaderType.css";
const BlogReaderType = (props) => {
  const handleReaderTypeChange = (event) => {
    const updatedReaderType = {
      selectedReaderType: event.target.value,
    };
    console.log(updatedReaderType);
    props.onBlogReaderTypeSelection(updatedReaderType);
  };
  return (
    <>
      <label style={{ textAlign: "center" }}>Select Blog Themes</label>
      <div className="blog-reader-type__controls">
        <div className="blog-reader-type__control">
          <input
            type="radio"
            id="ReaderTypeBeginner"
            checked={props.blogReaderType.selectedReaderType === "Beginner"}
            name="ReaderType"
            value="Beginner"
            onChange={handleReaderTypeChange}
          />
          <label htmlFor="ReaderTypeBeginner">Beginner</label>
        </div>
        <div className="blog-reader-type__control">
          <input
            type="radio"
            id="ReaderTypeIntermediate"
            name="ReaderType"
            value="Intermediate"
            checked={props.blogReaderType.selectedReaderType === "Intermediate"}
            onChange={handleReaderTypeChange}
          />
          <label htmlFor="ReaderTypeIntermediate">Intermediate</label>
        </div>
        <div className="blog-reader-type__control">
          <input
            type="radio"
            id="ReaderTypeAdvanced"
            name="ReaderType"
            value="Advanced"
            checked={props.blogReaderType.selectedReaderType === "Advanced"}
            onChange={handleReaderTypeChange}
          />
          <label htmlFor="ReaderTypeAdvanced">Advanced</label>
        </div>
      </div>
    </>
  );
};
export default BlogReaderType;
