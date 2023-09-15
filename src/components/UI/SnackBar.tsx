import { Snackbar } from '@mui/material'
import React from 'react';

interface snack {
    snackOpen: boolean;
    snackHandleClose: (event: React.SyntheticEvent | Event, reason?: string) => void;
};
const SnackBar: React.FC<snack> = ({ snackOpen, snackHandleClose }) => {
    return (
        <div>
            <div>
                <Snackbar
                    open={snackOpen}
                    autoHideDuration={3000}
                    onClose={snackHandleClose}
                    message="Saved Post"
                />
            </div>
        </div>
    )
}

export default SnackBar