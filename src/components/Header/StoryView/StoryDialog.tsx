import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Toolbar } from '@mui/material';
import StoryPreview from './StoryPreview';
import { StyledDialog } from './StoryDialog.style';



interface StoryDialogProps {
    open: boolean;
    handleClose: () => void;
    profiles: {}
    userIds?: number;
}

const StoryDialog: React.FC<StoryDialogProps> = ({ open, handleClose, userIds }) => {

    return (
        <StyledDialog
            fullScreen
            open={open}
            onClose={handleClose}
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
        </StyledDialog>
    )
}

export default StoryDialog;