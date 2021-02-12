import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../utils/validation/Field';
import { Input } from '../comman/formControls/FormControls';
import styleCss from './LoginStyle.module.css'


const LoginForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
    {props.error && <div>{props.error}</div>}
    <div className="displayFlex alinItemsCenter">
      <div className={`m10 ${styleCss.nameWidth}`}>
        <span>Login</span>
      </div>
      <div>
        <Field
          name="email"
          component={Input}
          type="text"
          placeholder="login"
          validate={[required]}
        />
      </div>
    </div>
    <div className="displayFlex alinItemsCenter">
      <div className={`m10 ${styleCss.nameWidth}`}>
        <span>Password</span>
      </div>
      <div>
        <Field
          name="password"
          component={Input}
          type="password"
          placeholder="password"
          validate={[required]}
        />
      </div>
    </div>
    <div className="displayFlex alinItemsCenter">
      <div className={`m10`}>
        <Field
          name="rememberMe"
          component={Input}
          type="checkbox"
        />
      </div>
      <div >
        <span>Remember me</span>
      </div>
    </div>
    <div>
      <button type="submit">Login</button>
    </div>
  </form>
}

const LoginRedaxForm = reduxForm({
  form: 'login'
})(LoginForm);

class Login extends React.Component {

  onSubmit = (formData) => {
    this.props.loginCreator(formData.email, formData.password, formData.rememberMe)
  }

  render() {
    if (!this.props.isAuthFetching) {
      return (
        <div>
          <div>
            <h1>Login</h1>
          </div>
          <LoginRedaxForm onSubmit={this.onSubmit} />
        </div>);
    }
    return (
      <div>
        <p>you are logged</p>
      </div>
    )
  }
}

export default Login;