import {
    MENU_VIEW,
    MENU_GO_TO
} from '../constants/ActionTypes';

import {
    COACH_ROUTE,
    TEACHER_ROUTE
} from '../constants/ROUTE_URLS';

const initialState = {
    activeItem: undefined,
    menuItems:[
        {
            roleId: 1,
            name: "Coach",
            url: COACH_ROUTE
        },
        {
            roleId: 2,
            name: "Teacher",
            url: TEACHER_ROUTE
        }
    ]
};

export default function userMenu(state = initialState, action) {
    switch (action.type) {
        case MENU_VIEW:
            return state;
        case MENU_GO_TO:
            return {...state, activeItem: action.payload};
        default:
            return state;
    }
}