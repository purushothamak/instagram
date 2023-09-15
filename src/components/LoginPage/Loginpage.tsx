import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Loginimg from "../../assets/loginimg.png";
import { Typography } from "@mui/material";
import "./Loginpage.css";

const Loginpage: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginsuccess, setLoginsuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();
  const handleLogin = () => {
    if (username === "purus" && password === "Password@123") {
      setLoginsuccess(true);
      navigate("/home");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} className="hideOnMobile">
          {
            <img
              src={Loginimg}
              style={{
                width: "80%",
                height: "100%",
                display: "block",
              }}
            />
          }
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper
            elevation={3}
            style={{ padding: "16px", position: "relative", top: "8em" }}
          >
            <img
              src="https://www.oidenmaturi.com/wp-content/themes/oiden-theme/resource/img/instagram_title.png"
              style={{ width: "80%" }}
            />

            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              margin="normal"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleLogin}
            >
              Login
            </Button>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <Typography
              style={{
                marginTop: "2em",
              }}
            >
              Get the app.
            </Typography>
            <div
              style={{
                display: "flex",
                marginTop: "1em",
                marginLeft: "1.5em",
              }}
            >
              <a>
                <img
                  src="https://static.cdninstagram.com/rsrc.php/v3/yt/r/Yfc020c87j0.png"
                  alt="Download on App Store"
                  style={{ width: "120%", height: "90%" }}
                />
              </a>
              <a>
                <img
                  src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
                  alt="Get it on Play Store"
                  style={{ width: "60%", height: "90%" }}
                />
              </a>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Loginpage;
