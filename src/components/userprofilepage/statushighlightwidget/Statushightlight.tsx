import "./StatusHightlight.css";
import StatusHighlightItem from "./StatusHighlightItem";
import Statusimg from "../../../assets/profile-pic.jpg";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
function StatusHighlight() {
  const statusData = [
    {
      imageSrc: Statusimg,
      highlightname: "highlight",
    },
    {
      imageSrc: Statusimg,
      highlightname: "travel",
    },
    {
      imageSrc: Statusimg,
      highlightname: "highlight",
    },
    {
      imageSrc: Statusimg,
      highlightname: "travel",
    },
  ];

  return (
    <div className="status-highlight-container">
      {statusData.map((data, index) => (
        <StatusHighlightItem
          key={index}
          imageSrc={data.imageSrc}
          highlightname={data.highlightname}
        />
      ))}
      <div className="icon-tittle">
        <IconButton
          color="primary"
          sx={{
            width: "70px",
            height: "70px",
            border: "2px solid #66717d",
          }}
        >
          <AddIcon />
        </IconButton>
        <p>new</p>
      </div>
    </div>
  );
}

export default StatusHighlight;
