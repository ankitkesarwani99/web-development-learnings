import './BlogReaderType.css'
import { useState } from 'react';
const BlogReaderType=(props)=>{

    const [readerType, setReaderType]=useState(props.blogReaderType);    

    console.log(readerType);
    const handleReaderTypeChange=(event)=>{
        const updatedReaderType={
            selectedReaderType:event.target.value
        };
        setReaderType(updatedReaderType);
        props.onBlogReaderTypeSelection(updatedReaderType);
    }
    return(
       
        <div className="blog-reader-type__controls">
            {/* <div>
                <p>Select Your Themes</p>   
            </div> */}
            <div className='blog-reader-type__control'>
                <input type="radio" id="ReaderTypeBeginner" checked={readerType.selectedReaderType==="Beginner"} name="ReaderType" value="Beginner"   onChange={handleReaderTypeChange}/>
                <label htmlFor="ReaderTypeBeginner">Beginner</label>
            </div>
            <div className='blog-reader-type__control'>
                <input type="radio" id="ReaderTypeIntermediate" name="ReaderType" value="Intermediate"  checked={readerType.selectedReaderType==="Intermediate"} onChange={handleReaderTypeChange}/>
                <label htmlFor="ReaderTypeIntermediate">Intermediate</label>
            </div>
            <div className='blog-reader-type__control'>
                <input type="radio" id="ReaderTypeAdvanced" name="ReaderType" value="Advanced" checked={readerType.selectedReaderType==="Advanced"} onChange={handleReaderTypeChange}/>
                <label htmlFor="ReaderTypeAdvanced">Advanced</label>
            </div>
        </div>

    );
}
export default BlogReaderType;