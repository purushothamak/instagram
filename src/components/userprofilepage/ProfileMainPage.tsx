import Userprofile from "./Userprofile";
import "./userprofile.css";
import StatusHighlight from "./statushighlightwidget/Statushightlight";
import PostImageList from "./postsection/PostSection";

function Profilemainpage() {
  return (
    <div className="user-profile-container ">
      <Userprofile />
      <StatusHighlight />
      <PostImageList />
    </div>
  );
}
export default Profilemainpage;
