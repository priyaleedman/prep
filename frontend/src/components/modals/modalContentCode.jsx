import React from 'react';
import { Grid, TextField, Button, Typography } from '@mui/material';

const ModalContentCode = ({ handleSubmit, codeForm, setCodeForm, currentElement }) => {
  React.useEffect(() => {
    if (currentElement !== null) {
      setCodeForm(prevForm => ({ ...prevForm, codeArea: currentElement.width }))
      setCodeForm(prevForm => ({ ...prevForm, code: currentElement.content }))
      setCodeForm(prevForm => ({ ...prevForm, codeSize: currentElement.fontSize }))
    } else {
      setCodeForm(prevForm => ({ ...prevForm, codeArea: 0 }))
      setCodeForm(prevForm => ({ ...prevForm, code: '' }))
      setCodeForm(prevForm => ({ ...prevForm, codeSize: 12 }))
    }
  }, []);

  return <>
  <Grid container direction="column" justifyContent="space-between" alignItems="center" spacing={2}>
    <Grid item xs={12} sx={{ width: '100%' }}>
      <Typography variant='h5'>Add a Code Block</Typography>
    </Grid>
    {currentElement === null && (
      <Grid item xs={12} sx={{ width: '100%' }}>
        <TextField
          id="filled-codeArea"
          label="Code Area Size"
          type="number"
          value={codeForm.codeArea}
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          onChange={(e) => {
            setCodeForm(prevForm => ({ ...prevForm, codeArea: e.target.value }))
          }}
          fullWidth
        />
      </Grid>
    )}
    <Grid item xs={12} sx={{ width: '100%' }}>
      <TextField
        id="filled-code"
        label="Code"
        value={codeForm.code}
        variant="filled"
        multiline
        minRows={4}
        onChange={(e) => {
          setCodeForm(prevForm => ({ ...prevForm, code: e.target.value }))
        }}
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sx={{ width: '100%' }}>
      <TextField
        id="filled-codeSize"
        label="Code Size"
        type="number"
        value={codeForm.codeSize}
        InputLabelProps={{
          shrink: true,
        }}
        variant="filled"
        onChange={(e) => {
          setCodeForm(prevForm => ({ ...prevForm, codeSize: e.target.value }))
        }}
        fullWidth
      />
    </Grid>
    <Grid item xs={12} sx={{ width: '100%' }}>
      <Button
        onClick={() => handleSubmit()}
        variant='outlined'
        aria-label='code-submit'
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

export default ModalContentCode;
