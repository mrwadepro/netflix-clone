import "./welcome.css";
import "../../index.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
const Login = (props) => {
  const [email, setEmail] = useState("");

  return (
    <div className="backgroundImage">
      <div className="container-1">
        <Logo className="logo" />
        <select name="langOptions" className="select">
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
        </select>
        <Link to="/login">
          <button className="signInButton">Sign In</button>
        </Link>
      </div>
      <div className="container-2">
        <div className="container-2-box-1">
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h1>Watch anywhere. Cancel anytime.</h1>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <form onSubmit={() => alert("Submit")}>
            <input
              className="inputField"
              type="email"
              value={email}
              onChange={(value) => setEmail(value)}
              placeholder="Email address"
            ></input>
            <button className="getStartedButton">Get Started</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
