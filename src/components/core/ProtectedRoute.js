import React from "react";
import {Route, Redirect} from "react-router-dom";

const ProtectedRoute = ({isAuthenticated, component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (isAuthenticated) {
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    );
                }
            }}
        />
    );
};

export default ProtectedRoute;
