import './BlogThemeCheckBox.css'
import {useState} from 'react'

const BlogThemeCheckBox=(props)=>{

    const [checkedState, setCheckedState]=useState({
        isAdventure:false,
        isComedy:false,
        isThriller:false,
        isRomance:false,
        isScienceFiction:false,
        isMiscellaneous:false
    });

    const handleAdventureCheck=()=>{

        const updatedState={
            ...checkedState,
            isAdventure:!checkedState.isAdventure
        }
     
        setCheckedState(updatedState);
        props.onBlogThemeCheckBoxSelection(updatedState);
        // console.log(updatedState)
        // setCheckedState(prevState => ({
        //     ...prevState,
        //     isAdventure:!prevState.isAdventure
        //   }));
        
    }
    const handleComedyCheck=()=>{
        // setCheckedState(prevState => ({
        //     ...prevState,
        //     isComedy: !prevState.isComedy
        //   }));
        const updatedState={
            ...checkedState,
            isComedy:!checkedState.isComedy
        }
     
        setCheckedState(updatedState);
        props.onBlogThemeCheckBoxSelection(updatedState);

    }
    const handleThrillerCheck=()=>{
        // setCheckedState(prevState => ({
        //     ...prevState,
        //     isThriller: !prevState.isThriller
        //   }));
        //   props.onBlogThemeCheckBoxSelection(checkedState);
        const updatedState={
            ...checkedState,
            isThriller:!checkedState.isThriller
        }
     
        setCheckedState(updatedState);
        props.onBlogThemeCheckBoxSelection(updatedState);


    }
    const handleRomanceCheck=()=>{
        // setCheckedState(prevState => ({
        //     ...prevState,
        //     isRomance: !prevState.isRomance
        //   }));
        //   props.onBlogThemeCheckBoxSelection(checkedState);
        const updatedState={
            ...checkedState,
            isRomance:!checkedState.isRomance
        }
     
        setCheckedState(updatedState);
        props.onBlogThemeCheckBoxSelection(updatedState);

    }
    const handleScienceFictionCheck=()=>{
        // setCheckedState(prevState => ({
        //     ...prevState,
        //     isScienceFiction: !prevState.isScienceFiction,
        //   }));
        //   props.onBlogThemeCheckBoxSelection(checkedState);
        const updatedState={
            ...checkedState,
            isScienceFiction:!checkedState.isScienceFiction
        }
     
        setCheckedState(updatedState);
        props.onBlogThemeCheckBoxSelection(updatedState);

    }
    const handleMiscellaneousCheck=()=>{
        // setCheckedState(prevState => ({
        //     ...prevState,
        //     isMiscellaneous: !prevState.isMiscellaneous,
        //   }));
        //   props.onBlogThemeCheckBoxSelection(checkedState);
        const updatedState={
            ...checkedState,
            isMiscellaneous:!checkedState.isMiscellaneous
        }
     
        setCheckedState(updatedState);
        props.onBlogThemeCheckBoxSelection(updatedState);

    }
    // console.log(checkedState);

    
    return(
       
        <div className="blog-theme-checkbox__controls">
            {/* <div>
                <p>Select Your Themes</p>   
            </div> */}
            <div className='blog-theme-checkbox__control'>
                <input type="checkbox" id="Adventure" name="Adventure" 
                checked={checkedState.isAdventure} onChange={handleAdventureCheck}/>
                <label htmlFor="Adventure">Adventure</label>
            </div>
            <div className='blog-theme-checkbox__control'>
                <input type="checkbox" id="Comedy" name="Comedy" value="Comedy"
                checked={checkedState.isComedy} onChange={handleComedyCheck}/>
                <label htmlFor="Comedy">Comedy</label>
            </div>
            <div className='blog-theme-checkbox__control'>
                <input type="checkbox" id="Thriller" name="Thriller" value="Thriller"
                checked={checkedState.isThriller} onChange={handleThrillerCheck}/>
                <label htmlFor="Thriller">Thriller</label>
            </div>
            <div className='blog-theme-checkbox__control'>
                <input type="checkbox" id="Romance"name="Romance" value="Romance"
                checked={checkedState.isRomance} onChange={handleRomanceCheck}/>
                <label htmlFor="Romance">Romance</label>
            </div>
            <div className='blog-theme-checkbox__control'>
                <input type="checkbox" id="Science Fiction" name="Science Fiction" value="ScienceFiction"
                checked={checkedState.isScienceFiction} onChange={handleScienceFictionCheck}/>
                <label htmlFor="Science Fiction">Science-Fiction</label>
            </div>
            <div className='blog-theme-checkbox__control'>
                <input type="checkbox" id="Miscellaneous" name="Miscellaneous" value="Miscellaneous"
                checked={checkedState.isMiscellaneous} onChange={handleMiscellaneousCheck}/>
                <label htmlFor="Miscellaneous">Miscellaneous</label>
            </div>
        </div>
    );
}
export default BlogThemeCheckBox;