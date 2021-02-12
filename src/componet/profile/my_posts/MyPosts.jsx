import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required,maxLength } from '../../../utils/validation/Field';
import { Textarea } from '../../comman/formControls/FormControls';
import styleCss from './MyPostsStyle.module.css';
import Post from './post/Post';

let maxLength10 = maxLength(10);

const MyPostForm = (props) => {

    return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <p className="m0">My posts</p>
          <Field
            name="myPost"
            component={Textarea}
            placeholder="Add text"
            validate={[required,maxLength10]}
          />
          <div>
            
            <button disabled={!props.valid} type="Submit">Add post</button>
          </div>
        </div>
      </form>
    )
  }


const MyPostRedaxForm = reduxForm({
  form: "myPost"
})(MyPostForm);

const MyPosts = (props) => {

  let posts = props.posts;
  // let text = props.newPostText;
  let postsElement = posts.map(post => <Post avatarka={post.avatarka} post={post.post} likeCount={post.likeCount} key={post.id} />);
  // let newPostElement = React.createRef();

  // let addPost = () => {
  //   let text = newPostElement.current.value;
  //   props.onAddPost(text);
  // }

  // let onPostCheang = () => {
  //   let text = newPostElement.current.value;
  //   props.onPostCheang(text)
  // }

  let onSubmit = (formData) => {
    // console.log(formData);
    props.onAddPost(formData.myPost)
  }

  return (
    <div className={styleCss.myPosts}>
      <MyPostRedaxForm onSubmit={onSubmit} />
      {postsElement}
    </div>
  )
}

export default MyPosts;