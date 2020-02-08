import React from 'react';
import * as PropTypes from "prop-types";
import { ConnectedRouter } from 'connected-react-router'
import Routes from '../routes';

const App = props => (
    <div>
        <ConnectedRouter  history={props.history}>
            <Routes
                activeItem={props.activeItem}
                isAuthenticated={props.isAuthenticated}
            />
        </ConnectedRouter>
    </div>
);

App.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    activeItem: PropTypes.number,
    history: PropTypes.object
};

export default App;
