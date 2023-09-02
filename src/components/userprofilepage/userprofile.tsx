import profile from "../.././assets/profile-pic.jpg";
import "./userprofile.css";
import Button from "@mui/material/Button";
import SettingsIcon from "@mui/icons-material/Settings";

function Userprofile() {
  return (
    <div className="profile-header1">
      <img className="profile-img" src={profile} alt="Profile" />
      <div className="profile-info">
        <div className="profile1-name">
          <p>purushothamaruban</p>
        </div>
        <div className="">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "grey",
              "&:hover": {
                backgroundColor: "lightgray",
              },
              width: "8em",
              marginRight: "1em",
              fontSize: "14px",
              textTransform: "lowercase",
              fontWeight: "600",
            }}
          >
            Edit Profile
          </Button>
        </div>
        <div className="">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "grey",
              "&:hover": {
                backgroundColor: "lightgray",
              },
              width: "9em",
              fontSize: "14px",
              textTransform: "lowercase",
              fontWeight: "600",
            }}
          >
            View archive
          </Button>
        </div>
        <div className="settings-icon">
          <SettingsIcon
            sx={{
              alignItems: "center",
            }}
          />
        </div>
      </div>
      <div className="follower-info">
        <ul className="follower-list">
          <li>
            <span>
              <span>58</span>
            </span>{" "}
            posts
          </li>
          <li>
            <a>
              <span>
                <span>170</span>
              </span>{" "}
              followers
            </a>
          </li>
          <li>
            <a>
              <span>
                <span>374</span>
              </span>{" "}
              following
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Userprofile;
