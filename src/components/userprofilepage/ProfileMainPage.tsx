import Userprofile from "./Userprofile";
import "./userprofile.css";
import StatusHighlight from "./statushighlightwidget/Statushightlight";
import PostImageList from "./postsection/PostSection";
import InstaSideBar from "../Sidebar/InstaSideBar";

function Profilemainpage() {
  return (
    <div className="user-profile-container ">
      <InstaSideBar />
      <Userprofile />
      <StatusHighlight />
      <PostImageList />
    </div>
  );
}
export default Profilemainpage;
