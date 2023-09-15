import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React, { useState } from 'react'


interface likeProp {
    postId: string | number;
}
const LikeButton: React.FC<likeProp> = () => {

    const [like, setLike] = useState(false);
    const [likes, setLikes] = useState(0);

    const handleClick = () => {
        setLike(!like)
    }

    return (
        <IconButton onClick={handleClick} color={like ? 'error' : 'default'}>
            {like ? <Favorite /> : <FavoriteBorder />}
        </IconButton>
    )
}

export default LikeButton