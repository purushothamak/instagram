import { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { MoreHoriz } from '@mui/icons-material';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import { AppBar, Box } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';



interface Post {
    id: number;
    title: string;
    images: string;
}

const InstaFeeds = () => {

    const [posts, setPosts] = useState<Post[]>([]);
    const drawerWidth = 240;

    useEffect(() => {
        const instaPostsDatas = async () => {
            try {
                const allPosts = await fetch(`https://api.escuelajs.co/api/v1/products
                `);
                if (!allPosts.ok) {
                    throw new Error('Network response was not ok');
                }
                const post = await allPosts.json();
                console.log("check posts::", post)
                setPosts((prevPosts) => [...prevPosts, ...post]);

            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        instaPostsDatas();
    }, []);


    return (
        <Box
            component="main"
            // sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                height: { sm: `calc(100% - ${AppBar}px)` },
                ml: { sm: `${drawerWidth}px` },
                p: { sm: 2 }
            }}
        >
            {posts.map((post, i) => (
                <Card sx={{ maxWidth: 385, marginBottom: 5 }} key={i}>
                    <CardHeader
                        avatar={
                            <Avatar alt={post.title} src={post.images} />
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreHoriz />
                            </IconButton>
                        }
                        title={post.title}
                    />
                    <LazyLoadImage
                        effect='blur'
                        height="354"
                        loading="lazy"
                        src={post.images[1]}
                        alt={post.title}
                    />

                    <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
                            <IconButton aria-label="save" sx={{ justifySelf: 'flex-end' }}>
                                <BookmarkBorderOutlinedIcon />
                            </IconButton>
                        </Box>
                    </CardActions>
                </Card>
            ))
            }
        </Box>
    )
}

export default InstaFeeds






   // https://dummyjson.com/products