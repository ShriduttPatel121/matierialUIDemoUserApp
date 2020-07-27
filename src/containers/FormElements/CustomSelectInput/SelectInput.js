import React from "react";
import { FormControl, InputLabel, Select, MenuItem, withStyles } from '@material-ui/core';
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

    const [field] = useField(props);
    const { classes } = props;
  return (
    <FormControl variant="outlined" className={classes.selecter}>
      <InputLabel className={classes.selecterLabel}>Is Manager?</InputLabel>
      <Select
        {...field}
        label="Is Manager?"
        fullWidth
        defaultValue='false'
      >
        <MenuItem  value='true'>True</MenuItem>
        <MenuItem selected value='false'>False</MenuItem>
      </Select>
    </FormControl>
  );
};
export default  withStyles(styles)(SelectInput);
