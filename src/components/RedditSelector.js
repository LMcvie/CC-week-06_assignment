import {useState,useEffect} from 'react';

const RedditSelector = ({onRedditSubmit}) => {

    const[redditChoice,setRedditChoice] = useState("");

    const handleRedditSubmit = (event) => {
        
        event.preventDefault();
        if (!redditChoice ==="") {
            
            return;
        }
        onRedditSubmit({redditId: redditChoice});

    }


    const handleChoiceChange = (event) => {
       
        setRedditChoice(event.target.value);
    }


    
    return(
        <>
            <h2>Reddit Selector - view a summarised reddit</h2>
            <form onSubmit = {handleRedditSubmit}>
                <label for="reddit-select">Choose a reddit to browse: </label>

                <select name = "favouriteReddits" id="reddit-select" onChange = {handleChoiceChange}>
                    <option  disabled selected>-- Please choose an option --</option>
                    <option value = "programmer">Programmer</option>
                    <option value = "react">React</option>
                    <option value = "javaScript">JavaScript</option>
                    <option value = "gaming">Gaming</option>
                    <option value = "jokes">Jokes</option>
                </select>
            
                
                <input type = "submit" value = "Go"/>
            </form>

        </>

    )
}


export default RedditSelector;