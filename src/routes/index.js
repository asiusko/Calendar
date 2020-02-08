import React from 'react';
import * as PropTypes from "prop-types";
import { Route, Switch } from 'react-router';

import Auth from "../containers/Auth";
import MainUserMenu from '../containers/MainUserMenu';
import Dashboard from "../components/Dashboard";
import ProtectedRoute from "../containers/ProtectedRoute";
import Coach from "../components/Coach";
import TeacherContainer from "../containers/TeacherContainer";
import NotFound from "../components/NotFound";
import Welcome from "../components/Welcome";

import {
    DASHBOARD,
    COACH_ROUTE,
    TEACHER_ROUTE
} from '../constants/ROUTE_URLS';

const Routes = props => (
    <div>
        <Auth />
        {props.isAuthenticated && <MainUserMenu/>}
        <Switch>
            <Route exact path="/" component={Welcome}/>
            <ProtectedRoute exact path={DASHBOARD} component={Dashboard}/>
            <ProtectedRoute exact path={COACH_ROUTE} component={Coach}/>
            <ProtectedRoute exact path={TEACHER_ROUTE} component={TeacherContainer}/>
            <Route path="*" component={NotFound}/>
        </Switch>
    </div>
);

Routes.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    activeItem: PropTypes.number
};

export default Routes;
