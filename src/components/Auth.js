import React from 'react';
import * as PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {Button} from 'react-bootstrap';

const Auth = props => {
    return (
        <div className="login-panel">
            <Button variant="primary"
                    onClick={() => {
                        props[props.isAuthenticated ? "logout" : "login"](() => {
                        });
                    }}
            >
                <Link to={props.isAuthenticated ? "/" : "/dashboard"}>
                    {props.isAuthenticated ? "logout" : "login"}
                </Link>
            </Button>
        </div>
    )
};

Auth.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired
};

export default Auth;
