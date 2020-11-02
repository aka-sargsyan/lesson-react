import React from 'react';
import styleCss from './MyPostsStyle.module.css';
import Post from './post/Post';

const MyPosts = (props) => {

  let posts = props.posts;
  let text = props.newPostText;
  let postsElement = posts.map(post => <Post avatarka={post.avatarka} post={post.post} likeCount={post.likeCount} key={post.id} />);
  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.onAddPost(text);
  }

  let onPostCheang = () => {
    let text = newPostElement.current.value;
    props.onPostCheang(text)
  }

  return (
    <div className={styleCss.myPosts}>
      <div>
        <p className="m0">My posts</p>
        <textarea ref={newPostElement} onChange={onPostCheang} value={text} name="" cols="30" rows="1"></textarea>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      {postsElement}
    </div>
  )
}

export default MyPosts;