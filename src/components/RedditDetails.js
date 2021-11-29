import RedditTopic from "./RedditTopic.js";

function RedditDetails ({redditSelection,loaded}) {

    if (!loaded || !redditSelection) return <p>Awaiting User Input</p>

    const topicsList = redditSelection.data.children.map(topic => {
        return (
            <RedditTopic topic = {topic.data}></RedditTopic>
        );
    });

    return(
        <>
            {topicsList}
        </>


    );
}

export default RedditDetails;