
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Instamainpage from "./components/mainpage/InstaMainPage";
import Profilemainpage from "./components/userprofilepage/ProfileMainPage";
import SearchUser from "./components/searchuser/SearchUser";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Instamainpage />} />
        <Route path="/userprofile" element={<Profilemainpage />} />
        <Route path="/SearchUser" element={<SearchUser />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
