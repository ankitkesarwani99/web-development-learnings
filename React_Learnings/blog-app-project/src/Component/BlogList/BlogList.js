import './BlogList.css'
import BlogItem from './BlogItem';
function BlogList(props){
    if(props.items.length===0){
        return <h2 className="expenses-list__fallback">No Expense Found</h2>
    }

    return (
        <ul className="expenses-list">
            {
            props.items.map(blog =>
                (<BlogItem 
                    title={blog.title}
                    author={blog.author} 
                    content={blog.content}
                    selectedThemes={blog.selectedThemes}
                    selectedReaderType={blog.selectedReaderType}>
                </BlogItem>
                ))
            }
        </ul>
    );

}

export default BlogList;