import React, { useState } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Dialog from '@mui/material/Dialog';
import { settionsOptions } from './SettingsMock';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';

export interface SimpleDialogProps {
    open: boolean;
    selectedValue?: string;
    onClose: (value?: string) => void;
    id?: number | string;
    title?: string;
}
interface settingsProps {
    settingOpen: boolean;
    handleClose: (value?: string) => void;
}


function SimpleDialog(props: SimpleDialogProps) {
    const { onClose, selectedValue, open } = props;
    const [snakOpen, setSnakOpen] = useState(false);

    const handleDetails = (ids: number) => {
        if (ids === 1) {
            setSnakOpen(true)
        }
    }

    const handleClose = () => {
        onClose(selectedValue);
    };
    return (
        <Dialog onClose={handleClose} open={open}>
            <List sx={{ pt: 0, px: 8, justifyContent: 'center' }}>
                {settionsOptions.map((options) => (
                    <ListItem disableGutters key={options.id} sx={{ my: -1 }}>
                        <ListItemButton>
                            <ListItemText primary={options.title} sx={{ display: 'flex', justifyContent: 'center' }} onClick={() => handleDetails(options.id)} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Snackbar open={snakOpen} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    Reported Successfully
                </Alert>
            </Snackbar>
        </Dialog>
    );
}

const EditFeeds: React.FC<settingsProps> = ({ settingOpen, handleClose }) => {
    return (
        <SimpleDialog
            open={settingOpen}
            onClose={handleClose} />
    )
}

export default EditFeeds