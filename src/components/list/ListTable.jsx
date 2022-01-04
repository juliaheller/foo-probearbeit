import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export default function ListTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Kunde Bezeichnung</TableCell>
            <TableCell align="right">Adresse</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.gender + " " + row.titel + " " + row.name + " " + row.surname}
              </TableCell>
              <TableCell align="right">{row.street + ", " + row.zipcode + " " + row.city + ` (${row.country})`}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
