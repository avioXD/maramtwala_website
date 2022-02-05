import { createReducer, on } from "@ngrx/store"
import {   setLoginToSignupSwitch, setPlacesSwitch, setSelectProviderSwitch, setSideMenuSwitch, setSignuploginSwitch, setSubCategoriesSwitch } from "./switch.action"
import { switch_init } from "./switch.state"



/////// switch reducer
const _switchReducer = createReducer(
    switch_init,
    on(setSignuploginSwitch,(state, action)=>{
        return {
            ...state,
            signup_login: action.state
        }
    }),
    on(setPlacesSwitch,(state, action)=>{
        return {
            ...state,
            places: action.state
        }
    }),
    on(setSubCategoriesSwitch,(state, action)=>{
        return {
            ...state,
            subcatagories: action.state
        }
    }),
    on(setLoginToSignupSwitch,(state, action)=>{
        return {
            ...state,
            loginToSignUp: action.state
        }
    }),
    on(setSideMenuSwitch,(state, action)=>{
        return {
            ...state,
            sidemenu: action.state
        }
    }),
    on(setSelectProviderSwitch,(state, action)=>{
        return {
            ...state,
            selectProvider: action.state
        }
    }),
    
)

export function SelectSwitchReducer(state, action){
    return  _switchReducer(state, action)
}
