import React from 'react';
import { List, ListItem } from '@mui/material';
import ElementRender from './ElementRender';

const DisplayElementsPresent = ({ elements, presentationContainerDimensions }) => {
  const { containerWidth, containerHeight } = presentationContainerDimensions;
  const containerRef = React.useRef(null);

  return (
    <List ref={containerRef} sx={{ position: 'relative', width: '100%', height: '100%', padding: 0 }}>
      {elements.map((element, index) => {
        const leftPosition = `${(element.positionX / 100) * containerWidth}`;
        const topPosition = `${(element.positionY / 100) * containerHeight}`;
        return (
          <React.Fragment key={index}>
            <ListItem
                id={element.id}
                sx={{
                  position: 'absolute',
                  left: `${leftPosition}px`,
                  top: `${topPosition}px`,
                  height: `${element.height}%`,
                  width: `${element.width}%`,
                  padding: 0,
                  zIndex: element.layer,
                  display: 'flex',
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                }}
            >
                <ElementRender element={element} />
            </ListItem>
          </React.Fragment>
        )
      })}
    </List>
  )
}

export default DisplayElementsPresent;
