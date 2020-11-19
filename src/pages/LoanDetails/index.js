import React, { useEffect } from 'react';
import { useLoan } from '../../context/LoanProvider';
import { useAuth } from '../../context/AuthProvider';

import { Container, ContainerCard, ContainerContent, ImageContent } from './styles';
import Card from '../../components/Card';
import SideMenu from '../../components/SideMenu';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  center: {
    justifyContent: 'center'
  }
}));

function LoanDetails() {
  const { loans, loanDetails } = useLoan();
  const { signIn, data } = useAuth();

  const classes = useStyles();


  const handlSignIn = () => {
    signIn({
      email: 'eve.holt@reqres.in',
      password: 'pistol',
    });
  }
  return (
    <>
      {/* <Container> */}
      <div className={classes.root}>
        <SideMenu />
        <Grid container spacing={3}>
          <Grid item xs={6} >

            <Card
              id={loanDetails?.UserId}
              amountPayd={loanDetails?.amountPayd}
              amountTaken={loanDetails?.amountTaken}
              monthlyInterest={loanDetails?.monthlyInterest}
              totalAmountInTaxes={loanDetails?.totalAmountInTaxes}
              installments={loans?.installments} />
          </Grid>
        </Grid>
        <button onClick={handlSignIn}>Entar</button>
      </div>
    </>
  );
}

export default LoanDetails;