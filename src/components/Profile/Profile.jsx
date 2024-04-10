import './Profile.css';
import man from './img/man.png'
import camera from './img/camera.png'



const Profile = () => {
  return (
    <div className="container">
      <div className="profile_content">
        <h1 className='account_heading'>Account Settings</h1>
        <div className="profile-details">
          <div className="profile-info">
            <div className="profile-image">
              <img className='profile' src={man} alt="" />
              <img className='camera' src={camera}alt="" />
            </div>
            <div className="profile-text">
              <h2>Marry Doe</h2>
              <p>marry@gmail.com</p>
            </div>
          </div>
          <div className="profile-description">
            <p>
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor
              Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
