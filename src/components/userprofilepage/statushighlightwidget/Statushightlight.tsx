import { useState, useEffect } from "react";
import "./StatusHightlight.css";
import StatusHighlightItem from "./StatusHighlightItem";
import Statusimg from "../../../assets/travelocity.jpeg";
import Statusimg1 from "../../../assets/status-1.jpeg";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Grid, Typography } from "@mui/material";

interface StatusItem {
  imageSrc: string;
  highlightname: string;
}

function StatusHighlight() {
  const [statusData, setStatusData] = useState<StatusItem[]>([]);
  const [newStatus, setNewStatus] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const initialStatusData: StatusItem[] = [
    {
      imageSrc: Statusimg1,
      highlightname: "highlight",
    },
    {
      imageSrc: Statusimg,
      highlightname: "travel",
    },
  ];
  useEffect(() => {
    setStatusData(initialStatusData);
    localStorage.setItem("status", JSON.stringify(initialStatusData));
  }, []);

  useEffect(() => {
    const savedStatuses = localStorage.getItem("status");
    if (savedStatuses) {
      setStatusData(JSON.parse(savedStatuses));
    }
  }, []);

  const handleAddStatus = () => {
    if (newStatus.trim() !== "" && selectedImage) {
      setStatusData([
        ...statusData,
        {
          imageSrc: URL.createObjectURL(selectedImage),
          highlightname: newStatus,
        },
      ]);
      setNewStatus("");
      setSelectedImage(null);
      closeDialog();
    }
  };

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

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
          onClick={openDialog}
        >
          <AddIcon />
        </IconButton>
        <Grid item>
          <Typography sx={{ mt: 1.5 }}>Add Status</Typography>
        </Grid>
        <Dialog open={isDialogOpen} onClose={closeDialog}>
          <DialogTitle>Add New Status</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Enter a title"
              fullWidth
              value={newStatus}
              onChange={(e) => setNewStatus(e.target.value)}
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const selectedFile = e.target.files?.[0];
                if (selectedFile) {
                  setSelectedImage(selectedFile);
                }
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleAddStatus} color="primary">
              Add
            </Button>
            <Button onClick={closeDialog} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default StatusHighlight;
