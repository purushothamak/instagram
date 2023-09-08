import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Dialog from '@mui/material/Dialog';
import { settionsOptions } from './SettingsMock';


export interface SimpleDialogProps {
    open: boolean;
    selectedValue: string;
    onClose: (value: string) => void;
    id: number | string;
    title: string;
}
interface settingsProps {
    settingOpen: boolean;
    handleClose: (value: string) => void;
}


function SimpleDialog(props: SimpleDialogProps) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };
    return (
        <Dialog onClose={handleClose} open={open}>
            <List sx={{ pt: 0, px: 8, justifyContent: 'center' }}>
                {settionsOptions.map((options) => (
                    <ListItem disableGutters key={options.id} sx={{ my: -1 }}>
                        <ListItemButton>
                            <ListItemText primary={options.title} sx={{ display: 'flex', justifyContent: 'center' }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Dialog>
    );
}


const EditFeeds: React.FC<settingsProps> = ({ settingOpen, handleClose }) => {
    return (
        <div>
            <SimpleDialog
                open={settingOpen}
                onClose={handleClose} id={''} title={''} selectedValue={''} />
        </div>
    )
}

export default EditFeeds