import { createReducer, on } from '@ngrx/store';
import { setUserCurrentLocation } from './user.action';
import { User_initialstate } from './user.state';


const _userReducer = createReducer(
    User_initialstate,
    on(setUserCurrentLocation, (state, action)=>{
         return{
             ...state,
              location: action.location  
         }
        
    })
)

export function UserReducer(state, action){
    return _userReducer(state,action)
}