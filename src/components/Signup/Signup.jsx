import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: '',
  });
  const [errors, setErrors] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: '',
  });
  const [currentError, setCurrentError] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    // Clear error message when user starts typing
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: '',
    }));
    setCurrentError('');
  };

  const validateInput = (id, value) => {
    if (value.trim() === '') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [id]: 'This field is required.',
      }));
      setCurrentError(id);
      return false;
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: '',
    }));
    return true;
  };

  const signupBtnHandler = () => {
    let isValid = true;
    for (const [key, value] of Object.entries(formData)) {
      if (key === 'companyName' || key === 'isAgency') continue;
      isValid = validateInput(key, value) && isValid;
      if (!isValid) break;
    }
    if (isValid) {
      localStorage.setItem('signupData', JSON.stringify(formData));
      navigate('/login');
    }
  };

  return (
    <div className="signup_container">
      <div className="signup_content">
        <div className="signup_upper">
          <h1>Create your</h1>
          <h1>PopX account</h1>
          <p className='hidden'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div className="form">
          <div className="form-field">
            <input
              type="text"
              id="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
            />
            <label htmlFor="fullName">Full Name <span>*</span></label>
            <span className="error">{currentError === 'fullName' && errors.fullName}</span>
          </div>
          <div className="form-field">
            <input
              type="tel"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
            />
            <label htmlFor="phoneNumber">Phone Number <span>*</span></label>
            <span className="error">{currentError === 'phoneNumber' && errors.phoneNumber}</span>
          </div>
          <div className="form-field">
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
            />
            <label htmlFor="email">Email Address <span>*</span></label>
            <span className="error">{currentError === 'email' && errors.email}</span>
          </div>
          <div className="form-field">
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
            />
            <label htmlFor="password">Password <span>*</span></label>
            <span className="error">{currentError === 'password' && errors.password}</span>
          </div>
          <div className="form-field">
            <input
              type="text"
              id="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Company Name"
            />
            <label htmlFor="companyName">Company Name</label>
            <span className="error">{currentError === 'companyName' && errors.companyName}</span>
          </div>
          <div className="radio_btn">
            <label>Are you an agency? <span>*</span></label>
            <div className="flex">
              <div>
                <input
                  type="radio"
                  id="yes"
                  name="agency"
                  defaultChecked
                  value="yes"
                  onChange={handleChange}
                />
                <label htmlFor="yes">Yes</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="no"
                  name="agency"
                  value="no"
                  onChange={handleChange}
                />
                <label htmlFor="no">No</label>
              </div>
            </div>
            <span className="error">{errors.isAgency}</span>
          </div>
          <button className="create_account_btn" onClick={signupBtnHandler} type="button">Create Account</button>
         
        </div>
      </div>
    </div>
  );
};

export default SignUp;
