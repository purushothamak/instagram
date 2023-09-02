import Profilewidget from "../profilewidget/Profilewidget";
import Suggestedwidget from "../usersuggestions/suggestedwidget";
import "../../App.css";

function Instamainpage() {
  return (
    <div className="rightside-content">
      <Profilewidget />
      <Suggestedwidget />
    </div>
  );
}
export default Instamainpage;
