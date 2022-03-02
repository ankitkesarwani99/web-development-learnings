import "./BlogThemeCheckBox.css";

const BlogThemeCheckBox = (props) => {
  const handleCheck = (event) => {
    let updatedState = {};
    if (event.target.value === "Adventure") {
      updatedState = {
        ...props.themeCheckBoxes,
        Adventure: event.target.checked,
      };
    } else if (event.target.value === "Comedy") {
      updatedState = {
        ...props.themeCheckBoxes,
        Comedy: event.target.checked,
      };
    } else if (event.target.value === "Thriller") {
      updatedState = {
        ...props.themeCheckBoxes,
        Thriller: event.target.checked,
      };
    } else if (event.target.value === "Romance") {
      updatedState = {
        ...props.themeCheckBoxes,
        Romance: event.target.checked,
      };
    } else if (event.target.value === "ScienceFiction") {
      updatedState = {
        ...props.themeCheckBoxes,
        ScienceFiction: event.target.checked,
      };
    } else if (event.target.value === "Miscellaneous") {
      updatedState = {
        ...props.themeCheckBoxes,
        Miscellaneous: event.target.checked,
      };
    }
    props.onBlogThemeCheckBoxSelection(updatedState);
  };

  return (
    <>
      <label style={{ textAlign: "center" }}>Select Blog Themes</label>
      <div className="blog-theme-checkbox__controls">
        <div className="blog-theme-checkbox__control">
          <input
            type="checkbox"
            id="Adventure"
            name="Adventure"
            value="Adventure"
            checked={props.themeCheckBoxes.Adventure}
            onChange={handleCheck}
          />
          <label htmlFor="Adventure">Adventure</label>
        </div>
        <div className="blog-theme-checkbox__control">
          <input
            type="checkbox"
            id="Comedy"
            name="Comedy"
            value="Comedy"
            checked={props.themeCheckBoxes.Comedy}
            onChange={handleCheck}
          />
          <label htmlFor="Comedy">Comedy</label>
        </div>
        <div className="blog-theme-checkbox__control">
          <input
            type="checkbox"
            id="Thriller"
            name="Thriller"
            value="Thriller"
            checked={props.themeCheckBoxes.Thriller}
            onChange={handleCheck}
          />
          <label htmlFor="Thriller">Thriller</label>
        </div>
        <div className="blog-theme-checkbox__control">
          <input
            type="checkbox"
            id="Romance"
            name="Romance"
            value="Romance"
            checked={props.themeCheckBoxes.Romance}
            onChange={handleCheck}
          />
          <label htmlFor="Romance">Romance</label>
        </div>
        <div className="blog-theme-checkbox__control">
          <input
            type="checkbox"
            id="Science Fiction"
            name="Science Fiction"
            value="ScienceFiction"
            checked={props.themeCheckBoxes.ScienceFiction}
            onChange={handleCheck}
          />
          <label htmlFor="Science Fiction">Science-Fiction</label>
        </div>
        <div className="blog-theme-checkbox__control">
          <input
            type="checkbox"
            id="Miscellaneous"
            name="Miscellaneous"
            value="Miscellaneous"
            checked={props.themeCheckBoxes.Miscellaneous}
            onChange={handleCheck}
          />
          <label htmlFor="Miscellaneous">Miscellaneous</label>
        </div>
      </div>
    </>
  );
};
export default BlogThemeCheckBox;
