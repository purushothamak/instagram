import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardActions,
  IconButton,
  CardHeader,
  Box,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { MoreHoriz } from "@mui/icons-material";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

interface PostData {
  username: string;
  description: string;
  image?: string;
}

const PostCard: React.FC<{ postData: PostData }> = ({ postData }) => {
  return (
    <Card sx={{ maxWidth: 385, marginBottom: 5 }}>
      <CardHeader
        avatar={<Avatar alt={postData.username} src={postData.image} />}
        title={
          <Typography sx={{ textAlign: "left" }}>
            {postData.username}
          </Typography>
        }
        action={
          <IconButton aria-label="settings">
            <MoreHoriz />
          </IconButton>
        }
      />
      {postData.image && (
        <CardMedia
          component="img"
          height="354"
          loading="lazy"
          image={postData.image}
        />
      )}
      <CardContent sx={{ textAlign: "left" }}>
        <Typography variant="body2">{postData.description}</Typography>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Box>
          <IconButton aria-label="like">
            <FavoriteBorderRoundedIcon />
          </IconButton>
          <IconButton aria-label="add to messages">
            <ChatBubbleOutlineRoundedIcon />
          </IconButton>
          <IconButton aria-label="share">
            <SendOutlinedIcon />
          </IconButton>
        </Box>
        <Box>
          <IconButton aria-label="save">
            <BookmarkBorderOutlinedIcon />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
};

export default PostCard;
