import React from 'react';
import styleCss from './PostStyle.module.css';


const Post = (props) => {
  return (
    <div className={styleCss.Post}>
      <div className={styleCss.p16}>
        <img src={props.avatarka} alt="" width="60" height="60" />
        <span>{props.post}</span>
        <div>
          <span>Like</span>
          <span>{props.likeCount}</span>
        </div>
      </div>
    </div>
  )
}

export default Post;