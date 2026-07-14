import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

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
            <div className='divider'>
              <span>or</span>
            </div>

            <div className="webLogin-btn">
              <ul>
                <li>
                  <a href="" /* put google sign in link here*/>
                    <FcGoogle />
                    Google
                  </a>
                </li>

                <li>
                  <a href="" /* put github sign in link here*/>
                    <FaGithub />
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;