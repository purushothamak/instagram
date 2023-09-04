import Profilewidget from "../profilewidget/Profilewidget";
import Suggestedwidget from "../usersuggestions/suggestedwidget";
import InstaSideBar from "../Sidebar/InstaSideBar";
import HeaderStories from "../Header/HeaderStories";
import InstaFeeds from "../FeedsSection/InstaFeeds";

import "../../App.css";

function Instamainpage() {
  return (
    <div className="rightside-content">
      <InstaSideBar />
      <HeaderStories />
      <InstaFeeds />
      <Profilewidget />
      <Suggestedwidget />
    </div>
  );
}
export default Instamainpage;
