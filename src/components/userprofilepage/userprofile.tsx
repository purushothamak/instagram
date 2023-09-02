import profile from "../.././assets/profile-pic.jpg";

function Userprofile() {
  return (
    <div>
      <h2>this is profile page</h2>
      <img className="profile-picture" src={profile} alt="Profile" />
    </div>
  );
}

export default Userprofile;
