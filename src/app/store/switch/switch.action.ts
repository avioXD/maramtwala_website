



//// switch actions

import { createAction, props } from "@ngrx/store"

export const SWITCH_STATE = '[shared state] switch state'

export const setSignuploginSwitch = createAction(
    '[shared state] loginsignup',
    props<{state: boolean}>()
)

export const setPlacesSwitch = createAction(
    '[shared state]  place',
    props<{state: boolean}>()
)

export const setSubCategoriesSwitch = createAction(
    '[shared state] subCategory',
    props<{state: boolean}>()
)
export const setLoginToSignupSwitch = createAction(
    '[shared state] logintosignup',
    props<{state: boolean}>()
)
export const setSideMenuSwitch = createAction(
    '[shared state] sidemenu',
    props<{state: boolean}>()
)
export const setSelectProviderSwitch = createAction(
    '[shared state] select provider',
    props<{state: boolean}>()
)