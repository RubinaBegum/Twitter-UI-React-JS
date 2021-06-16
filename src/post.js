import React from 'react';
import './post.css';
import { Avatar } from "@material-ui/core"
import user1 from "./images/user1.jpg"
// import { VerifiedUserIcon } from '@material-ui/icons';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}){
    return (
        <div className="post">
            <div className="post_avatar">
                <Avatar></Avatar>
            </div>
            <div className="post_body">
                <div className="post_header">
                    <div className="post_headertext">
                        <h3>
                            Rubina Begum{" "}
                            <span className="header_special">
                                <VerifiedUserIcon className="post_badge"/>@Rubina
                            </span>
                        </h3>
                        <div className="post_headerdes">
                            <p>my first clone to be created is twitter clone </p>
                        </div>
                        <img src={user1} alt=" "></img>
                    </div>
                    <div className="post_footer">
                    <ChatBubbleOutlineOutlinedIcon fontSize="small"/>
                        <RepeatIcon fontSize="small"/>
                        <FavoriteBorderIcon fontSize="small"/>
                        <PublishIcon fontSize="small"/>
                        
                
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Post;