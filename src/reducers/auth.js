import {
    LOGIN,
    LOGOUT
} from '../constants/ActionTypes'

const initialState = {
    isAuthenticated: false
};

export default function userMenu(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {...state, isAuthenticated: true};
        case LOGOUT:
            return {...state, isAuthenticated: false};
        default:
            return state;
    }
}