import React,{Fragment} from 'react';
// import './App.css';
import Header from './Component/Header';
import NewBlog from './Component/NewBlog';
import AddPostTag from './Component/AddPostTag';
function App() {
  return (
    <Fragment>
      <Header/>
      <AddPostTag/>
      <NewBlog></NewBlog>
    </Fragment>
  );
}

export default App;
