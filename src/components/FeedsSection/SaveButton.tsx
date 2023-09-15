import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { IconButton } from '@mui/material'
import React, { useState } from 'react'

const SaveButton = () => {
    const [save, setSave] = useState(false);

    const handleClick = () => {
        setSave(!save)
    }
    return (
        <IconButton onClick={handleClick} color={save ? 'white' : 'default'}>
            {save ? <BookmarkIcon /> : < BookmarkBorderIcon />}
        </IconButton>
    )
}

export default SaveButton