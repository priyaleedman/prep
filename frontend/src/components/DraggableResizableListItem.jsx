import React from 'react';
import ResizableListItem from './ResizableListItem';
// import Draggable from 'react-draggable';

const DraggableResizableListItem = ({ element, handleUpdateElement, handleDoubleClick, handleRightClick, presentationContainerDimensions, isResizing }) => {
  const { containerWidth, containerHeight } = presentationContainerDimensions
  const nodeRef = React.useRef(null);

  const [isDragging, setIsDragging] = React.useState(false);
  const leftPosition = `${(element.positionX / 100) * containerWidth}`;
  const topPosition = `${(element.positionY / 100) * containerHeight}`;
  const [pos, setPos] = React.useState({ x: leftPosition, y: topPosition });
  const [offset, setOffset] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    if (isResizing) {
      setIsDragging(false)
    }
  }, [isResizing])

  React.useEffect(() => {
    // Recalculate pos whenever container width or height changes
    const newLeftPosition = `${(element.positionX / 100) * containerWidth}`;
    const newTopPosition = `${(element.positionY / 100) * containerHeight}`;
    setPos({ x: newLeftPosition, y: newTopPosition });
  }, [containerWidth, containerHeight, element]);

  const handleMouseMove = (e) => {
    if (isDragging) {
      const leftBound = 0;
      const topBound = 0;
      const bottomBound = containerHeight - (parseInt(element.height) / 100) * containerHeight;
      const rightBound = containerWidth - (parseInt(element.width) / 100) * containerWidth;
      // Calculate the movement distance
      const deltaX = e.clientX - offset.x;
      const deltaY = e.clientY - offset.y;
      const newPosition = {
        x: Math.max(leftBound, Math.min(rightBound, deltaX)),
        y: Math.max(topBound, Math.min(bottomBound, deltaY))
      };
      setPos(newPosition);
      handleUpdateElement(
        element.id,
        parseInt(element.height),
        parseInt(element.width),
        ((newPosition.y * 100) / containerHeight),
        ((newPosition.x * 100) / containerWidth)
      );
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    handleUpdateElement(
      element.id,
      parseInt(element.height),
      parseInt(element.width),
      ((pos.y * 100) / containerHeight),
      ((pos.x * 100) / containerWidth)
    );
  };

  React.useEffect(() => {
    const handleDocumentMouseMove = (e) => {
      if (isDragging) {
        handleMouseMove(e);
      }
    };

    const handleDocumentMouseUp = () => {
      if (isDragging) {
        handleMouseUp();
      }
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleDocumentMouseMove);
      document.addEventListener('mouseup', handleDocumentMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleDocumentMouseMove);
      document.removeEventListener('mouseup', handleDocumentMouseUp);
    };
  }, [isDragging, containerWidth, containerHeight, element, handleUpdateElement, offset, handleMouseMove, handleMouseUp]);

  const handleMouseDown = (e) => {
    if (isDragging) return;
    setIsDragging(true);
    const offsetX = e.clientX - leftPosition;
    const offsetY = e.clientY - topPosition;
    setOffset({ x: offsetX, y: offsetY });
  };

  return (
    <div
      style={{
        position: 'absolute',
        cursor: isDragging ? 'grabbing' : 'grab',
        userSelect: 'none'
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <ResizableListItem
        key={element.id}
        element={element}
        onDoubleClick={handleDoubleClick}
        onRightClick={handleRightClick}
        presentationContainerDimensions={presentationContainerDimensions}
        handleUpdateElement={handleUpdateElement}
        position={pos}
        isDragging={isDragging}
        ref={nodeRef}
      />
    </div>
  );
}
export default DraggableResizableListItem;
