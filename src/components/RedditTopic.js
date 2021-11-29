import './RedditTopic.css';

const RedditTopic = ({topic}) => {

    let content = topic.selftext.substring(0,200);

    if(topic.selftext === "") {
        content = topic.url_overridden_by_dest;
    }


    return (

        <div className = 'topic-item'>
            <h2>{topic.title}</h2>

            <ul>
                <li>Content: {content}</li>
                <li><a href = {topic.url}>Go To Thread</a></li>
                <li>Author: {topic.author}</li>
            </ul>
            
        </div>

    );
}

export default RedditTopic;