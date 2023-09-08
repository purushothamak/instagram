import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Instamainpage from "./components/mainpage/InstaMainPage";
import Profilemainpage from "./components/userprofilepage/ProfileMainPage";
import Search from "./components/searchuser/Search";
import AddPostMainPage from "./components/AddPost/AddPostmainpage";
import JustDisplay from "./components/Extra/JustDisplay";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Instamainpage />} />
        <Route path="/userprofile" element={<Profilemainpage />} />
        <Route path="/SearchUser" element={<Search />} />
        <Route path="/AddPost" element={<AddPostMainPage />} />
        <Route path="/*" element={<JustDisplay />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
