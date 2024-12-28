import React from 'react';
import { List, ListItem } from '@mui/material';
import ElementRender from './ElementRender';
import DraggableResizableListItem from './DraggableResizableListItem';

const DisplayElements = ({ elements, handleOpen, handleDeleteElement, presentationContainerDimensions, handleUpdateElement }) => {
  // const [lastClickedElement, setLastClickedElement] = React.useState(null);
  // const [lastClickTime, setLastClickTime] = React.useState(0);
  const [clickedId, setClickedId] = React.useState(0);
  const [isResizing, setIsResizing] = React.useState(false);
  const { containerWidth, containerHeight } = presentationContainerDimensions;
  const containerRef = React.useRef(null);

  const handleDoubleClick = (element) => {
    handleOpen(`edit-${element.type}`, element);
  };

  const handleRightClick = async (element, e) => {
    e.preventDefault()
    await handleDeleteElement(element.id)
    setClickedId(0)
  }

  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.id !== clickedId) {
        if (!(e.target.id.split('-')[0] && e.target.id.split('-')[0] === 'stop')) {
          setIsResizing(false)
          setClickedId(0);
        } else {
          setIsResizing(true)
        }
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [containerRef, clickedId]);

  return (
    <List ref={containerRef} sx={{ position: 'relative', width: '100%', height: '100%', padding: 0 }}>
      {elements.map((element, index) => {
        const leftPosition = `${(element.positionX / 100) * containerWidth}`;
        const topPosition = `${(element.positionY / 100) * containerHeight}`;
        return (
          <React.Fragment key={index}>
            {(clickedId === element.id)
              ? (
                <DraggableResizableListItem
                  element={element}
                  handleUpdateElement={handleUpdateElement}
                  handleDoubleClick={handleDoubleClick}
                  handleRightClick={handleRightClick}
                  presentationContainerDimensions={presentationContainerDimensions}
                  isResizing={isResizing}
                />
                )
              : (
                <ListItem
                  id={element.id}
                  onClick={(e) => {
                    setClickedId(e.currentTarget.id)
                  }}
                  onDoubleClick={() => handleDoubleClick(element)}
                  onContextMenu={(e) => handleRightClick(element, e)}
                  sx={{
                    position: 'absolute',
                    left: `${leftPosition}px`,
                    top: `${topPosition}px`,
                    height: `${element.height}%`,
                    width: `${element.width}%`,
                    padding: 0,
                    border: '1px solid grey',
                    zIndex: element.layer,
                    display: 'flex',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                  }}
                >
                  <ElementRender element={element} />
                </ListItem>
                )
            }
          </React.Fragment>
        )
      })}
    </List>
  )
}

export default DisplayElements;
