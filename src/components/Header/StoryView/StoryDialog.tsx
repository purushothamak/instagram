import React from 'react'

import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Toolbar } from '@mui/material';
import StoryPreview from './StoryPreview';



interface StoryDialogProps {
    open: boolean;
    handleClose: () => void;
    profiles: {}
    userIds?: number;
}

const StoryDialog: React.FC<StoryDialogProps> = ({ open, handleClose, userIds }) => {


    return (
        <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            sx={{ backgroundColor: 'black' }}
        >
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', color: 'white', backgroundColor: 'black' }}>
                <h3>Instagram</h3>
                <IconButton
                    edge="start"
                    color="inherit"
                    onClick={handleClose}
                    aria-label="close"
                >
                    <CloseIcon sx={{ color: 'white' }} />
                </IconButton>
            </Toolbar>
            <StoryPreview userIds={userIds} />
        </Dialog>

    )
}

export default StoryDialog;