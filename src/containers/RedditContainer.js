import {useState,useEffect} from 'react';
import RedditDetails from '../components/RedditDetails.js';
import RedditSelector from '../components/RedditSelector.js';
import './RedditContainer.css';

function RedditContainer() {

    const [redditSelection,setRedditSelection] = useState({});
    const [redditId, setRedditId] = useState('');
    const[loaded,setLoaded] = useState(false);



    useEffect(() => {
        getReddit();
    }, [redditId]);


    const getReddit = async () => {
        try {
            if (!redditId){
                return;
            }
            const response = await fetch (`https://www.reddit.com/r/${redditId}.json`)
            const data = await response.json();
            await setRedditSelection(data);
            await setLoaded(true);
            console.log('Success');
        }

        catch (error) {
            console.log('error');
        }
    }

    const addId =  (submittedReddit) => {
        setRedditId(submittedReddit);
    }


    return (
        <>
            <div id = 'heading'>
                <h1>Reddit Favourites Filter</h1>
                <RedditSelector onRedditSubmit ={(reddit) => addId(reddit.redditId)}/>
            </div>

        <RedditDetails redditSelection = {redditSelection} loaded = {loaded}/>
        
        </>

    );
}


export default RedditContainer;