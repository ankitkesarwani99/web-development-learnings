import './BlogImage'

const BlogImage=()=>{

    return(
    <div className='blog-image__control'>
        <label htmlFor="BlogImage">Add Your Image</label>
        <input type="file" id="BlogImage" name="BlogImage"/>
    </div>);
    
}
export default BlogImage;