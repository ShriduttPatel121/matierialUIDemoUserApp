import React, { Component } from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { Route, Switch, Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom';
import NewUser from '../NewUsers/NewUsers';
import AllUsers from '../AllUsers/AllUsers';
import YourUser from '../YourUsers/YourUsers';
import Login from '../Login/Login';
import { connect } from 'react-redux'
import classes from './Navigation.css';
class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value : 2
        }
        if (window.location.href.includes('/Managers')) {
            this.state.value = 0;
        } else if (window.location.href.includes('/your-employees')) {
            this.state.value = 1;
        } else if (window.location.href.includes('/new-user')) {
            this.state.value = 2;
        }
    }
    
    handleChange = (event, newValue) => {
        this.setState({value : newValue});
    }
    render() {
        let tabs = (
            <Tabs value={this.state.value} onChange={this.handleChange} aria-label="simple tabs example">
                <Tab  style={{textTransform : 'capitalize'}} component={Link} to="/Managers" label="Managers"></Tab>
                <Tab style={{textTransform : 'capitalize'}} component={Link} to="/your-employees" label="Your Employees"></Tab>
                <Tab style={{textTransform : 'capitalize'}} component={Link} to="/new-user" label="New user"></Tab>
                <Tab  style={{marginLeft: 'auto',textTransform : 'capitalize'}} component={Link} to='/Login' label='Logout'></Tab>
            </Tabs>
        );

        let routes = (
            <Switch>
                <Route path="/Managers" component={AllUsers}/>
                <Route path="/your-employees" component={YourUser}/>
                <Route path="/new-user" component={NewUser}/>
                <Redirect to="/new-user"/>
            </Switch>
        );

        if (!this.props.isAutneticated) {
            tabs = (
                <Tabs value={0} aria-label="simple tabs example">
                    <Tab style={{marginLeft: 'auto',textTransform : 'capitalize'}} label="Login"></Tab>
                </Tabs>
            );
            
            routes = (
                <Switch>
                    <Route path='/Login' component={Login}/>
                    <Redirect to="/Login"/>
                </Switch>
            );
        }
        let navBar = (
            <AppBar variant="elevation" position="fixed">
                {tabs}
            </AppBar>
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

const mapStateToProps = state => {
    return {
        isAutneticated : state.isAutneticated
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);