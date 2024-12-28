import React from 'react';
import { Grid, Button, Typography } from '@mui/material';

const NavigationBar = ({ items, displayIcons }) => {
  return (
    <Grid
      item
      container
      direction="row"
      alignItems="center"
      sx={{
        width: 'auto',
        height: '50px',
        bgcolor: 'rgba(14, 66, 108, 0.14)',
        borderRadius: '15px',
        display: 'flex',
        justifyContent: !displayIcons ? 'center' : 'space-around',
      }}
    >
      {items.map((item, index) => (
        <Grid key={index} item sx={{ height: '100%', display: 'flex', justifyContent: 'center' }}>
          <Button
            onClick={item.onClick}
            variant="text"
            color="cadet"
            aria-label={`navigation${item.ariaLabel}`}
            sx={{
              height: '100%',
              borderRadius: 0,
              borderTopLeftRadius: index === 0 ? '15px' : 0,
              borderBottomLeftRadius: index === 0 ? '15px' : 0,
              borderRight: !displayIcons ? (index !== items.length - 1 ? 'solid 2px #0E426C' : 'none') : 'none'
            }}
          >
            {!displayIcons && (
              <Typography variant="body2">
                {item.label}
              </Typography>)
            }
            {item.icon}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default NavigationBar;
