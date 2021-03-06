import React, { Component } from "react";
import CustomeInputText from "../../components/FormElements/CustomeInputText/CustomInputText";
import SelectInput from "../../components/FormElements/CustomSelectInput/SelectInput";
import { addEmpWithoutBackend, editEmpWithoutBackEnd, editModeDisable } from '../../store/actions/index';
import { Button, withStyles } from "@material-ui/core";
import * as Yup from "yup";
import { Formik } from "formik";
import { connect } from 'react-redux';
import classe from "./NewUser.css";

const styles = {
  Btn: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    margin: "0.8rem auto",
    "&:disabled": {
      background: "#e0e0e0",
      cursor: "not-allowed",
    },
  },
};

const IS_MANAGER = [
  {
    value: "true",
    label: "True",
    default: false,
  },
  {
    value: "false",
    label: "False",
    default: true,
  },
];

const DESIGNATION = [
    {
        value : "React Developer",
        label : "React Developer",
    },
    {
        value : "salesForce Developer",
        label : "salesForce Developer",
    },
    {
        value : ".Net Developer",
        label : ".Net Developer"
    }

]

const initialValue = {
  name: "",
  email: "",
  password: "",
  isAdmin: "false",
  designation: "",
}

class NewUser extends Component {
  state = {
    passwordToggle : 'password'
  }

  passwordVisibilityToggler = () => {
    this.setState(preState => {
      if (preState.passwordToggle === 'text') {
        return ({passwordToggle : 'password'});
      } else {
        return ({passwordToggle : 'text'});
      }
    })
  }
  render() {
    
    const { classes, currentEmployee } = this.props;
    let form = (
      <div>
        <CustomeInputText label="Username" name="name" />
        <CustomeInputText label="Email" name="email" />
        <CustomeInputText label="Password" name="password" type={this.state.passwordToggle} visibilityicon='true' visiblilitytoggler={this.passwordVisibilityToggler}/>
        <SelectInput label='Is Manager' name="isAdmin" options={IS_MANAGER}/>
        <SelectInput label='Designation' name="designation" options={DESIGNATION} />
      </div>
    );
    return (
      <div className={classe.form}>
        <Formik
          initialValues={
            this.props.editMode
              ? currentEmployee || initialValue
              : initialValue
          }
          enableReinitialize
          validationSchema={Yup.object({
            name: Yup.string()
              .min(4, "4 characters or more")
              .max(25, "25 characters or less")
              .required("This field is required"),
            email: Yup.string()
              .max(30, "30 characters or less")
              .matches(
                RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/),
                "Invalid email."
              )
              .required("This field is required"),
            password: Yup.string()
              .min(6, "password must have atleast 6 or more characters")
              .required("This field is required")
              .matches(
                RegExp(
                  "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
                ),
                "Must have atleast one captal letter and spacial letter"
              ),
            isAdmin: Yup.string()
              .oneOf(
                ["true", "false"],
                "You have to select either of this options"
              )
              .required("This field is required"),
            designation: Yup.string()
              .oneOf([
                "React Developer",
                "salesForce Developer",
                ".Net Developer",
              ])
              .required("This field is required"),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(false);
            if (this.props.editMode){
              this.props.onEdit(values, this.props.SelectedEmpId);
              this.props.onEditModeDisable();
            } else {
              resetForm(initialValue);
              this.props.onSubmit(values);
            }
          }}
        >
          {(props) => {
            return (
              <form className="signup-form" onSubmit={props.handleSubmit}>
                {form}
                <Button
                  className={classes.Btn}
                  type="submit"
                  size="large"
                  variant="contained"
                  disabled={!props.isValid || props.isSubmitting}
                >
                  Submit
                </Button>
              </form>
            );
          }}
        </Formik>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading : state.loading,
    editMode : state.EnableEditMode
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit : (empData) => dispatch(addEmpWithoutBackend(empData)), //modify it when this app is integrated with api.....
    onEdit : (empData, id) => dispatch(editEmpWithoutBackEnd(empData, id)), //modify it when this app is integrated with api.....
    onEditModeDisable : () => dispatch(editModeDisable())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(NewUser));