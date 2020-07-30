import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography
} from "@material-ui/core";

const Welcome = (props) => {
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Welcome to BlueInfy Pvt LTD. and ExtendedITArms Pvt LTD.
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Click on Edit or show details button.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default Welcome;
