import Profilewidget from "../profilewidget/Profilewidget";
import Suggestedwidget from "../usersuggestions/suggestedwidget";
import InstaSideBar from "../Sidebar/InstaSideBar";
import HeaderStories from "../Header/HeaderStories";
import InstaFeeds from "../FeedsSection/InstaFeeds";

import "../../App.css";

function Instamainpage() {
  return (
    <div className="rightside-content">
      <Profilewidget />
      <Suggestedwidget />
      <div className="feed-section">
        <InstaSideBar />
        <HeaderStories />
        <InstaFeeds />
      </div>
    </div>
  );
}
export default Instamainpage;
