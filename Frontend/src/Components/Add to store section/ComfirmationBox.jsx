import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';

const ConfirmationPopup = ({ open, handleClose, handleConfirm }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Confirm Upload</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to upload these products to the store?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant="outlined" color="secondary">
          No
        </Button>
        <Button onClick={handleConfirm} variant="contained" color="primary">
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationPopup;
