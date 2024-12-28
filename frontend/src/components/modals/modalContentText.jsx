import React from 'react';
import { Grid, TextField, Button, Typography } from '@mui/material';

const ModalContentText = ({ handleCreateTextElement, setTextForm }) => {
  return <>
  <Grid container direction="column" justifyContent="space-between" alignItems="center" spacing={2}>
    <Grid item sx={{ width: '100%' }}>
      <Typography
        variant='h5'
      >Add a Text Box</Typography>
    </Grid>
    <Grid item sx={{ width: '100%' }}>
      <TextField
        id="filled-textArea"
        label="Text Area Size"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        variant="filled"
        onChange={(e) => {
          setTextForm(prevForm => ({ ...prevForm, textArea: e.target.value }))
        }}
        fullWidth
      />
    </Grid>
    <Grid item sx={{ width: '100%' }}>
      <TextField
        id="filled-text"
        label="Text"
        variant="filled"
        multiline
        minRows={6}
        onChange={(e) => {
          setTextForm(prevForm => ({ ...prevForm, text: e.target.value }))
        }}
        fullWidth
      />
    </Grid>
    <Grid item sx={{ width: '100%' }}>
      <TextField
        id="filled-fontSize"
        label="Font Size"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        variant="filled"
        onChange={(e) => {
          setTextForm(prevForm => ({ ...prevForm, fontSize: e.target.value }))
        }}
        fullWidth
      />
    </Grid>
    <Grid item sx={{ width: '100%' }}>
      <TextField
        id="filled-colour"
        label="Colour as Hex Code i.e (ffff)"
        variant="filled"
        onChange={(e) => {
          setTextForm(prevForm => ({ ...prevForm, colourAsHex: e.target.value }))
        }}
        fullWidth
      />
    </Grid>
    <Grid item sx={{ width: '100%' }}>
      <Button
        onClick={() => handleCreateTextElement()}
        variant='outlined'
        aria-label='text-submit'
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

export default ModalContentText;
