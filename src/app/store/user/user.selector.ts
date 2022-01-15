import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.state';

export const USER_STATE_NAME = 'user'

const getUserState = createFeatureSelector<UserState>(USER_STATE_NAME)

export const getUserLocation = createSelector(getUserState, (state)=>{
    return state.location
})