import React from 'react';
import styleCss from './MyPostsStyle.module.css';
import avatarka from "../../assets/profile/avatarka.jpg"
import Post from './post/Post';

const MyPosts = () => {
  return (
    <div className={styleCss.myPosts}>
        <div>
          <p className="m0">My posts</p>
          <textarea name="" id="" cols="30" rows="1"></textarea>
          <div>
            <button>Add post</button>
          </div>
        </div>
        <Post avatarka={avatarka} post="I'am ok nd you" likeCount="0" />
        <Post avatarka={avatarka} post="How are you" likeCount="1" />
        <Post avatarka={avatarka} post="Do you happy" likeCount="1" />
        <Post avatarka={avatarka} post="I'm GOOD...." likeCount="0" />
    </div>
  )
}

export default MyPosts;