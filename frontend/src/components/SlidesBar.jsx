import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const drawerWidth = 240;

const SlidesBar = ({ slides }) => {
  return (
    <Drawer
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
      },

    }}
    variant="permanent"
    anchor="left"
    >
    <Toolbar />
    <List>
        {[].map((text, index) => (
        <ListItem key={text} disablePadding>
            <ListItemText primary={text} />
        </ListItem>
        ))}
    </List>
    </Drawer>
  );
}

export default SlidesBar;
