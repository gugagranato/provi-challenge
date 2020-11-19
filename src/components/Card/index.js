import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { FiPlay } from "react-icons/fi";
import { FiSkipBack } from "react-icons/fi";
import { FiSkipForward } from "react-icons/fi";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    height: 500,
    width: 800
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
    // width: 148,
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

export default function MediaControlCard({ id, amountPayd, amountTaken, monthlyInterest, totalAmountInTaxes }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={[classes.root, classes.shadow]}>
      <CardContent className={classes.content}>
        <Typography component="h5" variant="h5">
          {id}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {amountPayd}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {amountTaken}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {monthlyInterest}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {totalAmountInTaxes}
        </Typography>
      </CardContent>
    </Card>
  );
}