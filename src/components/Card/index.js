import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// import SkipNextIcon from '@material-ui/icons/SkipNext';
import { FiPlay } from "react-icons/fi";
import { FiSkipBack } from "react-icons/fi";
import { FiSkipForward } from "react-icons/fi";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  shadow: {
    boxShadow: '1px 1px 15px 13px #F0F1F6'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MediaControlCard({ id, amountPayd, amountTaken, monthlyInterest, totalAmountInTaxes, installments }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={[classes.root, classes.shadow]}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {id}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {id}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <FiSkipForward /> : <FiSkipBack />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <FiPlay size={20} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <FiSkipBack /> : <FiSkipForward />}
          </IconButton>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image="https://tutofox.com/foodapp//banner/banner-3.png"
        title="Live from space album cover"
      />
    </Card>
  );
}