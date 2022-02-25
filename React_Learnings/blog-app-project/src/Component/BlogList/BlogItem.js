import './BlogItem.css'

import Card from '../Card/Card';
import BlogThemeCheckBox from '../Blog/BlogThemeCheckBox';
import BlogReaderType from '../Blog/BlogReaderType';

function BlogItem(props) {
    // console.log(props.selectedThemes);
    const blogThemeCheckBoxHandler=()=>{};
    const blogReaderTypeHandler=()=>{};
    return (
        <Card className="blog-item">
        
                <h3 className="blog-item__title">{props.title}</h3>
                <div className="blog-item__author-description">
                    <span>{props.author}</span>
                    {/* <span>time</span> */}
                </div>
                <p className="blog-item__content">{props.content}</p> 
                <div>
                <BlogThemeCheckBox themeCheckBoxes={props.selectedThemes} onBlogThemeCheckBoxSelection={blogThemeCheckBoxHandler}></BlogThemeCheckBox>
                </div>
                {/* blogReaderType */}
                <div>
                    <BlogReaderType blogReaderType={props.selectedReaderType} onBlogReaderTypeSelection={blogReaderTypeHandler}>
                    </BlogReaderType>
                </div>

                <button>View Post</button>
        </Card>
    )
}
export default BlogItem;