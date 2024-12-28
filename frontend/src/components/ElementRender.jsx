import React from 'react';
import { Typography, Card, CardMedia } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import ReactPlayer from 'react-player';

const ElementRender = ({ element }) => {
  switch (element.type) {
    case 'image':
      return (
        <Card
          id={element.id}
          sx={{
            width: '100%',
            height: '100%',
          }}>
          <CardMedia
            component="img"
            src={element.src}
            alt={element.alt}
          />
        </Card>
      )
    case 'text':
      return (
        <Typography
          id={element.id}
          sx={{
            fontSize: `${element.fontSize}px`,
            color: `#${element.fontColor}`,
            fontFamily: `${element.fontFamily}, Arial, sans-serif !important`,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {element.content}
        </Typography>
      )
    case 'video':
      return (
        <Card
          id={element.id}
          sx={{
            width: '100%',
            height: '100%',
          }}
        >
          <ReactPlayer
              url={element.src}
              controls={true}
              config={{
                youtube: {
                  playerVars: {
                    origin: window.location.origin
                  }
                }
              }}
            />
        </Card>
      )
    case 'code':
      return (
        <SyntaxHighlighter id={element.id} language={element.language} style={atomDark} showLineNumbers >
          {element.content}
        </SyntaxHighlighter>
      )
    default:
      return '';
  }
}

export default ElementRender;
