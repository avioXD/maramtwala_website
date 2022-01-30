import { createReducer, on } from '@ngrx/store';
import { setAuthTokenService, setUserCurrentLocation, setUserLogedinState } from './user.action';
import { User_initialstate } from './user.state';


const _userReducer = createReducer(
    User_initialstate,
    on(setUserCurrentLocation, (state, action)=>{
         return{
             ...state,
              location: action.location  
         }
    }),
    on(setAuthTokenService,(state, action)=>{
        return{
            ...state,
             auth_token: action.token 
        }
   }),
   on(setUserLogedinState,(state, action)=>{
    return{
        ...state,
         isLogin: action.islogin
    }
})
   
)

export function UserReducer(state, action){
    return _userReducer(state,action)
}