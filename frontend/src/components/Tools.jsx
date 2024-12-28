import React from 'react';
import { List, ListItem, Button } from '@mui/material'

const Tools = ({ elements, direction, displayIcons }) => {
  const paddingTop = direction === 'row' ? 2 : 0
  return (
    <List sx={{ display: 'flex', flexDirection: direction, height: '90%', displayContent: 'flex', justifyContent: 'flex-start', pt: paddingTop }}>
      {elements.map((element, index) => (
        <ListItem key={index} sx={{ pt: 0 }}>
          <Button
            variant="contained"
            onClick={element.onClick}
            sx={{ displayContent: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '90%', height: 'auto', bgcolor: 'rgba(14, 66, 108, 0.14)', color: '#0E426C', pt: '10%', pb: '10%' }}
            aria-label={`tool${element.name}`}
          >
            {element.icon}
            {!displayIcons && element.name}
          </Button>
        </ListItem>
      ))}
    </List>
  )
}

export default Tools;
