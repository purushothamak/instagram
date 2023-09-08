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
        <div>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
            >
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h3>Instagram</h3>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                </Toolbar>
                <StoryPreview userIds={userIds} />
            </Dialog>
        </div>
    )
}

export default StoryDialog;