import React from "react";
import { FormControl, InputLabel, Select, MenuItem, FormHelperText,withStyles } from '@material-ui/core';
import { useField } from "formik";

const styles = {
    selecter : {
        width : '20rem',
        margin : 'auto',
        display : 'block',
        padding : '10px'
    },
    selecterLabel : {
        padding : '13px 15px'
    }
}

const SelectInput = (props) => {

    const [field, meta] = useField(props);
    const errorText = meta.error && meta.touched ? meta.error : '';
    const { classes } = props;
  return (
    <FormControl variant="outlined" className={classes.selecter} error={meta.error && meta.touched}>
      <InputLabel className={classes.selecterLabel}>{props.label}</InputLabel>
      <Select
        {...field}
        label={props.label}
        fullWidth
      >
        {props.options.map(option =>  <MenuItem key={option.value}  value={option.value}>{option.label}</MenuItem>)}
      </Select>
      <FormHelperText>{errorText}</FormHelperText>
    </FormControl>
  );
};
export default  withStyles(styles)(SelectInput);
