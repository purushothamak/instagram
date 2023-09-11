import { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { useNavigate } from "react-router-dom";

function AddPost() {
  const [username, setUsername] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState<string | null>("");
  const navigate = useNavigate();
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = e.target.files?.[0];

    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          setImageURL(event.target.result as string);
        }
      };
      reader.readAsDataURL(selectedImage);
      setImage(selectedImage);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!image || !username) {
      alert("Please add the title and image.");
      return;
    }
    console.log("Submitted:", { username, image, description });
    const postData = { username, image: imageURL, description };
    localStorage.setItem("postData", JSON.stringify(postData));
    console.log("Submitted:", postData);
    navigate("/userprofile");
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">Add Post</Typography>
        <form
          onSubmit={handleSubmit}
          style={{ width: "100%", marginTop: "1rem" }}
        >
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            margin="normal"
          />
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="image-upload"
            type="file"
            onChange={handleImageChange}
          />
          <label htmlFor="image-upload">
            <IconButton color="primary" component="span">
              <PhotoCameraIcon />
            </IconButton>
          </label>
          <Typography variant="body1" color="textSecondary">
            Select Image
          </Typography>
          {imageURL && (
            <img src={imageURL} alt="Selected" style={{ maxWidth: "100%" }} />
          )}
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default AddPost;
