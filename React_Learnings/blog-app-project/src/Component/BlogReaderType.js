import './BlogReaderType.css'
import { useState } from 'react';
const BlogReaderType=(props)=>{

    const [readerType, setReaderType]=useState({
        selectedReaderType:"Beginner"
    });    

    const handleReaderTypeChange=(event)=>{
        setReaderType({
            selectedReaderType:event.target.value
        });
    }
    console.log(readerType);
    return(
       
        <div className="blog-reader-type__controls">
            {/* <div>
                <p>Select Your Themes</p>   
            </div> */}
            <div className='blog-reader-type__control'>
                <input type="radio" id="ReaderTypeBeginner" name="ReaderType" value="Beginner"   onChange={handleReaderTypeChange}/>
                <label htmlFor="ReaderTypeBeginner">Beginner</label>
            </div>
            <div className='blog-reader-type__control'>
                <input type="radio" id="ReaderTypeIntermediate" name="ReaderType" value="Intermediate"  onChange={handleReaderTypeChange}/>
                <label htmlFor="ReaderTypeIntermediate">Intermediate</label>
            </div>
            <div className='blog-reader-type__control'>
                <input type="radio" id="ReaderTypeAdvanced" name="ReaderType" value="Advanced" onChange={handleReaderTypeChange}/>
                <label htmlFor="ReaderTypeAdvanced">Advanced</label>
            </div>
        </div>

    );
}
export default BlogReaderType;