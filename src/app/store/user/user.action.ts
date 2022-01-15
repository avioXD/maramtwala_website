import { createAction, props } from '@ngrx/store';

export const  SET_USER_LOCATION = '[User] set current location'

export const setUserCurrentLocation = createAction(
  SET_USER_LOCATION,
  props<{location: {place: string, lat: number, lon: number}}>()
    )