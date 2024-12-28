import React from 'react';
import { Grid, Button, Typography } from '@mui/material';

const ModalContentDelete = ({ handleDelete, handleClose }) => {
  return <>
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Are you sure?
        </Typography>
      </Grid>
      <Grid item>
        <Button
          onClick={handleDelete}
          variant='outlined'
          aria-label='delete-yes'
          sx={{
            marginTop: 1,
          }}
        >
          Yes
        </Button>
        <Button
          onClick={handleClose}
          variant='outlined'
          aria-label='delete-no'
          sx={{
            marginTop: 1,
          }}
        >
          No
        </Button>
      </Grid>
    </Grid>
  </>
}

export default ModalContentDelete;
