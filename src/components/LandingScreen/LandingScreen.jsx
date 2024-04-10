import './LandingScreen.css';
import { useNavigate } from "react-router-dom";

const LandingScreen = () => {
  const navigate=useNavigate()
  const createAaccountBtnHandler=()=>{
navigate('/signup')
  }
  const loginBtnHandler=()=>{
    navigate('/login')

  }
  return (
    <div className="landing_container">
      <div className="content">
        <div className="upper">
          <h1>Welcome to PopX</h1>
          <p className="para">Lorem ipsum dolor sit amet,</p>
          <p className="para2">consectetur adipiscing elit,</p>
        </div>
        <div className="buttons">
          <button onClick={createAaccountBtnHandler} className="create_account_btn">Create Account</button>
          <button onClick={loginBtnHandler} className="login_btn">Already Registered? Login</button>
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;
