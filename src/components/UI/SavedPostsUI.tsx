import React, { useEffect, useState } from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useCommentContext } from '../../Context/CommentsDatas.context';

interface SavedProps {
    id: number;
    title: string;
    thumbnail: string;
    brand: string;

}
const SavedPostsUI = () => {

    const { savedPostId } = useCommentContext();
    const [savedPostState, setSavedPostState] = useState<SavedProps[]>([]);

    console.log("gay", savedPostState)
    useEffect(() => {
        const instaPostsDatas = async () => {
            try {
                const allPosts = await fetch(`https://dummyjson.com/products/${savedPostId}`);
                if (!allPosts.ok) {
                    throw new Error("Network response was not ok");
                }
                const postdatas = await allPosts.json();
                console.log("Comment Each User::", postdatas);
                // setSavedPostState([...postdatas, postdatas]);
                setSavedPostState([postdatas]);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };
        instaPostsDatas();
    }, [savedPostId])



    return (
        <div>
            <ImageList sx={{ width: 500, height: 450 }}>
                {savedPostState.map((item, i) => (
                    <ImageListItem key={i}>
                        <img
                            src={`${item.thumbnail}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.thumbnail}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={<span>by: {item.brand}</span>}
                            position="below"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    )
}


export default SavedPostsUI