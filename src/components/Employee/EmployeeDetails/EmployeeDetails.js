import React from 'react';
import { Card, Typography,CardActionArea, CardContent, } from '@material-ui/core';
const EmployeeDetails = (props) =>{
    return(
        <Card>
            <CardActionArea>
                <CardContent >
                    <Typography variant='h5'>
                        UserName : Shridutt Patel
                    </Typography>
                    <Typography variant='h5'>
                        Email : shridutt270@gmail.com
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};
export default EmployeeDetails;