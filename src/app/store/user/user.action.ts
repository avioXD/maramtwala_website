import { createAction, props } from '@ngrx/store';
import { LocationState } from './user.state';

/// user state
export const SET_USER_STATE = '[Shared State]  set user '

export const setUser_location = createAction(
  '[Shared State]  set user location',
  props<{state: LocationState}>()
)
export const setUser_token = createAction(
  '[Shared State]  set user token',
  props<{state: string}>()
)
export const setUser_isLogin = createAction(
  '[Shared State]  set user isLogin  ',
  props<{state: boolean}>()
)
export const setUser_exist = createAction(
  '[Shared State]  set user exist',
  props<{state: boolean}>()
)
