import React from 'react';
import { Card, CardActionArea, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import { Edit, Details } from '@material-ui/icons'
const Employee = (props) =>{
    return(
        <Card>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Shridutt
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            React developer
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
          <Edit />
          < Details />
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    );
};
export default Employee;