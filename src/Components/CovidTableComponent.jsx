import React from 'components/node_modules/react';
//import { makeStyles } from '@material-ui/core/styles';
import Table from 'components/node_modules/@material-ui/core/Table';
import TableBody from 'components/node_modules/@material-ui/core/TableBody';
import TableCell from 'components/node_modules/@material-ui/core/TableCell';
import TableContainer from 'components/node_modules/@material-ui/core/TableContainer';
import TableHead from 'components/node_modules/@material-ui/core/TableHead';
import TableRow from 'components/node_modules/@material-ui/core/TableRow';
import Paper from 'components/node_modules/@material-ui/core/Paper';

export class CovidTableComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          items: []
        };
      }
    
      componentDidMount() {
        fetch("https://api.covid19api.com/summary")
          .then(res => res.json())
          .then(
            (result) => {
                console.log(result);
              this.setState({
                items: result.Countries
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
            <TableCell>Country</TableCell>
            <TableCell align="right">Total Confirmed</TableCell>
            <TableCell align="right">Total Recovered</TableCell>
            <TableCell align="right">New Deaths</TableCell>
            <TableCell align="right">Total Deaths</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.Country}>
              <TableCell component="th" scope="row">
                {item.Country}
              </TableCell>
              <TableCell align="right">{item.TotalConfirmed}</TableCell>
              <TableCell align="right">{item.TotalRecovered}</TableCell>
              <TableCell align="right">{item.NewDeaths}</TableCell>
              <TableCell align="right">{item.TotalDeaths}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
}

