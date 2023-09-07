import "./suggestedwidget.css";
import user1 from "../../assets/user1.jpeg";
import { useMediaQuery, createTheme } from "@mui/material";

const theme = createTheme();

function SuggestedUsers() {
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  if (!isDesktop) {
    return null;
  }
  return (
    <div className="suggested-users">
      <div className="suggested-heading">
        <h3 className="suggested-h3">Suggested for you</h3>
        <h3>See All</h3>
      </div>
      <div className="user-card">
        <img className="user-picture" src={user1} alt="User 1" />
        <div className="user-info">
          <h4 className="suggested-h4">sravya_nayaka</h4>
          <p>Followed by _being_prajwal_07</p>
        </div>
        <div className="user-follow">
          <h3>Follow</h3>
        </div>
      </div>
      <div className="user-card">
        <img className="user-picture" src={user1} alt="User 1" />
        <div className="user-info">
          <h4 className="suggested-h4">off1ineyogi</h4>
          <p>Followed by superheroz.grl</p>
        </div>
        <div className="user-follow">
          <h3>Follow</h3>
        </div>
      </div>
    </div>
  );
}

export default SuggestedUsers;
