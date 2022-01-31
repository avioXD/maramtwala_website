import { createAction, props } from '@ngrx/store';

export const  SET_USER_LOCATION = '[User] set current location'
export const SET_AUTH_USER = '[shared state] auth token services'
export const SET_AUTH_ISLOGIN = '[shared state] os logged in? '

export const setUserCurrentLocation = createAction(
  SET_USER_LOCATION,
  props<{location: {place: string, lat: number, lon: number}}>()
    )
export const setAuthUserService = createAction(
      SET_AUTH_USER,
      props<{user_data: any}>()
  )
 
export const setUserLogedinState = createAction(
  SET_AUTH_ISLOGIN,
  props<{islogin:boolean}>()
)