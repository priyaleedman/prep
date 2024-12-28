import React from 'react';
import { List, ListItem } from '@mui/material';
import ElementRender from './ElementRender';

const RenderThumbnail = ({ slide }) => {
  const [cardDimensions, setCardDimensions] = React.useState({ width: 0, height: 0 });
  const listRef = React.useRef(null);
  const [positions, setPositions] = React.useState([]);

  React.useEffect(() => {
    if (listRef.current) {
      const width = listRef.current.clientWidth;
      const height = listRef.current.clientHeight;
      setCardDimensions({ width, height });
    }
  }, [slide]);

  React.useEffect(() => {
    if (slide && slide.elements) {
      const updatedPositions = slide.elements.map(element => ({
        left: `${element.positionX}`,
        top: `${element.positionY}`,
      }));
      setPositions(updatedPositions);
    }
  }, [slide, cardDimensions]);

  const backgroundColor = slide && slide.elements ? slide.background : '#e0e0e0';
  return (
    <List
      ref={listRef}
      sx={{
        position: 'relative',
        height: '150px',
        width: '100%',
        padding: 0,
        borderBottom: '1px solid grey',
        background: backgroundColor.startsWith('linear-gradient')
          ? backgroundColor
          : '#e0e0e0',
      }}>
      {slide && slide.elements && slide.elements.map((element, index) => {
        return (
          <React.Fragment key={index}>
            <ListItem
              id={element.id}
              sx={{
                position: 'absolute',
                left: `${positions[index]?.left}%` || '0%',
                top: `${positions[index]?.top}%` || '0%',
                height: `${element.height}%`,
                width: `${element.width}%`,
                border: '1px solid grey',
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

export default RenderThumbnail
