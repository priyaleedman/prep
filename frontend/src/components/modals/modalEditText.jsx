import React from 'react';
import { Grid, TextField, Button, Typography, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const ModalEditText = ({ handleEditTextElement, editTextForm, setEditTextForm, currentElement }) => {
  // pass in prop, inside state display tecxt, use effect set state , triggers display
  const fontOptions = ['Arial', 'Times New Roman', 'Verdana', 'Courier New'];

  // Prepoulated input with current element values
  React.useEffect(() => {
    setEditTextForm(prevForm => ({ ...prevForm, textArea: currentElement.width }))
    setEditTextForm(prevForm => ({ ...prevForm, text: currentElement.content }))
    setEditTextForm(prevForm => ({ ...prevForm, fontSize: currentElement.fontSize }))
    setEditTextForm(prevForm => ({ ...prevForm, colourAsHex: currentElement.fontColor }))
    setEditTextForm(prevForm => ({ ...prevForm, fontFamily: currentElement.fontFamily }))
  }, []);

  return <>
  <Grid container direction="column" justifyContent="space-between" alignItems="center" spacing={2}>
    <Grid item sx={{ width: '100%' }}>
      <Typography
        variant='h5'
      >Edit Text Box</Typography>
    </Grid>
    <Grid item sx={{ width: '100%' }}>
      <TextField
        id="filled-textArea"
        label="Text Area Size"
        type="number"
        value={editTextForm.textArea}
        variant="filled"
        onChange={(e) => {
          setEditTextForm(prevForm => ({ ...prevForm, textArea: e.target.value }))
        }}
        fullWidth
      />
    </Grid>
    <Grid item sx={{ width: '100%' }}>
      <TextField
        id="filled-text"
        label="Text"
        value={editTextForm.text}
        variant="filled"
        multiline
        minRows={6}
        onChange={(e) => {
          setEditTextForm(prevForm => ({ ...prevForm, text: e.target.value }))
        }}
        fullWidth
      />
    </Grid>
    <Grid item sx={{ width: '100%' }}>
      <TextField
        id="filled-fontSize"
        label="Font Size"
        type="number"
        value={editTextForm.fontSize}
        variant="filled"
        onChange={(e) => {
          setEditTextForm(prevForm => ({ ...prevForm, fontSize: e.target.value }))
        }}
        fullWidth
      />
    </Grid>
    <Grid item sx={{ width: '100%' }}>
      <TextField
        id="filled-colour"
        label="Colour as Hex Code i.e (ffffff)"
        value={editTextForm.colourAsHex}
        variant="filled"
        onChange={(e) => {
          setEditTextForm(prevForm => ({ ...prevForm, colourAsHex: e.target.value }))
        }}
        fullWidth
      />
    </Grid>
    <Grid item sx={{ width: '100%' }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" sx={{ marginTop: '14px' }}>Font</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="font-family"
          label="Font"
          value={editTextForm.fontFamily}
          onChange={(e) => {
            setEditTextForm(prevForm => ({ ...prevForm, fontFamily: e.target.value }))
          }}
          variant="filled"
        >
          {fontOptions.map((option, index) => (
            <MenuItem key={index} value={option}>{option}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
    <Grid item sx={{ width: '100%' }}>
      <Button
        onClick={() => handleEditTextElement()}
        variant='outlined'
        aria-label='editText-submit'
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

export default ModalEditText;
