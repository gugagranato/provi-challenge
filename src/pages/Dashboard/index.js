import React from 'react';


import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';
import Grid from '@material-ui/core/Grid';
import { FaMoneyBillAlt } from 'react-icons/fa'
import { GiReceiveMoney } from 'react-icons/gi'

import { useLoan } from '../../context/LoanProvider'
import SideMenu from '../../components/SideMenu';
import TableInstallments from './components/TableInstallments'
import Card from '../../components/Card';
import imgBackgroundTot from '../../assets/alvo.svg';
import imgBackgroundPaid from '../../assets/graphics.svg';
import imgBackgroundRest from '../../assets/certificado.svg';

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
  nextInstallments: {
    flex: 1,
    marginTop: 100,
    width: 500,
    padding: 16,
  },
  titleNextInstallments: {
    width: '100%',
    fontWeight: 600,
    fontSize: 34
  },
  alert: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  }
}));

function Dashboard() {
  const classes = useStyles();
  const { loanDetails } = useLoan();
  const payable = loanDetails?.amountTaken - loanDetails?.amountPayd;

  function FormRow() {
    return (
      <React.Fragment>
        <Grid style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} item xs={4}>
          <Card
            title={loanDetails?.amountTaken.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
            subtitle='Total do empréstimo'
            icon={<FaMoneyBillAlt size={34} />}
            img={imgBackgroundTot}
          />
        </Grid>
        <Grid style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} item xs={4}>
          <Card
            title={loanDetails?.amountPayd.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
            subtitle='Total pago'
            icon={<FaMoneyBillAlt size={34} />}
            img={imgBackgroundPaid}
          />
        </Grid>
        <Grid style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} item xs={4}>
          <Card
            title={payable.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
            subtitle='A pagar'
            icon={<GiReceiveMoney size={34} />}
            img={imgBackgroundRest}
          />
        </Grid>
      </React.Fragment>
    );
  }
  console.log(loanDetails)
  function Installments() {
    const todasParcelasVencidas = 'Todas as suas parcelas estão vencidas!'
    const entreEmContato = 'Entre em contato conosco para uma renegociação!'
    return (
      <>
        {loanDetails?.installments?.map(installment => console.log('aa', installment.payd))}
        <Grid style={{ display: 'flex', justifyContent: 'center' }} item xs={6}>
          <div className={classes.nextInstallments}>
            <div className={classes.alert}>
              <Alert severity="error" style={{ width: '80%' }}>
                <AlertTitle>Atenção</AlertTitle>
                {todasParcelasVencidas} <strong> {entreEmContato} </strong>
              </Alert>
            </div>

          </div>
        </Grid>

      </>
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
          <Grid container item xs={12} spacing={3}>
            <Installments />
            <Grid style={{ display: 'flex', marginTop: 100 }} item xs={6}>
              <TableInstallments />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Container>

  );
}

export default Dashboard;