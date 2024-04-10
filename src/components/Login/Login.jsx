import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    setError('');
  };

  const loginBtnHandler = () => {
    // Retrieve signup data from local storage
    const storedData = localStorage.getItem('signupData');
    if (storedData) {
      // Parse signup data
      const signupData = JSON.parse(storedData);
      // Check if entered username and password match any signup data
      if (signupData.fullName === formData.username && signupData.password === formData.password) {
        navigate('/profile');
      } else {
        setError('Invalid username or password.');
      }
    } else {
      setError('No signup data found.');
    }
  };

  return (
    <div className="login_container">
      <div className="login_content">
        <div className="login_upper">
          <h1>Signin to your </h1>
          <h1>PopX account</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        </div>
        <form className="form">
          <div className="form-field">
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
            />
            <label htmlFor="username">Username</label>
          </div>
          <div className="form-field">
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
            />
            <label htmlFor="password">Password</label>
          </div>
          {error && <p className="error">{error}</p>}
          <button className="login_btn" onClick={loginBtnHandler} type="button">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
