import {useState} from 'react';
import './BlogForm.css'
import BlogThemeCheckBox from './BlogThemeCheckBox';
import BlogReaderType from './BlogReaderType';
import BlogImage from './BlogImage';

function BlogForm(props) {

    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredAuthor,setEnteredAuthor]=useState('');
    const [enteredContent,setEnteredContent]=useState('');

    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value);
        // console.log(event.target.value);
    }
    const authorChangeHandler=(event)=>{
        setEnteredAuthor(event.target.value);
    }
    const contentChangeHandler=(event)=>{
        setEnteredContent(event.target.value);
    }

    const formSubmitHandler=(event)=>{
        // event.preventDefault();

        // const ExpenseData={
        //     title:enteredTitle,
        //     author:enteredAuthor,
        //     content:enteredContent
        // };
        // props.saveBlog(ExpenseData);
        // console.log(ExpenseData);
        // setEnteredTitle('');
        // setEnteredAuthor('');
        // setEnteredContent('');
    }
    return (
       
            <form onSubmit={formSubmitHandler}>
                <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} required></input>
                </div>
                <div className="new-expense__control">
                    <label>Author</label>
                    <input type="text" value={enteredAuthor} onChange={authorChangeHandler} required></input>
                </div>
                <div className="new-expense__control">
                    <label>Content</label>
                    <textarea value={enteredContent} onChange={contentChangeHandler} required></textarea>
                </div>

                <div className="new-expense__control">
                    <BlogImage></BlogImage>
                </div>

                <div className="new-expense__control">
                    {/* <label>Theme-Select</label> */}
                    <BlogThemeCheckBox></BlogThemeCheckBox>
                </div>

                <div className="new-expense__control">
                    <BlogReaderType/>
                </div>
                
                <div className="new-expense__control">
                    <button type="submit" >Add Post</button>
                </div>
                </div>
            </form>
    );
    
}

export default BlogForm;