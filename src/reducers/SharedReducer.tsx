// ALL THE GLOBAL STYLE VARIABLES THAT INCLUDE ALL THE SYSTEM
import {SharedAction} from "../actions/SharedAction";

export interface SharedState {
    theme: string
}

const initState = {
    theme: "light",
};

const SharedReducer = (state: SharedState = initState, action:SharedAction) => {
    switch (action.type) {
        case "SET_THEME":
            return {
                ...state,
                theme: action.payload,
            };

        default:
            return state;
    }
};

export default SharedReducer;