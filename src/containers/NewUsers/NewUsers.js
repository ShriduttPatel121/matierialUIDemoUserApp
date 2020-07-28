import React, { Component } from 'react';
import CustomeInputText from '../FormElements/CustomeInputText/CustomInputText';
import SelectInput from '../FormElements/CustomSelectInput/SelectInput';
import { Button, withStyles } from '@material-ui/core'
import * as Yup from 'yup';
import { Formik } from 'formik';
import classe from './NewUser.css';

const styles = {
    Btn: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
      margin : '0.8rem auto',
      '&:disabled' : {
          background : '#e0e0e0',
          cursor : 'not-allowed'
      }
    },
  };

class NewUser extends Component {
    

    render() {
        const { classes } = this.props
        let form = (
        <div>
            <CustomeInputText  label="Username" name="name" />
            <CustomeInputText  label="Email" name="email" />
            <CustomeInputText  label="Password" name="password" type="password" />
            <SelectInput name="isAdmin"/>
                
            </div>
            );
        return (
            <div className={classe.form}>
            <Formik
                initialValues = {this.props.editMode? {
                    name : '',
                    email : '',
                    password : '',
                    isAdmin : 'false'
            }
            :
            this.props.currentEmployee
            }
            
            validationSchema={Yup.object({
                name : Yup.string()
                    .min(4, '4 characters or more')
                    .max(25, '25 characters or less')
                    .required('This field is required'),
                email : Yup.string()
                .max(30, '30 characters or less')
                .matches(RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/), 'Invalid email.')
                .required('This field is required'),
                password : Yup.string()
                .min(6, 'password must have atleast 6 or more characters')
                .required('This field is required')
                .matches(RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"), 'Must haveatleast one captal letter and spacial letter'),
                isAdmin : Yup.string()
                .oneOf(['true', 'false'],'You have to select either of this options')
                .required('This field is required')
                
            })}

            onSubmit= {(values, {setSubmitting, resetForm}) => {
                 setTimeout(() => {
                    alert(JSON.stringify(values));
                    resetForm();
                    setSubmitting(false)
                },3000)}}
            >
                {props =>{
                    return(
                    <form className="signup-form" onSubmit={props.handleSubmit}>
                        {form}
                    <Button className={classes.Btn} type="submit" size='large' variant="contained" disabled={!props.isValid || props.isSubmitting}>Submit</Button>
                    </form>
                )}}
            </Formik>
            </div>
        );
    }
}
export default withStyles(styles)(NewUser);