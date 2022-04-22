import {UserState} from "../reducers/UserReducer";

export type SharedAction = {type: "SIGN_UP  LOGIN  SIGN_OUT\n", payload: string}
type signupAction = {type: "SIGN_UP", payload: any }
type loginAction = {type: "LOGIN", payload: any}
type logoutAction = {type: "SIGN_OUT", payload: string}

export type UserAction = signupAction| loginAction|  logoutAction;

/**
 * SIGN UP NEW USER
 *
 * @param userState:string user name, pass, id
 * @return {dispatch} Type + payload.
 */
export function signup(userState: UserState):signupAction {
    return {
        type: "SIGN_UP",
        payload: userState,
    };
}

/**
 * LOGIN EXIST USER
 *
 * @param userState:string user name, pass, id
 * @return {dispatch} Type + payload.
 */
export function login(userState: UserState):loginAction {
    return {
        type: "LOGIN",
        payload: userState,
    };
}

/**
 * LOG OUT THE USER
 *
 * @return {dispatch} Type + payload.
 */
export function logout():logoutAction {
    return {
        type: "SIGN_OUT",
        payload: '',
    };
}