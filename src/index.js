import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, compose, createStore } from "redux";
import {Provider} from "react-redux";
import { AppContainer } from "react-hot-loader";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

import rootReducer  from "./reducers";

import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";

const history = createBrowserHistory();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer(history),
    composeEnhancer(
        applyMiddleware(
            routerMiddleware(history),
        ),
    ),
);

const render = () => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <App history={history} />
            </Provider>
        </AppContainer>,
        document.getElementById("react-root")
    )
};

render();

// Hot reloading
if (module.hot) {
    // Reload components
    module.hot.accept("./containers/App", () => {
        render()
    });

    // Reload reducers
    module.hot.accept("./reducers", () => {
        store.replaceReducer(rootReducer(history))
    });
}

registerServiceWorker();
