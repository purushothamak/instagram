import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
<<<<<<< Updated upstream
=======
import { useNavigate } from "react-router-dom";
import React from "react";

interface PostData {
  username: string;
  description: string;
  image: string | null;
}
>>>>>>> Stashed changes

function AddPost() {
  const [postData, setPostData] = useState<PostData[]>([]);
  const [username, setUsername] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
<<<<<<< Updated upstream
=======
  const [imageURL, setImageURL] = useState<string | null>("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = localStorage.getItem("postData");
    if (storedData) {
      setPostData(JSON.parse(storedData));
    }
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = e.target.files?.[0];
>>>>>>> Stashed changes

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
<<<<<<< Updated upstream

    console.log("Submitted:", { username, image, description });
    const postData = { username, image, description };
    sessionStorage.setItem("postData", JSON.stringify(postData));
    console.log("Submitted:", postData);
=======
    if (!image || !username) {
      alert("Please add the title and image.");
      return;
    }

    const newPost: PostData = { username, image: imageURL, description };

    const updatedPostData = [...postData, newPost];

    setPostData(updatedPostData);

    localStorage.setItem("postData", JSON.stringify(updatedPostData));

    navigate("/userprofile");
>>>>>>> Stashed changes
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
