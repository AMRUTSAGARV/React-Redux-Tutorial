import React from "react";
import "./Login.css";

function Login() {
  const formBx = document.querySelector(".formBx");
  const body = document.querySelector("body");

  const signup = () => {
    formBx.classList.add("active");
    body.classList.add("active");
  };

  const signin = () => {
    formBx.classList.remove("active");
    body.classList.remove("active");
  };

  return (
    <div className="container">
      <div className="blueBg">
        <div className="box signin">
          <h2>Already Have an Account ?</h2>
          <button onClick={signin} className="signinBtn">
            Sign In
          </button>
        </div>
        <div className="box signup">
          <h2>Don't Have an Account ?</h2>
          <button onClick={signup} className="signupBtn">
            Sign Up
          </button>
        </div>
      </div>
      <div className="formBx">
        <div className="form signinForm">
          <form>
            <h3>Sign In</h3>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <input type="submit" value="Login" />
            <a href="#" className="forgot">
              Forgot Password ?
            </a>
          </form>
        </div>

        <div className="form signupForm">
          <form>
            <h3>Sign Up</h3>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />

            <input type="submit" value="Register" />
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
