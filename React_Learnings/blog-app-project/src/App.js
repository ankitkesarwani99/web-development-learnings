import React, { Fragment, useState } from "react";
import Header from "./Component/Header/Header";
import NewBlog from "./Component/Blog/NewBlog";
import BlogList from "./Component/BlogList/BlogList";
import BlogProvider from "./Store/BlogProvider";
import SingleBlogPage from "./Component/SingleBlog/SingleBlogPage";
import EditBlogPage from "./Component/EditBlog/EditBlogPage";
import ErrorPage from "./Component/Error/ErrorPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <BlogProvider>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <NewBlog />
                <BlogList />
              </>
            }
          />
          {/* <Route exact path="/posts" element={<BlogList/>}/>  */}
          <Route exact path="/post/:id" element={<SingleBlogPage />} />
          <Route exact path="/editPost/:id" element={<EditBlogPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </BlogProvider>
    </Router>
  );
}

export default App;
