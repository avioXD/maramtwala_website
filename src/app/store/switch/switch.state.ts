///// Modal switch state
export interface SwitchState{
    signup_login: boolean,
    places: boolean,
    subcatagories: boolean,
    loginToSignUp: boolean,
    sidemenu: boolean
}

export const switch_init: SwitchState = {
    signup_login: false,
    places: false,
    subcatagories: false,
    loginToSignUp: true,
    sidemenu: false
}