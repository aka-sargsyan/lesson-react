import React from 'react';
import styleCss from './MyPostsStyle.module.css';
import Post from './post/Post';

const MyPosts = (props) => {

  let posts = props.posts;
  let postsElement = posts.map(post => <Post avatarka={post.avatarka} post={post.post} likeCount={post.likeCount} />);

  return (
    <div className={styleCss.myPosts}>
      <div>
        <p className="m0">My posts</p>
        <textarea name="" id="" cols="30" rows="1"></textarea>
        <div>
          <button>Add post</button>
        </div>
      </div>
      {postsElement}
    </div>
  )
}

export default MyPosts;