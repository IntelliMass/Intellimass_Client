
export type SharedAction = {type: "SET_THEME", payload: string}

/**
 * Change theme fom light mode to dark mode and back
 *
 * @param newTheme:string the new position of the theme
 * @return {dispatch} Type + payload.
 */
export function changeTheme(newTheme:string):SharedAction {
    if(newTheme === 'light'){
        return {
            type: "SET_THEME",
            payload: 'dark',
        };
    } else {
        return {
            type: "SET_THEME",
            payload: 'light',
        };
    }
}