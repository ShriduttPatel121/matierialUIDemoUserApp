import React, { Component } from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { Route, Switch, Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom';
import NewUser from '../containers/NewUsers/NewUsers';
import AllUsers from '../containers/AllUsers/AllUsers';
import YourUser from '../containers/YourUsers/YourUsers';
import classes from './Navigation.css';
class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value : 0
        }
        if (window.location.href.includes('/Managers')) {
            this.state.value = 0;
        } else if (window.location.href.includes('/your-employees')) {
            this.state.value = 1;
        } else if (window.location.href.includes('/new-user')) {
            this.state.value = 2;
        }
        console.log(window.location.href)
    }
    state= {
        value : null
    }
    handleChange = (event, newValue) => {
        this.setState({value : newValue});
    }
    render() {
        let navBar = (
            <AppBar variant="elevation" position="fixed">
                    <Tabs value={this.state.value} onChange={this.handleChange} aria-label="simple tabs example">
                            <Tab  style={{textTransform : 'capitalize'}} component={Link} to="/Managers" label="Managers"></Tab>
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
                <main className={classes.Main}>
                    {routes}
                </main>
            </React.Fragment>
        );
    }
}
export default Navigation;