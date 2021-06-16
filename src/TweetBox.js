import React from 'react'
import './tweetbox.css'
import { Avatar,Button } from "@material-ui/core";

function TweetBox(){
    return(
        <div className="tweetbox">
            <form>
                <div className="tweetBox_input">
                    <Avatar></Avatar>
                    <input placeholder="what's happening?" type='text'></input>
                </div>
                <input
                    className="tb_opinput"
                    placeholder="Optional:Enter image URL" type="text"></input>
                <Button className="tweetbutton">Tweet</Button>
            </form>
        </div>
    )
}
export default TweetBox  
