import "./login.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
const Login = (props) => {
  return (
    <div className="backgroundImage">
      <div className="container-1">
        <Logo className="logo container-1-box-1" />
        <select name="langOptions" className="select">
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
        </select>
        <button>Sign In</button>
      </div>
      <div className="container-2">
        <div className="container-2-box-1">
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h1>Watch anywhere. Cancel anytime.</h1>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
