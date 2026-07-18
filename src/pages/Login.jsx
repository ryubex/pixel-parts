import { useState } from "react";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import '../styles/Login.css'

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import {GoogleAuthProvider,signInWithPopup} from "firebase/auth";
import {GithubAuthProvider} from "firebase/auth";

import { Link } from "react-router";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async (e) => {
    e.preventDefault()

    try{
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      )

      alert("Logged In!")
    } catch(error) {
      alert(error.message)
    }
  }

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
      alert("Logged in with Google")
    } catch(error) {
      alert(error.message)
    }
  }

  const handleGithubLogin = async () => {
    try {
      await signInWithPopup(auth, githubProvider)
      alert("Logged in with GitHub")
    } catch(error) {
      alert(error.message)
    }
  }
  
  return (
    <>
      <div className="signin">
        <div className='signin-header'>
          <h3>Sign in to PixelParts</h3>
        </div>

        <div className='signin-body'>
          <form onSubmit={handleLogin}>
            <div className='signin-username'>
              <label>
                Username or email address
              </label>

              <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
              />
            </div>

            <div className='signin-password'>
              <label>
                Password
              </label>

              <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
              />
            </div>

            <div>
              <input 
                type="submit" 
                value="Sign in" 
                className='signin-btn'
              />
            </div>
          </form>

          <div className='webInput-login'>
            <div className='divider'>
              <span>or</span>
            </div>

            <div className="webLogin-btn">
              <ul>
                <li>
                  <button 
                    type="button"
                    onClick={handleGoogleLogin}
                  >
                      <FcGoogle />
                      Google
                  </button>
                </li>

                <li>
                  <button 
                    type="button"
                    onClick={handleGithubLogin}
                  >
                    <FaGithub />
                    GitHub
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login