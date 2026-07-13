import '../styles/Login.css'

import { Link } from "react-router";

const Login = () => {
  return (
    <>
      <div className="signin">
        <div className='signin-header'>
          <h3>Sign in to PixelParts</h3>
        </div>

        <div className='signin-body'>
          <form>
            <div className='signin-username'>
              <label>
                Username or email address
              </label>

              <input type="text" />
            </div>

            <div className='signin-password'>
              <label>
                Password
              </label>

              <input type="text" />
            </div>

            <div>
              <input type="submit" value="Sign in" className='signin-btn'/>
            </div>
          </form>

          <div className='webInput-login'>

          </div>
        </div>

        <div className='signin-footer'>
          <p>This is the footer</p>
        </div>
      </div>
    </>
  );
};

export default Login;