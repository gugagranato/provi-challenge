import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    height: 150,
    width: 500
  },
  shadow: {
    boxShadow: '1px 1px 15px 13px #F0F1F6'
  },
  content: {
    flex: '1 0 auto',
  },
  title: {
    fontSize: 32,
    fontWeight: 600
  },
  subtitle: {
    fontSize: 16,
  }
}));

export default function MediaControlCard({ title, subtitle, icon, img }) {
  const classes = useStyles();

  return (
    <Card className={[classes.root, classes.shadow]}>
      <CardContent className={classes.content}>
        <div id="headerCard" style={{ display: 'flex' }}>
          <div>
            <h2 className={classes.title}>{title}</h2>
            <p className={classes.subtitle}>{subtitle}</p>
          </div>
          <div style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'flex-end'
          }}>
            {icon}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }} id="content">
          {img && (
            <img src={img} alt="img" width={130} />
          )}
        </div>
      </CardContent>
    </Card>
  );
}