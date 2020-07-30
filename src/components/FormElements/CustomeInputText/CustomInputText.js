/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import classes from './inouttext.css'
import { TextField } from '@material-ui/core';
import { useField } from "formik";
import { Visibility } from '@material-ui/icons'
const CustomeInputText = (props) => {
    const [field, meta] = useField(props);
    const errorText = meta.error && meta.touched ? meta.error : '';
    const { visiblilitytoggler } =props
  return (
      <div className={classes.Input}>
        <TextField  autoComplete="off"  type={props.type} name={props.name}  helperText={errorText} style={{width : '20rem'}}  variant="outlined" label={props.label} error={meta.error && meta.touched} {...field}/>
        {props.visibilityicon === 'true'?<div onClick={visiblilitytoggler} className={classes.Icon}><Visibility color='primary'/></div> : null}
      </div>
  );
};
export default CustomeInputText;

//style={{width : props.width? props.width : '20rem'}}