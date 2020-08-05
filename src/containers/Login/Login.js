import React, { Component } from "react";
import CustomeInputText from "../../components/FormElements/CustomeInputText/CustomInputText";
import { Button } from "@material-ui/core";
import { dummyAuth } from '../../store/actions/index'
import * as Yup from "yup";
import { Formik } from "formik";
import { connect } from "react-redux";
import classes from "./Login.css";
class Login extends Component {

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
    return (
      <div className={classes.form}>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .max(30, "30 characters or less")
              .matches(
                RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/),
                "Invalid email."
              )
              .required("This field is required"),
            password : Yup.string()
            .required('this field is required')
          })}
          onSubmit={(values, {setSubmitting, resetForm}) => {
            setSubmitting(false);
            resetForm();
            this.props.onDummyLogin()
          }}
        >
            {(props) => {
                return(
                    <form onSubmit={props.handleSubmit}>
                        <h1 style={{color : '#3f51b5'}}>Login</h1>
                        <CustomeInputText name='email' label="Email"/>
                        <CustomeInputText label="Password" name="password" type={this.state.passwordToggle} visibilityicon='true' visiblilitytoggler={this.passwordVisibilityToggler}/>
                        <Button type="submit" disableElevation={!props.isValid || props.isSubmitting} className={classes.Btn}>Login</Button>
                    </form>
                );
            }
            }
        </Formik>
      </div>
    );
  }
}
/* const mapStateToProps = state => {
    return {
        isAutneticated : 
    }
} */

const mapDispatchToProps = dispatch => {
    return {
      onDummyLogin : () => dispatch(dummyAuth())
    }
  }

export default connect(null, mapDispatchToProps)(Login);
