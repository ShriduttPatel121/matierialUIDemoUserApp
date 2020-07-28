import React, { Component } from "react";
import { withStyles, Grid, Paper } from "@material-ui/core";
import Employee from '../../components/Employee/Employee'
import NewUser from '../NewUsers/NewUsers';
const styles = theme => ({
    root : {
        display : 'flex',
        justifyContent : 'center'
    },
  paper: {
    height: "80vh",
    marginTop: "2rem",
    padding: "2rem",
    width: "70%",
    background : theme.palette.primary.light,
    color : 'white'
    
  },
  GridContainer : {
      height : '90vh'
  },
  
});
class YourUsers extends Component {
  render() {
    const { classes } = this.props;
    return (
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid  item sm={4}>
            <Paper className={classes.paper} elevation={3}>
              <Employee />
            </Paper>
          </Grid>
          <Grid item sm={4}>
            <Paper className={classes.paper} elevation={3}>
              <NewUser />
            </Paper>
          </Grid>
        </Grid>
    );
  }
}
export default withStyles(styles)(YourUsers);
