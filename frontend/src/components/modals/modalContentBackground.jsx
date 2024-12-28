import React from 'react';
import { Grid, TextField, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const ModalContentBackground = ({ background, defaultBackground, setDefaultBackground, handleEditBackground, setBackground }) => {
  const directionOptions = ['None', 'Left to Right', 'Top to Bottom'];
  return <>
    <Grid container direction="column" justifyContent="space-between" alignItems="center" spacing={2}>
      <Grid item sx={{ width: '100%' }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label" sx={{ marginTop: '14px' }}>Choose Gradient</InputLabel>
          <Select
            labelId="select-gradient-direction"
            id="gradient-direction"
            label="Gradient Direction"
            value={background.direction}
            onChange={(e) => {
              setBackground(prevForm => ({ ...prevForm, direction: e.target.value }))
            }}
            variant="filled"
          >
            {directionOptions.map((option, index) => (
              <MenuItem key={index} value={option}>{option}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item sx={{ width: '100%' }}>
        <TextField
          id="filled-background"
          label="Primary Colour"
          defaultValue={background.colourOne}
          variant="filled"
          onChange={ (e) => {
            setBackground(prevForm => ({ ...prevForm, colourOne: e.target.value }))
          }}
          fullWidth
        />
      </Grid>
      {background.direction !== 'None' && (
        <Grid item sx={{ width: '100%' }}>
          <TextField
            id="filled-background"
            label="Secondary Colour"
            defaultValue={background.colourTwo}
            variant="filled"
            onChange={ (e) => {
              setBackground(prevForm => ({ ...prevForm, colourTwo: e.target.value }))
            }}
            fullWidth
          />
        </Grid>
      )}
      <Grid item sx={{ width: '100%' }}>
        <TextField
          id="filled-background-default"
          label="Default Background"
          defaultValue={defaultBackground}
          variant="filled"
          onChange={ (e) => {
            setDefaultBackground(e.target.value)
          }}
          fullWidth
        />
      </Grid>
      <Grid item sx={{ width: '100%' }}>
        <Button
          onClick={handleEditBackground}
          variant='outlined'
          aria-label='background-submit'
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

export default ModalContentBackground;
