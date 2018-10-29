import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetail from './components/projects/ProjectDetail';
import SignInAuth from './components/auth/SignInAuth';
import SignUpAuth from './components/auth/SignUpAuth';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/project/:id" component={ProjectDetail} />
        <Route path="/signin" component={SignInAuth} />
        <Route path="/signup" component={SignUpAuth} />
    </Switch>
)

export default Routes