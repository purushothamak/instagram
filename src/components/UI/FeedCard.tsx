import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import { MoreHoriz } from "@mui/icons-material";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import LikeButton from "../FeedsSection/LikeButton";
import SaveButton from "../FeedsSection/SaveButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import SnackBar from "../UI/SnackBar";
import EditFeeds from "../FeedsSection/EditFeeds";
import PostComments from "../FeedsSection/PostComments";

interface Post {
  uId: number;
  uImg: string;
  uProfileLogo: string;
  uName: string;
  id: number;
  uBrand: string;
  username: string;
  description: string;
  image?: string;
}

interface FeedCardProps {
  post: Post;
  handleOpenSettings: () => void;
  handleCommentClick: (comUserId: number) => void;
  handleSavePosts: (posts: Post) => void;
  handleCommentsClose: () => void;
  comments2: any;
  snackOpen: boolean;
  snackHandleClose: (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => void;
  settingOpen: boolean;
  handleClose: () => void;
  commentsOpen: boolean;
  commentEachId: any;
}

const FeedCard: React.FC<FeedCardProps> = ({
  post,
  handleOpenSettings,
  handleCommentClick,
  handleCommentsClose,
  handleSavePosts,
  comments2,
  snackOpen,
  snackHandleClose,
  settingOpen,
  handleClose,
  commentsOpen,
  commentEachId,
}) => {
  return (
    <Card sx={{ maxWidth: 385, marginBottom: 5 }}>
      <CardHeader
        avatar={<Avatar alt={post.uName} src={post.uProfileLogo} />}
        title={<Typography sx={{ textAlign: "left" }}>{post.uName}</Typography>}
        action={
          <IconButton aria-label="settings" onClick={handleOpenSettings}>
            <MoreHoriz />
          </IconButton>
        }
      />
      <CardMedia
        component="img"
        height="354"
        loading="lazy"
        image={post.uImg}
        alt={post.uName}
      />
      <CardActions
        disableSpacing
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Box>
          <LikeButton postId={post.uId} />
          <IconButton
            aria-label="add to messages"
            onClick={() => handleCommentClick(post.uId)}
          >
            <ChatBubbleOutlineRoundedIcon />
          </IconButton>
          <IconButton aria-label="share">
            <SendOutlinedIcon />
          </IconButton>
        </Box>
        <Box>
          <IconButton aria-label="save" onClick={() => handleSavePosts(post)}>
            <SaveButton />
          </IconButton>
        </Box>
      </CardActions>
      {comments2[post.uId]?.map(
        (
          comment: {
            text: string;
          },
          i: React.Key | null | undefined
        ) => (
          <List key={i} sx={{ pl: 2 }}>
            <ListItem disablePadding>
              <ListItemText primary={comment.text} />
            </ListItem>
          </List>
        )
      )}
      <SnackBar snackOpen={snackOpen} snackHandleClose={snackHandleClose} />
      {settingOpen && (
        <EditFeeds settingOpen={settingOpen} handleClose={handleClose} />
      )}
      {commentsOpen && (
        <PostComments
          commentsOpen={commentsOpen}
          handleCommentsClose={handleCommentsClose}
          commentEachId={commentEachId}
        />
      )}
    </Card>
  );
};

export default FeedCard;
