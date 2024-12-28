import React from 'react';
import { Grid, TextField, Button } from '@mui/material';

const ModalContentTitle = ({ title, handleEditTitle, setTitle }) => {
  return <>
    <Grid container justifyContent="space-between" alignItems="center">
    <Grid item>
      <TextField
        id="filled-title"
        label="Edit Presentation Title"
        defaultValue={title}
        variant="filled"
        onChange={ (e) => {
          setTitle(e.target.value)
        }}
      />
    </Grid>
    <Grid item>
      <Button
        onClick={handleEditTitle}
        variant='outlined'
        aria-label='title-submit'
        sx={{
          marginTop: 1,
        }}
      >
        Submit
      </Button>
    </Grid>
    </Grid>
  </>
}

export default ModalContentTitle;
