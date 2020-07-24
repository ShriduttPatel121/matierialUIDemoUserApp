import React, { Component } from 'react';
import { AppBar, Tabs, Tab, Typography, Box } from '@material-ui/core';
import { Route, Switch, Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom';
import NewUser from '../containers/NewUsers/NewUsers';
import AllUsers from '../containers/AllUsers/AllUsers';
import YourUser from '../containers/YourUsers/YourUsers';
class Navigation extends Component {
    state= {
        value : 0
    }
    handleChange = (event, newValue) => {
        this.setState({value : newValue});
    }
    render() {
        let navBar = (
            <AppBar style={{backgroundColor : '#1976d2'}} variant="outlined" position="fixed">
                    <Tabs value={this.state.value} onChange={this.handleChange} aria-label="simple tabs example">
                            <Tab style={{textTransform : 'capitalize'}} component={Link} to="/Managers" label="Managers"></Tab>
                            <Tab style={{textTransform : 'capitalize'}} component={Link} to="/your-employees" label="Your Employees"></Tab>
                            <Tab style={{textTransform : 'capitalize'}} component={Link} to="/new-user" label="New user"></Tab>
                            <Tab  style={{marginLeft: 'auto',textTransform : 'capitalize'}} label='Logout'></Tab>
                    </Tabs>
                </AppBar>
        );
        
        let routes = (
            <Switch>
                <Route path="/Managers" component={AllUsers}/>
                <Route path="/your-employees" component={YourUser}/>
                <Route path="/new-user" component={NewUser}/>
                <Redirect to="/Managers"/>
            </Switch>
        );
        return (
            <React.Fragment>
                {navBar}
                <main>
                    {routes}
                </main>
            </React.Fragment>
        );
    }
}
export default Navigation;