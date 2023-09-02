import profile from "../.././assets/profile-pic.jpg";
import "./Profilewidget.css";

function Profilewidget() {
  return (
    <div className="container">
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
