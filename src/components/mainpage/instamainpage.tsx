import Profilewidget from "../profilewidget/Profilewidget";
import Suggestedwidget from "../usersuggestions/suggestedwidget";
import InstaSideBar from "../Sidebar/InstaSideBar";
import HeaderStories from "../Header/HeaderStories";
import InstaFeeds from "../FeedsSection/InstaFeeds";
import "../../App.css";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme();

function Instamainpage() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div>
          <Profilewidget />
          <Suggestedwidget />
        </div>
      </ThemeProvider>
      <div>
        <div>
          <HeaderStories />
          <InstaSideBar />
          <InstaFeeds />
        </div>
      </div>
    </>
  );
}
export default Instamainpage;
