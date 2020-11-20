import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

import { FcHighPriority, FcApproval } from 'react-icons/fc'

import { useLoan } from '../../../../context/LoanProvider';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function TableInstallments() {
  const { loanDetails, loans } = useLoan();
  const classes = useStyles();


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="caption table">
        <caption>Atualização em D + 1</caption>
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: 600, fontSize: 16 }} align="center">Data</TableCell>
            <TableCell style={{ fontWeight: 600, fontSize: 16 }} align="center">Parcela</TableCell>
            <TableCell style={{ fontWeight: 600, fontSize: 16 }} align="center">Valor</TableCell>
            <TableCell style={{ fontWeight: 600, fontSize: 16 }} align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {loans?.map((loan, i) => (
            <TableRow key={loan.dueDate}>
              <TableCell component="th" scope="row" align="center">
                {loan.dueDate}
              </TableCell>
              <TableCell align="center">{`${i + 1}/${loans.length}`}</TableCell>
              <TableCell align="center">{loan.formatedValue}</TableCell>
              <TableCell align="center">{loan.payd ? <FcApproval size={20} /> :
                <Chip
                  icon={<FcHighPriority size={20} />}
                  label="Parcela vencida"
                  color='secondary'
                  variant="outlined"
                />
              }</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
