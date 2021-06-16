import React from 'react';
import './feed.css'
import TweetBox from './TweetBox.js';
import Post from './post.js';


function Feed() {
    return(
        <div className="feed">
            <div className='feed_header'></div>
            <h2>Home</h2>
            <TweetBox/>
            <Post/>
            <Post/>
            <Post/>
        </div>
        
    )
}
export default Feed;