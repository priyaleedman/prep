import React from 'react';
import { Card, CardContent, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import RenderThumbnail from './RenderThumbnail';

const useStyles = makeStyles({
  root: {
    minWidth: 100,
    maxWidth: 300,
    width: '100%',
    height: '100%',
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'column',
  },
  media: {
    height: 0,
    paddingTop: '50%', // 2:1 ratio
    backgroundColor: '#e0e0e0', // Grey square if empty thumbnail
  },
  header: {
    height: '50%',
  },
  thumbnailWrapper: {
    position: 'relative',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
  thumbnail: {
    width: '100%',
    height: '100%'
  },
});

const PresentationCard = ({ id, title, description, slides, thumbnail }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/presentation/${id}/1`);
  };
  const slide = slides.find(slide => slide.id === thumbnail);
  return (
    <Card className={classes.root} onClick={handleClick}>
      <Box className={classes.header} component="div">
        <Box className={classes.thumbnailWrapper} component="div">
          <RenderThumbnail slide={slide} className={classes.thumbnail} />
        </Box>
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        {description && (
          <Typography variant="body2" component="p">
            {description}
          </Typography>
        )}
        <Typography variant="subtitle2" component="p" align="right">
          <FilterNoneIcon sx={{ fontSize: 12 }}/> {slides.length}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PresentationCard;
