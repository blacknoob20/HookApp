import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AboutPage } from './AboutPage';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/about" component={AboutPage} />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/" component={HomePage} />
                </Switch>
            </div>
        </Router>
    )
}
