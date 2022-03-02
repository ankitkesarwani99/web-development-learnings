import BlogImage from "../Blog/BlogImage";
import BlogReaderType from "../Blog/BlogReaderType";
import BlogThemeCheckBox from "../Blog/BlogThemeCheckBox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EditBlogForm.css";

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
function EditBlogForm(props) {
  const [enteredTitle, setEnteredTitle] = useState(props.blog.title);
  const [enteredContent, setEnteredContent] = useState(props.blog.content);
  const [selectedThemeCheckBoxes, setSelectedThemeCheckBoxes] = useState(
    props.blog.selectedThemes
  );
  const [selectedReaderType, setSelectedReaderType] = useState(
    props.blog.selectedReaderType
  );
  const [selectedBlogImage, setSelectedBlogImage] = useState(
    props.blog.selectedBlogImage
  );
  const [formValidity, setFormValidity] = useState({
    imageValid: true,
    themeValid: true,
    readerValid: true,
  });
  const navigate = useNavigate();

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
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
    navigate(`/post/${props.blog.id}`);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="edit-blog-form__controls">
        <div className="edit-blog-form__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
            required
          ></input>
        </div>
        <div className="edit-blog-form__control">
          <label>Content</label>
          <textarea
            value={enteredContent}
            onChange={contentChangeHandler}
            required
          ></textarea>
        </div>

        <div className="edit-blog-form__control">
          <BlogImage
            blogImage={selectedBlogImage}
            onBlogImageSelection={blogImageHandler}
          />
          {!formValidity.imageValid && (
            <p className="edit-blog-form__invalid">
              !Select one image(.jpeg file supported only)
            </p>
          )}
        </div>

        <div className="edit-blog-form__control">
          <BlogThemeCheckBox
            themeCheckBoxes={selectedThemeCheckBoxes}
            onBlogThemeCheckBoxSelection={blogThemeCheckBoxHandler}
          />
          {!formValidity.themeValid && (
            <p className="edit-blog-form__invalid">!Select atleast one theme</p>
          )}
        </div>

        <div className="edit-blog-form__control">
          <BlogReaderType
            blogReaderType={selectedReaderType}
            onBlogReaderTypeSelection={blogReaderTypeHandler}
          />
        </div>

        <div className="edit-blog-form__control">
          <button id="edit-blog-form__submit-button" type="submit">
            Update Post
          </button>
        </div>
      </div>
    </form>
  );
}

export default EditBlogForm;
