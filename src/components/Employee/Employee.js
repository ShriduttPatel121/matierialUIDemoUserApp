import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import classes from './Employee.css';
const Employee = (props) => {
  return (
    <Card className={classes.Card}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.Name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.Designation}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Edit onClick={props.editClick}/>
        <Button size="small" color="primary">
          Show Details
        </Button>
      </CardActions>
    </Card>
  );
};
export default Employee;
