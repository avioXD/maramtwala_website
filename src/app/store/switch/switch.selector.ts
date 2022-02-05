import { createFeatureSelector, createSelector } from "@ngrx/store"
import { SwitchState } from "./switch.state"

////// switch selector
export const SWITCH_STATE_NAME = 'switch'
const switchService = createFeatureSelector<SwitchState>(SWITCH_STATE_NAME)


export const getSignupLogin_SwitchState = createSelector(switchService, (state)=>{
    return state.signup_login
})
export const getPlaces_SwitchState = createSelector(switchService, (state)=>{
    return state.places
})
export const getSubcatagories_SwitchState = createSelector(switchService, (state)=>{
    return state.subcatagories
})
export const getloginToSignup_SwitchState =  createSelector(switchService, (state)=>{
    return state.loginToSignUp
})
export const getSideMenu_SwitchState =  createSelector(switchService, (state)=>{
    return state.sidemenu
})
export const getSelectProvider_SwitchState =  createSelector(switchService, (state)=>{
    return state.selectProvider
})

