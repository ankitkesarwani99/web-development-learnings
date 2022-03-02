import BlogContext from "./blog-context";
import { useReducer } from "react";

const defaultBlogState = {
  items: [],
};
const blogReducer = (state, action) => {
  if (action.type === "ADD") {
    const reactionEmojiCount = {
      thumbsUp: 0,
      hooray: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    };
    action.item.reactionEmojiCount = reactionEmojiCount;
    action.item.createdAt = new Date().getTime();

    const updatedItems = [action.item, ...state.items];
    return {
      items: updatedItems,
    };
  }
  if (action.type === "UPDATE") {
    const updatedBlogs = [...state.items];
    for (let item = 0; item < updatedBlogs.length; item++) {
      if (updatedBlogs[item].id === action.item.id) {
        console.log("inside");
        updatedBlogs[item] = action.item;
        break;
      }
    }
    return {
      items: updatedBlogs,
    };
  }
  return defaultBlogState;
};
const BlogProvider = (props) => {
  const [blogState, dispatchBlogAction] = useReducer(
    blogReducer,
    defaultBlogState
  );
  const addItemToList = (item) => {
    dispatchBlogAction({ type: "ADD", item: item });
  };
  const updateItemInList = (item) => {
    dispatchBlogAction({ type: "UPDATE", item: item });
  };

  const blogContext = {
    items: blogState.items,
    addItem: addItemToList,
    updateItem: updateItemInList,
  };
  return (
    <BlogContext.Provider value={blogContext}>
      {props.children}
    </BlogContext.Provider>
  );
};
export default BlogProvider;
