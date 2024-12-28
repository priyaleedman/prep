import React from 'react';
import { Grid, TextField, Button, Typography } from '@mui/material';

const ModalContentPhoto = ({ handleSubmit, imageForm, setImageForm, currentElement }) => {
  React.useEffect(() => {
    if (currentElement !== null) {
      setImageForm(prevForm => ({ ...prevForm, imageArea: currentElement.width }))
      setImageForm(prevForm => ({ ...prevForm, src: currentElement.src }))
      setImageForm(prevForm => ({ ...prevForm, description: currentElement.description }))
    } else {
      setImageForm(prevForm => ({ ...prevForm, imageArea: 0 }))
      setImageForm(prevForm => ({ ...prevForm, src: '' }))
      setImageForm(prevForm => ({ ...prevForm, description: '' }))
    }
  }, []);

  return (
    <>
      <Grid container direction="column" justifyContent="space-between" alignItems="center" spacing={2}>
        <Grid item xs={12} sx={{ width: '100%' }}>
          <Typography variant='h5'>Add a Photo</Typography>
        </Grid>
        {currentElement === null && (
          <Grid item sx={{ width: '100%' }}>
            <TextField
              id="filled-imageArea"
              label="Image Area Size"
              type="number"
              value={imageForm.imageArea}
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
              onChange={(e) => {
                setImageForm(prevForm => ({ ...prevForm, imageArea: e.target.value }))
              }}
              fullWidth
            />
          </Grid>
        )}
        <Grid item sx={{ width: '100%' }}>
          <TextField
            id="filled-src"
            label="Image URL"
            value={imageForm.src}
            variant="filled"
            onChange={(e) => {
              setImageForm(prevForm => ({ ...prevForm, src: e.target.value }))
            }}
            fullWidth
          />
        </Grid>
        <Grid item sx={{ width: '100%' }}>
          <TextField
            id="filled-description"
            label="Image Description"
            value={imageForm.description}
            variant="filled"
            onChange={(e) => {
              setImageForm(prevForm => ({ ...prevForm, description: e.target.value }))
            }}
            fullWidth
          />
        </Grid>
        <Grid item sx={{ width: '100%' }}>
          <Button
            onClick={() => handleSubmit()}
            variant='outlined'
            aria-label='photo-submit'
            sx={{
              marginTop: 1,
              width: '100%'
            }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default ModalContentPhoto;
