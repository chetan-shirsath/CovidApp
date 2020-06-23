import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export class CovidTableComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          items: []
        };
      }
    
      componentDidMount() {
        fetch("https://covidtracking.com/api/states")
          .then(res => res.json())
          .then(
            (result) => {
                console.log(result);
              this.setState({
                items: result
              });
            },

            (error) => {
              this.setState({
                error
              });
            }
          )
      }

    render(){  const { items } = this.state; 
    return (
    <TableContainer component={Paper}>
      <Table className='table' aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>State</TableCell>
            <TableCell align="right">Positive</TableCell>
            <TableCell align="right">Negative</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">Death</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.state}>
              <TableCell component="th" scope="row">
                {item.state}
              </TableCell>
              <TableCell align="right">{item.positive}</TableCell>
              <TableCell align="right">{item.negative}</TableCell>
              <TableCell align="right">{item.total}</TableCell>
              <TableCell align="right">{item.death}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
}

