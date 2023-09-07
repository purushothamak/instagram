import { useEffect, useState } from "react";
import {
  Avatar,
  ImageList,
  ImageListItem,
  Typography,
  createTheme,
  useMediaQuery,
} from "@mui/material";

const theme = createTheme();
const HeaderStories = () => {
  const [profiles, setProfiles] = useState<
    { uName: string; imageUrl: string }[]
  >([]);
  //   const drawerWidth = 240;
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  useEffect(() => {
    const renderUserProfiles = async () => {
      try {
        const userProfiles = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!userProfiles.ok) {
          throw new Error("Network error.");
        }

        const profileDatas = await userProfiles.json();
        console.log("qUIN dATAS:", profileDatas);

        const profile = profileDatas.map((profile: any) => ({
          uName: profile.name,
          imageUrl: `https://i.pravatar.cc/100?u=${profile.id}`,
        }));

        setProfiles(profile);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    renderUserProfiles();
  }, []);

  return (
    <ImageList
      sx={{
        gridAutoFlow: "column",
        gridTemplateColumns: "repeat(auto-fill,minmax(60px,1fr)) !important",
        gridAutoColumns: "minmax(60px, 1fr)",
        mx: isMobile ? 0 : 0,
        mr: isMobile ? 0 : 20,
        ml: isMobile ? 0 : 18,
        mt: isMobile ? 0 : -40,
      }}
    >
      {profiles.map((profStory, i) => (
        <ImageListItem key={i} sx={{ width: 100 }}>
          <Avatar
            alt={profStory.uName}
            src={profStory.imageUrl}
            sx={{
              border: 1.5,
              height: 56,
              width: 56,
              borderColor: "error.main",
            }}
          />
          <Typography
            variant="body2"
            noWrap
            gutterBottom
            sx={{
              fontSize: 12,
              overflow: "hidden",
              color: "black",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              maxWidth: "60px",
            }}
          >
            {profStory.uName}
          </Typography>
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default HeaderStories;
