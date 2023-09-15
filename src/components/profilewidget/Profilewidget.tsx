import { useNavigate } from "react-router-dom";
import profile from "../.././assets/profileimg.jpeg";
import "./Profilewidget.css";

function Profilewidget() {
  const redirect = useNavigate();

  const handleProfileOnclick = () => {
    redirect("/Userprofile");
  };

  return (
    <div className="container" onClick={handleProfileOnclick}>
      <div className="profile-widget">
        <img className="profile-picture" src={profile} alt="Profile" />
        <div className="profile-details">
          <div className="profile-header">
            <h2 className="profile-name">purushothamaruban</h2>
            <h3 className="profile-switch">switch</h3>
          </div>
          <p className="profile-description">Purushothama Ruban</p>
        </div>
      </div>
    </div>
  );
}
export default Profilewidget;
