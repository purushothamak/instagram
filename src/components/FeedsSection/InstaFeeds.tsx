import React, { useState, useEffect, } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { MoreHoriz } from "@mui/icons-material";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { AppBar, Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import LikeButton from "./LikeButton";
import SaveButton from "./SaveButton";
import EditFeeds from "./EditFeeds";
import PostComments from "./PostComments";
import { useCommentContext } from "../../Context/CommentsDatas.context";
import SnackBar from "../UI/SnackBar";

interface Post {
  uId: number;
  uImg: string;
  uProfileLogo: string;
  uName: string;
  id: number;
  uBrand: string;
}






const InstaFeeds = () => {
  const drawerWidth = 250;
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(2);
  const [settingOpen, setSettingOpen] = useState(false);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [commentEachId, setCommentEachId] = useState<any>();
  const [snackOpen, setSnakOpenOpen] = useState(false);
  const { comments2, addSavedPosts } = useCommentContext();




  useEffect(() => {
    const instaPostsDatas = async () => {
      try {
        const allPosts = await fetch(
          `https://dummyjson.com/products?_limit=9&_page=${page}`
        );
        if (!allPosts.ok) {
          throw new Error("Network response was not ok");
        }
        const postdatas = await allPosts.json();
        // console.log("check posts::", postdatas.products);

        const post = postdatas.products.map((post: {
          url: any;
          images: any; title: any; id: any; brand: any
        }) => (
          {
            uId: post.id,
            uName: post.title,
            uImg: post.images[1],
            uBrand: post.brand,
            uProfileLogo: `https://i.pravatar.cc/100?u=${post.id}`
          }
        ))
        // console.log("Yo:", post)
        setPosts((prevPosts) => [...prevPosts, ...post]);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    instaPostsDatas();
  }, [page]);

  const handleInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  const handleOpenSettings = () => {
    setSettingOpen(true);
  }
  const handleClose = (_value?: string) => {  //prefix
    setSettingOpen(false);
  };
  const handleCommentClick = (comUserId: number) => {
    setCommentsOpen(!commentsOpen)
    setCommentEachId(comUserId)

  }
  const handleCommentsClose = () => {
    setCommentsOpen(false);
  };


  const handleSavePosts = (posts: Post) => {
    console.log('90909090', posts)
    addSavedPosts(posts);
    setSnakOpenOpen(true);
  }
  const snackHandleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnakOpenOpen(false);
  };


  return (
    <Box
      component="main"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        height: { sm: `calc(100% - ${AppBar}px)` },
        ml: { sm: `${drawerWidth}px` },
        p: { sm: 2 },
      }}
    >
      {posts.map((post, i) => (
        <Card sx={{ maxWidth: 385, marginBottom: 5 }} key={i}>
          <CardHeader
            avatar={<Avatar alt={post.uName} src={post.uProfileLogo} />}
            title={<Typography sx={{ textAlign: 'left' }}>{post.uName}</Typography>}
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
              <LikeButton postId={post.id} />
              <IconButton aria-label="add to messages" onClick={() => handleCommentClick(post.uId)}>
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
          {comments2[post.uId]?.map((comment, i) => (
            <List key={i} sx={{ pl: 2 }}>
              <ListItem disablePadding>
                <ListItemText primary={comment.text} />
              </ListItem>
            </List>
          ))}
        </Card>
      ))}
      <SnackBar snackOpen={snackOpen} snackHandleClose={snackHandleClose} />
      {settingOpen && <EditFeeds settingOpen={settingOpen} handleClose={handleClose} />}
      {commentsOpen && <PostComments commentsOpen={commentsOpen} handleCommentsClose={handleCommentsClose} commentEachId={commentEachId} />}

    </Box>
  );
};

export default InstaFeeds;
