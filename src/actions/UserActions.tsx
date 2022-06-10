import {UserState} from "../reducers/UserReducer";
import {joinQuery, QueryState} from "../reducers/QueryReducer";

export type SharedAction = {type: "SIGN_UP  LOGIN  SIGN_OUT\n", payload: string}
type signupAction = {type: "SIGN_UP", payload: any }
type loginAction = {type: "LOGIN", payload: any}
type logoutAction = {type: "SIGN_OUT", payload: string}

export type UserAction = signupAction| loginAction|  logoutAction;

let NODE_SERVER = "http://localhost:8080/";


/**
 * SIGN UP NEW USER
 *
 * @param userState:string user name, pass, id
 * @return {dispatch} Type + payload.
 */

export const  signup = (userState: UserState): (dispatch: any) => Promise<void> =>{
    const body = {userName: userState.userName, password: userState.userPassword};
    const path = NODE_SERVER + 'api/signup'
    return async dispatch => {
        await fetch(path, {
            method: 'post',
            body: JSON.parse(JSON.stringify(body))
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (res:{message: string, queryId: string}) {
                dispatch({ type: "SIGN_UP",
                    payload: {...userState}
                });
            })
            .catch(function (error) {
                throw error;
            });
    }
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
