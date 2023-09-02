import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./components/profilewidget/Profilewidget.tsx";
import Instamainpage from "./components/mainpage/instamainpage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Instamainpage />
  </React.StrictMode>
);
