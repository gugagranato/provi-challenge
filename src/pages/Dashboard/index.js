import React from 'react';


import { makeStyles } from '@material-ui/core/styles';
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
    marginTop: 100,
    width: 500,
    padding: 16,
  },
  titleNextInstallments: {
    width: '100%',
    fontWeight: 600,
    fontSize: 34
  }
}));

function Dashboard() {
  const classes = useStyles();
  const { loanDetails, loans } = useLoan();
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

  function Installments() {
    return (
      <React.Fragment>
        <Grid style={{ display: 'flex' }} item xs={12}>
          <div className={classes.nextInstallments}>
            <p className={[classes.titleNextInstallments]}>Próxima Parcela</p>
            <p>21/21/2000</p>
            <div>
              <p>Valor</p>
              <p>R$ 500,00</p>
            </div>
          </div>
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
          <Grid container item xs={6} spacing={3}>
            <Installments />
          </Grid>
          <Grid container item xs={6} spacing={3}>
            <Grid style={{ display: 'flex', marginTop: 100 }} item xs={12}>
              <TableInstallments />

            </Grid>
          </Grid>
        </Grid>
      </div>
    </Container>

  );
}

export default Dashboard;