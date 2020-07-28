import React, { Component } from "react";
import { withStyles, Grid, Paper } from "@material-ui/core";
const styles = theme => ({
    root : {
        display : 'flex',
        justifyContent : 'center',
        border : '10px solid',
        borderColor : theme.palette.secondary.dark
    },
  paper: {
    height: "80vh",
    marginTop: "4rem",
    padding: "2rem",
    width: "70%",
    background : theme.palette.light
    
  },
  GridContainer : {
      height : '90vh'
  },
  '.MuiPaper-root' : {
    
  }
});
class YourUsers extends Component {
  render() {
    const { classes } = this.props;
    return (
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid  item sm={4}>
            <Paper className={classes.paper} elevation={3}>
              Employees
            </Paper>
          </Grid>
          <Grid item sm={4}>
            <Paper className={classes.paper} elevation={3}>
              Selected Employee
            </Paper>
          </Grid>
        </Grid>
    );
  }
}
export default withStyles(styles)(YourUsers);
