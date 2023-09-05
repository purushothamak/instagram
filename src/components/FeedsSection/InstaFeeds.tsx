import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { MoreHoriz } from "@mui/icons-material";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import { AppBar, Box } from "@mui/material";

interface Post {
  uImg: string;
  uProfileLogo: string
  uName: string;
  id: number;
}

const InstaFeeds = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const drawerWidth = 140;

  useEffect(() => {
    const instaPostsDatas = async () => {
      try {
        const allPosts = await fetch(`https://dummyjson.com/products?_limit=9&_page=${page}
                `);
        if (!allPosts.ok) {
          throw new Error("Network response was not ok");
        }
        const postdatas = await allPosts.json();
        console.log("check posts::", postdatas.products);

        const post = postdatas.products.map((post: {
          url: any;
          images: any; title: any; id: any;
        }) => (
          {
            uName: post.title,
            uImg: post.images[1],
            uProfileLogo: `https://i.pravatar.cc/100?u=${post.id}`
          }
        ))
        console.log("Yo:", post)
        setPosts((prevPosts) => [...prevPosts, ...post]);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    instaPostsDatas();
  }, [page]);

  const handleInfiniteScroll = async () => {
    try {
      if (window.innerHeight + document.documentElement.scrollTop + 1 >
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleInfiniteScroll);
    return () => window.removeEventListener('scroll', handleInfiniteScroll)
  }, []);

  // const yes = posts.map((x) => {
  //   const str = x.uName;
  //   const firstName = str.split(' ')[0]
  //   return firstName;
  // })

  // console.log(yes)

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
            avatar={<Avatar alt={post.title} src={post.uProfileLogo} />}
            action={
              <IconButton aria-label="settings">
                <MoreHoriz />
              </IconButton>
            }

            title={post.uName}
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
              <IconButton aria-label="add to favorites">
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
              <IconButton aria-label="save" sx={{ justifySelf: "flex-end" }}>
                <BookmarkBorderOutlinedIcon />
              </IconButton>
            </Box>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default InstaFeeds;

// https://dummyjson.com/products
