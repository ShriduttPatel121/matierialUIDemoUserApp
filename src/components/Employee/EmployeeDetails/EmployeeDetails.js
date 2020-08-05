import React from 'react';
import { Card, TextField, CardContent, CardActions} from '@material-ui/core';
import { Cancel } from '@material-ui/icons'
const EmployeeDetails = (props) =>{
    const { selectedEmployeeDetails } = props
    return(
        <Card>
            <CardContent style={{position : 'relative'}}>
            <CardActions >
                <span ><Cancel onClick={props.disableShowDetails} style={{position : 'absolute', top : '2%', right : '5%'}} color='secondary' /></span>
            </CardActions>
                <div style={{marginBottom : '1rem'}}>
                    <TextField
                    label="Username"
                    defaultValue={selectedEmployeeDetails.name}
                    fullWidth
                    InputProps={{
                        readOnly: true,
                    }}
                    />
                </div>

                <div style={{marginBottom : '1rem'}}>
                    <TextField
                    label="Email"
                    defaultValue={selectedEmployeeDetails.email}
                    fullWidth
                    InputProps={{
                        readOnly: true,
                    }}
                    />
                </div>

                <div style={{marginBottom : '1rem'}}>
                    <TextField
                    label="Is Manager"
                    defaultValue={selectedEmployeeDetails.isAdmin}
                    fullWidth
                    InputProps={{
                        readOnly: true,
                    }}
                    />
                </div>
                <div style={{marginBottom : '1rem'}}>
                    <TextField
                        label="Designation"
                        defaultValue={selectedEmployeeDetails.designation}
                        fullWidth
                        InputProps={{
                            readOnly: true,
                        }}
                        
                    />
                </div>
            </CardContent>       
        </Card>
    );
};
export default EmployeeDetails;