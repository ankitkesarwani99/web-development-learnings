import BlogForm from './BlogForm'
function NewBlog(props) {

    const saveBlogHanlder=(blogData)=>{
        const derivedBlogData={
            ...blogData,
            id: Math.ceil(Math.random()*100).toString()
        }
        props.onNewBlogDataSave(derivedBlogData);
        console.log(derivedBlogData);
    }

    return (
        <div className="new-expense">
            <BlogForm saveBlog={saveBlogHanlder}/>
        </div>
    );
}
export default NewBlog;