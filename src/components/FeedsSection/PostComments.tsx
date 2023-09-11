import React, { useEffect, useState } from 'react';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';
import { BootstrapDialog } from './PostComments.style';
import { Box, Button, FormControl, List, ListItem, ListItemText, TextField, Theme, useMediaQuery } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { useTheme } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';


interface commentsProps {
    commentsOpen: boolean;
    handleCommentsClose: () => void;
    commentEachId?: number;
    // images: string[];
}

interface pp {
    thumbnail?: string;
}
interface Comment {
    id: number;
    text: string;
}

const PostComments: React.FC<commentsProps> = ({ commentsOpen, handleCommentsClose, commentEachId }) => {
    const theme = useTheme<Theme>();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const [commentEachDetails, setCommentEachDetails] = useState<pp>({});
    const [comments, setComments] = useState<Comment[]>([]);
    const [newComment, setNewComment] = useState<string>('');

    const { thumbnail, title, brand }: { thumbnail?: string, title?: string, brand?: string } = commentEachDetails


    useEffect(() => {
        const instaPostsDatas = async () => {
            try {
                const allPosts = await fetch(`https://dummyjson.com/products/${commentEachId}`);
                if (!allPosts.ok) {
                    throw new Error("Network response was not ok");
                }
                const postdatas = await allPosts.json();
                console.log("Comment Each User::", postdatas);
                setCommentEachDetails(postdatas);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };
        instaPostsDatas();
    }, [commentEachId])

    const proPic = `https://i.pravatar.cc/100?u=${commentEachId}`

    const handleAddComment = () => {
        if (newComment.trim() !== '') {
            const comment: Comment = {
                id: Date.now(),
                text: newComment,
            };
            setComments([...comments, comment]);
            setNewComment('');
        }
    };


    return (
        <BootstrapDialog
            onClose={handleCommentsClose}
            aria-labelledby="customized-dialog-title"
            open={commentsOpen}
        >
            <IconButton
                aria-label="close"
                onClick={handleCommentsClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <CloseIcon />
            </IconButton>
            <DialogContent dividers >
                <Card sx={{ display: 'flex' }}>
                    {!isMobile && <img src={thumbnail} alt="pic" style={{ minWidth: 295, objectFit: 'cover' }} />}
                    <Card sx={{ minWidth: 295, minHeight: 545, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" src={proPic} />
                            }
                            title={title}
                            subheader={brand}
                        />
                        <CardContent sx={{ flex: 1 }}>
                            <Typography variant="body2" color="text.secondary">
                                <Box marginTop={2}>
                                    <List>
                                        {comments.map((comment) => (
                                            <ListItem key={comment.id}>
                                                <ListItemText primary={comment.text} />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Box>
                            </Typography>
                        </CardContent>
                        <CardContent >
                            <FormControl fullWidth sx={{ pr: 2 }} variant="standard">
                                <TextField id="outlined-basic" variant="outlined"
                                    value={newComment}
                                    onChange={(e) => setNewComment(e.target.value)}
                                    sx={{ mb: 1 }}
                                />
                                <Button variant="contained" onClick={handleAddComment}>
                                    Add Comment
                                </Button>
                            </FormControl>
                        </CardContent>
                    </Card>
                </Card>
            </DialogContent>
        </BootstrapDialog>

    )
}

export default PostComments