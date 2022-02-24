import React,{Fragment,useState} from 'react';
import Header from './Component/Header/Header';
import NewBlog from './Component/NewBlog';
import AddPostTag from './Component/AddPostTag';
import BlogList from './Component/BlogList/BlogList';
const initialBlogs=[];
function App() {

  const[blogs,setBlogs]=useState(initialBlogs);
  const onNewBlogDataSaveHandler=(newBlogData)=>{
    // console.log(initialExpenses)
    const updatedBlogs=[newBlogData,...blogs];
    setBlogs(updatedBlogs);
    console.log(updatedBlogs);
  }
  
  return (
    <Fragment>
      <Header/>
      <AddPostTag/>
      <NewBlog onNewBlogDataSave={onNewBlogDataSaveHandler}></NewBlog>
      <BlogList items={blogs}></BlogList>
    </Fragment>
  );
}

export default App;
