// USER STATE MANAGEMENT REDUCER

import {UserAction} from "../actions/UserActions";

export interface UserState {
    userName: string,
    userPassword: string,
    userId: string
}

const initState = {
    userName: '',
    userPassword: '',
    userId: ''
};

const QueryReducer = (state: UserState = initState, action:UserAction) => {
    switch (action.type) {
        case "SIGN_UP":
            return {
                ...state,
                userName: action.payload.userName,
                userPassword: action.payload.userPassword,
                userId: action.payload.userId,
            };


        case "LOGIN":
            return {
                ...state,
                userName: action.payload.userName,
                userPassword: action.payload.userPassword,
                userId: action.payload.userId,
            };

        case "SIGN_OUT":
            return {
                ...state,
                userName: '',
                userPassword: '',
                userId: ''
            };


        default:
            return state;
    }
};

export default QueryReducer;