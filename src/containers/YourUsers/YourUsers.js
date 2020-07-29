import React, { Component } from "react";
import { connect } from 'react-redux'
import { withStyles, Grid, Paper } from "@material-ui/core";
import Employee from '../../components/Employee/Employee'
import NewUser from '../NewUsers/NewUsers';
const styles = theme => ({
  
  paper: {
    height: "80vh",
    marginTop: "2rem",
    padding: "2rem",
    width: "70%",
    background : theme.palette.primary.light,
    color : 'white',
    display : 'flex',
    flexDirection : 'column',
    alignContent : 'center',
  },
  
});
class YourUsers extends Component {
  render() {
    let employees = this.props.Employees.map(emp => <Employee Name={emp.name} Designation={emp.designation}/>)
    const { classes } = this.props;
    return (
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid  item sm={5}>
            <Paper className={classes.paper} elevation={3}>
              {employees}
            </Paper>
          </Grid>
          <Grid item sm={5}>
            <Paper className={classes.paper} elevation={3}>
              <NewUser />
            </Paper>
          </Grid>
        </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading : state.loading,
    Employees : state.Employees
  }
}

export default connect(mapStateToProps, null)(withStyles(styles)(YourUsers));