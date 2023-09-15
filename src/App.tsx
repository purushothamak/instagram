import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Instamainpage from "./components/mainpage/InstaMainPage";
import Profilemainpage from "./components/userprofilepage/ProfileMainPage";
import Search from "./components/searchuser/Search";
import AddPostMainPage from "./components/AddPost/AddPostmainpage";
import JustDisplay from "./components/Extra/JustDisplay";
import Explore from "./components/ExplorePage/Explore";
import InstaSideBar from "./components/Sidebar/InstaSideBar";
import Loginpage from "./components/LoginPage/Loginpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Loginpage />
            </div>
          }
        />
        <Route path="/" element={<Loginpage />} />
        <Route path="/home" element={<Instamainpage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/userprofile" element={<Profilemainpage />} />
        <Route path="/SearchUser" element={<Search />} />
        <Route path="/AddPost" element={<AddPostMainPage />} />
        <Route path="/*" element={<JustDisplay />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
