import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { AboutPage } from './AboutPage';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { NavBar } from './NavBar';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <Switch>
                    <Route exact path="/about" component={AboutPage} />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/" component={HomePage} />
                    <Redirect to="/" />
                    {/* <Route component={HomePage} /> */}
                </Switch>
            </div>
        </Router>
    )
}
