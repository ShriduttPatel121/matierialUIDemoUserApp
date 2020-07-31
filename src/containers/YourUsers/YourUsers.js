import React, { Component } from "react";
import { connect } from 'react-redux'
import { withStyles, Grid, Paper } from "@material-ui/core";
import Employee from '../../components/Employee/Employee'
import NewUser from '../NewUsers/NewUsers';
import Welcome from '../../components/GreetingMessage/welcom';
import { editModeEnable } from '../../store/actions/index'
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
  state ={ // state has been managed for edit and show details views....
    selectedEmployee : {
      name: "",
      email: "",
      password: "",
      isAdmin: "false",
      designation: "",
    },
    SelectedEmpId : null
    
  }
  editClickHandler = (id) => {
    if (!this.props.editMode){
      this.props.onEditModeEnable();
    }
    let selectedEmp = this.props.Employees[id];
    this.setState({selectedEmployee : selectedEmp, SelectedEmpId : id});
  }

  showDetailsHandler = (id) => {

  }

  render() {
    let employees = this.props.Employees.map((emp, i) => <Employee editClick={() => this.editClickHandler(i)} key={i} id={i} Name={emp.name} Designation={emp.designation}/>);

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
              {this.props.editMode? <NewUser SelectedEmpId={this.state.SelectedEmpId} currentEmployee={this.state.selectedEmployee} editMode={this.state.editMode}/> : <Welcome />}
            </Paper>
          </Grid>
        </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading : state.loading,
    Employees : state.Employees,
    editMode : state.EnableEditMode
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onEditModeEnable : () => dispatch(editModeEnable()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(YourUsers));