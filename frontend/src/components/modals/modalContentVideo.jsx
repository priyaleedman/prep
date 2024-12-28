import React from 'react';
import { Grid, TextField, Button, Typography, Checkbox } from '@mui/material';

const ModalContentVideo = ({ handleSubmit, videoForm, setVideoForm, currentElement }) => {
  React.useEffect(() => {
    if (currentElement !== null) {
      setVideoForm(prevForm => ({ ...prevForm, videoArea: currentElement.width }))
      setVideoForm(prevForm => ({ ...prevForm, src: currentElement.src }))
      setVideoForm(prevForm => ({ ...prevForm, autoplay: currentElement.autoplay }))
    } else {
      setVideoForm(prevForm => ({ ...prevForm, videoArea: 0 }))
      setVideoForm(prevForm => ({ ...prevForm, src: '' }))
      setVideoForm(prevForm => ({ ...prevForm, autoplay: false }))
    }
  }, []);

  return <>
    <Grid container direction="column" justifyContent="space-between" alignItems="center" spacing={2}>
      <Grid item xs={12} style={{ width: '100%' }}>
        <Typography variant='h5'>
          Add a Video
        </Typography>
      </Grid>
      {currentElement === null && (
        <Grid item xs={12} style={{ width: '100%' }}>
          <TextField
            id="filled-videoArea"
            label="Video Area Size"
            type="number"
            value={videoForm.videoArea}
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            onChange={(e) => {
              setVideoForm(prevForm => ({ ...prevForm, videoArea: e.target.value }))
            }}
            fullWidth
          />
        </Grid>
      )}
      <Grid item xs={12} style={{ width: '100%' }}>
        <TextField
          id="filled-videoSrc"
          label="Video URL"
          value={videoForm.src}
          variant="filled"
          onChange={(e) => {
            setVideoForm(prevForm => ({ ...prevForm, src: e.target.value }))
          }}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} style={{ width: '100%' }}>
        <Typography variant='body1'>
          Autoplay the Video?
        </Typography>
        <Checkbox
          checked={videoForm.autoplay}
          onChange={(e) => {
            setVideoForm((prevForm) => ({
              ...prevForm,
              autoplay: e.target.checked
            }));
          }}
        />
      </Grid>
      <Grid item xs={12} style={{ width: '100%' }}>
        <Button
          onClick={() => handleSubmit()}
          variant='outlined'
          aria-label='video-submit'
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
}

export default ModalContentVideo;
