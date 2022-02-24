import './BloggerFilter.css'
import {useState} from 'react';

const BloggerFilter = (props) => {
    // const[blogger,setBlogger]=useState('Select A User');
    function dropDownChangeHandler(event) {
        props.onBloggerSelectionFilter(event.target.value);
}
    return (
        <div className='expenses-filter__control'>
          <label>Author</label>
          <select onChange={dropDownChangeHandler} required>
            <option value='Ankit'>Ankit</option>
            <option value='Ashish'>Ashish</option>
            <option value='PD'>PD</option>
          </select>
        </div>
    
    );
  };
  
  export default BloggerFilter;