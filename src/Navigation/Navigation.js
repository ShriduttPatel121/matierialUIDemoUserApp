import React, { Component } from 'react';
import { AppBar, Tabs, Tab, Typography, Box } from '@material-ui/core';
import NavTab from './NavTab/NavTab';
import classes from './Navigation.css'
class Navigation extends Component {
    state= {
        value : 0
    }
    handleChange = (event, newValue) => {
        this.setState({value : newValue});
    }
    render() {
        return (
            <div >
                <AppBar variant="elevation" position="fixed">
                    <Tabs value={this.state.value} onChange={this.handleChange} aria-label="simple tabs example">
                            <Tab variant="" label="Managers"></Tab>
                            <Tab label="Your Employees"></Tab>
                            <Tab label="New Employees/Manager"></Tab>
                            <Tab style={{marginLeft: 'auto'}} label='Logout'></Tab>
                    </Tabs>
                </AppBar>
            </div>
        );
    }
}
export default Navigation;