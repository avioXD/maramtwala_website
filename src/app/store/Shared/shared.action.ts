import { createAction, props } from '@ngrx/store';

export const SET_LOGIN_DIALOG_SWITCH = '[shared state] switch login page'
export const REGISTER_SETPS = '[shared state] register steps'

export const setLoginDialogSwitch = createAction(
    SET_LOGIN_DIALOG_SWITCH,
    props<{toggle: boolean}>()
)
export const setRegitrationStepsAction = createAction(
    REGISTER_SETPS,
    props<{step: number}>()
)
 