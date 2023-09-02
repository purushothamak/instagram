import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Instamainpage from "./components/mainpage/instamainpage";
import Userprofile from "./components/userprofilepage/userprofile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Instamainpage />} />
        <Route path="/userprofile" element={<Userprofile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
