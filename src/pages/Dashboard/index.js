import React from 'react';


import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import { useLoan } from '../../context/LoanProvider'
import SideMenu from '../../components/SideMenu';
import Card from '../../components/Card';

import { Container } from './styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function Dashboard() {
  const classes = useStyles();
  const { loanDetails, loans } = useLoan();

  console.log('loanDetails', loanDetails)
  console.log('loans', loans)

  function FormRow() {
    return (
      <React.Fragment>
        <Grid style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} item xs={4}>
          <Card
            amountTaken={loanDetails.amountTaken}
          />
        </Grid>
        <Grid style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} item xs={4}>
          <Card amountPayd={loanDetails.amountPayd} />
        </Grid>
        <Grid style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} item xs={4}>
          <Card

          />
        </Grid>
      </React.Fragment>
    );
  }
  return (
    <Container>
      <SideMenu />


      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
        </Grid>
      </div>
    </Container>

  );
}

export default Dashboard;