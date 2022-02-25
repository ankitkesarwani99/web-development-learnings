import {useState} from 'react';
import './BlogForm.css'
import BlogThemeCheckBox from './Blog/BlogThemeCheckBox';
import BlogReaderType from './Blog/BlogReaderType';
import BlogImage from './Blog/BlogImage';
import BloggerFilter from './Blog/BloggerFilter';

const blogThemeCheckBox={
    isAdventure:false,
    isComedy:false,
    isThriller:false,
    isRomance:false,
    isScienceFiction:false,
    isMiscellaneous:false
};

const blogReaderType={
    selectedReaderType:"Beginner"
};


function BlogForm(props) {

    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredBlogger,setEnteredBlogger]=useState('Ankit');
    const [enteredContent,setEnteredContent]=useState('');
    const [selectedThemeCheckBoxes,setSelectedThemeCheckBoxes]=useState(blogThemeCheckBox);
    const [selectedReaderType,setSelectedReaderType]=useState(blogReaderType);
    

    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value);
    }
    const bloggerChangeHandler=(selectedBlogger)=>{
        setEnteredBlogger(selectedBlogger);
    }
    const contentChangeHandler=(event)=>{
        setEnteredContent(event.target.value);
    }
    const blogThemeCheckBoxHandler=(selectedCheckBoxes)=>{
        setSelectedThemeCheckBoxes(selectedCheckBoxes);
    }

    const blogReaderTypeHandler=(selectedReader)=>{
        setSelectedReaderType(selectedReader);
    }



    const formSubmitHandler=(event)=>{
        event.preventDefault();

        const BlogData={
            title:enteredTitle,
            author:enteredBlogger,
            content:enteredContent,
            selectedThemes:selectedThemeCheckBoxes,
            selectedReaderType:selectedReaderType
        };
        props.saveBlog(BlogData);
        // console.log(BlogData);
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
                       <BloggerFilter onBloggerSelectionFilter={bloggerChangeHandler}></BloggerFilter>
                    </div>
                    <div className="new-expense__control">
                        <label>Content</label>
                        <textarea value={enteredContent} onChange={contentChangeHandler} required></textarea>
                    </div>

                    <div className="new-expense__control">
                        <BlogImage/>
                    </div>

                    <div className="new-expense__control">
                        <BlogThemeCheckBox themeCheckBoxes={selectedThemeCheckBoxes} onBlogThemeCheckBoxSelection={blogThemeCheckBoxHandler}/>
                    </div>

                    <div className="new-expense__control">
                        <BlogReaderType blogReaderType={selectedReaderType} onBlogReaderTypeSelection={blogReaderTypeHandler}/>
                    </div>
                    
                    <div className="new-expense__control">
                        <button type="submit">Add Post</button>
                    </div>
                </div>
            </form>
    );
    
}

export default BlogForm;