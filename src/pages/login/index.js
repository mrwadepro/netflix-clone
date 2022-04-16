import "../../index.css";
import "./login.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { useState } from "react";
const Login = (props) => {
  const [email, setEmail] = useState("");

  return (
    <div className="backgroundImage">
      <div className="loginBox">
        <div>
          <h1>Sign In</h1>
        </div>
        <div className="loginForm">
          <form>
            <input placeholder="email" type="email"></input>
            <div>
              <input placeholder="password" type="password"></input>
            </div>
            <button>Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
