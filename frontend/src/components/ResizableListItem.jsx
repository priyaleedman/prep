import React from 'react';
import { Resizable } from 'react-resizable';
import StopIcon from '@mui/icons-material/Stop';
import ElementRender from './ElementRender';
import { ListItem } from '@mui/material';

const ResizableListItem = React.forwardRef(({ element, onDoubleClick, onRightClick, presentationContainerDimensions, handleUpdateElement, position, isDragging }, ref) => {
  const { containerWidth, containerHeight } = presentationContainerDimensions
  let { x, y } = position;
  x = parseInt(x)
  y = parseInt(y)
  const leftPosition = `${(element.positionX / 100) * containerWidth}`;
  const topPosition = `${(element.positionY / 100) * containerHeight}`;

  const [state, setState] = React.useState({
    absoluteLeft: parseInt(leftPosition),
    absoluteTop: parseInt(topPosition),
    absoluteWidth: (parseInt(element.width) / 100) * containerWidth,
    absoluteHeight: (parseInt(element.height) / 100) * containerHeight
  })

  React.useEffect(() => {
    setState((_) => ({
      absoluteLeft: x,
      absoluteTop: y,
      absoluteWidth: (parseInt(element.width) / 100) * containerWidth,
      absoluteHeight: (parseInt(element.height) / 100) * containerHeight,
    }));
  }, [containerWidth, containerHeight, x, y]);

  const onResizeAbsolute = (event, { node, size, handle }) => {
    if (isDragging) return;
    setState((state) => {
      let newLeft = state.absoluteLeft;
      let newTop = state.absoluteTop;
      let newWidth = state.absoluteWidth;
      let newHeight = state.absoluteHeight;
      if (handle === 'se') {
        // If element is in the bottom or right, can only resize less
        if (newTop + size.height < containerHeight && newLeft + size.width < containerWidth) {
          // Height changes and width changes
          newWidth = size.width;
          newHeight = size.height;
        }
      } else if (handle === 'sw') {
        // If element is in the bottom or left, can only resize less
        if (newTop + size.height < containerHeight && newLeft + state.absoluteWidth - size.width >= 0) {
          // Top Left and Height Changes
          newLeft += state.absoluteWidth - size.width;
          newWidth = size.width;
          newHeight = size.height;
        }
      } else if (handle === 'ne') {
        // If element is on the top or right, can only resize less
        if (newTop + state.absoluteHeight - size.height >= 0 && newLeft + size.width < containerWidth) {
          // Height changes and width changes
          newTop += (state.absoluteHeight - size.height);
          newWidth = size.width;
          newHeight = size.height;
        }
      } else if (handle === 'nw') {
        // If element is on the top or left, can only resize less
        if (newTop + state.absoluteHeight - size.height >= 0 && newLeft + state.absoluteWidth - size.width >= 0) {
          // Height changes and width changes top and width and height change
          newHeight = size.height;
          newWidth = size.width;
          newLeft += (state.absoluteWidth - size.width);
          newTop += (state.absoluteHeight - size.height);
        }
      }
      handleUpdateElement(element.id, (newHeight / containerHeight) * 100, (newWidth / containerWidth) * 100, newTop, newLeft)
      return {
        absoluteWidth: newWidth,
        absoluteHeight: newHeight,
        absoluteLeft: newLeft,
        absoluteTop: newTop,
      };
    });
  };

  // Minimum size is 1% of height and width
  const onePercentWidth = (1 / 100) * containerWidth
  const onePercentHeight = (1 / 100) * containerHeight
  return (
    <Resizable
      width={state.absoluteWidth}
      height={state.absoluteHeight}
      resizeHandles={['se']}
      handle={
        <span style={{ position: 'absolute', top: `${state.absoluteHeight + state.absoluteTop - 10}px`, left: `${state.absoluteWidth + state.absoluteLeft - 6}px` }}>
          <StopIcon id={'stop-se'} sx={{ width: '10px', height: '10px' }}/>
        </span>
      }
      onResize={onResizeAbsolute}
      lockAspectRatio={true}
      minConstraints={[onePercentWidth, onePercentHeight]}
      maxConstraints={[containerWidth, containerHeight]}
    >
      <span>
        <Resizable
          width={state.absoluteWidth}
          height={state.absoluteHeight}
          resizeHandles={['sw']}
          handle={
            <span style={{ position: 'absolute', top: `${state.absoluteHeight + state.absoluteTop - 10}px`, left: `${state.absoluteLeft - 5}px` }}>
              <StopIcon id={'stop-sw'} sx={{ width: '10px', height: '10px' }}/>
            </span>
          }
          onResize={onResizeAbsolute}
          lockAspectRatio={true}
          minConstraints={[onePercentWidth, onePercentHeight]}
          maxConstraints={[containerWidth, containerHeight]}
        >
          <span>
            <Resizable
              width={state.absoluteWidth}
              height={state.absoluteHeight}
              resizeHandles={['ne']}
              handle={
                <span style={{ position: 'absolute', top: `${state.absoluteTop - 9}px`, left: `${state.absoluteWidth + state.absoluteLeft - 6}px` }}>
                  <StopIcon id={'stop-ne'} sx={{ width: '10px', height: '10px' }}/>
                </span>
              }
              onResize={onResizeAbsolute}
              lockAspectRatio={true}
              minConstraints={[onePercentWidth, onePercentHeight]}
              maxConstraints={[containerWidth, containerHeight]}
            >
              <span>
                <Resizable
                  width={state.absoluteWidth}
                  height={state.absoluteHeight}
                  resizeHandles={['nw']}
                  handle={
                    <span style={{ position: 'absolute', top: `${-10}px`, left: `${-6}px` }}>
                      <StopIcon id={'stop-nw'} sx={{ width: '10px', height: '10px' }}/>
                    </span>
                  }
                  onResize={onResizeAbsolute}
                  lockAspectRatio={true}
                  minConstraints={[onePercentWidth, onePercentHeight]}
                  maxConstraints={[containerWidth, containerHeight]}
                >
                  <ListItem
                    id={element.id}
                    onDoubleClick={() => onDoubleClick(element)}
                    onContextMenu={(e) => onRightClick(element, e)}
                    sx={{
                      position: 'absolute',
                      left: `${state.absoluteLeft}px`,
                      top: `${state.absoluteTop}px`,
                      height: `${state.absoluteHeight}px`,
                      width: `${state.absoluteWidth}px`,
                      padding: 0,
                      border: '1px solid grey',
                      zIndex: element.layer,
                      display: 'flex',
                      alignItems: 'flex-start',
                      flexDirection: 'column',
                    }}
                    ref={ref}
                  >
                    <ElementRender element={element} />
                  </ListItem>
                </Resizable>
              </span>
            </Resizable>
          </span>
        </Resizable>
      </span>
    </Resizable>
  )
});
ResizableListItem.displayName = 'ResizableListItem';

export default ResizableListItem;
