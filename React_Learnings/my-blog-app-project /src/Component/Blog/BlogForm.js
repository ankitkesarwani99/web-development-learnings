import { useState, useRef } from "react";
import "./BlogForm.css";
import BlogThemeCheckBox from "./BlogThemeCheckBox";
import BlogReaderType from "./BlogReaderType";
import BlogImage from "./BlogImage";
import BloggerFilter from "./BloggerFilter";

const blogThemeCheckBox = {
  Adventure: false,
  Comedy: false,
  Thriller: false,
  Romance: false,
  ScienceFiction: false,
  Miscellaneous: false,
};

const blogReaderType = {
  selectedReaderType: undefined,
};

const blogImage = {
  image: undefined,
  url: null,
};
const defaultBlogger = "Ankit";

const isImageFormatValid = (file) => {
  if (file === undefined || file.type !== "image/jpeg") {
    return false;
  }
  return true;
};
const isThemeValid = (theme) => {
  const eligibleThemes = [];
  Object.entries(theme).forEach(([key, value]) => {
    if (value === true) {
      eligibleThemes.push(key);
    }
  });
  if (eligibleThemes.length === 0) {
    return false;
  }
  return true;
};
const isreaderTypeValid = (readerType) => {
  console.log("bhai", readerType);
  if (readerType.selectedReaderType === undefined) {
    return false;
  }
  return true;
};
function BlogForm(props) {
  const inputFileRef = useRef(null);

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredBlogger, setEnteredBlogger] = useState(defaultBlogger);
  const [enteredContent, setEnteredContent] = useState("");
  const [selectedThemeCheckBoxes, setSelectedThemeCheckBoxes] =
    useState(blogThemeCheckBox);
  const [selectedReaderType, setSelectedReaderType] = useState(blogReaderType);
  const [selectedBlogImage, setSelectedBlogImage] = useState(blogImage);
  const [formValidity, setFormValidity] = useState({
    imageValid: true,
    themeValid: true,
    readerValid: true,
  });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const bloggerChangeHandler = (selectedBlogger) => {
    setEnteredBlogger(selectedBlogger);
  };
  const contentChangeHandler = (event) => {
    setEnteredContent(event.target.value);
  };
  const blogThemeCheckBoxHandler = (selectedCheckBoxes) => {
    setSelectedThemeCheckBoxes(selectedCheckBoxes);
  };

  const blogReaderTypeHandler = (selectedReader) => {
    setSelectedReaderType(selectedReader);
  };

  const blogImageHandler = (selectedImage) => {
    setSelectedBlogImage(selectedImage);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const BlogData = {
      title: enteredTitle,
      author: enteredBlogger,
      content: enteredContent,
      selectedThemes: selectedThemeCheckBoxes,
      selectedReaderType: selectedReaderType,
      selectedBlogImage: selectedBlogImage,
    };

    const themeValid = isThemeValid(selectedThemeCheckBoxes);
    const imageValid = isImageFormatValid(selectedBlogImage.image);
    const readerTypeValid = isreaderTypeValid(selectedReaderType);

    const formValid = themeValid && imageValid && readerTypeValid;
    setFormValidity({
      imageValid: imageValid,
      themeValid: themeValid,
      readerValid: readerTypeValid,
    });
    if (!formValid) {
      return false;
    }

    props.saveBlog(BlogData);
    setEnteredTitle("");
    setEnteredBlogger(defaultBlogger);
    setEnteredContent("");
    setSelectedBlogImage(blogImage);
    setSelectedThemeCheckBoxes(blogThemeCheckBox);
    setSelectedReaderType(blogReaderType);
    inputFileRef.current.value = "";
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <h3 id="blog-form__add-post">Add a New Post</h3>
      <div className="blog-form__controls">
        <div className="blog-form__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
            required
          ></input>
        </div>
        <div className="blog-form__control">
          <BloggerFilter
            onBloggerSelectionFilter={bloggerChangeHandler}
          ></BloggerFilter>
        </div>
        <div className="blog-form__control">
          <label>Content</label>
          <textarea
            value={enteredContent}
            onChange={contentChangeHandler}
            required
          ></textarea>
        </div>

        <div className="blog-form__control">
          <BlogImage
            inputFileRef={inputFileRef}
            blogImage={selectedBlogImage}
            onBlogImageSelection={blogImageHandler}
          />
          {!formValidity.imageValid && (
            <p className="blog-form__invalid">
              !Select one image(.jpeg file supported only)
            </p>
          )}
        </div>

        <div className="blog-form__control">
          <BlogThemeCheckBox
            themeCheckBoxes={selectedThemeCheckBoxes}
            onBlogThemeCheckBoxSelection={blogThemeCheckBoxHandler}
          />
          {!formValidity.themeValid && (
            <p className="blog-form__invalid">!Select atleast one theme</p>
          )}
        </div>

        <div className="blog-form__control">
          <BlogReaderType
            blogReaderType={selectedReaderType}
            onBlogReaderTypeSelection={blogReaderTypeHandler}
          />
          {!formValidity.readerValid && (
            <p className="blog-form__invalid">
              !Select atleast one reader type
            </p>
          )}
        </div>

        <div className="blog-form__control">
          <button id="blog-form__submit-button" type="submit">
            Add Post
          </button>
        </div>
      </div>
    </form>
  );
}

export default BlogForm;
